import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessageDetailRecordsIdMessageBodyRoute, getMessageDetailRecordsRoute } from '../routes'

const app = new OpenAPIHono()

export const mdrSearchBetaHandler = app
  .openapi(getMessageDetailRecordsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessageDetailRecordsIdMessageBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
