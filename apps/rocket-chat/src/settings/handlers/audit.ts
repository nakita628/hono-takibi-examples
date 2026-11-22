import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1AuditAuditionsRoute,
  postApiV1AuditMessagesRoute,
  postApiV1AuditOmnichannelMessagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(getApiV1AuditAuditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuditMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1AuditOmnichannelMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
