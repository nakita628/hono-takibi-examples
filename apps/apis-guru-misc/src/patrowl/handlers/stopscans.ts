import { OpenAPIHono } from '@hono/zod-openapi'
import { getStopscansRoute } from '../routes'

const app = new OpenAPIHono()

export const stopscansHandler = app.openapi(getStopscansRoute, (c) => {
  throw new Error('Not implemented')
})
