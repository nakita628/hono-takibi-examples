import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
  deleteApiPublicUnstableDashboardsDashboardIdRoute,
  getApiPublicUnstableDashboardsDashboardIdRoute,
  getApiPublicUnstableDashboardsRoute,
  patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute,
  patchApiPublicUnstableDashboardsDashboardIdRoute,
  postApiPublicUnstableDashboardsDashboardIdPlacementsRoute,
  postApiPublicUnstableDashboardsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const unstableDashboardsHandler = app
  .openapi(getApiPublicUnstableDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicUnstableDashboardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicUnstableDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicUnstableDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicUnstableDashboardsDashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPublicUnstableDashboardsDashboardIdPlacementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicUnstableDashboardsDashboardIdPlacementsPlacementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
