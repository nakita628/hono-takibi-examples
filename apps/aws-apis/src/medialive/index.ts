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
} from './routes'
import {
  deleteProdChannelsChannelIdRouteHandler,
  deleteProdChannelsChannelIdScheduleRouteHandler,
  deleteProdInputSecurityGroupsInputSecurityGroupIdRouteHandler,
  deleteProdInputsInputIdRouteHandler,
  deleteProdMultiplexesMultiplexIdProgramsProgramNameRouteHandler,
  deleteProdMultiplexesMultiplexIdRouteHandler,
  deleteProdReservationsReservationIdRouteHandler,
  deleteProdTagsResourceArnTagKeysRouteHandler,
  getProdChannelsChannelIdRouteHandler,
  getProdChannelsChannelIdScheduleRouteHandler,
  getProdChannelsRouteHandler,
  getProdInputDevicesInputDeviceIdRouteHandler,
  getProdInputDevicesInputDeviceIdThumbnailDataAcceptRouteHandler,
  getProdInputDevicesRouteHandler,
  getProdInputDeviceTransfersTransferTypeRouteHandler,
  getProdInputSecurityGroupsInputSecurityGroupIdRouteHandler,
  getProdInputSecurityGroupsRouteHandler,
  getProdInputsInputIdRouteHandler,
  getProdInputsRouteHandler,
  getProdMultiplexesMultiplexIdProgramsProgramNameRouteHandler,
  getProdMultiplexesMultiplexIdProgramsRouteHandler,
  getProdMultiplexesMultiplexIdRouteHandler,
  getProdMultiplexesRouteHandler,
  getProdOfferingsOfferingIdRouteHandler,
  getProdOfferingsRouteHandler,
  getProdReservationsReservationIdRouteHandler,
  getProdReservationsRouteHandler,
  getProdTagsResourceArnRouteHandler,
  postProdBatchDeleteRouteHandler,
  postProdBatchStartRouteHandler,
  postProdBatchStopRouteHandler,
  postProdChannelsChannelIdStartRouteHandler,
  postProdChannelsChannelIdStopRouteHandler,
  postProdChannelsRouteHandler,
  postProdClaimDeviceRouteHandler,
  postProdInputDevicesInputDeviceIdAcceptRouteHandler,
  postProdInputDevicesInputDeviceIdCancelRouteHandler,
  postProdInputDevicesInputDeviceIdRebootRouteHandler,
  postProdInputDevicesInputDeviceIdRejectRouteHandler,
  postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowRouteHandler,
  postProdInputDevicesInputDeviceIdTransferRouteHandler,
  postProdInputSecurityGroupsRouteHandler,
  postProdInputsInputIdPartnersRouteHandler,
  postProdInputsRouteHandler,
  postProdMultiplexesMultiplexIdProgramsRouteHandler,
  postProdMultiplexesMultiplexIdStartRouteHandler,
  postProdMultiplexesMultiplexIdStopRouteHandler,
  postProdMultiplexesRouteHandler,
  postProdOfferingsOfferingIdPurchaseRouteHandler,
  postProdTagsResourceArnRouteHandler,
  putProdChannelsChannelIdChannelClassRouteHandler,
  putProdChannelsChannelIdRouteHandler,
  putProdChannelsChannelIdScheduleRouteHandler,
  putProdInputDevicesInputDeviceIdRouteHandler,
  putProdInputSecurityGroupsInputSecurityGroupIdRouteHandler,
  putProdInputsInputIdRouteHandler,
  putProdMultiplexesMultiplexIdProgramsProgramNameRouteHandler,
  putProdMultiplexesMultiplexIdRouteHandler,
  putProdReservationsReservationIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postProdInputDevicesInputDeviceIdAcceptRoute,
    postProdInputDevicesInputDeviceIdAcceptRouteHandler,
  )
  .openapi(postProdBatchDeleteRoute, postProdBatchDeleteRouteHandler)
  .openapi(postProdBatchStartRoute, postProdBatchStartRouteHandler)
  .openapi(postProdBatchStopRoute, postProdBatchStopRouteHandler)
  .openapi(putProdChannelsChannelIdScheduleRoute, putProdChannelsChannelIdScheduleRouteHandler)
  .openapi(
    deleteProdChannelsChannelIdScheduleRoute,
    deleteProdChannelsChannelIdScheduleRouteHandler,
  )
  .openapi(getProdChannelsChannelIdScheduleRoute, getProdChannelsChannelIdScheduleRouteHandler)
  .openapi(
    postProdInputDevicesInputDeviceIdCancelRoute,
    postProdInputDevicesInputDeviceIdCancelRouteHandler,
  )
  .openapi(postProdClaimDeviceRoute, postProdClaimDeviceRouteHandler)
  .openapi(postProdChannelsRoute, postProdChannelsRouteHandler)
  .openapi(getProdChannelsRoute, getProdChannelsRouteHandler)
  .openapi(postProdInputsRoute, postProdInputsRouteHandler)
  .openapi(getProdInputsRoute, getProdInputsRouteHandler)
  .openapi(postProdInputSecurityGroupsRoute, postProdInputSecurityGroupsRouteHandler)
  .openapi(getProdInputSecurityGroupsRoute, getProdInputSecurityGroupsRouteHandler)
  .openapi(postProdMultiplexesRoute, postProdMultiplexesRouteHandler)
  .openapi(getProdMultiplexesRoute, getProdMultiplexesRouteHandler)
  .openapi(
    postProdMultiplexesMultiplexIdProgramsRoute,
    postProdMultiplexesMultiplexIdProgramsRouteHandler,
  )
  .openapi(
    getProdMultiplexesMultiplexIdProgramsRoute,
    getProdMultiplexesMultiplexIdProgramsRouteHandler,
  )
  .openapi(postProdInputsInputIdPartnersRoute, postProdInputsInputIdPartnersRouteHandler)
  .openapi(postProdTagsResourceArnRoute, postProdTagsResourceArnRouteHandler)
  .openapi(getProdTagsResourceArnRoute, getProdTagsResourceArnRouteHandler)
  .openapi(deleteProdChannelsChannelIdRoute, deleteProdChannelsChannelIdRouteHandler)
  .openapi(getProdChannelsChannelIdRoute, getProdChannelsChannelIdRouteHandler)
  .openapi(putProdChannelsChannelIdRoute, putProdChannelsChannelIdRouteHandler)
  .openapi(deleteProdInputsInputIdRoute, deleteProdInputsInputIdRouteHandler)
  .openapi(getProdInputsInputIdRoute, getProdInputsInputIdRouteHandler)
  .openapi(putProdInputsInputIdRoute, putProdInputsInputIdRouteHandler)
  .openapi(
    deleteProdInputSecurityGroupsInputSecurityGroupIdRoute,
    deleteProdInputSecurityGroupsInputSecurityGroupIdRouteHandler,
  )
  .openapi(
    getProdInputSecurityGroupsInputSecurityGroupIdRoute,
    getProdInputSecurityGroupsInputSecurityGroupIdRouteHandler,
  )
  .openapi(
    putProdInputSecurityGroupsInputSecurityGroupIdRoute,
    putProdInputSecurityGroupsInputSecurityGroupIdRouteHandler,
  )
  .openapi(deleteProdMultiplexesMultiplexIdRoute, deleteProdMultiplexesMultiplexIdRouteHandler)
  .openapi(getProdMultiplexesMultiplexIdRoute, getProdMultiplexesMultiplexIdRouteHandler)
  .openapi(putProdMultiplexesMultiplexIdRoute, putProdMultiplexesMultiplexIdRouteHandler)
  .openapi(
    deleteProdMultiplexesMultiplexIdProgramsProgramNameRoute,
    deleteProdMultiplexesMultiplexIdProgramsProgramNameRouteHandler,
  )
  .openapi(
    getProdMultiplexesMultiplexIdProgramsProgramNameRoute,
    getProdMultiplexesMultiplexIdProgramsProgramNameRouteHandler,
  )
  .openapi(
    putProdMultiplexesMultiplexIdProgramsProgramNameRoute,
    putProdMultiplexesMultiplexIdProgramsProgramNameRouteHandler,
  )
  .openapi(
    deleteProdReservationsReservationIdRoute,
    deleteProdReservationsReservationIdRouteHandler,
  )
  .openapi(getProdReservationsReservationIdRoute, getProdReservationsReservationIdRouteHandler)
  .openapi(putProdReservationsReservationIdRoute, putProdReservationsReservationIdRouteHandler)
  .openapi(deleteProdTagsResourceArnTagKeysRoute, deleteProdTagsResourceArnTagKeysRouteHandler)
  .openapi(getProdInputDevicesInputDeviceIdRoute, getProdInputDevicesInputDeviceIdRouteHandler)
  .openapi(putProdInputDevicesInputDeviceIdRoute, putProdInputDevicesInputDeviceIdRouteHandler)
  .openapi(
    getProdInputDevicesInputDeviceIdThumbnailDataAcceptRoute,
    getProdInputDevicesInputDeviceIdThumbnailDataAcceptRouteHandler,
  )
  .openapi(getProdOfferingsOfferingIdRoute, getProdOfferingsOfferingIdRouteHandler)
  .openapi(
    getProdInputDeviceTransfersTransferTypeRoute,
    getProdInputDeviceTransfersTransferTypeRouteHandler,
  )
  .openapi(getProdInputDevicesRoute, getProdInputDevicesRouteHandler)
  .openapi(getProdOfferingsRoute, getProdOfferingsRouteHandler)
  .openapi(getProdReservationsRoute, getProdReservationsRouteHandler)
  .openapi(
    postProdOfferingsOfferingIdPurchaseRoute,
    postProdOfferingsOfferingIdPurchaseRouteHandler,
  )
  .openapi(
    postProdInputDevicesInputDeviceIdRebootRoute,
    postProdInputDevicesInputDeviceIdRebootRouteHandler,
  )
  .openapi(
    postProdInputDevicesInputDeviceIdRejectRoute,
    postProdInputDevicesInputDeviceIdRejectRouteHandler,
  )
  .openapi(postProdChannelsChannelIdStartRoute, postProdChannelsChannelIdStartRouteHandler)
  .openapi(
    postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowRoute,
    postProdInputDevicesInputDeviceIdStartInputDeviceMaintenanceWindowRouteHandler,
  )
  .openapi(
    postProdMultiplexesMultiplexIdStartRoute,
    postProdMultiplexesMultiplexIdStartRouteHandler,
  )
  .openapi(postProdChannelsChannelIdStopRoute, postProdChannelsChannelIdStopRouteHandler)
  .openapi(postProdMultiplexesMultiplexIdStopRoute, postProdMultiplexesMultiplexIdStopRouteHandler)
  .openapi(
    postProdInputDevicesInputDeviceIdTransferRoute,
    postProdInputDevicesInputDeviceIdTransferRouteHandler,
  )
  .openapi(
    putProdChannelsChannelIdChannelClassRoute,
    putProdChannelsChannelIdChannelClassRouteHandler,
  )

export default app
