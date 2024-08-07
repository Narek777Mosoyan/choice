
import {Link} from "react-router-dom"

export default function HomeWelcome() {
  return (
    <div className="home_welcome">
        <h2>Good Evening!</h2>
        <p><Link>Sign in</Link> for the best experience, not a customer yet? <Link>Register</Link></p>
    </div>
  )
}
