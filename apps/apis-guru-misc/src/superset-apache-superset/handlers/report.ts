import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportIndexRoute,
  deleteReportPkRoute,
  getReportIndexRoute,
  getReportInfoRoute,
  getReportPkLogIndexRoute,
  getReportPkLogLogIdRoute,
  getReportPkRoute,
  getReportRelatedColumnNameRoute,
  postReportIndexRoute,
  putReportPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportHandler = app
  .openapi(deleteReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPkLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportPkLogLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
