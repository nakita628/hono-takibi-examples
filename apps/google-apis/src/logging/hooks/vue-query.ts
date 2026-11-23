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

export function getV2Key() {
  return ['v2'] as const
}

export function getPostV2EntriesCopyMutationKey() {
  return ['v2', '/v2/entries:copy', 'POST'] as const
}

export function getPostV2EntriesCopyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:copy']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['entries:copy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EntriesCopyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['entries:copy']['$post']>) {
      return parseResponse(client.v2['entries:copy'].$post(args, options))
    },
  })
}

export function usePostV2EntriesCopy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:copy']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['entries:copy']['$post']>,
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
  const mutationDefaults = getPostV2EntriesCopyMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EntriesListMutationKey() {
  return ['v2', '/v2/entries:list', 'POST'] as const
}

export function getPostV2EntriesListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:list']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['entries:list']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EntriesListMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['entries:list']['$post']>) {
      return parseResponse(client.v2['entries:list'].$post(args, options))
    },
  })
}

export function usePostV2EntriesList<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:list']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['entries:list']['$post']>,
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
  const mutationDefaults = getPostV2EntriesListMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EntriesTailMutationKey() {
  return ['v2', '/v2/entries:tail', 'POST'] as const
}

export function getPostV2EntriesTailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:tail']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['entries:tail']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EntriesTailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['entries:tail']['$post']>) {
      return parseResponse(client.v2['entries:tail'].$post(args, options))
    },
  })
}

export function usePostV2EntriesTail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:tail']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['entries:tail']['$post']>,
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
  const mutationDefaults = getPostV2EntriesTailMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2EntriesWriteMutationKey() {
  return ['v2', '/v2/entries:write', 'POST'] as const
}

export function getPostV2EntriesWriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)['entries:write']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)['entries:write']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2EntriesWriteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)['entries:write']['$post']>) {
      return parseResponse(client.v2['entries:write'].$post(args, options))
    },
  })
}

export function usePostV2EntriesWrite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)['entries:write']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)['entries:write']['$post']>,
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
  const mutationDefaults = getPostV2EntriesWriteMutationOptions<TError, TOnMutateResult>(
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

export function getV2MonitoredResourceDescriptorsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoredResourceDescriptors.$get>>,
) {
  return ['v2', '/v2/monitoredResourceDescriptors', toValue(args)] as const
}

export function getV2MonitoredResourceDescriptorsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoredResourceDescriptors.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MonitoredResourceDescriptorsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.monitoredResourceDescriptors.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MonitoredResourceDescriptors<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v2.monitoredResourceDescriptors.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.monitoredResourceDescriptors.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoredResourceDescriptors.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v2.monitoredResourceDescriptors.$get>>
              >
            >
          >,
          ReturnType<typeof getV2MonitoredResourceDescriptorsQueryKey>
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
          Awaited<ReturnType<typeof client.v2.monitoredResourceDescriptors.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MonitoredResourceDescriptorsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MonitoredResourceDescriptorsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.monitoredResourceDescriptors.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2LogNameMutationKey() {
  return ['v2', '/v2/:logName', 'DELETE'] as const
}

export function getDeleteV2LogNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':logName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':logName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2LogNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':logName']['$delete']>) {
      return parseResponse(client.v2[':logName'].$delete(args, options))
    },
  })
}

export function useDeleteV2LogName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':logName']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':logName']['$delete']>,
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
  const mutationDefaults = getDeleteV2LogNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2MetricNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':metricName']['$get']>>,
) {
  return ['v2', '/v2/:metricName', toValue(args)] as const
}

export function getV2MetricNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':metricName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2MetricNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':metricName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2MetricName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':metricName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$get']>>>
            >
          >,
          ReturnType<typeof getV2MetricNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2MetricNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2MetricNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':metricName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2MetricNameMutationKey() {
  return ['v2', '/v2/:metricName', 'PUT'] as const
}

export function getPutV2MetricNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':metricName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2MetricNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':metricName']['$put']>) {
      return parseResponse(client.v2[':metricName'].$put(args, options))
    },
  })
}

export function usePutV2MetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':metricName']['$put']>,
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
  const mutationDefaults = getPutV2MetricNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2MetricNameMutationKey() {
  return ['v2', '/v2/:metricName', 'DELETE'] as const
}

