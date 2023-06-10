% Vectorwise Operation (Matrix Multiplication)
clc, clearvars;

% In this example we have:
%     2x3 vector A
%     3x1 vector B
%
% When we perform the multiplication
% A * B Matlab computes the dot product
% of each row of A with the corresponding
% column of B.
A = [1 2 3; 4 5 6];  % Matrix A
B = [7; 8; 9];      % Vector B

C = A * B;

% For matrix multiplication to be valid
% the number of columns in the first vector
% must be equivalent to the number of rows
% in the second vector.
disp("Matrix Multiplication:")
disp("A = ");
disp(A);
disp("B = ");
disp(B);
disp("C = ");
disp(C);
