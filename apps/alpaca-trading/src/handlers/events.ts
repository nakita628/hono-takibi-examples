import { OpenAPIHono } from '@hono/zod-openapi'
import { getV2beta1EventsActivitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const eventsHandler = app.openapi(getV2beta1EventsActivitiesRoute, (c) => {
  throw new Error('Not implemented')
})
