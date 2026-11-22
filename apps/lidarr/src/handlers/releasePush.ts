import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ReleasePushRoute } from '../routes'

const app = new OpenAPIHono()

export const releasePushHandler = app.openapi(postApiV1ReleasePushRoute, (c) => {
  throw new Error('Not implemented')
})
