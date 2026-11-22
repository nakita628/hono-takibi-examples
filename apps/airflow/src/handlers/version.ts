import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV2VersionRoute } from '../routes'

const app = new OpenAPIHono()

export const versionHandler = app.openapi(getApiV2VersionRoute, (c) => {
  throw new Error('Not implemented')
})
