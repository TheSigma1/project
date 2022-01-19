function IsEmpty(objectfield,stringfield)
{
    objectvalue = objectfield.value.length;
    if(objectvalue=="")
    {
        alert("Oops.. Please fill out the value of "+stringfield);
        objectfield.style.background = 'Yellow';
        return false;
    }
    else
        return true;
}