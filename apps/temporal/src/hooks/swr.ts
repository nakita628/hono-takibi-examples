import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getClusterKey() {
  return ['cluster'] as const
}

export function getNamespacesKey() {
  return ['namespaces'] as const
}

export function getSystemInfoKey() {
  return ['system-info'] as const
}

export function getGetApiV1ClusterInfoKey() {
  return ['api', '/api/v1/cluster-info'] as const
}

export function useGetApiV1ClusterInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClusterInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['cluster-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1ClusterInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1ClusterInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['cluster-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['cluster-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesKey(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
) {
  return ['api', '/api/v1/namespaces', args] as const
}

export function useGetApiV1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1Namespaces<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesKey() {
  return ['api', '/api/v1/namespaces', 'POST'] as const
}

export function usePostApiV1Namespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.namespaces.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.namespaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.v1.namespaces.$post> }) =>
        parseResponse(client.api.v1.namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace', args] as const
}

export function useGetApiV1NamespacesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.namespaces[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceActivitiesKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/activities', args] as const
}

export function useGetApiV1NamespacesNamespaceActivities<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceActivities<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activities']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedPauseKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities-deprecated/pause', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesDeprecatedPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesDeprecatedPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activities-deprecated'].pause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedResetKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities-deprecated/reset', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesDeprecatedReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesDeprecatedResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activities-deprecated'].reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities-deprecated/unpause', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesDeprecatedUnpause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesDeprecatedUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activities-deprecated'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/activities-deprecated/update-options',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesDeprecatedUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activities-deprecated']['update-options'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceActivitiesActivityIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId', args] as const
}

export function useGetApiV1NamespacesNamespaceActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivitiesActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivitiesActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdCancelKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/cancel', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdCompleteKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/complete', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdFailKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/fail', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdFail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].fail.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/heartbeat', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].heartbeat.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceActivitiesActivityIdOutcomeKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/outcome', args] as const
}

export function useGetApiV1NamespacesNamespaceActivitiesActivityIdOutcome<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivitiesActivityIdOutcomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].outcome.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceActivitiesActivityIdOutcome<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivitiesActivityIdOutcomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].outcome.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdPauseKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/pause', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].pause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdResetKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/reset', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdResolveAsCanceledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'][
            'resolve-as-canceled'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdTerminateKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/terminate', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdTerminate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].terminate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdUnpauseKey() {
  return ['api', '/api/v1/namespaces/:namespace/activities/:activityId/unpause', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdUnpause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivitiesActivityIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].activities[':activityId']['update-options'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivityCompleteKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-complete', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivityComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivityCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activity-complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activity-complete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceActivityCountKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/activity-count', args] as const
}

export function useGetApiV1NamespacesNamespaceActivityCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivityCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activity-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceActivityCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceActivityCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activity-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivityFailKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-fail', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivityFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivityFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activity-fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activity-fail'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivityHeartbeatKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-heartbeat', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivityHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivityHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activity-heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activity-heartbeat'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceActivityResolveAsCanceledKey() {
  return ['api', '/api/v1/namespaces/:namespace/activity-resolve-as-canceled', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceActivityResolveAsCanceled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceActivityResolveAsCanceledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['activity-resolve-as-canceled'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceArchivedWorkflowsKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/archived-workflows', args] as const
}

export function useGetApiV1NamespacesNamespaceArchivedWorkflows<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceArchivedWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['archived-workflows'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceArchivedWorkflows<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceArchivedWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['archived-workflows']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['archived-workflows'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceBatchOperationsKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations', args] as const
}

export function useGetApiV1NamespacesNamespaceBatchOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceBatchOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['batch-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceBatchOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceBatchOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['batch-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceBatchOperationsJobIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations/:jobId', args] as const
}

export function useGetApiV1NamespacesNamespaceBatchOperationsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceBatchOperationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceBatchOperationsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceBatchOperationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceBatchOperationsJobIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations/:jobId', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceBatchOperationsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceBatchOperationsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceBatchOperationsJobIdStopKey() {
  return ['api', '/api/v1/namespaces/:namespace/batch-operations/:jobId/stop', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceBatchOperationsJobIdStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceBatchOperationsJobIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['batch-operations'][':jobId'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/current-deployment/:deployment.series_name',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceCurrentDeploymentDeploymentSeriesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['current-deployment'][
            ':deployment.series_name'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceCurrentDeploymentSeriesNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/current-deployment/:seriesName', args] as const
}

export function useGetApiV1NamespacesNamespaceCurrentDeploymentSeriesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceCurrentDeploymentSeriesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['current-deployment'][':seriesName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceCurrentDeploymentSeriesName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceCurrentDeploymentSeriesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['current-deployment'][':seriesName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceDeploymentsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/deployments', args] as const
}

export function useGetApiV1NamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id/reachability',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].reachability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].reachability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceNexusOperationCountKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operation-count', args] as const
}

export function useGetApiV1NamespacesNamespaceNexusOperationCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operation-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceNexusOperationCount<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operation-count']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operation-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceNexusOperationsKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations', args] as const
}

