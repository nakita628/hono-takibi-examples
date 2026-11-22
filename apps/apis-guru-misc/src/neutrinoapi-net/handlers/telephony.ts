import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHlrLookupRoute,
  getVerifySecurityCodeRoute,
  postPhonePlaybackRoute,
  postPhoneVerifyRoute,
  postSmsVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const telephonyHandler = app
  .openapi(getHlrLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhonePlaybackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPhoneVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSmsVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerifySecurityCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
