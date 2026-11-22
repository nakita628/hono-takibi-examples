import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarLeakedCredentialChecksSummaryBotClassRoute,
  getRadarLeakedCredentialChecksSummaryCompromisedRoute,
  getRadarLeakedCredentialChecksSummaryDimensionRoute,
  getRadarLeakedCredentialChecksTimeseriesGroupsBotClassRoute,
  getRadarLeakedCredentialChecksTimeseriesGroupsCompromisedRoute,
  getRadarLeakedCredentialChecksTimeseriesGroupsDimensionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarLeakedCredentialChecksHandler = app
  .openapi(getRadarLeakedCredentialChecksSummaryBotClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarLeakedCredentialChecksSummaryCompromisedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarLeakedCredentialChecksSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarLeakedCredentialChecksTimeseriesGroupsBotClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarLeakedCredentialChecksTimeseriesGroupsCompromisedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarLeakedCredentialChecksTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
