async function fetchData(datasource){
    let resource = await fetch(datasource).then(response => {
        if (response.status !== 200) { // bang operator - means "does not equal" (or a falsy value)
            throw new Error(`Danger Will Robinson! Here there be monstors! ERROR: ${response.status}`);
        }
        return response;
    })

    // if we get success then we can return back to our resource after we parse it into plain JS
    let dataset = await resource.json();

    return dataset[0];

}

export { fetchData };