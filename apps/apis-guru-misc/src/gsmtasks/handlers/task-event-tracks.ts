import { OpenAPIHono } from '@hono/zod-openapi'
import { getTaskEventTracksIdIndexRoute, getTaskEventTracksIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const taskEventTracksHandler = app
  .openapi(getTaskEventTracksIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskEventTracksIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
