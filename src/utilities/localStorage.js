const getStoredApplication = () => {
    const storedApp = localStorage.getItem('job-application');
    if(storedApp) {
        return JSON.parse(storedApp);
    }
    return [];
}

const saveJobApplication = (id) => {
    const storedApp = getStoredApplication();
    const isExists = storedApp.find((saId) => saId === id);
    if(!isExists) {
        storedApp.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedApp));
        return true;
    }
}

export { saveJobApplication, getStoredApplication }