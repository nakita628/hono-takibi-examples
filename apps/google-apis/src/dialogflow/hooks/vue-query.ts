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

export function getV3beta1Key() {
  return ['v3beta1'] as const
}

export function getV3beta1AgentTestCasesCalculateCoverageQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:agent/testCases:calculateCoverage', toValue(args)] as const
}

export function getV3beta1AgentTestCasesCalculateCoverageQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1AgentTestCasesCalculateCoverageQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':agent']['testCases:calculateCoverage'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1AgentTestCasesCalculateCoverage<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
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
                    (typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']
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
                    (typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3beta1AgentTestCasesCalculateCoverageQueryKey>
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
            ReturnType<(typeof client.v3beta1)[':agent']['testCases:calculateCoverage']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1AgentTestCasesCalculateCoverageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1AgentTestCasesCalculateCoverageQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':agent']['testCases:calculateCoverage'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1BaseVersionCompareVersionsMutationKey() {
  return ['v3beta1', '/v3beta1/:baseVersion:compareVersions', 'POST'] as const
}

export function getPostV3beta1BaseVersionCompareVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1BaseVersionCompareVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':baseVersion:compareVersions'].$post(args, options))
    },
  })
}

export function usePostV3beta1BaseVersionCompareVersions<
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
                  ReturnType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':baseVersion:compareVersions']['$post']>,
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
  const mutationDefaults = getPostV3beta1BaseVersionCompareVersionsMutationOptions<
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

export function getPostV3beta1EnvironmentDeployFlowMutationKey() {
  return ['v3beta1', '/v3beta1/:environment:deployFlow', 'POST'] as const
}

export function getPostV3beta1EnvironmentDeployFlowMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1EnvironmentDeployFlowMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':environment:deployFlow'].$post(args, options))
    },
  })
}

export function usePostV3beta1EnvironmentDeployFlow<
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
                Awaited<ReturnType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':environment:deployFlow']['$post']>,
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
  const mutationDefaults = getPostV3beta1EnvironmentDeployFlowMutationOptions<
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

export function getPostV3beta1EnvironmentRunContinuousTestMutationKey() {
  return ['v3beta1', '/v3beta1/:environment:runContinuousTest', 'POST'] as const
}

export function getPostV3beta1EnvironmentRunContinuousTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1EnvironmentRunContinuousTestMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':environment:runContinuousTest'].$post(args, options))
    },
  })
}

export function usePostV3beta1EnvironmentRunContinuousTest<
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
                  ReturnType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':environment:runContinuousTest']['$post']>,
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
  const mutationDefaults = getPostV3beta1EnvironmentRunContinuousTestMutationOptions<
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

export function getV3beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:name', toValue(args)] as const
}

export function getV3beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV3beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3beta1NameMutationKey() {
  return ['v3beta1', '/v3beta1/:name', 'DELETE'] as const
}

export function getDeleteV3beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name']['$delete']>) {
      return parseResponse(client.v3beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV3beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV3beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV3beta1NameMutationKey() {
  return ['v3beta1', '/v3beta1/:name', 'PATCH'] as const
}

export function getPatchV3beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV3beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name']['$patch']>) {
      return parseResponse(client.v3beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV3beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV3beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1NameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:name/locations', toValue(args)] as const
}

export function getV3beta1NameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1NameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1NameLocationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1NameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3beta1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:name/operations', toValue(args)] as const
}

export function getV3beta1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1NameCancelMutationKey() {
  return ['v3beta1', '/v3beta1/:name:cancel', 'POST'] as const
}

export function getPostV3beta1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>) {
      return parseResponse(client.v3beta1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameExportMutationKey() {
  return ['v3beta1', '/v3beta1/:name:export', 'POST'] as const
}

export function getPostV3beta1NameExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:export']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameExportMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:export']['$post']>) {
      return parseResponse(client.v3beta1[':name:export'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameExport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:export']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameExportMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameLoadMutationKey() {
  return ['v3beta1', '/v3beta1/:name:load', 'POST'] as const
}

export function getPostV3beta1NameLoadMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:load']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:load']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameLoadMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:load']['$post']>) {
      return parseResponse(client.v3beta1[':name:load'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameLoad<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:load']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:load']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameLoadMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1NameLookupEnvironmentHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:name:lookupEnvironmentHistory', toValue(args)] as const
}

export function getV3beta1NameLookupEnvironmentHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1NameLookupEnvironmentHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':name:lookupEnvironmentHistory'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1NameLookupEnvironmentHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>
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
                  ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3beta1NameLookupEnvironmentHistoryQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':name:lookupEnvironmentHistory']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1NameLookupEnvironmentHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1NameLookupEnvironmentHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':name:lookupEnvironmentHistory'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1NameRestoreMutationKey() {
  return ['v3beta1', '/v3beta1/:name:restore', 'POST'] as const
}

