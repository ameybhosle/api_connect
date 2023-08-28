const FreePlanData = {
    'f_name':'Jane',
    'l_name':'Doe',
    'address':'wall street'
}

const NormalPlanData = {
    'f_name':'Jane',
    'l_name':'Doe',
    'address':'wall street',
    'data':[
        {
            'worked':'BNC inc',
            'year':'2017-2021'
        }
    ]
}

const PremiumPlanData = {
    'f_name':'Jane',
    'l_name':'Doe',
    'address':'wall street',
    'Bank Details':{
        'CRN No.':'',
        'Bank Name':'',
        'Account No.':''
    },
    'data':[
        {
            'worked':'BNC inc',
            'year':'2017-2021',
            'salary':'$20,000'
        }
    ]
}

module.exports = {FreePlanData , NormalPlanData , PremiumPlanData}