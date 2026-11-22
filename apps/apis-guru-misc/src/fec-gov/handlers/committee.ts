import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCandidateCandidateIdCommitteesHistoryCycleIndexRoute,
  getCandidateCandidateIdCommitteesHistoryIndexRoute,
  getCandidateCandidateIdCommitteesIndexRoute,
  getCommitteeCommitteeIdHistoryCycleIndexRoute,
  getCommitteeCommitteeIdHistoryIndexRoute,
  getCommitteeCommitteeIdIndexRoute,
  getCommitteesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const committeeHandler = app
  .openapi(getCandidateCandidateIdCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdCommitteesHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidateCandidateIdCommitteesHistoryCycleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdHistoryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdHistoryCycleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
