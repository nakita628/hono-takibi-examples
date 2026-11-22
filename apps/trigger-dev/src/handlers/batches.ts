import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV3BatchesBatchIdItemsRoute, postApiV3BatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const batchesHandler = app
  .openapi(postApiV3BatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3BatchesBatchIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
