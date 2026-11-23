import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPlatformDocsRoute,
  getPlatformDocsSwaggerUiRoute,
  getPlatformPrivateAutocompleteRoute,
  getPlatformPrivateDiseaseDiseaseRoute,
  getPlatformPrivateDrugDRUGIDRoute,
  getPlatformPrivateEcoECOIDRoute,
  getPlatformPrivateQuicksearchRoute,
  getPlatformPrivateRelationDiseaseDiseaseRoute,
  getPlatformPrivateRelationTargetTargetRoute,
  getPlatformPrivateTargetExpressionRoute,
  getPlatformPrivateTargetTargetRoute,
  getPlatformPublicAssociationFilterRoute,
  getPlatformPublicAssociationRoute,
  getPlatformPublicEvidenceFilterRoute,
  getPlatformPublicEvidenceRoute,
  getPlatformPublicSearchRoute,
  getPlatformPublicUtilsMetricsRoute,
  getPlatformPublicUtilsPingRoute,
  getPlatformPublicUtilsStatsRoute,
  getPlatformPublicUtilsTherapeuticareasRoute,
  getPlatformPublicUtilsVersionRoute,
  getPlatformSwaggerRoute,
  postPlatformPrivateBesthitsearchRoute,
  postPlatformPrivateDiseaseRoute,
  postPlatformPrivateEnrichmentTargetsRoute,
  postPlatformPrivateRelationRoute,
  postPlatformPrivateTargetExpressionRoute,
  postPlatformPrivateTargetRoute,
  postPlatformPublicAssociationFilterRoute,
  postPlatformPublicEvidenceFilterRoute,
  postPlatformPublicEvidenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const platformHandler = app
  .openapi(getPlatformDocsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformDocsSwaggerUiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateAutocompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPrivateBesthitsearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPrivateDiseaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateDiseaseDiseaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateDrugDRUGIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateEcoECOIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPrivateEnrichmentTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateQuicksearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPrivateRelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateRelationDiseaseDiseaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateRelationTargetTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPrivateTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateTargetExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPrivateTargetExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPrivateTargetTargetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicAssociationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicAssociationFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPublicAssociationFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPublicEvidenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicEvidenceFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlatformPublicEvidenceFilterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsPingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsTherapeuticareasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformPublicUtilsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformSwaggerRoute, (c) => {
    throw new Error('Not implemented')
  })
