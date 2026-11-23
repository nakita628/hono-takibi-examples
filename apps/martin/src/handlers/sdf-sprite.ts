import { OpenAPIHono } from '@hono/zod-openapi'
import { getSdfSpriteSourceIdsJsonRoute, getSdfSpriteSourceIdsPngRoute } from '../routes'

const app = new OpenAPIHono()

export const sdfSpriteHandler = app
  .openapi(getSdfSpriteSourceIdsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSdfSpriteSourceIdsPngRoute, (c) => {
    throw new Error('Not implemented')
  })
