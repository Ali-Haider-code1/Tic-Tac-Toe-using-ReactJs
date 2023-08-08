import { useEffect, useState } from "react";
import Block from "./Block";




const Board = () => {
    const [makrs, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [player, setPlayer] = useState(1)
    const changemark = (i) => {   //This get the position where the user clicks
        const m = [...makrs];    //this will copy the original array.
        if (m[i] === 0) {   //This will check if the clicked position value is zero or not.
            m[i] = player;       // This will set the dot or cross mark according to player number.
            setMarks(m);
            setPlayer(player === 1 ? 2 : 1)   // This will toggle the Player from 1 to 2 and 2 to 1 After every click.
        }
        else {
            alert("Please Click on an Empty Block");
        }
    }


    useEffect(() => {
        const combinations = [     //This is the array of default combination that can be made to win.
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8]
        ]
        for (let c of combinations) {
            if (makrs[c[0]] === 1 && makrs[c[1]] === 1 && makrs[c[2]] === 1) {   // This will check if there positions of player 1 matches either of combination.
                alert('player 1 wins')
            }
            if (makrs[c[0]] === 2 && makrs[c[1]] === 2 && makrs[c[2]] === 2) {    // This will check if there positions of player 2 matches either of combination.
                alert('player 2 wins')
            }
        }
    }, [makrs])       //This will trigger every time when an mark added in the Board as it is an use Effect Hook.




    return (

        <div className="board">

            <div>
                <Block mark={makrs[0]} changemark={changemark} position={0}></Block>
                <Block mark={makrs[1]} changemark={changemark} position={1}></Block>
                <Block mark={makrs[2]} changemark={changemark} position={2}></Block>
            </div>

            <div>
                <Block mark={makrs[3]} changemark={changemark} position={3}></Block>
                <Block mark={makrs[4]} changemark={changemark} position={4}></Block>
                <Block mark={makrs[5]} changemark={changemark} position={5}></Block>
            </div>

            <div>
                <Block mark={makrs[6]} changemark={changemark} position={6}></Block>
                <Block mark={makrs[7]} changemark={changemark} position={7}></Block>
                <Block mark={makrs[8]} changemark={changemark} position={8}></Block>
            </div>
        </div>
    );
}

export default Board;