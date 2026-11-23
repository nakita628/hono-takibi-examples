import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountInfo202609ActivityAuditLogsRoute,
  getAccountInfo202609ActivityLoginRoute,
  getAccountInfo202609ActivitySecurityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountInfoHandler = app
  .openapi(getAccountInfo202609ActivityAuditLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInfo202609ActivityLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountInfo202609ActivitySecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
