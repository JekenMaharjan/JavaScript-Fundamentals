
// Level 19: Debounce vs Throttle

// ----------------------------------
// Question 1:
// ----------------------------------
// 1. What is Debouncing ?
// 2. What is Throttling ?
// 3. When would you use each ?
// Example scenario: search input typing.

// -------------------------------
// Answer:
// -------------------------------
/*
Debouncing means: Execute function only AFTER user stops triggering event for a certain time.
Example:
User typing search:
Type "J"
Type "Je"
Type "Jek"  
API call runs only after user stops typing for 500ms.
*/

/*
Throttling means: Execute function at most once every fixed time interval.
If limit is 1 second:
Even if event fires 100 times,
Function runs only once per second.
*/

/*
| Scenario               | Use      |
| ---------------------- | -------- |
| Search input typing    | Debounce |
| Window resize          | Throttle |
| Scroll event           | Throttle |
| Auto-save after typing | Debounce |
*/

/*
Example: Search Input

User typing quickly:
Without debounce → 10 API calls
With debounce → 1 API call

This saves:
- Server load
- Bandwidth
- Performance
*/