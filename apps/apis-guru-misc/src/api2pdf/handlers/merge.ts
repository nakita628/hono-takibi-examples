import { OpenAPIHono } from '@hono/zod-openapi'
import { postMergeRoute } from '../routes'

const app = new OpenAPIHono()

export const mergeHandler = app.openapi(postMergeRoute, (c) => {
  throw new Error('Not implemented')
})
