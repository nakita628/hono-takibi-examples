import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  getAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute,
  getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  getAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute,
  getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  getAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute,
  patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  postAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute,
  postAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute,
  postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRoute,
  postAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute,
  putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
