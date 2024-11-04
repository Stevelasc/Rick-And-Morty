const Paginator = ({page, setPage, info}) => {

    const goNext = () => {
        setPage(page + 1);
    }

    const goBack = () => {
        if(info.prev) {
            setPage(page - 1);
        }
        console.log(page);
    }

    return (
        <>
        <nav className="d-flex justify-content-center">
                    <ul className="pagination">
                    <li className="page-item"><a class="page-link" onClick={goBack} href="#">Previous</a></li>
                    <li className="page-item disabled" ><a class="page-link" 
                    href="">{page}</a></li>
                    <li className="page-item"><a class="page-link" onClick={goNext} href="#">Next</a></li>
                    </ul>
                </nav>

        </>
    );    
}


export default Paginator;