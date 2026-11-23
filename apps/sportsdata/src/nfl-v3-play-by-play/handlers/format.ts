import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatPlayByPlayDeltaSeasonWeekMinutesRoute,
  getFormatPlayByPlaySeasonWeekHometeamRoute,
  getFormatSimulatedPlayByPlayNumberofplaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatPlayByPlaySeasonWeekHometeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatPlayByPlayDeltaSeasonWeekMinutesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatSimulatedPlayByPlayNumberofplaysRoute, (c) => {
    throw new Error('Not implemented')
  })
