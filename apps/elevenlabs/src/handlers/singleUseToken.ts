import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1SingleUseTokenTokenTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const singleUseTokenHandler = app.openapi(postV1SingleUseTokenTokenTypeRoute, (c) => {
  throw new Error('Not implemented')
})