export function getDeleteV2MetricNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':metricName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':metricName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2MetricNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':metricName']['$delete']>) {
      return parseResponse(client.v2[':metricName'].$delete(args, options))
    },
  })
}

export function useDeleteV2MetricName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':metricName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':metricName']['$delete']>,
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
  const mutationDefaults = getDeleteV2MetricNameMutationOptions<TError, TOnMutateResult>(
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

export function getV2NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
) {
  return ['v2', '/v2/:name', toValue(args)] as const
}

export function getV2NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2NameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2NameMutationKey() {
  return ['v2', '/v2/:name', 'DELETE'] as const
}

export function getDeleteV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$delete']>) {
      return parseResponse(client.v2[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV2NameMutationKey() {
  return ['v2', '/v2/:name', 'PATCH'] as const
}

export function getPatchV2NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['$patch']>) {
      return parseResponse(client.v2[':name'].$patch(args, options))
    },
  })
}

export function usePatchV2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV2NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV2NameCmekSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$get']>>,
) {
  return ['v2', '/v2/:name/cmekSettings', toValue(args)] as const
}

export function getV2NameCmekSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameCmekSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].cmekSettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2NameCmekSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['cmekSettings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['cmekSettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['cmekSettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2NameCmekSettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':name']['cmekSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameCmekSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameCmekSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].cmekSettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2NameCmekSettingsMutationKey() {
  return ['v2', '/v2/:name/cmekSettings', 'PATCH'] as const
}

export function getPatchV2NameCmekSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':name']['cmekSettings']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameCmekSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$patch']>,
    ) {
      return parseResponse(client.v2[':name'].cmekSettings.$patch(args, options))
    },
  })
}

export function usePatchV2NameCmekSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['cmekSettings']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['cmekSettings']['$patch']>,
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
  const mutationDefaults = getPatchV2NameCmekSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getV2NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['locations']['$get']>>,
) {
  return ['v2', '/v2/:name/locations', toValue(args)] as const
}

export function getV2NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2NameLocationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['operations']['$get']>>,
) {
  return ['v2', '/v2/:name/operations', toValue(args)] as const
}

export function getV2NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2NameOperationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2NameSettingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['settings']['$get']>>,
) {
  return ['v2', '/v2/:name/settings', toValue(args)] as const
}

export function getV2NameSettingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['settings']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2NameSettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':name'].settings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2NameSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['settings']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':name']['settings']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['settings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['settings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2NameSettingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['settings']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2NameSettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2NameSettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':name'].settings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV2NameSettingsMutationKey() {
  return ['v2', '/v2/:name/settings', 'PATCH'] as const
}

export function getPatchV2NameSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name']['settings']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name']['settings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2NameSettingsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name']['settings']['$patch']>) {
      return parseResponse(client.v2[':name'].settings.$patch(args, options))
    },
  })
}

export function usePatchV2NameSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name']['settings']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name']['settings']['$patch']>,
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
  const mutationDefaults = getPatchV2NameSettingsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NameCancelMutationKey() {
  return ['v2', '/v2/:name:cancel', 'POST'] as const
}

export function getPostV2NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:cancel']['$post']>) {
      return parseResponse(client.v2[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV2NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:cancel']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV2NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NameUndeleteMutationKey() {
  return ['v2', '/v2/:name:undelete', 'POST'] as const
}

export function getPostV2NameUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:undelete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameUndeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:undelete']['$post']>) {
      return parseResponse(client.v2[':name:undelete'].$post(args, options))
    },
  })
}

export function usePostV2NameUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:undelete']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:undelete']['$post']>,
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
  const mutationDefaults = getPostV2NameUndeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2NameUpdateAsyncMutationKey() {
  return ['v2', '/v2/:name:updateAsync', 'POST'] as const
}

export function getPostV2NameUpdateAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':name:updateAsync']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':name:updateAsync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2NameUpdateAsyncMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':name:updateAsync']['$post']>) {
      return parseResponse(client.v2[':name:updateAsync'].$post(args, options))
    },
  })
}

export function usePostV2NameUpdateAsync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':name:updateAsync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':name:updateAsync']['$post']>,
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
  const mutationDefaults = getPostV2NameUpdateAsyncMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentBucketsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['buckets']['$get']>>,
) {
  return ['v2', '/v2/:parent/buckets', toValue(args)] as const
}

