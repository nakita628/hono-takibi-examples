import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3ReleasePushRoute } from '../routes'

const app = new OpenAPIHono()

export const releasePushHandler = app.openapi(postApiV3ReleasePushRoute, (c) => {
  throw new Error('Not implemented')
})
