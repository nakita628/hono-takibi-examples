import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdIdentityVerificationRoute } from '../routes'

const app = new OpenAPIHono()

export const identityVerificationsHandler = app.openapi(
  getV21AccountsAccountIdIdentityVerificationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
