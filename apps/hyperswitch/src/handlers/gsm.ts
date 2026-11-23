import { OpenAPIHono } from '@hono/zod-openapi'
import { postGsmDeleteRoute, postGsmGetRoute, postGsmRoute, postGsmUpdateRoute } from '../routes'

const app = new OpenAPIHono()

export const gsmHandler = app
  .openapi(postGsmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGsmGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGsmUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGsmDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
