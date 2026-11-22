import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditLogsProvisioningProvisioningObjectSummaryIdRoute,
  getAuditLogsProvisioningProvisioningObjectSummaryIdRoute,
  getAuditLogsProvisioningRoute,
  patchAuditLogsProvisioningProvisioningObjectSummaryIdRoute,
  postAuditLogsProvisioningRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditLogsProvisioningObjectSummaryHandler = app
  .openapi(getAuditLogsProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditLogsProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditLogsProvisioningProvisioningObjectSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditLogsProvisioningProvisioningObjectSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditLogsProvisioningProvisioningObjectSummaryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
