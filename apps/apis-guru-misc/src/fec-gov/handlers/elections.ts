import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getElectionsIndexRoute,
  getElectionsSearchIndexRoute,
  getElectionsSummaryIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const electionsHandler = app
  .openapi(getElectionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectionsSearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getElectionsSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