export function getV2ParentBucketsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['buckets']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentBucketsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].buckets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentBuckets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['buckets']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['buckets']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['buckets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['buckets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentBucketsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['buckets']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentBucketsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentBucketsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].buckets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentBucketsMutationKey() {
  return ['v2', '/v2/:parent/buckets', 'POST'] as const
}

export function getPostV2ParentBucketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['buckets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['buckets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentBucketsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['buckets']['$post']>) {
      return parseResponse(client.v2[':parent'].buckets.$post(args, options))
    },
  })
}

export function usePostV2ParentBuckets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['buckets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['buckets']['$post']>,
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
  const mutationDefaults = getPostV2ParentBucketsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2ParentBucketsCreateAsyncMutationKey() {
  return ['v2', '/v2/:parent/buckets:createAsync', 'POST'] as const
}

export function getPostV2ParentBucketsCreateAsyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['buckets:createAsync']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['buckets:createAsync']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentBucketsCreateAsyncMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['buckets:createAsync']['$post']>,
    ) {
      return parseResponse(client.v2[':parent']['buckets:createAsync'].$post(args, options))
    },
  })
}

export function usePostV2ParentBucketsCreateAsync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['buckets:createAsync']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['buckets:createAsync']['$post']>,
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
  const mutationDefaults = getPostV2ParentBucketsCreateAsyncMutationOptions<
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

export function getV2ParentExclusionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['exclusions']['$get']>>,
) {
  return ['v2', '/v2/:parent/exclusions', toValue(args)] as const
}

export function getV2ParentExclusionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['exclusions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentExclusionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].exclusions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentExclusions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['exclusions']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['exclusions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['exclusions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['exclusions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentExclusionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['exclusions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentExclusionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentExclusionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].exclusions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentExclusionsMutationKey() {
  return ['v2', '/v2/:parent/exclusions', 'POST'] as const
}

export function getPostV2ParentExclusionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['exclusions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['exclusions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentExclusionsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['exclusions']['$post']>) {
      return parseResponse(client.v2[':parent'].exclusions.$post(args, options))
    },
  })
}

export function usePostV2ParentExclusions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['exclusions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['exclusions']['$post']>,
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
  const mutationDefaults = getPostV2ParentExclusionsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['links']['$get']>>,
) {
  return ['v2', '/v2/:parent/links', toValue(args)] as const
}

export function getV2ParentLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['links']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].links.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['links']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['links']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['links']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['links']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentLinksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['links']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].links.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentLinksMutationKey() {
  return ['v2', '/v2/:parent/links', 'POST'] as const
}

export function getPostV2ParentLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['links']['$post']>) {
      return parseResponse(client.v2[':parent'].links.$post(args, options))
    },
  })
}

export function usePostV2ParentLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['links']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['links']['$post']>,
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
  const mutationDefaults = getPostV2ParentLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['logs']['$get']>>,
) {
  return ['v2', '/v2/:parent/logs', toValue(args)] as const
}

export function getV2ParentLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['logs']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].logs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['logs']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['logs']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['logs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['logs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentLogsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['logs']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ParentMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['metrics']['$get']>>,
) {
  return ['v2', '/v2/:parent/metrics', toValue(args)] as const
}

export function getV2ParentMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['metrics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['metrics']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['metrics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['metrics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['metrics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['metrics']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentMetricsMutationKey() {
  return ['v2', '/v2/:parent/metrics', 'POST'] as const
}

export function getPostV2ParentMetricsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['metrics']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['metrics']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentMetricsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['metrics']['$post']>) {
      return parseResponse(client.v2[':parent'].metrics.$post(args, options))
    },
  })
}

export function usePostV2ParentMetrics<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['metrics']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['metrics']['$post']>,
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
  const mutationDefaults = getPostV2ParentMetricsMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentRecentQueriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['recentQueries']['$get']>>,
) {
  return ['v2', '/v2/:parent/recentQueries', toValue(args)] as const
}

export function getV2ParentRecentQueriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['recentQueries']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentRecentQueriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].recentQueries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentRecentQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['recentQueries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['recentQueries']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['recentQueries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['recentQueries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentRecentQueriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['recentQueries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentRecentQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentRecentQueriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].recentQueries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2ParentSavedQueriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$get']>>,
) {
  return ['v2', '/v2/:parent/savedQueries', toValue(args)] as const
}

