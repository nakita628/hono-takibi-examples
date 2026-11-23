import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDataDivisionsDivisionIdRoute,
  getDataDivisionsGroupedbypartyRoute,
  getDataDivisionsMembervotingRoute,
  getDataDivisionsSearchRoute,
  getDataDivisionsSearchTotalResultsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataHandler = app
  .openapi(getDataDivisionsGroupedbypartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataDivisionsMembervotingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataDivisionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataDivisionsSearchTotalResultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDataDivisionsDivisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
