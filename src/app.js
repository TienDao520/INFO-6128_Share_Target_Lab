const containerDiv = document.querySelector(".container");

window.addEventListener("DOMContentLoaded", () => {
  const parsedUrl = new URL(window.location);
  // searchParams.get() will properly handle decoding the values.
  console.log("Title shared: " + parsedUrl.searchParams.get("title"));
  console.log("Text shared: " + parsedUrl.searchParams.get("text"));
  console.log("URL shared: " + parsedUrl.searchParams.get("url"));
  const ul = document.createElement("ul");
  for (const prop of ["title", "text", "url"]) {
    const li = document.createElement("li");
    li.textContent = `${prop} shared: ` + parsedUrl.searchParams.get(`${prop}`);
    ul.appendChild(li);
  }

  containerDiv.appendChild(ul);
});
