import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdclientsRoute } from '../routes'

const app = new OpenAPIHono()

export const adclientsHandler = app.openapi(getAdclientsRoute, (c) => {
  throw new Error('Not implemented')
})
