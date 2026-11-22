import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexRoute,
  postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const snapshotsHandler = app
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdArchiveIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsSnapshotIdImagesImageIdentifierIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsSnapshotsLatestBaseIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusCheckRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSnapshotsStatusChecksSkipIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsSnapshotsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
