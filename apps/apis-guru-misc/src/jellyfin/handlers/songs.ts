import { OpenAPIHono } from '@hono/zod-openapi'
import { getSongsIdInstantMixRoute } from '../routes'

const app = new OpenAPIHono()

export const songsHandler = app.openapi(getSongsIdInstantMixRoute, (c) => {
  throw new Error('Not implemented')
})
