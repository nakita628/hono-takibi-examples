import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpeakerInfoRoute } from '../routes'

const app = new OpenAPIHono()

export const speakerInfoHandler = app.openapi(getSpeakerInfoRoute, (c) => {
  throw new Error('Not implemented')
})
