import { OpenAPIHono } from '@hono/zod-openapi'
import { getBng2latlongEastingNorthingRoute } from '../routes'

const app = new OpenAPIHono()

export const bng2latlongHandler = app.openapi(getBng2latlongEastingNorthingRoute, (c) => {
  throw new Error('Not implemented')
})
