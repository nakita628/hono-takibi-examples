import { OpenAPIHono } from '@hono/zod-openapi'
import { postIdentityGetRoute, postIdentityMatchRoute } from '../routes'

const app = new OpenAPIHono()

export const identityHandler = app
  .openapi(postIdentityGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIdentityMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
