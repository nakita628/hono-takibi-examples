import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetResourcePolicyResourceArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getResourcePolicyResourceArnHandler = app.openapi(
  getGetResourcePolicyResourceArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
