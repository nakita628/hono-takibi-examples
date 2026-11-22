import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2DemJourneysInferredIgnoredJourneyIdRoute,
  deleteApiV2DemJourneysJourneyIdRoute,
  deleteApiV2DemJourneysVariantsVariantIdRoute,
  getApiV2DemJourneysInferredSearchRoute,
  getApiV2DemJourneysJourneyIdRecommendedTestsRoute,
  getApiV2DemJourneysJourneyIdRoute,
  getApiV2DemJourneysSearchRoute,
  postApiV2DemJourneysInferredJourneyIdIgnoreRoute,
  postApiV2DemJourneysJourneyIdVariantsRoute,
  postApiV2DemJourneysPublicJourneyIdSuiteRoute,
  postApiV2DemJourneysRoute,
  postApiV2DemJourneysSuitesBatchRoute,
  putApiV2DemJourneysJourneyIdRoute,
  putApiV2DemJourneysVariantsVariantIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const demHandler = app
  .openapi(postApiV2DemJourneysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DemJourneysInferredIgnoredJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DemJourneysInferredSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DemJourneysInferredJourneyIdIgnoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DemJourneysSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DemJourneysSuitesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DemJourneysVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DemJourneysVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DemJourneysJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DemJourneysJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DemJourneysJourneyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DemJourneysJourneyIdRecommendedTestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DemJourneysJourneyIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DemJourneysPublicJourneyIdSuiteRoute, (c) => {
    throw new Error('Not implemented')
  })
