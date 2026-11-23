import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAlmawsKey() {
  return ['almaws'] as const
}

export function getAlmawsV1TaskListsPrintoutsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>
  >,
) {
  return ['almaws', '/almaws/v1/task-lists/printouts', toValue(args)] as const
}

export function getAlmawsV1TaskListsPrintoutsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlmawsV1TaskListsPrintoutsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.almaws.v1['task-lists'].printouts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlmawsV1TaskListsPrintouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['printouts']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlmawsV1TaskListsPrintoutsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlmawsV1TaskListsPrintoutsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.almaws.v1['task-lists'].printouts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAlmawsV1TaskListsPrintouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlmawsV1TaskListsPrintoutsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']>
  >,
) {
  return ['almaws', '/almaws/v1/task-lists/printouts/:printout_id', toValue(args)] as const
}

export function getAlmawsV1TaskListsPrintoutsPrintoutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.almaws.v1['task-lists'].printouts[':printout_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlmawsV1TaskListsPrintoutsPrintoutId<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['printouts'][':printout_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlmawsV1TaskListsPrintoutsPrintoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.almaws.v1['task-lists'].printouts[':printout_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAlmawsV1TaskListsPrintoutsPrintoutId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlmawsV1TaskListsPrintoutsPrintoutIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlmawsV1TaskListsRequestedResourcesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
  >,
) {
  return ['almaws', '/almaws/v1/task-lists/requested-resources', toValue(args)] as const
}

export function getAlmawsV1TaskListsRequestedResourcesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlmawsV1TaskListsRequestedResourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.almaws.v1['task-lists']['requested-resources'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlmawsV1TaskListsRequestedResources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.almaws.v1)['task-lists']['requested-resources']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAlmawsV1TaskListsRequestedResourcesQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlmawsV1TaskListsRequestedResourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.almaws.v1['task-lists']['requested-resources'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAlmawsV1TaskListsRequestedResources<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlmawsV1TaskListsRequestedResourcesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlmawsV1TaskListsRsLendingRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
  >,
) {
  return ['almaws', '/almaws/v1/task-lists/rs/lending-requests', toValue(args)] as const
}

export function getAlmawsV1TaskListsRsLendingRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAlmawsV1TaskListsRsLendingRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.almaws.v1['task-lists'].rs['lending-requests'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlmawsV1TaskListsRsLendingRequests<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.almaws.v1)['task-lists']['rs']['lending-requests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          ReturnType<typeof getAlmawsV1TaskListsRsLendingRequestsQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAlmawsV1TaskListsRsLendingRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.almaws.v1['task-lists'].rs['lending-requests'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAlmawsV1TaskListsRsLendingRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlmawsV1TaskListsRsLendingRequestsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAlmawsV1TaskListsTestQueryKey() {
  return ['almaws', '/almaws/v1/task-lists/test'] as const
}

export function getAlmawsV1TaskListsTestQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAlmawsV1TaskListsTestQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.almaws.v1['task-lists'].test.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAlmawsV1TaskListsTest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.almaws.v1)['task-lists']['test']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAlmawsV1TaskListsTestQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: getAlmawsV1TaskListsTestQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.almaws.v1['task-lists'].test.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAlmawsV1TaskListsTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        >,
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAlmawsV1TaskListsTestMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
