export function checkIfKeyPresent(req: any,res: any,next: any){
    const authoriationHeaderValue = req.header('apiKey')
    const authoriationHeaderValue1 = req.headers['authorization']
    console.log(authoriationHeaderValue1);
    if(authoriationHeaderValue !== null && authoriationHeaderValue !== undefined){
        return next();
    }else{
        return res.json({'error':'Please Enter some value in header for api Key'})
    }
}

module.exports = {checkIfKeyPresent};