import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getApiAccountCollectionFlowsQueryKey(
  args: InferRequestType<typeof client.api.account_collection_flows.$get>,
) {
  return ['api', '/api/account_collection_flows', args] as const
}

export function getApiAccountCollectionFlowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.account_collection_flows.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountCollectionFlowsQueryKey>
  >({
    queryKey: getApiAccountCollectionFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account_collection_flows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAccountCollectionFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.account_collection_flows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.account_collection_flows.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountCollectionFlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAccountCollectionFlowsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiAccountCollectionFlowsMutationKey() {
  return ['api', '/api/account_collection_flows', 'POST'] as const
}

export function getPostApiAccountCollectionFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.account_collection_flows.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.account_collection_flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountCollectionFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.account_collection_flows.$post>) {
      return parseResponse(client.api.account_collection_flows.$post(args, options))
    },
  })
}

export function injectPostApiAccountCollectionFlows<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.account_collection_flows.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.account_collection_flows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAccountCollectionFlowsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiAccountCollectionFlowsIdQueryKey(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/account_collection_flows/:id', keyArgs] as const
}

export function getApiAccountCollectionFlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiAccountCollectionFlowsIdQueryKey>
  >({
    queryKey: getApiAccountCollectionFlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.account_collection_flows[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAccountCollectionFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.account_collection_flows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAccountCollectionFlowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAccountCollectionFlowsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiAccountCollectionFlowsIdMutationKey() {
  return ['api', '/api/account_collection_flows/:id', 'PATCH'] as const
}

export function getPatchApiAccountCollectionFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiAccountCollectionFlowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.account_collection_flows[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiAccountCollectionFlowsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.account_collection_flows)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.account_collection_flows)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiAccountCollectionFlowsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiBulkRequestsQueryKey(
  args: InferRequestType<typeof client.api.bulk_requests.$get>,
) {
  return ['api', '/api/bulk_requests', args] as const
}

export function getApiBulkRequestsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.bulk_requests.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkRequestsQueryKey>
  >({
    queryKey: getApiBulkRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bulk_requests.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiBulkRequests<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.bulk_requests.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkRequestsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBulkRequestsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiBulkRequestsMutationKey() {
  return ['api', '/api/bulk_requests', 'POST'] as const
}

export function getPostApiBulkRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.bulk_requests.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiBulkRequestsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.bulk_requests.$post>) {
      return parseResponse(client.api.bulk_requests.$post(args, options))
    },
  })
}

export function injectPostApiBulkRequests<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_requests.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.bulk_requests.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiBulkRequestsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiBulkRequestsIdQueryKey(
  args: InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
) {
  return ['api', '/api/bulk_requests/:id', args] as const
}

