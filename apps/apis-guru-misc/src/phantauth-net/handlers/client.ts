import { OpenAPIHono } from '@hono/zod-openapi'
import { getClientClientIdRoute, getClientClientIdTokenKindRoute, postClientRoute } from '../routes'

const app = new OpenAPIHono()

export const clientHandler = app
  .openapi(postClientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getClientClientIdTokenKindRoute, (c) => {
    throw new Error('Not implemented')
  })
