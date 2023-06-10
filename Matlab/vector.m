% Vector Practice
clc, clearvars;

% We can define a new 
% row in a vector using ;
A = [1, 3; 2, -10];

% Matlab will follow every
% rule of linear algebra

% Matlab assumes we want to do
% Linear Algebra

% In Linear Algebra if we 
% perform an operation on 
% a vector Matlab will assume
% we want to do the operation
% on each element of the vector
A + 1

% This follows the general rules of
% linear algebra, but what if we want 
% to find the square of a 100 column vector
vec = linspace(0,100)
vec^2

% Performing exponentiation requires
% a square vector (a vector with equal 
% number of columns and rows). 

% The exponent must also be scalar
% (a single number, not a matrix/vector)

% If we want to perform an operation 
% on each individual element of the vector
% we need to add a '.' to perform elementwise
% operations. These operations are inefficient.

% Elementwise operations perform 
% the operation independently 
% on each element.

% Vectorwise operations consider
% the relationship of the elements
% within the vector.