export function getApiBulkRequestsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkRequestsIdQueryKey>
  >({
    queryKey: getApiBulkRequestsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bulk_requests[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBulkRequestsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.bulk_requests)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bulk_requests)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkRequestsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBulkRequestsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiBulkResultsQueryKey(
  args: InferRequestType<typeof client.api.bulk_results.$get>,
) {
  return ['api', '/api/bulk_results', args] as const
}

export function getApiBulkResultsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.bulk_results.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkResultsQueryKey>
  >({
    queryKey: getApiBulkResultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bulk_results.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiBulkResults<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.bulk_results.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.bulk_results.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkResultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBulkResultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiBulkResultsIdQueryKey(
  args: InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
) {
  return ['api', '/api/bulk_results/:id', args] as const
}

export function getApiBulkResultsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiBulkResultsIdQueryKey>
  >({
    queryKey: getApiBulkResultsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.bulk_results[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiBulkResultsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.bulk_results)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.bulk_results)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiBulkResultsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiBulkResultsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiCasesQueryKey(args: InferRequestType<typeof client.api.cases.$get>) {
  return ['api', '/api/cases', args] as const
}

export function getApiCasesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.cases.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiCasesQueryKey>
  >({
    queryKey: getApiCasesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cases.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiCases<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.cases.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.cases.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCasesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCasesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiCasesIdQueryKey(
  args: InferRequestType<(typeof client.api.cases)[':id']['$get']>,
) {
  return ['api', '/api/cases/:id', args] as const
}

export function getApiCasesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.cases)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCasesIdQueryKey>
  >({
    queryKey: getApiCasesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.cases[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiCasesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.cases)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.cases)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCasesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCasesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiConnectionLegalEntitiesQueryKey(
  args: InferRequestType<typeof client.api.connection_legal_entities.$get>,
) {
  return ['api', '/api/connection_legal_entities', args] as const
}

export function getApiConnectionLegalEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.connection_legal_entities.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectionLegalEntitiesQueryKey>
  >({
    queryKey: getApiConnectionLegalEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.connection_legal_entities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiConnectionLegalEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.connection_legal_entities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.connection_legal_entities.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectionLegalEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiConnectionLegalEntitiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiConnectionLegalEntitiesMutationKey() {
  return ['api', '/api/connection_legal_entities', 'POST'] as const
}

export function getPostApiConnectionLegalEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.connection_legal_entities.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.connection_legal_entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiConnectionLegalEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.connection_legal_entities.$post>) {
      return parseResponse(client.api.connection_legal_entities.$post(args, options))
    },
  })
}

export function injectPostApiConnectionLegalEntities<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.connection_legal_entities.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.connection_legal_entities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiConnectionLegalEntitiesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiConnectionLegalEntitiesIdQueryKey(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/connection_legal_entities/:id', keyArgs] as const
}

export function getApiConnectionLegalEntitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectionLegalEntitiesIdQueryKey>
  >({
    queryKey: getApiConnectionLegalEntitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.connection_legal_entities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiConnectionLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectionLegalEntitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiConnectionLegalEntitiesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiConnectionLegalEntitiesIdMutationKey() {
  return ['api', '/api/connection_legal_entities/:id', 'PATCH'] as const
}

export function getPatchApiConnectionLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiConnectionLegalEntitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.connection_legal_entities[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiConnectionLegalEntitiesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.connection_legal_entities)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.connection_legal_entities)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiConnectionLegalEntitiesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiConnectionsQueryKey(
  args: InferRequestType<typeof client.api.connections.$get>,
) {
  return ['api', '/api/connections', args] as const
}

export function getApiConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.connections.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiConnectionsQueryKey>
  >({
    queryKey: getApiConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.connections.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiConnections<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.connections.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.connections.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiConnectionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiConnectionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiCounterpartiesQueryKey(
  args: InferRequestType<typeof client.api.counterparties.$get>,
) {
  return ['api', '/api/counterparties', args] as const
}

export function getApiCounterpartiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.counterparties.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCounterpartiesQueryKey>
  >({
    queryKey: getApiCounterpartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.counterparties.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiCounterparties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.counterparties.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCounterpartiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCounterpartiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiCounterpartiesMutationKey() {
  return ['api', '/api/counterparties', 'POST'] as const
}

export function getPostApiCounterpartiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.counterparties.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCounterpartiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.counterparties.$post>) {
      return parseResponse(client.api.counterparties.$post(args, options))
    },
  })
}

export function injectPostApiCounterparties<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.counterparties.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.counterparties.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCounterpartiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiCounterpartiesIdQueryKey(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
) {
  return ['api', '/api/counterparties/:id', args] as const
}

export function getApiCounterpartiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCounterpartiesIdQueryKey>
  >({
    queryKey: getApiCounterpartiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.counterparties[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCounterpartiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.counterparties)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCounterpartiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCounterpartiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiCounterpartiesIdMutationKey() {
  return ['api', '/api/counterparties/:id', 'DELETE'] as const
}

export function getDeleteApiCounterpartiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCounterpartiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>) {
      return parseResponse(client.api.counterparties[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiCounterpartiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.counterparties)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiCounterpartiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiCounterpartiesIdMutationKey() {
  return ['api', '/api/counterparties/:id', 'PATCH'] as const
}

export function getPatchApiCounterpartiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCounterpartiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>) {
      return parseResponse(client.api.counterparties[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiCounterpartiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.counterparties)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.counterparties)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiCounterpartiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiCounterpartiesIdCollectAccountMutationKey() {
  return ['api', '/api/counterparties/:id/collect_account', 'POST'] as const
}

export function getPostApiCounterpartiesIdCollectAccountMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCounterpartiesIdCollectAccountMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
    ) {
      return parseResponse(client.api.counterparties[':id'].collect_account.$post(args, options))
    },
  })
}

export function injectPostApiCounterpartiesIdCollectAccount<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.counterparties)[':id']['collect_account']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiCounterpartiesIdCollectAccountMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiDocumentsQueryKey(args: InferRequestType<typeof client.api.documents.$get>) {
  return ['api', '/api/documents', args] as const
}

export function getApiDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.documents.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsQueryKey>
  >({
    queryKey: getApiDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.documents.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDocuments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.documents.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDocumentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiDocumentsMutationKey() {
  return ['api', '/api/documents', 'POST'] as const
}

export function getPostApiDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.documents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.documents.$post>) {
      return parseResponse(client.api.documents.$post(args, options))
    },
  })
}

export function injectPostApiDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.documents.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.documents.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiDocumentsIdQueryKey(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
) {
  return ['api', '/api/documents/:id', args] as const
}

export function getApiDocumentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsIdQueryKey>
  >({
    queryKey: getApiDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.documents[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDocumentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.documents)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.documents)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDocumentsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiDocumentsIdDownloadQueryKey(
  args: InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
) {
  return ['api', '/api/documents/:id/download', args] as const
}

export function getApiDocumentsIdDownloadQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDocumentsIdDownloadQueryKey>
  >({
    queryKey: getApiDocumentsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.documents[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDocumentsIdDownload<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.documents)[':id']['download']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.documents)[':id']['download']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDocumentsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDocumentsIdDownloadQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiEmbeddableFlowsQueryKey(
  args: InferRequestType<typeof client.api.embeddable_flows.$get>,
) {
  return ['api', '/api/embeddable_flows', args] as const
}

export function getApiEmbeddableFlowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.embeddable_flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmbeddableFlowsQueryKey>
  >({
    queryKey: getApiEmbeddableFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.embeddable_flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiEmbeddableFlows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.embeddable_flows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmbeddableFlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEmbeddableFlowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiEmbeddableFlowsMutationKey() {
  return ['api', '/api/embeddable_flows', 'POST'] as const
}

export function getPostApiEmbeddableFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.embeddable_flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiEmbeddableFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.embeddable_flows.$post>) {
      return parseResponse(client.api.embeddable_flows.$post(args, options))
    },
  })
}

export function injectPostApiEmbeddableFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.embeddable_flows.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.embeddable_flows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiEmbeddableFlowsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiEmbeddableFlowsIdQueryKey(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/embeddable_flows/:id', keyArgs] as const
}

export function getApiEmbeddableFlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEmbeddableFlowsIdQueryKey>
  >({
    queryKey: getApiEmbeddableFlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.embeddable_flows[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiEmbeddableFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.embeddable_flows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEmbeddableFlowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiEmbeddableFlowsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiEmbeddableFlowsIdMutationKey() {
  return ['api', '/api/embeddable_flows/:id', 'PATCH'] as const
}

export function getPatchApiEmbeddableFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiEmbeddableFlowsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.embeddable_flows[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiEmbeddableFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.embeddable_flows)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.embeddable_flows)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiEmbeddableFlowsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiEventsQueryKey(args: InferRequestType<typeof client.api.events.$get>) {
  return ['api', '/api/events', args] as const
}

export function getApiEventsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.events.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiEventsQueryKey>
  >({
    queryKey: getApiEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.events.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiEvents<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.events.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.events.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEventsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiEventsIdQueryKey(
  args: InferRequestType<(typeof client.api.events)[':id']['$get']>,
) {
  return ['api', '/api/events/:id', args] as const
}

export function getApiEventsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.events)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiEventsIdQueryKey>
  >({
    queryKey: getApiEventsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.events[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiEventsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.events)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.events)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiEventsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiEventsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiExpectedPaymentsQueryKey(
  args: InferRequestType<typeof client.api.expected_payments.$get>,
) {
  return ['api', '/api/expected_payments', args] as const
}

export function getApiExpectedPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.expected_payments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExpectedPaymentsQueryKey>
  >({
    queryKey: getApiExpectedPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.expected_payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiExpectedPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.expected_payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExpectedPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiExpectedPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiExpectedPaymentsMutationKey() {
  return ['api', '/api/expected_payments', 'POST'] as const
}

export function getPostApiExpectedPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.expected_payments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExpectedPaymentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.expected_payments.$post>) {
      return parseResponse(client.api.expected_payments.$post(args, options))
    },
  })
}

export function injectPostApiExpectedPayments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.expected_payments.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.expected_payments.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiExpectedPaymentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiExpectedPaymentsIdQueryKey(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
) {
  return ['api', '/api/expected_payments/:id', args] as const
}

export function getApiExpectedPaymentsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExpectedPaymentsIdQueryKey>
  >({
    queryKey: getApiExpectedPaymentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.expected_payments[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiExpectedPaymentsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.expected_payments)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExpectedPaymentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiExpectedPaymentsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiExpectedPaymentsIdMutationKey() {
  return ['api', '/api/expected_payments/:id', 'DELETE'] as const
}

export function getDeleteApiExpectedPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiExpectedPaymentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.expected_payments[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiExpectedPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.expected_payments)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiExpectedPaymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiExpectedPaymentsIdMutationKey() {
  return ['api', '/api/expected_payments/:id', 'PATCH'] as const
}

export function getPatchApiExpectedPaymentsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiExpectedPaymentsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.expected_payments[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiExpectedPaymentsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.expected_payments)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.expected_payments)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiExpectedPaymentsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiExternalAccountsQueryKey(
  args: InferRequestType<typeof client.api.external_accounts.$get>,
) {
  return ['api', '/api/external_accounts', args] as const
}

export function getApiExternalAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.external_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalAccountsQueryKey>
  >({
    queryKey: getApiExternalAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.external_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiExternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.external_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExternalAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiExternalAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiExternalAccountsMutationKey() {
  return ['api', '/api/external_accounts', 'POST'] as const
}

export function getPostApiExternalAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.external_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.external_accounts.$post>) {
      return parseResponse(client.api.external_accounts.$post(args, options))
    },
  })
}

export function injectPostApiExternalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.external_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.external_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiExternalAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiExternalAccountsIdQueryKey(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
) {
  return ['api', '/api/external_accounts/:id', args] as const
}

export function getApiExternalAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiExternalAccountsIdQueryKey>
  >({
    queryKey: getApiExternalAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.external_accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiExternalAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.external_accounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiExternalAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiExternalAccountsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiExternalAccountsIdMutationKey() {
  return ['api', '/api/external_accounts/:id', 'DELETE'] as const
}

export function getDeleteApiExternalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiExternalAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.external_accounts[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiExternalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.external_accounts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiExternalAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiExternalAccountsIdMutationKey() {
  return ['api', '/api/external_accounts/:id', 'PATCH'] as const
}

export function getPatchApiExternalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiExternalAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.external_accounts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiExternalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.external_accounts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiExternalAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiExternalAccountsIdCompleteVerificationMutationKey() {
  return ['api', '/api/external_accounts/:id/complete_verification', 'POST'] as const
}

export function getPostApiExternalAccountsIdCompleteVerificationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalAccountsIdCompleteVerificationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
      >,
    ) {
      return parseResponse(
        client.api.external_accounts[':id'].complete_verification.$post(args, options),
      )
    },
  })
}

export function injectPostApiExternalAccountsIdCompleteVerification<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.external_accounts)[':id']['complete_verification']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiExternalAccountsIdCompleteVerificationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiExternalAccountsIdVerifyMutationKey() {
  return ['api', '/api/external_accounts/:id/verify', 'POST'] as const
}

export function getPostApiExternalAccountsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiExternalAccountsIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
    ) {
      return parseResponse(client.api.external_accounts[':id'].verify.$post(args, options))
    },
  })
}

export function injectPostApiExternalAccountsIdVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.external_accounts)[':id']['verify']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.external_accounts)[':id']['verify']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiExternalAccountsIdVerifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiForeignExchangeQuotesQueryKey(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
) {
  return ['api', '/api/foreign_exchange_quotes', args] as const
}

export function getApiForeignExchangeQuotesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiForeignExchangeQuotesQueryKey>
  >({
    queryKey: getApiForeignExchangeQuotesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.foreign_exchange_quotes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiForeignExchangeQuotes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.foreign_exchange_quotes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiForeignExchangeQuotesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiForeignExchangeQuotesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiForeignExchangeQuotesMutationKey() {
  return ['api', '/api/foreign_exchange_quotes', 'POST'] as const
}

export function getPostApiForeignExchangeQuotesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.foreign_exchange_quotes.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiForeignExchangeQuotesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.foreign_exchange_quotes.$post>) {
      return parseResponse(client.api.foreign_exchange_quotes.$post(args, options))
    },
  })
}

