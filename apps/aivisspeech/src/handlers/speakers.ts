import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpeakersRoute } from '../routes'

const app = new OpenAPIHono()

export const speakersHandler = app.openapi(getSpeakersRoute, (c) => {
  throw new Error('Not implemented')
})
