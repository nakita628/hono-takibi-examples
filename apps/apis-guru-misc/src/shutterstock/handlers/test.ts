import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2TestRoute, getV2TestValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const testHandler = app
  .openapi(getV2TestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TestValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
