import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagResourceRoute, postActionUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUntagResourceHandler = app
  .openapi(getActionUntagResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
