import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetHealthzKey() {
  return ['healthz', '/healthz'] as const
}

export function useGetHealthz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthzKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHealthz<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHealthzKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.healthz.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.healthz.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetMetricsKey() {
  return ['metrics', '/metrics'] as const
}

export function useGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetrics<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetricsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metrics.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.metrics.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemInfoKey() {
  return ['system', '/system/info'] as const
}

export function useGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
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
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemInfo<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>>,
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
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.info.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.info.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSystemAlertKey() {
  return ['system', '/system/alert', 'POST'] as const
}

export function usePostSystemAlert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.alert.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.alert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemAlertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.alert.$post> }) =>
        parseResponse(client.system.alert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemFunctionsKey() {
  return ['system', '/system/functions'] as const
}

export function useGetSystemFunctions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemFunctionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.functions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemFunctions<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemFunctionsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.functions.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSystemFunctionsKey() {
  return ['system', '/system/functions', 'PUT'] as const
}

export function usePutSystemFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.functions.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSystemFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.functions.$put> }) =>
        parseResponse(client.system.functions.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemFunctionsKey() {
  return ['system', '/system/functions', 'POST'] as const
}

export function usePostSystemFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.functions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.functions.$post> }) =>
        parseResponse(client.system.functions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSystemFunctionsKey() {
  return ['system', '/system/functions', 'DELETE'] as const
}

export function useDeleteSystemFunctions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.functions.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.functions.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSystemFunctionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.functions.$delete> }) =>
        parseResponse(client.system.functions.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemScaleFunctionFunctionNameKey() {
  return ['system', '/system/scale-function/:functionName', 'POST'] as const
}

export function usePostSystemScaleFunctionFunctionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.system)['scale-function'][':functionName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemScaleFunctionFunctionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.system)['scale-function'][':functionName']['$post']>
        },
      ) =>
        parseResponse(client.system['scale-function'][':functionName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemFunctionFunctionNameKey(
  args: InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
) {
  return ['system', '/system/function/:functionName', args] as const
}

export function useGetSystemFunctionFunctionName<TError = unknown>(
  args: InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemFunctionFunctionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.function[':functionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemFunctionFunctionName<TError = unknown>(
  args: InferRequestType<(typeof client.system.function)[':functionName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSystemFunctionFunctionNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.system.function)[':functionName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.function[':functionName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemSecretsKey() {
  return ['system', '/system/secrets'] as const
}

export function useGetSystemSecrets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemSecretsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.secrets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemSecrets<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemSecretsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.secrets.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSystemSecretsKey() {
  return ['system', '/system/secrets', 'PUT'] as const
}

export function usePutSystemSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.secrets.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSystemSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.secrets.$put> }) =>
        parseResponse(client.system.secrets.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSystemSecretsKey() {
  return ['system', '/system/secrets', 'POST'] as const
}

export function usePostSystemSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.system.secrets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSystemSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.secrets.$post> }) =>
        parseResponse(client.system.secrets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSystemSecretsKey() {
  return ['system', '/system/secrets', 'DELETE'] as const
}

export function useDeleteSystemSecrets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.secrets.$delete>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.system.secrets.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSystemSecretsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.system.secrets.$delete> }) =>
        parseResponse(client.system.secrets.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSystemLogsKey(args: InferRequestType<typeof client.system.logs.$get>) {
  return ['system', '/system/logs', args] as const
}

export function useGetSystemLogs<TError = unknown>(
  args: InferRequestType<typeof client.system.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemLogs<TError = unknown>(
  args: InferRequestType<typeof client.system.logs.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemLogsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.logs.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.logs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSystemNamespacesKey() {
  return ['system', '/system/namespaces'] as const
}

export function useGetSystemNamespaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemNamespacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.namespaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSystemNamespaces<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSystemNamespacesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.system.namespaces.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.system.namespaces.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAsyncFunctionFunctionNameKey() {
  return ['async-function', '/async-function/:functionName', 'POST'] as const
}

export function usePostAsyncFunctionFunctionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['async-function'][':functionName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['async-function'][':functionName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAsyncFunctionFunctionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['async-function'][':functionName']['$post']> },
      ) => parseResponse(client['async-function'][':functionName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAsyncFunctionFunctionNameNamespaceKey() {
  return ['async-function', '/async-function/:functionName.:namespace', 'POST'] as const
}

export function usePostAsyncFunctionFunctionNameNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['async-function'][':functionName.:namespace']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['async-function'][':functionName.:namespace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAsyncFunctionFunctionNameNamespaceKey()
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
            (typeof client)['async-function'][':functionName.:namespace']['$post']
          >
        },
      ) =>
        parseResponse(
          client['async-function'][':functionName.:namespace'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostFunctionFunctionNameKey() {
  return ['function', '/function/:functionName', 'POST'] as const
}

export function usePostFunctionFunctionName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.function)[':functionName']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.function)[':functionName']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionFunctionNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.function)[':functionName']['$post']> },
      ) => parseResponse(client.function[':functionName'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostFunctionFunctionNameNamespaceKey() {
  return ['function', '/function/:functionName.:namespace', 'POST'] as const
}

export function usePostFunctionFunctionNameNamespace<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.function)[':functionName.:namespace']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.function)[':functionName.:namespace']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFunctionFunctionNameNamespaceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.function)[':functionName.:namespace']['$post']> },
      ) => parseResponse(client.function[':functionName.:namespace'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