export function getPostV3beta1NameRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:restore']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:restore']['$post']>) {
      return parseResponse(client.v3beta1[':name:restore'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:restore']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:restore']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameRestoreMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameRunMutationKey() {
  return ['v3beta1', '/v3beta1/:name:run', 'POST'] as const
}

export function getPostV3beta1NameRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:run']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:run']['$post']>) {
      return parseResponse(client.v3beta1[':name:run'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:run']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameStartMutationKey() {
  return ['v3beta1', '/v3beta1/:name:start', 'POST'] as const
}

export function getPostV3beta1NameStartMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:start']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:start']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameStartMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:start']['$post']>) {
      return parseResponse(client.v3beta1[':name:start'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameStart<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:start']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:start']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameStartMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameStopMutationKey() {
  return ['v3beta1', '/v3beta1/:name:stop', 'POST'] as const
}

export function getPostV3beta1NameStopMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:stop']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:stop']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameStopMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:stop']['$post']>) {
      return parseResponse(client.v3beta1[':name:stop'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameStop<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:stop']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:stop']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameStopMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameTrainMutationKey() {
  return ['v3beta1', '/v3beta1/:name:train', 'POST'] as const
}

export function getPostV3beta1NameTrainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':name:train']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:train']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameTrainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:train']['$post']>) {
      return parseResponse(client.v3beta1[':name:train'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameTrain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:train']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:train']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameTrainMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1NameValidateMutationKey() {
  return ['v3beta1', '/v3beta1/:name:validate', 'POST'] as const
}

export function getPostV3beta1NameValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':name:validate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':name:validate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1NameValidateMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':name:validate']['$post']>) {
      return parseResponse(client.v3beta1[':name:validate'].$post(args, options))
    },
  })
}

export function usePostV3beta1NameValidate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':name:validate']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':name:validate']['$post']>,
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
  const mutationDefaults = getPostV3beta1NameValidateMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentAgentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/agents', toValue(args)] as const
}

export function getV3beta1ParentAgentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentAgentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].agents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentAgents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentAgentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentAgentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentAgentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].agents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentAgentsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/agents', 'POST'] as const
}

export function getPostV3beta1ParentAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].agents.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentAgents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['agents']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['agents']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentAgentsMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentChangelogsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/changelogs', toValue(args)] as const
}

export function getV3beta1ParentChangelogsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentChangelogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].changelogs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentChangelogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentChangelogsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['changelogs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentChangelogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentChangelogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].changelogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3beta1ParentContinuousTestResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/continuousTestResults', toValue(args)] as const
}

export function getV3beta1ParentContinuousTestResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentContinuousTestResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].continuousTestResults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentContinuousTestResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>
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
                  ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentContinuousTestResultsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['continuousTestResults']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentContinuousTestResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentContinuousTestResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].continuousTestResults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3beta1ParentDeploymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/deployments', toValue(args)] as const
}

export function getV3beta1ParentDeploymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentDeploymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].deployments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['deployments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentDeploymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentDeploymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentDeploymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].deployments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3beta1ParentEntityTypesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/entityTypes', toValue(args)] as const
}

export function getV3beta1ParentEntityTypesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentEntityTypesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].entityTypes.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentEntityTypes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentEntityTypesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentEntityTypesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentEntityTypesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].entityTypes.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentEntityTypesMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/entityTypes', 'POST'] as const
}

export function getPostV3beta1ParentEntityTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentEntityTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].entityTypes.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentEntityTypes<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['entityTypes']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentEntityTypesMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentEnvironmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/environments', toValue(args)] as const
}

