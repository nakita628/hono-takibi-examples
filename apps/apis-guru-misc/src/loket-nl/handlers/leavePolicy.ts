import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveIdRoute,
  deleteProvidersEmployersLeavePoliciesLeavePolicyIdRoute,
  deleteProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveIdRoute,
  deleteProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveIdRoute,
  getProvidersEmployersEmployerIdLeavePoliciesRoute,
  getProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveIdRoute,
  getProvidersEmployersLeavePoliciesLeavePolicyIdAgebasedleaveRoute,
  getProvidersEmployersLeavePoliciesLeavePolicyIdRoute,
  getProvidersEmployersLeavePoliciesLeavePolicyIdWagebasedleaveRoute,
  getProvidersEmployersLeavePoliciesLeavePolicyIdYearsofservicebasedleaveRoute,
  getProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveIdRoute,
  getProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveIdRoute,
  patchProvidersEmployersEmployerIdLeavePoliciesRoute,
  postProvidersEmployersEmployerIdLeavePoliciesRoute,
  postProvidersEmployersLeavePoliciesLeavePolicyIdAgebasedleaveRoute,
  postProvidersEmployersLeavePoliciesLeavePolicyIdWagebasedleaveRoute,
  postProvidersEmployersLeavePoliciesLeavePolicyIdYearsofservicebasedleaveRoute,
  putProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveIdRoute,
  putProvidersEmployersLeavePoliciesLeavePolicyIdRoute,
  putProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveIdRoute,
  putProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const leavePolicyHandler = app
  .openapi(deleteProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersLeavePoliciesAgebasedleaveAgeBasedLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersLeavePoliciesWagebasedleaveWageBasedLeaveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersLeavePoliciesYearsofservicebasedleaveYearsOfServiceBasedLeaveIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(deleteProvidersEmployersLeavePoliciesLeavePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavePoliciesLeavePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersLeavePoliciesLeavePolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavePoliciesLeavePolicyIdAgebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersLeavePoliciesLeavePolicyIdAgebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavePoliciesLeavePolicyIdWagebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersLeavePoliciesLeavePolicyIdWagebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersLeavePoliciesLeavePolicyIdYearsofservicebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersLeavePoliciesLeavePolicyIdYearsofservicebasedleaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdLeavePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployerIdLeavePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdLeavePoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
