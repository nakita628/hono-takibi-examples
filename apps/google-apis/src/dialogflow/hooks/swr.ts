import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV3beta1Key() {
  return ['v3beta1'] as const
}

export function getGetV3beta1AgentTestCasesCalculateCoverageKey(
  args: InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:agent/testCases:calculateCoverage', args] as const
}

export function useGetV3beta1AgentTestCasesCalculateCoverage<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
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
        ? getGetV3beta1AgentTestCasesCalculateCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3beta1[':agent']['testCases:calculateCoverage'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1AgentTestCasesCalculateCoverage<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
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
        ? getGetV3beta1AgentTestCasesCalculateCoverageKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3beta1[':agent']['testCases:calculateCoverage'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1BaseVersionCompareVersionsKey() {
  return ['v3beta1', '/v3beta1/:baseVersion:compareVersions', 'POST'] as const
}

export function usePostV3beta1BaseVersionCompareVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1BaseVersionCompareVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>
        },
      ) => parseResponse(client.v3beta1[':baseVersion:compareVersions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1EnvironmentDeployFlowKey() {
  return ['v3beta1', '/v3beta1/:environment:deployFlow', 'POST'] as const
}

export function usePostV3beta1EnvironmentDeployFlow<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1EnvironmentDeployFlowKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':environment:deployFlow']['$post']> },
      ) => parseResponse(client.v3beta1[':environment:deployFlow'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1EnvironmentRunContinuousTestKey() {
  return ['v3beta1', '/v3beta1/:environment:runContinuousTest', 'POST'] as const
}

export function usePostV3beta1EnvironmentRunContinuousTest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1EnvironmentRunContinuousTestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>
        },
      ) =>
        parseResponse(client.v3beta1[':environment:runContinuousTest'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1NameKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name', args] as const
}

export function useGetV3beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1Name<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV3beta1NameKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3beta1NameKey() {
  return ['v3beta1', '/v3beta1/:name', 'DELETE'] as const
}

export function useDeleteV3beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name']['$delete']> },
      ) => parseResponse(client.v3beta1[':name'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchV3beta1NameKey() {
  return ['v3beta1', '/v3beta1/:name', 'PATCH'] as const
}

export function usePatchV3beta1Name<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchV3beta1NameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name']['$patch']> },
      ) => parseResponse(client.v3beta1[':name'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1NameLocationsKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name/locations', args] as const
}

export function useGetV3beta1NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
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
        ? getGetV3beta1NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1NameLocations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
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
        ? getGetV3beta1NameLocationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3beta1NameOperationsKey(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name/operations', args] as const
}

export function useGetV3beta1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
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
        ? getGetV3beta1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1NameOperations<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
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
        ? getGetV3beta1NameOperationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':name'].operations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1NameCancelKey() {
  return ['v3beta1', '/v3beta1/:name:cancel', 'POST'] as const
}

export function usePostV3beta1NameCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']> },
      ) => parseResponse(client.v3beta1[':name:cancel'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameExportKey() {
  return ['v3beta1', '/v3beta1/:name:export', 'POST'] as const
}

export function usePostV3beta1NameExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:export']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:export']['$post']> },
      ) => parseResponse(client.v3beta1[':name:export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameLoadKey() {
  return ['v3beta1', '/v3beta1/:name:load', 'POST'] as const
}

export function usePostV3beta1NameLoad<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:load']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:load']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameLoadKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:load']['$post']> },
      ) => parseResponse(client.v3beta1[':name:load'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1NameLookupEnvironmentHistoryKey(
  args: InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:name:lookupEnvironmentHistory', args] as const
}

export function useGetV3beta1NameLookupEnvironmentHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>>
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
        ? getGetV3beta1NameLookupEnvironmentHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':name:lookupEnvironmentHistory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1NameLookupEnvironmentHistory<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>>
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
        ? getGetV3beta1NameLookupEnvironmentHistoryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':name:lookupEnvironmentHistory'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1NameRestoreKey() {
  return ['v3beta1', '/v3beta1/:name:restore', 'POST'] as const
}

export function usePostV3beta1NameRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:restore']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameRestoreKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:restore']['$post']> },
      ) => parseResponse(client.v3beta1[':name:restore'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameRunKey() {
  return ['v3beta1', '/v3beta1/:name:run', 'POST'] as const
}

export function usePostV3beta1NameRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:run']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:run']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:run']['$post']> },
      ) => parseResponse(client.v3beta1[':name:run'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameStartKey() {
  return ['v3beta1', '/v3beta1/:name:start', 'POST'] as const
}

export function usePostV3beta1NameStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:start']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:start']['$post']> },
      ) => parseResponse(client.v3beta1[':name:start'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameStopKey() {
  return ['v3beta1', '/v3beta1/:name:stop', 'POST'] as const
}

export function usePostV3beta1NameStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:stop']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:stop']['$post']> },
      ) => parseResponse(client.v3beta1[':name:stop'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameTrainKey() {
  return ['v3beta1', '/v3beta1/:name:train', 'POST'] as const
}

export function usePostV3beta1NameTrain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:train']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:train']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameTrainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:train']['$post']> },
      ) => parseResponse(client.v3beta1[':name:train'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1NameValidateKey() {
  return ['v3beta1', '/v3beta1/:name:validate', 'POST'] as const
}

export function usePostV3beta1NameValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':name:validate']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':name:validate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1NameValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':name:validate']['$post']> },
      ) => parseResponse(client.v3beta1[':name:validate'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentAgentsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/agents', args] as const
}

export function useGetV3beta1ParentAgents<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
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
        ? getGetV3beta1ParentAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentAgents<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
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
        ? getGetV3beta1ParentAgentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].agents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentAgentsKey() {
  return ['v3beta1', '/v3beta1/:parent/agents', 'POST'] as const
}

