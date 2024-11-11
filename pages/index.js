import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Counter from '../_app.js';
import Search from '../_search.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Counter increment={2} buttonColor={'red'}/>
      <Counter increment={1} buttonColor={'blue'}/>
      <p>Here is my Git repo: <a href='https://github.com/HowlHund/csci331-fall2024'>https://github.com/HowlHund/csci331-fall2024</a></p>
      <p>Running a MySQL database in a Docker container is super useful for 
        quick setup and keeping everything consistent. You just pull the MySQL
         image from Docker Hub and run it with a simple command, setting 
         environment variables for things like the database name and password. 
         To show this off, you could create a quick demo project—spin up the 
         MySQL container, link it to a basic app (like a Python or Node.js one)
          using Docker Compose, and show some basic operations (like adding or 
          retrieving data). It’s a solid way to showcase how easy it is to 
          deploy and manage databases with Docker without worrying about 
          different setups on different computers.</p>
      <Search/>
    </div>
    
  );
}