export function useGetApiV1NamespacesNamespaceNexusOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceNexusOperations<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceNexusOperationsOperationIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations/:operationId', args] as const
}

export function useGetApiV1NamespacesNamespaceNexusOperationsOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceNexusOperationsOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations/:operationId', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceNexusOperationsOperationId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceNexusOperationsOperationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancelKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/cancel',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceNexusOperationsOperationIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceNexusOperationsOperationIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceNexusOperationsOperationIdPollKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/nexus-operations/:operationId/poll', args] as const
}

export function useGetApiV1NamespacesNamespaceNexusOperationsOperationIdPoll<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationsOperationIdPollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceNexusOperationsOperationIdPoll<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceNexusOperationsOperationIdPollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/nexus-operations/:operationId/terminate',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceNexusOperationsOperationIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['nexus-operations'][
            ':operationId'
          ].terminate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceScheduleCountKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/schedule-count', args] as const
}

export function useGetApiV1NamespacesNamespaceScheduleCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceScheduleCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['schedule-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceScheduleCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceScheduleCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedule-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['schedule-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceSchedulesKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/schedules', args] as const
}

export function useGetApiV1NamespacesNamespaceSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['schedules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceSchedulesScheduleIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId', args] as const
}

export function useGetApiV1NamespacesNamespaceSchedulesScheduleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceSchedulesScheduleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceSchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceSchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceSchedulesScheduleIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceSchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceSchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/schedules/:scheduleId/matching-times',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSchedulesScheduleIdMatchingTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdPatchKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId/patch', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceSchedulesScheduleIdPatch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceSchedulesScheduleIdPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].patch.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdateKey() {
  return ['api', '/api/v1/namespaces/:namespace/schedules/:scheduleId/update', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceSchedulesScheduleIdUpdate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceSchedulesScheduleIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].schedules[':scheduleId'].update.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceSearchAttributesKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/search-attributes', args] as const
}

export function useGetApiV1NamespacesNamespaceSearchAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSearchAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['search-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceSearchAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceSearchAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['search-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/update-config',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceTaskQueuesTaskQueueUpdateConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
            'update-config'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/worker-build-id-compatibility',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-build-id-compatibility'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-build-id-compatibility'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/task-queues/:taskQueue/worker-versioning-rules',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-versioning-rules'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-versioning-rules'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/task-queues/:task_queue.name', args] as const
}

export function useGetApiV1NamespacesNamespaceTaskQueuesTaskQueueName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceTaskQueuesTaskQueueName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceTaskQueuesTaskQueueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceUpdateKey() {
  return ['api', '/api/v1/namespaces/:namespace/update', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['update']['$post']>
        },
      ) => parseResponse(client.api.v1.namespaces[':namespace'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    'DELETE',
  ] as const
}

export function useDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-compute-config',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id']['update-compute-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-metadata',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id']['update-metadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/validate-compute-config',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id']['validate-compute-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkerDeploymentsKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/worker-deployments', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkerDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkerDeployments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName',
    'DELETE',
  ] as const
}

