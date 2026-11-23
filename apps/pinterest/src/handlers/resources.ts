import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourcesAdAccountCountriesRoute,
  getResourcesDeliveryMetricsRoute,
  getResourcesLeadFormQuestionsRoute,
  getResourcesMetricsReadyStateRoute,
  getResourcesTargetingInterestsInterestIdRoute,
  getResourcesTargetingTargetingTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getResourcesAdAccountCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesDeliveryMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesLeadFormQuestionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesMetricsReadyStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTargetingInterestsInterestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesTargetingTargetingTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
