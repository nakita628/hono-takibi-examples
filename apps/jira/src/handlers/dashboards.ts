import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3DashboardDashboardIdGadgetGadgetIdRoute,
  deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  deleteRestApi3DashboardIdRoute,
  getRestApi3DashboardDashboardIdGadgetRoute,
  getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  getRestApi3DashboardDashboardIdItemsItemIdPropertiesRoute,
  getRestApi3DashboardGadgetsRoute,
  getRestApi3DashboardIdRoute,
  getRestApi3DashboardRoute,
  getRestApi3DashboardSearchRoute,
  postRestApi3DashboardDashboardIdGadgetRoute,
  postRestApi3DashboardIdCopyRoute,
  postRestApi3DashboardRoute,
  putRestApi3DashboardBulkEditRoute,
  putRestApi3DashboardDashboardIdGadgetGadgetIdRoute,
  putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute,
  putRestApi3DashboardIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dashboardsHandler = app
  .openapi(getRestApi3DashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3DashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardBulkEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardGadgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardDashboardIdGadgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3DashboardDashboardIdGadgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3DashboardDashboardIdGadgetGadgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardDashboardIdGadgetGadgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardDashboardIdItemsItemIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardDashboardIdItemsItemIdPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3DashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3DashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3DashboardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3DashboardIdCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
