import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AccountsIcanRoute, getV1AccountsRoute, postV1AccountsRoute } from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsIcanRoute, (c) => {
    throw new Error('Not implemented')
  })
