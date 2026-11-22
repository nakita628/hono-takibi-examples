import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1OneTimeTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const oneTimeTokenHandler = app.openapi(postApiV1OneTimeTokenRoute, (c) => {
  throw new Error('Not implemented')
})
