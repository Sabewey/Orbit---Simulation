debugger

//Setting up Canvas - Visualize
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.height = window.innerHeight - 200;
canvas.width = window.innerWidth - 100;


//Smaller planets cordinates
x = 2;//3.7 * Math.pow(10, 8);
y = 0.1;

//Variables
G = 1//6.67408 * Math.pow(10, -11);
M = 1//5.9272 * Math.pow(10, 24);         //mass in kg
m = 1//7.35 * Math.pow(10, 22);           //mass in kg

dt = 0.02;

//Smaller x-y speed
Xs = 0;
Ys = 1//4 * Math.pow(10, 2); // 400 m/s

//Forces:
Fx = 0;
Fy = 0;


function euler() {

    for (let i = 0; i < 100; i++) {

        //useful math var
        x2 = Math.pow(x, 2);          // x to the power of 2
        y2 = Math.pow(y, 2);          // y to the power of 2
        xy2 = x2 / y2;                // used later for acceleration
        yx2 = y2 / x2;                // used later for acceleration
        r = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)); //distance between planets

        //console.log(r + "radius is working");

        //Calculate the y-acceleration:
        Fg = Math.pow(G, 2) * Math.pow(M, 2) * Math.pow(m, 2) / (x2 + y2); // Newtons gravitational law - can reuse for ay

        Fy2 = Fg / (xy2 + 1);
        Fy = Math.sqrt(Fy2);
        //Give the force a riktning:
        Fy = Fy * (-y / Math.abs(y));
        ay = Fy / m;

        //Calculate the y-acceleration:
        Fx2 = Fg / (yx2 + 1);
        Fx = Math.sqrt(Fx2);
        //Give the force a riktning
        Fx = Fx * (-x / Math.abs(x));
        ax = Fx / m;


        //
        // ACTUAL EULERS METHOD
        //
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(x * 500, y*300, 5, 5);

       // ctx.fillRect(400, 400, 10, 10);


        x = x + Xs * dt;
        y = y + Ys * dt;

        Xs = Xs + ax * dt;
        Ys = Ys + ay * dt;

        console.log("x - pos:" + x);
        console.log("y - pos:" + y);
    }

}