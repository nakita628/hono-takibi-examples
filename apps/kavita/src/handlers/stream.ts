import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiStreamDeleteExternalSourceRoute,
  deleteApiStreamSmartFilterDashboardStreamRoute,
  deleteApiStreamSmartFilterSideNavStreamRoute,
  getApiStreamDashboardRoute,
  getApiStreamExternalSourcesRoute,
  getApiStreamSidenavRoute,
  postApiStreamAddDashboardStreamRoute,
  postApiStreamAddSidenavStreamFromExternalSourceRoute,
  postApiStreamAddSidenavStreamRoute,
  postApiStreamBulkSidenavStreamVisibilityRoute,
  postApiStreamCreateExternalSourceRoute,
  postApiStreamExternalSourceExistsRoute,
  postApiStreamUpdateDashboardPositionRoute,
  postApiStreamUpdateDashboardStreamRoute,
  postApiStreamUpdateExternalSourceRoute,
  postApiStreamUpdateSidenavPositionRoute,
  postApiStreamUpdateSidenavStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamHandler = app
  .openapi(getApiStreamDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamSidenavRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiStreamExternalSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamCreateExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamExternalSourceExistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStreamDeleteExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamAddDashboardStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateDashboardStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateDashboardPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamAddSidenavStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamAddSidenavStreamFromExternalSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateSidenavStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamUpdateSidenavPositionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiStreamBulkSidenavStreamVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStreamSmartFilterSideNavStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiStreamSmartFilterDashboardStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
