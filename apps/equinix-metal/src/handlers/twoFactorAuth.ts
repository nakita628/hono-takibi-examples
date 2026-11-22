import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserOtpAppRoute,
  deleteUserOtpSmsRoute,
  postUserOtpAppRoute,
  postUserOtpSmsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const twoFactorAuthHandler = app
  .openapi(deleteUserOtpAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserOtpSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
