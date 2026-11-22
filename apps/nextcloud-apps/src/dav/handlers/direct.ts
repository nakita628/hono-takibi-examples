import { OpenAPIHono } from '@hono/zod-openapi'
import { postOcsV2PhpAppsDavApiV1DirectRoute } from '../routes'

const app = new OpenAPIHono()

export const directHandler = app.openapi(postOcsV2PhpAppsDavApiV1DirectRoute, (c) => {
  throw new Error('Not implemented')
})
