import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexRoute,
  getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexRoute,
  getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexRoute,
  postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mobileBuildsHandler = app
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdInstallDetailsIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getOrganizationsOrganizationIdOrSlugPreprodartifactsArtifactIdSizeAnalysisIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugFilesPreprodartifactsAssembleIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusCheckRulesIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodSizeAnalysisStatusChecksSkipIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsOrganizationIdOrSlugProjectIdOrSlugPreprodartifactsBuildDistributionLatestIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
