import { OpenAPIHono } from '@hono/zod-openapi'
import {
  applicationHandler,
  applicationKeyCredentialsHandler,
  applicationOwnersHandler,
  applicationPasswordCredentialsHandler,
  deletedApplicationsHandler,
  domainHandler,
  groupHandler,
  groupOwnersHandler,
  groupsOwnersHandler,
  oAuth2PermissionGrantCreateHandler,
  oAuth2PermissionGrantDeleteHandler,
  oAuth2PermissionGrantListHandler,
  objectsHandler,
  servicePrincipalAppRoleAssignedToHandler,
  servicePrincipalAppRoleAssignmentsHandler,
  servicePrincipalHandler,
  servicePrincipalKeyCredentialsHandler,
  servicePrincipalOwnersHandler,
  servicePrincipalPasswordCredentialsHandler,
  servicePrincipalsByAppIdHandler,
  signedInUserHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', applicationHandler)
  .route('/', applicationOwnersHandler)
  .route('/', applicationKeyCredentialsHandler)
  .route('/', applicationPasswordCredentialsHandler)
  .route('/', deletedApplicationsHandler)
  .route('/', domainHandler)
  .route('/', objectsHandler)
  .route('/', groupHandler)
  .route('/', groupsOwnersHandler)
  .route('/', groupOwnersHandler)
  .route('/', signedInUserHandler)
  .route('/', oAuth2PermissionGrantListHandler)
  .route('/', oAuth2PermissionGrantCreateHandler)
  .route('/', oAuth2PermissionGrantDeleteHandler)
  .route('/', servicePrincipalHandler)
  .route('/', servicePrincipalOwnersHandler)
  .route('/', servicePrincipalAppRoleAssignedToHandler)
  .route('/', servicePrincipalAppRoleAssignmentsHandler)
  .route('/', servicePrincipalKeyCredentialsHandler)
  .route('/', servicePrincipalPasswordCredentialsHandler)
  .route('/', servicePrincipalsByAppIdHandler)
  .route('/', userHandler)

export default app
