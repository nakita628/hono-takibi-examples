import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1CompanyAnnouncementIdRoute,
  getApiV1CompanyDeepsearchLeiNumberRoute,
  getApiV1CompanyDeepsearchNameCountryNameRoute,
  getApiV1CompanyDeepsearchNumberCountryNumberRoute,
  getApiV1CompanyIdAnnouncementsRoute,
  getApiV1CompanyIdDatasetRoute,
  getApiV1CompanyIdSuperCountryRoute,
  getApiV1CompanyMonitoringChangeTypesRoute,
  getApiV1CompanyMonitoringListIdRoute,
  getApiV1CompanyMonitoringListRoute,
  getApiV1CompanyNotificationListIdRoute,
  getApiV1CompanyNotificationListRoute,
  getApiV1CompanySearchNameCountryNameRoute,
  getApiV1CompanySearchNumberCountryNumberRoute,
  postApiV1CompanyDeepsearchIsinRoute,
  postApiV1CompanyMonitoringRegisterIdRoute,
  postApiV1CompanyMonitoringUnregisterIdRoute,
  postApiV1CompanyNotificationRegisterIdRoute,
  postApiV1CompanyNotificationUnregisterIdRoute,
  postApiV1CompanySearchCountryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1CompanyHandler = app
  .openapi(getApiV1CompanyAnnouncementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyDeepsearchIsinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyDeepsearchLeiNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyDeepsearchNameCountryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyDeepsearchNumberCountryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyMonitoringChangeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyMonitoringListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyMonitoringListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyMonitoringRegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyMonitoringUnregisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyNotificationListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyNotificationListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyNotificationRegisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanyNotificationUnregisterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanySearchNameCountryNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanySearchNumberCountryNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CompanySearchCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyIdAnnouncementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyIdSuperCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CompanyIdDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