export function injectPostApiForeignExchangeQuotes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.foreign_exchange_quotes.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.foreign_exchange_quotes.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiForeignExchangeQuotesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiForeignExchangeQuotesIdQueryKey(
  args: InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
) {
  return ['api', '/api/foreign_exchange_quotes/:id', args] as const
}

export function getApiForeignExchangeQuotesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiForeignExchangeQuotesIdQueryKey>
  >({
    queryKey: getApiForeignExchangeQuotesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.foreign_exchange_quotes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiForeignExchangeQuotesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.foreign_exchange_quotes)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiForeignExchangeQuotesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiForeignExchangeQuotesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiHoldsQueryKey(args: InferRequestType<typeof client.api.holds.$get>) {
  return ['api', '/api/holds', args] as const
}

export function getApiHoldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.holds.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiHoldsQueryKey>
  >({
    queryKey: getApiHoldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.holds.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiHolds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.holds.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiHoldsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiHoldsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiHoldsMutationKey() {
  return ['api', '/api/holds', 'POST'] as const
}

export function getPostApiHoldsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.holds.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiHoldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.holds.$post>) {
      return parseResponse(client.api.holds.$post(args, options))
    },
  })
}

export function injectPostApiHolds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.holds.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.holds.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiHoldsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiHoldsIdQueryKey(
  args: InferRequestType<(typeof client.api.holds)[':id']['$get']>,
) {
  return ['api', '/api/holds/:id', args] as const
}

export function getApiHoldsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.holds)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiHoldsIdQueryKey>
  >({
    queryKey: getApiHoldsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.holds[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiHoldsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.holds)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiHoldsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiHoldsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiHoldsIdMutationKey() {
  return ['api', '/api/holds/:id', 'PATCH'] as const
}

export function getPatchApiHoldsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.holds)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiHoldsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.holds)[':id']['$patch']>) {
      return parseResponse(client.api.holds[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiHoldsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.holds)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.holds)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiHoldsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiIdentificationsMutationKey() {
  return ['api', '/api/identifications', 'POST'] as const
}

export function getPostApiIdentificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.identifications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.identifications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiIdentificationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.identifications.$post>) {
      return parseResponse(client.api.identifications.$post(args, options))
    },
  })
}

export function injectPostApiIdentifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.identifications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.identifications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiIdentificationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiIdentificationsIdQueryKey(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
) {
  return ['api', '/api/identifications/:id', args] as const
}

export function getApiIdentificationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIdentificationsIdQueryKey>
  >({
    queryKey: getApiIdentificationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.identifications[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiIdentificationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.identifications)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.identifications)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIdentificationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiIdentificationsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiIdentificationsIdMutationKey() {
  return ['api', '/api/identifications/:id', 'PATCH'] as const
}

export function getPatchApiIdentificationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.identifications)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.identifications)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIdentificationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.identifications)[':id']['$patch']>) {
      return parseResponse(client.api.identifications[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiIdentificationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.identifications)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.identifications)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiIdentificationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiIncomingPaymentDetailsQueryKey(
  args: InferRequestType<typeof client.api.incoming_payment_details.$get>,
) {
  return ['api', '/api/incoming_payment_details', args] as const
}

export function getApiIncomingPaymentDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.incoming_payment_details.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIncomingPaymentDetailsQueryKey>
  >({
    queryKey: getApiIncomingPaymentDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.incoming_payment_details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiIncomingPaymentDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.incoming_payment_details.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.incoming_payment_details.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIncomingPaymentDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiIncomingPaymentDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiIncomingPaymentDetailsIdQueryKey(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
) {
  return ['api', '/api/incoming_payment_details/:id', args] as const
}

export function getApiIncomingPaymentDetailsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiIncomingPaymentDetailsIdQueryKey>
  >({
    queryKey: getApiIncomingPaymentDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.incoming_payment_details[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiIncomingPaymentDetailsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiIncomingPaymentDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiIncomingPaymentDetailsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiIncomingPaymentDetailsIdMutationKey() {
  return ['api', '/api/incoming_payment_details/:id', 'PATCH'] as const
}

export function getPatchApiIncomingPaymentDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiIncomingPaymentDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.incoming_payment_details[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiIncomingPaymentDetailsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.incoming_payment_details)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.incoming_payment_details)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiIncomingPaymentDetailsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInternalAccountsQueryKey(
  args: InferRequestType<typeof client.api.internal_accounts.$get>,
) {
  return ['api', '/api/internal_accounts', args] as const
}

export function getApiInternalAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.internal_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsQueryKey>
  >({
    queryKey: getApiInternalAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.internal_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiInternalAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.internal_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInternalAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInternalAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiInternalAccountsMutationKey() {
  return ['api', '/api/internal_accounts', 'POST'] as const
}

export function getPostApiInternalAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.internal_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInternalAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.internal_accounts.$post>) {
      return parseResponse(client.api.internal_accounts.$post(args, options))
    },
  })
}

export function injectPostApiInternalAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.internal_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.internal_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInternalAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInternalAccountsIdQueryKey(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
) {
  return ['api', '/api/internal_accounts/:id', args] as const
}

export function getApiInternalAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsIdQueryKey>
  >({
    queryKey: getApiInternalAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.internal_accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiInternalAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.internal_accounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInternalAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiInternalAccountsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiInternalAccountsIdMutationKey() {
  return ['api', '/api/internal_accounts/:id', 'PATCH'] as const
}

export function getPatchApiInternalAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInternalAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.internal_accounts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiInternalAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.internal_accounts)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.internal_accounts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiInternalAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiInternalAccountsIdRequestClosureMutationKey() {
  return ['api', '/api/internal_accounts/:id/request_closure', 'POST'] as const
}

export function getPostApiInternalAccountsIdRequestClosureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInternalAccountsIdRequestClosureMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':id']['request_closure']['$post']
      >,
    ) {
      return parseResponse(client.api.internal_accounts[':id'].request_closure.$post(args, options))
    },
  })
}

export function injectPostApiInternalAccountsIdRequestClosure<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.internal_accounts)[':id']['request_closure']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInternalAccountsIdRequestClosureMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationKey() {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/account_capabilities/:id',
    'PATCH',
  ] as const
}

export function getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].account_capabilities[':id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.internal_accounts)[':internal_account_id']['account_capabilities'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchApiInternalAccountsInternalAccountIdAccountCapabilitiesIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
) {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports', args] as const
}

export function getApiInternalAccountsInternalAccountIdBalanceReportsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey>
  >({
    queryKey: getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiInternalAccountsInternalAccountIdBalanceReports<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiInternalAccountsInternalAccountIdBalanceReportsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationKey() {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports', 'POST'] as const
}

export function getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
      >,
    ) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports.$post(args, options),
      )
    },
  })
}

export function injectPostApiInternalAccountsInternalAccountIdBalanceReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiInternalAccountsInternalAccountIdBalanceReportsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
) {
  return ['api', '/api/internal_accounts/:internal_account_id/balance_reports/:id', args] as const
}

export function getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey>
  >({
    queryKey: getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiInternalAccountsInternalAccountIdBalanceReportsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiInternalAccountsInternalAccountIdBalanceReportsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationKey() {
  return [
    'api',
    '/api/internal_accounts/:internal_account_id/balance_reports/:id',
    'DELETE',
  ] as const
}

export function getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.internal_accounts[':internal_account_id'].balance_reports[':id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiInternalAccountsInternalAccountIdBalanceReportsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.internal_accounts)[':internal_account_id']['balance_reports'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiInternalAccountsInternalAccountIdBalanceReportsIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInvoicesQueryKey(args: InferRequestType<typeof client.api.invoices.$get>) {
  return ['api', '/api/invoices', args] as const
}

export function getApiInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesQueryKey>
  >({
    queryKey: getApiInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiInvoicesMutationKey() {
  return ['api', '/api/invoices', 'POST'] as const
}

export function getPostApiInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.invoices.$post>) {
      return parseResponse(client.api.invoices.$post(args, options))
    },
  })
}

export function injectPostApiInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.invoices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.invoices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInvoicesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
) {
  return ['api', '/api/invoices/:id', args] as const
}

export function getApiInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesIdQueryKey>
  >({
    queryKey: getApiInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiInvoicesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiInvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiInvoicesIdMutationKey() {
  return ['api', '/api/invoices/:id', 'PATCH'] as const
}

export function getPatchApiInvoicesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.invoices)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.invoices)[':id']['$patch']>) {
      return parseResponse(client.api.invoices[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.invoices)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.invoices)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiInvoicesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationKey() {
  return ['api', '/api/invoices/:id/payment_orders/:payment_order_id', 'PUT'] as const
}

export function getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':id'].payment_orders[':payment_order_id'].$put(args, options),
      )
    },
  })
}

