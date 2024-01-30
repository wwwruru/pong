export default class Setting {
    constructor() {
        this.boxWidth = 800
        this.boxHeight = 500                       

        this.boxRound = 20                          
        this.boxColor = '#333333'                   // Серый 
        this.lineWidth = 6                       
        this.lineColor = '#232323'                  // Темно-серый
        this.textColor = '#EBEBEB'                  // Светло-серый

        this.supportColorRed = '#FA0556'            // красный 
        this.supportColorYellow = '#FFFFFF'         // желтый
    
        this.ballSpeed = 6                         
        this.ballRadius = 8                        

        this.ballXDefault = (this.boxWidth / 2)     
        this.ballYDefault = (this.boxHeight / 2)    
    
        this.ballColor = '#EBEBEB'                  // Светло-серый

        this.ballHitScore = 0                       

        this.ball = {
            x: this.ballXDefault,
            y: this.ballYDefault,
      
            dx: 0,                                  
            dy: 0,                                  
      
            speed: this.ballSpeed,
        }

        this.playerRadius = 7                        
        this.playerHeight = 100                      
        this.playerSpeed = 8                        
        
        this.playerBorder = this.playerRadius * 3   
        this.playerSpace = this.playerRadius * 6    
        this.playerYDefault = (this.boxHeight / 2) - (this.playerHeight / 2)
        
        this.playerL = {
            score: 0,                               
            goalPointX: this.boxWidth - this.playerSpace * 2,
            align: 'right',
            x: this.playerSpace,
            y: this.playerYDefault,
            yDefault: (this.boxHeight / 2) - (this.playerHeight / 2),
            color: '#A55F02',                       // Оранжевый
            keys: [[87, 'up'], [83, 'down']],
        }

        this.playerR = {
            score: 0,
            goalPointX: this.playerSpace * 2,
            align: 'left',
            x: this.boxWidth - (this.playerSpace),
            y: this.playerYDefault,
            color: '#38887A',                       // Голубой
            keys: [[38, 'up'], [40, 'down']],
        }
    }
}