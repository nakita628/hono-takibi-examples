import { OpenAPIHono } from '@hono/zod-openapi'
import { getSharedFillMapIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sharedFillMapHandler = app.openapi(getSharedFillMapIdRoute, (c) => {
  throw new Error('Not implemented')
})
