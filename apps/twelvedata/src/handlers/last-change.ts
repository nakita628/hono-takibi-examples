import { OpenAPIHono } from '@hono/zod-openapi'
import { getLastChangeEndpointRoute } from '../routes'

const app = new OpenAPIHono()

export const lastChangeHandler = app.openapi(getLastChangeEndpointRoute, (c) => {
  throw new Error('Not implemented')
})
