import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTagsResourceArnTagKeysRoute,
  deleteV1BridgesBridgeArnOutputsOutputNameRoute,
  deleteV1BridgesBridgeArnRoute,
  deleteV1BridgesBridgeArnSourcesSourceNameRoute,
  deleteV1FlowsFlowArnEntitlementsEntitlementArnRoute,
  deleteV1FlowsFlowArnMediaStreamsMediaStreamNameRoute,
  deleteV1FlowsFlowArnOutputsOutputArnRoute,
  deleteV1FlowsFlowArnRoute,
  deleteV1FlowsFlowArnSourceSourceArnRoute,
  deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameRoute,
  deleteV1GatewayInstancesGatewayInstanceArnRoute,
  deleteV1GatewaysGatewayArnRoute,
  getTagsResourceArnRoute,
  getV1BridgesBridgeArnRoute,
  getV1BridgesRoute,
  getV1EntitlementsRoute,
  getV1FlowsFlowArnRoute,
  getV1FlowsRoute,
  getV1GatewayInstancesGatewayInstanceArnRoute,
  getV1GatewayInstancesRoute,
  getV1GatewaysGatewayArnRoute,
  getV1GatewaysRoute,
  getV1OfferingsOfferingArnRoute,
  getV1OfferingsRoute,
  getV1ReservationsReservationArnRoute,
  getV1ReservationsRoute,
  postTagsResourceArnRoute,
  postV1BridgesBridgeArnOutputsRoute,
  postV1BridgesBridgeArnSourcesRoute,
  postV1BridgesRoute,
  postV1FlowsFlowArnEntitlementsRoute,
  postV1FlowsFlowArnMediaStreamsRoute,
  postV1FlowsFlowArnOutputsRoute,
  postV1FlowsFlowArnSourceRoute,
  postV1FlowsFlowArnVpcInterfacesRoute,
  postV1FlowsRoute,
  postV1FlowsStartFlowArnRoute,
  postV1FlowsStopFlowArnRoute,
  postV1GatewaysRoute,
  postV1OfferingsOfferingArnRoute,
  putV1BridgesBridgeArnOutputsOutputNameRoute,
  putV1BridgesBridgeArnRoute,
  putV1BridgesBridgeArnSourcesSourceNameRoute,
  putV1BridgesBridgeArnStateRoute,
  putV1FlowsFlowArnEntitlementsEntitlementArnRoute,
  putV1FlowsFlowArnMediaStreamsMediaStreamNameRoute,
  putV1FlowsFlowArnOutputsOutputArnRoute,
  putV1FlowsFlowArnRoute,
  putV1FlowsFlowArnSourceSourceArnRoute,
  putV1GatewayInstancesGatewayInstanceArnRoute,
} from './routes'
import {
  deleteTagsResourceArnTagKeysRouteHandler,
  deleteV1BridgesBridgeArnOutputsOutputNameRouteHandler,
  deleteV1BridgesBridgeArnRouteHandler,
  deleteV1BridgesBridgeArnSourcesSourceNameRouteHandler,
  deleteV1FlowsFlowArnEntitlementsEntitlementArnRouteHandler,
  deleteV1FlowsFlowArnMediaStreamsMediaStreamNameRouteHandler,
  deleteV1FlowsFlowArnOutputsOutputArnRouteHandler,
  deleteV1FlowsFlowArnRouteHandler,
  deleteV1FlowsFlowArnSourceSourceArnRouteHandler,
  deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameRouteHandler,
  deleteV1GatewayInstancesGatewayInstanceArnRouteHandler,
  deleteV1GatewaysGatewayArnRouteHandler,
  getTagsResourceArnRouteHandler,
  getV1BridgesBridgeArnRouteHandler,
  getV1BridgesRouteHandler,
  getV1EntitlementsRouteHandler,
  getV1FlowsFlowArnRouteHandler,
  getV1FlowsRouteHandler,
  getV1GatewayInstancesGatewayInstanceArnRouteHandler,
  getV1GatewayInstancesRouteHandler,
  getV1GatewaysGatewayArnRouteHandler,
  getV1GatewaysRouteHandler,
  getV1OfferingsOfferingArnRouteHandler,
  getV1OfferingsRouteHandler,
  getV1ReservationsReservationArnRouteHandler,
  getV1ReservationsRouteHandler,
  postTagsResourceArnRouteHandler,
  postV1BridgesBridgeArnOutputsRouteHandler,
  postV1BridgesBridgeArnSourcesRouteHandler,
  postV1BridgesRouteHandler,
  postV1FlowsFlowArnEntitlementsRouteHandler,
  postV1FlowsFlowArnMediaStreamsRouteHandler,
  postV1FlowsFlowArnOutputsRouteHandler,
  postV1FlowsFlowArnSourceRouteHandler,
  postV1FlowsFlowArnVpcInterfacesRouteHandler,
  postV1FlowsRouteHandler,
  postV1FlowsStartFlowArnRouteHandler,
  postV1FlowsStopFlowArnRouteHandler,
  postV1GatewaysRouteHandler,
  postV1OfferingsOfferingArnRouteHandler,
  putV1BridgesBridgeArnOutputsOutputNameRouteHandler,
  putV1BridgesBridgeArnRouteHandler,
  putV1BridgesBridgeArnSourcesSourceNameRouteHandler,
  putV1BridgesBridgeArnStateRouteHandler,
  putV1FlowsFlowArnEntitlementsEntitlementArnRouteHandler,
  putV1FlowsFlowArnMediaStreamsMediaStreamNameRouteHandler,
  putV1FlowsFlowArnOutputsOutputArnRouteHandler,
  putV1FlowsFlowArnRouteHandler,
  putV1FlowsFlowArnSourceSourceArnRouteHandler,
  putV1GatewayInstancesGatewayInstanceArnRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1BridgesBridgeArnOutputsRoute, postV1BridgesBridgeArnOutputsRouteHandler)
  .openapi(postV1BridgesBridgeArnSourcesRoute, postV1BridgesBridgeArnSourcesRouteHandler)
  .openapi(postV1FlowsFlowArnMediaStreamsRoute, postV1FlowsFlowArnMediaStreamsRouteHandler)
  .openapi(postV1FlowsFlowArnOutputsRoute, postV1FlowsFlowArnOutputsRouteHandler)
  .openapi(postV1FlowsFlowArnSourceRoute, postV1FlowsFlowArnSourceRouteHandler)
  .openapi(postV1FlowsFlowArnVpcInterfacesRoute, postV1FlowsFlowArnVpcInterfacesRouteHandler)
  .openapi(postV1BridgesRoute, postV1BridgesRouteHandler)
  .openapi(getV1BridgesRoute, getV1BridgesRouteHandler)
  .openapi(postV1FlowsRoute, postV1FlowsRouteHandler)
  .openapi(getV1FlowsRoute, getV1FlowsRouteHandler)
  .openapi(postV1GatewaysRoute, postV1GatewaysRouteHandler)
  .openapi(getV1GatewaysRoute, getV1GatewaysRouteHandler)
  .openapi(deleteV1BridgesBridgeArnRoute, deleteV1BridgesBridgeArnRouteHandler)
  .openapi(getV1BridgesBridgeArnRoute, getV1BridgesBridgeArnRouteHandler)
  .openapi(putV1BridgesBridgeArnRoute, putV1BridgesBridgeArnRouteHandler)
  .openapi(deleteV1FlowsFlowArnRoute, deleteV1FlowsFlowArnRouteHandler)
  .openapi(getV1FlowsFlowArnRoute, getV1FlowsFlowArnRouteHandler)
  .openapi(putV1FlowsFlowArnRoute, putV1FlowsFlowArnRouteHandler)
  .openapi(deleteV1GatewaysGatewayArnRoute, deleteV1GatewaysGatewayArnRouteHandler)
  .openapi(getV1GatewaysGatewayArnRoute, getV1GatewaysGatewayArnRouteHandler)
  .openapi(
    deleteV1GatewayInstancesGatewayInstanceArnRoute,
    deleteV1GatewayInstancesGatewayInstanceArnRouteHandler,
  )
  .openapi(
    getV1GatewayInstancesGatewayInstanceArnRoute,
    getV1GatewayInstancesGatewayInstanceArnRouteHandler,
  )
  .openapi(
    putV1GatewayInstancesGatewayInstanceArnRoute,
    putV1GatewayInstancesGatewayInstanceArnRouteHandler,
  )
  .openapi(getV1OfferingsOfferingArnRoute, getV1OfferingsOfferingArnRouteHandler)
  .openapi(postV1OfferingsOfferingArnRoute, postV1OfferingsOfferingArnRouteHandler)
  .openapi(getV1ReservationsReservationArnRoute, getV1ReservationsReservationArnRouteHandler)
  .openapi(postV1FlowsFlowArnEntitlementsRoute, postV1FlowsFlowArnEntitlementsRouteHandler)
  .openapi(getV1EntitlementsRoute, getV1EntitlementsRouteHandler)
  .openapi(getV1GatewayInstancesRoute, getV1GatewayInstancesRouteHandler)
  .openapi(getV1OfferingsRoute, getV1OfferingsRouteHandler)
  .openapi(getV1ReservationsRoute, getV1ReservationsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    deleteV1BridgesBridgeArnOutputsOutputNameRoute,
    deleteV1BridgesBridgeArnOutputsOutputNameRouteHandler,
  )
  .openapi(
    putV1BridgesBridgeArnOutputsOutputNameRoute,
    putV1BridgesBridgeArnOutputsOutputNameRouteHandler,
  )
  .openapi(
    deleteV1BridgesBridgeArnSourcesSourceNameRoute,
    deleteV1BridgesBridgeArnSourcesSourceNameRouteHandler,
  )
  .openapi(
    putV1BridgesBridgeArnSourcesSourceNameRoute,
    putV1BridgesBridgeArnSourcesSourceNameRouteHandler,
  )
  .openapi(
    deleteV1FlowsFlowArnMediaStreamsMediaStreamNameRoute,
    deleteV1FlowsFlowArnMediaStreamsMediaStreamNameRouteHandler,
  )
  .openapi(
    putV1FlowsFlowArnMediaStreamsMediaStreamNameRoute,
    putV1FlowsFlowArnMediaStreamsMediaStreamNameRouteHandler,
  )
  .openapi(
    deleteV1FlowsFlowArnOutputsOutputArnRoute,
    deleteV1FlowsFlowArnOutputsOutputArnRouteHandler,
  )
  .openapi(putV1FlowsFlowArnOutputsOutputArnRoute, putV1FlowsFlowArnOutputsOutputArnRouteHandler)
  .openapi(
    deleteV1FlowsFlowArnSourceSourceArnRoute,
    deleteV1FlowsFlowArnSourceSourceArnRouteHandler,
  )
  .openapi(putV1FlowsFlowArnSourceSourceArnRoute, putV1FlowsFlowArnSourceSourceArnRouteHandler)
  .openapi(
    deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameRoute,
    deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameRouteHandler,
  )
  .openapi(
    deleteV1FlowsFlowArnEntitlementsEntitlementArnRoute,
    deleteV1FlowsFlowArnEntitlementsEntitlementArnRouteHandler,
  )
  .openapi(
    putV1FlowsFlowArnEntitlementsEntitlementArnRoute,
    putV1FlowsFlowArnEntitlementsEntitlementArnRouteHandler,
  )
  .openapi(postV1FlowsStartFlowArnRoute, postV1FlowsStartFlowArnRouteHandler)
  .openapi(postV1FlowsStopFlowArnRoute, postV1FlowsStopFlowArnRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)
  .openapi(putV1BridgesBridgeArnStateRoute, putV1BridgesBridgeArnStateRouteHandler)

export default app
