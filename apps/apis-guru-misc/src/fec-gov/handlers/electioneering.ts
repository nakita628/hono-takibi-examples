import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getElectioneeringAggregatesIndexRoute,
  getElectioneeringByCandidateIndexRoute,
  getElectioneeringIndexRoute,
  getElectioneeringTotalsByCandidateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const electioneeringHandler = app
  .openapi(getElectioneeringIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectioneeringAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectioneeringByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectioneeringTotalsByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
