import { OpenAPIHono } from '@hono/zod-openapi'
import { postBulkMd5Route, postBulkSha1Route } from '../routes'

const app = new OpenAPIHono()

export const bulkHandler = app
  .openapi(postBulkMd5Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBulkSha1Route, (c) => {
    throw new Error('Not implemented')
  })