export function usePostV3beta1ParentAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].agents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentChangelogsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/changelogs', args] as const
}

export function useGetV3beta1ParentChangelogs<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
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
        ? getGetV3beta1ParentChangelogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].changelogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentChangelogs<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
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
        ? getGetV3beta1ParentChangelogsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].changelogs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3beta1ParentContinuousTestResultsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/continuousTestResults', args] as const
}

export function useGetV3beta1ParentContinuousTestResults<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>>
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
        ? getGetV3beta1ParentContinuousTestResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].continuousTestResults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentContinuousTestResults<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>>
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
        ? getGetV3beta1ParentContinuousTestResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].continuousTestResults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3beta1ParentDeploymentsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/deployments', args] as const
}

export function useGetV3beta1ParentDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
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
        ? getGetV3beta1ParentDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentDeployments<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
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
        ? getGetV3beta1ParentDeploymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].deployments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3beta1ParentEntityTypesKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/entityTypes', args] as const
}

export function useGetV3beta1ParentEntityTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
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
        ? getGetV3beta1ParentEntityTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].entityTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentEntityTypes<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
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
        ? getGetV3beta1ParentEntityTypesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].entityTypes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentEntityTypesKey() {
  return ['v3beta1', '/v3beta1/:parent/entityTypes', 'POST'] as const
}

export function usePostV3beta1ParentEntityTypes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentEntityTypesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].entityTypes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentEnvironmentsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/environments', args] as const
}

export function useGetV3beta1ParentEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
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
        ? getGetV3beta1ParentEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentEnvironments<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
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
        ? getGetV3beta1ParentEnvironmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].environments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentEnvironmentsKey() {
  return ['v3beta1', '/v3beta1/:parent/environments', 'POST'] as const
}

export function usePostV3beta1ParentEnvironments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentEnvironmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].environments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentExperimentsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/experiments', args] as const
}

export function useGetV3beta1ParentExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
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
        ? getGetV3beta1ParentExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentExperiments<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
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
        ? getGetV3beta1ParentExperimentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].experiments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentExperimentsKey() {
  return ['v3beta1', '/v3beta1/:parent/experiments', 'POST'] as const
}

export function usePostV3beta1ParentExperiments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentExperimentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].experiments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentFlowsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/flows', args] as const
}

export function useGetV3beta1ParentFlows<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
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
        ? getGetV3beta1ParentFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentFlows<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
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
        ? getGetV3beta1ParentFlowsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].flows.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentFlowsKey() {
  return ['v3beta1', '/v3beta1/:parent/flows', 'POST'] as const
}

export function usePostV3beta1ParentFlows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentFlowsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].flows.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentFlowsImportKey() {
  return ['v3beta1', '/v3beta1/:parent/flows:import', 'POST'] as const
}

export function usePostV3beta1ParentFlowsImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentFlowsImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['flows:import']['$post']> },
      ) => parseResponse(client.v3beta1[':parent']['flows:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentIntentsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/intents', args] as const
}

export function useGetV3beta1ParentIntents<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
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
        ? getGetV3beta1ParentIntentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].intents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentIntents<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
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
        ? getGetV3beta1ParentIntentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].intents.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentIntentsKey() {
  return ['v3beta1', '/v3beta1/:parent/intents', 'POST'] as const
}

export function usePostV3beta1ParentIntents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentIntentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].intents.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentPagesKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/pages', args] as const
}

export function useGetV3beta1ParentPages<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
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
        ? getGetV3beta1ParentPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentPages<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
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
        ? getGetV3beta1ParentPagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].pages.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentPagesKey() {
  return ['v3beta1', '/v3beta1/:parent/pages', 'POST'] as const
}

export function usePostV3beta1ParentPages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentPagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].pages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentResultsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/results', args] as const
}

