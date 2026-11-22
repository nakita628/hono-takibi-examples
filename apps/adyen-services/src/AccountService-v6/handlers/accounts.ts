import { OpenAPIHono } from '@hono/zod-openapi'
import { postCloseAccountRoute, postCreateAccountRoute, postUpdateAccountRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(postCloseAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUpdateAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
