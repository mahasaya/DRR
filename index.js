const startDate = document.querySelector('#startDate')
const endDate = document.getElementById('endDate');
const sD = document.getElementById('sD');
const eD = document.querySelector('#eD')
const monthYear = document.querySelector('.monthYear')
const monthStart = document.querySelector('.monthStart')
const monthEnd = document.querySelector('.monthEnd ')
const numberOfdays = document.querySelector('.numberOfDays')
const countDiv = document.querySelector('.countDiv')
const excludeBtn = document.querySelector('.excludeBtn')
const leadBtn = document.querySelector('.leadBtn')
const leadCount= document.querySelector('.leadCount')
const expectedDRR = document.querySelector('.expectedDRR')

const dt = new Date ();

const day = dt.getDate();
const month = dt.getMonth()+1;
const year = dt.getFullYear();


const date = `${day}/${month}/${year}`;

const inputDates =  document.querySelector('.inputDates')
const inputCount = document.querySelector('.inputCount')


function updtStart(uptdElm){
    
    uptdElm.innerText = date
}




function calculateNumberOfDays() {
    const startDateValue = sD.innerText;
    const endDateValue = eD.innerText;

    if (startDateValue && endDateValue) {
        const startDateParts = startDateValue.split('/');
        const endDateParts = endDateValue.split('/');

        if (startDateParts.length === 3 && endDateParts.length === 3) {
            const startDateObj = new Date(startDateParts[2], startDateParts[0] - 1, startDateParts[1]);
            const endDateObj = new Date(endDateParts[2], endDateParts[0] - 1, endDateParts[1]);

            const timeDifference = endDateObj - startDateObj;
            const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

            // Display the number of days
            numberOfdays.innerText = `${daysDifference}`;
        } else {
            alert("Invalid date format. Please use MM/DD/YYYY.");
        }
    } else {
        alert("Please remeber to select End Date after the leads are closed.");
    }
}


//startDate.addEventListener('click', calculateNumberOfDays);
//endDate.addEventListener('click', calculateNumberOfDays);

    

function monthS(strtMonth,strtYear){
    monthStart.innerText = `Start Month = ${strtMonth}, Year=${strtYear} `

  
}
function monthE(endMonth,endYear){
    monthEnd.innerText =`Month End = ${endMonth}, Year=${endYear}`

  
}

startDate.addEventListener('click',() =>{

    if(sD.innerText === ""){
    updtStart(sD);
   }
   else{
    alert("date already set")
   }

   const firstMonth = sD.innerText;
   const strparts = firstMonth.split('/');
   const strtMonth = strparts[1];
   const strtYear = strparts[2];

   monthS(strtMonth, strtYear);
   calculateNumberOfDays();
});


endDate.addEventListener('click',() =>{
    if(eD.innerText === ""){
    updtStart(eD);
    

   }
   else{
    alert("date already set")
   }

   const secondMonth = eD.innerText;
   const endparts = secondMonth.split('/');
   const endMonth = endparts[1];
   const endYear = endparts[2];
   
   monthE(endMonth, endYear);
   calculateNumberOfDays();

});

excludeBtn.addEventListener('click', () =>  {

    const excludedDiv = document.querySelector('.Excluded')

    excludedDiv.innerText = inputDates.value

})

leadBtn.addEventListener('click' , ()=> {

    const countDiv = document.querySelector('.countDiv')

    countDiv.innerText = inputCount.value ;
    expectDrr()
});

function expectDrr() {
    console.log("hi")
    let numberdays = numberOfdays.innerText;
    let countlead = countDiv.innerText;

    if (numberdays && countlead){
        let DRR = Math.floor(countlead/numberdays);
        expectedDRR.innerText = DRR ;
        
    }

}






