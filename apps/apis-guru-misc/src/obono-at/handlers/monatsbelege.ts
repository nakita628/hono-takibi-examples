import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute } from '../routes'

const app = new OpenAPIHono()

export const monatsbelegeHandler = app.openapi(
  getRegistrierkassenRegistrierkasseUuidMonatsbelegeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
