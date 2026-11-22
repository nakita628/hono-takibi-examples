import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ConfigsConfigIdDeletedSettingsRoute,
  getV1OrganizationsOrganizationIdAuditlogsRoute,
  getV1ProductsProductIdAuditlogsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsHandler = app
  .openapi(getV1ConfigsConfigIdDeletedSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrganizationsOrganizationIdAuditlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsProductIdAuditlogsRoute, (c) => {
    throw new Error('Not implemented')
  })
