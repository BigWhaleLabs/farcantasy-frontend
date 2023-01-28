import { BodyText } from 'components/Text'
import { Component } from 'react'
import { margin } from 'classnames/tailwind'

const errorContrainer = margin('my-4')

export default class extends Component<{
  fallbackText: string
}> {
  state: {
    hasError: boolean
    error?: Error
  } = { hasError: false }
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    }
  }
  render() {
    if (this.state.hasError) {
      console.error(this.state.error)
      return (
        <div className={errorContrainer}>
          <BodyText>
            {this.props.fallbackText}: {this.state.error?.message}
          </BodyText>
        </div>
      )
    }
    return this.props.children
  }
}
