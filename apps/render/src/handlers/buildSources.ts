import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute,
  deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
  deleteBuildSourcesBuildSourceIdRoute,
  deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
  getBuildSourcesBuildSourceIdBuildsBuildIdRoute,
  getBuildSourcesBuildSourceIdBuildsRoute,
  getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
  getBuildSourcesBuildSourceIdEnvVarsRoute,
  getBuildSourcesBuildSourceIdRoute,
  getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
  getBuildSourcesBuildSourceIdSecretFilesRoute,
  getBuildSourcesRoute,
  patchBuildSourcesBuildSourceIdRoute,
  postBuildSourcesBuildSourceIdBuildsRoute,
  postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute,
  postBuildSourcesRoute,
  putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute,
  putBuildSourcesBuildSourceIdEnvVarsRoute,
  putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute,
  putBuildSourcesBuildSourceIdSecretFilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildSourcesHandler = app
  .openapi(postBuildSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBuildSourcesBuildSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBuildSourcesBuildSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuildSourcesBuildSourceIdBuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdBuildsBuildIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBuildSourcesBuildSourceIdEnvVarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBuildSourcesBuildSourceIdEnvVarsEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdSecretFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBuildSourcesBuildSourceIdSecretFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBuildSourcesBuildSourceIdSecretFilesEnvVarKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBuildSourcesBuildSourceIdEnvGroupsEnvGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
