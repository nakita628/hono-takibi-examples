import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommitteeCommitteeIdCandidatesHistoryCycleIndexRoute,
  getCommitteeCommitteeIdCandidatesHistoryIndexRoute,
  getCommitteeCommitteeIdCandidatesIndexRoute,
  getCommitteeCommitteeIdFilingsIndexRoute,
  getCommitteeCommitteeIdHistoryCycleIndexRoute,
  getCommitteeCommitteeIdHistoryIndexRoute,
  getCommitteeCommitteeIdIndexRoute,
  getCommitteeCommitteeIdReportsIndexRoute,
  getCommitteeCommitteeIdTotalsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const committeeHandler = app
  .openapi(getCommitteeCommitteeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdCandidatesHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdCandidatesHistoryCycleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdFilingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdHistoryCycleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdReportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
