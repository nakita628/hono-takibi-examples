import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchedulesScheduleEByCandidateIndexRoute,
  getSchedulesScheduleEEfileIndexRoute,
  getSchedulesScheduleEIndexRoute,
  getSchedulesScheduleETotalsByCandidateIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const independentExpendituresHandler = app
  .openapi(getSchedulesScheduleEIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleEByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleEEfileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleETotalsByCandidateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
