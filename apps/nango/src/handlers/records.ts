import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordsRoute, patchRecordsPruneRoute } from '../routes'

const app = new OpenAPIHono()

export const recordsHandler = app
  .openapi(getRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRecordsPruneRoute, (c) => {
    throw new Error('Not implemented')
  })
