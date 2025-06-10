import express from "express"
import cors from "cors"
import multer from "multer";
import XLXS from "xlsx"
import path from "path"
import { fileURLToPath } from "url";
import nodemailer from "nodemailer"
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(express.json());
app.use(cors());

const upload=multer({dest:"uploads/"});
app.post("/upload",upload.single("file"),async (req,res)=>{
    try{
        const filepath=path.join(__dirname,req.file.path);
        

        const workbook=XLXS.readFile(filepath);
        const sheetName=workbook.SheetNames[0];
        const workSheet=workbook.Sheets[sheetName];
        const data=XLXS.utils.sheet_to_json(workSheet);
        console.log("Extracted Data:",data);
        let emailArr=[];
        data.forEach((row)=>{
            emailArr.push(row.Email);
        });
        console.log("Email Arr:",emailArr);

        const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            auth:{
                user:'syntaxmajdur404@gmail.com',
                pass:'zues amtp witl attf '
            }
        })

        const mailOptions={
            from:'"Nikhil" <syntaxmajdur404@gmail.com>',
            to:emailArr,
            subject:req.body.subject,
            text:req.body.body,
            
        }

        
            const info=await transporter.sendMail(mailOptions);
            console.log("Message sent:",info.messageId);
        
        return res.status(200).json({
            message:"File parsed successfully"

        })
        
    }
    catch(error){
        console.log(error.message);
    }
})
if(process.env.NODE_ENV=="production"){
    const dirPath=path.resolve();
    console.log(dirPath);
    app.use(express.static("./Frontend/dist"));
    app.get(/(.*)/,(req,res)=>{
        res.sendFile(path.resolve(dirPath,"./Frontend/dist","index.html"));
    });
}

app.listen(4002,()=>{
    console.log("Server is running fine at port 4002");
})









