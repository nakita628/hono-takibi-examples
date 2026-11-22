import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2UserCustomerContractsNextRoute,
  getV2UserCustomerBillingPeriodsRoute,
  getV2UserCustomerContractsRoute,
  getV2UserCustomerOffersRoute,
  postV2UserCustomerContractsCurrentDisableAutoRenewalRoute,
  postV2UserCustomerContractsCurrentReenableAutoRenewalRoute,
  postV2UserCustomerContractsRoute,
  postV2UserCustomerOffersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customer__ContractsHandler = app
  .openapi(getV2UserCustomerBillingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerContractsCurrentDisableAutoRenewalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerContractsCurrentReenableAutoRenewalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCustomerContractsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
