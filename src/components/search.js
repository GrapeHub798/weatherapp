import { useState } from "react";
import {Col, Form, Button} from "react-bootstrap";

const Search = ({sendSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const doSearch = () => {
        if (!searchTerm){
            return;
        }

        sendSearch(searchTerm);
    }


    return (
        <Col>
            <Form.Group className="ms-2">
                <Form.Control type="text" placeholder="City Name" onChange={(e) => setSearchTerm(e.target.value) } />
            </Form.Group>
            <Button className="mt-2 text-start" variant="primary" onClick={doSearch}>Search</Button>
        </Col>
    )
}

export default Search;