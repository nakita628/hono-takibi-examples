import { OpenAPIHono } from '@hono/zod-openapi'
import { putApiAccessTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const accessTokenHandler = app.openapi(putApiAccessTokenRoute, (c) => {
  throw new Error('Not implemented')
})
