const profileForm = document.querySelector('#profile-form')
const firstNameInput = document.querySelector('#first-name')
const lastNameInput = document.querySelector('#last-name')
const emailInput = document.querySelector('#email')

const inputs = [firstNameInput, lastNameInput, emailInput]

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        input.value = e.target.value
        console.log(input.value)
    })
})

function getUserInfo() {
    axios.get('http://localhost:4000/user') 
        .then(res => {
            const user = res.data[0]

            const {
                first_name: firstName, 
                last_name: lastName, 
                email, 
            } = user

            firstNameInput.value = firstName
            lastNameInput.value = lastName
            emailInput.value = email
        })
}
profileForm.addEventListener('submit', (e) => {
    e.preventDefault()
})


getUserInfo()