const BASE_URL = "http://localhost:3000/api/helicopters";

const baseRequest = async({ urlPath = "", method = "GET", body = null }) => {
    try {
        const reqParams = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        };

        if (body) {
            reqParams.body = JSON.stringify(body);
        }

        return await fetch(`${BASE_URL}${urlPath}`, reqParams);
    } catch (error) {
        console.error("HTTP ERROR: ", error);
    }
};

const getAllHelicopters = async() => {
    const rawResponse = await baseRequest({ method: "GET" });
    return await rawResponse.json();
};

const getHelicopterById = async(id) => {
    const rawResponse = await baseRequest({ urlPath: `/${id}`, method: "GET" });
    return await rawResponse.json();
};

const searchHelicopters = async(key) => {
    const rawResponse = await baseRequest({
        urlPath: `?searchKey=${key}`,
        method: "GET",
    });
    return await rawResponse.json();
};

const postHelicopter = (body) => baseRequest({ method: "POST", body });

const deleteHelicopter = (id) => baseRequest({ urlPath: `/${id}`, method: "DELETE" });

const editHelicopter = (id, body) => baseRequest({ urlPath: `/${id}`, method: "PUT", body });

export {
    getAllHelicopters,
    searchHelicopters,
    postHelicopter,
    deleteHelicopter,
    editHelicopter,
    getHelicopterById,
};