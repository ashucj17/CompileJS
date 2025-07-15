 function showTopic(topicId) {
            // Hide all sections
            document.querySelectorAll('.code-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Remove active class from all cards
            document.querySelectorAll('.topic-card').forEach(card => {
                card.classList.remove('active');
            });
            
            // Show selected section
            document.getElementById(topicId).classList.add('active');
            
            // Add active class to clicked card
            event.target.classList.add('active');
        }

        function runExecutionCode() {
            const output = document.getElementById('executionOutput');
            output.innerHTML = '';
            output.classList.add('has-content');
            
            // Capture console.log output
            const originalLog = console.log;
            let logOutput = '';
            
            console.log = function(...args) {
                logOutput += args.join(' ') + '\n';
                originalLog.apply(console, args);
            };
            
            // Run the code
            try {
                let multiply = (a,b) => console.log(`${a} × ${b} = ${a*b}`);
                multiply(4,2);

                let sqrt = a => console.log(`${a}² = ${a*a}`);
                sqrt(5);

                let modulus = (a,b) => console.log(`${a} % ${b} = ${a%b}`);
                modulus(16,5);

                let divide = (a,b) => console.log(`${a} ÷ ${b} = ${a/b}`);
                divide(10,5);

                let subtraction = (a,b) => console.log(`${a} - ${b} = ${a-b}`);
                subtraction(17,19);

                let addition = (a,b) => console.log(`${a} + ${b} = ${a+b}`);
                addition(15,18);
                
            } catch (error) {
                logOutput += 'Error: ' + error.message;
            }
            
            // Restore console.log
            console.log = originalLog;
            
            output.innerHTML = logOutput.replace(/\n/g, '<br>');
        }

        function runFunctionCode() {
            const output = document.getElementById('functionOutput');
            output.innerHTML = '';
            output.classList.add('has-content');
            
            const originalLog = console.log;
            let logOutput = '';
            
            console.log = function(...args) {
                logOutput += args.join(' ') + '\n';
                originalLog.apply(console, args);
            };
            
            try {
                const traditionalFunction = function(x) {
                    return x * 2;
                }

                const arrowFunction = x => x * 2;

                const calculate = (operation, a, b) => {
                    switch(operation) {
                        case 'add': return a + b;
                        case 'multiply': return a * b;
                        default: return 'Unknown operation';
                    }
                }

                console.log('Traditional:', traditionalFunction(5));
                console.log('Arrow:', arrowFunction(5));
                console.log('Calculator:', calculate('add', 10, 20));
                
            } catch (error) {
                logOutput += 'Error: ' + error.message;
            }
            
            console.log = originalLog;
            output.innerHTML = logOutput.replace(/\n/g, '<br>');
        }

        function runOperationCode() {
            const output = document.getElementById('operationOutput');
            output.innerHTML = '';
            output.classList.add('has-content');
            
            const originalLog = console.log;
            let logOutput = '';
            
            console.log = function(...args) {
                logOutput += args.join(' ') + '\n';
                originalLog.apply(console, args);
            };
            
            try {
                const mathOperations = {
                    add: (a, b) => a + b,
                    subtract: (a, b) => a - b,
                    multiply: (a, b) => a * b,
                    divide: (a, b) => b !== 0 ? a / b : 'Cannot divide by zero',
                    modulus: (a, b) => a % b,
                    power: (a, b) => Math.pow(a, b)
                }

                const results = [
                    { operation: 'Addition', result: mathOperations.add(15, 18) },
                    { operation: 'Subtraction', result: mathOperations.subtract(17, 19) },
                    { operation: 'Multiplication', result: mathOperations.multiply(4, 2) },
                    { operation: 'Division', result: mathOperations.divide(10, 5) },
                    { operation: 'Modulus', result: mathOperations.modulus(16, 5) },
                    { operation: 'Power', result: mathOperations.power(5, 2) }
                ];

                results.forEach(item => {
                    console.log(`${item.operation}: ${item.result}`);
                });
                
            } catch (error) {
                logOutput += 'Error: ' + error.message;
            }
            
            console.log = originalLog;
            output.innerHTML = logOutput.replace(/\n/g, '<br>');
        }