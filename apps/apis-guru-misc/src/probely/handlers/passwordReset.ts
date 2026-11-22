import { OpenAPIHono } from '@hono/zod-openapi'
import { postCheckIndexRoute, postResetIndexRoute, postSetpasswordIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const passwordResetHandler = app
  .openapi(postCheckIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postResetIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetpasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