export function useDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-current-version',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
            'set-current-version'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-manager',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManager<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
            'set-manager'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/worker-deployments/:deploymentName/set-ramping-version',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-deployments'][':deploymentName'][
            'set-ramping-version'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkerTaskReachabilityKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/worker-task-reachability', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkerTaskReachability<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerTaskReachabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-task-reachability'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkerTaskReachability<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkerTaskReachabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['worker-task-reachability'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkersKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workers', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].workers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkers<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].workers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/workers/describe/:workerInstanceKey', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkersDescribeWorkerInstanceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkersFetchConfigKey() {
  return ['api', '/api/v1/namespaces/:namespace/workers/fetch-config', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkersFetchConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkersFetchConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workers']['fetch-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workers['fetch-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkersHeartbeatKey() {
  return ['api', '/api/v1/namespaces/:namespace/workers/heartbeat', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkersHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkersHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workers']['heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workers.heartbeat.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkersUpdateConfigKey() {
  return ['api', '/api/v1/namespaces/:namespace/workers/update-config', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkersUpdateConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkersUpdateConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workers']['update-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workers['update-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowCountKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflow-count', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkflowCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflowCount<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowRulesKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkflowRules<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-rules'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflowRules<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-rules'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowRulesKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkflowRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflow-rules']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-rules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowRulesRuleIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules/:ruleId', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkflowRulesRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflowRulesRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1NamespacesNamespaceWorkflowRulesRuleIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflow-rules/:ruleId', 'DELETE'] as const
}

export function useDeleteApiV1NamespacesNamespaceWorkflowRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NamespacesNamespaceWorkflowRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace']['workflow-rules'][':ruleId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowsKey(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflows', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.v1.namespaces)[':namespace']['workflows']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.v1.namespaces[':namespace'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
) {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id', args] as const
}

export function useGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/history',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseKey(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
) {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/history-reverse',
    args,
  ] as const
}

export function useGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
            'history-reverse'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
            'history-reverse'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/query/:query.query_type',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'].query[
            ':query.query_type'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:execution.workflow_id/trigger-rule',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':execution.workflow_id'][
            'trigger-rule'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:workflowId', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/complete',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].complete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/fail',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].fail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/heartbeat',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].heartbeat.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/pause',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/reset',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
            'resolve-as-canceled'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/unpause',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].unpause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
            'update-options'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:workflowId/pause', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].pause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflowId/signal-with-start/:signalName',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId']['signal-with-start'][
            ':signalName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseKey() {
  return ['api', '/api/v1/namespaces/:namespace/workflows/:workflowId/unpause', 'POST'] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflowId'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/cancel',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[
            ':workflow_execution.workflow_id'
          ].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/reset',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[
            ':workflow_execution.workflow_id'
          ].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/signal/:signalName',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[
            ':workflow_execution.workflow_id'
          ].signal[':signalName'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/terminate',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[
            ':workflow_execution.workflow_id'
          ].terminate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update-options',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'][
            'update-options'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameKey() {
  return [
    'api',
    '/api/v1/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update/:request.input.name',
    'POST',
  ] as const
}

export function usePostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostApiV1NamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.v1.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.v1.namespaces[':namespace'].workflows[
            ':workflow_execution.workflow_id'
          ].update[':request.input.name'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NexusEndpointsKey(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
) {
  return ['api', '/api/v1/nexus/endpoints', args] as const
}

export function useGetApiV1NexusEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NexusEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nexus.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NexusEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.api.v1.nexus.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NexusEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nexus.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiV1NexusEndpointsKey() {
  return ['api', '/api/v1/nexus/endpoints', 'POST'] as const
}

export function usePostApiV1NexusEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.v1.nexus.endpoints.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.v1.nexus.endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NexusEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.v1.nexus.endpoints.$post> },
      ) => parseResponse(client.api.v1.nexus.endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1NexusEndpointsIdKey(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
) {
  return ['api', '/api/v1/nexus/endpoints/:id', args] as const
}

export function useGetApiV1NexusEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NexusEndpointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nexus.endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1NexusEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetApiV1NexusEndpointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.nexus.endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiV1NexusEndpointsIdKey() {
  return ['api', '/api/v1/nexus/endpoints/:id', 'DELETE'] as const
}

export function useDeleteApiV1NexusEndpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiV1NexusEndpointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['$delete']> },
      ) => parseResponse(client.api.v1.nexus.endpoints[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiV1NexusEndpointsIdUpdateKey() {
  return ['api', '/api/v1/nexus/endpoints/:id/update', 'POST'] as const
}

export function usePostApiV1NexusEndpointsIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiV1NexusEndpointsIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.v1.nexus.endpoints)[':id']['update']['$post']>
        },
      ) => parseResponse(client.api.v1.nexus.endpoints[':id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SystemInfoKey() {
  return ['api', '/api/v1/system-info'] as const
}

export function useGetApiV1SystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['system-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiV1SystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.v1)['system-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1['system-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClusterKey() {
  return ['cluster', '/cluster'] as const
}

export function useGetCluster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClusterKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCluster<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetClusterKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClusterNamespacesKey(
  args: InferRequestType<typeof client.cluster.namespaces.$get>,
) {
  return ['cluster', '/cluster/namespaces', args] as const
}

export function useGetClusterNamespaces<TError = unknown>(
  args: InferRequestType<typeof client.cluster.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterNamespaces<TError = unknown>(
  args: InferRequestType<typeof client.cluster.namespaces.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNamespacesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.namespaces.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClusterNamespacesKey() {
  return ['cluster', '/cluster/namespaces', 'POST'] as const
}

export function usePostClusterNamespaces<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cluster.namespaces.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.cluster.namespaces.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterNamespacesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cluster.namespaces.$post> }) =>
        parseResponse(client.cluster.namespaces.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClusterNamespacesNamespaceKey(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
) {
  return ['cluster', '/cluster/namespaces/:namespace', args] as const
}

export function useGetClusterNamespacesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNamespacesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.namespaces[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterNamespacesNamespace<TError = unknown>(
  args: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNamespacesNamespaceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.namespaces[':namespace'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetClusterNamespacesNamespaceSearchAttributesKey(
  args: InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
) {
  return ['cluster', '/cluster/namespaces/:namespace/search-attributes', args] as const
}

export function useGetClusterNamespacesNamespaceSearchAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNamespacesNamespaceSearchAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cluster.namespaces[':namespace']['search-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterNamespacesNamespaceSearchAttributes<TError = unknown>(
  args: InferRequestType<
    (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNamespacesNamespaceSearchAttributesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.cluster.namespaces)[':namespace']['search-attributes']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.cluster.namespaces[':namespace']['search-attributes'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostClusterNamespacesNamespaceUpdateKey() {
  return ['cluster', '/cluster/namespaces/:namespace/update', 'POST'] as const
}

export function usePostClusterNamespacesNamespaceUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterNamespacesNamespaceUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cluster.namespaces)[':namespace']['update']['$post']>
        },
      ) => parseResponse(client.cluster.namespaces[':namespace'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClusterNexusEndpointsKey(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
) {
  return ['cluster', '/cluster/nexus/endpoints', args] as const
}

export function useGetClusterNexusEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNexusEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.nexus.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterNexusEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.cluster.nexus.endpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNexusEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.nexus.endpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostClusterNexusEndpointsKey() {
  return ['cluster', '/cluster/nexus/endpoints', 'POST'] as const
}

export function usePostClusterNexusEndpoints<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.cluster.nexus.endpoints.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.cluster.nexus.endpoints.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterNexusEndpointsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.cluster.nexus.endpoints.$post> },
      ) => parseResponse(client.cluster.nexus.endpoints.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetClusterNexusEndpointsIdKey(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
) {
  return ['cluster', '/cluster/nexus/endpoints/:id', args] as const
}

export function useGetClusterNexusEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNexusEndpointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.nexus.endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClusterNexusEndpointsId<TError = unknown>(
  args: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetClusterNexusEndpointsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cluster.nexus.endpoints[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteClusterNexusEndpointsIdKey() {
  return ['cluster', '/cluster/nexus/endpoints/:id', 'DELETE'] as const
}

export function useDeleteClusterNexusEndpointsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteClusterNexusEndpointsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['$delete']> },
      ) => parseResponse(client.cluster.nexus.endpoints[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostClusterNexusEndpointsIdUpdateKey() {
  return ['cluster', '/cluster/nexus/endpoints/:id/update', 'POST'] as const
}

export function usePostClusterNexusEndpointsIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostClusterNexusEndpointsIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.cluster.nexus.endpoints)[':id']['update']['$post']>
        },
      ) => parseResponse(client.cluster.nexus.endpoints[':id'].update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceActivitiesKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/activities', args] as const
}

export function useGetNamespacesNamespaceActivities<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceActivities<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activities']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activities']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].activities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesDeprecatedPauseKey() {
  return ['namespaces', '/namespaces/:namespace/activities-deprecated/pause', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesDeprecatedPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesDeprecatedPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities-deprecated']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activities-deprecated'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesDeprecatedResetKey() {
  return ['namespaces', '/namespaces/:namespace/activities-deprecated/reset', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesDeprecatedReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesDeprecatedResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities-deprecated']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activities-deprecated'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesDeprecatedUnpauseKey() {
  return ['namespaces', '/namespaces/:namespace/activities-deprecated/unpause', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesDeprecatedUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesDeprecatedUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities-deprecated']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activities-deprecated'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesDeprecatedUpdateOptionsKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/activities-deprecated/update-options',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceActivitiesDeprecatedUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesDeprecatedUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities-deprecated']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activities-deprecated']['update-options'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceActivitiesActivityIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId', args] as const
}

export function useGetNamespacesNamespaceActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivitiesActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceActivitiesActivityId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivitiesActivityIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdCancelKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/cancel', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdCompleteKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/complete', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].complete.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdFailKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/fail', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].fail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdHeartbeatKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/heartbeat', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdHeartbeat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].heartbeat.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceActivitiesActivityIdOutcomeKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/outcome', args] as const
}

export function useGetNamespacesNamespaceActivitiesActivityIdOutcome<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivitiesActivityIdOutcomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].outcome.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceActivitiesActivityIdOutcome<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivitiesActivityIdOutcomeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['activities'][':activityId']['outcome']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].outcome.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdPauseKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/pause', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdResetKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/reset', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceledKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdResolveAsCanceled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdResolveAsCanceledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['resolve-as-canceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId']['resolve-as-canceled'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdTerminateKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/terminate', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdTerminate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].terminate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdUnpauseKey() {
  return ['namespaces', '/namespaces/:namespace/activities/:activityId/unpause', 'POST'] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivitiesActivityIdUpdateOptionsKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceActivitiesActivityIdUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivitiesActivityIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activities'][':activityId']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].activities[':activityId']['update-options'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivityCompleteKey() {
  return ['namespaces', '/namespaces/:namespace/activity-complete', 'POST'] as const
}

export function usePostNamespacesNamespaceActivityComplete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['activity-complete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivityCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activity-complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activity-complete'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceActivityCountKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/activity-count', args] as const
}

export function useGetNamespacesNamespaceActivityCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivityCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['activity-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceActivityCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceActivityCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['activity-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivityFailKey() {
  return ['namespaces', '/namespaces/:namespace/activity-fail', 'POST'] as const
}

export function usePostNamespacesNamespaceActivityFail<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivityFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.namespaces)[':namespace']['activity-fail']['$post']>
        },
      ) =>
        parseResponse(client.namespaces[':namespace']['activity-fail'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivityHeartbeatKey() {
  return ['namespaces', '/namespaces/:namespace/activity-heartbeat', 'POST'] as const
}

export function usePostNamespacesNamespaceActivityHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivityHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activity-heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activity-heartbeat'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceActivityResolveAsCanceledKey() {
  return ['namespaces', '/namespaces/:namespace/activity-resolve-as-canceled', 'POST'] as const
}

export function usePostNamespacesNamespaceActivityResolveAsCanceled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceActivityResolveAsCanceledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['activity-resolve-as-canceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['activity-resolve-as-canceled'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceArchivedWorkflowsKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/archived-workflows', args] as const
}

export function useGetNamespacesNamespaceArchivedWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceArchivedWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['archived-workflows'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceArchivedWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceArchivedWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['archived-workflows']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['archived-workflows'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceBatchOperationsKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/batch-operations', args] as const
}

export function useGetNamespacesNamespaceBatchOperations<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceBatchOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['batch-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceBatchOperations<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceBatchOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['batch-operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['batch-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceBatchOperationsJobIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/batch-operations/:jobId', args] as const
}

export function useGetNamespacesNamespaceBatchOperationsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceBatchOperationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['batch-operations'][':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceBatchOperationsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceBatchOperationsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['batch-operations'][':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceBatchOperationsJobIdKey() {
  return ['namespaces', '/namespaces/:namespace/batch-operations/:jobId', 'POST'] as const
}

export function usePostNamespacesNamespaceBatchOperationsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceBatchOperationsJobIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['batch-operations'][':jobId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceBatchOperationsJobIdStopKey() {
  return ['namespaces', '/namespaces/:namespace/batch-operations/:jobId/stop', 'POST'] as const
}

export function usePostNamespacesNamespaceBatchOperationsJobIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceBatchOperationsJobIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['batch-operations'][':jobId']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['batch-operations'][':jobId'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/current-deployment/:deployment.series_name',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceCurrentDeploymentDeploymentSeriesName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceCurrentDeploymentDeploymentSeriesNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['current-deployment'][':deployment.series_name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['current-deployment'][':deployment.series_name'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceCurrentDeploymentSeriesNameKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/current-deployment/:seriesName', args] as const
}

export function useGetNamespacesNamespaceCurrentDeploymentSeriesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceCurrentDeploymentSeriesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['current-deployment'][':seriesName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceCurrentDeploymentSeriesName<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceCurrentDeploymentSeriesNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['current-deployment'][':seriesName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['current-deployment'][':seriesName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceDeploymentsKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/deployments', args] as const
}

export function useGetNamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id',
    args,
  ] as const
}

export function useGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/deployments/:deployment.series_name/:deployment.build_id/reachability',
    args,
  ] as const
}

