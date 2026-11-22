import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AppStoreVersionsIdRoute,
  getV1AppStoreVersionsIdAgeRatingDeclarationRoute,
  getV1AppStoreVersionsIdAppStoreReviewDetailRoute,
  getV1AppStoreVersionsIdAppStoreVersionLocalizationsRoute,
  getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRoute,
  getV1AppStoreVersionsIdAppStoreVersionSubmissionRoute,
  getV1AppStoreVersionsIdBuildRoute,
  getV1AppStoreVersionsIdIdfaDeclarationRoute,
  getV1AppStoreVersionsIdRelationshipsBuildRoute,
  getV1AppStoreVersionsIdRoute,
  getV1AppStoreVersionsIdRoutingAppCoverageRoute,
  patchV1AppStoreVersionsIdRelationshipsBuildRoute,
  patchV1AppStoreVersionsIdRoute,
  postV1AppStoreVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appStoreVersionsHandler = app
  .openapi(postV1AppStoreVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AppStoreVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAgeRatingDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreReviewDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreVersionLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreVersionPhasedReleaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdAppStoreVersionSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdIdfaDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdRelationshipsBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1AppStoreVersionsIdRelationshipsBuildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppStoreVersionsIdRoutingAppCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
