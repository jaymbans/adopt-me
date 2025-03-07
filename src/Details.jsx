import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useContext } from "react";

import AdoptedPetContext from "./AdoptedPetContext";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary";
import fetchPet from "../fetchPet";
import Carousel from "./Carousel";

const Details = () => {
    const { id } = useParams()
    const results = useQuery(["details", id], fetchPet)
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [_, setAdoptedPet] = useContext(AdoptedPetContext)

    if (results.isLoading) {
        return (
            <div className="loading-pane">
                <h2>Loading...</h2>
            </div>
        )
    }

    const pet = results.data.pets[0]

    return (
        <div className="details">
            <Carousel images={pet.images} />
            <h1>{pet.name}</h1>
            <h2>{pet.animal} - {pet.breed} - {pet.city}, {pet.state}</h2>
            <button onClick={() => setShowModal(true)}>Adopt {pet.name}</button>
            <p>{pet.description}</p>
            {
                showModal ?
                    (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {pet.name}?</h1>
                                <div className="buttons">
                                    <button onClick={() => {
                                        setAdoptedPet(pet)
                                        navigate('/')
                                    }}>Yes</button>
                                    <button onClick={() => setShowModal(false)}>
                                        No
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    ) : null
            }
        </div>
    )
};

function DetailsErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <Details {...props} />
        </ErrorBoundary>
    )
}

export default DetailsErrorBoundary;