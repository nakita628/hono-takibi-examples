import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersLeavePoliciesLeavePolicyIdAgebasedleaveRoute,
  getProvidersLeavePoliciesLeavePolicyIdRoute,
  getProvidersLeavePoliciesLeavePolicyIdWagebasedleaveRoute,
  getProvidersLeavePoliciesLeavePolicyIdYearsofservicebasedleaveRoute,
  getProvidersProviderIdLeavePoliciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providerLeavePolicyHandler = app
  .openapi(getProvidersLeavePoliciesLeavePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersLeavePoliciesLeavePolicyIdAgebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersLeavePoliciesLeavePolicyIdWagebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersLeavePoliciesLeavePolicyIdYearsofservicebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersProviderIdLeavePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
