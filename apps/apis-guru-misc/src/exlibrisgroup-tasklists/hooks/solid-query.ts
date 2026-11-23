import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlmawsKey() {
  return ['almaws'] as const
}

export function getAlmawsV1TaskListsPrintoutsQueryKey(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
) {
  return ['almaws', '/almaws/v1/task-lists/printouts', args] as const
}

export function getAlmawsV1TaskListsPrintoutsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlmawsV1TaskListsPrintoutsQueryKey>
  >({
    queryKey: getAlmawsV1TaskListsPrintoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.almaws.v1['task-lists'].printouts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlmawsV1TaskListsPrintouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlmawsV1TaskListsPrintoutsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAlmawsV1TaskListsPrintoutsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAlmawsV1TaskListsPrintoutsMutationKey() {
  return ['almaws', '/almaws/v1/task-lists/printouts', 'POST'] as const
}

export function getPostAlmawsV1TaskListsPrintoutsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlmawsV1TaskListsPrintoutsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>,
    ) {
      return parseResponse(client.almaws.v1['task-lists'].printouts.$post(args, options))
    },
  })
}

export function createPostAlmawsV1TaskListsPrintouts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlmawsV1TaskListsPrintoutsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
) {
  return ['almaws', '/almaws/v1/task-lists/printouts/:printout_id', args] as const
}

export function getAlmawsV1TaskListsPrintoutsPrintoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey>
  >({
    queryKey: getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.almaws.v1['task-lists'].printouts[':printout_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlmawsV1TaskListsPrintoutsPrintoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          TError,
          TData,
          ReturnType<typeof getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAlmawsV1TaskListsPrintoutsPrintoutIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAlmawsV1TaskListsPrintoutsPrintoutIdMutationKey() {
  return ['almaws', '/almaws/v1/task-lists/printouts/:printout_id', 'POST'] as const
}

export function getPostAlmawsV1TaskListsPrintoutsPrintoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlmawsV1TaskListsPrintoutsPrintoutIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']
      >,
    ) {
      return parseResponse(
        client.almaws.v1['task-lists'].printouts[':printout_id'].$post(args, options),
      )
    },
  })
}

export function createPostAlmawsV1TaskListsPrintoutsPrintoutId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
          InferRequestType<
            (typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlmawsV1TaskListsPrintoutsPrintoutIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlmawsV1TaskListsRequestedResourcesQueryKey(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>,
) {
  return ['almaws', '/almaws/v1/task-lists/requested-resources', args] as const
}

export function getAlmawsV1TaskListsRequestedResourcesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlmawsV1TaskListsRequestedResourcesQueryKey>
  >({
    queryKey: getAlmawsV1TaskListsRequestedResourcesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.almaws.v1['task-lists']['requested-resources'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlmawsV1TaskListsRequestedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.almaws.v1)['task-lists']['requested-resources']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlmawsV1TaskListsRequestedResourcesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAlmawsV1TaskListsRequestedResourcesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAlmawsV1TaskListsRequestedResourcesMutationKey() {
  return ['almaws', '/almaws/v1/task-lists/requested-resources', 'POST'] as const
}

export function getPostAlmawsV1TaskListsRequestedResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlmawsV1TaskListsRequestedResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.almaws.v1)['task-lists']['requested-resources']['$post']
      >,
    ) {
      return parseResponse(
        client.almaws.v1['task-lists']['requested-resources'].$post(args, options),
      )
    },
  })
}

export function createPostAlmawsV1TaskListsRequestedResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.almaws.v1)['task-lists']['requested-resources']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlmawsV1TaskListsRequestedResourcesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlmawsV1TaskListsRsLendingRequestsQueryKey(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>,
) {
  return ['almaws', '/almaws/v1/task-lists/rs/lending-requests', args] as const
}

export function getAlmawsV1TaskListsRsLendingRequestsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlmawsV1TaskListsRsLendingRequestsQueryKey>
  >({
    queryKey: getAlmawsV1TaskListsRsLendingRequestsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.almaws.v1['task-lists'].rs['lending-requests'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlmawsV1TaskListsRsLendingRequests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlmawsV1TaskListsRsLendingRequestsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAlmawsV1TaskListsRsLendingRequestsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostAlmawsV1TaskListsRsLendingRequestsMutationKey() {
  return ['almaws', '/almaws/v1/task-lists/rs/lending-requests', 'POST'] as const
}

export function getPostAlmawsV1TaskListsRsLendingRequestsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAlmawsV1TaskListsRsLendingRequestsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']
      >,
    ) {
      return parseResponse(
        client.almaws.v1['task-lists'].rs['lending-requests'].$post(args, options),
      )
    },
  })
}

export function createPostAlmawsV1TaskListsRsLendingRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlmawsV1TaskListsRsLendingRequestsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAlmawsV1TaskListsTestQueryKey() {
  return ['almaws', '/almaws/v1/task-lists/test'] as const
}

export function getAlmawsV1TaskListsTestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAlmawsV1TaskListsTestQueryKey>
  >({
    queryKey: getAlmawsV1TaskListsTestQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.almaws.v1['task-lists'].test.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAlmawsV1TaskListsTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAlmawsV1TaskListsTestQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAlmawsV1TaskListsTestQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getPostAlmawsV1TaskListsTestMutationKey() {
  return ['almaws', '/almaws/v1/task-lists/test', 'POST'] as const
}

export function getPostAlmawsV1TaskListsTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$post']>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAlmawsV1TaskListsTestMutationKey(),
    async mutationFn() {
      return parseResponse(client.almaws.v1['task-lists'].test.$post(undefined, options))
    },
  })
}

export function createPostAlmawsV1TaskListsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$post']>>
              >
            >
          >,
          TError,
          void,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAlmawsV1TaskListsTestMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
