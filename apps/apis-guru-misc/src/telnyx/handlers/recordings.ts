import { OpenAPIHono } from '@hono/zod-openapi'
import { getRecordingsIdRoute, getRecordingsRoute } from '../routes'

const app = new OpenAPIHono()

export const recordingsHandler = app
  .openapi(getRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecordingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
