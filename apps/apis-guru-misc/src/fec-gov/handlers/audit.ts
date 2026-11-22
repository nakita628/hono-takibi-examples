import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAuditCaseIndexRoute,
  getAuditCategoryIndexRoute,
  getAuditPrimaryCategoryIndexRoute,
  getNamesAuditCandidatesIndexRoute,
  getNamesAuditCommitteesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(getAuditCaseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditCategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditPrimaryCategoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesAuditCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNamesAuditCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
