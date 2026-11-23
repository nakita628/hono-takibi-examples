import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisNetworkingK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.index.$get(undefined, options))
}

export async function getApisNetworkingK8sIoV1Ingressclasses(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.ingressclasses.$get(args, options))
}

export async function postApisNetworkingK8sIoV1Ingressclasses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ingressclasses.$post(args, options),
  )
}

export async function deleteApisNetworkingK8sIoV1Ingressclasses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ingressclasses.$delete(args, options),
  )
}

export async function getApisNetworkingK8sIoV1IngressclassesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$get(args, options),
  )
}

export async function putApisNetworkingK8sIoV1IngressclassesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$put(args, options),
  )
}

export async function deleteApisNetworkingK8sIoV1IngressclassesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$delete(args, options),
  )
}

export async function patchApisNetworkingK8sIoV1IngressclassesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ingressclasses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ingressclasses[':name'].$patch(args, options),
  )
}

export async function getApisNetworkingK8sIoV1Ingresses(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ingresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.ingresses.$get(args, options))
}

export async function getApisNetworkingK8sIoV1Ipaddresses(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$get(args, options))
}

export async function postApisNetworkingK8sIoV1Ipaddresses(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$post(args, options))
}

export async function deleteApisNetworkingK8sIoV1Ipaddresses(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['ipaddresses']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.ipaddresses.$delete(args, options))
}

export async function getApisNetworkingK8sIoV1IpaddressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$get(args, options),
  )
}

export async function putApisNetworkingK8sIoV1IpaddressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$put(args, options),
  )
}

export async function deleteApisNetworkingK8sIoV1IpaddressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$delete(args, options),
  )
}

export async function patchApisNetworkingK8sIoV1IpaddressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['ipaddresses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.ipaddresses[':name'].$patch(args, options),
  )
}

export async function getApisNetworkingK8sIoV1NamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$get(args, options),
  )
}

export async function postApisNetworkingK8sIoV1NamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$post(args, options),
  )
}

export async function deleteApisNetworkingK8sIoV1NamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses.$delete(args, options),
  )
}

export async function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisNetworkingK8sIoV1NamespacesNamespaceIngressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisNetworkingK8sIoV1NamespacesNamespaceIngressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisNetworkingK8sIoV1NamespacesNamespaceIngressesNameStatus(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['ingresses'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].ingresses[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$get(
      args,
      options,
    ),
  )
}

export async function postApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpolicies(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies.$delete(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisNetworkingK8sIoV1NamespacesNamespaceNetworkpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['namespaces'][':namespace']['networkpolicies'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.namespaces[':namespace'].networkpolicies[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1Networkpolicies(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.networkpolicies.$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1Servicecidrs(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$get(args, options))
}

export async function postApisNetworkingK8sIoV1Servicecidrs(
  args: InferRequestType<(typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apis['networking.k8s.io'].v1.servicecidrs.$post(args, options))
}

export async function deleteApisNetworkingK8sIoV1Servicecidrs(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs.$delete(args, options),
  )
}

export async function getApisNetworkingK8sIoV1ServicecidrsName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$get(args, options),
  )
}

export async function putApisNetworkingK8sIoV1ServicecidrsName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$put(args, options),
  )
}

export async function deleteApisNetworkingK8sIoV1ServicecidrsName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$delete(args, options),
  )
}

export async function patchApisNetworkingK8sIoV1ServicecidrsName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].$patch(args, options),
  )
}

export async function getApisNetworkingK8sIoV1ServicecidrsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$get(args, options),
  )
}

export async function putApisNetworkingK8sIoV1ServicecidrsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$put(args, options),
  )
}

export async function patchApisNetworkingK8sIoV1ServicecidrsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['servicecidrs'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.servicecidrs[':name'].status.$patch(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchIngressclasses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.ingressclasses.$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchIngressclassesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingressclasses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.ingressclasses[':name'].$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchIngresses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.ingresses.$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchIpaddresses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.ipaddresses.$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchIpaddressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['ipaddresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.ipaddresses[':name'].$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngresses(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses.$get(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1WatchNamespacesNamespaceIngressesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['ingresses'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].ingresses[':name'].$get(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpolicies(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies.$get(
      args,
      options,
    ),
  )
}

export async function getApisNetworkingK8sIoV1WatchNamespacesNamespaceNetworkpoliciesName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['namespaces'][':namespace']['networkpolicies'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.namespaces[':namespace'].networkpolicies[
      ':name'
    ].$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchNetworkpolicies(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['networkpolicies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.networkpolicies.$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchServicecidrs(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.servicecidrs.$get(args, options),
  )
}

export async function getApisNetworkingK8sIoV1WatchServicecidrsName(
  args: InferRequestType<
    (typeof client.apis)['networking.k8s.io']['v1']['watch']['servicecidrs'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['networking.k8s.io'].v1.watch.servicecidrs[':name'].$get(args, options),
  )
}
