const dateInput = document.querySelector('#date');
const calculateDate = document.querySelector('#calculate');
const ageOutput = document.querySelector('.output'); 

calculateDate.addEventListener('click', () => {
    let dateInputValue = new Date(dateInput.value);
    let currentDate = new Date();

    let yearDifference = currentDate.getFullYear() - dateInputValue.getFullYear();
    let monthDifference = currentDate.getMonth() - dateInputValue.getMonth();
    let dateDifference = currentDate.getDate() - dateInputValue.getDate();

    
    if (monthDifference < 0 || (monthDifference === 0 && dateDifference < 0)) {
        yearDifference--;
    }

    
    ageOutput.innerHTML = `Date Difference: ${dateDifference} days, ${monthDifference} months, ${yearDifference} years <br/> <br/> Your Age: ${yearDifference}`;
    
});
