import { OpenAPIHono } from '@hono/zod-openapi'
import { postAppsAppIdEmailBatchRoute, postAppsAppIdEmailDocumentRoute } from '../routes'

const app = new OpenAPIHono()

export const emailsHandler = app
  .openapi(postAppsAppIdEmailBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdEmailDocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
