import { OpenAPIHono } from '@hono/zod-openapi'
import { getSongsItemIdInstantMixRoute } from '../routes'

const app = new OpenAPIHono()

export const songsHandler = app.openapi(getSongsItemIdInstantMixRoute, (c) => {
  throw new Error('Not implemented')
})
