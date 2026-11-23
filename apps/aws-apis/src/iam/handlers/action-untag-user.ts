import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUntagUserRoute, postActionUntagUserRoute } from '../routes'

const app = new OpenAPIHono()

export const actionUntagUserHandler = app
  .openapi(getActionUntagUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUntagUserRoute, (c) => {
    throw new Error('Not implemented')
  })
