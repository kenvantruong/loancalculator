// Listen for Submit Button Cliked 
document.querySelector('#loan-form').addEventListener('submit', function (e) {

  // Hide results
  document.getElementById('results').style.display = 'none';

  // Show Loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 1500);

  e.preventDefault();
});

// Calculate Results Button Clicked
function calculateResults(e) {
  console.log('Calculating...');

  // Loan Amount & Interest Input
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  // Turn the Amount Input field into a Decimal
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // Compute monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);


  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed();
    totalInterest.value = ((monthly * calculatedPayments) - principal.toFixed(2));
    totalInterest.value = ((monthly * calculatedPayments) - principal.toFixed(2));

    // Show results
    document.getElementById('results').style.display = 'block';

    // Hide Loader
    document.getElementById('loading').style.display = 'none';
    //
  } else {
    showError('Please Check Your Numbers');
  }

  e.preventDefault();
}

// Show Error
function showError(error) {
  // Hide results
  document.getElementById('results').style.display = 'none';

  // Hide Loader
  document.getElementById('loading').style.display = 'none';



  // Create A Div
  const errorDiv = document.createElement('div');

  // Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  // Add Class
  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert Error Above Heading
  card.insertBefore(errorDiv, heading);

  // Clear Error after 3 seconds
  setTimeout(clearError, 3000);

}

// Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}