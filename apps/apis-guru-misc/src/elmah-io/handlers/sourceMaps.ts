import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3SourcemapsLogIdRoute } from '../routes'

const app = new OpenAPIHono()

export const sourceMapsHandler = app.openapi(postV3SourcemapsLogIdRoute, (c) => {
  throw new Error('Not implemented')
})
