# Algebra

Algebra can seem daunting at first as it introduces
a way of looking at reality that does not always come
naturally. When dealing with algebraic expressions it
is important to recall that when we use algebra
we are still only using common operations that we already know.

3 + 6 = 9

is the same as

3 + x = 9

We can deduce x must be 6 as that is the only way for our
equality statement to be true.

"`x`" here is what we call a variable.
[see lines 1-4](./algebra.js);

We can even take this a step further
what if we replace 3 with a variable
[see lines 6-9](./algebra.js);

By using variables we start
to see a general rule which can be
abstracted.

Before algebra we focused
exclusively on constants
(not to be confused with JS `const`).

Constants are a regular number on their own e.g.: 3 + 2 = 5
In this example 3, 2 and 5 are all regular numbers on their own
so they would be the constants.

if we replace 3 with x we ca write the equation as:
`x + 2 = 5`

`x` is our variable here it is a
symbolic representation of a number
we simply do not know.

Simply by looking at the equation we can however see that
we can solve for the value of `x` rather easily.

lets look at the equation: `3x - 10 = 8`

First of all we can deduce that `3x` must equal a number
that when we subtract `10` from it we receive `8`. The only
number `3x` can possibly equal in this case is `18`.

When we have a number attached to (and in front) of a variable
like this we refer to it as the coefficient, thus, `3` is the coefficient
of `x`. In this case it means we are supposed to multiply the coefficient
by the variable.

as such `3x = 18` holds true.

but what is the value of `x` itself?

Well, since `3x = 18` and we understand that a coefficient
means we are supposed to multiply by `x` we can deduce that
`3x = 3 * x = 18`

In this sense we already know the answer as it is simply the
division of `18` by `3`: `18 / 3 = 6`

thus: `x = 6`
we can confirm this by completing the equation: `3 * 6 = 18`

And so if we are to write our equation as constants:
`(3 * 6) - 10 = 8`

We may also have coefficients which are not actually numbers.
These are represented as letters instead, typically `x` or `y` for
variables and `a` or `b` for coefficients.

so in an equation such that:
`ax^2 + bx + c`

We can say that `x` is the variable and `a` and `b` are both the constant
coefficients, and `c` is a constant. We call this format an expression.

An expression differs from an equation, though the difference
can be subtle and easily forgotten.

Expression is a mathematical phrase. It combines
variables, constants, and operations, and can be
evaluated by substituting values for the variables
and performing the indicated operations, they do not
include an equality sign (=) nor do they assert equality.

An equation on the other hand is a mathematical statement
that asserts the equality of two expressions.

Expression: `3x + 5`

Equation: `3x + 5 = 11`

To simplify, Expressions are simply a group of terms,
where a term is a single number or variable, or the
product of a coefficient and one or more variables.

lets take a look at another example:

`3x - 10 = 8`

if we break this down into the terms we use we can
first identify that the whole thing is an Equation
due to the fact it is asserting equality (=).

We can also look at each side of the equation separately.
This means that the equation itself is built up of two
independent expressions: `3x - 10` and `8`

Looking further into this we see that our terms within
the equation are: `3x`, `10`, and `8` where `x` is a variable,
and `10` and `8` are both constants. The `x` variable also
as a coefficient of `3`.

This statement perfectly describes our equation in
mathematical terms.

Multiplication

When you first learned multiplication you would
have been made familiar with the "`x`" symbol.
As we delve into more advanced mathematics this symbol
becomes very easily confused with a variable.

Instead, we replace the classic multiplication symbol
with a "`.`".

e.g. `a x b = a.b`

This is to avoid confusing statements such as:
`x x y + x x xy = n`

Another syntax common is to make use of parentheses
`x(2y) + 2`

Multiplication is also implied by having consecutive variables:
`xy = 2`

If we are multiplying constant regular numbers we MUST use
a multiplication symbol to avoid confusion. Take for example
`3 * 4 = 12`

if we were to write this in the same way we have our variables:
`34 = 12`

It look as though we are asserting that the regular constant `34` is equal to `12`
rather than implying the multiplication of `3 * 4`.

Of course when writing in code we also have access to the usual "`*`"
notation but this is more so to get ourselves used to writing in
correct mathematical form, which is an important part of succinct
mathematical communication.

An example of how we can separate our multiplication with regular constants
can be seen here: `2(5) = 10`

If we have a more complex example we must follow the `Order of Operations`
(or `PERMDAS` as many in the UK know it):
This is a set of rules which tell us the precedence
of our operations in mathematical equations. This holds
true for computing, computers and all programming languages
also define an order of operations so it is important to understand it if you are planning to do any complex mathematics.

The order of precedence is as follows:
   * P - Parentheses
	 * E - Exponents
	 * R - Roots √
	 * M - Multiplication
	 * D - Division
	 * A - Addition
	 * S - Subtraction

It is important to have these rules so that two people
solving the same problems come to draw the same conclusions
as it resolves the ambiguity of the problem. For example:

	Jon solves the equation for the expression: `2 + 5 * 4`
	Jon does addition first: `2 + 5 = 7 and 7 * 4 = 28`

	Ben solves the equation for the expression: `2 + 5 * 4`
	Ben does the multiplication first: `5 * 4 = 20 and 2 + 20 = 22`

As we can see, both Jon and Ben solved the same equation but
came to a completely different conclusion. In objective reality
observers should be able to agree on absolute facts, however,
due to the ambiguity of the nature of the problem it has been left
open to the interpretation of the solver in how they themselves prefer to solve it.

This is where `PERMDAS` comes in. If we follow the correct order of operations we will see that Ben has the correct answer as multiplication takes precedence over addition. It can also be made clearer the order of operations by using parentheses `2 + (5 * 4)`.

Okay so we have one more concept to grasp here. As a programmer
you have likely used the `pow` function in the Math utility library. This does an exponent operation, also known as superscript. In mathematic notation we write exponents as `2^2`
and it stands for repeated multiplication: `2 * 2 = 2^2`

The opposite of superscripts are subscripts. These are used to denote other information, usually written in the same manner as the superscript but below the line rather than above the item they are attached to. These are used in chemistry to denote the number of atoms, or in computer science we use them to denote indices.

# Positive and Negative

When we look at constants, even unsigned regular numbers, we are really looking at positive numbers. For instance, `5` is equivalent to saying `+5`. When we multiply numbers of the same sign the answer will always be positive: `-2 * -2 = +4`.

If the signs are different however, the sign will always be a negative: `-8 / 4 = -2`. These two rules are true for both multiplication and division as division itself can be thought of as the inverse of multiplication.

These rules change when it comes to addition and subtraction.
It is somewhat more complex, as we can have addition and subtraction with both negatives and positives which move up the scale in either direction. It can be helpful to think of this in terms of a transaction. If i have `£3` and someone gives me `£4` I will have `£7`. But what if I have a debt of `£5`? then in this case I have `-£5` if I acquired more debt of `£3` I would have the equation: `-£5 + -£3` which gives us a total debt of `-£8`.

If we then are given `£13` we get the equation `-£8 + £13` we end up with a surplus of `£5` putting us back into the positive. 