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

export function getAccessPreviewKey() {
  return ['access-preview'] as const
}

export function getAccessPreviewAnalyzerArnKey() {
  return ['access-preview#analyzerArn'] as const
}

export function getAnalyzedResourceKey() {
  return ['analyzed-resource'] as const
}

export function getAnalyzedResourceAnalyzerArnResourceArnKey() {
  return ['analyzed-resource#analyzerArn&resourceArn'] as const
}

export function getAnalyzerKey() {
  return ['analyzer'] as const
}

export function getArchiveRuleKey() {
  return ['archive-rule'] as const
}

export function getFindingKey() {
  return ['finding'] as const
}

export function getPolicyKey() {
  return ['policy'] as const
}

export function getResourceKey() {
  return ['resource'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getPutArchiveRuleMutationKey() {
  return ['archive-rule', '/archive-rule', 'PUT'] as const
}

export function getPutArchiveRuleMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['archive-rule']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['archive-rule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutArchiveRuleMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['archive-rule']['$put']>) {
      return parseResponse(client['archive-rule'].$put(args, options))
    },
  })
}

export function usePutArchiveRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['archive-rule']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['archive-rule']['$put']>,
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
  const mutationDefaults = getPutArchiveRuleMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPolicyGenerationJobIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policy', '/policy/generation/:jobId', keyArgs] as const
}

export function getPolicyGenerationJobIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPolicyGenerationJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policy.generation[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePolicyGenerationJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPolicyGenerationJobIdQueryKey>
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
          Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPolicyGenerationJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPolicyGenerationJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policy.generation[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPolicyGenerationJobIdMutationKey() {
  return ['policy', '/policy/generation/:jobId', 'PUT'] as const
}

export function getPutPolicyGenerationJobIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.policy.generation)[':jobId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPolicyGenerationJobIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.policy.generation)[':jobId']['$put']>) {
      return parseResponse(client.policy.generation[':jobId'].$put(args, options))
    },
  })
}

export function usePutPolicyGenerationJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.policy.generation)[':jobId']['$put']>,
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
  const mutationDefaults = getPutPolicyGenerationJobIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutAccessPreviewMutationKey() {
  return ['access-preview', '/access-preview', 'PUT'] as const
}

export function getPutAccessPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['access-preview']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-preview']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccessPreviewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['access-preview']['$put']>) {
      return parseResponse(client['access-preview'].$put(args, options))
    },
  })
}

export function usePutAccessPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['access-preview']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-preview']['$put']>,
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
  const mutationDefaults = getPutAccessPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyzerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyzer.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['analyzer', '/analyzer', keyArgs] as const
}

export function getAnalyzerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyzer.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyzerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyzer.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAnalyzer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.analyzer.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>
          >,
          ReturnType<typeof getAnalyzerQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnalyzerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyzerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyzer.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnalyzerMutationKey() {
  return ['analyzer', '/analyzer', 'PUT'] as const
}

export function getPutAnalyzerMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$put>>>>>,
    TError,
    InferRequestType<typeof client.analyzer.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutAnalyzerMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.analyzer.$put>) {
      return parseResponse(client.analyzer.$put(args, options))
    },
  })
}

export function usePutAnalyzer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.analyzer.$put>,
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
  const mutationDefaults = getPutAnalyzerMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAnalyzerAnalyzerNameArchiveRuleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['analyzer', '/analyzer/:analyzerName/archive-rule', keyArgs] as const
}

export function getAnalyzerAnalyzerNameArchiveRuleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyzerAnalyzerNameArchiveRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyzer[':analyzerName']['archive-rule'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyzerAnalyzerNameArchiveRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>
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
                  ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalyzerAnalyzerNameArchiveRuleQueryKey>
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
          Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyzerAnalyzerNameArchiveRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyzerAnalyzerNameArchiveRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyzer[':analyzerName']['archive-rule'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnalyzerAnalyzerNameArchiveRuleMutationKey() {
  return ['analyzer', '/analyzer/:analyzerName/archive-rule', 'PUT'] as const
}

export function getPutAnalyzerAnalyzerNameArchiveRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAnalyzerAnalyzerNameArchiveRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>,
    ) {
      return parseResponse(client.analyzer[':analyzerName']['archive-rule'].$put(args, options))
    },
  })
}

export function usePutAnalyzerAnalyzerNameArchiveRule<
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
                  ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>,
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
  const mutationDefaults = getPutAnalyzerAnalyzerNameArchiveRuleMutationOptions<
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

export function getAnalyzerAnalyzerNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['analyzer', '/analyzer/:analyzerName', keyArgs] as const
}

export function getAnalyzerAnalyzerNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyzerAnalyzerNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyzer[':analyzerName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyzerAnalyzerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAnalyzerAnalyzerNameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyzerAnalyzerNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyzerAnalyzerNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyzer[':analyzerName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAnalyzerAnalyzerNameMutationKey() {
  return ['analyzer', '/analyzer/:analyzerName', 'DELETE'] as const
}

export function getDeleteAnalyzerAnalyzerNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.analyzer)[':analyzerName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnalyzerAnalyzerNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$delete']>) {
      return parseResponse(client.analyzer[':analyzerName'].$delete(args, options))
    },
  })
}

export function useDeleteAnalyzerAnalyzerName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analyzer)[':analyzerName']['$delete']>,
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
  const mutationDefaults = getDeleteAnalyzerAnalyzerNameMutationOptions<TError, TOnMutateResult>(
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

export function getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', keyArgs] as const
}

export function getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyzerAnalyzerNameArchiveRuleRuleName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']>
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
                    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
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
                    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey>
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
            ReturnType<
              (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutAnalyzerAnalyzerNameArchiveRuleRuleNameMutationKey() {
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', 'PUT'] as const
}

export function getPutAnalyzerAnalyzerNameArchiveRuleRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAnalyzerAnalyzerNameArchiveRuleRuleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
      >,
    ) {
      return parseResponse(
        client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$put(args, options),
      )
    },
  })
}

export function usePutAnalyzerAnalyzerNameArchiveRuleRuleName<
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
                    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$put']
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
  const mutationDefaults = getPutAnalyzerAnalyzerNameArchiveRuleRuleNameMutationOptions<
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

export function getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameMutationKey() {
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', 'DELETE'] as const
}

export function getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
      >,
    ) {
      return parseResponse(
        client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAnalyzerAnalyzerNameArchiveRuleRuleName<
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
                    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$delete']
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
  const mutationDefaults = getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameMutationOptions<
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

export function getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access-preview', '/access-preview/:accessPreviewId#analyzerArn', keyArgs] as const
}

export function getAccessPreviewAccessPreviewIdAnalyzerArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-preview'][':accessPreviewId#analyzerArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessPreviewAccessPreviewIdAnalyzerArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
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
                    (typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']
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
                    (typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey>
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
            ReturnType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-preview'][':accessPreviewId#analyzerArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAnalyzedResourceAnalyzerArnResourceArnQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'analyzed-resource#analyzerArn&resourceArn',
    '/analyzed-resource#analyzerArn&resourceArn',
    keyArgs,
  ] as const
}

export function getAnalyzedResourceAnalyzerArnResourceArnQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAnalyzedResourceAnalyzerArnResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['analyzed-resource#analyzerArn&resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAnalyzedResourceAnalyzerArnResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
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
                  ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAnalyzedResourceAnalyzerArnResourceArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyzedResourceAnalyzerArnResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAnalyzedResourceAnalyzerArnResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['analyzed-resource#analyzerArn&resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getFindingIdAnalyzerArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['finding', '/finding/:id#analyzerArn', keyArgs] as const
}

export function getFindingIdAnalyzerArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getFindingIdAnalyzerArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.finding[':id#analyzerArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useFindingIdAnalyzerArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getFindingIdAnalyzerArnQueryKey>
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
          Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getFindingIdAnalyzerArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getFindingIdAnalyzerArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.finding[':id#analyzerArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccessPreviewAccessPreviewIdMutationKey() {
  return ['access-preview', '/access-preview/:accessPreviewId', 'POST'] as const
}

export function getPostAccessPreviewAccessPreviewIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['access-preview'][':accessPreviewId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccessPreviewAccessPreviewIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>,
    ) {
      return parseResponse(client['access-preview'][':accessPreviewId'].$post(args, options))
    },
  })
}

export function usePostAccessPreviewAccessPreviewId<
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
                Awaited<ReturnType<(typeof client)['access-preview'][':accessPreviewId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>,
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
  const mutationDefaults = getPostAccessPreviewAccessPreviewIdMutationOptions<
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

export function getAccessPreviewAnalyzerArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['access-preview#analyzerArn', '/access-preview#analyzerArn', keyArgs] as const
}

export function getAccessPreviewAnalyzerArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccessPreviewAnalyzerArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['access-preview#analyzerArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccessPreviewAnalyzerArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccessPreviewAnalyzerArnQueryKey>
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
          Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccessPreviewAnalyzerArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccessPreviewAnalyzerArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['access-preview#analyzerArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAnalyzedResourceMutationKey() {
  return ['analyzed-resource', '/analyzed-resource', 'POST'] as const
}

export function getPostAnalyzedResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['analyzed-resource']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['analyzed-resource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAnalyzedResourceMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['analyzed-resource']['$post']>) {
      return parseResponse(client['analyzed-resource'].$post(args, options))
    },
  })
}

export function usePostAnalyzedResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['analyzed-resource']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['analyzed-resource']['$post']>,
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
  const mutationDefaults = getPostAnalyzedResourceMutationOptions<TError, TOnMutateResult>(
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

export function getPutFindingMutationKey() {
  return ['finding', '/finding', 'PUT'] as const
}

export function getPutFindingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$put>>>>>,
    TError,
    InferRequestType<typeof client.finding.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutFindingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.finding.$put>) {
      return parseResponse(client.finding.$put(args, options))
    },
  })
}

export function usePutFinding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.finding.$put>,
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
  const mutationDefaults = getPutFindingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostFindingMutationKey() {
  return ['finding', '/finding', 'POST'] as const
}

export function getPostFindingMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$post>>>>>,
    TError,
    InferRequestType<typeof client.finding.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostFindingMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.finding.$post>) {
      return parseResponse(client.finding.$post(args, options))
    },
  })
}

export function usePostFinding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.finding.$post>,
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
  const mutationDefaults = getPostFindingMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPolicyGenerationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policy.generation.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['policy', '/policy/generation', keyArgs] as const
}

export function getPolicyGenerationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policy.generation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPolicyGenerationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.policy.generation.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePolicyGeneration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.policy.generation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>
            >
          >,
          ReturnType<typeof getPolicyGenerationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPolicyGenerationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPolicyGenerationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.policy.generation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPolicyGenerationMutationKey() {
  return ['policy', '/policy/generation', 'PUT'] as const
}

export function getPutPolicyGenerationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.policy.generation.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutPolicyGenerationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.policy.generation.$put>) {
      return parseResponse(client.policy.generation.$put(args, options))
    },
  })
}

export function usePutPolicyGeneration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.policy.generation.$put>,
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
  const mutationDefaults = getPutPolicyGenerationMutationOptions<TError, TOnMutateResult>(
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

export function getTagsResourceArnQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTagsResourceArnQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.tags[':resourceArn'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.tags)[':resourceArn']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTagsResourceArnQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.tags[':resourceArn'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTagsResourceArnMutationKey() {
  return ['tags', '/tags/:resourceArn', 'POST'] as const
}

export function getPostTagsResourceArnMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTagsResourceArnMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>) {
      return parseResponse(client.tags[':resourceArn'].$post(args, options))
    },
  })
}

export function usePostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
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
  const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
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

export function getPostResourceScanMutationKey() {
  return ['resource', '/resource/scan', 'POST'] as const
}

export function getPostResourceScanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource.scan.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.resource.scan.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostResourceScanMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.resource.scan.$post>) {
      return parseResponse(client.resource.scan.$post(args, options))
    },
  })
}

export function usePostResourceScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource.scan.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.resource.scan.$post>,
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
  const mutationDefaults = getPostResourceScanMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteTagsResourceArnTagKeysMutationKey() {
  return ['tags', '/tags/:resourceArn#tagKeys', 'DELETE'] as const
}

export function getDeleteTagsResourceArnTagKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTagsResourceArnTagKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
    ) {
      return parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
    },
  })
}

export function useDeleteTagsResourceArnTagKeys<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
  const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<TError, TOnMutateResult>(
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

export function getPostPolicyValidationMutationKey() {
  return ['policy', '/policy/validation', 'POST'] as const
}

export function getPostPolicyValidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.validation.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.policy.validation.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPolicyValidationMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.policy.validation.$post>) {
      return parseResponse(client.policy.validation.$post(args, options))
    },
  })
}

export function usePostPolicyValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.validation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.policy.validation.$post>,
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
  const mutationDefaults = getPostPolicyValidationMutationOptions<TError, TOnMutateResult>(
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
