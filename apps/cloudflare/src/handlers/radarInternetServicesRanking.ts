import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarRankingInternetServicesCategoriesRoute,
  getRadarRankingInternetServicesTimeseriesGroupsRoute,
  getRadarRankingInternetServicesTopRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarInternetServicesRankingHandler = app
  .openapi(getRadarRankingInternetServicesCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarRankingInternetServicesTimeseriesGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarRankingInternetServicesTopRoute, (c) => {
    throw new Error('Not implemented')
  })
