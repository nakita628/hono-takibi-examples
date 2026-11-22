import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminRealmsRealmClientRegistrationPolicyProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const clientRegistrationPolicyHandler = app.openapi(
  getAdminRealmsRealmClientRegistrationPolicyProvidersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
