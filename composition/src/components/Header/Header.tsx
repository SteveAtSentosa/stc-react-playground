import Nav from '@/components/Nav'

const Header = () => {
  return (
    <header id="header" className="flex w-screen">
      <Nav className="flex w-screen items-center justify-center px-4 lg:px-10">
        <Nav.Link href="/composition">Composition</Nav.Link>
        <Nav.Link href="/drilling">Prop Drilling</Nav.Link>
      </Nav>
    </header>
  )
}

export default Header
