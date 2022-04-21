const config = {
    server: "https://exius.fly.dev",
    subjectTemplate: {
        "Endpoints":{
            "horizon":{"PUT" : true, "path":"root/subjectData${subjectId}", "PutTypes":["text/plain"], "MaxPut":300, "MaxPutSize":10*1024*1024},
        },
        "InitiateExpire":"Put",
        "ExpireDelta":10000000
    }
}
export default config