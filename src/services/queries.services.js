import axiosInstance from "@/utils/axios";

class Queries {
    getUserById(id) {
        return axiosInstance.get(`user/${id}`);
    }
}

export default new Queries();
