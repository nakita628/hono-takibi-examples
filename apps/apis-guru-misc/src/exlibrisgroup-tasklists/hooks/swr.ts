import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlmawsKey() {
  return ['almaws'] as const
}

export function getGetAlmawsV1TaskListsPrintoutsKey(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
) {
  return ['almaws', '/almaws/v1/task-lists/printouts', args] as const
}

export function useGetAlmawsV1TaskListsPrintouts<TError = unknown>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
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
        ? getGetAlmawsV1TaskListsPrintoutsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.almaws.v1['task-lists'].printouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlmawsV1TaskListsPrintouts<TError = unknown>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
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
        ? getGetAlmawsV1TaskListsPrintoutsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.almaws.v1['task-lists'].printouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAlmawsV1TaskListsPrintoutsKey() {
  return ['almaws', '/almaws/v1/task-lists/printouts', 'POST'] as const
}

export function usePostAlmawsV1TaskListsPrintouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlmawsV1TaskListsPrintoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']> },
      ) => parseResponse(client.almaws.v1['task-lists'].printouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAlmawsV1TaskListsPrintoutsPrintoutIdKey(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
) {
  return ['almaws', '/almaws/v1/task-lists/printouts/:printout_id', args] as const
}

export function useGetAlmawsV1TaskListsPrintoutsPrintoutId<TError = unknown>(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
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
        ? getGetAlmawsV1TaskListsPrintoutsPrintoutIdKey(args)
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
                (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
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
          client.almaws.v1['task-lists'].printouts[':printout_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlmawsV1TaskListsPrintoutsPrintoutId<TError = unknown>(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
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
        ? getGetAlmawsV1TaskListsPrintoutsPrintoutIdKey(args)
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
                (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
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
          client.almaws.v1['task-lists'].printouts[':printout_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAlmawsV1TaskListsPrintoutsPrintoutIdKey() {
  return ['almaws', '/almaws/v1/task-lists/printouts/:printout_id', 'POST'] as const
}

export function usePostAlmawsV1TaskListsPrintoutsPrintoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlmawsV1TaskListsPrintoutsPrintoutIdKey()
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
            (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.almaws.v1['task-lists'].printouts[':printout_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAlmawsV1TaskListsRequestedResourcesKey(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>,
) {
  return ['almaws', '/almaws/v1/task-lists/requested-resources', args] as const
}

export function useGetAlmawsV1TaskListsRequestedResources<TError = unknown>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
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
        ? getGetAlmawsV1TaskListsRequestedResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.almaws.v1['task-lists']['requested-resources'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlmawsV1TaskListsRequestedResources<TError = unknown>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
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
        ? getGetAlmawsV1TaskListsRequestedResourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.almaws.v1['task-lists']['requested-resources'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAlmawsV1TaskListsRequestedResourcesKey() {
  return ['almaws', '/almaws/v1/task-lists/requested-resources', 'POST'] as const
}

export function usePostAlmawsV1TaskListsRequestedResources<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlmawsV1TaskListsRequestedResourcesKey()
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
            (typeof client.almaws.v1)['task-lists']['requested-resources']['$post']
          >
        },
      ) =>
        parseResponse(
          client.almaws.v1['task-lists']['requested-resources'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAlmawsV1TaskListsRsLendingRequestsKey(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>,
) {
  return ['almaws', '/almaws/v1/task-lists/rs/lending-requests', args] as const
}

export function useGetAlmawsV1TaskListsRsLendingRequests<TError = unknown>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
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
        ? getGetAlmawsV1TaskListsRsLendingRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.almaws.v1['task-lists'].rs['lending-requests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlmawsV1TaskListsRsLendingRequests<TError = unknown>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
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
        ? getGetAlmawsV1TaskListsRsLendingRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.almaws.v1['task-lists'].rs['lending-requests'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAlmawsV1TaskListsRsLendingRequestsKey() {
  return ['almaws', '/almaws/v1/task-lists/rs/lending-requests', 'POST'] as const
}

export function usePostAlmawsV1TaskListsRsLendingRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlmawsV1TaskListsRsLendingRequestsKey()
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
            (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']
          >
        },
      ) =>
        parseResponse(
          client.almaws.v1['task-lists'].rs['lending-requests'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAlmawsV1TaskListsTestKey() {
  return ['almaws', '/almaws/v1/task-lists/test'] as const
}

export function useGetAlmawsV1TaskListsTest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlmawsV1TaskListsTestKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.almaws.v1['task-lists'].test.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAlmawsV1TaskListsTest<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAlmawsV1TaskListsTestKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.almaws.v1['task-lists'].test.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAlmawsV1TaskListsTestKey() {
  return ['almaws', '/almaws/v1/task-lists/test', 'POST'] as const
}

export function usePostAlmawsV1TaskListsTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$post']>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAlmawsV1TaskListsTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.almaws.v1['task-lists'].test.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}
