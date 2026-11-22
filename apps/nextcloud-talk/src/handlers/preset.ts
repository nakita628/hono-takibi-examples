import { OpenAPIHono } from '@hono/zod-openapi'
import { getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRoute } from '../routes'

const app = new OpenAPIHono()

export const presetHandler = app.openapi(
  getOcsV2PhpAppsSpreedApiApiVersionPresetsRoomRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
