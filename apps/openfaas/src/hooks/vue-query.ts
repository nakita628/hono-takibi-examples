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

export function getAsyncFunctionKey() {
  return ['async-function'] as const
}

export function getFunctionKey() {
  return ['function'] as const
}

export function getHealthzKey() {
  return ['healthz'] as const
}

export function getMetricsKey() {
  return ['metrics'] as const
}

export function getSystemKey() {
  return ['system'] as const
}

export function getHealthzQueryKey() {
  return ['healthz', '/healthz'] as const
}

export function getHealthzQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          ReturnType<typeof getHealthzQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getHealthzQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.healthz.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          ReturnType<typeof getMetricsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getMetricsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.metrics.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemInfoQueryKey() {
  return ['system', '/system/info'] as const
}

export function getSystemInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          ReturnType<typeof getSystemInfoQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.info.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostSystemAlertMutationKey() {
  return ['system', '/system/alert', 'POST'] as const
}

export function getPostSystemAlertMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.alert.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.system.alert.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemAlertMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.alert.$post>) {
      return parseResponse(client.system.alert.$post(args, options))
    },
  })
}

export function usePostSystemAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.alert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.system.alert.$post>,
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
  const mutationDefaults = getPostSystemAlertMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSystemFunctionsQueryKey() {
  return ['system', '/system/functions'] as const
}

export function getSystemFunctionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemFunctionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.functions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>
            >
          >,
          ReturnType<typeof getSystemFunctionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemFunctionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemFunctionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.functions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSystemFunctionsMutationKey() {
  return ['system', '/system/functions', 'PUT'] as const
}

export function getPutSystemFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.system.functions.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.functions.$put>) {
      return parseResponse(client.system.functions.$put(args, options))
    },
  })
}

export function usePutSystemFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.functions.$put>,
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
  const mutationDefaults = getPutSystemFunctionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemFunctionsMutationKey() {
  return ['system', '/system/functions', 'POST'] as const
}

export function getPostSystemFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.system.functions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.functions.$post>) {
      return parseResponse(client.system.functions.$post(args, options))
    },
  })
}

export function usePostSystemFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.functions.$post>,
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
  const mutationDefaults = getPostSystemFunctionsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSystemFunctionsMutationKey() {
  return ['system', '/system/functions', 'DELETE'] as const
}

export function getDeleteSystemFunctionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.system.functions.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSystemFunctionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.functions.$delete>) {
      return parseResponse(client.system.functions.$delete(args, options))
    },
  })
}

export function useDeleteSystemFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.functions.$delete>,
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
  const mutationDefaults = getDeleteSystemFunctionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemScaleFunctionFunctionNameMutationKey() {
  return ['system', '/system/scale-function/:functionName', 'POST'] as const
}

export function getPostSystemScaleFunctionFunctionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system)['scale-function'][':functionName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemScaleFunctionFunctionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>,
    ) {
      return parseResponse(client.system['scale-function'][':functionName'].$post(args, options))
    },
  })
}

export function usePostSystemScaleFunctionFunctionName<
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
                  ReturnType<(typeof client.system)['scale-function'][':functionName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>,
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
  const mutationDefaults = getPostSystemScaleFunctionFunctionNameMutationOptions<
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

export function getSystemFunctionFunctionNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.function)[':functionName']['$get']>
  >,
) {
  return ['system', '/system/function/:functionName', toValue(args)] as const
}

export function getSystemFunctionFunctionNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.function)[':functionName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemFunctionFunctionNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.function[':functionName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemFunctionFunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.system.function)[':functionName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getSystemFunctionFunctionNameQueryKey>
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
          Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSystemFunctionFunctionNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemFunctionFunctionNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.function[':functionName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemSecretsQueryKey() {
  return ['system', '/system/secrets'] as const
}

export function getSystemSecretsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemSecretsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.secrets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
          >,
          ReturnType<typeof getSystemSecretsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemSecretsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemSecretsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.secrets.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutSystemSecretsMutationKey() {
  return ['system', '/system/secrets', 'PUT'] as const
}

export function getPutSystemSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.system.secrets.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSystemSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.secrets.$put>) {
      return parseResponse(client.system.secrets.$put(args, options))
    },
  })
}

export function usePutSystemSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.system.secrets.$put>,
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
  const mutationDefaults = getPutSystemSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getPostSystemSecretsMutationKey() {
  return ['system', '/system/secrets', 'POST'] as const
}

