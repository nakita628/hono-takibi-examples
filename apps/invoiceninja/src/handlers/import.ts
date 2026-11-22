import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1ImportJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const importHandler = app.openapi(postApiV1ImportJsonRoute, (c) => {
  throw new Error('Not implemented')
})
