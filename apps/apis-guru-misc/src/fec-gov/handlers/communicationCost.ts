import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommunicationCostsAggregatesIndexRoute,
  getCommunicationCostsByCandidateIndexRoute,
  getCommunicationCostsIndexRoute,
  getCommunicationCostsTotalsByCandidateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const communicationCostHandler = app
  .openapi(getCommunicationCostsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationCostsAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationCostsByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommunicationCostsTotalsByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
