import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsIdRoute,
  getReportsDashboardsUidRoute,
  getReportsIdRoute,
  getReportsImagesImageRoute,
  getReportsRenderCsvsRoute,
  getReportsRenderPdfsRoute,
  getReportsRoute,
  getReportsSettingsRoute,
  postReportsEmailRoute,
  postReportsRoute,
  postReportsSettingsRoute,
  postReportsTestEmailRoute,
  putReportsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsDashboardsUidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsImagesImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsRenderCsvsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsRenderPdfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsTestEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
