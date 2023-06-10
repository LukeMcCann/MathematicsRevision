% Vectors and Matrices

% Clean Output
clc, clearvars

% Create a Vector 1 through 10
% 1 Row x 10 Columns
x = 1:10

% We can then transpose x 
% this will flip the Vector
% to a vertical Vector 
% 10 Rows x 1 Column
x'

% Automatically generate linearly
% spaced vectors
% the third argument tells linspace
% how many to generate, this defaults
% to 100 evenly spaced vectors if omitted
y = linspace(0,100,101)

% We can manually define vectors
z = [12 50 -8 -100]

% Again, we can flip this to 
% a vertical vector
z'


% You can separate items in a vector
% with either spaces or commas
f = [1,2,3,4]

% Matlab does not support 
% defining multidimensional vectors
% in this manner
multi = [[1,2,3,4],[5]]

