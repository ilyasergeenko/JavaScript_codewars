function updateLight(current) {
  switch(current)
    {
        case "red":
        current="green";
        break;
        case "yellow":
        current="red"
        break;
        case "green":
        current="yellow"
        break;
    }
  return current;

}

