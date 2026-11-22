import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatDfsSlatesByDateDateRoute,
  getFormatInjuredPlayersRoute,
  getFormatPlayerGameProjectionStatsByDateDateRoute,
  getFormatPlayerGameProjectionStatsByPlayerDatePlayeridRoute,
  getFormatStartingGoaltendersByDateDateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
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
  .openapi(getFormatStartingGoaltendersByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