export function getV2ParentSavedQueriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentSavedQueriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].savedQueries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentSavedQueries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2)[':parent']['savedQueries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['savedQueries']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['savedQueries']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentSavedQueriesQueryKey>
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
          Awaited<ReturnType<(typeof client.v2)[':parent']['savedQueries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentSavedQueriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentSavedQueriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].savedQueries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentSavedQueriesMutationKey() {
  return ['v2', '/v2/:parent/savedQueries', 'POST'] as const
}

export function getPostV2ParentSavedQueriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2)[':parent']['savedQueries']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentSavedQueriesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$post']>,
    ) {
      return parseResponse(client.v2[':parent'].savedQueries.$post(args, options))
    },
  })
}

export function usePostV2ParentSavedQueries<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['savedQueries']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['savedQueries']['$post']>,
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
  const mutationDefaults = getPostV2ParentSavedQueriesMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentSinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['sinks']['$get']>>,
) {
  return ['v2', '/v2/:parent/sinks', toValue(args)] as const
}

export function getV2ParentSinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['sinks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentSinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].sinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentSinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sinks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['sinks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['sinks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['sinks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentSinksQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sinks']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentSinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentSinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].sinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentSinksMutationKey() {
  return ['v2', '/v2/:parent/sinks', 'POST'] as const
}

export function getPostV2ParentSinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['sinks']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['sinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentSinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['sinks']['$post']>) {
      return parseResponse(client.v2[':parent'].sinks.$post(args, options))
    },
  })
}

export function usePostV2ParentSinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['sinks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['sinks']['$post']>,
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
  const mutationDefaults = getPostV2ParentSinksMutationOptions<TError, TOnMutateResult>(
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

export function getV2ParentViewsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['views']['$get']>>,
) {
  return ['v2', '/v2/:parent/views', toValue(args)] as const
}

export function getV2ParentViewsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['views']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2ParentViewsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':parent'].views.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2ParentViews<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['views']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':parent']['views']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['views']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['views']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2ParentViewsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['views']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2ParentViewsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2ParentViewsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':parent'].views.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2ParentViewsMutationKey() {
  return ['v2', '/v2/:parent/views', 'POST'] as const
}

export function getPostV2ParentViewsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':parent']['views']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':parent']['views']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ParentViewsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':parent']['views']['$post']>) {
      return parseResponse(client.v2[':parent'].views.$post(args, options))
    },
  })
}

export function usePostV2ParentViews<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2)[':parent']['views']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':parent']['views']['$post']>,
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
  const mutationDefaults = getPostV2ParentViewsMutationOptions<TError, TOnMutateResult>(
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

export function getV2SinkNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':sinkName']['$get']>>,
) {
  return ['v2', '/v2/:sinkName', toValue(args)] as const
}

export function getV2SinkNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':sinkName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SinkNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2[':sinkName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SinkName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2)[':sinkName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$get']>>>
            >
          >,
          ReturnType<typeof getV2SinkNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SinkNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SinkNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2[':sinkName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutV2SinkNameMutationKey() {
  return ['v2', '/v2/:sinkName', 'PUT'] as const
}

export function getPutV2SinkNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v2)[':sinkName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutV2SinkNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':sinkName']['$put']>) {
      return parseResponse(client.v2[':sinkName'].$put(args, options))
    },
  })
}

export function usePutV2SinkName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':sinkName']['$put']>,
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
  const mutationDefaults = getPutV2SinkNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteV2SinkNameMutationKey() {
  return ['v2', '/v2/:sinkName', 'DELETE'] as const
}

export function getDeleteV2SinkNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':sinkName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2SinkNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':sinkName']['$delete']>) {
      return parseResponse(client.v2[':sinkName'].$delete(args, options))
    },
  })
}

export function useDeleteV2SinkName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':sinkName']['$delete']>,
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
  const mutationDefaults = getDeleteV2SinkNameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV2SinkNameMutationKey() {
  return ['v2', '/v2/:sinkName', 'PATCH'] as const
}

export function getPatchV2SinkNameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2)[':sinkName']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV2SinkNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2)[':sinkName']['$patch']>) {
      return parseResponse(client.v2[':sinkName'].$patch(args, options))
    },
  })
}

export function usePatchV2SinkName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2)[':sinkName']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v2)[':sinkName']['$patch']>,
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
  const mutationDefaults = getPatchV2SinkNameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