export function injectPutApiInvoicesIdPaymentOrdersPaymentOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.invoices)[':id']['payment_orders'][':payment_order_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiInvoicesIdPaymentOrdersPaymentOrderIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey(
  args: InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>,
) {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items', args] as const
}

export function getApiInvoicesInvoiceIdInvoiceLineItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey>
  >({
    queryKey: getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiInvoicesInvoiceIdInvoiceLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiInvoicesInvoiceIdInvoiceLineItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items', 'POST'] as const
}

export function getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items.$post(args, options),
      )
    },
  })
}

export function injectPostApiInvoicesInvoiceIdInvoiceLineItems<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.invoices)[':invoice_id']['invoice_line_items']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiInvoicesInvoiceIdInvoiceLineItemsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
) {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', args] as const
}

export function getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey>
  >({
    queryKey: getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiInvoicesInvoiceIdInvoiceLineItemsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiInvoicesInvoiceIdInvoiceLineItemsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', 'DELETE'] as const
}

export function getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items[':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiInvoicesInvoiceIdInvoiceLineItemsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey() {
  return ['api', '/api/invoices/:invoice_id/invoice_line_items/:id', 'PATCH'] as const
}

export function getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.invoices[':invoice_id'].invoice_line_items[':id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiInvoicesInvoiceIdInvoiceLineItemsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.invoices)[':invoice_id']['invoice_line_items'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiInvoicesInvoiceIdInvoiceLineItemsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiJournalEntriesQueryKey(
  args: InferRequestType<typeof client.api.journal_entries.$get>,
) {
  return ['api', '/api/journal_entries', args] as const
}

export function getApiJournalEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.journal_entries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalEntriesQueryKey>
  >({
    queryKey: getApiJournalEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.journal_entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiJournalEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.journal_entries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJournalEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJournalEntriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiJournalEntriesIdQueryKey(
  args: InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
) {
  return ['api', '/api/journal_entries/:id', args] as const
}

export function getApiJournalEntriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalEntriesIdQueryKey>
  >({
    queryKey: getApiJournalEntriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.journal_entries[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJournalEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.journal_entries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.journal_entries)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJournalEntriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJournalEntriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiJournalReportsQueryKey(
  args: InferRequestType<typeof client.api.journal_reports.$get>,
) {
  return ['api', '/api/journal_reports', args] as const
}

export function getApiJournalReportsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.journal_reports.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalReportsQueryKey>
  >({
    queryKey: getApiJournalReportsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.journal_reports.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiJournalReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.journal_reports.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_reports.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJournalReportsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJournalReportsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiJournalReportsIdQueryKey(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
) {
  return ['api', '/api/journal_reports/:id', args] as const
}

export function getApiJournalReportsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalReportsIdQueryKey>
  >({
    queryKey: getApiJournalReportsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.journal_reports[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJournalReportsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.journal_reports)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJournalReportsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJournalReportsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiJournalReportsIdMutationKey() {
  return ['api', '/api/journal_reports/:id', 'PATCH'] as const
}

export function getPatchApiJournalReportsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiJournalReportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>) {
      return parseResponse(client.api.journal_reports[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiJournalReportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.journal_reports)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.journal_reports)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiJournalReportsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiJournalSourcesQueryKey(
  args: InferRequestType<typeof client.api.journal_sources.$get>,
) {
  return ['api', '/api/journal_sources', args] as const
}

export function getApiJournalSourcesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.journal_sources.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalSourcesQueryKey>
  >({
    queryKey: getApiJournalSourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.journal_sources.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiJournalSources<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.journal_sources.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.journal_sources.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJournalSourcesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJournalSourcesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiJournalSourcesIdQueryKey(
  args: InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
) {
  return ['api', '/api/journal_sources/:id', args] as const
}

export function getApiJournalSourcesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiJournalSourcesIdQueryKey>
  >({
    queryKey: getApiJournalSourcesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.journal_sources[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiJournalSourcesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.journal_sources)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.journal_sources)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiJournalSourcesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiJournalSourcesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiLedgerAccountBalanceMonitorsQueryKey(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
) {
  return ['api', '/api/ledger_account_balance_monitors', args] as const
}

export function getApiLedgerAccountBalanceMonitorsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountBalanceMonitorsQueryKey>
  >({
    queryKey: getApiLedgerAccountBalanceMonitorsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_balance_monitors.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountBalanceMonitors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_account_balance_monitors.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountBalanceMonitorsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountBalanceMonitorsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiLedgerAccountBalanceMonitorsMutationKey() {
  return ['api', '/api/ledger_account_balance_monitors', 'POST'] as const
}

export function getPostApiLedgerAccountBalanceMonitorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountBalanceMonitorsMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
    ) {
      return parseResponse(client.api.ledger_account_balance_monitors.$post(args, options))
    },
  })
}

export function injectPostApiLedgerAccountBalanceMonitors<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_balance_monitors.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.ledger_account_balance_monitors.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerAccountBalanceMonitorsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountBalanceMonitorsIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_balance_monitors/:id', args] as const
}

export function getApiLedgerAccountBalanceMonitorsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountBalanceMonitorsIdQueryKey>
  >({
    queryKey: getApiLedgerAccountBalanceMonitorsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_balance_monitors[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountBalanceMonitorsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountBalanceMonitorsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountBalanceMonitorsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiLedgerAccountBalanceMonitorsIdMutationKey() {
  return ['api', '/api/ledger_account_balance_monitors/:id', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountBalanceMonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountBalanceMonitorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.ledger_account_balance_monitors[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiLedgerAccountBalanceMonitorsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLedgerAccountBalanceMonitorsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiLedgerAccountBalanceMonitorsIdMutationKey() {
  return ['api', '/api/ledger_account_balance_monitors/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountBalanceMonitorsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountBalanceMonitorsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_account_balance_monitors[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgerAccountBalanceMonitorsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_account_balance_monitors)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerAccountBalanceMonitorsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountCategoriesQueryKey(
  args: InferRequestType<typeof client.api.ledger_account_categories.$get>,
) {
  return ['api', '/api/ledger_account_categories', args] as const
}

export function getApiLedgerAccountCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ledger_account_categories.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountCategoriesQueryKey>
  >({
    queryKey: getApiLedgerAccountCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_categories.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_account_categories.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_categories.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountCategoriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiLedgerAccountCategoriesMutationKey() {
  return ['api', '/api/ledger_account_categories', 'POST'] as const
}

export function getPostApiLedgerAccountCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_categories.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_categories.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_account_categories.$post>) {
      return parseResponse(client.api.ledger_account_categories.$post(args, options))
    },
  })
}

export function injectPostApiLedgerAccountCategories<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_categories.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.ledger_account_categories.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerAccountCategoriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountCategoriesIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_categories/:id', args] as const
}

export function getApiLedgerAccountCategoriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountCategoriesIdQueryKey>
  >({
    queryKey: getApiLedgerAccountCategoriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountCategoriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountCategoriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountCategoriesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiLedgerAccountCategoriesIdMutationKey() {
  return ['api', '/api/ledger_account_categories/:id', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.ledger_account_categories[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiLedgerAccountCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLedgerAccountCategoriesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiLedgerAccountCategoriesIdMutationKey() {
  return ['api', '/api/ledger_account_categories/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountCategoriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountCategoriesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_account_categories[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgerAccountCategoriesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_account_categories)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_account_categories)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerAccountCategoriesIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id',
    'PUT',
  ] as const
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_account_categories[
          ':sub_category_id'
        ].$put(args, options),
      )
    },
  })
}

export function injectPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_account_categories/:sub_category_id',
    'DELETE',
  ] as const
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_account_categories[
          ':sub_category_id'
        ].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.ledger_account_categories)[':id']['ledger_account_categories'][':sub_category_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiLedgerAccountCategoriesIdLedgerAccountCategoriesSubCategoryIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id',
    'PUT',
  ] as const
}

export function getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$put']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey() {
  return [
    'api',
    '/api/ledger_account_categories/:id/ledger_accounts/:ledger_account_id',
    'DELETE',
  ] as const
}

export function getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_categories[':id'].ledger_accounts[':ledger_account_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.ledger_account_categories)[':id']['ledger_accounts'][':ledger_account_id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteApiLedgerAccountCategoriesIdLedgerAccountsLedgerAccountIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountSettlementsQueryKey(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$get>,
) {
  return ['api', '/api/ledger_account_settlements', args] as const
}

export function getApiLedgerAccountSettlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ledger_account_settlements.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountSettlementsQueryKey>
  >({
    queryKey: getApiLedgerAccountSettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_settlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_account_settlements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_settlements.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountSettlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountSettlementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiLedgerAccountSettlementsMutationKey() {
  return ['api', '/api/ledger_account_settlements', 'POST'] as const
}

export function getPostApiLedgerAccountSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_account_settlements.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_settlements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountSettlementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_account_settlements.$post>) {
      return parseResponse(client.api.ledger_account_settlements.$post(args, options))
    },
  })
}

export function injectPostApiLedgerAccountSettlements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_settlements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.ledger_account_settlements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerAccountSettlementsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountSettlementsIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_settlements/:id', args] as const
}

export function getApiLedgerAccountSettlementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountSettlementsIdQueryKey>
  >({
    queryKey: getApiLedgerAccountSettlementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_settlements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountSettlementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountSettlementsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountSettlementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiLedgerAccountSettlementsIdMutationKey() {
  return ['api', '/api/ledger_account_settlements/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountSettlementsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountSettlementsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_account_settlements[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgerAccountSettlementsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_account_settlements)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerAccountSettlementsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationKey() {
  return ['api', '/api/ledger_account_settlements/:id/ledger_entries', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_settlements[':id'].ledger_entries.$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiLedgerAccountSettlementsIdLedgerEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationKey() {
  return ['api', '/api/ledger_account_settlements/:id/ledger_entries', 'PATCH'] as const
}

export function getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.ledger_account_settlements[':id'].ledger_entries.$patch(args, options),
      )
    },
  })
}

export function injectPatchApiLedgerAccountSettlementsIdLedgerEntries<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.ledger_account_settlements)[':id']['ledger_entries']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerAccountSettlementsIdLedgerEntriesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiLedgerAccountStatementsMutationKey() {
  return ['api', '/api/ledger_account_statements', 'POST'] as const
}

export function getPostApiLedgerAccountStatementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_account_statements.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_account_statements.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountStatementsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_account_statements.$post>) {
      return parseResponse(client.api.ledger_account_statements.$post(args, options))
    },
  })
}

export function injectPostApiLedgerAccountStatements<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_account_statements.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.ledger_account_statements.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerAccountStatementsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountStatementsIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
) {
  return ['api', '/api/ledger_account_statements/:id', args] as const
}

export function getApiLedgerAccountStatementsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountStatementsIdQueryKey>
  >({
    queryKey: getApiLedgerAccountStatementsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_account_statements[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountStatementsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_account_statements)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_account_statements)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountStatementsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerAccountStatementsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiLedgerAccountsQueryKey(
  args: InferRequestType<typeof client.api.ledger_accounts.$get>,
) {
  return ['api', '/api/ledger_accounts', args] as const
}

export function getApiLedgerAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.ledger_accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountsQueryKey>
  >({
    queryKey: getApiLedgerAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLedgerAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLedgerAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiLedgerAccountsMutationKey() {
  return ['api', '/api/ledger_accounts', 'POST'] as const
}

export function getPostApiLedgerAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.ledger_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_accounts.$post>) {
      return parseResponse(client.api.ledger_accounts.$post(args, options))
    },
  })
}

export function injectPostApiLedgerAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.ledger_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerAccountsIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
) {
  return ['api', '/api/ledger_accounts/:id', args] as const
}

