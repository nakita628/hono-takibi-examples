import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisAutoscalingV2Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis.autoscaling.v2.index.$get(undefined, options))
}

export async function getApisAutoscalingV2Horizontalpodautoscalers(
  args: InferRequestType<typeof client.apis.autoscaling.v2.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.horizontalpodautoscalers.$get(args, options),
  )
}

export async function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$get(
      args,
      options,
    ),
  )
}

export async function postApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].status.$get(args, options),
  )
}

export async function putApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].status.$put(args, options),
  )
}

export async function patchApisAutoscalingV2NamespacesNamespaceHorizontalpodautoscalersNameStatus(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].status.$patch(args, options),
  )
}

export async function getApisAutoscalingV2WatchHorizontalpodautoscalers(
  args: InferRequestType<typeof client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.watch.horizontalpodautoscalers.$get(args, options),
  )
}

export async function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
      args,
      options,
    ),
  )
}

export async function getApisAutoscalingV2WatchNamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v2.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v2.watch.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].$get(args, options),
  )
}
