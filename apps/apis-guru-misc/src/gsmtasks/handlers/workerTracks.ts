import { OpenAPIHono } from '@hono/zod-openapi'
import { getWorkerTracksIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const workerTracksHandler = app.openapi(getWorkerTracksIndexRoute, (c) => {
  throw new Error('Not implemented')
})
