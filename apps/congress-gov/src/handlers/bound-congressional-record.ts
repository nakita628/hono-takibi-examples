import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBoundCongressionalRecordRoute,
  getBoundCongressionalRecordYearMonthDayRoute,
  getBoundCongressionalRecordYearMonthRoute,
  getBoundCongressionalRecordYearRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boundCongressionalRecordHandler = app
  .openapi(getBoundCongressionalRecordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoundCongressionalRecordYearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoundCongressionalRecordYearMonthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBoundCongressionalRecordYearMonthDayRoute, (c) => {
    throw new Error('Not implemented')
  })
