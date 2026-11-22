import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagInstanceProfileRoute, postActionUntagInstanceProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUntagInstanceProfileHandler = app
  .openapi(getActionUntagInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagInstanceProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
