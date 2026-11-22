import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getActionBuildSuggestersKey() {
  return ['#Action=BuildSuggesters'] as const
}

export function getActionCreateDomainKey() {
  return ['#Action=CreateDomain'] as const
}

export function getActionDefineAnalysisSchemeKey() {
  return ['#Action=DefineAnalysisScheme'] as const
}

export function getActionDefineExpressionKey() {
  return ['#Action=DefineExpression'] as const
}

export function getActionDefineIndexFieldKey() {
  return ['#Action=DefineIndexField'] as const
}

export function getActionDefineSuggesterKey() {
  return ['#Action=DefineSuggester'] as const
}

export function getActionDeleteAnalysisSchemeKey() {
  return ['#Action=DeleteAnalysisScheme'] as const
}

export function getActionDeleteDomainKey() {
  return ['#Action=DeleteDomain'] as const
}

export function getActionDeleteExpressionKey() {
  return ['#Action=DeleteExpression'] as const
}

export function getActionDeleteIndexFieldKey() {
  return ['#Action=DeleteIndexField'] as const
}

export function getActionDeleteSuggesterKey() {
  return ['#Action=DeleteSuggester'] as const
}

export function getActionDescribeAnalysisSchemesKey() {
  return ['#Action=DescribeAnalysisSchemes'] as const
}

export function getActionDescribeAvailabilityOptionsKey() {
  return ['#Action=DescribeAvailabilityOptions'] as const
}

export function getActionDescribeDomainEndpointOptionsKey() {
  return ['#Action=DescribeDomainEndpointOptions'] as const
}

export function getActionDescribeDomainsKey() {
  return ['#Action=DescribeDomains'] as const
}

export function getActionDescribeExpressionsKey() {
  return ['#Action=DescribeExpressions'] as const
}

export function getActionDescribeIndexFieldsKey() {
  return ['#Action=DescribeIndexFields'] as const
}

export function getActionDescribeScalingParametersKey() {
  return ['#Action=DescribeScalingParameters'] as const
}

export function getActionDescribeServiceAccessPoliciesKey() {
  return ['#Action=DescribeServiceAccessPolicies'] as const
}

export function getActionDescribeSuggestersKey() {
  return ['#Action=DescribeSuggesters'] as const
}

export function getActionIndexDocumentsKey() {
  return ['#Action=IndexDocuments'] as const
}

export function getActionListDomainNamesKey() {
  return ['#Action=ListDomainNames'] as const
}

export function getActionUpdateAvailabilityOptionsKey() {
  return ['#Action=UpdateAvailabilityOptions'] as const
}

export function getActionUpdateDomainEndpointOptionsKey() {
  return ['#Action=UpdateDomainEndpointOptions'] as const
}

export function getActionUpdateScalingParametersKey() {
  return ['#Action=UpdateScalingParameters'] as const
}

export function getActionUpdateServiceAccessPoliciesKey() {
  return ['#Action=UpdateServiceAccessPolicies'] as const
}

export function getActionBuildSuggestersQueryKey(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=BuildSuggesters', '/#Action=BuildSuggesters', keyArgs] as const
}

export function getActionBuildSuggestersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBuildSuggestersQueryKey>
  >({
    queryKey: getActionBuildSuggestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=BuildSuggesters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionBuildSuggesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionBuildSuggestersQueryKey>
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
      ...getActionBuildSuggestersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionBuildSuggestersMutationKey() {
  return ['#Action=BuildSuggesters', '/#Action=BuildSuggesters', 'POST'] as const
}

export function getPostActionBuildSuggestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=BuildSuggesters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionBuildSuggestersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$post']>) {
      return parseResponse(client['#Action=BuildSuggesters'].$post(args, options))
    },
  })
}

export function createPostActionBuildSuggesters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=BuildSuggesters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionBuildSuggestersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionCreateDomainQueryKey(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDomain', '/#Action=CreateDomain', keyArgs] as const
}