export function useGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].reachability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachability<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceDeploymentsDeploymentSeriesNameDeploymentBuildIdReachabilityKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['deployments'][':deployment.series_name'][':deployment.build_id']['reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].deployments[':deployment.series_name'][
            ':deployment.build_id'
          ].reachability.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceNexusOperationCountKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operation-count', args] as const
}

export function useGetNamespacesNamespaceNexusOperationCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operation-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceNexusOperationCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operation-count']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operation-count'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceNexusOperationsKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operations', args] as const
}

export function useGetNamespacesNamespaceNexusOperations<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceNexusOperations<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['nexus-operations']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceNexusOperationsOperationIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operations/:operationId', args] as const
}

export function useGetNamespacesNamespaceNexusOperationsOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceNexusOperationsOperationId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationsOperationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdKey() {
  return ['namespaces', '/namespaces/:namespace/nexus-operations/:operationId', 'POST'] as const
}

export function usePostNamespacesNamespaceNexusOperationsOperationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceNexusOperationsOperationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdCancelKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/nexus-operations/:operationId/cancel',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceNexusOperationsOperationIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceNexusOperationsOperationIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceNexusOperationsOperationIdPollKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/nexus-operations/:operationId/poll', args] as const
}

export function useGetNamespacesNamespaceNexusOperationsOperationIdPoll<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationsOperationIdPollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceNexusOperationsOperationIdPoll<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceNexusOperationsOperationIdPollKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['poll']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].poll.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceNexusOperationsOperationIdTerminateKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/nexus-operations/:operationId/terminate',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceNexusOperationsOperationIdTerminate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceNexusOperationsOperationIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['nexus-operations'][':operationId']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['nexus-operations'][':operationId'].terminate.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceScheduleCountKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/schedule-count', args] as const
}

export function useGetNamespacesNamespaceScheduleCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceScheduleCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['schedule-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceScheduleCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceScheduleCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedule-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['schedule-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceSchedulesKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/schedules', args] as const
}

export function useGetNamespacesNamespaceSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceSchedules<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['schedules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceSchedulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['schedules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].schedules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceSchedulesScheduleIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId', args] as const
}

export function useGetNamespacesNamespaceSchedulesScheduleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceSchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceSchedulesScheduleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceSchedulesScheduleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceSchedulesScheduleIdKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId', 'POST'] as const
}

export function usePostNamespacesNamespaceSchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceSchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNamespacesNamespaceSchedulesScheduleIdKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId', 'DELETE'] as const
}

export function useDeleteNamespacesNamespaceSchedulesScheduleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNamespacesNamespaceSchedulesScheduleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceSchedulesScheduleIdMatchingTimesKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/schedules/:scheduleId/matching-times',
    args,
  ] as const
}

export function useGetNamespacesNamespaceSchedulesScheduleIdMatchingTimes<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceSchedulesScheduleIdMatchingTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceSchedulesScheduleIdMatchingTimes<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceSchedulesScheduleIdMatchingTimesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['matching-times']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId']['matching-times'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceSchedulesScheduleIdPatchKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId/patch', 'POST'] as const
}

export function usePostNamespacesNamespaceSchedulesScheduleIdPatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceSchedulesScheduleIdPatchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['patch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId'].patch.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceSchedulesScheduleIdUpdateKey() {
  return ['namespaces', '/namespaces/:namespace/schedules/:scheduleId/update', 'POST'] as const
}

export function usePostNamespacesNamespaceSchedulesScheduleIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceSchedulesScheduleIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['schedules'][':scheduleId']['update']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].schedules[':scheduleId'].update.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/task-queues/:taskQueue/update-config',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceTaskQueuesTaskQueueUpdateConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['update-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':taskQueue']['update-config'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/task-queues/:taskQueue/worker-build-id-compatibility',
    args,
  ] as const
}

