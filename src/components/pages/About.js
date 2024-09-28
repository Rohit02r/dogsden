import React from 'react';
import '../../styles/About.css'

const About = () => {
    return (
        <div className="about-container container mt-3">
            <h2 className="about-heading">About Us</h2>
            <hr/>

            <section className="experience-section mt-4">
                <h3><em>Why DogsDen</em></h3>
                <ul className="experience-list">
                    <li>
                    Compassionate Care: Your dog will become part of our loving family. Our experienced team treats every dog with kindness, ensuring they feel safe and cherished in their new environment.
                    </li> 
                    <li>
                    Personalized Attention: We take the time to understand your dog’s unique personality and needs. From their favorite toys to their daily routines, we strive to maintain the comforts that make them happy.
                    </li>
                    <li>
                    Health and Well-being: At Dogsden, your dog’s health is our priority. We provide regular veterinary care, nutritious meals, and ample exercise to keep them healthy and thriving.
                    </li>
                </ul>
            </section>
            <hr />

            <section className="experience-section mt-4">
                <h3><em>Our Experience</em></h3>
                <ul className="experience-list">
                    <li>
                        With 15 years of dedicated dog care and welfare, we have developed a deep understanding of their needs. 
                        Our expert team is trained in handling breeds, ensuring tailored care for each dog.
                    </li> 
                    <li>
                        Our experienced staff is equipped to handle different breeds, ensuring proper care and training. 
                        We foster a safe and loving environment, focusing on positive reinforcement techniques.
                    </li>
                    <li>
                        We focus on responsible breeding practices, ensuring healthy and well-tempered dogs. 
                        Our breeding pairs undergo thorough health checks and genetic screenings to minimize risks.
                    </li>
                </ul>
            </section>
            <hr />

            <section className="vaccination-breeding-section mt-4">
                <h3><em>Vaccinations and Breeding</em></h3>
                <h6>
                    At Dogsden, we prioritize the health of our dogs through regular vaccinations and responsible breeding. 
                    Our breeding practices focus on:
                </h6>
                <ul>
                    <li>
                        Responsible breeding of good-natured and healthy breeds, ensuring the best temperaments for our dogs. 
                        Each breeding dog undergoes evaluations to meet our high standards and maintain breed integrity.
                    </li>
                    <li>
                        Thorough health checks and genetic screenings for all breeding dogs to ensure a healthy lineage. 
                        Collaborating with veterinary specialists, we conduct comprehensive health assessments.
                    </li>
                    <li>
                        Ensuring puppies are well-socialized and cared for from birth, giving them a strong foundation for life. 
                        Our socialization program includes exposure to different environments, people, and pets.
                    </li>
                </ul>
            </section>
            <hr/>

            <section className="achievements-section mt-4">
                <h3><em>Our Achievements</em></h3>
                <h6>
                    We take pride in our efforts to help dogs in need and make a significant impact in their lives. 
                    Over the years, we have achieved remarkable milestones that highlight our commitment to dog welfare:
                </h6>
                <ul>
                    <li>
                        Rescued over 500+ injured dogs, providing them with the medical care they needed for recovery. 
                        Our team collaborates with local shelters to ensure each dog receives appropriate treatment.
                    </li>
                    <li>
                        We Provided compassionate care for dogs neglected by their owners, offering them a second chance. 
                        Our outreach programs educate owners about responsible pet care and welfare.
                    </li>
                    <li>
                        Successfully rehomed numerous lost dogs, helping them find loving families. 
                        We engage in community outreach to reunite lost dogs with their owners.
                    </li>
                </ul>
            </section>
            <hr/>
        </div>
    );
};

export default About;
