import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserOtpRecoveryCodesRoute,
  postUserOtpRecoveryCodesRoute,
  postUserOtpSmsReceiveRoute,
  postUserOtpVerifyOtpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const otPsHandler = app
  .openapi(getUserOtpRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpSmsReceiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpVerifyOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
