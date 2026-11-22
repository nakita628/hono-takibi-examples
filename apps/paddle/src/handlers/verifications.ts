import { OpenAPIHono } from '@hono/zod-openapi'
import { getVerificationsRoute, getVerificationsVerificationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const verificationsHandler = app
  .openapi(getVerificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVerificationsVerificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
