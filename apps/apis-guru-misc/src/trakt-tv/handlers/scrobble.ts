import { OpenAPIHono } from '@hono/zod-openapi'
import { postScrobblePauseRoute, postScrobbleStartRoute, postScrobbleStopRoute } from '../routes'

const app = new OpenAPIHono()

export const scrobbleHandler = app
  .openapi(postScrobblePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrobbleStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScrobbleStopRoute, (c) => {
    throw new Error('Not implemented')
  })