export function getApiLedgerAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerAccountsIdQueryKey>
  >({
    queryKey: getApiLedgerAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_accounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLedgerAccountsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiLedgerAccountsIdMutationKey() {
  return ['api', '/api/ledger_accounts/:id', 'DELETE'] as const
}

export function getDeleteApiLedgerAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgerAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.ledger_accounts[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiLedgerAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_accounts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLedgerAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiLedgerAccountsIdMutationKey() {
  return ['api', '/api/ledger_accounts/:id', 'PATCH'] as const
}

export function getPatchApiLedgerAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerAccountsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>) {
      return parseResponse(client.api.ledger_accounts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgerAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_accounts)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_accounts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerEntriesQueryKey(
  args: InferRequestType<typeof client.api.ledger_entries.$get>,
) {
  return ['api', '/api/ledger_entries', args] as const
}

export function getApiLedgerEntriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.ledger_entries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerEntriesQueryKey>
  >({
    queryKey: getApiLedgerEntriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_entries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLedgerEntries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_entries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_entries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerEntriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLedgerEntriesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiLedgerEntriesIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
) {
  return ['api', '/api/ledger_entries/:id', args] as const
}

export function getApiLedgerEntriesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerEntriesIdQueryKey>
  >({
    queryKey: getApiLedgerEntriesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_entries[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerEntriesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_entries)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerEntriesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLedgerEntriesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiLedgerEntriesIdMutationKey() {
  return ['api', '/api/ledger_entries/:id', 'PATCH'] as const
}

export function getPatchApiLedgerEntriesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerEntriesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>) {
      return parseResponse(client.api.ledger_entries[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgerEntriesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_entries)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_entries)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerEntriesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerTransactionVersionsQueryKey(
  args: InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
) {
  return ['api', '/api/ledger_transaction_versions', args] as const
}

export function getApiLedgerTransactionVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionVersionsQueryKey>
  >({
    queryKey: getApiLedgerTransactionVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_transaction_versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerTransactionVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_transaction_versions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.ledger_transaction_versions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerTransactionVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerTransactionVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiLedgerTransactionsQueryKey(
  args: InferRequestType<typeof client.api.ledger_transactions.$get>,
) {
  return ['api', '/api/ledger_transactions', args] as const
}

export function getApiLedgerTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.ledger_transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionsQueryKey>
  >({
    queryKey: getApiLedgerTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledger_transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiLedgerTransactionsMutationKey() {
  return ['api', '/api/ledger_transactions', 'POST'] as const
}

export function getPostApiLedgerTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.ledger_transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledger_transactions.$post>) {
      return parseResponse(client.api.ledger_transactions.$post(args, options))
    },
  })
}

export function injectPostApiLedgerTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.ledger_transactions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.ledger_transactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerTransactionsIdQueryKey(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
) {
  return ['api', '/api/ledger_transactions/:id', args] as const
}

export function getApiLedgerTransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionsIdQueryKey>
  >({
    queryKey: getApiLedgerTransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_transactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerTransactionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerTransactionsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiLedgerTransactionsIdMutationKey() {
  return ['api', '/api/ledger_transactions/:id', 'PATCH'] as const
}

export function getPatchApiLedgerTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgerTransactionsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.ledger_transactions[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgerTransactionsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_transactions)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgerTransactionsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiLedgerTransactionsIdPartialPostMutationKey() {
  return ['api', '/api/ledger_transactions/:id/partial_post', 'POST'] as const
}

export function getPostApiLedgerTransactionsIdPartialPostMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerTransactionsIdPartialPostMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.ledger_transactions)[':id']['partial_post']['$post']
      >,
    ) {
      return parseResponse(client.api.ledger_transactions[':id'].partial_post.$post(args, options))
    },
  })
}

export function injectPostApiLedgerTransactionsIdPartialPost<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<(typeof client.api.ledger_transactions)[':id']['partial_post']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerTransactionsIdPartialPostMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiLedgerTransactionsIdReversalMutationKey() {
  return ['api', '/api/ledger_transactions/:id/reversal', 'POST'] as const
}

export function getPostApiLedgerTransactionsIdReversalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgerTransactionsIdReversalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
    ) {
      return parseResponse(client.api.ledger_transactions[':id'].reversal.$post(args, options))
    },
  })
}

export function injectPostApiLedgerTransactionsIdReversal<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledger_transactions)[':id']['reversal']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgerTransactionsIdReversalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgerTransactionsIdVersionsQueryKey(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
) {
  return ['api', '/api/ledger_transactions/:id/versions', args] as const
}

export function getApiLedgerTransactionsIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgerTransactionsIdVersionsQueryKey>
  >({
    queryKey: getApiLedgerTransactionsIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledger_transactions[':id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLedgerTransactionsIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.ledger_transactions)[':id']['versions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgerTransactionsIdVersionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiLedgerTransactionsIdVersionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiLedgersQueryKey(args: InferRequestType<typeof client.api.ledgers.$get>) {
  return ['api', '/api/ledgers', args] as const
}

export function getApiLedgersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.ledgers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiLedgersQueryKey>
  >({
    queryKey: getApiLedgersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledgers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLedgers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.ledgers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLedgersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiLedgersMutationKey() {
  return ['api', '/api/ledgers', 'POST'] as const
}

export function getPostApiLedgersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.ledgers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLedgersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.ledgers.$post>) {
      return parseResponse(client.api.ledgers.$post(args, options))
    },
  })
}

export function injectPostApiLedgers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ledgers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.ledgers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLedgersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLedgersIdQueryKey(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
) {
  return ['api', '/api/ledgers/:id', args] as const
}

export function getApiLedgersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLedgersIdQueryKey>
  >({
    queryKey: getApiLedgersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ledgers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLedgersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.ledgers)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLedgersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLedgersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiLedgersIdMutationKey() {
  return ['api', '/api/ledgers/:id', 'DELETE'] as const
}

export function getDeleteApiLedgersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLedgersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>) {
      return parseResponse(client.api.ledgers[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiLedgersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledgers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLedgersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiLedgersIdMutationKey() {
  return ['api', '/api/ledgers/:id', 'PATCH'] as const
}

export function getPatchApiLedgersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLedgersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>) {
      return parseResponse(client.api.ledgers[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLedgersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.ledgers)[':id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.ledgers)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLedgersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLegalEntitiesQueryKey(
  args: InferRequestType<typeof client.api.legal_entities.$get>,
) {
  return ['api', '/api/legal_entities', args] as const
}

export function getApiLegalEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.legal_entities.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLegalEntitiesQueryKey>
  >({
    queryKey: getApiLegalEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.legal_entities.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLegalEntities<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.legal_entities.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLegalEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLegalEntitiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiLegalEntitiesMutationKey() {
  return ['api', '/api/legal_entities', 'POST'] as const
}

export function getPostApiLegalEntitiesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.legal_entities.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLegalEntitiesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.legal_entities.$post>) {
      return parseResponse(client.api.legal_entities.$post(args, options))
    },
  })
}

export function injectPostApiLegalEntities<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entities.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.legal_entities.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLegalEntitiesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLegalEntitiesIdQueryKey(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/legal_entities/:id', keyArgs] as const
}

export function getApiLegalEntitiesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLegalEntitiesIdQueryKey>
  >({
    queryKey: getApiLegalEntitiesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.legal_entities[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLegalEntitiesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.legal_entities)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLegalEntitiesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLegalEntitiesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiLegalEntitiesIdMutationKey() {
  return ['api', '/api/legal_entities/:id', 'PATCH'] as const
}

export function getPatchApiLegalEntitiesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLegalEntitiesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>) {
      return parseResponse(client.api.legal_entities[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLegalEntitiesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.legal_entities)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.legal_entities)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiLegalEntitiesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiLegalEntityAssociationsMutationKey() {
  return ['api', '/api/legal_entity_associations', 'POST'] as const
}

export function getPostApiLegalEntityAssociationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.legal_entity_associations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.legal_entity_associations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLegalEntityAssociationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.legal_entity_associations.$post>) {
      return parseResponse(client.api.legal_entity_associations.$post(args, options))
    },
  })
}

export function injectPostApiLegalEntityAssociations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.legal_entity_associations.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.legal_entity_associations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiLegalEntityAssociationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiLegalEntityAssociationsIdMutationKey() {
  return ['api', '/api/legal_entity_associations/:id', 'DELETE'] as const
}

export function getDeleteApiLegalEntityAssociationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.legal_entity_associations)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLegalEntityAssociationsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.legal_entity_associations[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiLegalEntityAssociationsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.legal_entity_associations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.legal_entity_associations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiLegalEntityAssociationsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentActionsQueryKey(
  args: InferRequestType<typeof client.api.payment_actions.$get>,
) {
  return ['api', '/api/payment_actions', args] as const
}

export function getApiPaymentActionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.payment_actions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentActionsQueryKey>
  >({
    queryKey: getApiPaymentActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_actions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPaymentActions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.payment_actions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentActionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiPaymentActionsMutationKey() {
  return ['api', '/api/payment_actions', 'POST'] as const
}

export function getPostApiPaymentActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.payment_actions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_actions.$post>) {
      return parseResponse(client.api.payment_actions.$post(args, options))
    },
  })
}

export function injectPostApiPaymentActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_actions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.payment_actions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPaymentActionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentActionsIdQueryKey(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
) {
  return ['api', '/api/payment_actions/:id', args] as const
}

export function getApiPaymentActionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentActionsIdQueryKey>
  >({
    queryKey: getApiPaymentActionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_actions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentActionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.payment_actions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentActionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentActionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiPaymentActionsIdMutationKey() {
  return ['api', '/api/payment_actions/:id', 'PATCH'] as const
}

export function getPatchApiPaymentActionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPaymentActionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>) {
      return parseResponse(client.api.payment_actions[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiPaymentActionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_actions)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.payment_actions)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiPaymentActionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentFlowsQueryKey(
  args: InferRequestType<typeof client.api.payment_flows.$get>,
) {
  return ['api', '/api/payment_flows', args] as const
}

export function getApiPaymentFlowsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.payment_flows.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentFlowsQueryKey>
  >({
    queryKey: getApiPaymentFlowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_flows.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPaymentFlows<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.payment_flows.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentFlowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentFlowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiPaymentFlowsMutationKey() {
  return ['api', '/api/payment_flows', 'POST'] as const
}

export function getPostApiPaymentFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.payment_flows.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentFlowsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_flows.$post>) {
      return parseResponse(client.api.payment_flows.$post(args, options))
    },
  })
}

export function injectPostApiPaymentFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_flows.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.payment_flows.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPaymentFlowsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentFlowsIdQueryKey(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment_flows/:id', keyArgs] as const
}

export function getApiPaymentFlowsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentFlowsIdQueryKey>
  >({
    queryKey: getApiPaymentFlowsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_flows[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentFlowsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.payment_flows)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentFlowsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentFlowsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiPaymentFlowsIdMutationKey() {
  return ['api', '/api/payment_flows/:id', 'PATCH'] as const
}

export function getPatchApiPaymentFlowsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPaymentFlowsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>) {
      return parseResponse(client.api.payment_flows[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiPaymentFlowsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_flows)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.payment_flows)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiPaymentFlowsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentOrdersQueryKey(
  args: InferRequestType<typeof client.api.payment_orders.$get>,
) {
  return ['api', '/api/payment_orders', args] as const
}

export function getApiPaymentOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.payment_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersQueryKey>
  >({
    queryKey: getApiPaymentOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPaymentOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.payment_orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiPaymentOrdersMutationKey() {
  return ['api', '/api/payment_orders', 'POST'] as const
}

export function getPostApiPaymentOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.payment_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_orders.$post>) {
      return parseResponse(client.api.payment_orders.$post(args, options))
    },
  })
}

export function injectPostApiPaymentOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_orders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.payment_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPaymentOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiPaymentOrdersCreateAsyncMutationKey() {
  return ['api', '/api/payment_orders/create_async', 'POST'] as const
}

export function getPostApiPaymentOrdersCreateAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.payment_orders.create_async.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.payment_orders.create_async.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentOrdersCreateAsyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.payment_orders.create_async.$post>) {
      return parseResponse(client.api.payment_orders.create_async.$post(args, options))
    },
  })
}

export function injectPostApiPaymentOrdersCreateAsync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.payment_orders.create_async.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.payment_orders.create_async.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPaymentOrdersCreateAsyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentOrdersIdQueryKey(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
) {
  return ['api', '/api/payment_orders/:id', args] as const
}

export function getApiPaymentOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersIdQueryKey>
  >({
    queryKey: getApiPaymentOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.payment_orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPaymentOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiPaymentOrdersIdMutationKey() {
  return ['api', '/api/payment_orders/:id', 'PATCH'] as const
}

export function getPatchApiPaymentOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiPaymentOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>) {
      return parseResponse(client.api.payment_orders[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiPaymentOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_orders)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.payment_orders)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiPaymentOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentOrdersPaymentOrderIdReversalsQueryKey(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
) {
  return ['api', '/api/payment_orders/:payment_order_id/reversals', args] as const
}

export function getApiPaymentOrdersPaymentOrderIdReversalsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsQueryKey>
  >({
    queryKey: getApiPaymentOrdersPaymentOrderIdReversalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_orders[':payment_order_id'].reversals.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentOrdersPaymentOrderIdReversals<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPaymentOrdersPaymentOrderIdReversalsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiPaymentOrdersPaymentOrderIdReversalsMutationKey() {
  return ['api', '/api/payment_orders/:payment_order_id/reversals', 'POST'] as const
}

export function getPostApiPaymentOrdersPaymentOrderIdReversalsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentOrdersPaymentOrderIdReversalsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
      >,
    ) {
      return parseResponse(
        client.api.payment_orders[':payment_order_id'].reversals.$post(args, options),
      )
    },
  })
}

