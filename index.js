const Button = props => {
  const {children,className} = props
  return <button className={className}>{children}</button>
}

const element = (
  <div className='bg'>
    <h1 className='head'>Social Buttons</h1>
    <div className='card'>
      <Button children='Like' className='like' />
      <Button children='Comment' className='comment' />
      <Button children='Share' className='share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
