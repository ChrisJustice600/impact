import LoginForm from "../components/connexion";
export default function Connexion() {
  return (
    <div className="flex justify-center items-center h-[80vh] ">
      <div className="">
        <div>Détail de ton compte</div>
        <LoginForm />
      </div>
    </div>
  );
}