export function useGetV3beta1ParentResults<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
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
        ? getGetV3beta1ParentResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentResults<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
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
        ? getGetV3beta1ParentResultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].results.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3beta1ParentSecuritySettingsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/securitySettings', args] as const
}

export function useGetV3beta1ParentSecuritySettings<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
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
        ? getGetV3beta1ParentSecuritySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].securitySettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentSecuritySettings<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
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
        ? getGetV3beta1ParentSecuritySettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].securitySettings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentSecuritySettingsKey() {
  return ['v3beta1', '/v3beta1/:parent/securitySettings', 'POST'] as const
}

export function usePostV3beta1ParentSecuritySettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentSecuritySettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>
        },
      ) => parseResponse(client.v3beta1[':parent'].securitySettings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentTestCasesKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/testCases', args] as const
}

export function useGetV3beta1ParentTestCases<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
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
        ? getGetV3beta1ParentTestCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].testCases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentTestCases<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
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
        ? getGetV3beta1ParentTestCasesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].testCases.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentTestCasesKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases', 'POST'] as const
}

export function usePostV3beta1ParentTestCases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTestCasesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].testCases.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentTestCasesBatchDeleteKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:batchDelete', 'POST'] as const
}

export function usePostV3beta1ParentTestCasesBatchDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTestCasesBatchDeleteKey()
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
            (typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']
          >
        },
      ) =>
        parseResponse(client.v3beta1[':parent']['testCases:batchDelete'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentTestCasesBatchRunKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:batchRun', 'POST'] as const
}

export function usePostV3beta1ParentTestCasesBatchRun<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTestCasesBatchRunKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>
        },
      ) => parseResponse(client.v3beta1[':parent']['testCases:batchRun'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentTestCasesExportKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:export', 'POST'] as const
}

export function usePostV3beta1ParentTestCasesExport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTestCasesExportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>
        },
      ) => parseResponse(client.v3beta1[':parent']['testCases:export'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1ParentTestCasesImportKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:import', 'POST'] as const
}

export function usePostV3beta1ParentTestCasesImport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTestCasesImportKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>
        },
      ) => parseResponse(client.v3beta1[':parent']['testCases:import'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentTransitionRouteGroupsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/transitionRouteGroups', args] as const
}

export function useGetV3beta1ParentTransitionRouteGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>>
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
        ? getGetV3beta1ParentTransitionRouteGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].transitionRouteGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentTransitionRouteGroups<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>>
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
        ? getGetV3beta1ParentTransitionRouteGroupsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3beta1[':parent'].transitionRouteGroups.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentTransitionRouteGroupsKey() {
  return ['v3beta1', '/v3beta1/:parent/transitionRouteGroups', 'POST'] as const
}

export function usePostV3beta1ParentTransitionRouteGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentTransitionRouteGroupsKey()
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
            (typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']
          >
        },
      ) => parseResponse(client.v3beta1[':parent'].transitionRouteGroups.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentVersionsKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/versions', args] as const
}

export function useGetV3beta1ParentVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
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
        ? getGetV3beta1ParentVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentVersions<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
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
        ? getGetV3beta1ParentVersionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].versions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentVersionsKey() {
  return ['v3beta1', '/v3beta1/:parent/versions', 'POST'] as const
}

export function usePostV3beta1ParentVersions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentVersionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].versions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3beta1ParentWebhooksKey(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>,
) {
  return ['v3beta1', '/v3beta1/:parent/webhooks', args] as const
}

export function useGetV3beta1ParentWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
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
        ? getGetV3beta1ParentWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3beta1ParentWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
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
        ? getGetV3beta1ParentWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3beta1[':parent'].webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3beta1ParentWebhooksKey() {
  return ['v3beta1', '/v3beta1/:parent/webhooks', 'POST'] as const
}

export function usePostV3beta1ParentWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1ParentWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$post']> },
      ) => parseResponse(client.v3beta1[':parent'].webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1SessionDetectIntentKey() {
  return ['v3beta1', '/v3beta1/:session:detectIntent', 'POST'] as const
}

export function usePostV3beta1SessionDetectIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':session:detectIntent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':session:detectIntent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1SessionDetectIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':session:detectIntent']['$post']> },
      ) => parseResponse(client.v3beta1[':session:detectIntent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1SessionFulfillIntentKey() {
  return ['v3beta1', '/v3beta1/:session:fulfillIntent', 'POST'] as const
}

export function usePostV3beta1SessionFulfillIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1SessionFulfillIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']> },
      ) => parseResponse(client.v3beta1[':session:fulfillIntent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3beta1SessionMatchIntentKey() {
  return ['v3beta1', '/v3beta1/:session:matchIntent', 'POST'] as const
}

export function usePostV3beta1SessionMatchIntent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':session:matchIntent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3beta1)[':session:matchIntent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3beta1SessionMatchIntentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3beta1)[':session:matchIntent']['$post']> },
      ) => parseResponse(client.v3beta1[':session:matchIntent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
