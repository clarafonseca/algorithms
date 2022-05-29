
# Minimum Remove to Make Valid Parentheses
Given a string  s  of  `'('`  ,  `')'`  and lowercase English characters.

Your task is to remove the minimum number of parentheses (  `'('`  or  `')'`, in any positions ) so that the resulting  _parentheses string_  is valid and return  **any**  valid string.

Formally, a  _parentheses string_  is valid if and only if:

-   It is the empty string, contains only lowercase characters, or
-   It can be written as  `AB`  (`A`  concatenated with  `B`), where  `A`  and  `B`  are valid strings, or
-   It can be written as  `(A)`, where  `A`  is a valid string.

**Example 1:**

**Input:** s = "lee(t(d)o)de)"
**Output:** "lee(t(d)o)de"
**Explanation:** "lee(t(do)de)" , "lee(t(d)ode)" would also be accepted.

**Example 2:**

**Input:** s = "a)b(d)d"
**Output:** "ab(d)d"

**Example 3:**

**Input:** s = "))(("
**Output:** ""
**Explanation:** An empty string is also valid.

**Constraints:**

-   `1 <= s.length <= 105`
-   `s[i]`  is either`'('`  ,  `')'`, or lowercase English letter`.`

## Solution
1. Transform the string into an array 
2. Go through every char in the string 
3. If it's an opening parentheses 
	3.1. Add the index to the stack 
4. If it's a closing parentheses 
	4.1. Check if the stack it's empty (our stack it's build to have only opening parentheses) 
	4.1.1. If it is, replace the char with an empty string "" 
	4.1.2. But if it's not empty, remove the last element of the stack.
5. If there are some opening parentheses left in the stack 
6. Go through every index stored in the stack 
7. Then replace the characters stored on those index with an empty string ""

*Time Complexity*: O(n + m)
    n = number of characters on the string 
    m = number of open parentheses left 
    Best case: O(n)
    Worst case: O(n²)