export function injectPostApiPaymentOrdersPaymentOrderIdReversals<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.payment_orders)[':payment_order_id']['reversals']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPaymentOrdersPaymentOrderIdReversalsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
) {
  return ['api', '/api/payment_orders/:payment_order_id/reversals/:reversal_id', args] as const
}

export function getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey>
  >({
    queryKey: getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_orders[':payment_order_id'].reversals[':reversal_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentOrdersPaymentOrderIdReversalsReversalId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.payment_orders)[':payment_order_id']['reversals'][':reversal_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPaymentOrdersPaymentOrderIdReversalsReversalIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiPaymentReferencesQueryKey(
  args: InferRequestType<typeof client.api.payment_references.$get>,
) {
  return ['api', '/api/payment_references', args] as const
}

export function getApiPaymentReferencesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.payment_references.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentReferencesQueryKey>
  >({
    queryKey: getApiPaymentReferencesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_references.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentReferences<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.payment_references.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.payment_references.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentReferencesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPaymentReferencesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPaymentReferencesIdQueryKey(
  args: InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
) {
  return ['api', '/api/payment_references/:id', args] as const
}

export function getApiPaymentReferencesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentReferencesIdQueryKey>
  >({
    queryKey: getApiPaymentReferencesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payment_references[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentReferencesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.payment_references)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payment_references)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentReferencesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiPaymentReferencesIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPingQueryKey() {
  return ['api', '/api/ping'] as const
}

export function getApiPingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPingQueryKey>
  >({
    queryKey: getApiPingQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.api.ping.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.ping.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiPingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPingQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getApiReturnsQueryKey(args: InferRequestType<typeof client.api.returns.$get>) {
  return ['api', '/api/returns', args] as const
}

export function getApiReturnsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.returns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiReturnsQueryKey>
  >({
    queryKey: getApiReturnsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.returns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiReturns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.returns.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiReturnsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiReturnsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiReturnsMutationKey() {
  return ['api', '/api/returns', 'POST'] as const
}

export function getPostApiReturnsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.returns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReturnsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.returns.$post>) {
      return parseResponse(client.api.returns.$post(args, options))
    },
  })
}

export function injectPostApiReturns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.returns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.returns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiReturnsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiReturnsIdQueryKey(
  args: InferRequestType<(typeof client.api.returns)[':id']['$get']>,
) {
  return ['api', '/api/returns/:id', args] as const
}

export function getApiReturnsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.returns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReturnsIdQueryKey>
  >({
    queryKey: getApiReturnsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.returns[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiReturnsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.returns)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.returns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReturnsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiReturnsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiSimulationsCasesIdResolveMutationKey() {
  return ['api', '/api/simulations/cases/:id/resolve', 'PATCH'] as const
}

export function getPatchApiSimulationsCasesIdResolveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSimulationsCasesIdResolveMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
    ) {
      return parseResponse(client.api.simulations.cases[':id'].resolve.$patch(args, options))
    },
  })
}

export function injectPatchApiSimulationsCasesIdResolve<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.simulations.cases)[':id']['resolve']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiSimulationsCasesIdResolveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationKey() {
  return ['api', '/api/simulations/incoming_payment_details/create_async', 'POST'] as const
}

export function getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<typeof client.api.simulations.incoming_payment_details.create_async.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<
        typeof client.api.simulations.incoming_payment_details.create_async.$post
      >,
    ) {
      return parseResponse(
        client.api.simulations.incoming_payment_details.create_async.$post(args, options),
      )
    },
  })
}

export function injectPostApiSimulationsIncomingPaymentDetailsCreateAsync<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  typeof client.api.simulations.incoming_payment_details.create_async.$post
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.simulations.incoming_payment_details.create_async.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiSimulationsIncomingPaymentDetailsCreateAsyncMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationKey() {
  return ['api', '/api/simulations/legal_entities/:id/update_status', 'PATCH'] as const
}

export function getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.simulations.legal_entities[':id'].update_status.$patch(args, options),
      )
    },
  })
}

export function injectPatchApiSimulationsLegalEntitiesIdUpdateStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.simulations.legal_entities)[':id']['update_status']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiSimulationsLegalEntitiesIdUpdateStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiTransactionLineItemsQueryKey(
  args: InferRequestType<typeof client.api.transaction_line_items.$get>,
) {
  return ['api', '/api/transaction_line_items', args] as const
}

export function getApiTransactionLineItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.transaction_line_items.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionLineItemsQueryKey>
  >({
    queryKey: getApiTransactionLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transaction_line_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTransactionLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.transaction_line_items.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionLineItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiTransactionLineItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiTransactionLineItemsMutationKey() {
  return ['api', '/api/transaction_line_items', 'POST'] as const
}

export function getPostApiTransactionLineItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.transaction_line_items.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.transaction_line_items.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransactionLineItemsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.transaction_line_items.$post>) {
      return parseResponse(client.api.transaction_line_items.$post(args, options))
    },
  })
}

export function injectPostApiTransactionLineItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.transaction_line_items.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.transaction_line_items.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTransactionLineItemsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiTransactionLineItemsIdQueryKey(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
) {
  return ['api', '/api/transaction_line_items/:id', args] as const
}

export function getApiTransactionLineItemsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionLineItemsIdQueryKey>
  >({
    queryKey: getApiTransactionLineItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transaction_line_items[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTransactionLineItemsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.transaction_line_items)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionLineItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiTransactionLineItemsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiTransactionLineItemsIdMutationKey() {
  return ['api', '/api/transaction_line_items/:id', 'DELETE'] as const
}

export function getDeleteApiTransactionLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransactionLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.transaction_line_items[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiTransactionLineItemsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.transaction_line_items)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.transaction_line_items)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiTransactionLineItemsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiTransactionsQueryKey(
  args: InferRequestType<typeof client.api.transactions.$get>,
) {
  return ['api', '/api/transactions', args] as const
}

export function getApiTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsQueryKey>
  >({
    queryKey: getApiTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiTransactionsMutationKey() {
  return ['api', '/api/transactions', 'POST'] as const
}

export function getPostApiTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.transactions.$post>) {
      return parseResponse(client.api.transactions.$post(args, options))
    },
  })
}

export function injectPostApiTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.transactions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.transactions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiTransactionsIdQueryKey(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
) {
  return ['api', '/api/transactions/:id', args] as const
}

