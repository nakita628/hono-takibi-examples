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

export function getHealthzQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthzQueryKey>
  >({
    queryKey: getHealthzQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.healthz.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createHealthz<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getHealthzQueryKey>
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
    return { ...getHealthzQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getMetricsQueryKey() {
  return ['metrics', '/metrics'] as const
}

export function getMetricsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMetricsQueryKey>
  >({
    queryKey: getMetricsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.metrics.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetrics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetricsQueryKey>
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
    return { ...getMetricsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
}

export function getSystemInfoQueryKey() {
  return ['system', '/system/info'] as const
}

export function getSystemInfoQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemInfoQueryKey>
  >({
    queryKey: getSystemInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.info.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSystemInfoQueryKey>
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
    return { ...getSystemInfoQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostSystemAlert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.alert.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.system.alert.$post>,
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
    const mutationDefaults = getPostSystemAlertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSystemFunctionsQueryKey() {
  return ['system', '/system/functions'] as const
}

export function getSystemFunctionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemFunctionsQueryKey>
  >({
    queryKey: getSystemFunctionsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.functions.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemFunctions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSystemFunctionsQueryKey>
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
    return { ...getSystemFunctionsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutSystemFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.functions.$put>,
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
    const mutationDefaults = getPutSystemFunctionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSystemFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.functions.$post>,
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
    const mutationDefaults = getPostSystemFunctionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSystemFunctions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$delete>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.functions.$delete>,
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
    const mutationDefaults = getDeleteSystemFunctionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSystemScaleFunctionFunctionName<
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
                  ReturnType<(typeof client.system)['scale-function'][':functionName']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>,
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
    const mutationDefaults = getPostSystemScaleFunctionFunctionNameMutationOptions<
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

export function getSystemFunctionFunctionNameQueryKey(
  args: InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
) {
  return ['system', '/system/function/:functionName', args] as const
}

export function getSystemFunctionFunctionNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getSystemFunctionFunctionNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.function[':functionName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemFunctionFunctionName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getSystemFunctionFunctionNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getSystemSecretsQueryKey() {
  return ['system', '/system/secrets'] as const
}

export function getSystemSecretsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemSecretsQueryKey>
  >({
    queryKey: getSystemSecretsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.secrets.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemSecrets<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSystemSecretsQueryKey>
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
    return { ...getSystemSecretsQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPutSystemSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.system.secrets.$put>,
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
    const mutationDefaults = getPutSystemSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostSystemSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.system.secrets.$post>,
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
    const mutationDefaults = getPostSystemSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteSystemSecrets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$delete>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.system.secrets.$delete>,
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
    const mutationDefaults = getDeleteSystemSecretsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getSystemLogsQueryKey(args: InferRequestType<typeof client.system.logs.$get>) {
  return ['system', '/system/logs', args] as const
}

export function getSystemLogsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.system.logs.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSystemLogsQueryKey>
  >({
    queryKey: getSystemLogsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.system.logs.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createSystemLogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.system.logs.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getSystemLogsQueryKey>
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
    return { ...getSystemLogsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getSystemNamespacesQueryKey() {
  return ['system', '/system/namespaces'] as const
}

export function getSystemNamespacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSystemNamespacesQueryKey>
  >({
    queryKey: getSystemNamespacesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.system.namespaces.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSystemNamespaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSystemNamespacesQueryKey>
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
    return { ...getSystemNamespacesQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPostAsyncFunctionFunctionName<
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
                Awaited<ReturnType<(typeof client)['async-function'][':functionName']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['async-function'][':functionName']['$post']>,
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
    const mutationDefaults = getPostAsyncFunctionFunctionNameMutationOptions<
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

export function createPostAsyncFunctionFunctionNameNamespace<
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
                    (typeof client)['async-function'][':functionName.{namespace}']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['async-function'][':functionName.{namespace}']['$post']>,
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
    const mutationDefaults = getPostAsyncFunctionFunctionNameNamespaceMutationOptions<
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

export function createPostFunctionFunctionName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostFunctionFunctionNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFunctionFunctionNameNamespace<
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
                Awaited<ReturnType<(typeof client.function)[':functionName.{namespace}']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.function)[':functionName.{namespace}']['$post']>,
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
    const mutationDefaults = getPostFunctionFunctionNameNamespaceMutationOptions<
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
