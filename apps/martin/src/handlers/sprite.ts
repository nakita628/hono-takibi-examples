import { OpenAPIHono } from '@hono/zod-openapi'
import { getSpriteSourceIdsJsonRoute, getSpriteSourceIdsPngRoute } from '../routes'

const app = new OpenAPIHono()

export const spriteHandler = app
  .openapi(getSpriteSourceIdsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSpriteSourceIdsPngRoute, (c) => {
    throw new Error('Not implemented')
  })
