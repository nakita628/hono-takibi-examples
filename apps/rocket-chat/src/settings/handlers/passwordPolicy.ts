import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1PwGetPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordPolicyHandler = app.openapi(getApiV1PwGetPolicyRoute, (c) => {
  throw new Error('Not implemented')
})
