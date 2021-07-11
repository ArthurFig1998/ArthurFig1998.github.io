<html>
    <head>
        <style>
            body
            {
                background-color: beige;
            }
            h1
            {
                text-align: center;
            }
            fieldset
            {
                font-size:16px;
                padding:10px;
                width:250px;
                line-height:1.8;
                margin: auto;
                border-radius: 6px;
            }
            
            .center
            {
                float:center;
                width:200px;
            }
        </style>
    </head>
    <body>
        <h1>Mortgage Calculator</h1>
        <hr>
        <fieldset class="center">
        <?php
            if($_POST)
            {
                $loanAmount = $_POST['loanAmount'];
                $apr = $_POST['APR'];
                $loanTerm = $_POST['loanTerm'];
                
                $interest = $loanAmount * $apr/100;
                $pay = $loanAmount + $interest;
                $monthlyPayment = $pay / ($loanTerm * 12);
                
                echo "Total Amount: ";
                echo $pay . "<br>";
                echo "Total Interest: ";
                echo $interest . "<br>";
                echo "Monthly Payment: ";
                echo round($monthlyPayment, 2) . "<br>";  
            }
        ?>
        </fieldset>
    </body>
</html>