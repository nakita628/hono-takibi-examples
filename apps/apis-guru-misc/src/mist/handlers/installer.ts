import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute,
  deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute,
  deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute,
  getApiV1InstallerOrgsOrgIdAlarmtemplatesRoute,
  getApiV1InstallerOrgsOrgIdDeviceprofilesRoute,
  getApiV1InstallerOrgsOrgIdDevicesRoute,
  getApiV1InstallerOrgsOrgIdRftemplatesRoute,
  getApiV1InstallerOrgsOrgIdSecpoliciesRoute,
  getApiV1InstallerOrgsOrgIdSitegroupsRoute,
  getApiV1InstallerOrgsOrgIdSitesRoute,
  getApiV1InstallerOrgsOrgIdSitesSiteNameMapsRoute,
  getApiV1InstallerSitesSiteNameOptimizeRoute,
  postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute,
  postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocateRoute,
  postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocateRoute,
  postApiV1InstallerOrgsOrgIdDevicesRoute,
  postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImportRoute,
  postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute,
  putApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute,
  putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute,
  putApiV1InstallerOrgsOrgIdSitesSiteNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const installerHandler = app
  .openapi(getApiV1InstallerOrgsOrgIdAlarmtemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdDeviceprofilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InstallerOrgsOrgIdDevicesDeviceMacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesDeviceMacLocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesDeviceMacUnlocateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdDevicesDeviceMacImageNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdRftemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSecpoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSitegroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InstallerOrgsOrgIdSitesSiteNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerOrgsOrgIdSitesSiteNameMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdSitesSiteNameMapsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1InstallerOrgsOrgIdSitesSiteNameMapsMapIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InstallerSitesSiteNameOptimizeRoute, (c) => {
    throw new Error('Not implemented')
  })
