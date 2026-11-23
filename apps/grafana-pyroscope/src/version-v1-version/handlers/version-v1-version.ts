import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionV1VersionVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const versionV1VersionHandler = app.openapi(postVersionV1VersionVersionRoute, (c) => {
  throw new Error('Not implemented')
})
