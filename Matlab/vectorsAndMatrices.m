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

% Remember, arrays and vectors are
% along a single dimension
x = 1:5

% Matrices are along two dimensions
y = [1,2;3,4]


% There are functions to generate entire
% matrices of one and zero values
clc, clearvars;
A = ones(4)
B = zeros(2)
A= ones(3, 1)
B = zeros(1, 3)

% We can generate an identity matrix
C = eye(3)

% We can also include additional arguments
% when creating a vector
P = 1:1:10

% This basically says:
% start at 1, jump by 1 value
% end at 10