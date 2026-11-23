import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsIdRoute,
  getProjectsIdApiKeysRoute,
  getProjectsIdBatchesRoute,
  getProjectsIdBgpConfigRoute,
  getProjectsIdBgpSessionsRoute,
  getProjectsIdCustomdataRoute,
  getProjectsIdDevicesRoute,
  getProjectsIdEventsRoute,
  getProjectsIdFacilitiesRoute,
  getProjectsIdFirmwareSetsRoute,
  getProjectsIdGlobalBgpRangesRoute,
  getProjectsIdHardwareReservationsRoute,
  getProjectsIdIpsRoute,
  getProjectsIdLicensesRoute,
  getProjectsIdPlansRoute,
  getProjectsIdRoute,
  getProjectsIdSpotMarketRequestsRoute,
  getProjectsIdSshKeysRoute,
  getProjectsIdUsagesRoute,
  getProjectsIdVirtualNetworksRoute,
  getProjectsIdVrfsRoute,
  getProjectsProjectIdConnectionsRoute,
  getProjectsProjectIdInvitationsRoute,
  getProjectsProjectIdIpsIdCustomdataRoute,
  getProjectsProjectIdMembershipsRoute,
  getProjectsProjectIdMetalGatewaysRoute,
  getProjectsProjectIdSelfServiceReservationsIdRoute,
  getProjectsProjectIdSelfServiceReservationsRoute,
  getProjectsRoute,
  postProjectsIdApiKeysRoute,
  postProjectsIdBgpConfigsRoute,
  postProjectsIdDevicesBatchRoute,
  postProjectsIdDevicesRoute,
  postProjectsIdIpsRoute,
  postProjectsIdLicensesRoute,
  postProjectsIdSpotMarketRequestsRoute,
  postProjectsIdSshKeysRoute,
  postProjectsIdTransfersRoute,
  postProjectsIdVirtualNetworksRoute,
  postProjectsIdVrfsRoute,
  postProjectsProjectIdConnectionsRoute,
  postProjectsProjectIdInvitationsRoute,
  postProjectsProjectIdMetalGatewaysRoute,
  postProjectsProjectIdSelfServiceReservationsRoute,
  postProjectsRoute,
  putProjectsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdBatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdBgpConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdBgpConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdBgpSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdDevicesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdFirmwareSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdGlobalBgpRangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdHardwareReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdIpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdPlansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdSpotMarketRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdSpotMarketRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdSshKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdTransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdUsagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdVirtualNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdVirtualNetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdVrfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsIdVrfsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdInvitationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdIpsIdCustomdataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdMetalGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdMetalGatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdSelfServiceReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdSelfServiceReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdSelfServiceReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
