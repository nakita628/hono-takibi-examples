import { OpenAPIHono } from '@hono/zod-openapi'
import { getRealmClientRegistrationPolicyProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const clientRegistrationPolicyHandler = app.openapi(
  getRealmClientRegistrationPolicyProvidersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
