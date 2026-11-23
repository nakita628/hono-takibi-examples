import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postQrcodeContactRoute,
  postQrcodeCryptoRoute,
  postQrcodeEmailRoute,
  postQrcodeGeoRoute,
  postQrcodePhoneRoute,
  postQrcodeRoute,
  postQrcodeSmsRoute,
  postQrcodeTextRoute,
  postQrcodeWifiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const qrcodeHandler = app
  .openapi(postQrcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeContactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeCryptoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeGeoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodePhoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQrcodeWifiRoute, (c) => {
    throw new Error('Not implemented')
  })
