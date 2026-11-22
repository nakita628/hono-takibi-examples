import { OpenAPIHono } from '@hono/zod-openapi'
import { getGroupLifecyclePoliciesCountRoute } from '../routes'

const app = new OpenAPIHono()

export const groupLifecyclePoliciesHandler = app.openapi(
  getGroupLifecyclePoliciesCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
