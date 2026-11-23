import { OpenAPIHono } from '@hono/zod-openapi'
import { postDocgenBatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const docgenBatchesHandler = app.openapi(postDocgenBatchesRoute, (c) => {
  throw new Error('Not implemented')
})
