import { OpenAPIHono } from '@hono/zod-openapi'
import { getMessagesDownloadDownloadUuidRoute, postMessagesDownloadRoute } from '../routes'

const app = new OpenAPIHono()

export const csvuiOnlyHandler = app
  .openapi(postMessagesDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMessagesDownloadDownloadUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
