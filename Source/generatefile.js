const generateTeam = (team) => {
  const html = [];
  // create the manager html
  // Card for Manager
  const generateManager = (manager) => {
    return `
        <div class="card employee-card">
@@ -18,7 +18,43 @@ const generateTeam = team => {
    </div>
        `;
  };
  //Card for Engineer
  const generateEngineer = (engineer) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${engineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-solid fa-glasses"></i>${engineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                <li class="list-group-item">Github Account: <a href="${engineer.getGithub()}">${engineer.getGithub()}</a></li>
            </ul>
        </div>
    </div>
        `;
  };
  //Card for Intern
  const generateIntern = (intern) => {
    return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${intern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-solid fa-user-graduate"></i>${intern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${intern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                <li class="list-group-item">School: ${intern.getSchool()}</li>
            </ul>
        </div>
    </div>
        `;
  };

  html
    .push(team.filter((employee) => employee.getRole() === "Manager"))
    .map((manager) => generateManager(manager));
};
