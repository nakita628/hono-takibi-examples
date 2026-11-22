import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBalanceSheetConsolidatedRoute,
  getBalanceSheetRoute,
  getCashFlowConsolidatedRoute,
  getCashFlowRoute,
  getDividendsCalendarRoute,
  getDividendsRoute,
  getEarningsCalendarRoute,
  getEarningsRoute,
  getIncomeStatementConsolidatedRoute,
  getIncomeStatementRoute,
  getIpoCalendarRoute,
  getKeyExecutivesRoute,
  getLastChangeEndpointRoute,
  getLogoRoute,
  getMarketCapRoute,
  getPressReleasesRoute,
  getProfileRoute,
  getSplitsCalendarRoute,
  getSplitsRoute,
  getStatisticsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fundamentalsHandler = app
  .openapi(getBalanceSheetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalanceSheetConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCashFlowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCashFlowConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDividendsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDividendsCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEarningsCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncomeStatementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIncomeStatementConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpoCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeyExecutivesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLastChangeEndpointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMarketCapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPressReleasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSplitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSplitsCalendarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
