import { OpenAPIHono } from '@hono/zod-openapi'
import { getFloorRoute } from '../routes'

const app = new OpenAPIHono()

export const floorHandler = app.openapi(getFloorRoute, (c) => {
  throw new Error('Not implemented')
})
