import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AppBuilderAppsAppIdDeploymentRoute,
  deleteApiV2AppBuilderAppsAppIdRoute,
  deleteApiV2AppBuilderAppsRoute,
  getApiV2AppBuilderAppsAppIdRoute,
  getApiV2AppBuilderAppsAppIdVersionsRoute,
  getApiV2AppBuilderAppsRoute,
  getApiV2AppBuilderBlueprintBlueprintIdRoute,
  getApiV2AppBuilderBlueprintsIntegrationIdIntegrationIdRoute,
  getApiV2AppBuilderBlueprintsRoute,
  getApiV2AppBuilderBlueprintsSlugsSlugsRoute,
  getApiV2AppBuilderTagsRoute,
  patchApiV2AppBuilderAppsAppIdFavoriteRoute,
  patchApiV2AppBuilderAppsAppIdProtectionLevelRoute,
  patchApiV2AppBuilderAppsAppIdRoute,
  patchApiV2AppBuilderAppsAppIdSelfServiceRoute,
  patchApiV2AppBuilderAppsAppIdTagsRoute,
  patchApiV2AppBuilderAppsAppIdVersionNameRoute,
  postApiV2AppBuilderAppsAppIdDeploymentRoute,
  postApiV2AppBuilderAppsAppIdPublishRequestRoute,
  postApiV2AppBuilderAppsAppIdRevertRoute,
  postApiV2AppBuilderAppsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appBuilderHandler = app
  .openapi(deleteApiV2AppBuilderAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AppBuilderAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AppBuilderAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AppBuilderAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AppBuilderAppsAppIdDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AppBuilderAppsAppIdDeploymentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AppBuilderAppsAppIdFavoriteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AppBuilderAppsAppIdProtectionLevelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AppBuilderAppsAppIdPublishRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AppBuilderAppsAppIdRevertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AppBuilderAppsAppIdSelfServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AppBuilderAppsAppIdTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2AppBuilderAppsAppIdVersionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderAppsAppIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderBlueprintBlueprintIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderBlueprintsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderBlueprintsIntegrationIdIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderBlueprintsSlugsSlugsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AppBuilderTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
