import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSystemArchivesArchiveKindRoute,
  getSystemArchivesArchiveKindZipCommitIdRoute,
  getSystemHealthcheckRoute,
  getSystemInfoRoute,
  getSystemStatusRoute,
  postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute,
  postSystemArchivesArchiveKindRoute,
  postSystemMaintenancePurgeSoftwareRoute,
  postSystemRegeneratePoliciesRoute,
  postSystemReloadGroupsRoute,
  postSystemReloadRoute,
  postSystemReloadTechniquesRoute,
  postSystemUpdatePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemHandler = app
  .openapi(getSystemArchivesArchiveKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemArchivesArchiveKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemArchivesArchiveKindRestoreArchiveRestoreKindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemArchivesArchiveKindZipCommitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemHealthcheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemMaintenancePurgeSoftwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemRegeneratePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemReloadGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemReloadTechniquesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSystemStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSystemUpdatePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
