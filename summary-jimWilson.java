/* Representing Complex Types with Classes
A class is a template for creating an object. The way we describe an object.
- Declared with class keyword
- Class instances (a.k.a. objects) allocated with 'new' keyword
Class are reference types. Variables don't hold classes themselves but a reference to the class instance. Very different from primitive types
Use access modifiers to control encapsulation. Dont want our details exposed to the users of our objects.
Mthods manipulate state and perform operations
- Use return keyword to exit and/or return a value
Field store object state
- Interaction normally controlled through accessors(getters) and mutators(setters). Use methods to change data of fields without affecting usage of our class.
*/


/* Class Initializers and Constructors
Objects should be created in some useful state. should not be error based
Field initializers provide an initial value as part of the declaration
Every class has at least one constructor
- If not explicit constructor, Java provides one with no arguments
- You can provide multiple constructors with differing argument lists
One constructor can call another. (Chaining)
- Call must be first line
Initialization blocks share code across constructors 
- No constructors but just brackets {...}
Keep the initialization and construction order in mind
- 1. Field initialization, 2. Initialization blocks, 3. Constructors
*/
