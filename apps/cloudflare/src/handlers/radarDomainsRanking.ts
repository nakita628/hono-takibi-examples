import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarRankingDomainDomainRoute,
  getRadarRankingTimeseriesGroupsRoute,
  getRadarRankingTopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarDomainsRankingHandler = app
  .openapi(getRadarRankingDomainDomainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarRankingTimeseriesGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarRankingTopRoute, (c) => {
    throw new Error('Not implemented')
  })
