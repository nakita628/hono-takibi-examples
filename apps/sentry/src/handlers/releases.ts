import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute,
  deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexRoute,
  getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexRoute,
  getOrganizationsOrganizationIdOrSlugSessionsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute,
  postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexRoute,
  postOrganizationsOrganizationIdOrSlugReleasesIndexRoute,
  postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute,
  postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute,
  putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute,
  putOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute,
  putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const releasesHandler = app
  .openapi(postOrganizationsOrganizationIdOrSlugArtifactbundleAssembleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleaseThresholdStatusesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugReleasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugReleasesVersionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionCommitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugReleasesVersionDeploysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrganizationIdOrSlugReleasesVersionFilesFileIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getOrganizationsOrganizationIdOrSlugReleasesVersionPreviousWithCommitsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getOrganizationsOrganizationIdOrSlugSessionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionCommitsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesVersionFilesFileIdIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProjectsOrganizationIdOrSlugProjectIdOrSlugReleasesCompletionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdOrSlugReleasesVersionCommitfilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