export function getApiTransactionsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsIdQueryKey>
  >({
    queryKey: getApiTransactionsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transactions[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTransactionsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.transactions)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.transactions)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTransactionsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteApiTransactionsIdMutationKey() {
  return ['api', '/api/transactions/:id', 'DELETE'] as const
}

export function getDeleteApiTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.transactions)[':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.transactions)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiTransactionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.transactions)[':id']['$delete']>) {
      return parseResponse(client.api.transactions[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.transactions)[':id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.transactions)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiTransactionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiTransactionsIdMutationKey() {
  return ['api', '/api/transactions/:id', 'PATCH'] as const
}

export function getPatchApiTransactionsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.transactions)[':id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.transactions)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiTransactionsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.transactions)[':id']['$patch']>) {
      return parseResponse(client.api.transactions[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiTransactionsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.transactions)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.transactions)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiTransactionsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiTransactionsTransactionIdLineItemsQueryKey(
  args: InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>,
) {
  return ['api', '/api/transactions/:transaction_id/line_items', args] as const
}

export function getApiTransactionsTransactionIdLineItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiTransactionsTransactionIdLineItemsQueryKey>
  >({
    queryKey: getApiTransactionsTransactionIdLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.transactions[':transaction_id'].line_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiTransactionsTransactionIdLineItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.transactions)[':transaction_id']['line_items']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.transactions)[':transaction_id']['line_items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.transactions)[':transaction_id']['line_items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiTransactionsTransactionIdLineItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiTransactionsTransactionIdLineItemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiValidationsRoutingNumbersQueryKey(
  args: InferRequestType<typeof client.api.validations.routing_numbers.$get>,
) {
  return ['api', '/api/validations/routing_numbers', args] as const
}

export function getApiValidationsRoutingNumbersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.validations.routing_numbers.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiValidationsRoutingNumbersQueryKey>
  >({
    queryKey: getApiValidationsRoutingNumbersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.validations.routing_numbers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiValidationsRoutingNumbers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.validations.routing_numbers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.validations.routing_numbers.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiValidationsRoutingNumbersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiValidationsRoutingNumbersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiVirtualAccountSettingsQueryKey(
  args: InferRequestType<typeof client.api.virtual_account_settings.$get>,
) {
  return ['api', '/api/virtual_account_settings', args] as const
}

export function getApiVirtualAccountSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.virtual_account_settings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualAccountSettingsQueryKey>
  >({
    queryKey: getApiVirtualAccountSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.virtual_account_settings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiVirtualAccountSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.virtual_account_settings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.virtual_account_settings.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiVirtualAccountSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiVirtualAccountSettingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiVirtualAccountSettingsMutationKey() {
  return ['api', '/api/virtual_account_settings', 'POST'] as const
}

export function getPostApiVirtualAccountSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_account_settings.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.virtual_account_settings.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVirtualAccountSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.virtual_account_settings.$post>) {
      return parseResponse(client.api.virtual_account_settings.$post(args, options))
    },
  })
}

export function injectPostApiVirtualAccountSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.virtual_account_settings.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.virtual_account_settings.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiVirtualAccountSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiVirtualAccountsQueryKey(
  args: InferRequestType<typeof client.api.virtual_accounts.$get>,
) {
  return ['api', '/api/virtual_accounts', args] as const
}

export function getApiVirtualAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.virtual_accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualAccountsQueryKey>
  >({
    queryKey: getApiVirtualAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.virtual_accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiVirtualAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.virtual_accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiVirtualAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiVirtualAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiVirtualAccountsMutationKey() {
  return ['api', '/api/virtual_accounts', 'POST'] as const
}

export function getPostApiVirtualAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.virtual_accounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiVirtualAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.virtual_accounts.$post>) {
      return parseResponse(client.api.virtual_accounts.$post(args, options))
    },
  })
}

export function injectPostApiVirtualAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.virtual_accounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.virtual_accounts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiVirtualAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiVirtualAccountsIdQueryKey(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
) {
  return ['api', '/api/virtual_accounts/:id', args] as const
}

export function getApiVirtualAccountsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiVirtualAccountsIdQueryKey>
  >({
    queryKey: getApiVirtualAccountsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.virtual_accounts[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiVirtualAccountsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.virtual_accounts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiVirtualAccountsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiVirtualAccountsIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiVirtualAccountsIdMutationKey() {
  return ['api', '/api/virtual_accounts/:id', 'DELETE'] as const
}

export function getDeleteApiVirtualAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiVirtualAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
    ) {
      return parseResponse(client.api.virtual_accounts[':id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiVirtualAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.virtual_accounts)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiVirtualAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiVirtualAccountsIdMutationKey() {
  return ['api', '/api/virtual_accounts/:id', 'PATCH'] as const
}

export function getPatchApiVirtualAccountsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiVirtualAccountsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
    ) {
      return parseResponse(client.api.virtual_accounts[':id'].$patch(args, options))
    },
  })
}

export function injectPatchApiVirtualAccountsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.virtual_accounts)[':id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.virtual_accounts)[':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiVirtualAccountsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiAccountsTypeAccountIdAccountDetailsQueryKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/account_details', args] as const
}

export function getApiAccountsTypeAccountIdAccountDetailsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsQueryKey>
  >({
    queryKey: getApiAccountsTypeAccountIdAccountDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAccountsTypeAccountIdAccountDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAccountsTypeAccountIdAccountDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiAccountsTypeAccountIdAccountDetailsMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/account_details', 'POST'] as const
}

export function getPostApiAccountsTypeAccountIdAccountDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountsTypeAccountIdAccountDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details.$post(args, options),
      )
    },
  })
}

export function injectPostApiAccountsTypeAccountIdAccountDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)[':accounts_type'][':account_id']['account_details']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAccountsTypeAccountIdAccountDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiAccountsTypeAccountIdAccountDetailsIdQueryKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/account_details/:id', args] as const
}

export function getApiAccountsTypeAccountIdAccountDetailsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsIdQueryKey>
  >({
    queryKey: getApiAccountsTypeAccountIdAccountDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAccountsTypeAccountIdAccountDetailsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiAccountsTypeAccountIdAccountDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAccountsTypeAccountIdAccountDetailsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/account_details/:id', 'DELETE'] as const
}

export function getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].account_details[':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiAccountsTypeAccountIdAccountDetailsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)[':accounts_type'][':account_id']['account_details'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAccountsTypeAccountIdAccountDetailsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiAccountsTypeAccountIdRoutingDetailsQueryKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/routing_details', args] as const
}

export function getApiAccountsTypeAccountIdRoutingDetailsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsQueryKey>
  >({
    queryKey: getApiAccountsTypeAccountIdRoutingDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAccountsTypeAccountIdRoutingDetails<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAccountsTypeAccountIdRoutingDetailsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiAccountsTypeAccountIdRoutingDetailsMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/routing_details', 'POST'] as const
}

export function getPostApiAccountsTypeAccountIdRoutingDetailsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiAccountsTypeAccountIdRoutingDetailsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details.$post(args, options),
      )
    },
  })
}

export function injectPostApiAccountsTypeAccountIdRoutingDetails<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)[':accounts_type'][':account_id']['routing_details']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiAccountsTypeAccountIdRoutingDetailsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
) {
  return ['api', '/api/:accounts_type/:account_id/routing_details/:id', args] as const
}

export function getApiAccountsTypeAccountIdRoutingDetailsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey>
  >({
    queryKey: getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiAccountsTypeAccountIdRoutingDetailsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiAccountsTypeAccountIdRoutingDetailsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiAccountsTypeAccountIdRoutingDetailsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationKey() {
  return ['api', '/api/:accounts_type/:account_id/routing_details/:id', 'DELETE'] as const
}

export function getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api[':accounts_type'][':account_id'].routing_details[':id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiAccountsTypeAccountIdRoutingDetailsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)[':accounts_type'][':account_id']['routing_details'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiAccountsTypeAccountIdRoutingDetailsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiDocumentableTypeDocumentableIdDocumentsQueryKey(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents', args] as const
}

export function getApiDocumentableTypeDocumentableIdDocumentsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsQueryKey>
  >({
    queryKey: getApiDocumentableTypeDocumentableIdDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDocumentableTypeDocumentableIdDocuments<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDocumentableTypeDocumentableIdDocumentsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiDocumentableTypeDocumentableIdDocumentsMutationKey() {
  return ['api', '/api/:documentable_type/:documentable_id/documents', 'POST'] as const
}

export function getPostApiDocumentableTypeDocumentableIdDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiDocumentableTypeDocumentableIdDocumentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
      >,
    ) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents.$post(args, options),
      )
    },
  })
}

export function injectPostApiDocumentableTypeDocumentableIdDocuments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)[':documentable_type'][':documentable_id']['documents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiDocumentableTypeDocumentableIdDocumentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents/:id', args] as const
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey>
  >({
    queryKey: getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDocumentableTypeDocumentableIdDocumentsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDocumentableTypeDocumentableIdDocumentsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
) {
  return ['api', '/api/:documentable_type/:documentable_id/documents/:id/download', args] as const
}

export function getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey>
  >({
    queryKey: getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':documentable_type'][':documentable_id'].documents[':id'].download.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDocumentableTypeDocumentableIdDocumentsIdDownload<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':documentable_type'][':documentable_id']['documents'][':id']['download']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiDocumentableTypeDocumentableIdDocumentsIdDownloadQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiItemizableTypeItemizableIdLineItemsQueryKey(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
) {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items', args] as const
}

export function getApiItemizableTypeItemizableIdLineItemsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsQueryKey>
  >({
    queryKey: getApiItemizableTypeItemizableIdLineItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':itemizable_type'][':itemizable_id'].line_items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiItemizableTypeItemizableIdLineItems<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiItemizableTypeItemizableIdLineItemsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiItemizableTypeItemizableIdLineItemsIdQueryKey(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
) {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items/:id', args] as const
}

export function getApiItemizableTypeItemizableIdLineItemsIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsIdQueryKey>
  >({
    queryKey: getApiItemizableTypeItemizableIdLineItemsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiItemizableTypeItemizableIdLineItemsId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiItemizableTypeItemizableIdLineItemsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getApiItemizableTypeItemizableIdLineItemsIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiItemizableTypeItemizableIdLineItemsIdMutationKey() {
  return ['api', '/api/:itemizable_type/:itemizable_id/line_items/:id', 'PATCH'] as const
}

export function getPatchApiItemizableTypeItemizableIdLineItemsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiItemizableTypeItemizableIdLineItemsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api[':itemizable_type'][':itemizable_id'].line_items[':id'].$patch(args, options),
      )
    },
  })
}

export function injectPatchApiItemizableTypeItemizableIdLineItemsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)[':itemizable_type'][':itemizable_id']['line_items'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchApiItemizableTypeItemizableIdLineItemsIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
