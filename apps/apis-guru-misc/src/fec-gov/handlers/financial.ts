import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommitteeCommitteeIdReportsIndexRoute,
  getCommitteeCommitteeIdTotalsIndexRoute,
  getElectionsIndexRoute,
  getElectionsSearchIndexRoute,
  getElectionsSummaryIndexRoute,
  getReportsEntityTypeIndexRoute,
  getTotalsByEntityIndexRoute,
  getTotalsEntityTypeIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const financialHandler = app
  .openapi(getCommitteeCommitteeIdReportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeCommitteeIdTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectionsSearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectionsSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsEntityTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotalsByEntityIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTotalsEntityTypeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
