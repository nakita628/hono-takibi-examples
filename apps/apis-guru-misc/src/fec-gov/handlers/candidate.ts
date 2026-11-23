import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCandidateCandidateIdCommitteesHistoryCycleIndexRoute,
  getCandidateCandidateIdCommitteesHistoryIndexRoute,
  getCandidateCandidateIdCommitteesIndexRoute,
  getCandidateCandidateIdFilingsIndexRoute,
  getCandidateCandidateIdHistoryCycleIndexRoute,
  getCandidateCandidateIdHistoryIndexRoute,
  getCandidateCandidateIdIndexRoute,
  getCandidateCandidateIdTotalsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const candidateHandler = app
  .openapi(getCandidateCandidateIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdCommitteesHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdCommitteesHistoryCycleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdFilingsIndexRoute, (c) => {
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
