import { OpenAPIHono } from '@hono/zod-openapi'
import { getV3TagBindingsRoute, postV3TagBindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const tagBindingsHandler = app
  .openapi(getV3TagBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3TagBindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
