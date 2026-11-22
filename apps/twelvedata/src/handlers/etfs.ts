import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEtfsFamilyRoute,
  getEtfsListRoute,
  getEtfsTypeRoute,
  getEtfsWorldCompositionRoute,
  getEtfsWorldPerformanceRoute,
  getEtfsWorldRiskRoute,
  getEtfsWorldRoute,
  getEtfsWorldSummaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const etfsHandler = app
  .openapi(getEtfsFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsWorldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsWorldCompositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsWorldPerformanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsWorldRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfsWorldSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
