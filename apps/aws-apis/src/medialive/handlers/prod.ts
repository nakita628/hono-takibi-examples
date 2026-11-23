import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProdChannelsChannelIdRoute,
  deleteProdChannelsChannelIdScheduleRoute,
  deleteProdInputSecurityGroupsInputSecurityGroupIdRoute,
  deleteProdInputsInputIdRoute,
  deleteProdMultiplexesMultiplexIdProgramsProgramNameRoute,
  deleteProdMultiplexesMultiplexIdRoute,
  deleteProdReservationsReservationIdRoute,
  deleteProdTagsResourceArnTagKeysRoute,
  getProdChannelsChannelIdRoute,
  getProdChannelsChannelIdScheduleRoute,
  getProdChannelsRoute,
  getProdInputDevicesInputDeviceIdRoute,
  getProdInputDevicesInputDeviceIdThumbnailDataAcceptRoute,
  getProdInputDevicesRoute,
  getProdInputDeviceTransfersTransferTypeRoute,
  getProdInputSecurityGroupsInputSecurityGroupIdRoute,
  getProdInputSecurityGroupsRoute,
  getProdInputsInputIdRoute,
  getProdInputsRoute,
  getProdMultiplexesMultiplexIdProgramsProgramNameRoute,
  getProdMultiplexesMultiplexIdProgramsRoute,
  getProdMultiplexesMultiplexIdRoute,
  getProdMultiplexesRoute,
  getProdOfferingsOfferingIdRoute,
  getProdOfferingsRoute,
  getProdReservationsReservationIdRoute,
  getProdReservationsRoute,
  getProdTagsResourceArnRoute,
  postProdBatchDeleteRoute,
  postProdBatchStartRoute,
  postProdBatchStopRoute,
  postProdChannelsChannelIdStartRoute,
  postProdChannelsChannelIdStopRoute,
  postProdChannelsRoute,
  postProdClaimDeviceRoute,
  postProdInputDevicesInputDeviceIdAcceptRoute,
  postProdInputDevicesInputDeviceIdCancelRoute,
  postProdInputDevicesInputDeviceIdRebootRoute,
  postProdInputDevicesInputDeviceIdRejectRoute,
  postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowRoute,
  postProdInputDevicesInputDeviceIdTransferRoute,
  postProdInputSecurityGroupsRoute,
  postProdInputsInputIdPartnersRoute,
  postProdInputsRoute,
  postProdMultiplexesMultiplexIdProgramsRoute,
  postProdMultiplexesMultiplexIdStartRoute,
  postProdMultiplexesMultiplexIdStopRoute,
  postProdMultiplexesRoute,
  postProdOfferingsOfferingIdPurchaseRoute,
  postProdTagsResourceArnRoute,
  putProdChannelsChannelIdChannelClassRoute,
  putProdChannelsChannelIdRoute,
  putProdChannelsChannelIdScheduleRoute,
  putProdInputDevicesInputDeviceIdRoute,
  putProdInputSecurityGroupsInputSecurityGroupIdRoute,
  putProdInputsInputIdRoute,
  putProdMultiplexesMultiplexIdProgramsProgramNameRoute,
  putProdMultiplexesMultiplexIdRoute,
  putProdReservationsReservationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const prodHandler = app
  .openapi(postProdInputDevicesInputDeviceIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdBatchStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdBatchStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdChannelsChannelIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdChannelsChannelIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdChannelsChannelIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputDevicesInputDeviceIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdClaimDeviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputSecurityGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdMultiplexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdMultiplexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdMultiplexesMultiplexIdProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdMultiplexesMultiplexIdProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputsInputIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdTagsResourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdInputsInputIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputsInputIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdInputsInputIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdInputSecurityGroupsInputSecurityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputSecurityGroupsInputSecurityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdInputSecurityGroupsInputSecurityGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdMultiplexesMultiplexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdMultiplexesMultiplexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdMultiplexesMultiplexIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdMultiplexesMultiplexIdProgramsProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdMultiplexesMultiplexIdProgramsProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdMultiplexesMultiplexIdProgramsProgramNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdReservationsReservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdReservationsReservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdReservationsReservationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProdTagsResourceArnTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputDevicesInputDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdInputDevicesInputDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputDevicesInputDeviceIdThumbnailDataAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdOfferingsOfferingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputDeviceTransfersTransferTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdInputDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdOfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProdReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdOfferingsOfferingIdPurchaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputDevicesInputDeviceIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputDevicesInputDeviceIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdChannelsChannelIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdMultiplexesMultiplexIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdChannelsChannelIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdMultiplexesMultiplexIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProdInputDevicesInputDeviceIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProdChannelsChannelIdChannelClassRoute, (c) => {
    throw new Error('Not implemented')
  })
