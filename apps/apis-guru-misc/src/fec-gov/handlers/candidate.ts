import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCandidateCandidateIdHistoryCycleIndexRoute,
  getCandidateCandidateIdHistoryIndexRoute,
  getCandidateCandidateIdIndexRoute,
  getCandidateCandidateIdTotalsIndexRoute,
  getCandidatesIndexRoute,
  getCandidatesSearchIndexRoute,
  getCandidatesTotalsAggregatesIndexRoute,
  getCandidatesTotalsByOfficeByPartyIndexRoute,
  getCandidatesTotalsByOfficeIndexRoute,
  getCandidatesTotalsIndexRoute,
  getCommitteeCommitteeIdCandidatesHistoryCycleIndexRoute,
  getCommitteeCommitteeIdCandidatesHistoryIndexRoute,
  getCommitteeCommitteeIdCandidatesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const candidateHandler = app
  .openapi(getCandidateCandidateIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdHistoryCycleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesSearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsByOfficeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsByOfficeByPartyIndexRoute, (c) => {
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
