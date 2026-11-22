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

export function getAdaptersKey() {
  return ['adapters'] as const
}

export function getMcpKey() {
  return ['mcp'] as const
}

export function getToolsKey() {
  return ['tools'] as const
}

export function getAdaptersQueryKey() {
  return ['adapters', '/adapters'] as const
}

export function getAdaptersQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getAdaptersQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adapters.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdapters<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>
          >,
          ReturnType<typeof getAdaptersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdaptersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getAdaptersQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.adapters.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAdaptersMutationKey() {
  return ['adapters', '/adapters', 'POST'] as const
}

export function getPostAdaptersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$post>>>>>,
    TError,
    InferRequestType<typeof client.adapters.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostAdaptersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.adapters.$post>) {
      return parseResponse(client.adapters.$post(args, options))
    },
  })
}

export function usePostAdapters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.adapters.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.adapters.$post>,
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
  const mutationDefaults = getPostAdaptersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdaptersNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['$get']>>,
) {
  return ['adapters', '/adapters/:name', toValue(args)] as const
}

export function getAdaptersNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdaptersNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adapters[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdaptersName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getAdaptersNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdaptersNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdaptersNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adapters[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAdaptersNameMutationKey() {
  return ['adapters', '/adapters/:name', 'PUT'] as const
}

export function getPutAdaptersNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.adapters)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAdaptersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.adapters)[':name']['$put']>) {
      return parseResponse(client.adapters[':name'].$put(args, options))
    },
  })
}

export function usePutAdaptersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.adapters)[':name']['$put']>,
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
  const mutationDefaults = getPutAdaptersNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteAdaptersNameMutationKey() {
  return ['adapters', '/adapters/:name', 'DELETE'] as const
}

export function getDeleteAdaptersNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.adapters)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAdaptersNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.adapters)[':name']['$delete']>) {
      return parseResponse(client.adapters[':name'].$delete(args, options))
    },
  })
}

export function useDeleteAdaptersName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.adapters)[':name']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.adapters)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteAdaptersNameMutationOptions<TError, TOnMutateResult>(
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

export function getAdaptersNameStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['status']['$get']>>,
) {
  return ['adapters', '/adapters/:name/status', toValue(args)] as const
}

export function getAdaptersNameStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdaptersNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adapters[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdaptersNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdaptersNameStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.adapters)[':name']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdaptersNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdaptersNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adapters[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdaptersNameLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>>,
) {
  return ['adapters', '/adapters/:name/logs', toValue(args)] as const
}

export function getAdaptersNameLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdaptersNameLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.adapters[':name'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdaptersNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.adapters)[':name']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdaptersNameLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdaptersNameLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdaptersNameLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.adapters[':name'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolsQueryKey() {
  return ['tools', '/tools'] as const
}

export function getToolsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getToolsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTools<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
          ReturnType<typeof getToolsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getToolsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getToolsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.tools.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostToolsMutationKey() {
  return ['tools', '/tools', 'POST'] as const
}

export function getPostToolsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$post>>>>>,
    TError,
    InferRequestType<typeof client.tools.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostToolsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tools.$post>) {
      return parseResponse(client.tools.$post(args, options))
    },
  })
}

export function usePostTools<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tools.$post>>>>>,
          TError,
          InferRequestType<typeof client.tools.$post>,
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
  const mutationDefaults = getPostToolsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['$get']>>,
) {
  return ['tools', '/tools/:name', toValue(args)] as const
}

export function getToolsNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolsNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getToolsNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolsNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tools[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutToolsNameMutationKey() {
  return ['tools', '/tools/:name', 'PUT'] as const
}

export function getPutToolsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.tools)[':name']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutToolsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)[':name']['$put']>) {
      return parseResponse(client.tools[':name'].$put(args, options))
    },
  })
}

export function usePutToolsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.tools)[':name']['$put']>,
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
  const mutationDefaults = getPutToolsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteToolsNameMutationKey() {
  return ['tools', '/tools/:name', 'DELETE'] as const
}

export function getDeleteToolsNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.tools)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteToolsNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tools)[':name']['$delete']>) {
      return parseResponse(client.tools[':name'].$delete(args, options))
    },
  })
}

export function useDeleteToolsName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['$delete']>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.tools)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteToolsNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getToolsNameStatusQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['status']['$get']>>,
) {
  return ['tools', '/tools/:name/status', toValue(args)] as const
}

export function getToolsNameStatusQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['status']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolsNameStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools[':name'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsNameStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['status']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsNameStatusQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['status']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNameStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolsNameStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tools[':name'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getToolsNameLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['logs']['$get']>>,
) {
  return ['tools', '/tools/:name/logs', toValue(args)] as const
}

export function getToolsNameLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getToolsNameLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tools[':name'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useToolsNameLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tools)[':name']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getToolsNameLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tools)[':name']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getToolsNameLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getToolsNameLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tools[':name'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMcpMutationKey() {
  return ['mcp', '/mcp', 'POST'] as const
}

export function getPostMcpMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcp.$post>>>>>,
    TError,
    InferRequestType<typeof client.mcp.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMcpMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.mcp.$post>) {
      return parseResponse(client.mcp.$post(args, options))
    },
  })
}

export function usePostMcp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mcp.$post>>>>>,
          TError,
          InferRequestType<typeof client.mcp.$post>,
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
  const mutationDefaults = getPostMcpMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostAdaptersNameMcpMutationKey() {
  return ['adapters', '/adapters/:name/mcp', 'POST'] as const
}

export function getPostAdaptersNameMcpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.adapters)[':name']['mcp']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAdaptersNameMcpMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>) {
      return parseResponse(client.adapters[':name'].mcp.$post(args, options))
    },
  })
}

export function usePostAdaptersNameMcp<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.adapters)[':name']['mcp']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.adapters)[':name']['mcp']['$post']>,
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
  const mutationDefaults = getPostAdaptersNameMcpMutationOptions<TError, TOnMutateResult>(
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
