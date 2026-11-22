import { OpenAPIHono } from '@hono/zod-openapi'
import { postBuildsBuildIdLogRoute } from '../routes'

const app = new OpenAPIHono()

export const buildLogMsgHandler = app.openapi(postBuildsBuildIdLogRoute, (c) => {
  throw new Error('Not implemented')
})
