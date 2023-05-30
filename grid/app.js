$(document).on('pagecreate', '#home', function () {
    $('a[data-department]').on('click', function () {
        var department = $(this).data('department');
        // Set the department name on the department page
        $('#dept-page #dept-name').text(department);

        // Replace the code below with your own logic to retrieve department information
        var departmentInfo = getDepartmentInfo(department);

        // Set the department information on the department page
        $('#dept-page #dept-info').text(departmentInfo);
    });
});

function getDepartmentInfo(department) {
    // Replace this with your own logic to retrieve department information
    // This is a placeholder example that returns dummy data
    var departmentInfo = '';

    switch (department) {
        case 'Dept A':
            departmentInfo = 'This is information about Department A.';
            break;
        case 'Dept B':
            departmentInfo = 'This is information about Department B.';
            break;
        case 'Dept C':
            departmentInfo = 'This is information about Department C.';
            break;
        case 'Dept D':
            departmentInfo = 'This is information about Department D.';
            break;
        case 'Dept E':
            departmentInfo = 'This is information about Department E.';
            break;
        // Add more cases here for additional departments
    }

    return departmentInfo;
}
