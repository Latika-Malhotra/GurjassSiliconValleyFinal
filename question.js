class Question {

    constructor() {
      this.title = createElement('h1')
      this.result = createElement('h1')
     // this.input1 = createInput("Enter Your Name Here....");
      this.input1 = createInput("Enter answer Option");
      this.input2 = createInput("Enter answer Option");
      this.button1 = createButton('Submit');
      this.button2 = createButton('Submit');
      this.question1 = createElement('h3');
      this.option11 = createElement('h4');
      this.option12 = createElement('h4');
      this.option13 = createElement('h4');
      this.option14 = createElement('h4');
      this.question2 = createElement('h3');
      this.option21 = createElement('h4');
      this.option22 = createElement('h4');
      this.option23 = createElement('h4');
      this.option24 = createElement('h4');
      this.answer = createElement('h2');
      this.ans = null;
      this.ans1 = null;
    }
  
    hide(){
      this.title.hide();
      //this.input1.hide();
      this.button.hide();
     // this.input2.hide();
    }
    question1Display(){
      this.question1.html("Question 1:- What was the real name of Melo " );
      this.question1.position(150, 80);
      this.option11.html("1: Michael Amane  " );
      this.option11.position(150, 100);
      this.option12.html("2: Soichiro Yagami" );
      this.option12.position(150, 120);
      this.option13.html("3: L Lawliet " );
      this.option13.position(150, 140);
      this.option14.html("4: Mihael Keehl" );
      this.option14.position(150, 160);
    }

    question1Hide(){
      this.title.hide();
      this.input1.hide();
      this.button1.hide();
      this.question1.hide();
      this.option11.hide();
      this.option12.hide();
      this.option13.hide();
      this.option14.hide();
    }

    question2Display(){
      
      this.title.html("The DeathNote Quiz");
      this.title.position(350, 0);
      this.question2.html("Question 2:- What was the real name of Melo " );
      this.question2.position(150, 80);
      this.option21.html("1: Michael Amane  .." );
      this.option21.position(150, 100);
      this.option22.html("2: Soichiro Yagami .." );
      this.option22.position(150, 120);
      this.option23.html("3: L Lawliet .." );
      this.option23.position(150, 140);
      this.option24.html("4: Mihael Keehl .." );
      this.option24.position(150, 160);
      this.input2.position(150, 230);
    //  this.input2.position(350, 230);
      this.button2.position(290, 300);
  
      this.button2.mousePressed(()=>{
        // this.title.hide();
        // this.input1.hide();
        this.question2Hide();
        // question2Display();
        //this.input2.hide();
        // this.button.hide();
        // this.question1.hide()
        // this.option11.hide()
        // this.option12.hide()
        // this.option13.hide()
        // this.option14.hide()
       // contestant.name = this.input1.value();
        this.ans1 = this.input2.value();
        flag1 = 1;
        if(this.ans !=null && this.ans1 != null){
          bothAns = 1;
        }
    })
  }

    question2Hide(){
      this.title.hide();
        this.input2.hide();
        this.button2.hide();
      this.question2.hide();
      this.option21.hide();
      this.option22.hide();
      this.option23.hide();
      this.option24.hide();
    }
  
    display(){
      this.title.html("The DeathNote Quiz");
      this.title.position(350, 0);
      this.question1Display();
      // this.question.html("Question:- What was the real name of Melo " );
      // this.question.position(150, 80);
      // this.option1.html("1: Michael Amane  " );
      // this.option1.position(150, 100);
      // this.option2.html("2: Soichiro Yagami" );
      // this.option2.position(150, 120);
      // this.option3.html("3: L Lawliet " );
      // this.option3.position(150, 140);
      // this.option4.html("4: Mihael Keehl" );
      // this.option4.position(150, 160);


      // if(question.ans === "4"&& flag == 1){
        
      //   this.question.position(150,180);
      //   this.option1.html("1: 2  " );
      //   this.option1.position(150, 100);
      //   this.option2.html("2: 16" );
      //   this.option2.position(150, 120);
      //   this.option3.html("3: 3 " );
      //   this.option3.position(150, 140);
      //   this.option4.html("4: 10" );
      //   this.option4.position(150, 160);
      // }
      
      this.input1.position(150, 230);
    //  this.input2.position(350, 230);
      this.button1.position(290, 300);
  
      this.button1.mousePressed(()=>{
        // this.title.hide();
        // this.input1.hide();
        this.question1Hide();
        // question2Display();
        //this.input2.hide();
        // this.button.hide();
        // this.question1.hide()
        // this.option11.hide()
        // this.option12.hide()
        // this.option13.hide()
        // this.option14.hide()
       // contestant.name = this.input1.value();
        this.ans = this.input1.value();
        flag = 1;
       
      });
    }
  }
  