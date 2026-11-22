import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1TotpsAuthenticateRoute,
  postV1TotpsRecoverRoute,
  postV1TotpsRecoveryCodesRoute,
  postV1TotpsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const totpHandler = app
  .openapi(postV1TotpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsAuthenticateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsRecoveryCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TotpsRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
