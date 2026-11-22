import { OpenAPIHono } from '@hono/zod-openapi'
import { getPoliciesDeviceRegistrationPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const policiesDeviceRegistrationPolicyHandler = app.openapi(
  getPoliciesDeviceRegistrationPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
