import React from 'react'
import reactCSS from 'reactcss'
import map from 'lodash/map'
import color from '../../helpers/color'

import { ColorWrap, EditableInput, Swatch } from '../common'

export const Twitter = ({ onChange, colors, width, triangle }) => {
  const styles = reactCSS({
    'default': {
      card: {
        width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative',
      },
      body: {
        padding: '15px 9px 9px 15px',
      },
      label: {
        fontSize: '18px',
        color: '#fff',
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute',
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute',
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px',
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0',
      },
      clear: {
        clear: 'both',
      },
    },
    'hide-triangle': {
      triangle: {
        display: 'none',
      },
      triangleShadow: {
        display: 'none',
      },
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px',
      },
      triangleShadow: {
        top: '-11px',
        left: '12px',
      },
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px',
      },
      triangleShadow: {
        top: '-11px',
        right: '12px',
      },
    },
  }, {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
  })

  const handleChange = (hex, e) => {
    color.isValidHex(hex) && onChange({
      hex,
      source: 'hex',
    }, e)
  }

  return (
    <div style={ styles.card } className="twitter-picker">
      <div style={ styles.triangleShadow } />
      <div style={ styles.triangle } />

      <div style={ styles.body }>
        { map(colors, (c, i) => {
          return (
            <Swatch
              key={ i }
              color={ c }
              hex={ c }
              style={ styles.swatch }
              onClick={ handleChange }
            />
          )
        }) }
        <div style={ styles.hash }>#</div>
        <EditableInput
          placeholder="ff691f"
          style={{ input: styles.input }}
          value=""
          onChange={ handleChange }
        />
        <div style={ styles.clear } />
      </div>
    </div>
  )
}

Twitter.defaultProps = {
  width: '276px',
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3',
           '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left',
}

export default ColorWrap(Twitter)
