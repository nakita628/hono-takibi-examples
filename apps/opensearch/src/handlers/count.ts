import { OpenAPIHono } from '@hono/zod-openapi'
import { getCountRoute, postCountRoute } from '../routes'

const app = new OpenAPIHono()

export const countHandler = app
  .openapi(getCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCountRoute, (c) => {
    throw new Error('Not implemented')
  })
