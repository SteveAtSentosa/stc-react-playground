interface Props {
  children: string
}
const TableTitle = ({children}: Props) => {
  return <h3>{children}</h3>
}

export default TableTitle