export function useGetNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-build-id-compatibility'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibility<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceTaskQueuesTaskQueueWorkerBuildIdCompatibilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-build-id-compatibility']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-build-id-compatibility'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/task-queues/:taskQueue/worker-versioning-rules',
    args,
  ] as const
}

export function useGetNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-versioning-rules'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRules<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceTaskQueuesTaskQueueWorkerVersioningRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':taskQueue']['worker-versioning-rules']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':taskQueue'][
            'worker-versioning-rules'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceTaskQueuesTaskQueueNameKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/task-queues/:task_queue.name', args] as const
}

export function useGetNamespacesNamespaceTaskQueuesTaskQueueName<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceTaskQueuesTaskQueueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceTaskQueuesTaskQueueName<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceTaskQueuesTaskQueueNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['task-queues'][':task_queue.name']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['task-queues'][':task_queue.name'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    args,
  ] as const
}

export function useGetNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id',
    'DELETE',
  ] as const
}

export function useDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getDeleteNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-compute-config',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateComputeConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-compute-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id']['update-compute-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/update-metadata',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdUpdateMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['update-metadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id']['update-metadata'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployment-versions/:deployment_version.deployment_name/:deployment_version.build_id/validate-compute-config',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostNamespacesNamespaceWorkerDeploymentVersionsDeploymentVersionDeploymentNameDeploymentVersionBuildIdValidateComputeConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployment-versions'][':deployment_version.deployment_name'][':deployment_version.build_id']['validate-compute-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployment-versions'][
            ':deployment_version.deployment_name'
          ][':deployment_version.build_id']['validate-compute-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkerDeploymentsKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/worker-deployments', args] as const
}

export function useGetNamespacesNamespaceWorkerDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkerDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.namespaces)[':namespace']['worker-deployments']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkerDeploymentsDeploymentNameKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/worker-deployments/:deploymentName', args] as const
}

export function useGetNamespacesNamespaceWorkerDeploymentsDeploymentName<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerDeploymentsDeploymentNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkerDeploymentsDeploymentName<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerDeploymentsDeploymentNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentsDeploymentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteNamespacesNamespaceWorkerDeploymentsDeploymentNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName',
    'DELETE',
  ] as const
}

export function useDeleteNamespacesNamespaceWorkerDeploymentsDeploymentName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNamespacesNamespaceWorkerDeploymentsDeploymentNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-current-version',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetCurrentVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-current-version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
            'set-current-version'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-manager',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManager<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetManagerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-manager']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
            'set-manager'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/worker-deployments/:deploymentName/set-ramping-version',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkerDeploymentsDeploymentNameSetRampingVersionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['worker-deployments'][':deploymentName']['set-ramping-version']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['worker-deployments'][':deploymentName'][
            'set-ramping-version'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkerTaskReachabilityKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/worker-task-reachability', args] as const
}

export function useGetNamespacesNamespaceWorkerTaskReachability<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerTaskReachabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-task-reachability'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkerTaskReachability<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkerTaskReachabilityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['worker-task-reachability']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['worker-task-reachability'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkersKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workers', args] as const
}

export function useGetNamespacesNamespaceWorkers<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.namespaces[':namespace'].workers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkers<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.namespaces[':namespace'].workers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkersDescribeWorkerInstanceKeyKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/workers/describe/:workerInstanceKey', args] as const
}

