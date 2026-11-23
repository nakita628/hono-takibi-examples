import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStatisticsV1ScoringsConsolidatedDailyRoute,
  getStatisticsV1ScoringsConsolidatedRoute,
  getStatisticsV1ScoringsIndividualDailyRoute,
  getStatisticsV1ScoringsIndividualIndexRoute,
  getStatisticsV1StatisticsConsolidatedDailyRoute,
  getStatisticsV1StatisticsConsolidatedRoute,
  getStatisticsV1StatisticsIndividualDailyIndexRoute,
  getStatisticsV1StatisticsIndividualIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const statisticsHandler = app
  .openapi(getStatisticsV1ScoringsConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1ScoringsConsolidatedDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1ScoringsIndividualIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1ScoringsIndividualDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1StatisticsConsolidatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1StatisticsConsolidatedDailyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1StatisticsIndividualIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatisticsV1StatisticsIndividualDailyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
