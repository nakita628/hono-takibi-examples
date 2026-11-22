import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth21AuthorizeRoute, postOauth21TokenRoute } from '../routes'

const app = new OpenAPIHono()

export const authorizationHandler = app
  .openapi(getOauth21AuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
