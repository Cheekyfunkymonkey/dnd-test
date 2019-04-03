"use strict";

(() => {
  const list1 = document.getElementById("list1");
  const dropPoint1 = document.getElementById("drop-point1");
  const dropPoint2 = document.getElementById("drop-point2");

  function drag() {
    list1.addEventListener(
      "drag",
      () => {
        list1.style.display = "none";
      },
      false
    );
  }

  function dragEnter() {
    dropPoint1.addEventListener("dragenter", event => {
      dropPoint1.style.background = "pink";
    });
    dropPoint2.addEventListener("dragenter", event => {
      dropPoint2.style.background = "pink";
    });
  }

  function dragLeave() {
    dropPoint1.addEventListener("dragleave", event => {
      dropPoint1.style.background = "none";
    });
    dropPoint2.addEventListener("dragleave", event => {
      dropPoint2.style.background = "none";
    });
  }

  function dragEnd() {
    list1.addEventListener(
      "dragend",
      () => {
        list1.style.display = "inline-block";
      },
      false
    );
  }

  function dragOver() {
    dropPoint1.addEventListener("dragover", event => {
      event.preventDefault();
    });
    dropPoint2.addEventListener("dragover", event => {
      event.preventDefault();
    });
  }

  function drop() {
    dropPoint1.addEventListener("drop", event => {
      dropPoint1.appendChild(list1);
    });
    dropPoint2.addEventListener("drop", () => {
      dropPoint2.appendChild(list1);
    });
  }

  window.onload = () => {
    drag();
    dragOver();
    dragEnter();
    dragLeave();
    dragEnd();
    drop();
  };
})();
