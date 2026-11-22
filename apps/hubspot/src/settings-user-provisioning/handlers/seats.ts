import { OpenAPIHono } from '@hono/zod-openapi'
import { getSettingsUsers202609SeatsRoute } from '../routes'

const app = new OpenAPIHono()

export const seatsHandler = app.openapi(getSettingsUsers202609SeatsRoute, (c) => {
  throw new Error('Not implemented')
})
