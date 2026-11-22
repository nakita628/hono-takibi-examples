import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ReleasesRoute } from '../routes'

const app = new OpenAPIHono()

export const releasesHandler = app.openapi(getApiV1ReleasesRoute, (c) => {
  throw new Error('Not implemented')
})
