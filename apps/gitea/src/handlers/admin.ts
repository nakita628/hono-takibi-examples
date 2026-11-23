import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminActionsRunnersRunnerIdRoute,
  deleteAdminHooksIdRoute,
  deleteAdminUsersUsernameBadgesRoute,
  deleteAdminUsersUsernameKeysIdRoute,
  deleteAdminUsersUsernameRoute,
  getAdminActionsJobsRoute,
  getAdminActionsRunnersRoute,
  getAdminActionsRunnersRunnerIdRoute,
  getAdminActionsRunsRoute,
  getAdminCronRoute,
  getAdminEmailsRoute,
  getAdminEmailsSearchRoute,
  getAdminHooksIdRoute,
  getAdminHooksRoute,
  getAdminOrgsRoute,
  getAdminPackagesRoute,
  getAdminUsersRoute,
  getAdminUsersUsernameBadgesRoute,
  patchAdminActionsRunnersRunnerIdRoute,
  patchAdminHooksIdRoute,
  patchAdminUsersUsernameRoute,
  postAdminActionsRunnersRegistrationTokenRoute,
  postAdminCronTaskRoute,
  postAdminHooksRoute,
  postAdminUsersRoute,
  postAdminUsersUsernameBadgesRoute,
  postAdminUsersUsernameKeysRoute,
  postAdminUsersUsernameOrgsRoute,
  postAdminUsersUsernameRenameRoute,
  postAdminUsersUsernameReposRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminActionsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminActionsRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminActionsRunnersRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminActionsRunnersRunnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminActionsRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCronRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCronTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminEmailsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminHooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminUsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUsernameBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersUsernameBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUsernameBadgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUsernameKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersUsernameKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUsernameOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUsernameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersUsernameReposRoute, (c) => {
    throw new Error('Not implemented')
  })
