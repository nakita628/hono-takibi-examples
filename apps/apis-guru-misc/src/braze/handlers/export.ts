import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCampaignsDataSeriesRoute,
  getCampaignsDetailsRoute,
  getCampaignsListRoute,
  getCanvasDataSeriesRoute,
  getCanvasDataSummaryRoute,
  getCanvasDetailsRoute,
  getCanvasListRoute,
  getEventsDataSeriesRoute,
  getEventsListRoute,
  getFeedDataSeriesRoute,
  getFeedDetailsRoute,
  getFeedListRoute,
  getKpiDauDataSeriesRoute,
  getKpiMauDataSeriesRoute,
  getKpiNewUsersDataSeriesRoute,
  getKpiUninstallsDataSeriesRoute,
  getSegmentsDataSeriesRoute,
  getSegmentsDetailsRoute,
  getSegmentsListRoute,
  getSendsDataSeriesRoute,
  getSessionsDataSeriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(getCampaignsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCampaignsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasDataSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCanvasListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFeedListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiDauDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiMauDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiNewUsersDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKpiUninstallsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSegmentsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSendsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsDataSeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
