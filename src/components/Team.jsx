
 const members = [
    {
        id:1,
        image:'../../public/Member/member-1.jpg',
        name:'John Doe',
        position:'Designer',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat'
    },{
        id:2,
        image:'../../public/Member/member-2.jpg',
        name:'Jane Smith',
        position:'Font End Developer',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat'
    },{
        id:3,
        image:'../../public/Member/member-3.jpg',
        name:'Mathew prey',
        position:'Backend Developer',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat'
    },{
        id:4,
        image:'../../public/Member/member-4.jpg',
        name:'David Thomas',
        position:'UI/UX',
        description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat'
    }
 ]

export default function TeamMember() {
  return (
    <section className="about-us">
    <div className="content">
     <div className="u-center-text u-margin-bottom-big">
       <h2 className="heading-secondary">Team Members</h2>
      </div> 
      <div className="team-members">
        {
         members.map(member=> 
            <div key={member.id} className="member">
          <img src={member.image} alt="Team Member 1" />
          <h3 className="member-name">{member.name}</h3>
          <p className="member-position">{member.position}</p>
          <p className="member-description">{member.description}</p>
        </div>
            )
        }
      </div>
    </div>
  </section>
  )
}