export function getActionCreateDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDomainQueryKey>
  >({
    queryKey: getActionCreateDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=CreateDomain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionCreateDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionCreateDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionCreateDomainQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostActionCreateDomainMutationKey() {
  return ['#Action=CreateDomain', '/#Action=CreateDomain', 'POST'] as const
}

export function getPostActionCreateDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionCreateDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>) {
      return parseResponse(client['#Action=CreateDomain'].$post(args, options))
    },
  })
}

export function createPostActionCreateDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionCreateDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDefineAnalysisSchemeQueryKey(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineAnalysisScheme', '/#Action=DefineAnalysisScheme', keyArgs] as const
}

export function getActionDefineAnalysisSchemeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineAnalysisSchemeQueryKey>
  >({
    queryKey: getActionDefineAnalysisSchemeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DefineAnalysisScheme'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDefineAnalysisScheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDefineAnalysisSchemeQueryKey>
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
      ...getActionDefineAnalysisSchemeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDefineAnalysisSchemeMutationKey() {
  return ['#Action=DefineAnalysisScheme', '/#Action=DefineAnalysisScheme', 'POST'] as const
}

export function getPostActionDefineAnalysisSchemeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDefineAnalysisSchemeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>,
    ) {
      return parseResponse(client['#Action=DefineAnalysisScheme'].$post(args, options))
    },
  })
}

export function createPostActionDefineAnalysisScheme<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDefineAnalysisSchemeMutationOptions<
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

export function getActionDefineExpressionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineExpression', '/#Action=DefineExpression', keyArgs] as const
}

export function getActionDefineExpressionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineExpressionQueryKey>
  >({
    queryKey: getActionDefineExpressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DefineExpression'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDefineExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDefineExpressionQueryKey>
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
      ...getActionDefineExpressionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDefineExpressionMutationKey() {
  return ['#Action=DefineExpression', '/#Action=DefineExpression', 'POST'] as const
}

export function getPostActionDefineExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DefineExpression']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDefineExpressionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DefineExpression']['$post']>) {
      return parseResponse(client['#Action=DefineExpression'].$post(args, options))
    },
  })
}

export function createPostActionDefineExpression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DefineExpression']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDefineExpressionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDefineIndexFieldQueryKey(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineIndexField', '/#Action=DefineIndexField', keyArgs] as const
}

export function getActionDefineIndexFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineIndexFieldQueryKey>
  >({
    queryKey: getActionDefineIndexFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DefineIndexField'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDefineIndexField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDefineIndexFieldQueryKey>
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
      ...getActionDefineIndexFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDefineIndexFieldMutationKey() {
  return ['#Action=DefineIndexField', '/#Action=DefineIndexField', 'POST'] as const
}

export function getPostActionDefineIndexFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DefineIndexField']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDefineIndexFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$post']>) {
      return parseResponse(client['#Action=DefineIndexField'].$post(args, options))
    },
  })
}

export function createPostActionDefineIndexField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DefineIndexField']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDefineIndexFieldMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDefineSuggesterQueryKey(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineSuggester', '/#Action=DefineSuggester', keyArgs] as const
}

export function getActionDefineSuggesterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineSuggesterQueryKey>
  >({
    queryKey: getActionDefineSuggesterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DefineSuggester'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDefineSuggester<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDefineSuggesterQueryKey>
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
      ...getActionDefineSuggesterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDefineSuggesterMutationKey() {
  return ['#Action=DefineSuggester', '/#Action=DefineSuggester', 'POST'] as const
}

export function getPostActionDefineSuggesterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DefineSuggester']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDefineSuggesterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$post']>) {
      return parseResponse(client['#Action=DefineSuggester'].$post(args, options))
    },
  })
}

export function createPostActionDefineSuggester<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DefineSuggester']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDefineSuggesterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteAnalysisSchemeQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAnalysisScheme', '/#Action=DeleteAnalysisScheme', keyArgs] as const
}

export function getActionDeleteAnalysisSchemeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAnalysisSchemeQueryKey>
  >({
    queryKey: getActionDeleteAnalysisSchemeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteAnalysisScheme'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteAnalysisScheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteAnalysisSchemeQueryKey>
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
      ...getActionDeleteAnalysisSchemeQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteAnalysisSchemeMutationKey() {
  return ['#Action=DeleteAnalysisScheme', '/#Action=DeleteAnalysisScheme', 'POST'] as const
}

export function getPostActionDeleteAnalysisSchemeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteAnalysisSchemeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>,
    ) {
      return parseResponse(client['#Action=DeleteAnalysisScheme'].$post(args, options))
    },
  })
}

export function createPostActionDeleteAnalysisScheme<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteAnalysisSchemeMutationOptions<
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

export function getActionDeleteDomainQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', keyArgs] as const
}

export function getActionDeleteDomainQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDomainQueryKey>
  >({
    queryKey: getActionDeleteDomainQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteDomain'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteDomainQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getActionDeleteDomainQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostActionDeleteDomainMutationKey() {
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', 'POST'] as const
}

export function getPostActionDeleteDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteDomainMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>) {
      return parseResponse(client['#Action=DeleteDomain'].$post(args, options))
    },
  })
}

export function createPostActionDeleteDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteDomainMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteExpressionQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteExpression', '/#Action=DeleteExpression', keyArgs] as const
}

export function getActionDeleteExpressionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteExpressionQueryKey>
  >({
    queryKey: getActionDeleteExpressionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteExpression'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteExpressionQueryKey>
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
      ...getActionDeleteExpressionQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteExpressionMutationKey() {
  return ['#Action=DeleteExpression', '/#Action=DeleteExpression', 'POST'] as const
}

export function getPostActionDeleteExpressionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteExpression']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteExpressionMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$post']>) {
      return parseResponse(client['#Action=DeleteExpression'].$post(args, options))
    },
  })
}

export function createPostActionDeleteExpression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteExpression']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteExpressionMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteIndexFieldQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteIndexField', '/#Action=DeleteIndexField', keyArgs] as const
}

export function getActionDeleteIndexFieldQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteIndexFieldQueryKey>
  >({
    queryKey: getActionDeleteIndexFieldQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteIndexField'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteIndexField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteIndexFieldQueryKey>
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
      ...getActionDeleteIndexFieldQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteIndexFieldMutationKey() {
  return ['#Action=DeleteIndexField', '/#Action=DeleteIndexField', 'POST'] as const
}

export function getPostActionDeleteIndexFieldMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteIndexField']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteIndexFieldMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$post']>) {
      return parseResponse(client['#Action=DeleteIndexField'].$post(args, options))
    },
  })
}

export function createPostActionDeleteIndexField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteIndexField']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteIndexFieldMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDeleteSuggesterQueryKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSuggester', '/#Action=DeleteSuggester', keyArgs] as const
}

export function getActionDeleteSuggesterQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSuggesterQueryKey>
  >({
    queryKey: getActionDeleteSuggesterQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DeleteSuggester'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDeleteSuggester<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDeleteSuggesterQueryKey>
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
      ...getActionDeleteSuggesterQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDeleteSuggesterMutationKey() {
  return ['#Action=DeleteSuggester', '/#Action=DeleteSuggester', 'POST'] as const
}

export function getPostActionDeleteSuggesterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DeleteSuggester']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDeleteSuggesterMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$post']>) {
      return parseResponse(client['#Action=DeleteSuggester'].$post(args, options))
    },
  })
}

export function createPostActionDeleteSuggester<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DeleteSuggester']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDeleteSuggesterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDescribeAnalysisSchemesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAnalysisSchemes', '/#Action=DescribeAnalysisSchemes', keyArgs] as const
}

export function getActionDescribeAnalysisSchemesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAnalysisSchemesQueryKey>
  >({
    queryKey: getActionDescribeAnalysisSchemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAnalysisSchemes'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeAnalysisSchemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAnalysisSchemesQueryKey>
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
      ...getActionDescribeAnalysisSchemesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeAnalysisSchemesMutationKey() {
  return ['#Action=DescribeAnalysisSchemes', '/#Action=DescribeAnalysisSchemes', 'POST'] as const
}

export function getPostActionDescribeAnalysisSchemesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAnalysisSchemesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAnalysisSchemes'].$post(args, options))
    },
  })
}

