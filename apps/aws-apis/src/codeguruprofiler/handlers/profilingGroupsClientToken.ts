import { OpenAPIHono } from '@hono/zod-openapi'
import { postProfilingGroupsClientTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const profilingGroupsClientTokenHandler = app.openapi(
  postProfilingGroupsClientTokenRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
