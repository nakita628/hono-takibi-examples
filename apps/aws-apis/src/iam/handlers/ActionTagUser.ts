import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagUserRoute, postActionTagUserRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionTagUserHandler = app
  .openapi(getActionTagUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagUserRoute, (c) => {
    throw new Error('Not implemented')
  })
