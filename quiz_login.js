function addUser() 
{
    student1_name = document.getElementById('student1_name_imput').value;
    student2_name = document.getElementById('student2_name_imput').value;

    student1_name = localStorage.setItem('student1_name', student1_name);
    student2_name = localStorage.setItem('student2_name', student2_name);

    window.location = 'quiz_page.html';
}

