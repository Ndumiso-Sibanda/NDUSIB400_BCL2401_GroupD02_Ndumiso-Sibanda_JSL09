fetch(
 "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=;hjksdf;kljsdfgl;kdsjfgljksdfglkjhsdfg"
)
 .then((res) => res.json())
 .then((data) => {
  console.log(data);
  if (data.urls && data.urls.regular) {
   document.body.style.backgroundImage = `url(${data.urls.regular})`;
   document.getElementById("author").textContent = `By: ${data.user.name}`;
  } else {
   console.error("Image URL not found in API response");
  }
 })
 .catch((error) => {
  console.error("Error fetching or parsing data:", error);
 });

// unhandledrejection PromiseRejectionEvent {isTrusted: true, promise: Promise, reason: TypeError: Cannot read property 'regular' of undefined
//     at https://cw1.scrimba.com/index.js:5:64, type: "unhandledrejection", target: Window, …}
// __sw__tracker.js:31 TypeError: Cannot read property 'regular' of undefined
//     at VM21936 index.js:5
// g.error @ __sw__tracker.js:31
// (anonymous) @ __sw__tracker.js:31
// __sw__tracker.js:31 unhandled Arguments [PromiseRejectionEvent, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// index.js:5 Uncaught (in promise) TypeError: Cannot read property 'regular' of undefined
//     at VM21936 index.js:5
