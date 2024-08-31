import Link from 'next/link'

interface Props {
  path: string;
  title: string;
  subTitle: string
}


export const TopMenuItem = ({ path, title, subTitle }: Props) => {
  return (
    <Link href={path} className='m-2 p-2 rounded-md transition-all hover:bg-slate-500'>
      {title}
    </Link>
  )
}
