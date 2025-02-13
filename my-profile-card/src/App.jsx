import ProfileCard from "./Components/ProfileCard/ProfileCard";
function App() {
  return (
  <>
  <div className="flex flex-wrap justify-center gap-4 mt-4 ">
  <ProfileCard name="Qaiser Ali" rollnumber="23027119-003" email="qaisers.official@gmail.com" image="/me.jpg"/>
  <ProfileCard name="Noorullah" rollnumber="23027119-052" email="noorullah1234@gmail.com" image="/me.jpg"/>
  </div>
  </>
  )
}

export default App