export function createPostActionDescribeAnalysisSchemes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAnalysisSchemesMutationOptions<
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

export function getActionDescribeAvailabilityOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAvailabilityOptions',
    '/#Action=DescribeAvailabilityOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeAvailabilityOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAvailabilityOptionsQueryKey>
  >({
    queryKey: getActionDescribeAvailabilityOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeAvailabilityOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeAvailabilityOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeAvailabilityOptionsQueryKey>
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
      ...getActionDescribeAvailabilityOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeAvailabilityOptionsMutationKey() {
  return [
    '#Action=DescribeAvailabilityOptions',
    '/#Action=DescribeAvailabilityOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeAvailabilityOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeAvailabilityOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeAvailabilityOptions'].$post(args, options))
    },
  })
}

export function createPostActionDescribeAvailabilityOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeAvailabilityOptionsMutationOptions<
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

export function getActionDescribeDomainEndpointOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDomainEndpointOptions',
    '/#Action=DescribeDomainEndpointOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeDomainEndpointOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDomainEndpointOptionsQueryKey>
  >({
    queryKey: getActionDescribeDomainEndpointOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDomainEndpointOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDomainEndpointOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeDomainEndpointOptionsQueryKey>
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
      ...getActionDescribeDomainEndpointOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeDomainEndpointOptionsMutationKey() {
  return [
    '#Action=DescribeDomainEndpointOptions',
    '/#Action=DescribeDomainEndpointOptions',
    'POST',
  ] as const
}

export function getPostActionDescribeDomainEndpointOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDomainEndpointOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeDomainEndpointOptions'].$post(args, options))
    },
  })
}

export function createPostActionDescribeDomainEndpointOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeDomainEndpointOptionsMutationOptions<
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

export function getActionDescribeDomainsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDomains', '/#Action=DescribeDomains', keyArgs] as const
}

export function getActionDescribeDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDomainsQueryKey>
  >({
    queryKey: getActionDescribeDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeDomains'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeDomainsQueryKey>
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
      ...getActionDescribeDomainsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeDomainsMutationKey() {
  return ['#Action=DescribeDomains', '/#Action=DescribeDomains', 'POST'] as const
}

export function getPostActionDescribeDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeDomains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeDomainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$post']>) {
      return parseResponse(client['#Action=DescribeDomains'].$post(args, options))
    },
  })
}

export function createPostActionDescribeDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeDomains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeDomainsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionDescribeExpressionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeExpressions', '/#Action=DescribeExpressions', keyArgs] as const
}

export function getActionDescribeExpressionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeExpressionsQueryKey>
  >({
    queryKey: getActionDescribeExpressionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeExpressions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeExpressions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeExpressionsQueryKey>
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
      ...getActionDescribeExpressionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeExpressionsMutationKey() {
  return ['#Action=DescribeExpressions', '/#Action=DescribeExpressions', 'POST'] as const
}

export function getPostActionDescribeExpressionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeExpressions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeExpressionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeExpressions'].$post(args, options))
    },
  })
}

export function createPostActionDescribeExpressions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeExpressions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeExpressionsMutationOptions<
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

export function getActionDescribeIndexFieldsQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeIndexFields', '/#Action=DescribeIndexFields', keyArgs] as const
}

export function getActionDescribeIndexFieldsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeIndexFieldsQueryKey>
  >({
    queryKey: getActionDescribeIndexFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeIndexFields'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeIndexFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeIndexFieldsQueryKey>
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
      ...getActionDescribeIndexFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeIndexFieldsMutationKey() {
  return ['#Action=DescribeIndexFields', '/#Action=DescribeIndexFields', 'POST'] as const
}

export function getPostActionDescribeIndexFieldsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeIndexFieldsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeIndexFields'].$post(args, options))
    },
  })
}

export function createPostActionDescribeIndexFields<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeIndexFieldsMutationOptions<
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

