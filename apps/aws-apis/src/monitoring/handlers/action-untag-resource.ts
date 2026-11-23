import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagResourceRoute, postActionUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUntagResourceHandler = app
  .openapi(getActionUntagResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagResourceRoute, (c) => {
    throw new Error('Not implemented')
  })
