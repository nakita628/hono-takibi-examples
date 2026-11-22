import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiReactionsRoute, postApiReactionsToggleRoute } from '../routes'

const app = new OpenAPIHono()

export const reactionsHandler = app
  .openapi(postApiReactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiReactionsToggleRoute, (c) => {
    throw new Error('Not implemented')
  })
