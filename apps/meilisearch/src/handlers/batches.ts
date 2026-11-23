import { OpenAPIHono } from '@hono/zod-openapi'
import { getBatchesBatchUidRoute, getBatchesRoute } from '../routes'

const app = new OpenAPIHono()

export const batchesHandler = app
  .openapi(getBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBatchesBatchUidRoute, (c) => {
    throw new Error('Not implemented')
  })
