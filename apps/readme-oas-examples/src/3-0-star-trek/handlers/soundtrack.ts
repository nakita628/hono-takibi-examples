import { OpenAPIHono } from '@hono/zod-openapi'
import { getSoundtrackRoute, getSoundtrackSearchRoute, postSoundtrackSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const soundtrackHandler = app
  .openapi(getSoundtrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSoundtrackSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSoundtrackSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
