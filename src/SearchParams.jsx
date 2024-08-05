import { useState, useEffect } from "react"
import useBreedList from "./useBreedList"
import Results from "./Results"
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"]

const SearchParams = () => {
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")
    const [pets, setPets] = useState([])
    const [breeds] = useBreedList(animal)

    useEffect(() => {
        requestPets()

    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    const requestPets = async () => {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`)

        const json = await res.json()

        setPets(json.pets)
    }

    return (
        <div className="search-params">
            <form onSubmit={e => {
                e.preventDefault()
                requestPets()
            }}>
                <label htmlFor="location">
                    Location
                    <input
                        id="location"
                        value={location} placeholder="Location"
                        onChange={(e) => setLocation(e.target.value)} />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        name="animal"
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value)
                            setBreed("")
                        }}>
                        <option />
                        {
                            ANIMALS.map(animal => {
                                return <option key={animal}>{animal}</option>
                            })
                        }
                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        name="breed"
                        id="breed"
                        disabled={!breeds.length}
                        value={breed}
                        onChange={e => setBreed(e.target.value)}>
                        <option />
                        {
                            breeds.map(breed => (
                                <option key={breed}>{breed}</option>
                            ))
                        }
                    </select>
                </label>
                <button>Submit</button>
            </form>
            <Results pets={pets} />
        </div>
    )
}

export default SearchParams