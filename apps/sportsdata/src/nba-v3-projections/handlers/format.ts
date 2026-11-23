import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDepthChartsRoute,
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRoute,
  getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute,
  getFormatPlayerSeasonProjectionStatsSeasonRoute,
  getFormatStartingLineupsByDateDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatDepthChartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatDfsSlatesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuredPlayersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonProjectionStatsSeasonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonProjectionStatsByPlayerSeasonPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerSeasonProjectionStatsByTeamSeasonTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatStartingLineupsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
