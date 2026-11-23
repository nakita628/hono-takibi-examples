import { OpenAPIHono } from '@hono/zod-openapi'
import { postLocalinventoryBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const localinventoryHandler = app.openapi(postLocalinventoryBatchRoute, (c) => {
  throw new Error('Not implemented')
})
