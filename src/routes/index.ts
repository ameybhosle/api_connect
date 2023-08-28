import { Router } from "express"
const route = Router()
// create user will send a post reuqest own profile according to user type
// read his own records apikey
// update his own records
// delete my records
const freePlanKey = "afef8d0c3791c7b86b69e94cdf56f014fb6e6cd5";
const normalPlanKey = "1331a7522826f7b1451b6e2069f788454b4270af"
const premiumPlanKey = "2dbf424638e28b677b5b6456be9d66d0fa7bd38d"

// authorization and authentication 
const dataUser = require("../data.json")

route.get("/readRecord", (req, res) => {
    const apiKey = req.header("apiKey")
    if (apiKey === freePlanKey) {
        return res.json({
            'data': {
                'first_name': dataUser['f_name'],
                'last_name': dataUser['l_name'],
                'address': dataUser['address']
            }
        })
    } else if (apiKey === normalPlanKey) {
        return res.json({
            'data': {
                'first_name': dataUser['f_name'],
                'last_name': dataUser['l_name'],
                'address': dataUser['address'],
                "Bank Details": {
                    "CRN No.": dataUser['Bank Details']['CRN No.'],
                    "Bank Name": dataUser['Bank Details']['Bank Name'],
                    "Account No.": dataUser['Bank Details']['Account No.']
                }
            }
        })
    } else if (apiKey === premiumPlanKey) {
        return res.json({
            'data': {
                'first_name': dataUser['f_name'],
                'last_name': dataUser['l_name'],
                'address': dataUser['address'],
                "Bank Details": {
                    "CRN No.": dataUser['Bank Details']['CRN No.'],
                    "Bank Name": dataUser['Bank Details']['Bank Name'],
                    "Account No.": dataUser['Bank Details']['Account No.']
                },
                "employeement": {
                    "Previous Company": dataUser['employeement']['Previous Company'],
                    "From Year": dataUser['employeement']['From Year'],
                    "To Year": dataUser['employeement']['To Year'],
                    "salary": dataUser['employeement']['salary']
                }
            }
        })
    } else {
        return res.json({ "error": "No such APIKEY Found" })
    }
})


route.post("/create", (req, res) => {
    const data = require('../data.json')
    const key = req.header('apiKey')
    if (key === freePlanKey) {
        const { name, lastName, address } = req.body;
        data['f_name'] = name
        data['address'] = address
        data['l_name'] = lastName
        return res.json({ 'message': 'User Created' })
    } else if (key === normalPlanKey) {
        const { name, lastName, address, crn_no, bank_name, account_no } = req.body;
        data['f_name'] = name
        data['address'] = address
        data['l_name'] = lastName
        data['Bank Details']['CRN No.'] = crn_no
        data['Bank Details']['Bank Name'] = bank_name
        data['Bank Details']['Account No.'] = account_no
        return res.json({ 'message': 'User Created' })
    } else if (key === premiumPlanKey) {
        const { name, lastName, address, crn_no, bank_name, account_no, worked, salary, from_year, to_year } = req.body;
        data['f_name'] = name
        data['address'] = address
        data['l_name'] = lastName
        data['Bank Details']['CRN No.'] = crn_no
        data['Bank Details']['Bank Name'] = bank_name
        data['Bank Details']['Account No.'] = account_no
        data['employeement']['Previous Company'] = worked
        data['employeement']['From Year'] = from_year
        data['employeement']['salary'] = salary
        data['employeement']['To Year'] = to_year
        return res.json({ 'message': 'User Created' })
    } else {
        return res.json({ 'error': 'Wrong Key passed' })
    }
})

route.put("/updateRecords", (req, res) => {
    const { name, lastName, address, crn_no, bank_name, account_no, worked, salary, from_year, to_year } = req.body;
    const apiKey = req.header("apiKey")
    if (apiKey === freePlanKey) {
        name !== undefined && name.length > 0 ? dataUser['f_name'] = name : null
        lastName !== undefined && lastName.length > 0 ? dataUser['l_name'] = lastName : null
        address !== undefined && address.length > 0 ? dataUser['address'] = address : null
        crn_no !== undefined && crn_no.length > 0 ? dataUser['Bank Details']['CRN No.'] = crn_no : null
    } else if (apiKey === normalPlanKey) {
        name !== undefined && name.length > 0 ? dataUser['f_name'] = name : null
        lastName !== undefined && lastName.length > 0 ? dataUser['l_name'] = lastName : null
        address !== undefined && address.length > 0 ? dataUser['address'] = address : null
        crn_no !== undefined && crn_no.length > 0 ? dataUser['Bank Details']['CRN No.'] = crn_no : null
        bank_name !== undefined && bank_name.length > 0 ? dataUser['Bank Details']['Bank Name'] = bank_name : null
        account_no !== undefined && account_no.length > 0 ? dataUser['Bank Details']['Account No.'] = account_no : null
    } else if (apiKey === premiumPlanKey) {
        name !== undefined && name.length > 0 ? dataUser['f_name'] = name : null
        lastName !== undefined && lastName.length > 0 ? dataUser['l_name'] = lastName : null
        address !== undefined && address.length > 0 ? dataUser['address'] = address : null
        crn_no !== undefined && crn_no.length > 0 ? dataUser['Bank Details']['CRN No.'] = crn_no : null
        bank_name !== undefined && bank_name.length > 0 ? dataUser['Bank Details']['Bank Name'] = bank_name : null
        account_no !== undefined && account_no.length > 0 ? dataUser['Bank Details']['Account No.'] = account_no : null
        worked !== undefined && worked.length > 0 ? dataUser['employeement']['Previous Company'] = worked : null
        salary !== undefined && salary.length > 0 ? dataUser['employeement']['salary'] = salary : null
        to_year !== undefined && to_year.length > 0 ? dataUser['employeement']['To Year'] = to_year : null
        from_year !== undefined && from_year.length > 0 ? dataUser['employeement']['From Year'] = from_year : null
    } else {
        return res.json({'error':'Wong API KEY'})
    }
    return res.json({ 'message': 'Updated ' })
})

route.delete("/deleteRecord", (req, res) => {
    dataUser['f_name'] = ""
    dataUser['address'] = ""
    dataUser['l_name'] = ""
    dataUser['Bank Details']['CRN No.'] = ""
    dataUser['Bank Details']['Bank Name'] = ""
    dataUser['Bank Details']['Account No.'] = ""
    dataUser['employeement']['Previous Company'] = ""
    dataUser['employeement']['From Year'] = ""
    dataUser['employeement']['salary'] = ""
    dataUser['employeement']['To Year'] = ""
    return res.json({ "message": "Data Deleted" })
})


module.exports = route