import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdEmailSecurityInvestigateBulkJobIdRoute,
  getAccountsAccountIdEmailSecurityInvestigateBulkJobIdMessagesRoute,
  getAccountsAccountIdEmailSecurityInvestigateBulkJobIdRoute,
  getAccountsAccountIdEmailSecurityInvestigateBulkRoute,
  getAccountsAccountIdEmailSecurityInvestigateInvestigateIdActionLogRoute,
  getAccountsAccountIdEmailSecurityInvestigateInvestigateIdDetectionsRoute,
  getAccountsAccountIdEmailSecurityInvestigateInvestigateIdPreviewRoute,
  getAccountsAccountIdEmailSecurityInvestigateInvestigateIdRawRoute,
  getAccountsAccountIdEmailSecurityInvestigateInvestigateIdRoute,
  getAccountsAccountIdEmailSecurityInvestigateInvestigateIdTraceRoute,
  getAccountsAccountIdEmailSecurityInvestigateRoute,
  getAccountsAccountIdEmailSecurityPhishguardReportsRoute,
  getAccountsAccountIdEmailSecuritySubmissionsRoute,
  postAccountsAccountIdEmailSecurityInvestigateBulkJobIdCancelRoute,
  postAccountsAccountIdEmailSecurityInvestigateBulkRoute,
  postAccountsAccountIdEmailSecurityInvestigateInvestigateIdMoveRoute,
  postAccountsAccountIdEmailSecurityInvestigateInvestigateIdReclassifyRoute,
  postAccountsAccountIdEmailSecurityInvestigateMoveRoute,
  postAccountsAccountIdEmailSecurityInvestigatePreviewRoute,
  postAccountsAccountIdEmailSecurityInvestigateReleaseRoute,
  postAccountsAccountIdEmailSecuritySubmissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const emailSecurityHandler = app
  .openapi(getAccountsAccountIdEmailSecurityInvestigateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigateBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdEmailSecurityInvestigateBulkJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateBulkJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigateBulkJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateBulkJobIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigateMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigatePreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigateReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateInvestigateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateInvestigateIdActionLogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateInvestigateIdDetectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigateInvestigateIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateInvestigateIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateInvestigateIdRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecurityInvestigateInvestigateIdReclassifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityInvestigateInvestigateIdTraceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecurityPhishguardReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdEmailSecuritySubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdEmailSecuritySubmissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
