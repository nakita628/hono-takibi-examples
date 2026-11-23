import { OpenAPIHono } from '@hono/zod-openapi'
import { getLogEntriesIdRoute, getLogEntriesRoute, putLogEntriesIdChannelRoute } from '../routes'

const app = new OpenAPIHono()

export const logEntriesHandler = app
  .openapi(getLogEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putLogEntriesIdChannelRoute, (c) => {
    throw new Error('Not implemented')
  })
