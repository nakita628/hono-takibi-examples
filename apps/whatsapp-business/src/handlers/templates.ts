import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVersionWABAIDMessageTemplatesRoute,
  getVersionTEMPLATEIDRoute,
  getVersionWABAIDMessageTemplatesRoute,
  postVersionTEMPLATEIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getVersionTEMPLATEIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionTEMPLATEIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVersionWABAIDMessageTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
