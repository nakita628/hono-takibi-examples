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

export function getGetApiAccountCollectionFlowsKey(
  args: InferRequestType<typeof client.api.account_collection_flows.$get>,
) {
  return ['api', '/api/account_collection_flows', args] as const
}

export function useGetApiAccountCollectionFlows<TError = unknown>(
  args: InferRequestType<typeof client.api.account_collection_flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
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
        ? getGetApiAccountCollectionFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account_collection_flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountCollectionFlows<TError = unknown>(
  args: InferRequestType<typeof client.api.account_collection_flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
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
        ? getGetApiAccountCollectionFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.account_collection_flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiAccountCollectionFlowsKey() {
  return ['api', '/api/account_collection_flows', 'POST'] as const
}

export function usePostApiAccountCollectionFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.account_collection_flows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAccountCollectionFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.account_collection_flows.$post> },
      ) => parseResponse(client.api.account_collection_flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountCollectionFlowsIdKey(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/account_collection_flows/:id', keyArgs] as const
}

export function useGetApiAccountCollectionFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
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
        ? getGetApiAccountCollectionFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.account_collection_flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountCollectionFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
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
        ? getGetApiAccountCollectionFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.account_collection_flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiAccountCollectionFlowsIdKey() {
  return ['api', '/api/account_collection_flows/:id', 'PATCH'] as const
}

export function usePatchApiAccountCollectionFlowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiAccountCollectionFlowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']> },
      ) => parseResponse(client.api.account_collection_flows[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBulkRequestsKey(
  args: InferRequestType<typeof client.api.bulk_requests.$get>,
) {
  return ['api', '/api/bulk_requests', args] as const
}

export function useGetApiBulkRequests<TError = unknown>(
  args: InferRequestType<typeof client.api.bulk_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
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
        ? getGetApiBulkRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkRequests<TError = unknown>(
  args: InferRequestType<typeof client.api.bulk_requests.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
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
        ? getGetApiBulkRequestsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_requests.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiBulkRequestsKey() {
  return ['api', '/api/bulk_requests', 'POST'] as const
}

export function usePostApiBulkRequests<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.bulk_requests.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiBulkRequestsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.bulk_requests.$post> }) =>
        parseResponse(client.api.bulk_requests.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiBulkRequestsIdKey(
  args: InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
) {
  return ['api', '/api/bulk_requests/:id', args] as const
}

export function useGetApiBulkRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
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
        ? getGetApiBulkRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkRequestsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
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
        ? getGetApiBulkRequestsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_requests[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBulkResultsKey(
  args: InferRequestType<typeof client.api.bulk_results.$get>,
) {
  return ['api', '/api/bulk_results', args] as const
}

export function useGetApiBulkResults<TError = unknown>(
  args: InferRequestType<typeof client.api.bulk_results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBulkResultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkResults<TError = unknown>(
  args: InferRequestType<typeof client.api.bulk_results.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiBulkResultsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiBulkResultsIdKey(
  args: InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
) {
  return ['api', '/api/bulk_results/:id', args] as const
}

export function useGetApiBulkResultsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
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
        ? getGetApiBulkResultsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_results[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiBulkResultsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
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
        ? getGetApiBulkResultsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.bulk_results[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCasesKey(args: InferRequestType<typeof client.api.cases.$get>) {
  return ['api', '/api/cases', args] as const
}

export function useGetApiCases<TError = unknown>(
  args: InferRequestType<typeof client.api.cases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCases<TError = unknown>(
  args: InferRequestType<typeof client.api.cases.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCasesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCasesIdKey(
  args: InferRequestType<(typeof client.api.cases)[':id']['$get']>,
) {
  return ['api', '/api/cases/:id', args] as const
}

export function useGetApiCasesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cases)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiCasesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCasesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.cases)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiCasesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.cases[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiConnectionLegalEntitiesKey(
  args: InferRequestType<typeof client.api.connection_legal_entities.$get>,
) {
  return ['api', '/api/connection_legal_entities', args] as const
}

export function useGetApiConnectionLegalEntities<TError = unknown>(
  args: InferRequestType<typeof client.api.connection_legal_entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
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
        ? getGetApiConnectionLegalEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connection_legal_entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConnectionLegalEntities<TError = unknown>(
  args: InferRequestType<typeof client.api.connection_legal_entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
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
        ? getGetApiConnectionLegalEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connection_legal_entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiConnectionLegalEntitiesKey() {
  return ['api', '/api/connection_legal_entities', 'POST'] as const
}

export function usePostApiConnectionLegalEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.connection_legal_entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiConnectionLegalEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.connection_legal_entities.$post> },
      ) => parseResponse(client.api.connection_legal_entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConnectionLegalEntitiesIdKey(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/connection_legal_entities/:id', keyArgs] as const
}

export function useGetApiConnectionLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
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
        ? getGetApiConnectionLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.connection_legal_entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConnectionLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
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
        ? getGetApiConnectionLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.connection_legal_entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiConnectionLegalEntitiesIdKey() {
  return ['api', '/api/connection_legal_entities/:id', 'PATCH'] as const
}

export function usePatchApiConnectionLegalEntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiConnectionLegalEntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>
        },
      ) => parseResponse(client.api.connection_legal_entities[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiConnectionsKey(
  args: InferRequestType<typeof client.api.connections.$get>,
) {
  return ['api', '/api/connections', args] as const
}

export function useGetApiConnections<TError = unknown>(
  args: InferRequestType<typeof client.api.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiConnections<TError = unknown>(
  args: InferRequestType<typeof client.api.connections.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiConnectionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCounterpartiesKey(
  args: InferRequestType<typeof client.api.counterparties.$get>,
) {
  return ['api', '/api/counterparties', args] as const
}

export function useGetApiCounterparties<TError = unknown>(
  args: InferRequestType<typeof client.api.counterparties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
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
        ? getGetApiCounterpartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.counterparties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCounterparties<TError = unknown>(
  args: InferRequestType<typeof client.api.counterparties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
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
        ? getGetApiCounterpartiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.counterparties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCounterpartiesKey() {
  return ['api', '/api/counterparties', 'POST'] as const
}

export function usePostApiCounterparties<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.counterparties.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCounterpartiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.counterparties.$post> }) =>
        parseResponse(client.api.counterparties.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCounterpartiesIdKey(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
) {
  return ['api', '/api/counterparties/:id', args] as const
}

export function useGetApiCounterpartiesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
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
        ? getGetApiCounterpartiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.counterparties[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCounterpartiesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
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
        ? getGetApiCounterpartiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.counterparties[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCounterpartiesIdKey() {
  return ['api', '/api/counterparties/:id', 'DELETE'] as const
}

export function useDeleteApiCounterpartiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCounterpartiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.counterparties)[':id']['$delete']> },
      ) => parseResponse(client.api.counterparties[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCounterpartiesIdKey() {
  return ['api', '/api/counterparties/:id', 'PATCH'] as const
}

export function usePatchApiCounterpartiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCounterpartiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.counterparties)[':id']['$patch']> },
      ) => parseResponse(client.api.counterparties[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiCounterpartiesIdCollectAccountKey() {
  return ['api', '/api/counterparties/:id/collect_account', 'POST'] as const
}

export function usePostApiCounterpartiesIdCollectAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCounterpartiesIdCollectAccountKey()
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
            (typeof client.api.counterparties)[':id']['collect_account']['$post']
          >
        },
      ) =>
        parseResponse(client.api.counterparties[':id'].collect_account.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDocumentsKey(args: InferRequestType<typeof client.api.documents.$get>) {
  return ['api', '/api/documents', args] as const
}

export function useGetApiDocuments<TError = unknown>(
  args: InferRequestType<typeof client.api.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocuments<TError = unknown>(
  args: InferRequestType<typeof client.api.documents.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDocumentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.documents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiDocumentsKey() {
  return ['api', '/api/documents', 'POST'] as const
}

export function usePostApiDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.documents.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.documents.$post> }) =>
        parseResponse(client.api.documents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiDocumentsIdKey(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
) {
  return ['api', '/api/documents/:id', args] as const
}

export function useGetApiDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocumentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiDocumentsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.documents[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDocumentsIdDownloadKey(
  args: InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
) {
  return ['api', '/api/documents/:id/download', args] as const
}

export function useGetApiDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
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
        ? getGetApiDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.documents[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
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
        ? getGetApiDocumentsIdDownloadKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.documents[':id'].download.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiEmbeddableFlowsKey(
  args: InferRequestType<typeof client.api.embeddable_flows.$get>,
) {
  return ['api', '/api/embeddable_flows', args] as const
}

export function useGetApiEmbeddableFlows<TError = unknown>(
  args: InferRequestType<typeof client.api.embeddable_flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
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
        ? getGetApiEmbeddableFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.embeddable_flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEmbeddableFlows<TError = unknown>(
  args: InferRequestType<typeof client.api.embeddable_flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
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
        ? getGetApiEmbeddableFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.embeddable_flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiEmbeddableFlowsKey() {
  return ['api', '/api/embeddable_flows', 'POST'] as const
}

export function usePostApiEmbeddableFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.embeddable_flows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiEmbeddableFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.embeddable_flows.$post> },
      ) => parseResponse(client.api.embeddable_flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEmbeddableFlowsIdKey(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/embeddable_flows/:id', keyArgs] as const
}

export function useGetApiEmbeddableFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
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
        ? getGetApiEmbeddableFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.embeddable_flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEmbeddableFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
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
        ? getGetApiEmbeddableFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.embeddable_flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiEmbeddableFlowsIdKey() {
  return ['api', '/api/embeddable_flows/:id', 'PATCH'] as const
}

export function usePatchApiEmbeddableFlowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiEmbeddableFlowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']> },
      ) => parseResponse(client.api.embeddable_flows[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiEventsKey(args: InferRequestType<typeof client.api.events.$get>) {
  return ['api', '/api/events', args] as const
}

export function useGetApiEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEvents<TError = unknown>(
  args: InferRequestType<typeof client.api.events.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiEventsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.events.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiEventsIdKey(
  args: InferRequestType<(typeof client.api.events)[':id']['$get']>,
) {
  return ['api', '/api/events/:id', args] as const
}

export function useGetApiEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiEventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiEventsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.events)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiEventsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.events[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiExpectedPaymentsKey(
  args: InferRequestType<typeof client.api.expected_payments.$get>,
) {
  return ['api', '/api/expected_payments', args] as const
}

export function useGetApiExpectedPayments<TError = unknown>(
  args: InferRequestType<typeof client.api.expected_payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
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
        ? getGetApiExpectedPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.expected_payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExpectedPayments<TError = unknown>(
  args: InferRequestType<typeof client.api.expected_payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
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
        ? getGetApiExpectedPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.expected_payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiExpectedPaymentsKey() {
  return ['api', '/api/expected_payments', 'POST'] as const
}

export function usePostApiExpectedPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.expected_payments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExpectedPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.expected_payments.$post> },
      ) => parseResponse(client.api.expected_payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiExpectedPaymentsIdKey(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
) {
  return ['api', '/api/expected_payments/:id', args] as const
}

export function useGetApiExpectedPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
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
        ? getGetApiExpectedPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.expected_payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExpectedPaymentsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
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
        ? getGetApiExpectedPaymentsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.expected_payments[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiExpectedPaymentsIdKey() {
  return ['api', '/api/expected_payments/:id', 'DELETE'] as const
}

export function useDeleteApiExpectedPaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiExpectedPaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']> },
      ) => parseResponse(client.api.expected_payments[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiExpectedPaymentsIdKey() {
  return ['api', '/api/expected_payments/:id', 'PATCH'] as const
}

export function usePatchApiExpectedPaymentsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiExpectedPaymentsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']> },
      ) => parseResponse(client.api.expected_payments[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiExternalAccountsKey(
  args: InferRequestType<typeof client.api.external_accounts.$get>,
) {
  return ['api', '/api/external_accounts', args] as const
}

export function useGetApiExternalAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.external_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
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
        ? getGetApiExternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.external_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExternalAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.external_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
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
        ? getGetApiExternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.external_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiExternalAccountsKey() {
  return ['api', '/api/external_accounts', 'POST'] as const
}

export function usePostApiExternalAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.external_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.external_accounts.$post> },
      ) => parseResponse(client.api.external_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiExternalAccountsIdKey(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
) {
  return ['api', '/api/external_accounts/:id', args] as const
}

export function useGetApiExternalAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
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
        ? getGetApiExternalAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.external_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiExternalAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
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
        ? getGetApiExternalAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.external_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiExternalAccountsIdKey() {
  return ['api', '/api/external_accounts/:id', 'DELETE'] as const
}

export function useDeleteApiExternalAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiExternalAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']> },
      ) => parseResponse(client.api.external_accounts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiExternalAccountsIdKey() {
  return ['api', '/api/external_accounts/:id', 'PATCH'] as const
}

export function usePatchApiExternalAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiExternalAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']> },
      ) => parseResponse(client.api.external_accounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiExternalAccountsIdCompleteVerificationKey() {
  return ['api', '/api/external_accounts/:id/complete_verification', 'POST'] as const
}

export function usePostApiExternalAccountsIdCompleteVerification<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.external_accounts)[':id']['complete_verification']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalAccountsIdCompleteVerificationKey()
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
            (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.external_accounts[':id'].complete_verification.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiExternalAccountsIdVerifyKey() {
  return ['api', '/api/external_accounts/:id/verify', 'POST'] as const
}

export function usePostApiExternalAccountsIdVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiExternalAccountsIdVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>
        },
      ) => parseResponse(client.api.external_accounts[':id'].verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiForeignExchangeQuotesKey(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
) {
  return ['api', '/api/foreign_exchange_quotes', args] as const
}

export function useGetApiForeignExchangeQuotes<TError = unknown>(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
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
        ? getGetApiForeignExchangeQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.foreign_exchange_quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiForeignExchangeQuotes<TError = unknown>(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
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
        ? getGetApiForeignExchangeQuotesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.foreign_exchange_quotes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiForeignExchangeQuotesKey() {
  return ['api', '/api/foreign_exchange_quotes', 'POST'] as const
}

export function usePostApiForeignExchangeQuotes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.foreign_exchange_quotes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiForeignExchangeQuotesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.foreign_exchange_quotes.$post> },
      ) => parseResponse(client.api.foreign_exchange_quotes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiForeignExchangeQuotesIdKey(
  args: InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
) {
  return ['api', '/api/foreign_exchange_quotes/:id', args] as const
}

export function useGetApiForeignExchangeQuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
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
        ? getGetApiForeignExchangeQuotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.foreign_exchange_quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiForeignExchangeQuotesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
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
        ? getGetApiForeignExchangeQuotesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.foreign_exchange_quotes[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiHoldsKey(args: InferRequestType<typeof client.api.holds.$get>) {
  return ['api', '/api/holds', args] as const
}

export function useGetApiHolds<TError = unknown>(
  args: InferRequestType<typeof client.api.holds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHoldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.holds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiHolds<TError = unknown>(
  args: InferRequestType<typeof client.api.holds.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiHoldsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.holds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiHoldsKey() {
  return ['api', '/api/holds', 'POST'] as const
}

export function usePostApiHolds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.holds.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiHoldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.holds.$post> }) =>
        parseResponse(client.api.holds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiHoldsIdKey(
  args: InferRequestType<(typeof client.api.holds)[':id']['$get']>,
) {
  return ['api', '/api/holds/:id', args] as const
}

export function useGetApiHoldsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.holds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiHoldsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.holds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiHoldsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.holds)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiHoldsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.holds[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiHoldsIdKey() {
  return ['api', '/api/holds/:id', 'PATCH'] as const
}

export function usePatchApiHoldsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.holds)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiHoldsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.holds)[':id']['$patch']> },
      ) => parseResponse(client.api.holds[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiIdentificationsKey() {
  return ['api', '/api/identifications', 'POST'] as const
}

export function usePostApiIdentifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.identifications.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.identifications.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiIdentificationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.identifications.$post> }) =>
        parseResponse(client.api.identifications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIdentificationsIdKey(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
) {
  return ['api', '/api/identifications/:id', args] as const
}

export function useGetApiIdentificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
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
        ? getGetApiIdentificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.identifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIdentificationsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
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
        ? getGetApiIdentificationsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.identifications[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiIdentificationsIdKey() {
  return ['api', '/api/identifications/:id', 'PATCH'] as const
}

export function usePatchApiIdentificationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.identifications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.identifications)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiIdentificationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.identifications)[':id']['$patch']> },
      ) => parseResponse(client.api.identifications[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiIncomingPaymentDetailsKey(
  args: InferRequestType<typeof client.api.incoming_payment_details.$get>,
) {
  return ['api', '/api/incoming_payment_details', args] as const
}

export function useGetApiIncomingPaymentDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.incoming_payment_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
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
        ? getGetApiIncomingPaymentDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.incoming_payment_details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIncomingPaymentDetails<TError = unknown>(
  args: InferRequestType<typeof client.api.incoming_payment_details.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
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
        ? getGetApiIncomingPaymentDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.incoming_payment_details.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiIncomingPaymentDetailsIdKey(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
) {
  return ['api', '/api/incoming_payment_details/:id', args] as const
}

export function useGetApiIncomingPaymentDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
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
        ? getGetApiIncomingPaymentDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.incoming_payment_details[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiIncomingPaymentDetailsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
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
        ? getGetApiIncomingPaymentDetailsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.incoming_payment_details[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiIncomingPaymentDetailsIdKey() {
  return ['api', '/api/incoming_payment_details/:id', 'PATCH'] as const
}

export function usePatchApiIncomingPaymentDetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiIncomingPaymentDetailsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']> },
      ) => parseResponse(client.api.incoming_payment_details[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInternalAccountsKey(
  args: InferRequestType<typeof client.api.internal_accounts.$get>,
) {
  return ['api', '/api/internal_accounts', args] as const
}

export function useGetApiInternalAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.internal_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
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
        ? getGetApiInternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.internal_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInternalAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.internal_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
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
        ? getGetApiInternalAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.internal_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInternalAccountsKey() {
  return ['api', '/api/internal_accounts', 'POST'] as const
}

export function usePostApiInternalAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.internal_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInternalAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.internal_accounts.$post> },
      ) => parseResponse(client.api.internal_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInternalAccountsIdKey(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
) {
  return ['api', '/api/internal_accounts/:id', args] as const
}

export function useGetApiInternalAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
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
        ? getGetApiInternalAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.internal_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInternalAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
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
        ? getGetApiInternalAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.internal_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiInternalAccountsIdKey() {
  return ['api', '/api/internal_accounts/:id', 'PATCH'] as const
}

export function usePatchApiInternalAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiInternalAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']> },
      ) => parseResponse(client.api.internal_accounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiInternalAccountsIdRequestClosureKey() {
  return ['api', '/api/internal_accounts/:id/request_closure', 'POST'] as const
}

export function usePostApiInternalAccountsIdRequestClosure<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInternalAccountsIdRequestClosureKey()
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
            (typeof client.api.internal_accounts)[':id']['request_closure']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.internal_accounts[':id'].request_closure.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdKey() {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/account_capabilities/:id',
    'PATCH',
  ] as const
}

export function usePatchApiInternalAccountsInternalAccountIdAccountCapabilitiesId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdKey()
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
            (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.internal_accounts[':internal_account_id'].account_capabilities[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiInternalAccountsInternalAccountIdBalanceReportsKey(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
) {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports', args] as const
}

export function useGetApiInternalAccountsInternalAccountIdBalanceReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
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
        ? getGetApiInternalAccountsInternalAccountIdBalanceReportsKey(args)
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
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
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
          client.api.internal_accounts[':internal_account_id'].balance_reports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInternalAccountsInternalAccountIdBalanceReports<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
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
        ? getGetApiInternalAccountsInternalAccountIdBalanceReportsKey(args)
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
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
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
          client.api.internal_accounts[':internal_account_id'].balance_reports.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiInternalAccountsInternalAccountIdBalanceReportsKey() {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports', 'POST'] as const
}

export function usePostApiInternalAccountsInternalAccountIdBalanceReports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInternalAccountsInternalAccountIdBalanceReportsKey()
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
            (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.internal_accounts[':internal_account_id'].balance_reports.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiInternalAccountsInternalAccountIdBalanceReportsIdKey(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
) {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports/:id', args] as const
}

export function useGetApiInternalAccountsInternalAccountIdBalanceReportsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
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
        ? getGetApiInternalAccountsInternalAccountIdBalanceReportsIdKey(args)
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
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
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
          client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInternalAccountsInternalAccountIdBalanceReportsId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
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
        ? getGetApiInternalAccountsInternalAccountIdBalanceReportsIdKey(args)
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
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
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
          client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdKey() {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/balance_reports/:id',
    'DELETE',
  ] as const
}

export function useDeleteApiInternalAccountsInternalAccountIdBalanceReportsId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdKey()
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
            (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoicesKey(args: InferRequestType<typeof client.api.invoices.$get>) {
  return ['api', '/api/invoices', args] as const
}

export function useGetApiInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoices<TError = unknown>(
  args: InferRequestType<typeof client.api.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiInvoicesKey() {
  return ['api', '/api/invoices', 'POST'] as const
}

export function usePostApiInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.invoices.$post> }) =>
        parseResponse(client.api.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoicesIdKey(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
) {
  return ['api', '/api/invoices/:id', args] as const
}

export function useGetApiInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiInvoicesIdKey() {
  return ['api', '/api/invoices/:id', 'PATCH'] as const
}

export function usePatchApiInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.invoices)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.invoices)[':id']['$patch']> },
      ) => parseResponse(client.api.invoices[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiInvoicesIdPaymentOrdersPaymentOrderIdKey() {
  return ['api', '/api/invoices/:id/payment_orders/:payment_order_id', 'PUT'] as const
}

export function usePutApiInvoicesIdPaymentOrdersPaymentOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiInvoicesIdPaymentOrdersPaymentOrderIdKey()
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
            (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.invoices[':id'].payment_orders[':payment_order_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoicesInvoiceIdInvoiceLineItemsKey(
  args: InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>,
) {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items', args] as const
}

export function useGetApiInvoicesInvoiceIdInvoiceLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
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
        ? getGetApiInvoicesInvoiceIdInvoiceLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoicesInvoiceIdInvoiceLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
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
        ? getGetApiInvoicesInvoiceIdInvoiceLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiInvoicesInvoiceIdInvoiceLineItemsKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items', 'POST'] as const
}

export function usePostApiInvoicesInvoiceIdInvoiceLineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiInvoicesInvoiceIdInvoiceLineItemsKey()
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
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiInvoicesInvoiceIdInvoiceLineItemsIdKey(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
) {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', args] as const
}

export function useGetApiInvoicesInvoiceIdInvoiceLineItemsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
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
        ? getGetApiInvoicesInvoiceIdInvoiceLineItemsIdKey(args)
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
                (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
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
          client.api.invoices[':invoice_id'].invoice_line_items[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiInvoicesInvoiceIdInvoiceLineItemsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
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
        ? getGetApiInvoicesInvoiceIdInvoiceLineItemsIdKey(args)
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
                (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
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
          client.api.invoices[':invoice_id'].invoice_line_items[':id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', 'DELETE'] as const
}

export function useDeleteApiInvoicesInvoiceIdInvoiceLineItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdKey()
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
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', 'PATCH'] as const
}

export function usePatchApiInvoicesInvoiceIdInvoiceLineItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdKey()
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
            (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.invoices[':invoice_id'].invoice_line_items[':id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiJournalEntriesKey(
  args: InferRequestType<typeof client.api.journal_entries.$get>,
) {
  return ['api', '/api/journal_entries', args] as const
}

export function useGetApiJournalEntries<TError = unknown>(
  args: InferRequestType<typeof client.api.journal_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
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
        ? getGetApiJournalEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJournalEntries<TError = unknown>(
  args: InferRequestType<typeof client.api.journal_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
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
        ? getGetApiJournalEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJournalEntriesIdKey(
  args: InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
) {
  return ['api', '/api/journal_entries/:id', args] as const
}

export function useGetApiJournalEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
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
        ? getGetApiJournalEntriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJournalEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
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
        ? getGetApiJournalEntriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJournalReportsKey(
  args: InferRequestType<typeof client.api.journal_reports.$get>,
) {
  return ['api', '/api/journal_reports', args] as const
}

export function useGetApiJournalReports<TError = unknown>(
  args: InferRequestType<typeof client.api.journal_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
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
        ? getGetApiJournalReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJournalReports<TError = unknown>(
  args: InferRequestType<typeof client.api.journal_reports.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
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
        ? getGetApiJournalReportsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_reports.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJournalReportsIdKey(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
) {
  return ['api', '/api/journal_reports/:id', args] as const
}

export function useGetApiJournalReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
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
        ? getGetApiJournalReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJournalReportsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
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
        ? getGetApiJournalReportsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_reports[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiJournalReportsIdKey() {
  return ['api', '/api/journal_reports/:id', 'PATCH'] as const
}

export function usePatchApiJournalReportsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiJournalReportsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']> },
      ) => parseResponse(client.api.journal_reports[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiJournalSourcesKey(
  args: InferRequestType<typeof client.api.journal_sources.$get>,
) {
  return ['api', '/api/journal_sources', args] as const
}

export function useGetApiJournalSources<TError = unknown>(
  args: InferRequestType<typeof client.api.journal_sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
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
        ? getGetApiJournalSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJournalSources<TError = unknown>(
  args: InferRequestType<typeof client.api.journal_sources.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
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
        ? getGetApiJournalSourcesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_sources.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiJournalSourcesIdKey(
  args: InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
) {
  return ['api', '/api/journal_sources/:id', args] as const
}

export function useGetApiJournalSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
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
        ? getGetApiJournalSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiJournalSourcesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
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
        ? getGetApiJournalSourcesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.journal_sources[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLedgerAccountBalanceMonitorsKey(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
) {
  return ['api', '/api/ledger_account_balance_monitors', args] as const
}

export function useGetApiLedgerAccountBalanceMonitors<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
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
        ? getGetApiLedgerAccountBalanceMonitorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_balance_monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountBalanceMonitors<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
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
        ? getGetApiLedgerAccountBalanceMonitorsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_balance_monitors.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLedgerAccountBalanceMonitorsKey() {
  return ['api', '/api/ledger_account_balance_monitors', 'POST'] as const
}

export function usePostApiLedgerAccountBalanceMonitors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerAccountBalanceMonitorsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.ledger_account_balance_monitors.$post> },
      ) => parseResponse(client.api.ledger_account_balance_monitors.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountBalanceMonitorsIdKey(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_balance_monitors/:id', args] as const
}

export function useGetApiLedgerAccountBalanceMonitorsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
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
        ? getGetApiLedgerAccountBalanceMonitorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_balance_monitors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountBalanceMonitorsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
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
        ? getGetApiLedgerAccountBalanceMonitorsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_balance_monitors[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLedgerAccountBalanceMonitorsIdKey() {
  return ['api', '/api/ledger_account_balance_monitors/:id', 'DELETE'] as const
}

export function useDeleteApiLedgerAccountBalanceMonitorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLedgerAccountBalanceMonitorsIdKey()
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
            (typeof client.api.ledger_account_balance_monitors)[':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_balance_monitors[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLedgerAccountBalanceMonitorsIdKey() {
  return ['api', '/api/ledger_account_balance_monitors/:id', 'PATCH'] as const
}

export function usePatchApiLedgerAccountBalanceMonitorsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerAccountBalanceMonitorsIdKey()
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
            (typeof client.api.ledger_account_balance_monitors)[':id']['$patch']
          >
        },
      ) =>
        parseResponse(client.api.ledger_account_balance_monitors[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountCategoriesKey(
  args: InferRequestType<typeof client.api.ledger_account_categories.$get>,
) {
  return ['api', '/api/ledger_account_categories', args] as const
}

export function useGetApiLedgerAccountCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_account_categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
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
        ? getGetApiLedgerAccountCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_account_categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountCategories<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_account_categories.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
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
        ? getGetApiLedgerAccountCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_account_categories.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLedgerAccountCategoriesKey() {
  return ['api', '/api/ledger_account_categories', 'POST'] as const
}

export function usePostApiLedgerAccountCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.ledger_account_categories.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerAccountCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.ledger_account_categories.$post> },
      ) => parseResponse(client.api.ledger_account_categories.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountCategoriesIdKey(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_categories/:id', args] as const
}

export function useGetApiLedgerAccountCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
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
        ? getGetApiLedgerAccountCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_categories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountCategoriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
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
        ? getGetApiLedgerAccountCategoriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_categories[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLedgerAccountCategoriesIdKey() {
  return ['api', '/api/ledger_account_categories/:id', 'DELETE'] as const
}

export function useDeleteApiLedgerAccountCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLedgerAccountCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>
        },
      ) => parseResponse(client.api.ledger_account_categories[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLedgerAccountCategoriesIdKey() {
  return ['api', '/api/ledger_account_categories/:id', 'PATCH'] as const
}

export function usePatchApiLedgerAccountCategoriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerAccountCategoriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>
        },
      ) => parseResponse(client.api.ledger_account_categories[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id',
    'PUT',
  ] as const
}

export function usePutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdKey()
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
            (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_categories[':id'].ledger_account_categories[
            ':sub_category_id'
          ].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id',
    'DELETE',
  ] as const
}

export function useDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdKey()
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
            (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_categories[':id'].ledger_account_categories[
            ':sub_category_id'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id',
    'PUT',
  ] as const
}

export function usePutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdKey()
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
            (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id',
    'DELETE',
  ] as const
}

export function useDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdKey()
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
            (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountSettlementsKey(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$get>,
) {
  return ['api', '/api/ledger_account_settlements', args] as const
}

export function useGetApiLedgerAccountSettlements<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
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
        ? getGetApiLedgerAccountSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_account_settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountSettlements<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
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
        ? getGetApiLedgerAccountSettlementsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_account_settlements.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLedgerAccountSettlementsKey() {
  return ['api', '/api/ledger_account_settlements', 'POST'] as const
}

export function usePostApiLedgerAccountSettlements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_settlements.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.ledger_account_settlements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerAccountSettlementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.ledger_account_settlements.$post> },
      ) => parseResponse(client.api.ledger_account_settlements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountSettlementsIdKey(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_settlements/:id', args] as const
}

export function useGetApiLedgerAccountSettlementsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
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
        ? getGetApiLedgerAccountSettlementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_settlements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountSettlementsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
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
        ? getGetApiLedgerAccountSettlementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_settlements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiLedgerAccountSettlementsIdKey() {
  return ['api', '/api/ledger_account_settlements/:id', 'PATCH'] as const
}

export function usePatchApiLedgerAccountSettlementsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerAccountSettlementsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>
        },
      ) => parseResponse(client.api.ledger_account_settlements[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLedgerAccountSettlementsIdLedgerEntriesKey() {
  return ['api', '/api/ledger_account_settlements/:id/ledger_entries', 'DELETE'] as const
}

export function useDeleteApiLedgerAccountSettlementsIdLedgerEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLedgerAccountSettlementsIdLedgerEntriesKey()
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
            (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_settlements[':id'].ledger_entries.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLedgerAccountSettlementsIdLedgerEntriesKey() {
  return ['api', '/api/ledger_account_settlements/:id/ledger_entries', 'PATCH'] as const
}

export function usePatchApiLedgerAccountSettlementsIdLedgerEntries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerAccountSettlementsIdLedgerEntriesKey()
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
            (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.ledger_account_settlements[':id'].ledger_entries.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiLedgerAccountStatementsKey() {
  return ['api', '/api/ledger_account_statements', 'POST'] as const
}

export function usePostApiLedgerAccountStatements<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_statements.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.ledger_account_statements.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerAccountStatementsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.ledger_account_statements.$post> },
      ) => parseResponse(client.api.ledger_account_statements.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountStatementsIdKey(
  args: InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_statements/:id', args] as const
}

export function useGetApiLedgerAccountStatementsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
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
        ? getGetApiLedgerAccountStatementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_statements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountStatementsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
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
        ? getGetApiLedgerAccountStatementsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_account_statements[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLedgerAccountsKey(
  args: InferRequestType<typeof client.api.ledger_accounts.$get>,
) {
  return ['api', '/api/ledger_accounts', args] as const
}

export function useGetApiLedgerAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
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
        ? getGetApiLedgerAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
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
        ? getGetApiLedgerAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLedgerAccountsKey() {
  return ['api', '/api/ledger_accounts', 'POST'] as const
}

export function usePostApiLedgerAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.ledger_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.ledger_accounts.$post> }) =>
        parseResponse(client.api.ledger_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerAccountsIdKey(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
) {
  return ['api', '/api/ledger_accounts/:id', args] as const
}

export function useGetApiLedgerAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
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
        ? getGetApiLedgerAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
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
        ? getGetApiLedgerAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLedgerAccountsIdKey() {
  return ['api', '/api/ledger_accounts/:id', 'DELETE'] as const
}

export function useDeleteApiLedgerAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLedgerAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']> },
      ) => parseResponse(client.api.ledger_accounts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLedgerAccountsIdKey() {
  return ['api', '/api/ledger_accounts/:id', 'PATCH'] as const
}

export function usePatchApiLedgerAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']> },
      ) => parseResponse(client.api.ledger_accounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerEntriesKey(
  args: InferRequestType<typeof client.api.ledger_entries.$get>,
) {
  return ['api', '/api/ledger_entries', args] as const
}

export function useGetApiLedgerEntries<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
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
        ? getGetApiLedgerEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerEntries<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_entries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
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
        ? getGetApiLedgerEntriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_entries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLedgerEntriesIdKey(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
) {
  return ['api', '/api/ledger_entries/:id', args] as const
}

export function useGetApiLedgerEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
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
        ? getGetApiLedgerEntriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerEntriesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
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
        ? getGetApiLedgerEntriesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_entries[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiLedgerEntriesIdKey() {
  return ['api', '/api/ledger_entries/:id', 'PATCH'] as const
}

export function usePatchApiLedgerEntriesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerEntriesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']> },
      ) => parseResponse(client.api.ledger_entries[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerTransactionVersionsKey(
  args: InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
) {
  return ['api', '/api/ledger_transaction_versions', args] as const
}

export function useGetApiLedgerTransactionVersions<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
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
        ? getGetApiLedgerTransactionVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_transaction_versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerTransactionVersions<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
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
        ? getGetApiLedgerTransactionVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_transaction_versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLedgerTransactionsKey(
  args: InferRequestType<typeof client.api.ledger_transactions.$get>,
) {
  return ['api', '/api/ledger_transactions', args] as const
}

export function useGetApiLedgerTransactions<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
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
        ? getGetApiLedgerTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerTransactions<TError = unknown>(
  args: InferRequestType<typeof client.api.ledger_transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
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
        ? getGetApiLedgerTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLedgerTransactionsKey() {
  return ['api', '/api/ledger_transactions', 'POST'] as const
}

export function usePostApiLedgerTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.ledger_transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.ledger_transactions.$post> },
      ) => parseResponse(client.api.ledger_transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerTransactionsIdKey(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
) {
  return ['api', '/api/ledger_transactions/:id', args] as const
}

export function useGetApiLedgerTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
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
        ? getGetApiLedgerTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
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
        ? getGetApiLedgerTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledger_transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiLedgerTransactionsIdKey() {
  return ['api', '/api/ledger_transactions/:id', 'PATCH'] as const
}

export function usePatchApiLedgerTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgerTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']> },
      ) => parseResponse(client.api.ledger_transactions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLedgerTransactionsIdPartialPostKey() {
  return ['api', '/api/ledger_transactions/:id/partial_post', 'POST'] as const
}

export function usePostApiLedgerTransactionsIdPartialPost<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerTransactionsIdPartialPostKey()
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
            (typeof client.api.ledger_transactions)[':id']['partial_post']['$post']
          >
        },
      ) =>
        parseResponse(client.api.ledger_transactions[':id'].partial_post.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLedgerTransactionsIdReversalKey() {
  return ['api', '/api/ledger_transactions/:id/reversal', 'POST'] as const
}

export function usePostApiLedgerTransactionsIdReversal<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgerTransactionsIdReversalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>
        },
      ) => parseResponse(client.api.ledger_transactions[':id'].reversal.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgerTransactionsIdVersionsKey(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
) {
  return ['api', '/api/ledger_transactions/:id/versions', args] as const
}

export function useGetApiLedgerTransactionsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
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
        ? getGetApiLedgerTransactionsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_transactions[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgerTransactionsIdVersions<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
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
        ? getGetApiLedgerTransactionsIdVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.ledger_transactions[':id'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiLedgersKey(args: InferRequestType<typeof client.api.ledgers.$get>) {
  return ['api', '/api/ledgers', args] as const
}

export function useGetApiLedgers<TError = unknown>(
  args: InferRequestType<typeof client.api.ledgers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLedgersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledgers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgers<TError = unknown>(
  args: InferRequestType<typeof client.api.ledgers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLedgersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledgers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLedgersKey() {
  return ['api', '/api/ledgers', 'POST'] as const
}

export function usePostApiLedgers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.ledgers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLedgersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.ledgers.$post> }) =>
        parseResponse(client.api.ledgers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLedgersIdKey(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
) {
  return ['api', '/api/ledgers/:id', args] as const
}

export function useGetApiLedgersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiLedgersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledgers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLedgersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiLedgersIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ledgers[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLedgersIdKey() {
  return ['api', '/api/ledgers/:id', 'DELETE'] as const
}

export function useDeleteApiLedgersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLedgersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.ledgers)[':id']['$delete']> },
      ) => parseResponse(client.api.ledgers[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLedgersIdKey() {
  return ['api', '/api/ledgers/:id', 'PATCH'] as const
}

export function usePatchApiLedgersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLedgersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.ledgers)[':id']['$patch']> },
      ) => parseResponse(client.api.ledgers[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLegalEntitiesKey(
  args: InferRequestType<typeof client.api.legal_entities.$get>,
) {
  return ['api', '/api/legal_entities', args] as const
}

export function useGetApiLegalEntities<TError = unknown>(
  args: InferRequestType<typeof client.api.legal_entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
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
        ? getGetApiLegalEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.legal_entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLegalEntities<TError = unknown>(
  args: InferRequestType<typeof client.api.legal_entities.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
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
        ? getGetApiLegalEntitiesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.legal_entities.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLegalEntitiesKey() {
  return ['api', '/api/legal_entities', 'POST'] as const
}

export function usePostApiLegalEntities<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.legal_entities.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLegalEntitiesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.legal_entities.$post> }) =>
        parseResponse(client.api.legal_entities.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLegalEntitiesIdKey(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/legal_entities/:id', keyArgs] as const
}

export function useGetApiLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
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
        ? getGetApiLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.legal_entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLegalEntitiesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
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
        ? getGetApiLegalEntitiesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.legal_entities[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiLegalEntitiesIdKey() {
  return ['api', '/api/legal_entities/:id', 'PATCH'] as const
}

export function usePatchApiLegalEntitiesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLegalEntitiesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']> },
      ) => parseResponse(client.api.legal_entities[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLegalEntityAssociationsKey() {
  return ['api', '/api/legal_entity_associations', 'POST'] as const
}

export function usePostApiLegalEntityAssociations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entity_associations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.legal_entity_associations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLegalEntityAssociationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.legal_entity_associations.$post> },
      ) => parseResponse(client.api.legal_entity_associations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiLegalEntityAssociationsIdKey() {
  return ['api', '/api/legal_entity_associations/:id', 'DELETE'] as const
}

export function useDeleteApiLegalEntityAssociationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.legal_entity_associations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLegalEntityAssociationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>
        },
      ) => parseResponse(client.api.legal_entity_associations[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentActionsKey(
  args: InferRequestType<typeof client.api.payment_actions.$get>,
) {
  return ['api', '/api/payment_actions', args] as const
}

export function useGetApiPaymentActions<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
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
        ? getGetApiPaymentActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentActions<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_actions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
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
        ? getGetApiPaymentActionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_actions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPaymentActionsKey() {
  return ['api', '/api/payment_actions', 'POST'] as const
}

export function usePostApiPaymentActions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.payment_actions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentActionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.payment_actions.$post> }) =>
        parseResponse(client.api.payment_actions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentActionsIdKey(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
) {
  return ['api', '/api/payment_actions/:id', args] as const
}

export function useGetApiPaymentActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
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
        ? getGetApiPaymentActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentActionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
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
        ? getGetApiPaymentActionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_actions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiPaymentActionsIdKey() {
  return ['api', '/api/payment_actions/:id', 'PATCH'] as const
}

export function usePatchApiPaymentActionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPaymentActionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']> },
      ) => parseResponse(client.api.payment_actions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentFlowsKey(
  args: InferRequestType<typeof client.api.payment_flows.$get>,
) {
  return ['api', '/api/payment_flows', args] as const
}

export function useGetApiPaymentFlows<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
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
        ? getGetApiPaymentFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentFlows<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_flows.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
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
        ? getGetApiPaymentFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPaymentFlowsKey() {
  return ['api', '/api/payment_flows', 'POST'] as const
}

export function usePostApiPaymentFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.payment_flows.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.payment_flows.$post> }) =>
        parseResponse(client.api.payment_flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentFlowsIdKey(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment_flows/:id', keyArgs] as const
}

export function useGetApiPaymentFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
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
        ? getGetApiPaymentFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentFlowsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
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
        ? getGetApiPaymentFlowsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_flows[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiPaymentFlowsIdKey() {
  return ['api', '/api/payment_flows/:id', 'PATCH'] as const
}

export function usePatchApiPaymentFlowsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPaymentFlowsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']> },
      ) => parseResponse(client.api.payment_flows[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentOrdersKey(
  args: InferRequestType<typeof client.api.payment_orders.$get>,
) {
  return ['api', '/api/payment_orders', args] as const
}

export function useGetApiPaymentOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
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
        ? getGetApiPaymentOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
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
        ? getGetApiPaymentOrdersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPaymentOrdersKey() {
  return ['api', '/api/payment_orders', 'POST'] as const
}

export function usePostApiPaymentOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.payment_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.payment_orders.$post> }) =>
        parseResponse(client.api.payment_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPaymentOrdersCreateAsyncKey() {
  return ['api', '/api/payment_orders/create_async', 'POST'] as const
}

export function usePostApiPaymentOrdersCreateAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.payment_orders.create_async.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.payment_orders.create_async.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentOrdersCreateAsyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.payment_orders.create_async.$post> },
      ) => parseResponse(client.api.payment_orders.create_async.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentOrdersIdKey(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
) {
  return ['api', '/api/payment_orders/:id', args] as const
}

export function useGetApiPaymentOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
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
        ? getGetApiPaymentOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
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
        ? getGetApiPaymentOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiPaymentOrdersIdKey() {
  return ['api', '/api/payment_orders/:id', 'PATCH'] as const
}

export function usePatchApiPaymentOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiPaymentOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']> },
      ) => parseResponse(client.api.payment_orders[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentOrdersPaymentOrderIdReversalsKey(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
) {
  return ['api', '/api/payment_orders/:payment_order_id/reversals', args] as const
}

export function useGetApiPaymentOrdersPaymentOrderIdReversals<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
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
        ? getGetApiPaymentOrdersPaymentOrderIdReversalsKey(args)
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
                (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
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
          client.api.payment_orders[':payment_order_id'].reversals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentOrdersPaymentOrderIdReversals<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
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
        ? getGetApiPaymentOrdersPaymentOrderIdReversalsKey(args)
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
                (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
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
          client.api.payment_orders[':payment_order_id'].reversals.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiPaymentOrdersPaymentOrderIdReversalsKey() {
  return ['api', '/api/payment_orders/:payment_order_id/reversals', 'POST'] as const
}

export function usePostApiPaymentOrdersPaymentOrderIdReversals<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentOrdersPaymentOrderIdReversalsKey()
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
            (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.payment_orders[':payment_order_id'].reversals.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentOrdersPaymentOrderIdReversalsReversalIdKey(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
) {
  return ['api', '/api/payment_orders/:payment_order_id/reversals/:reversal_id', args] as const
}

export function useGetApiPaymentOrdersPaymentOrderIdReversalsReversalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
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
        ? getGetApiPaymentOrdersPaymentOrderIdReversalsReversalIdKey(args)
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
                (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
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
          client.api.payment_orders[':payment_order_id'].reversals[':reversal_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentOrdersPaymentOrderIdReversalsReversalId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
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
        ? getGetApiPaymentOrdersPaymentOrderIdReversalsReversalIdKey(args)
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
                (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
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
          client.api.payment_orders[':payment_order_id'].reversals[':reversal_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiPaymentReferencesKey(
  args: InferRequestType<typeof client.api.payment_references.$get>,
) {
  return ['api', '/api/payment_references', args] as const
}

export function useGetApiPaymentReferences<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_references.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
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
        ? getGetApiPaymentReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentReferences<TError = unknown>(
  args: InferRequestType<typeof client.api.payment_references.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
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
        ? getGetApiPaymentReferencesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_references.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPaymentReferencesIdKey(
  args: InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
) {
  return ['api', '/api/payment_references/:id', args] as const
}

export function useGetApiPaymentReferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
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
        ? getGetApiPaymentReferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_references[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentReferencesId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
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
        ? getGetApiPaymentReferencesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payment_references[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPingKey() {
  return ['api', '/api/ping'] as const
}

export function useGetApiPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPing<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPingKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.ping.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReturnsKey(args: InferRequestType<typeof client.api.returns.$get>) {
  return ['api', '/api/returns', args] as const
}

export function useGetApiReturns<TError = unknown>(
  args: InferRequestType<typeof client.api.returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReturnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReturns<TError = unknown>(
  args: InferRequestType<typeof client.api.returns.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiReturnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.returns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiReturnsKey() {
  return ['api', '/api/returns', 'POST'] as const
}

export function usePostApiReturns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.returns.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiReturnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.returns.$post> }) =>
        parseResponse(client.api.returns.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiReturnsIdKey(
  args: InferRequestType<(typeof client.api.returns)[':id']['$get']>,
) {
  return ['api', '/api/returns/:id', args] as const
}

export function useGetApiReturnsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.returns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiReturnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.returns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReturnsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.returns)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiReturnsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.returns[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiSimulationsCasesIdResolveKey() {
  return ['api', '/api/simulations/cases/:id/resolve', 'PATCH'] as const
}

export function usePatchApiSimulationsCasesIdResolve<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiSimulationsCasesIdResolveKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>
        },
      ) => parseResponse(client.api.simulations.cases[':id'].resolve.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSimulationsIncomingPaymentDetailsCreateAsyncKey() {
  return ['api', '/api/simulations/incoming_payment_details/create_async', 'POST'] as const
}

export function usePostApiSimulationsIncomingPaymentDetailsCreateAsync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.api.simulations.incoming_payment_details.create_async.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.simulations.incoming_payment_details.create_async.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSimulationsIncomingPaymentDetailsCreateAsyncKey()
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
            typeof client.api.simulations.incoming_payment_details.create_async.$post
          >
        },
      ) =>
        parseResponse(
          client.api.simulations.incoming_payment_details.create_async.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiSimulationsLegalEntitiesIdUpdateStatusKey() {
  return ['api', '/api/simulations/legal_entities/:id/update_status', 'PATCH'] as const
}

export function usePatchApiSimulationsLegalEntitiesIdUpdateStatus<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiSimulationsLegalEntitiesIdUpdateStatusKey()
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
            (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.simulations.legal_entities[':id'].update_status.$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiTransactionLineItemsKey(
  args: InferRequestType<typeof client.api.transaction_line_items.$get>,
) {
  return ['api', '/api/transaction_line_items', args] as const
}

export function useGetApiTransactionLineItems<TError = unknown>(
  args: InferRequestType<typeof client.api.transaction_line_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
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
        ? getGetApiTransactionLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transaction_line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTransactionLineItems<TError = unknown>(
  args: InferRequestType<typeof client.api.transaction_line_items.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
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
        ? getGetApiTransactionLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transaction_line_items.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTransactionLineItemsKey() {
  return ['api', '/api/transaction_line_items', 'POST'] as const
}

export function usePostApiTransactionLineItems<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.transaction_line_items.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTransactionLineItemsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.transaction_line_items.$post> },
      ) => parseResponse(client.api.transaction_line_items.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTransactionLineItemsIdKey(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
) {
  return ['api', '/api/transaction_line_items/:id', args] as const
}

export function useGetApiTransactionLineItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
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
        ? getGetApiTransactionLineItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transaction_line_items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTransactionLineItemsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
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
        ? getGetApiTransactionLineItemsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transaction_line_items[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiTransactionLineItemsIdKey() {
  return ['api', '/api/transaction_line_items/:id', 'DELETE'] as const
}

export function useDeleteApiTransactionLineItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiTransactionLineItemsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']> },
      ) => parseResponse(client.api.transaction_line_items[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTransactionsKey(
  args: InferRequestType<typeof client.api.transactions.$get>,
) {
  return ['api', '/api/transactions', args] as const
}

export function useGetApiTransactions<TError = unknown>(
  args: InferRequestType<typeof client.api.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
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
        ? getGetApiTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTransactions<TError = unknown>(
  args: InferRequestType<typeof client.api.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
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
        ? getGetApiTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiTransactionsKey() {
  return ['api', '/api/transactions', 'POST'] as const
}

export function usePostApiTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.transactions.$post> }) =>
        parseResponse(client.api.transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTransactionsIdKey(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
) {
  return ['api', '/api/transactions/:id', args] as const
}

export function useGetApiTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
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
        ? getGetApiTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTransactionsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
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
        ? getGetApiTransactionsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.transactions[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiTransactionsIdKey() {
  return ['api', '/api/transactions/:id', 'DELETE'] as const
}

export function useDeleteApiTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.transactions)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.transactions)[':id']['$delete']> },
      ) => parseResponse(client.api.transactions[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiTransactionsIdKey() {
  return ['api', '/api/transactions/:id', 'PATCH'] as const
}

export function usePatchApiTransactionsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.transactions)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiTransactionsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.transactions)[':id']['$patch']> },
      ) => parseResponse(client.api.transactions[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTransactionsTransactionIdLineItemsKey(
  args: InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>,
) {
  return ['api', '/api/transactions/:transaction_id/line_items', args] as const
}

export function useGetApiTransactionsTransactionIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
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
        ? getGetApiTransactionsTransactionIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.transactions[':transaction_id'].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTransactionsTransactionIdLineItems<TError = unknown>(
  args: InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
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
        ? getGetApiTransactionsTransactionIdLineItemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.transactions[':transaction_id'].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiValidationsRoutingNumbersKey(
  args: InferRequestType<typeof client.api.validations.routing_numbers.$get>,
) {
  return ['api', '/api/validations/routing_numbers', args] as const
}

export function useGetApiValidationsRoutingNumbers<TError = unknown>(
  args: InferRequestType<typeof client.api.validations.routing_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
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
        ? getGetApiValidationsRoutingNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.validations.routing_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiValidationsRoutingNumbers<TError = unknown>(
  args: InferRequestType<typeof client.api.validations.routing_numbers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
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
        ? getGetApiValidationsRoutingNumbersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.validations.routing_numbers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiVirtualAccountSettingsKey(
  args: InferRequestType<typeof client.api.virtual_account_settings.$get>,
) {
  return ['api', '/api/virtual_account_settings', args] as const
}

export function useGetApiVirtualAccountSettings<TError = unknown>(
  args: InferRequestType<typeof client.api.virtual_account_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
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
        ? getGetApiVirtualAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.virtual_account_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualAccountSettings<TError = unknown>(
  args: InferRequestType<typeof client.api.virtual_account_settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
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
        ? getGetApiVirtualAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.virtual_account_settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVirtualAccountSettingsKey() {
  return ['api', '/api/virtual_account_settings', 'POST'] as const
}

export function usePostApiVirtualAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.virtual_account_settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVirtualAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.virtual_account_settings.$post> },
      ) => parseResponse(client.api.virtual_account_settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVirtualAccountsKey(
  args: InferRequestType<typeof client.api.virtual_accounts.$get>,
) {
  return ['api', '/api/virtual_accounts', args] as const
}

export function useGetApiVirtualAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.virtual_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
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
        ? getGetApiVirtualAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.virtual_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualAccounts<TError = unknown>(
  args: InferRequestType<typeof client.api.virtual_accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
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
        ? getGetApiVirtualAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.virtual_accounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiVirtualAccountsKey() {
  return ['api', '/api/virtual_accounts', 'POST'] as const
}

export function usePostApiVirtualAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.virtual_accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiVirtualAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.virtual_accounts.$post> },
      ) => parseResponse(client.api.virtual_accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiVirtualAccountsIdKey(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
) {
  return ['api', '/api/virtual_accounts/:id', args] as const
}

export function useGetApiVirtualAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
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
        ? getGetApiVirtualAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.virtual_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiVirtualAccountsId<TError = unknown>(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
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
        ? getGetApiVirtualAccountsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.virtual_accounts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiVirtualAccountsIdKey() {
  return ['api', '/api/virtual_accounts/:id', 'DELETE'] as const
}

export function useDeleteApiVirtualAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiVirtualAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']> },
      ) => parseResponse(client.api.virtual_accounts[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiVirtualAccountsIdKey() {
  return ['api', '/api/virtual_accounts/:id', 'PATCH'] as const
}

export function usePatchApiVirtualAccountsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiVirtualAccountsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']> },
      ) => parseResponse(client.api.virtual_accounts[':id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountsTypeAccountIdAccountDetailsKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/account_details', args] as const
}

export function useGetApiAccountsTypeAccountIdAccountDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
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
        ? getGetApiAccountsTypeAccountIdAccountDetailsKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
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
          client.api[':accounts_type'][':account_id'].account_details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountsTypeAccountIdAccountDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
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
        ? getGetApiAccountsTypeAccountIdAccountDetailsKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
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
          client.api[':accounts_type'][':account_id'].account_details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAccountsTypeAccountIdAccountDetailsKey() {
  return ['api', '/api/:accounts_type/:account_id/account_details', 'POST'] as const
}

export function usePostApiAccountsTypeAccountIdAccountDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAccountsTypeAccountIdAccountDetailsKey()
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
            (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':accounts_type'][':account_id'].account_details.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountsTypeAccountIdAccountDetailsIdKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/account_details/:id', args] as const
}

export function useGetApiAccountsTypeAccountIdAccountDetailsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
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
        ? getGetApiAccountsTypeAccountIdAccountDetailsIdKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
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
          client.api[':accounts_type'][':account_id'].account_details[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountsTypeAccountIdAccountDetailsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
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
        ? getGetApiAccountsTypeAccountIdAccountDetailsIdKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
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
          client.api[':accounts_type'][':account_id'].account_details[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiAccountsTypeAccountIdAccountDetailsIdKey() {
  return ['api', '/api/:accounts_type/:account_id/account_details/:id', 'DELETE'] as const
}

export function useDeleteApiAccountsTypeAccountIdAccountDetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAccountsTypeAccountIdAccountDetailsIdKey()
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
            (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api[':accounts_type'][':account_id'].account_details[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountsTypeAccountIdRoutingDetailsKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/routing_details', args] as const
}

export function useGetApiAccountsTypeAccountIdRoutingDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
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
        ? getGetApiAccountsTypeAccountIdRoutingDetailsKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
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
          client.api[':accounts_type'][':account_id'].routing_details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountsTypeAccountIdRoutingDetails<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
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
        ? getGetApiAccountsTypeAccountIdRoutingDetailsKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
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
          client.api[':accounts_type'][':account_id'].routing_details.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiAccountsTypeAccountIdRoutingDetailsKey() {
  return ['api', '/api/:accounts_type/:account_id/routing_details', 'POST'] as const
}

export function usePostApiAccountsTypeAccountIdRoutingDetails<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAccountsTypeAccountIdRoutingDetailsKey()
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
            (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':accounts_type'][':account_id'].routing_details.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiAccountsTypeAccountIdRoutingDetailsIdKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/routing_details/:id', args] as const
}

export function useGetApiAccountsTypeAccountIdRoutingDetailsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
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
        ? getGetApiAccountsTypeAccountIdRoutingDetailsIdKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
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
          client.api[':accounts_type'][':account_id'].routing_details[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAccountsTypeAccountIdRoutingDetailsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
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
        ? getGetApiAccountsTypeAccountIdRoutingDetailsIdKey(args)
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
                (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
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
          client.api[':accounts_type'][':account_id'].routing_details[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiAccountsTypeAccountIdRoutingDetailsIdKey() {
  return ['api', '/api/:accounts_type/:account_id/routing_details/:id', 'DELETE'] as const
}

export function useDeleteApiAccountsTypeAccountIdRoutingDetailsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAccountsTypeAccountIdRoutingDetailsIdKey()
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
            (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api[':accounts_type'][':account_id'].routing_details[':id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDocumentableTypeDocumentableIdDocumentsKey(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents', args] as const
}

export function useGetApiDocumentableTypeDocumentableIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
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
        ? getGetApiDocumentableTypeDocumentableIdDocumentsKey(args)
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
                (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
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
          client.api[':documentable_type'][':documentable_id'].documents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocumentableTypeDocumentableIdDocuments<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
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
        ? getGetApiDocumentableTypeDocumentableIdDocumentsKey(args)
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
                (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
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
          client.api[':documentable_type'][':documentable_id'].documents.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiDocumentableTypeDocumentableIdDocumentsKey() {
  return ['api', '/api/:documentable_type/:documentable_id/documents', 'POST'] as const
}

export function usePostApiDocumentableTypeDocumentableIdDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDocumentableTypeDocumentableIdDocumentsKey()
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
            (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api[':documentable_type'][':documentable_id'].documents.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDocumentableTypeDocumentableIdDocumentsIdKey(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents/:id', args] as const
}

export function useGetApiDocumentableTypeDocumentableIdDocumentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
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
        ? getGetApiDocumentableTypeDocumentableIdDocumentsIdKey(args)
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
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
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
          client.api[':documentable_type'][':documentable_id'].documents[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocumentableTypeDocumentableIdDocumentsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
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
        ? getGetApiDocumentableTypeDocumentableIdDocumentsIdKey(args)
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
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
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
          client.api[':documentable_type'][':documentable_id'].documents[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiDocumentableTypeDocumentableIdDocumentsIdDownloadKey(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents/:id/download', args] as const
}

export function useGetApiDocumentableTypeDocumentableIdDocumentsIdDownload<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
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
        ? getGetApiDocumentableTypeDocumentableIdDocumentsIdDownloadKey(args)
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
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
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
          client.api[':documentable_type'][':documentable_id'].documents[':id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDocumentableTypeDocumentableIdDocumentsIdDownload<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
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
        ? getGetApiDocumentableTypeDocumentableIdDocumentsIdDownloadKey(args)
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
                (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
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
          client.api[':documentable_type'][':documentable_id'].documents[':id'].download.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiItemizableTypeItemizableIdLineItemsKey(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
) {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items', args] as const
}

export function useGetApiItemizableTypeItemizableIdLineItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
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
        ? getGetApiItemizableTypeItemizableIdLineItemsKey(args)
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
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
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
          client.api[':itemizable_type'][':itemizable_id'].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiItemizableTypeItemizableIdLineItems<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
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
        ? getGetApiItemizableTypeItemizableIdLineItemsKey(args)
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
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
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
          client.api[':itemizable_type'][':itemizable_id'].line_items.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiItemizableTypeItemizableIdLineItemsIdKey(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
) {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items/:id', args] as const
}

export function useGetApiItemizableTypeItemizableIdLineItemsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
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
        ? getGetApiItemizableTypeItemizableIdLineItemsIdKey(args)
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
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
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
          client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiItemizableTypeItemizableIdLineItemsId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
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
        ? getGetApiItemizableTypeItemizableIdLineItemsIdKey(args)
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
                (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
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
          client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchApiItemizableTypeItemizableIdLineItemsIdKey() {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items/:id', 'PATCH'] as const
}

export function usePatchApiItemizableTypeItemizableIdLineItemsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiItemizableTypeItemizableIdLineItemsIdKey()
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
            (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
