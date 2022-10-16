// const chatmessage = chatbox.querySelector('.chatbox__messages');
var x = ""

var MLctr = 0
var Webctr = 0
var Appctr = 0

var Corpctr = 0
var Edctr = 0
var Sponsictr = 0

var logic_counter = 0
class Chatbox {
    
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatBox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.State = false;
        this.messages = [];


    }

    display() {
        const {openButton, chatBox, sendButton} = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatBox))

        sendButton.addEventListener('click', () => this.onSendButton(chatBox))

        const node = chatBox.querySelector('input');
        node.addEventListener("keyup", ({key}) => {
            if (key === "Enter") {
                this.onSendButton(chatBox)
            }
        }
        )
    }

    toggleState(chatbox) {
        this.state = !this.state;

        //show or hides the box
        if(this.state) {
            chatbox.classList.add('chatbox--active')
            const chatmessage = chatbox.querySelector('.chatbox__messages');
            chatmessage.innerHTML = '<div class="messages__item messages__item--operator"> Are you interested in technical or non technical domains? </div>'
            var html = ""
        }
        else{
            chatbox.classList.remove('chatbox--active')
        }
    }

    // logic(text){

    // }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value
        if (text1 == "") {
            return
        }

        let msg1 = {name: "User", message: text1}
        this.messages.push(msg1)

        text1 = text1.toLowerCase()

        let msg2 = {}

        if (text1 == "technical") {
            x = "technical"
        }
        else if (text1 == "non technical") {
            x = "non-technical"
        }
        else if (text1 === "1" , "2" , "3" , "4" , "5"){
            // this.logic(text1)
            if (x == "technical"){
                if (logic_counter == 0){
                    MLctr = MLctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message: "On a scale of 1-5,  have you thought to automate your daily work?" }
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 1){
                    MLctr = MLctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5 how willing are u to resolve a problem using trial and error?"}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 2){
                    Webctr = Webctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5 how interested are u in the working of web apps?"}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 3){
                    Webctr = Webctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5, how often do you use an app instead of the website the same service offers."}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 4){
                    Appctr = Appctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5, how inclined are you towards native as well as cross platform development."}
                    logic_counter = logic_counter + 1

                }
                else if (logic_counter == 5){
                    Appctr = Appctr + parseInt(text1)
                    console.log(Webctr)
                    if (MLctr > Webctr && MLctr > Appctr) {
                        msg2 = { name: "Ordinance", message:  "Recommended domain for you is AI-ML"}
                    }
                    else if (Webctr > Appctr && Webctr > MLctr) {
                        msg2 = { name: "Ordinance", message:  "Recommended domain for you is Web Dev"}
                    }
                    else if (Appctr > Webctr && Appctr > MLctr) {
                        msg2 = { name: "Ordinance", message:  "Recommended domain for you is App Dev"}
                    }
                    else if (Webctr == MLctr && Webctr > Appctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Web Dev and AI-ML"}
                    }
                    else if (Appctr == MLctr && Webctr < Appctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is App Dev and AI-ML"}
                    }
                    else if (Webctr == Appctr && Webctr > MLctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Web Dev and App Dev"}
                    }
                    else if (Webctr == MLctr && Webctr == Appctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Web Dev and AI-ML and App Dev"}
                    }

                    x = ""
                    MLctr = 0
                    Webctr = 0
                    Appctr = 0

                    logic_counter = 0

                }

            }

            else if ( x == "non-technical") {
                if (logic_counter == 0) {
                    Edctr = Edctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message: "On a scale of 1-5, how efficient are you with researching online?"}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 1) {
                    Edctr = Edctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message: "On a scale from 1-5, how good do you handle tight deadlines?"}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 2) {
                    Edctr = Edctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message: "On a scale of 1-5 what Would you rate your public speaking skills?"}
                    logic_counter = logic_counter + 1
                }
                else if(logic_counter == 3) {
                    Corpctr = Corpctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5 how would you rate you management skills?"}
                    logic_counter = logic_counter + 1
                }
                else if(logic_counter == 4) {
                    Corpctr = Corpctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message: "On a scale of 1-5 how would you rate your understanding of an event being managed from brainstorming to organizing committee?"}
                    logic_counter = logic_counter + 1
                }
                else if(logic_counter == 5) {
                    Corpctr = Corpctr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5, how fiscally responsible would you consider yourself?"}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 6) {
                    Sponsictr = Sponsictr + parseInt(text1)
                    msg2 = { name: "Ordinance", message:  "On a scale of 1-5, how would you rate your communication skills?"}
                    logic_counter = logic_counter + 1
                }
                else if (logic_counter == 7) {
                    Sponsictr = Sponsictr + parseInt(text1)
                    Sponsictr = Sponsictr * 1.5

                    if (Edctr > Corpctr && Edctr > Sponsictr) {
                        msg2 = { name: "Ordinance", message:  "Recommended domain for you is Editorial"}
                    }
                    else if (Corpctr > Edctr && Corpctr > Sponsictr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Corporate"}
                    }
                    else if (Sponsictr > Edctr && Sponsictr > Corpctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Sponsorship"}
                    }
                    else if (Edctr == Corpctr && Edctr > Sponsictr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Editorial and Corporate"}
                    }
                    else if (Sponsictr == Corpctr && Sponsictr > Edctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Sponsorship and Corporate"}
                    }
                    else if (Sponsictr == Edctr && Edctr > Corpctr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Sponsorship and Editorial"}
                    }
                    else if (Edctr == Corpctr && Corpctr == Sponsictr) {
                        msg2 = { name: "Ordinance", message: "Recommended domain for you is Editorial and Corporate and Sponsorship"}
                    }

                    x = ""
                    Edctr = 0
                    Sponsictr = 0
                    Corpctr = 0

                    logic_counter = 0
                }

            }
            this.messages.push(msg2)
            this.updateChatText(chatbox)
            textField.value = ''
            return
        }

        else {
            msg2 = { name: "Ordinance", message:  "Input Invalid please try again"}
            this.messages.push(msg2)
            this.updateChatText(chatbox)
            textField.value = ''
            return

        }

        // //http://127.0.0.1:5000/predict
        // fetch($SCRIPT_ROOT + '/predict', {
        //     method: 'POST',
        //     body: JSON.stringify({message: text1}),
        //     mode: 'cors',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        // })
        // .then(r => r.json())
        // .then(r => {
        console.log(x)
        if (x == "technical"){
            msg2 = { name: "Ordinance", message: "On a scale on 1-5, how much do you like predicting outcomes of different scenarios" }
        }
        else if (x == "non-technical"){
             msg2 = { name: "Ordinance", message: "On a scale of 1-5, how creative are you with taglines and catchy phrases?" }
        }

        this.messages.push(msg2)
        this.updateChatText(chatbox)
        textField.value = ''

        // })
        // .catch((error) => {
        //     console.error('Error:', error);
        //     this.updateChatText(chatbox)
        //     textField.value = ''
        // });
    }

    updateChatText(chatbox) {
        var html = '';
        var counter = 0;
        this.messages.slice().reverse().forEach(function(item, index) {
            if (item.name == "Ordinance"){
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'
            }
            else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'
            }

            if (item.name == "Ordinance" && counter == 0) {

            let speech = new SpeechSynthesisUtterance();

            var msg = item.message;

            var msg_str = msg.split('.')[0]

            console.log(msg_str);

            speech.lang = "en-US";
            speech.text = msg_str;
            speech.volume = 1;
            speech.rate = 1;
            speech.pitch = 1;  

            counter+=1;
            
            var count = 1;

            window.speechSynthesis.speak(speech);
            }
        });

        const chatmessage = chatbox.querySelector('.chatbox__messages');
        chatmessage.innerHTML = html;
    }  
}

const chatbox = new Chatbox()
chatbox.display()