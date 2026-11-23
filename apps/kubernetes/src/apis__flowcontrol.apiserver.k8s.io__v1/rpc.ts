import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisFlowcontrolApiserverK8sIoV1Index(options?: ClientRequestOptions) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.index.$get(undefined, options),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1Flowschemas(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$get(args, options),
  )
}

export async function postApisFlowcontrolApiserverK8sIoV1Flowschemas(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$post(args, options),
  )
}

export async function deleteApisFlowcontrolApiserverK8sIoV1Flowschemas(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas.$delete(args, options),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1FlowschemasName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$get(args, options),
  )
}

export async function putApisFlowcontrolApiserverK8sIoV1FlowschemasName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$put(args, options),
  )
}

export async function deleteApisFlowcontrolApiserverK8sIoV1FlowschemasName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$delete(args, options),
  )
}

export async function patchApisFlowcontrolApiserverK8sIoV1FlowschemasName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].$patch(args, options),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$get(args, options),
  )
}

export async function putApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$put(args, options),
  )
}

export async function patchApisFlowcontrolApiserverK8sIoV1FlowschemasNameStatus(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['flowschemas'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.flowschemas[':name'].status.$patch(
      args,
      options,
    ),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$get(args, options),
  )
}

export async function postApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$post(args, options),
  )
}

export async function deleteApisFlowcontrolApiserverK8sIoV1Prioritylevelconfigurations(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations.$delete(
      args,
      options,
    ),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].status.$get(
      args,
      options,
    ),
  )
}

export async function putApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[':name'].status.$put(
      args,
      options,
    ),
  )
}

export async function patchApisFlowcontrolApiserverK8sIoV1PrioritylevelconfigurationsNameStatus(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['prioritylevelconfigurations'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.prioritylevelconfigurations[
      ':name'
    ].status.$patch(args, options),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemas(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas.$get(args, options),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1WatchFlowschemasName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['flowschemas'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.flowschemas[':name'].$get(args, options),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurations(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations.$get(
      args,
      options,
    ),
  )
}

export async function getApisFlowcontrolApiserverK8sIoV1WatchPrioritylevelconfigurationsName(
  args: InferRequestType<
    (typeof client.apis)['flowcontrol.apiserver.k8s.io']['v1']['watch']['prioritylevelconfigurations'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis['flowcontrol.apiserver.k8s.io'].v1.watch.prioritylevelconfigurations[':name'].$get(
      args,
      options,
    ),
  )
}
