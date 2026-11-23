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

export function createPutArchiveRule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['archive-rule']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['archive-rule']['$put']>,
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
    const mutationDefaults = getPutArchiveRuleMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPolicyGenerationJobIdQueryKey(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['policy', '/policy/generation/:jobId', keyArgs] as const
}

export function getPolicyGenerationJobIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPolicyGenerationJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policy.generation[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createPolicyGenerationJobId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.policy.generation)[':jobId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.policy.generation)[':jobId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getPolicyGenerationJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutPolicyGenerationJobId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPutPolicyGenerationJobIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutAccessPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['access-preview']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-preview']['$put']>,
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
    const mutationDefaults = getPutAccessPreviewMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyzerQueryKey(args: InferRequestType<typeof client.analyzer.$get>) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer', keyArgs] as const
}

export function getAnalyzerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.analyzer.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAnalyzerQueryKey>
  >({
    queryKey: getAnalyzerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyzer.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createAnalyzer<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.analyzer.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyzerQueryKey>
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
    return { ...getAnalyzerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutAnalyzer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.analyzer.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.analyzer.$put>,
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
    const mutationDefaults = getPutAnalyzerMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyzerAnalyzerNameArchiveRuleQueryKey(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer/:analyzerName/archive-rule', keyArgs] as const
}

export function getAnalyzerAnalyzerNameArchiveRuleQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyzerAnalyzerNameArchiveRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyzer[':analyzerName']['archive-rule'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyzerAnalyzerNameArchiveRule<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAnalyzerAnalyzerNameArchiveRuleQueryKey>
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
      ...getAnalyzerAnalyzerNameArchiveRuleQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPutAnalyzerAnalyzerNameArchiveRule<
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
                  ReturnType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.analyzer)[':analyzerName']['archive-rule']['$put']>,
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
    const mutationDefaults = getPutAnalyzerAnalyzerNameArchiveRuleMutationOptions<
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

export function getAnalyzerAnalyzerNameQueryKey(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer/:analyzerName', keyArgs] as const
}

export function getAnalyzerAnalyzerNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAnalyzerAnalyzerNameQueryKey>
  >({
    queryKey: getAnalyzerAnalyzerNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyzer[':analyzerName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyzerAnalyzerName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.analyzer)[':analyzerName']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.analyzer)[':analyzerName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getAnalyzerAnalyzerNameQueryKey>
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
      ...getAnalyzerAnalyzerNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteAnalyzerAnalyzerName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getDeleteAnalyzerAnalyzerNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey(
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['analyzer', '/analyzer/:analyzerName/archive-rule/:ruleName', keyArgs] as const
}

export function getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryOptions<
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
  args: InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.analyzer[':analyzerName']['archive-rule'][':ruleName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyzerAnalyzerNameArchiveRuleRuleName<
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
  args: () => InferRequestType<
    (typeof client.analyzer)[':analyzerName']['archive-rule'][':ruleName']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAnalyzerAnalyzerNameArchiveRuleRuleNameQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPutAnalyzerAnalyzerNameArchiveRuleRuleName<
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
    const mutationDefaults = getPutAnalyzerAnalyzerNameArchiveRuleRuleNameMutationOptions<
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

export function createDeleteAnalyzerAnalyzerNameArchiveRuleRuleName<
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
    const mutationDefaults = getDeleteAnalyzerAnalyzerNameArchiveRuleRuleNameMutationOptions<
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

export function getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey(
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access-preview', '/access-preview/:accessPreviewId#analyzerArn', keyArgs] as const
}

export function getAccessPreviewAccessPreviewIdAnalyzerArnQueryOptions<
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
  args: InferRequestType<(typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-preview'][':accessPreviewId#analyzerArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessPreviewAccessPreviewIdAnalyzerArn<
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
  args: () => InferRequestType<
    (typeof client)['access-preview'][':accessPreviewId#analyzerArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAccessPreviewAccessPreviewIdAnalyzerArnQueryKey>
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
      ...getAccessPreviewAccessPreviewIdAnalyzerArnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getAnalyzedResourceAnalyzerArnResourceArnQueryKey(
  args: InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    'analyzed-resource#analyzerArn&resourceArn',
    '/analyzed-resource#analyzerArn&resourceArn',
    keyArgs,
  ] as const
}

export function getAnalyzedResourceAnalyzerArnResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAnalyzedResourceAnalyzerArnResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['analyzed-resource#analyzerArn&resourceArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAnalyzedResourceAnalyzerArnResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)['analyzed-resource#analyzerArn&resourceArn']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getAnalyzedResourceAnalyzerArnResourceArnQueryKey>
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
      ...getAnalyzedResourceAnalyzerArnResourceArnQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getFindingIdAnalyzerArnQueryKey(
  args: InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['finding', '/finding/:id#analyzerArn', keyArgs] as const
}

export function getFindingIdAnalyzerArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getFindingIdAnalyzerArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.finding[':id#analyzerArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createFindingIdAnalyzerArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.finding)[':id#analyzerArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.finding)[':id#analyzerArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getFindingIdAnalyzerArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAccessPreviewAccessPreviewId<
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
                Awaited<ReturnType<(typeof client)['access-preview'][':accessPreviewId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['access-preview'][':accessPreviewId']['$post']>,
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
    const mutationDefaults = getPostAccessPreviewAccessPreviewIdMutationOptions<
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

export function getAccessPreviewAnalyzerArnQueryKey(
  args: InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['access-preview#analyzerArn', '/access-preview#analyzerArn', keyArgs] as const
}

export function getAccessPreviewAnalyzerArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccessPreviewAnalyzerArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['access-preview#analyzerArn'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createAccessPreviewAnalyzerArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['access-preview#analyzerArn']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['access-preview#analyzerArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
      ...getAccessPreviewAnalyzerArnQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostAnalyzedResource<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostAnalyzedResourceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPutFinding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$put>>>>
          >,
          TError,
          InferRequestType<typeof client.finding.$put>,
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
    const mutationDefaults = getPutFindingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostFinding<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.finding.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.finding.$post>,
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
    const mutationDefaults = getPostFindingMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPolicyGenerationQueryKey(
  args: InferRequestType<typeof client.policy.generation.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['policy', '/policy/generation', keyArgs] as const
}

export function getPolicyGenerationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.policy.generation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPolicyGenerationQueryKey>
  >({
    queryKey: getPolicyGenerationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.policy.generation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createPolicyGeneration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.policy.generation.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getPolicyGenerationQueryKey>
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
    return { ...getPolicyGenerationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPutPolicyGeneration<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.generation.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.policy.generation.$put>,
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
    const mutationDefaults = getPutPolicyGenerationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getTagsResourceArnQueryKey(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tags', '/tags/:resourceArn', keyArgs] as const
}

export function getTagsResourceArnQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTagsResourceArnQueryKey>
  >({
    queryKey: getTagsResourceArnQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.tags[':resourceArn'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createTagsResourceArn<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.tags)[':resourceArn']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getTagsResourceArnQueryKey>
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
    return { ...getTagsResourceArnQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostTagsResourceArn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
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
    const mutationDefaults = getPostTagsResourceArnMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createPostResourceScan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.resource.scan.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.resource.scan.$post>,
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
    const mutationDefaults = getPostResourceScanMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
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

export function createDeleteTagsResourceArnTagKeys<
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
                Awaited<ReturnType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
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
    const mutationDefaults = getDeleteTagsResourceArnTagKeysMutationOptions<
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

export function createPostPolicyValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.policy.validation.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.policy.validation.$post>,
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
    const mutationDefaults = getPostPolicyValidationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
