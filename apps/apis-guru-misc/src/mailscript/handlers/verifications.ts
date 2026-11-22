import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVerificationsRoute,
  postVerificationsRoute,
  postVerificationsVerificationVerifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const verificationsHandler = app
  .openapi(getVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVerificationsVerificationVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
