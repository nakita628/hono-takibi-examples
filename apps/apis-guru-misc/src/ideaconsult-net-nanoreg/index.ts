import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEnmDbInvestigationRoute,
  getEnmDbQueryCompoundTermRepresentationRoute,
  getEnmDbQuerySimilarityRoute,
  getEnmDbQuerySmartsRoute,
  getEnmDbQueryStudyRoute,
  getEnmDbSubstanceRoute,
  getEnmDbSubstanceUuidCompositionRoute,
  getEnmDbSubstanceUuidRoute,
  getEnmDbSubstanceUuidStructuresRoute,
  getEnmDbSubstanceUuidStudyRoute,
  getEnmDbSubstanceUuidStudySummaryRoute,
  getSelectRoute,
  postSelectRoute,
} from './routes'
import {
  getEnmDbInvestigationRouteHandler,
  getEnmDbQueryCompoundTermRepresentationRouteHandler,
  getEnmDbQuerySimilarityRouteHandler,
  getEnmDbQuerySmartsRouteHandler,
  getEnmDbQueryStudyRouteHandler,
  getEnmDbSubstanceRouteHandler,
  getEnmDbSubstanceUuidCompositionRouteHandler,
  getEnmDbSubstanceUuidRouteHandler,
  getEnmDbSubstanceUuidStructuresRouteHandler,
  getEnmDbSubstanceUuidStudyRouteHandler,
  getEnmDbSubstanceUuidStudySummaryRouteHandler,
  getSelectRouteHandler,
  postSelectRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEnmDbInvestigationRoute, getEnmDbInvestigationRouteHandler)
  .openapi(
    getEnmDbQueryCompoundTermRepresentationRoute,
    getEnmDbQueryCompoundTermRepresentationRouteHandler,
  )
  .openapi(getEnmDbQuerySimilarityRoute, getEnmDbQuerySimilarityRouteHandler)
  .openapi(getEnmDbQuerySmartsRoute, getEnmDbQuerySmartsRouteHandler)
  .openapi(getEnmDbQueryStudyRoute, getEnmDbQueryStudyRouteHandler)
  .openapi(getEnmDbSubstanceRoute, getEnmDbSubstanceRouteHandler)
  .openapi(getEnmDbSubstanceUuidRoute, getEnmDbSubstanceUuidRouteHandler)
  .openapi(getEnmDbSubstanceUuidCompositionRoute, getEnmDbSubstanceUuidCompositionRouteHandler)
  .openapi(getEnmDbSubstanceUuidStructuresRoute, getEnmDbSubstanceUuidStructuresRouteHandler)
  .openapi(getEnmDbSubstanceUuidStudyRoute, getEnmDbSubstanceUuidStudyRouteHandler)
  .openapi(getEnmDbSubstanceUuidStudySummaryRoute, getEnmDbSubstanceUuidStudySummaryRouteHandler)
  .openapi(getSelectRoute, getSelectRouteHandler)
  .openapi(postSelectRoute, postSelectRouteHandler)

export default app
