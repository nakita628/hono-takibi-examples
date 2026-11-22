import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BuildsIdRelationshipsBetaGroupsRoute,
  deleteV1BuildsIdRelationshipsIndividualTestersRoute,
  getV1BuildsIdAppEncryptionDeclarationRoute,
  getV1BuildsIdAppRoute,
  getV1BuildsIdAppStoreVersionRoute,
  getV1BuildsIdBetaAppReviewSubmissionRoute,
  getV1BuildsIdBetaBuildLocalizationsRoute,
  getV1BuildsIdBuildBetaDetailRoute,
  getV1BuildsIdDiagnosticSignaturesRoute,
  getV1BuildsIdIconsRoute,
  getV1BuildsIdIndividualTestersRoute,
  getV1BuildsIdPerfPowerMetricsRoute,
  getV1BuildsIdPreReleaseVersionRoute,
  getV1BuildsIdRelationshipsAppEncryptionDeclarationRoute,
  getV1BuildsIdRelationshipsIndividualTestersRoute,
  getV1BuildsIdRoute,
  getV1BuildsRoute,
  patchV1BuildsIdRelationshipsAppEncryptionDeclarationRoute,
  patchV1BuildsIdRoute,
  postV1BuildsIdRelationshipsBetaGroupsRoute,
  postV1BuildsIdRelationshipsIndividualTestersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buildsHandler = app
  .openapi(getV1BuildsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BuildsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdAppRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdAppEncryptionDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdAppStoreVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdBetaAppReviewSubmissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdBetaBuildLocalizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdBuildBetaDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdDiagnosticSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdIconsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdPerfPowerMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdPreReleaseVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdRelationshipsAppEncryptionDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1BuildsIdRelationshipsAppEncryptionDeclarationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BuildsIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BuildsIdRelationshipsBetaGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BuildsIdRelationshipsIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BuildsIdRelationshipsIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BuildsIdRelationshipsIndividualTestersRoute, (c) => {
    throw new Error('Not implemented')
  })
