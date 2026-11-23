import { OpenAPIHono } from '@hono/zod-openapi'
import { getClicksRoute, postClicksPgRoute } from '../routes'

const app = new OpenAPIHono()

export const clicksHandler = app
  .openapi(getClicksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClicksPgRoute, (c) => {
    throw new Error('Not implemented')
  })