export function getActionDescribeScalingParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeScalingParameters',
    '/#Action=DescribeScalingParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeScalingParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeScalingParametersQueryKey>
  >({
    queryKey: getActionDescribeScalingParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeScalingParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeScalingParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeScalingParametersQueryKey>
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
      ...getActionDescribeScalingParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeScalingParametersMutationKey() {
  return [
    '#Action=DescribeScalingParameters',
    '/#Action=DescribeScalingParameters',
    'POST',
  ] as const
}

export function getPostActionDescribeScalingParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeScalingParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeScalingParameters'].$post(args, options))
    },
  })
}

export function createPostActionDescribeScalingParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeScalingParametersMutationOptions<
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

export function getActionDescribeServiceAccessPoliciesQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeServiceAccessPolicies',
    '/#Action=DescribeServiceAccessPolicies',
    keyArgs,
  ] as const
}

export function getActionDescribeServiceAccessPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeServiceAccessPoliciesQueryKey>
  >({
    queryKey: getActionDescribeServiceAccessPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeServiceAccessPolicies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeServiceAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeServiceAccessPoliciesQueryKey>
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
      ...getActionDescribeServiceAccessPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeServiceAccessPoliciesMutationKey() {
  return [
    '#Action=DescribeServiceAccessPolicies',
    '/#Action=DescribeServiceAccessPolicies',
    'POST',
  ] as const
}

export function getPostActionDescribeServiceAccessPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeServiceAccessPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeServiceAccessPolicies'].$post(args, options))
    },
  })
}

export function createPostActionDescribeServiceAccessPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeServiceAccessPoliciesMutationOptions<
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

export function getActionDescribeSuggestersQueryKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeSuggesters', '/#Action=DescribeSuggesters', keyArgs] as const
}

export function getActionDescribeSuggestersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSuggestersQueryKey>
  >({
    queryKey: getActionDescribeSuggestersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=DescribeSuggesters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionDescribeSuggesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionDescribeSuggestersQueryKey>
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
      ...getActionDescribeSuggestersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionDescribeSuggestersMutationKey() {
  return ['#Action=DescribeSuggesters', '/#Action=DescribeSuggesters', 'POST'] as const
}

export function getPostActionDescribeSuggestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionDescribeSuggestersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$post']>,
    ) {
      return parseResponse(client['#Action=DescribeSuggesters'].$post(args, options))
    },
  })
}

export function createPostActionDescribeSuggesters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionDescribeSuggestersMutationOptions<
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

export function getActionIndexDocumentsQueryKey(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=IndexDocuments', '/#Action=IndexDocuments', keyArgs] as const
}

export function getActionIndexDocumentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionIndexDocumentsQueryKey>
  >({
    queryKey: getActionIndexDocumentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=IndexDocuments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionIndexDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionIndexDocumentsQueryKey>
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
      ...getActionIndexDocumentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionIndexDocumentsMutationKey() {
  return ['#Action=IndexDocuments', '/#Action=IndexDocuments', 'POST'] as const
}

export function getPostActionIndexDocumentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=IndexDocuments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionIndexDocumentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$post']>) {
      return parseResponse(client['#Action=IndexDocuments'].$post(args, options))
    },
  })
}

export function createPostActionIndexDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=IndexDocuments']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionIndexDocumentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionListDomainNamesQueryKey(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListDomainNames', '/#Action=ListDomainNames', keyArgs] as const
}

export function getActionListDomainNamesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListDomainNamesQueryKey>
  >({
    queryKey: getActionListDomainNamesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=ListDomainNames'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionListDomainNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionListDomainNamesQueryKey>
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
      ...getActionListDomainNamesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionListDomainNamesMutationKey() {
  return ['#Action=ListDomainNames', '/#Action=ListDomainNames', 'POST'] as const
}

export function getPostActionListDomainNamesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=ListDomainNames']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionListDomainNamesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$post']>) {
      return parseResponse(client['#Action=ListDomainNames'].$post(args, options))
    },
  })
}

