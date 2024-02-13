import axios from "axios";

//api요청에 중복적으로 사용되는 부분 인스턴스로 만들어두기
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params:{
    api_key:"529e5b5168628356ca534aa3580fcf19",
    language: "ko-KR",
  },
})

export default instance;