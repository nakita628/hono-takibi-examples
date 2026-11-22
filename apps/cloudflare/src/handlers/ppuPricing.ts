import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute,
  getAccountsAccountIdPayPerUseProposalsRoute,
  getZonesZoneIdPayPerUseOperatorsRoute,
  postAccountsAccountIdPayPerUseProposalsRoute,
  postZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ppuPricingHandler = app
  .openapi(getAccountsAccountIdPayPerUseProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdPayPerUseProposalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdPayPerUseOperatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdPayPerUseOperatorsOperatorIdPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
