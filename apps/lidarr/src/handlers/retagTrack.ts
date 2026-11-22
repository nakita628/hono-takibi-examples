import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1RetagRoute } from '../routes'

const app = new OpenAPIHono()

export const retagTrackHandler = app.openapi(getApiV1RetagRoute, (c) => {
  throw new Error('Not implemented')
})
