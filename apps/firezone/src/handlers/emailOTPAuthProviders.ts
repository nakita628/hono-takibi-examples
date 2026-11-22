import { OpenAPIHono } from '@hono/zod-openapi'
import { getEmailOtpAuthProvidersIdRoute, getEmailOtpAuthProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const emailOTPAuthProvidersHandler = app
  .openapi(getEmailOtpAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEmailOtpAuthProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
