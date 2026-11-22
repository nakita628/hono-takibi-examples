import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1SearchRoute, postApiV1SearchBulkRoute, postApiV1SearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(postApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1SearchBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
