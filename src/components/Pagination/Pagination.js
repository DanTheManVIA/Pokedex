import "./Pagination.css"
export default function Pagination({nextApiUrl, previousApiUrl, fetchDataAction}){
    const handleNextUrl = () => {
        fetchDataAction({url: nextApiUrl});
    };
    
    const handlePreviousUrl = () => {
        fetchDataAction({url: previousApiUrl});
    }
    
    return (
        <div className="pagination">
            <button onClick={handlePreviousUrl} disabled={!previousApiUrl}>Previous</button>
            <button onClick={handleNextUrl} disabled={!nextApiUrl}>Next</button>
        </div>   
    );
}