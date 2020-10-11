
var DropdownCollection = document.getElementsByClassName("AccordDropdown"); /*Collects all of the accordion sections into a list*/
var i;

for (i = 0; i < DropdownCollection.length; i++) { /*loops through the dropdown list*/
  DropdownCollection[i].addEventListener("click", function() { /*Sets what will happen when the container is clicked*/
	this.classList.toggle("active");
	var content = this.nextElementSibling;
	if (content.style.display === "block") { /*Does not display the content if the display is set to block*/
	  content.style.display = "none";
	} else {
	  content.style.display = "block"; /*Otherwise, sets the content which was set to none to block*/
	}
  });
}

var ImageIndex = 0; /*Sets the image index to be used when cycling through the list*/

function ChangeImage(ImageClass) { /*Added parameter of ImageClass so all parts of the Accordian will use the same function, with the only difference being the parameter passed in (efficient code)*/
	var ListIndex;
	var Images = document.getElementsByClassName(ImageClass); /*Collects the image and figure container of all the images with the same class as the procedure's parameter into a list*/
	for (ListIndex = 0; ListIndex < Images.length; ListIndex++){ /*loops through the Images list*/
		Images[ListIndex].style.display = "none"; /*Sets all of the containers to not be displayed*/
	}
	ImageIndex++; /*Increment the list index*/
	if (ImageIndex > Images.length) { /*If the index is more than the lenght of the list, then the index will be set to 1*/
		ImageIndex = 1;
	}
	Images[ImageIndex-1].style.display = "block"; /*The caption at the index will be displayed to the viewer */
	setTimeout(function(){ChangeImage(ImageClass)}, 4000); /*The procedure will be repeated again after 4 seconds*/
}