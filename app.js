 
    const root=ReactDOM.createRoot(document.querySelector("#container"));

    const heading1=React.createElement("h1",{id:"head1",className:"heading1",style:{color:"green"}},"head 2");
    const heading2=React.createElement("h1",{id:"head2",className:"heading2",style:{color:"blue"}},"head 3");
    const container2=React.createElement("div",{
        id:"container2"
    },[heading1,heading2]);
    root.render(container2);