const Student = () => {
    return (
        <div className="ttb">
            <div className="secpage">
                <h1 className="second">Students Details</h1>
                <button className="but1">Add new student</button>
            </div>
            <div className="table">
                <table style={{width:"70%"}}>
                    <tr style={{height:"80px"}}>
                        <th>S.NO</th>
                        <th>First</th>
                        <th>Last</th>
                        <th>Handle</th>
                    </tr>
                    <tr style={{height:"80px"}}>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr style={{height:"80px"}}>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr style={{height:"80px"}}>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                </table>
            </div>   
        </div>
    );
}

export default Student