import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1BridgesBridgeArnOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BridgesBridgeArnSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsFlowArnMediaStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsFlowArnOutputsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsFlowArnSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsFlowArnVpcInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BridgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BridgesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GatewaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BridgesBridgeArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BridgesBridgeArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BridgesBridgeArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FlowsFlowArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FlowsFlowArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FlowsFlowArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GatewaysGatewayArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GatewaysGatewayArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GatewayInstancesGatewayInstanceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GatewayInstancesGatewayInstanceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GatewayInstancesGatewayInstanceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OfferingsOfferingArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OfferingsOfferingArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReservationsReservationArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsFlowArnEntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitlementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GatewayInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OfferingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BridgesBridgeArnOutputsOutputNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BridgesBridgeArnOutputsOutputNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BridgesBridgeArnSourcesSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BridgesBridgeArnSourcesSourceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FlowsFlowArnMediaStreamsMediaStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FlowsFlowArnMediaStreamsMediaStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FlowsFlowArnOutputsOutputArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FlowsFlowArnOutputsOutputArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FlowsFlowArnSourceSourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FlowsFlowArnSourceSourceArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1FlowsFlowArnEntitlementsEntitlementArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1FlowsFlowArnEntitlementsEntitlementArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsStartFlowArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1FlowsStopFlowArnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BridgesBridgeArnStateRoute, (c) => {
    throw new Error('Not implemented')
  })
