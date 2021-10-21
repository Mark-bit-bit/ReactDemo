/*
 * @Author: your name
 * @Date: 2021-10-21 11:42:04
 * @LastEditTime: 2021-10-21 16:20:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ReactDemo\myapp\src\pages\index\index.tsx
 */
import { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Image className="img" src="https://i0.wp.com/www.horace.org/blog/wp-content/uploads/2013/04/7bsQf.jpg" mode="widthFix"></Image>
        {/* <Image className="img" src="../../images/home_active.png" mode="widthFix"></Image> */}
        <Text>Hello,The fuct world!</Text>
      </View>
    )
  }
}
