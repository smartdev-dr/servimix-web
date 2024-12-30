'use client'
import { Button } from "@/components/ui/button";
import Link from "next/link";

function App() {
  return (
    <div>
      "Aqui Julio elimina esto y has el landing page"
      <Link href="/dashboard">
        <Button>Go to dashboard</Button>
      </Link>
      <Link href="/login">
        <Button>Go to Login</Button>
      </Link>
      <Link href="/signup">
        <Button>Go to SignUp</Button>
      </Link>
    </div>
  )
}

export default App;