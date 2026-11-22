import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityCollaborationAnalyzedEmailsAnalyzedEmailIdRoute,
  deleteSecurityCollaborationRoute,
  getSecurityCollaborationAnalyzedEmailsAnalyzedEmailIdRoute,
  getSecurityCollaborationAnalyzedEmailsCountRoute,
  getSecurityCollaborationAnalyzedEmailsRoute,
  getSecurityCollaborationRoute,
  patchSecurityCollaborationAnalyzedEmailsAnalyzedEmailIdRoute,
  patchSecurityCollaborationRoute,
  postSecurityCollaborationAnalyzedEmailsMicrosoftGraphSecurityRemediateRoute,
  postSecurityCollaborationAnalyzedEmailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityCollaborationRootHandler = app
  .openapi(getSecurityCollaborationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCollaborationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityCollaborationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCollaborationAnalyzedEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCollaborationAnalyzedEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCollaborationAnalyzedEmailsAnalyzedEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityCollaborationAnalyzedEmailsAnalyzedEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityCollaborationAnalyzedEmailsAnalyzedEmailIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityCollaborationAnalyzedEmailsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityCollaborationAnalyzedEmailsMicrosoftGraphSecurityRemediateRoute, (c) => {
    throw new Error('Not implemented')
  })
