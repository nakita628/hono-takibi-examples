import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiAuditExportRoute,
  getWikiRestApiAuditRetentionRoute,
  getWikiRestApiAuditRoute,
  getWikiRestApiAuditSinceRoute,
  postWikiRestApiAuditRoute,
  putWikiRestApiAuditRetentionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(getWikiRestApiAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAuditExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAuditRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiAuditRetentionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiAuditSinceRoute, (c) => {
    throw new Error('Not implemented')
  })
