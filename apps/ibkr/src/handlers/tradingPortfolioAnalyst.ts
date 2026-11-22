import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ApiPaAllocationRoute,
  postV1ApiPaAllperiodsRoute,
  postV1ApiPaPerformanceRoute,
  postV1ApiPaTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingPortfolioAnalystHandler = app
  .openapi(postV1ApiPaAllocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaAllperiodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApiPaTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