export function getPostSystemSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.system.secrets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSystemSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.secrets.$post>) {
      return parseResponse(client.system.secrets.$post(args, options))
    },
  })
}

export function usePostSystemSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.secrets.$post>,
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
  const mutationDefaults = getPostSystemSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSystemSecretsMutationKey() {
  return ['system', '/system/secrets', 'DELETE'] as const
}

export function getDeleteSystemSecretsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$delete>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.system.secrets.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSystemSecretsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.system.secrets.$delete>) {
      return parseResponse(client.system.secrets.$delete(args, options))
    },
  })
}

export function useDeleteSystemSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.system.secrets.$delete>,
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
  const mutationDefaults = getDeleteSystemSecretsMutationOptions<TError, TOnMutateResult>(
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

export function getSystemLogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.system.logs.$get>>,
) {
  return ['system', '/system/logs', toValue(args)] as const
}

export function getSystemLogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.system.logs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSystemLogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.logs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSystemLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.system.logs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
          >,
          ReturnType<typeof getSystemLogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemLogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSystemLogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.system.logs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSystemNamespacesQueryKey() {
  return ['system', '/system/namespaces'] as const
}

export function getSystemNamespacesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSystemNamespacesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.system.namespaces.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSystemNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>
            >
          >,
          ReturnType<typeof getSystemNamespacesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemNamespacesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSystemNamespacesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.system.namespaces.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAsyncFunctionFunctionNameMutationKey() {
  return ['async-function', '/async-function/:functionName', 'POST'] as const
}

export function getPostAsyncFunctionFunctionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['async-function'][':functionName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['async-function'][':functionName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAsyncFunctionFunctionNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['async-function'][':functionName']['$post']>,
    ) {
      return parseResponse(client['async-function'][':functionName'].$post(args, options))
    },
  })
}

export function usePostAsyncFunctionFunctionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['async-function'][':functionName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['async-function'][':functionName']['$post']>,
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
  const mutationDefaults = getPostAsyncFunctionFunctionNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostAsyncFunctionFunctionNameNamespaceMutationKey() {
  return ['async-function', '/async-function/:functionName.{namespace}', 'POST'] as const
}

export function getPostAsyncFunctionFunctionNameNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['async-function'][':functionName.{namespace}']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['async-function'][':functionName.{namespace}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAsyncFunctionFunctionNameNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['async-function'][':functionName.{namespace}']['$post']
      >,
    ) {
      return parseResponse(
        client['async-function'][':functionName.{namespace}'].$post(args, options),
      )
    },
  })
}

export function usePostAsyncFunctionFunctionNameNamespace<
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
                    (typeof client)['async-function'][':functionName.{namespace}']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['async-function'][':functionName.{namespace}']['$post']>,
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
  const mutationDefaults = getPostAsyncFunctionFunctionNameNamespaceMutationOptions<
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

export function getPostFunctionFunctionNameMutationKey() {
  return ['function', '/function/:functionName', 'POST'] as const
}

export function getPostFunctionFunctionNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.function)[':functionName']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.function)[':functionName']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionFunctionNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.function)[':functionName']['$post']>) {
      return parseResponse(client.function[':functionName'].$post(args, options))
    },
  })
}

export function usePostFunctionFunctionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.function)[':functionName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.function)[':functionName']['$post']>,
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
  const mutationDefaults = getPostFunctionFunctionNameMutationOptions<TError, TOnMutateResult>(
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

export function getPostFunctionFunctionNameNamespaceMutationKey() {
  return ['function', '/function/:functionName.{namespace}', 'POST'] as const
}

export function getPostFunctionFunctionNameNamespaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.function)[':functionName.{namespace}']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.function)[':functionName.{namespace}']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostFunctionFunctionNameNamespaceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.function)[':functionName.{namespace}']['$post']>,
    ) {
      return parseResponse(client.function[':functionName.{namespace}'].$post(args, options))
    },
  })
}

export function usePostFunctionFunctionNameNamespace<
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
                Awaited<ReturnType<(typeof client.function)[':functionName.{namespace}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.function)[':functionName.{namespace}']['$post']>,
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
  const mutationDefaults = getPostFunctionFunctionNameNamespaceMutationOptions<
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
