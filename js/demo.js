function abc() {
    document.write("Hello")
}

function validation() {
    if(document.myform.abc.value == "abc")
    {
        alert("as")
        document.myform.abc.focus();
        return false;

    }
}