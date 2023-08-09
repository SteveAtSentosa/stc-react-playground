import clsx, {ClassValue} from 'clsx'
import {twMerge} from 'tailwind-merge'

/**
 * Parse className input using twMerge and clsx to allow conditions and prevent conflicts.
 * @param {ClassValue} inputs - An array of ClassValue, containing n className and conditions
 * @returns {string} - A string of className
 */
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

export const tableData = [
  {
    name: 'Tanner Linsley',
    age: 26,
    friend: {
      name: 'Jason Maurer',
      age: 23,
    },
  },
  {
    name: 'Foo Bar',
    age: 23,
    friend: {
      name: 'Nan Nun',
      age: 43,
    },
  },
  {
    name: 'Lorem Ipsum',
    age: 53,
    friend: {
      name: 'Sul Sal',
      age: 23,
    },
  },
]

export const tableColumns = [
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Age',
    accessor: 'age',
    Cell: (props) => <span className="number">{props.value}</span>,
  },
  {
    id: 'friendName',
    Header: 'Friend Name',
    accessor: (d) => d.friend.name,
  },
  {
    Header: (props) => <span>Friend Age</span>,
    accessor: 'friend.age',
  },
]
