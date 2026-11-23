import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportDefinitionReportIdRoute,
  getReportDefinitionReportIdRoute,
  getReportDefinitionRoute,
  postReportDefinitionRoute,
  putReportDefinitionReportIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportDefinitionHandler = app
  .openapi(deleteReportDefinitionReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportDefinitionReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReportDefinitionReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
