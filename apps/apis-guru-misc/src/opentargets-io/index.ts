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
} from './routes'
import {
  getPlatformDocsRouteHandler,
  getPlatformDocsSwaggerUiRouteHandler,
  getPlatformPrivateAutocompleteRouteHandler,
  getPlatformPrivateDiseaseDiseaseRouteHandler,
  getPlatformPrivateDrugDRUGIDRouteHandler,
  getPlatformPrivateEcoECOIDRouteHandler,
  getPlatformPrivateQuicksearchRouteHandler,
  getPlatformPrivateRelationDiseaseDiseaseRouteHandler,
  getPlatformPrivateRelationTargetTargetRouteHandler,
  getPlatformPrivateTargetExpressionRouteHandler,
  getPlatformPrivateTargetTargetRouteHandler,
  getPlatformPublicAssociationFilterRouteHandler,
  getPlatformPublicAssociationRouteHandler,
  getPlatformPublicEvidenceFilterRouteHandler,
  getPlatformPublicEvidenceRouteHandler,
  getPlatformPublicSearchRouteHandler,
  getPlatformPublicUtilsMetricsRouteHandler,
  getPlatformPublicUtilsPingRouteHandler,
  getPlatformPublicUtilsStatsRouteHandler,
  getPlatformPublicUtilsTherapeuticareasRouteHandler,
  getPlatformPublicUtilsVersionRouteHandler,
  getPlatformSwaggerRouteHandler,
  postPlatformPrivateBesthitsearchRouteHandler,
  postPlatformPrivateDiseaseRouteHandler,
  postPlatformPrivateEnrichmentTargetsRouteHandler,
  postPlatformPrivateRelationRouteHandler,
  postPlatformPrivateTargetExpressionRouteHandler,
  postPlatformPrivateTargetRouteHandler,
  postPlatformPublicAssociationFilterRouteHandler,
  postPlatformPublicEvidenceFilterRouteHandler,
  postPlatformPublicEvidenceRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getPlatformDocsRoute, getPlatformDocsRouteHandler)
  .openapi(getPlatformDocsSwaggerUiRoute, getPlatformDocsSwaggerUiRouteHandler)
  .openapi(getPlatformPrivateAutocompleteRoute, getPlatformPrivateAutocompleteRouteHandler)
  .openapi(postPlatformPrivateBesthitsearchRoute, postPlatformPrivateBesthitsearchRouteHandler)
  .openapi(postPlatformPrivateDiseaseRoute, postPlatformPrivateDiseaseRouteHandler)
  .openapi(getPlatformPrivateDiseaseDiseaseRoute, getPlatformPrivateDiseaseDiseaseRouteHandler)
  .openapi(getPlatformPrivateDrugDRUGIDRoute, getPlatformPrivateDrugDRUGIDRouteHandler)
  .openapi(getPlatformPrivateEcoECOIDRoute, getPlatformPrivateEcoECOIDRouteHandler)
  .openapi(
    postPlatformPrivateEnrichmentTargetsRoute,
    postPlatformPrivateEnrichmentTargetsRouteHandler,
  )
  .openapi(getPlatformPrivateQuicksearchRoute, getPlatformPrivateQuicksearchRouteHandler)
  .openapi(postPlatformPrivateRelationRoute, postPlatformPrivateRelationRouteHandler)
  .openapi(
    getPlatformPrivateRelationDiseaseDiseaseRoute,
    getPlatformPrivateRelationDiseaseDiseaseRouteHandler,
  )
  .openapi(
    getPlatformPrivateRelationTargetTargetRoute,
    getPlatformPrivateRelationTargetTargetRouteHandler,
  )
  .openapi(postPlatformPrivateTargetRoute, postPlatformPrivateTargetRouteHandler)
  .openapi(getPlatformPrivateTargetExpressionRoute, getPlatformPrivateTargetExpressionRouteHandler)
  .openapi(
    postPlatformPrivateTargetExpressionRoute,
    postPlatformPrivateTargetExpressionRouteHandler,
  )
  .openapi(getPlatformPrivateTargetTargetRoute, getPlatformPrivateTargetTargetRouteHandler)
  .openapi(getPlatformPublicAssociationRoute, getPlatformPublicAssociationRouteHandler)
  .openapi(getPlatformPublicAssociationFilterRoute, getPlatformPublicAssociationFilterRouteHandler)
  .openapi(
    postPlatformPublicAssociationFilterRoute,
    postPlatformPublicAssociationFilterRouteHandler,
  )
  .openapi(getPlatformPublicEvidenceRoute, getPlatformPublicEvidenceRouteHandler)
  .openapi(postPlatformPublicEvidenceRoute, postPlatformPublicEvidenceRouteHandler)
  .openapi(getPlatformPublicEvidenceFilterRoute, getPlatformPublicEvidenceFilterRouteHandler)
  .openapi(postPlatformPublicEvidenceFilterRoute, postPlatformPublicEvidenceFilterRouteHandler)
  .openapi(getPlatformPublicSearchRoute, getPlatformPublicSearchRouteHandler)
  .openapi(getPlatformPublicUtilsMetricsRoute, getPlatformPublicUtilsMetricsRouteHandler)
  .openapi(getPlatformPublicUtilsPingRoute, getPlatformPublicUtilsPingRouteHandler)
  .openapi(getPlatformPublicUtilsStatsRoute, getPlatformPublicUtilsStatsRouteHandler)
  .openapi(
    getPlatformPublicUtilsTherapeuticareasRoute,
    getPlatformPublicUtilsTherapeuticareasRouteHandler,
  )
  .openapi(getPlatformPublicUtilsVersionRoute, getPlatformPublicUtilsVersionRouteHandler)
  .openapi(getPlatformSwaggerRoute, getPlatformSwaggerRouteHandler)

export default app
