const adminAuth = (req,res,next)=>{
    console.log("admin Auth is getting checked!!");
    const token = "xyz";
    const isAdminAuthorized = token === "xyz";
    if(isAdminAuthorized)
    {
        next();
        
    }
    else{
        res.status(401).send("Unauthorized Request");
    }
};

const userAuth = (req,res,next)=>{
    console.log("admin Auth is getting checked!!");
    const token = "xyzsdbghffh";
    const isAdminAuthorized = token === "xyz";
    if(isAdminAuthorized)
    {
        next();
    }
    else{
        res.status(401).send("Unauthorized Request");
    }
};

module.exports = {
    adminAuth,
    userAuth
}