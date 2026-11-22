import { OpenAPIHono } from '@hono/zod-openapi'
import { get10dlcEnumEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const enumHandler = app.openapi(get10dlcEnumEndpointRoute, (c) => {
  throw new Error('Not implemented')
})
