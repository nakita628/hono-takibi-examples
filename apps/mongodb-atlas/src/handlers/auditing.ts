import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiAtlasV2GroupsGroupIdAuditLogRoute,
  patchApiAtlasV2GroupsGroupIdAuditLogRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditingHandler = app
  .openapi(getApiAtlasV2GroupsGroupIdAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiAtlasV2GroupsGroupIdAuditLogRoute, (c) => {
    throw new Error('Not implemented')
  })
