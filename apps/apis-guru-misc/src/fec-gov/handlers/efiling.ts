import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEfileFilingsIndexRoute,
  getEfileReportsHouseSenateIndexRoute,
  getEfileReportsPacPartyIndexRoute,
  getEfileReportsPresidentialIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const efilingHandler = app
  .openapi(getEfileFilingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEfileReportsHouseSenateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEfileReportsPacPartyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEfileReportsPresidentialIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
