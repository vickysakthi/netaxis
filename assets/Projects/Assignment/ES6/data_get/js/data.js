
document.addEventListener('DOMContentLoaded', async function() {
        try {
            let fetchData = await fetch('https://dummyapi.online/api/movies');
            
            if (fetchData.ok) {
                let response = await fetchData.json();
                let movieTable = document.getElementById('movie-table');
    
                response.forEach((movie) => {
                        console.log(movie)
                    let row = movieTable.insertRow();
                    let idCell = row.insertCell(0);
                    let titleCell = row.insertCell(1);
                    let ratingsCell = row.insertCell(2);
                    let imageCell = row.insertCell(3);
    
                    idCell.textContent = movie.id;
                    titleCell.textContent = movie.movie;
                    ratingsCell.textContent = movie.rating;
                    imageCell.textContent = movie.image;
                });
            } else {
                throw new Error("Invalid link");
            }
        } catch (error) {
            console.error('Error fetching movie data:', error);
        }
    });
    

   