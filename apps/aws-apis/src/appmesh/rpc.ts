import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes.$get(
      args,
      options,
    ),
  )
}

export async function putV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutes(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes.$put(
      args,
      options,
    ),
  )
}

export async function getV20190125Meshes(
  args: InferRequestType<typeof client.v20190125.meshes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes.$get(args, options))
}

export async function putV20190125Meshes(
  args: InferRequestType<typeof client.v20190125.meshes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes.$put(args, options))
}

export async function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$get(
      args,
      options,
    ),
  )
}

export async function putV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutes(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes.$put(
      args,
      options,
    ),
  )
}

export async function getV20190125MeshesMeshNameVirtualGateways(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateways.$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualGateways(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualGateways']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateways.$put(args, options),
  )
}

export async function getV20190125MeshesMeshNameVirtualNodes(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes[':meshName'].virtualNodes.$get(args, options))
}

export async function putV20190125MeshesMeshNameVirtualNodes(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualNodes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes[':meshName'].virtualNodes.$put(args, options))
}

export async function getV20190125MeshesMeshNameVirtualRouters(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouters.$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualRouters(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualRouters']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouters.$put(args, options),
  )
}

export async function getV20190125MeshesMeshNameVirtualServices(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualServices.$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualServices(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['virtualServices']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualServices.$put(args, options),
  )
}

export async function getV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
      ':gatewayRouteName'
    ].$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
      ':gatewayRouteName'
    ].$put(args, options),
  )
}

export async function deleteV20190125MeshesMeshNameVirtualGatewayVirtualGatewayNameGatewayRoutesGatewayRouteName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateway'][':virtualGatewayName']['gatewayRoutes'][':gatewayRouteName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateway[':virtualGatewayName'].gatewayRoutes[
      ':gatewayRouteName'
    ].$delete(args, options),
  )
}

export async function getV20190125MeshesMeshName(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes[':meshName'].$get(args, options))
}

export async function putV20190125MeshesMeshName(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes[':meshName'].$put(args, options))
}

export async function deleteV20190125MeshesMeshName(
  args: InferRequestType<(typeof client.v20190125.meshes)[':meshName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125.meshes[':meshName'].$delete(args, options))
}

export async function getV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
      ':routeName'
    ].$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
      ':routeName'
    ].$put(args, options),
  )
}

export async function deleteV20190125MeshesMeshNameVirtualRouterVirtualRouterNameRoutesRouteName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouter'][':virtualRouterName']['routes'][':routeName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouter[':virtualRouterName'].routes[
      ':routeName'
    ].$delete(args, options),
  )
}

export async function getV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$put(args, options),
  )
}

export async function deleteV20190125MeshesMeshNameVirtualGatewaysVirtualGatewayName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualGateways'][':virtualGatewayName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualGateways[':virtualGatewayName'].$delete(
      args,
      options,
    ),
  )
}

export async function getV20190125MeshesMeshNameVirtualNodesVirtualNodeName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualNodesVirtualNodeName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$put(args, options),
  )
}

export async function deleteV20190125MeshesMeshNameVirtualNodesVirtualNodeName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualNodes'][':virtualNodeName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualNodes[':virtualNodeName'].$delete(args, options),
  )
}

export async function getV20190125MeshesMeshNameVirtualRoutersVirtualRouterName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualRoutersVirtualRouterName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$put(args, options),
  )
}

export async function deleteV20190125MeshesMeshNameVirtualRoutersVirtualRouterName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualRouters'][':virtualRouterName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualRouters[':virtualRouterName'].$delete(
      args,
      options,
    ),
  )
}

export async function getV20190125MeshesMeshNameVirtualServicesVirtualServiceName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$get(args, options),
  )
}

export async function putV20190125MeshesMeshNameVirtualServicesVirtualServiceName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$put(args, options),
  )
}

export async function deleteV20190125MeshesMeshNameVirtualServicesVirtualServiceName(
  args: InferRequestType<
    (typeof client.v20190125.meshes)[':meshName']['virtualServices'][':virtualServiceName']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v20190125.meshes[':meshName'].virtualServices[':virtualServiceName'].$delete(
      args,
      options,
    ),
  )
}

export async function getV20190125TagsResourceArn(
  args: InferRequestType<(typeof client.v20190125)['tags#resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125['tags#resourceArn'].$get(args, options))
}

export async function putV20190125TagResourceArn(
  args: InferRequestType<(typeof client.v20190125)['tag#resourceArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125['tag#resourceArn'].$put(args, options))
}

export async function putV20190125UntagResourceArn(
  args: InferRequestType<(typeof client.v20190125)['untag#resourceArn']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v20190125['untag#resourceArn'].$put(args, options))
}
