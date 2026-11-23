import { OpenAPIHono } from '@hono/zod-openapi'
import { getSetupRoute, postSetupRoute } from '../routes'

const app = new OpenAPIHono()

export const setupHandler = app
  .openapi(getSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
