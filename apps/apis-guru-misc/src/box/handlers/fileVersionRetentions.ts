import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFileVersionRetentionsFileVersionRetentionIdRoute,
  getFileVersionRetentionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileVersionRetentionsHandler = app
  .openapi(getFileVersionRetentionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFileVersionRetentionsFileVersionRetentionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
