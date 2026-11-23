import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetupRoute, postSetupRoute, postSetupUserRoute } from '../routes'

const app = new OpenAPIHono()

export const setupHandler = app
  .openapi(getSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupUserRoute, (c) => {
    throw new Error('Not implemented')
  })
