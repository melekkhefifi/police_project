import React, {useEffect, useState} from "react";
import {Switch, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./footer";
import ListFinanceDataService from "../services/listFinance";
import ListInterieurDataService from "../services/listInterieur";



function ListInterieur() {
    const [listInterieur, setListInterieur] = useState([]);
    const [searchCIN, setSearchCIN] = useState("");

    useEffect(() =>{
        retrieveListInterieur();
    }, []);

    const onChangeSearchCIN = e =>{
        const searchCIN = e.target.value;
        setSearchCIN(searchCIN);
    };

    const retrieveListInterieur = () => {
        ListInterieurDataService.getAll()
            .then(response => {
                console.log(response.data);
                setListInterieur(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const refreshList = () => {
        retrieveListInterieur ();
    };

    const find = (query,  by) => {
        ListInterieurDataService.find(query, by)
            .then(response =>{
                console.log(response.data);
                setListInterieur(response.data.ListInterieur);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const findByCIN = () => {
        find(searchCIN, "cin");
    };

    return(
        <div>
            <div className="row">
                <div
                    className="input-group col-lg-4" >
                    <input
                        type ="text"
                        className="form-control"
                        placeholder="Search by CIN"
                        value={searchCIN}
                        onChange={onChangeSearchCIN}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByCIN} >
                            Search
                        </button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
}


export default ListInterieur;
