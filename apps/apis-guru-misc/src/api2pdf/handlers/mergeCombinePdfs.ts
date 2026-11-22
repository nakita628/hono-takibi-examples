import { OpenAPIHono } from '@hono/zod-openapi'
import { postMergeRoute } from '../routes'

const app = new OpenAPIHono()

export const mergeCombinePdfsHandler = app.openapi(postMergeRoute, (c) => {
  throw new Error('Not implemented')
})
