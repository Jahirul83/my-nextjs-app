const DynamicPage = ({ params,searchParams }) => {
    console.log(searchParams);
    return (
        <div>
            <h3>this is dynamic DynamicPage: {params.id}</h3>
            <h2>search by category : {searchParams.category}</h2>
            <h2>search price : {searchParams.price}</h2>
        </div>
    );
};

export default DynamicPage;