export function useGetNamespacesNamespaceWorkersDescribeWorkerInstanceKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkersDescribeWorkerInstanceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkersDescribeWorkerInstanceKey<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkersDescribeWorkerInstanceKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workers']['describe'][':workerInstanceKey']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workers.describe[':workerInstanceKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkersFetchConfigKey() {
  return ['namespaces', '/namespaces/:namespace/workers/fetch-config', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkersFetchConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkersFetchConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workers']['fetch-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workers['fetch-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkersHeartbeatKey() {
  return ['namespaces', '/namespaces/:namespace/workers/heartbeat', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkersHeartbeat<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkersHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workers']['heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(client.namespaces[':namespace'].workers.heartbeat.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkersUpdateConfigKey() {
  return ['namespaces', '/namespaces/:namespace/workers/update-config', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkersUpdateConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['workers']['update-config']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkersUpdateConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workers']['update-config']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workers['update-config'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowCountKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workflow-count', args] as const
}

export function useGetNamespacesNamespaceWorkflowCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['workflow-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflowCount<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowCountKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-count']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['workflow-count'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowRulesKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workflow-rules', args] as const
}

export function useGetNamespacesNamespaceWorkflowRules<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['workflow-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflowRules<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowRulesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace']['workflow-rules'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowRulesKey() {
  return ['namespaces', '/namespaces/:namespace/workflow-rules', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkflowRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkflowRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.namespaces)[':namespace']['workflow-rules']['$post']>
        },
      ) =>
        parseResponse(client.namespaces[':namespace']['workflow-rules'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowRulesRuleIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/workflow-rules/:ruleId', args] as const
}

export function useGetNamespacesNamespaceWorkflowRulesRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflowRulesRuleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace']['workflow-rules'][':ruleId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteNamespacesNamespaceWorkflowRulesRuleIdKey() {
  return ['namespaces', '/namespaces/:namespace/workflow-rules/:ruleId', 'DELETE'] as const
}

export function useDeleteNamespacesNamespaceWorkflowRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteNamespacesNamespaceWorkflowRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflow-rules'][':ruleId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace']['workflow-rules'][':ruleId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowsKey(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
) {
  return ['namespaces', '/namespaces/:namespace/workflows', args] as const
}

export function useGetNamespacesNamespaceWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflows<TError = unknown>(
  args: InferRequestType<(typeof client.namespaces)[':namespace']['workflows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.namespaces)[':namespace']['workflows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.namespaces[':namespace'].workflows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
) {
  return ['namespaces', '/namespaces/:namespace/workflows/:execution.workflow_id', args] as const
}

export function useGetNamespacesNamespaceWorkflowsExecutionWorkflowId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflowsExecutionWorkflowId<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/history',
    args,
  ] as const
}

export function useGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistory<TError = unknown>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistory<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'].history.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseKey(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
) {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/history-reverse',
    args,
  ] as const
}

export function useGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'][
            'history-reverse'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverse<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetNamespacesNamespaceWorkflowsExecutionWorkflowIdHistoryReverseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['history-reverse']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'][
            'history-reverse'
          ].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/query/:query.query_type',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdQueryQueryQueryTypeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['query'][':query.query_type']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id'].query[
            ':query.query_type'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:execution.workflow_id/trigger-rule',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRule<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkflowsExecutionWorkflowIdTriggerRuleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':execution.workflow_id']['trigger-rule']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':execution.workflow_id']['trigger-rule'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdKey() {
  return ['namespaces', '/namespaces/:namespace/workflows/:workflowId', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/complete',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdComplete<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdCompleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['complete']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].complete.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/fail',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFail<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdFailKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['fail']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].fail.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/heartbeat',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeat<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdHeartbeatKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['heartbeat']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].heartbeat.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/pause',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/reset',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/resolve-as-canceled',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceled<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdResolveAsCanceledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['resolve-as-canceled']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
            'resolve-as-canceled'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/unpause',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpause<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[
            ':activityId'
          ].unpause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/activities/:activityId/update-options',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdActivitiesActivityIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['activities'][':activityId']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].activities[':activityId'][
            'update-options'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdPauseKey() {
  return ['namespaces', '/namespaces/:namespace/workflows/:workflowId/pause', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['pause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].pause.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflowId/signal-with-start/:signalName',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdSignalWithStartSignalNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['signal-with-start'][':signalName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId']['signal-with-start'][
            ':signalName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowIdUnpauseKey() {
  return ['namespaces', '/namespaces/:namespace/workflows/:workflowId/unpause', 'POST'] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowIdUnpause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowIdUnpauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflowId']['unpause']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflowId'].unpause.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/cancel',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].cancel.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/reset',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdReset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].reset.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/signal/:signalName',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdSignalSignalNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['signal'][':signalName']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].signal[
            ':signalName'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/terminate',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdTerminateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['terminate']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[
            ':workflow_execution.workflow_id'
          ].terminate.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update-options',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update-options']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'][
            'update-options'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameKey() {
  return [
    'namespaces',
    '/namespaces/:namespace/workflows/:workflow_execution.workflow_id/update/:request.input.name',
    'POST',
  ] as const
}

export function usePostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputName<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostNamespacesNamespaceWorkflowsWorkflowExecutionWorkflowIdUpdateRequestInputNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.namespaces)[':namespace']['workflows'][':workflow_execution.workflow_id']['update'][':request.input.name']['$post']
          >
        },
      ) =>
        parseResponse(
          client.namespaces[':namespace'].workflows[':workflow_execution.workflow_id'].update[
            ':request.input.name'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSystemInfoKey() {
  return ['system-info', '/system-info'] as const
}

export function useGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['system-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemInfoKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['system-info']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['system-info'].$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}
