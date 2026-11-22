import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InstantFundingInstantFundingIdRoute,
  getV1InstantFundingInstantFundingIdRoute,
  getV1InstantFundingLimitsAccountsRoute,
  getV1InstantFundingLimitsRoute,
  getV1InstantFundingReportsRoute,
  getV1InstantFundingRoute,
  getV1InstantFundingSettlementsRoute,
  getV1InstantFundingSettlementsSettlementIdRoute,
  postV1InstantFundingRoute,
  postV1InstantFundingSettlementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const instantFundingHandler = app
  .openapi(getV1InstantFundingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstantFundingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InstantFundingInstantFundingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingInstantFundingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingLimitsAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstantFundingSettlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstantFundingSettlementsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
