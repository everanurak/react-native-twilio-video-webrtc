//
//  TwilioVideoLocalView.js
//  Black
//
//  Created by Martín Fernández on 6/13/17.
//
//

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { requireNativeComponent } from 'react-native'

class TwilioVideoPreview extends Component {
  static propTypes = {
    /**
     * Indicate if video feed is enabled.
     */
    enabled: PropTypes.bool.isRequired,
    /**
     * How the video stream should be scaled to fit its
     * container.
     */
    scaleType: PropTypes.oneOf(['fit', 'fill'])
  }

  render () {
    const scalesType = this.props.scaleType === 'fit' ? 1 : 2
    return (
      <NativeTwilioVideoPreview scalesType={scalesType} {...this.props}>
        {this.props.children}
      </NativeTwilioVideoPreview>
    )
  }
}

const NativeTwilioVideoPreview = requireNativeComponent(
  'RNTwilioVideoPreview',
  TwilioVideoPreview
)

module.exports = TwilioVideoPreview
