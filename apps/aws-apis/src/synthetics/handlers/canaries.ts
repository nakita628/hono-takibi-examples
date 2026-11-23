import { OpenAPIHono } from '@hono/zod-openapi'
import { postCanariesLastRunRoute, postCanariesRoute } from '../routes'

const app = new OpenAPIHono()

export const canariesHandler = app
  .openapi(postCanariesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCanariesLastRunRoute, (c) => {
    throw new Error('Not implemented')
  })
