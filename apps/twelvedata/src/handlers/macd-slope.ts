import { OpenAPIHono } from '@hono/zod-openapi'
import { getMacdSlopeRoute } from '../routes'

const app = new OpenAPIHono()

export const macdSlopeHandler = app.openapi(getMacdSlopeRoute, (c) => {
  throw new Error('Not implemented')
})
