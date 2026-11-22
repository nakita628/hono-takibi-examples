import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiPicoRoute } from '../routes'

const app = new OpenAPIHono()

export const picoHandler = app.openapi(getApiPicoRoute, (c) => {
  throw new Error('Not implemented')
})
