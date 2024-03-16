import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[2rem] font-semibold font-dancing cursor-pointer">
        Kungs Grillen
      </span>
    </Link>
  )
}

export default Logo