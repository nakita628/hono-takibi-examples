import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApisAutoscalingV1Index(options?: ClientRequestOptions) {
  return await parseResponse(client.apis.autoscaling.v1.index.$get(undefined, options))
}

export async function getApisAutoscalingV1Horizontalpodautoscalers(
  args: InferRequestType<typeof client.apis.autoscaling.v1.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.horizontalpodautoscalers.$get(args, options),
  )
}

export async function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$get(
      args,
      options,
    ),
  )
}

export async function postApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$post(
      args,
      options,
    ),
  )
}

export async function deleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers.$delete(
      args,
      options,
    ),
  )
}

export async function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$get(
      args,
      options,
    ),
  )
}

export async function putApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$put(
      args,
      options,
    ),
  )
}

export async function deleteApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$delete(
      args,
      options,
    ),
  )
}

export async function patchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[':name'].$patch(
      args,
      options,
    ),
  )
}

export async function getApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].status.$get(args, options),
  )
}

export async function putApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].status.$put(args, options),
  )
}

export async function patchApisAutoscalingV1NamespacesNamespaceHorizontalpodautoscalersNameStatus(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['status']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].status.$patch(args, options),
  )
}

export async function getApisAutoscalingV1WatchHorizontalpodautoscalers(
  args: InferRequestType<typeof client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.watch.horizontalpodautoscalers.$get(args, options),
  )
}

export async function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalers(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers.$get(
      args,
      options,
    ),
  )
}

export async function getApisAutoscalingV1WatchNamespacesNamespaceHorizontalpodautoscalersName(
  args: InferRequestType<
    (typeof client.apis.autoscaling.v1.watch.namespaces)[':namespace']['horizontalpodautoscalers'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apis.autoscaling.v1.watch.namespaces[':namespace'].horizontalpodautoscalers[
      ':name'
    ].$get(args, options),
  )
}
