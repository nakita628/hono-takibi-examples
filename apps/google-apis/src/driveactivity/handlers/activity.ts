import { OpenAPIHono } from '@hono/zod-openapi'
import { postV2ActivityQueryRoute } from '../routes'

const app = new OpenAPIHono()

export const activityHandler = app.openapi(postV2ActivityQueryRoute, (c) => {
  throw new Error('Not implemented')
})
