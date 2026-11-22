import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiProfileTotpSetupPhpRoute,
  postApiProfileTotpRecoverPhpRoute,
  postApiProfileTotpSaveCodePhpRoute,
  postApiProfileTotpVerifyPhpRoute,
  putApiProfileTotpDisablePhpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const totpHandler = app
  .openapi(putApiProfileTotpDisablePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileTotpRecoverPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileTotpSaveCodePhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProfileTotpSetupPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProfileTotpVerifyPhpRoute, (c) => {
    throw new Error('Not implemented')
  })
