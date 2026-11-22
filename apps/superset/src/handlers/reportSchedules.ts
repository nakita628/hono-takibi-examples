import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ReportIndexRoute,
  deleteApiV1ReportPkRoute,
  getApiV1ReportConfigurationIndexRoute,
  getApiV1ReportIndexRoute,
  getApiV1ReportInfoRoute,
  getApiV1ReportPkLogIndexRoute,
  getApiV1ReportPkLogLogIdRoute,
  getApiV1ReportPkRoute,
  getApiV1ReportRelatedColumnNameRoute,
  getApiV1ReportSlackChannelsIndexRoute,
  postApiV1ReportIndexRoute,
  postApiV1ReportPkExecuteRoute,
  postApiV1ReportSubscribeRoute,
  putApiV1ReportConfigurationIndexRoute,
  putApiV1ReportPkRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportSchedulesHandler = app
  .openapi(deleteApiV1ReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportConfigurationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReportConfigurationIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportRelatedColumnNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportSlackChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ReportPkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ReportPkExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportPkLogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ReportPkLogLogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
