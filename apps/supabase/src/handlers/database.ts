import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ProjectsRefCliLoginRoleRoute,
  deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute,
  deleteV1ProjectsRefDatabaseJitUserIdRoute,
  deleteV1ProjectsRefDatabaseMigrationsRoute,
  getV1ProjectsRefConfigDatabasePgbouncerRoute,
  getV1ProjectsRefConfigDatabasePoolerRoute,
  getV1ProjectsRefConfigDatabasePostgresRoute,
  getV1ProjectsRefDatabaseBackupsRestorePointRoute,
  getV1ProjectsRefDatabaseBackupsRoute,
  getV1ProjectsRefDatabaseBackupsScheduleRoute,
  getV1ProjectsRefDatabaseContextRoute,
  getV1ProjectsRefDatabaseJitListRoute,
  getV1ProjectsRefDatabaseJitRoute,
  getV1ProjectsRefDatabaseMigrationsRoute,
  getV1ProjectsRefDatabaseMigrationsVersionRoute,
  getV1ProjectsRefDatabaseOpenapiRoute,
  getV1ProjectsRefJitAccessRoute,
  getV1ProjectsRefReadonlyRoute,
  getV1ProjectsRefSslEnforcementRoute,
  getV1ProjectsRefTypesTypescriptRoute,
  getV1SnippetsIdRoute,
  getV1SnippetsRoute,
  patchV1ProjectsRefConfigDatabasePoolerRoute,
  patchV1ProjectsRefConfigDatabasePostgresRoute,
  patchV1ProjectsRefDatabaseBackupsScheduleRoute,
  patchV1ProjectsRefDatabaseMigrationsVersionRoute,
  patchV1ProjectsRefDatabasePasswordRoute,
  postV1ProjectsRefCliLoginRoleRoute,
  postV1ProjectsRefDatabaseBackupsRestorePitrRoute,
  postV1ProjectsRefDatabaseBackupsRestorePointRoute,
  postV1ProjectsRefDatabaseBackupsRestoreRoute,
  postV1ProjectsRefDatabaseBackupsUndoRoute,
  postV1ProjectsRefDatabaseJitInviteAcceptRoute,
  postV1ProjectsRefDatabaseJitInviteRoute,
  postV1ProjectsRefDatabaseJitRoute,
  postV1ProjectsRefDatabaseMigrationsRoute,
  postV1ProjectsRefDatabaseQueryReadOnlyRoute,
  postV1ProjectsRefDatabaseQueryRoute,
  postV1ProjectsRefDatabaseWebhooksEnableRoute,
  postV1ProjectsRefReadonlyTemporaryDisableRoute,
  postV1ProjectsRefReadReplicasRemoveRoute,
  postV1ProjectsRefReadReplicasSetupRoute,
  putV1ProjectsRefConfigDatabasePostgresRoute,
  putV1ProjectsRefDatabaseJitRoute,
  putV1ProjectsRefDatabaseMigrationsRoute,
  putV1ProjectsRefJitAccessRoute,
  putV1ProjectsRefSslEnforcementRoute,
} from '../routes'

const app = new OpenAPIHono()

export const databaseHandler = app
  .openapi(getV1SnippetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SnippetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefJitAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefJitAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefSslEnforcementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefSslEnforcementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefTypesTypescriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefReadonlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefReadonlyTemporaryDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefReadReplicasSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefReadReplicasRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefCliLoginRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefCliLoginRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefDatabaseMigrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseMigrationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefDatabaseMigrationsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseQueryReadOnlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseWebhooksEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefDatabasePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseJitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseJitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefDatabaseJitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseJitListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseJitInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseJitInviteAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefDatabaseJitInviteInviteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProjectsRefDatabaseJitUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDatabasePgbouncerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDatabasePoolerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigDatabasePoolerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefConfigDatabasePostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProjectsRefConfigDatabasePostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigDatabasePostgresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsRestorePitrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsRestorePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseBackupsRestorePointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsRefDatabaseBackupsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefDatabaseBackupsScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefDatabaseBackupsUndoRoute, (c) => {
    throw new Error('Not implemented')
  })
