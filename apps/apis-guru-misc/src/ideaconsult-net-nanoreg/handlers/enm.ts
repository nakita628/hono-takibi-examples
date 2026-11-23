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
} from '../routes'

const app = new OpenAPIHono()

export const enmHandler = app
  .openapi(getEnmDbInvestigationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQueryCompoundTermRepresentationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQuerySimilarityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQuerySmartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbQueryStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidCompositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidStructuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidStudyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnmDbSubstanceUuidStudySummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
