
function click() {
        return fetch('assets/student.json')
          .then(res => res.json())
          .then(data => {
            data.students;
            list = data.students;
            return list;
          });
      }
      
      function onLoad() {
        click()
          var tbody = document.getElementById('table');
          tbody.innerHTML = '';
      
          for (var i = 0; i < list.length; i++) {
            var stdRow = document.createElement('tr');
            stdRow.innerHTML = `
              <td>${list[i].name}</td>
              <td>${list[i].marks.Tamil}</td>
              <td>${list[i].marks.English}</td>
              <td>${list[i].marks.Maths}</td>
              <td>${list[i].marks.Science}</td>
              <td>${list[i].marks.Social}</td>
            `;
            tbody.appendChild(stdRow);
          }
       
      }
      
      document.addEventListener('DOMContentLoaded', onLoad);
      