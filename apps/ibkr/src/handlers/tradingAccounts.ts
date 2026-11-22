import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiAceswsAccountIdSignaturesAndOwnersRoute,
  getV1ApiIserverAccountAccountIdSummaryAvailableFundsRoute,
  getV1ApiIserverAccountAccountIdSummaryBalancesRoute,
  getV1ApiIserverAccountAccountIdSummaryMarginsRoute,
  getV1ApiIserverAccountAccountIdSummaryMarketValueRoute,
  getV1ApiIserverAccountAccountIdSummaryRoute,
  getV1ApiIserverAccountPnlPartitionedRoute,
  getV1ApiIserverAccountSearchSearchPatternRoute,
  getV1ApiIserverAccountsRoute,
  postV1ApiIserverAccountRoute,
  postV1ApiIserverDynaccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingAccountsHandler = app
  .openapi(postV1ApiIserverAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiIserverDynaccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiAceswsAccountIdSignaturesAndOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountPnlPartitionedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountSearchSearchPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryAvailableFundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryMarginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountAccountIdSummaryMarketValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
