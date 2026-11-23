import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommitteeReportCongressReportTypeReportNumberRoute,
  getCommitteeReportCongressReportTypeReportNumberTextRoute,
  getCommitteeReportCongressReportTypeRoute,
  getCommitteeReportCongressRoute,
  getCommitteeReportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const committeeReportHandler = app
  .openapi(getCommitteeReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeReportCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeReportCongressReportTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeReportCongressReportTypeReportNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeReportCongressReportTypeReportNumberTextRoute, (c) => {
    throw new Error('Not implemented')
  })