export function getV3beta1ParentEnvironmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentEnvironmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].environments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentEnvironments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentEnvironmentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentEnvironmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentEnvironmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].environments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentEnvironmentsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/environments', 'POST'] as const
}

export function getPostV3beta1ParentEnvironmentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentEnvironmentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].environments.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentEnvironments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['environments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['environments']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentEnvironmentsMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentExperimentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/experiments', toValue(args)] as const
}

export function getV3beta1ParentExperimentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentExperimentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].experiments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentExperiments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentExperimentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentExperimentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentExperimentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].experiments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentExperimentsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/experiments', 'POST'] as const
}

export function getPostV3beta1ParentExperimentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentExperimentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].experiments.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentExperiments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['experiments']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['experiments']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentExperimentsMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentFlowsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/flows', toValue(args)] as const
}

export function getV3beta1ParentFlowsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentFlowsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].flows.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentFlows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentFlowsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentFlowsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentFlowsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].flows.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentFlowsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/flows', 'POST'] as const
}

export function getPostV3beta1ParentFlowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentFlowsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$post']>) {
      return parseResponse(client.v3beta1[':parent'].flows.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentFlows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['flows']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentFlowsMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1ParentFlowsImportMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/flows:import', 'POST'] as const
}

export function getPostV3beta1ParentFlowsImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentFlowsImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent']['flows:import'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentFlowsImport<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['flows:import']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentFlowsImportMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentIntentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/intents', toValue(args)] as const
}

export function getV3beta1ParentIntentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentIntentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].intents.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentIntents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentIntentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentIntentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentIntentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].intents.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentIntentsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/intents', 'POST'] as const
}

export function getPostV3beta1ParentIntentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentIntentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].intents.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentIntents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['intents']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['intents']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentIntentsMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentPagesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/pages', toValue(args)] as const
}

export function getV3beta1ParentPagesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentPagesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].pages.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentPages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentPagesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentPagesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentPagesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].pages.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentPagesMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/pages', 'POST'] as const
}

export function getPostV3beta1ParentPagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentPagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$post']>) {
      return parseResponse(client.v3beta1[':parent'].pages.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentPages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['pages']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['pages']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentPagesMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentResultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/results', toValue(args)] as const
}

export function getV3beta1ParentResultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentResults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['results']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentResultsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['results']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3beta1ParentSecuritySettingsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/securitySettings', toValue(args)] as const
}

export function getV3beta1ParentSecuritySettingsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentSecuritySettingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].securitySettings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentSecuritySettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentSecuritySettingsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentSecuritySettingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentSecuritySettingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].securitySettings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentSecuritySettingsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/securitySettings', 'POST'] as const
}

export function getPostV3beta1ParentSecuritySettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentSecuritySettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].securitySettings.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentSecuritySettings<
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
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['securitySettings']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentSecuritySettingsMutationOptions<
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

export function getV3beta1ParentTestCasesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/testCases', toValue(args)] as const
}

export function getV3beta1ParentTestCasesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentTestCasesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].testCases.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentTestCases<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentTestCasesQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentTestCasesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentTestCasesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].testCases.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentTestCasesMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases', 'POST'] as const
}

export function getPostV3beta1ParentTestCasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTestCasesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].testCases.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTestCases<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['testCases']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentTestCasesMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1ParentTestCasesBatchDeleteMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:batchDelete', 'POST'] as const
}

export function getPostV3beta1ParentTestCasesBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTestCasesBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent']['testCases:batchDelete'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTestCasesBatchDelete<
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
                  ReturnType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchDelete']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentTestCasesBatchDeleteMutationOptions<
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

export function getPostV3beta1ParentTestCasesBatchRunMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:batchRun', 'POST'] as const
}

export function getPostV3beta1ParentTestCasesBatchRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTestCasesBatchRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent']['testCases:batchRun'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTestCasesBatchRun<
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
                  ReturnType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['testCases:batchRun']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentTestCasesBatchRunMutationOptions<
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

export function getPostV3beta1ParentTestCasesExportMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:export', 'POST'] as const
}

export function getPostV3beta1ParentTestCasesExportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTestCasesExportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent']['testCases:export'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTestCasesExport<
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
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['testCases:export']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentTestCasesExportMutationOptions<
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

