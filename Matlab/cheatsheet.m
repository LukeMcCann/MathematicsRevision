% Matlab Syntax

% MatLab stands for
% Matrices Laboratory.

% As such, everything in matlab
% is stored in matrices

% We can create a variable as such:
a = 5;

% Using a semicolon will ensure there
% is no output
b = 3;

% If we omit the semicolon
% the evaluation will be output
% to the console
a + b


% We can define strings
hello = "hello";

% We can define strings
% with multiple columns and
% Rows in our matrices
testMatrix = ["Hello", "World" ; "Goodbye", "World"];

% We can then access our rows as such

% Access all from row 1
testMatrix(1,:)

% Access row 2 column 1
testMatrix(2,1) % Goodbye
testMatrix(1,1) % Hello

% We can also add logical variables
one = logical([0 0 1]);
two = logical([0 1 0]);

% We can check defined variables
% In the environment using
whos
