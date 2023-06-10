% Elementwise addition
clc, clearvars;

A = [1 2 3];
B = [4 5 6];

C = A + B;

disp("Elementwise Addition:")
disp("A = " + mat2str(A))
disp("B = " + mat2str(B))
disp("C = " + mat2str(C))

% Dot product
A = [1 2 3];
B = [4 5 6];

dotProduct = dot(A, B);

disp("Dot Product:")
disp("A = " + mat2str(A))
disp("B = " + mat2str(B))
disp("Dot Product = " + num2str(dotProduct))