export function getPostV3beta1ParentTestCasesImportMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/testCases:import', 'POST'] as const
}

export function getPostV3beta1ParentTestCasesImportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTestCasesImportMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent']['testCases:import'].$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTestCasesImport<
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
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['testCases:import']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentTestCasesImportMutationOptions<
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

export function getV3beta1ParentTransitionRouteGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>
  >,
) {
  return ['v3beta1', '/v3beta1/:parent/transitionRouteGroups', toValue(args)] as const
}

export function getV3beta1ParentTransitionRouteGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentTransitionRouteGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].transitionRouteGroups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentTransitionRouteGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>
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
                  ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentTransitionRouteGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentTransitionRouteGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentTransitionRouteGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].transitionRouteGroups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentTransitionRouteGroupsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/transitionRouteGroups', 'POST'] as const
}

export function getPostV3beta1ParentTransitionRouteGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentTransitionRouteGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].transitionRouteGroups.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentTransitionRouteGroups<
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
                  ReturnType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['transitionRouteGroups']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentTransitionRouteGroupsMutationOptions<
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

export function getV3beta1ParentVersionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/versions', toValue(args)] as const
}

export function getV3beta1ParentVersionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentVersionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].versions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentVersionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentVersionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentVersionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].versions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentVersionsMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/versions', 'POST'] as const
}

export function getPostV3beta1ParentVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].versions.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentVersions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['versions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['versions']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentVersionsMutationOptions<TError, TOnMutateResult>(
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

export function getV3beta1ParentWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>,
) {
  return ['v3beta1', '/v3beta1/:parent/webhooks', toValue(args)] as const
}

export function getV3beta1ParentWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3beta1ParentWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3beta1[':parent'].webhooks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3beta1ParentWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3beta1ParentWebhooksQueryKey>
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
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3beta1ParentWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3beta1ParentWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3beta1[':parent'].webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3beta1ParentWebhooksMutationKey() {
  return ['v3beta1', '/v3beta1/:parent/webhooks', 'POST'] as const
}

export function getPostV3beta1ParentWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1ParentWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':parent'].webhooks.$post(args, options))
    },
  })
}

export function usePostV3beta1ParentWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':parent']['webhooks']['$post']>,
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
  const mutationDefaults = getPostV3beta1ParentWebhooksMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3beta1SessionDetectIntentMutationKey() {
  return ['v3beta1', '/v3beta1/:session:detectIntent', 'POST'] as const
}

export function getPostV3beta1SessionDetectIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':session:detectIntent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':session:detectIntent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1SessionDetectIntentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':session:detectIntent']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':session:detectIntent'].$post(args, options))
    },
  })
}

export function usePostV3beta1SessionDetectIntent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':session:detectIntent']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':session:detectIntent']['$post']>,
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
  const mutationDefaults = getPostV3beta1SessionDetectIntentMutationOptions<
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

export function getPostV3beta1SessionFulfillIntentMutationKey() {
  return ['v3beta1', '/v3beta1/:session:fulfillIntent', 'POST'] as const
}

export function getPostV3beta1SessionFulfillIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1SessionFulfillIntentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':session:fulfillIntent'].$post(args, options))
    },
  })
}

export function usePostV3beta1SessionFulfillIntent<
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
                Awaited<ReturnType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':session:fulfillIntent']['$post']>,
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
  const mutationDefaults = getPostV3beta1SessionFulfillIntentMutationOptions<
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

export function getPostV3beta1SessionMatchIntentMutationKey() {
  return ['v3beta1', '/v3beta1/:session:matchIntent', 'POST'] as const
}

export function getPostV3beta1SessionMatchIntentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3beta1)[':session:matchIntent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3beta1)[':session:matchIntent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3beta1SessionMatchIntentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3beta1)[':session:matchIntent']['$post']>,
    ) {
      return parseResponse(client.v3beta1[':session:matchIntent'].$post(args, options))
    },
  })
}

export function usePostV3beta1SessionMatchIntent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3beta1)[':session:matchIntent']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3beta1)[':session:matchIntent']['$post']>,
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
  const mutationDefaults = getPostV3beta1SessionMatchIntentMutationOptions<TError, TOnMutateResult>(
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
