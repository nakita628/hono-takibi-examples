import { OpenAPIHono } from '@hono/zod-openapi'
import { getTracksIdRoute, getTracksRoute } from '../routes'

const app = new OpenAPIHono()

export const tracksHandler = app
  .openapi(getTracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTracksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