export function createPostActionListDomainNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=ListDomainNames']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionListDomainNamesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getActionUpdateAvailabilityOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateAvailabilityOptions',
    '/#Action=UpdateAvailabilityOptions',
    keyArgs,
  ] as const
}

export function getActionUpdateAvailabilityOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAvailabilityOptionsQueryKey>
  >({
    queryKey: getActionUpdateAvailabilityOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateAvailabilityOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateAvailabilityOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateAvailabilityOptionsQueryKey>
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
      ...getActionUpdateAvailabilityOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionUpdateAvailabilityOptionsMutationKey() {
  return [
    '#Action=UpdateAvailabilityOptions',
    '/#Action=UpdateAvailabilityOptions',
    'POST',
  ] as const
}

export function getPostActionUpdateAvailabilityOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateAvailabilityOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateAvailabilityOptions'].$post(args, options))
    },
  })
}

export function createPostActionUpdateAvailabilityOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateAvailabilityOptionsMutationOptions<
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

export function getActionUpdateDomainEndpointOptionsQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateDomainEndpointOptions',
    '/#Action=UpdateDomainEndpointOptions',
    keyArgs,
  ] as const
}

export function getActionUpdateDomainEndpointOptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateDomainEndpointOptionsQueryKey>
  >({
    queryKey: getActionUpdateDomainEndpointOptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateDomainEndpointOptions'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateDomainEndpointOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateDomainEndpointOptionsQueryKey>
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
      ...getActionUpdateDomainEndpointOptionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionUpdateDomainEndpointOptionsMutationKey() {
  return [
    '#Action=UpdateDomainEndpointOptions',
    '/#Action=UpdateDomainEndpointOptions',
    'POST',
  ] as const
}

export function getPostActionUpdateDomainEndpointOptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateDomainEndpointOptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateDomainEndpointOptions'].$post(args, options))
    },
  })
}

export function createPostActionUpdateDomainEndpointOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateDomainEndpointOptionsMutationOptions<
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

export function getActionUpdateScalingParametersQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateScalingParameters', '/#Action=UpdateScalingParameters', keyArgs] as const
}

export function getActionUpdateScalingParametersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateScalingParametersQueryKey>
  >({
    queryKey: getActionUpdateScalingParametersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateScalingParameters'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateScalingParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateScalingParametersQueryKey>
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
      ...getActionUpdateScalingParametersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionUpdateScalingParametersMutationKey() {
  return ['#Action=UpdateScalingParameters', '/#Action=UpdateScalingParameters', 'POST'] as const
}

export function getPostActionUpdateScalingParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateScalingParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateScalingParameters'].$post(args, options))
    },
  })
}

export function createPostActionUpdateScalingParameters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateScalingParametersMutationOptions<
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

export function getActionUpdateServiceAccessPoliciesQueryKey(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateServiceAccessPolicies',
    '/#Action=UpdateServiceAccessPolicies',
    keyArgs,
  ] as const
}

export function getActionUpdateServiceAccessPoliciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateServiceAccessPoliciesQueryKey>
  >({
    queryKey: getActionUpdateServiceAccessPoliciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['#Action=UpdateServiceAccessPolicies'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createActionUpdateServiceAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getActionUpdateServiceAccessPoliciesQueryKey>
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
      ...getActionUpdateServiceAccessPoliciesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostActionUpdateServiceAccessPoliciesMutationKey() {
  return [
    '#Action=UpdateServiceAccessPolicies',
    '/#Action=UpdateServiceAccessPolicies',
    'POST',
  ] as const
}

export function getPostActionUpdateServiceAccessPoliciesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostActionUpdateServiceAccessPoliciesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>,
    ) {
      return parseResponse(client['#Action=UpdateServiceAccessPolicies'].$post(args, options))
    },
  })
}

export function createPostActionUpdateServiceAccessPolicies<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostActionUpdateServiceAccessPoliciesMutationOptions<
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
