

const Button = ({children, backgroundColor})=>{
    return <button style={{backgroundColor}}>{children}</button>;
};

const Alert = ({children})=>{
    return(
        <>
        <div className="Overlay"/>
        <div clssName="Alert">{children}</div>
        </>

    );
}

const DeleteButton = ()=>{
    return <Button backgroundColor="red">Delete</Button>
};

function AlertOverlay(){
    return(
        <div className="App">
            <header>Little Lemon Restaurant</header>
            <Alert>
                <h4>Delete Account</h4>
                <p>
                    Are you sure you want to proceed? You will sll your delicious receipies!
                </p>
                <DeleteButton/>
            </Alert>
            
        </div>
    )
}
export default AlertOverlay;