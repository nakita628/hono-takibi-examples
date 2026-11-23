import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserApiKeysIdRoute,
  deleteUserOtpAppRoute,
  deleteUserOtpSmsRoute,
  getUserApiKeysRoute,
  getUserOtpRecoveryCodesRoute,
  getUserRoute,
  postUserApiKeysRoute,
  postUserOtpAppRoute,
  postUserOtpRecoveryCodesRoute,
  postUserOtpSmsReceiveRoute,
  postUserOtpSmsRoute,
  postUserOtpVerifyOtpRoute,
  putUserRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserOtpAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserOtpRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserOtpSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpSmsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpSmsReceiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserOtpVerifyOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
