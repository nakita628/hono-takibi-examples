import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1BridgesBridgeArnOutputs(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['outputs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges[':bridgeArn'].outputs.$post(args, options))
}

export async function postV1BridgesBridgeArnSources(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['sources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges[':bridgeArn'].sources.$post(args, options))
}

export async function postV1FlowsFlowArnMediaStreams(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['mediaStreams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].mediaStreams.$post(args, options))
}

export async function postV1FlowsFlowArnOutputs(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].outputs.$post(args, options))
}

export async function postV1FlowsFlowArnSource(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].source.$post(args, options))
}

export async function postV1FlowsFlowArnVpcInterfaces(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['vpcInterfaces']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].vpcInterfaces.$post(args, options))
}

export async function getV1Bridges(
  args: InferRequestType<typeof client.v1.bridges.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges.$get(args, options))
}

export async function postV1Bridges(
  args: InferRequestType<typeof client.v1.bridges.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges.$post(args, options))
}

export async function getV1Flows(
  args: InferRequestType<typeof client.v1.flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.$get(args, options))
}

export async function postV1Flows(
  args: InferRequestType<typeof client.v1.flows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.$post(args, options))
}

export async function getV1Gateways(
  args: InferRequestType<typeof client.v1.gateways.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.gateways.$get(args, options))
}

export async function postV1Gateways(
  args: InferRequestType<typeof client.v1.gateways.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.gateways.$post(args, options))
}

export async function getV1BridgesBridgeArn(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges[':bridgeArn'].$get(args, options))
}

export async function putV1BridgesBridgeArn(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges[':bridgeArn'].$put(args, options))
}

export async function deleteV1BridgesBridgeArn(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges[':bridgeArn'].$delete(args, options))
}

export async function getV1FlowsFlowArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].$get(args, options))
}

export async function putV1FlowsFlowArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].$put(args, options))
}

export async function deleteV1FlowsFlowArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].$delete(args, options))
}

export async function getV1GatewaysGatewayArn(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.gateways[':gatewayArn'].$get(args, options))
}

export async function deleteV1GatewaysGatewayArn(
  args: InferRequestType<(typeof client.v1.gateways)[':gatewayArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.gateways[':gatewayArn'].$delete(args, options))
}

export async function getV1GatewayInstancesGatewayInstanceArn(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['gateway-instances'][':gatewayInstanceArn'].$get(args, options),
  )
}

export async function putV1GatewayInstancesGatewayInstanceArn(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['gateway-instances'][':gatewayInstanceArn'].$put(args, options),
  )
}

export async function deleteV1GatewayInstancesGatewayInstanceArn(
  args: InferRequestType<(typeof client.v1)['gateway-instances'][':gatewayInstanceArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1['gateway-instances'][':gatewayInstanceArn'].$delete(args, options),
  )
}

export async function getV1OfferingsOfferingArn(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.offerings[':offeringArn'].$get(args, options))
}

export async function postV1OfferingsOfferingArn(
  args: InferRequestType<(typeof client.v1.offerings)[':offeringArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.offerings[':offeringArn'].$post(args, options))
}

export async function getV1ReservationsReservationArn(
  args: InferRequestType<(typeof client.v1.reservations)[':reservationArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reservations[':reservationArn'].$get(args, options))
}

export async function postV1FlowsFlowArnEntitlements(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['entitlements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].entitlements.$post(args, options))
}

export async function getV1Entitlements(
  args: InferRequestType<typeof client.v1.entitlements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.entitlements.$get(args, options))
}

export async function getV1GatewayInstances(
  args: InferRequestType<(typeof client.v1)['gateway-instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['gateway-instances'].$get(args, options))
}

export async function getV1Offerings(
  args: InferRequestType<typeof client.v1.offerings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.offerings.$get(args, options))
}

export async function getV1Reservations(
  args: InferRequestType<typeof client.v1.reservations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.reservations.$get(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function putV1BridgesBridgeArnOutputsOutputName(
  args: InferRequestType<
    (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.bridges[':bridgeArn'].outputs[':outputName'].$put(args, options),
  )
}

export async function deleteV1BridgesBridgeArnOutputsOutputName(
  args: InferRequestType<
    (typeof client.v1.bridges)[':bridgeArn']['outputs'][':outputName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.bridges[':bridgeArn'].outputs[':outputName'].$delete(args, options),
  )
}

export async function putV1BridgesBridgeArnSourcesSourceName(
  args: InferRequestType<
    (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.bridges[':bridgeArn'].sources[':sourceName'].$put(args, options),
  )
}

export async function deleteV1BridgesBridgeArnSourcesSourceName(
  args: InferRequestType<
    (typeof client.v1.bridges)[':bridgeArn']['sources'][':sourceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.bridges[':bridgeArn'].sources[':sourceName'].$delete(args, options),
  )
}

export async function putV1FlowsFlowArnMediaStreamsMediaStreamName(
  args: InferRequestType<
    (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].mediaStreams[':mediaStreamName'].$put(args, options),
  )
}

export async function deleteV1FlowsFlowArnMediaStreamsMediaStreamName(
  args: InferRequestType<
    (typeof client.v1.flows)[':flowArn']['mediaStreams'][':mediaStreamName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].mediaStreams[':mediaStreamName'].$delete(args, options),
  )
}

export async function putV1FlowsFlowArnOutputsOutputArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].outputs[':outputArn'].$put(args, options))
}

export async function deleteV1FlowsFlowArnOutputsOutputArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['outputs'][':outputArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].outputs[':outputArn'].$delete(args, options),
  )
}

export async function putV1FlowsFlowArnSourceSourceArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows[':flowArn'].source[':sourceArn'].$put(args, options))
}

export async function deleteV1FlowsFlowArnSourceSourceArn(
  args: InferRequestType<(typeof client.v1.flows)[':flowArn']['source'][':sourceArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].source[':sourceArn'].$delete(args, options),
  )
}

export async function deleteV1FlowsFlowArnVpcInterfacesVpcInterfaceName(
  args: InferRequestType<
    (typeof client.v1.flows)[':flowArn']['vpcInterfaces'][':vpcInterfaceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].vpcInterfaces[':vpcInterfaceName'].$delete(args, options),
  )
}

export async function putV1FlowsFlowArnEntitlementsEntitlementArn(
  args: InferRequestType<
    (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].entitlements[':entitlementArn'].$put(args, options),
  )
}

export async function deleteV1FlowsFlowArnEntitlementsEntitlementArn(
  args: InferRequestType<
    (typeof client.v1.flows)[':flowArn']['entitlements'][':entitlementArn']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.flows[':flowArn'].entitlements[':entitlementArn'].$delete(args, options),
  )
}

export async function postV1FlowsStartFlowArn(
  args: InferRequestType<(typeof client.v1.flows.start)[':flowArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.start[':flowArn'].$post(args, options))
}

export async function postV1FlowsStopFlowArn(
  args: InferRequestType<(typeof client.v1.flows.stop)[':flowArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.flows.stop[':flowArn'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}

export async function putV1BridgesBridgeArnState(
  args: InferRequestType<(typeof client.v1.bridges)[':bridgeArn']['state']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.bridges[':bridgeArn'].state.$put(args, options))
}
