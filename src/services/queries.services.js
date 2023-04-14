import axiosInstance from "@/utils/axios";

class Queries {
    getUserDataById(id) {
        return axiosInstance.get(`user/${id}`);
    }

    putUpdateUserData(id, body) {
        return axiosInstance.put(`user/${id}`, body);
    }
}

export default new Queries();
