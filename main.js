class Message {
    constructor(author, text) {
     this.author = author;
     this.time = new Date();
     this.text = text;
    }
   
    toString() {
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.author}: ${this.text}`
     }
   }
   
   class Messenger {
    constructor(){
        this.messages = []
    }
    show_history(){
        this.messages.forEach(item=>console.log(item))
    }
    send(author,text){
        let message = new Message(author, text)
        this.messages.push(message.toString())
    }
   }
   
   const mesaj = new Messenger();
   mesaj.send('Lionel', 'Hi')
   mesaj.send('Mark', 'Hi')
   mesaj.send('Lionel', 'How are you?')
   mesaj.send('Mark', 'I am fine')
   mesaj.show_history()