import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonAnonymizeSourceAnonymizedTokenRoute,
  getApi2JsonApiKeyInfoRoute,
  getApi2JsonApiServicesRoute,
  getApi2JsonApiStatusRoute,
  getApi2JsonApiUsageHistoryAggregateRoute,
  getApi2JsonApiUsageHistoryRoute,
  getApi2JsonApiUsageRoute,
  getApi2JsonLearnableSourceLearnableTokenRoute,
  getApi2JsonRegionsRoute,
  getApi2JsonSoftwareVersionRoute,
  getApi2JsonTaxonomyClassesClassifierNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getApi2JsonAnonymizeSourceAnonymizedTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiKeyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiUsageHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonApiUsageHistoryAggregateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonLearnableSourceLearnableTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonSoftwareVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonTaxonomyClassesClassifierNameRoute, (c) => {
    throw new Error('Not implemented')
  })
