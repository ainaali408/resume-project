import Profile from './profile/Profile';
import About from './about/About';
function Home() {
  return (
	<>

<div className='container'>
					<div className='row'>
						<div className='col s12 m3'>
							<Profile />
						</div>
						<div className='col s12 m9'>
							<About />
							
						</div>
					</div>
				</div>
	</>

	
  )
}

export default Home




