import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersCompetitionRoute,
  getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatDfsSlatesByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatInjuredPlayersCompetitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByCompetitionCompetitionDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatUpcomingDfsSlatesByCompetitionCompetitionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
