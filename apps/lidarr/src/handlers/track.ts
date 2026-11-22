import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1TrackIdRoute, getApiV1TrackRoute } from '../routes'

const app = new OpenAPIHono()

export const trackHandler = app
  .openapi(getApiV1TrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
