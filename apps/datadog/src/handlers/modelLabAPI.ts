import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ModelLabApiProjectsProjectIdOwnersUserIdRoute,
  deleteApiV2ModelLabApiProjectsProjectIdStarRoute,
  deleteApiV2ModelLabApiRunsRunIdPinRoute,
  deleteApiV2ModelLabApiRunsRunIdRoute,
  getApiV2ModelLabApiArtifactsContentRoute,
  getApiV2ModelLabApiFacetKeysRoute,
  getApiV2ModelLabApiFacetValuesRoute,
  getApiV2ModelLabApiProjectFacetKeysRoute,
  getApiV2ModelLabApiProjectFacetValuesRoute,
  getApiV2ModelLabApiProjectsProjectIdArtifactsRoute,
  getApiV2ModelLabApiProjectsProjectIdRoute,
  getApiV2ModelLabApiProjectsRoute,
  getApiV2ModelLabApiRunsRoute,
  getApiV2ModelLabApiRunsRunIdArtifactsRoute,
  getApiV2ModelLabApiRunsRunIdRoute,
  postApiV2ModelLabApiProjectsProjectIdOwnersUserIdRoute,
  postApiV2ModelLabApiProjectsProjectIdStarRoute,
  postApiV2ModelLabApiRunsRunIdPinRoute,
} from '../routes'

const app = new OpenAPIHono()

export const modelLabAPIHandler = app
  .openapi(getApiV2ModelLabApiArtifactsContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiFacetKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiFacetValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiProjectFacetKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiProjectFacetValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiProjectsProjectIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ModelLabApiProjectsProjectIdOwnersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ModelLabApiProjectsProjectIdOwnersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ModelLabApiProjectsProjectIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ModelLabApiProjectsProjectIdStarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ModelLabApiRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiRunsRunIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelLabApiRunsRunIdArtifactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ModelLabApiRunsRunIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ModelLabApiRunsRunIdPinRoute, (c) => {
    throw new Error('Not implemented')
  })
