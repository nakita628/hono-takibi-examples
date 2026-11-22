import { OpenAPIHono } from '@hono/zod-openapi'
import { getConfigRoute, getItvPageRoute, getPageRoute } from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getItvPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPageRoute, (c) => {
    throw new Error('Not implemented')
  })
