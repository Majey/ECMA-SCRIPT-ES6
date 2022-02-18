let data = {
    name: "Kevin",
    marks: [10, 20, 30],
    getValue: function(){
        this.marks.map((mark) => {
            console.log(mark);
            console.log(this.name);
        })
    }
}

data.getValue();