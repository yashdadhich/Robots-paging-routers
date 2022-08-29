import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import CardList from "./CardList";
import Searchbox from './Searchbox';


const Paging = () => {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [pageCount, setPageCount] = useState(0);
    const [allDetails, setAlldetails] = useState([]);
    const [issearch, setIssearch] = useState(false);

    let limit = 4;

    useEffect(() => {
        const getusers = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/users?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setPageCount(Math.ceil(total / limit));
            setRobots(data);

        };

        getusers();
        alldetails();
    }, []);

    const alldetails =()=> {
            fetch('https://jsonplaceholder.typicode.com/users')
              .then(response=> response.json())
              .then(users => {setAlldetails(users)});
            // console.log(count)
    }

    
    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
        
        if(searchfield==="") {
            setIssearch(true)
        }

        else{
            setIssearch(false);}

         setIssearch(true)
         
    }
    
    const filteredRobots = robots?.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
     
    const filtereDetails = allDetails?.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })


    const fetchUsers = async (currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/users?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        // console.log(data);
        return data;
    };


    const handlePageClick = async (data) => {
        console.log(data.selected);
        let currentPage = data.selected + 1;
        const usersFormServer = await fetchUsers(currentPage);
        setRobots(usersFormServer);
        console.log(robots);
    };

    return !robots.length ?
        <h1>Loading</h1> :
        (
            <>
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <Searchbox searchChange={onSearchChange} />
                  { !issearch &&<CardList robots={filteredRobots} />}
                  { issearch&&<CardList robots={filtereDetails} />} 
                </div>

                <div>
                    <ReactPaginate
                        previousLabel={"previous"}
                        nextLabel={"next"}
                        breakLabel={"..."}
                        pageCount={pageCount}
                        marginPagesDisplayed={2}
                        pageRangeDisplayed={3}
                        onPageChange={handlePageClick}
                        containerClassName={"pagination justify-content-center"}
                        pageClassName={"page-item"}
                        pageLinkClassName={"page-link"}
                        previousClassName={"page-item"}
                        previousLinkClassName={"page-link"}
                        nextClassName={"page-item"}
                        nextLinkClassName={"page-link"}
                        breakClassName={"page-item"}
                        breakLinkClassName={"page-link"}
                        activeClassName={"active"}
                    />
                </div>
            </>
        )
}


export default Paging;

