import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ReportingEodAggregatePositionsRoute,
  getV1ReportingEodCashInterestRoute,
  getV1ReportingEodPositionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportingHandler = app
  .openapi(getV1ReportingEodAggregatePositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingEodCashInterestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportingEodPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
