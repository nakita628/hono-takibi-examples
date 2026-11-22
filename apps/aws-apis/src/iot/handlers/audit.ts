import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAuditConfigurationRoute,
  deleteAuditScheduledauditsScheduledAuditNameRoute,
  getAuditConfigurationRoute,
  getAuditFindingsFindingIdRoute,
  getAuditMitigationactionsExecutionsTaskIdFindingIdRoute,
  getAuditMitigationactionsTasksStartTimeEndTimeRoute,
  getAuditMitigationactionsTasksTaskIdRoute,
  getAuditRelatedResourcesFindingIdRoute,
  getAuditScheduledauditsRoute,
  getAuditScheduledauditsScheduledAuditNameRoute,
  getAuditTasksStartTimeEndTimeRoute,
  getAuditTasksTaskIdRoute,
  patchAuditConfigurationRoute,
  patchAuditScheduledauditsScheduledAuditNameRoute,
  patchAuditSuppressionsUpdateRoute,
  postAuditFindingsRoute,
  postAuditMitigationactionsTasksTaskIdRoute,
  postAuditScheduledauditsScheduledAuditNameRoute,
  postAuditSuppressionsCreateRoute,
  postAuditSuppressionsDeleteRoute,
  postAuditSuppressionsDescribeRoute,
  postAuditSuppressionsListRoute,
  postAuditTasksRoute,
  putAuditMitigationactionsTasksTaskIdCancelRoute,
  putAuditTasksTaskIdCancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const auditHandler = app
  .openapi(putAuditMitigationactionsTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAuditTasksTaskIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditSuppressionsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditScheduledauditsScheduledAuditNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditScheduledauditsScheduledAuditNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditScheduledauditsScheduledAuditNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditScheduledauditsScheduledAuditNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAuditConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditSuppressionsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditFindingsFindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditMitigationactionsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditMitigationactionsTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditSuppressionsDescribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditTasksTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditFindingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditMitigationactionsExecutionsTaskIdFindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditMitigationactionsTasksStartTimeEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditSuppressionsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditTasksStartTimeEndTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditRelatedResourcesFindingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAuditScheduledauditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAuditTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAuditSuppressionsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
