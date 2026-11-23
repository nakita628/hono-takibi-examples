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

export function getV1beta1Key() {
  return ['v1beta1'] as const
}

export function getV1beta1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name', toValue(args)] as const
}

export function getV1beta1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1beta1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'DELETE'] as const
}

export function getDeleteV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$delete']>) {
      return parseResponse(client.v1beta1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$delete']>,
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
  const mutationDefaults = getDeleteV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getPatchV1beta1NameMutationKey() {
  return ['v1beta1', '/v1beta1/:name', 'PATCH'] as const
}

export function getPatchV1beta1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1beta1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta1)[':name']['$patch']>) {
      return parseResponse(client.v1beta1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1beta1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta1)[':name']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name']['$patch']>,
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
  const mutationDefaults = getPatchV1beta1NameMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1NameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:name/operations', toValue(args)] as const
}

export function getV1beta1NameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1NameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1NameOperationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1NameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1NameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1NameAcknowledgeMutationKey() {
  return ['v1beta1', '/v1beta1/:name:acknowledge', 'POST'] as const
}

export function getPostV1beta1NameAcknowledgeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:acknowledge']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:acknowledge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameAcknowledgeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:acknowledge']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:acknowledge'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameAcknowledge<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':name:acknowledge']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:acknowledge']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameAcknowledgeMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1beta1NameRestrictAllowedResourcesMutationKey() {
  return ['v1beta1', '/v1beta1/:name:restrictAllowedResources', 'POST'] as const
}

export function getPostV1beta1NameRestrictAllowedResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':name:restrictAllowedResources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':name:restrictAllowedResources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1NameRestrictAllowedResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':name:restrictAllowedResources']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':name:restrictAllowedResources'].$post(args, options))
    },
  })
}

export function usePostV1beta1NameRestrictAllowedResources<
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
                  ReturnType<(typeof client.v1beta1)[':name:restrictAllowedResources']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':name:restrictAllowedResources']['$post']>,
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
  const mutationDefaults = getPostV1beta1NameRestrictAllowedResourcesMutationOptions<
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

export function getV1beta1ParentViolationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['violations']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:parent/violations', toValue(args)] as const
}

export function getV1beta1ParentViolationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['violations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentViolationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].violations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentViolations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['violations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':parent']['violations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['violations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['violations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentViolationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['violations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentViolationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentViolationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].violations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1ParentWorkloadsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>,
) {
  return ['v1beta1', '/v1beta1/:parent/workloads', toValue(args)] as const
}

export function getV1beta1ParentWorkloadsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ParentWorkloadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':parent'].workloads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ParentWorkloads<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1beta1ParentWorkloadsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['workloads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ParentWorkloadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ParentWorkloadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':parent'].workloads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1beta1ParentWorkloadsMutationKey() {
  return ['v1beta1', '/v1beta1/:parent/workloads', 'POST'] as const
}

export function getPostV1beta1ParentWorkloadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta1)[':parent']['workloads']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1beta1ParentWorkloadsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$post']>,
    ) {
      return parseResponse(client.v1beta1[':parent'].workloads.$post(args, options))
    },
  })
}

export function usePostV1beta1ParentWorkloads<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta1)[':parent']['workloads']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta1)[':parent']['workloads']['$post']>,
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
  const mutationDefaults = getPostV1beta1ParentWorkloadsMutationOptions<TError, TOnMutateResult>(
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

export function getV1beta1ProjectTargetAnalyzeWorkloadMoveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:project/:target:analyzeWorkloadMove', toValue(args)] as const
}

export function getV1beta1ProjectTargetAnalyzeWorkloadMoveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1ProjectTargetAnalyzeWorkloadMoveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':project'][':target:analyzeWorkloadMove'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1ProjectTargetAnalyzeWorkloadMove<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']>
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
                    (typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']
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
                    (typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1ProjectTargetAnalyzeWorkloadMoveQueryKey>
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
            ReturnType<(typeof client.v1beta1)[':project'][':target:analyzeWorkloadMove']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1ProjectTargetAnalyzeWorkloadMoveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1ProjectTargetAnalyzeWorkloadMoveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':project'][':target:analyzeWorkloadMove'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1beta1SourceTargetAnalyzeWorkloadMoveQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']>
  >,
) {
  return ['v1beta1', '/v1beta1/:source/:target:analyzeWorkloadMove', toValue(args)] as const
}

export function getV1beta1SourceTargetAnalyzeWorkloadMoveQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1beta1SourceTargetAnalyzeWorkloadMoveQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta1[':source'][':target:analyzeWorkloadMove'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1beta1SourceTargetAnalyzeWorkloadMove<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']>
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
                    (typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']
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
                    (typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1beta1SourceTargetAnalyzeWorkloadMoveQueryKey>
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
            ReturnType<(typeof client.v1beta1)[':source'][':target:analyzeWorkloadMove']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1beta1SourceTargetAnalyzeWorkloadMoveQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1beta1SourceTargetAnalyzeWorkloadMoveQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta1[':source'][':target:analyzeWorkloadMove'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
