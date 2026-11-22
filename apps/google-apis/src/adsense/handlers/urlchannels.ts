import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdclientsAdClientIdUrlchannelsRoute } from '../routes'

const app = new OpenAPIHono()

export const urlchannelsHandler = app.openapi(getAdclientsAdClientIdUrlchannelsRoute, (c) => {
  throw new Error('Not implemented')
})
