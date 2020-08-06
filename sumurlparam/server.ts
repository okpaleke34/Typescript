/**
* Simple Typescript code to sum two number x and y in url /sum/:x/:y and display the answer.
*/
import express = require('express');
import {Request,Response } from "express"

const app: express.Application = express();
const port = 4000;

app.get('/sum/:x/:y',(req: Request, res: Response) => {
    var x: number = +req.params.x;
    var y: number = +req.params.y;
    var display: string;

    if(!Number.isInteger(x)){
        display = "The first parameter is not a number";
    }
    else if(!Number.isInteger(y)){
        display = "The second parameter is not a number";
    }
    else{
        let sum: number = x + y;
        display = `The sum of ${x} and ${y} is equal to ${sum}`;           
    }
    res.send(display);
});

app.listen(port, function () {
    console.log(`App is listening at http://localhost:${port}`)
});
