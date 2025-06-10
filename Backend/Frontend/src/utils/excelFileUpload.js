import axios from "axios";

const excelFileUpload=async(file,subject,body)=>{
    if(!file){
        throw new Error("No file selected");
    }
    const validTypes = [
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', // .xlsx
        'application/vnd.ms-excel' // .xls
      ];

      if(!validTypes.includes(file.type)){
        throw new Error ("Only .xls or .xlsx is allowed")
      }
    const maxSizeMB=5;
    if(file.size>=maxSizeMB*1024*1024){
        throw new Error (`Max allowed size is ${maxSizeMB} MB`);
    }
    const formData=new FormData();
    formData.append('file',file);
    formData.append('subject',subject);
    formData.append('body',body);
    try{
        const res=await axios.post("https://aues.onrender.com/",formData,
            {headers:{
                'Content-Type':"multipart/form-data"
            }}
        );
        return res;
    }
    catch(error){
        throw new Error(error.response?.data?.error || "Upload Failed");
    }

}

export default excelFileUpload;