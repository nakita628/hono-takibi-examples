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
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=BuildSuggesters', '/#Action=BuildSuggesters', keyArgs] as const
}

export function getActionBuildSuggestersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionBuildSuggestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=BuildSuggesters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionBuildSuggesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionBuildSuggestersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionBuildSuggestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionBuildSuggestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=BuildSuggesters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionBuildSuggesters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionBuildSuggestersMutationOptions<TError, TOnMutateResult>(
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

export function getActionCreateDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=CreateDomain', '/#Action=CreateDomain', keyArgs] as const
}

export function getActionCreateDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionCreateDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=CreateDomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionCreateDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionCreateDomainQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionCreateDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionCreateDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=CreateDomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionCreateDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionCreateDomainMutationOptions<TError, TOnMutateResult>(
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

export function getActionDefineAnalysisSchemeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DefineAnalysisScheme', '/#Action=DefineAnalysisScheme', keyArgs] as const
}

export function getActionDefineAnalysisSchemeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDefineAnalysisSchemeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DefineAnalysisScheme'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDefineAnalysisScheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDefineAnalysisSchemeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineAnalysisSchemeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDefineAnalysisSchemeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DefineAnalysisScheme'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDefineAnalysisScheme<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDefineAnalysisSchemeMutationOptions<
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

export function getActionDefineExpressionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DefineExpression', '/#Action=DefineExpression', keyArgs] as const
}

export function getActionDefineExpressionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDefineExpressionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DefineExpression'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDefineExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDefineExpressionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineExpressionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDefineExpressionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DefineExpression'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDefineExpression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDefineExpressionMutationOptions<TError, TOnMutateResult>(
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

export function getActionDefineIndexFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DefineIndexField', '/#Action=DefineIndexField', keyArgs] as const
}

export function getActionDefineIndexFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDefineIndexFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DefineIndexField'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDefineIndexField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDefineIndexFieldQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineIndexFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDefineIndexFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DefineIndexField'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDefineIndexField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDefineIndexFieldMutationOptions<TError, TOnMutateResult>(
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

export function getActionDefineSuggesterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DefineSuggester', '/#Action=DefineSuggester', keyArgs] as const
}

export function getActionDefineSuggesterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDefineSuggesterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DefineSuggester'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDefineSuggester<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDefineSuggesterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDefineSuggesterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDefineSuggesterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DefineSuggester'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDefineSuggester<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDefineSuggesterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteAnalysisSchemeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteAnalysisScheme', '/#Action=DeleteAnalysisScheme', keyArgs] as const
}

export function getActionDeleteAnalysisSchemeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteAnalysisSchemeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteAnalysisScheme'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteAnalysisScheme<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteAnalysisSchemeQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteAnalysisSchemeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteAnalysisSchemeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteAnalysisScheme'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteAnalysisScheme<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteAnalysisSchemeMutationOptions<
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

export function getActionDeleteDomainQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', keyArgs] as const
}

export function getActionDeleteDomainQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteDomainQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteDomain'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteDomain<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteDomainQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteDomainQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteDomainQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteDomain'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteDomain<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteDomainMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteExpressionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteExpression', '/#Action=DeleteExpression', keyArgs] as const
}

export function getActionDeleteExpressionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteExpressionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteExpression'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteExpression<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteExpressionQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteExpressionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteExpressionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteExpression'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteExpression<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteExpressionMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteIndexFieldQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteIndexField', '/#Action=DeleteIndexField', keyArgs] as const
}

export function getActionDeleteIndexFieldQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteIndexFieldQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteIndexField'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteIndexField<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteIndexFieldQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteIndexFieldQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteIndexFieldQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteIndexField'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteIndexField<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteIndexFieldMutationOptions<TError, TOnMutateResult>(
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

export function getActionDeleteSuggesterQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DeleteSuggester', '/#Action=DeleteSuggester', keyArgs] as const
}

export function getActionDeleteSuggesterQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDeleteSuggesterQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DeleteSuggester'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDeleteSuggester<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDeleteSuggesterQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDeleteSuggesterQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDeleteSuggesterQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DeleteSuggester'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDeleteSuggester<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDeleteSuggesterMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeAnalysisSchemesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeAnalysisSchemes', '/#Action=DescribeAnalysisSchemes', keyArgs] as const
}

export function getActionDescribeAnalysisSchemesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAnalysisSchemesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAnalysisSchemes'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAnalysisSchemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAnalysisSchemesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAnalysisSchemesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAnalysisSchemesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAnalysisSchemes'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAnalysisSchemes<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAnalysisSchemesMutationOptions<
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

export function getActionDescribeAvailabilityOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeAvailabilityOptions',
    '/#Action=DescribeAvailabilityOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeAvailabilityOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeAvailabilityOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeAvailabilityOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeAvailabilityOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeAvailabilityOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeAvailabilityOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeAvailabilityOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeAvailabilityOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeAvailabilityOptions<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeAvailabilityOptionsMutationOptions<
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

export function getActionDescribeDomainEndpointOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeDomainEndpointOptions',
    '/#Action=DescribeDomainEndpointOptions',
    keyArgs,
  ] as const
}

export function getActionDescribeDomainEndpointOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDomainEndpointOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDomainEndpointOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDomainEndpointOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeDomainEndpointOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDomainEndpointOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDomainEndpointOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDomainEndpointOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeDomainEndpointOptions<
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
                  ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>,
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
  const mutationDefaults = getPostActionDescribeDomainEndpointOptionsMutationOptions<
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

export function getActionDescribeDomainsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeDomains', '/#Action=DescribeDomains', keyArgs] as const
}

export function getActionDescribeDomainsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeDomains'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeDomainsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeDomains'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeDomains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeDomainsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeExpressionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeExpressions', '/#Action=DescribeExpressions', keyArgs] as const
}

export function getActionDescribeExpressionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeExpressionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeExpressions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeExpressions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeExpressionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeExpressionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeExpressionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeExpressions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeExpressions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeExpressionsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeIndexFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeIndexFields', '/#Action=DescribeIndexFields', keyArgs] as const
}

export function getActionDescribeIndexFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeIndexFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeIndexFields'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeIndexFields<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeIndexFieldsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeIndexFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeIndexFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeIndexFields'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeIndexFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeIndexFieldsMutationOptions<TError, TOnMutateResult>(
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

export function getActionDescribeScalingParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeScalingParameters',
    '/#Action=DescribeScalingParameters',
    keyArgs,
  ] as const
}

export function getActionDescribeScalingParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeScalingParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeScalingParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeScalingParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeScalingParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeScalingParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeScalingParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeScalingParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeScalingParameters<
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
                Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']>,
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
  const mutationDefaults = getPostActionDescribeScalingParametersMutationOptions<
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

export function getActionDescribeServiceAccessPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=DescribeServiceAccessPolicies',
    '/#Action=DescribeServiceAccessPolicies',
    keyArgs,
  ] as const
}

export function getActionDescribeServiceAccessPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeServiceAccessPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeServiceAccessPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeServiceAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>
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
                  ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getActionDescribeServiceAccessPoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeServiceAccessPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeServiceAccessPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeServiceAccessPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeServiceAccessPolicies<
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
                  ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>,
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
  const mutationDefaults = getPostActionDescribeServiceAccessPoliciesMutationOptions<
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

export function getActionDescribeSuggestersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=DescribeSuggesters', '/#Action=DescribeSuggesters', keyArgs] as const
}

export function getActionDescribeSuggestersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionDescribeSuggestersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=DescribeSuggesters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionDescribeSuggesters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionDescribeSuggestersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionDescribeSuggestersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionDescribeSuggestersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=DescribeSuggesters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionDescribeSuggesters<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionDescribeSuggestersMutationOptions<TError, TOnMutateResult>(
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

export function getActionIndexDocumentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=IndexDocuments', '/#Action=IndexDocuments', keyArgs] as const
}

export function getActionIndexDocumentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionIndexDocumentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=IndexDocuments'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionIndexDocuments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionIndexDocumentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionIndexDocumentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionIndexDocumentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=IndexDocuments'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionIndexDocuments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionIndexDocumentsMutationOptions<TError, TOnMutateResult>(
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

export function getActionListDomainNamesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=ListDomainNames', '/#Action=ListDomainNames', keyArgs] as const
}

export function getActionListDomainNamesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionListDomainNamesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=ListDomainNames'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionListDomainNames<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionListDomainNamesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionListDomainNamesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionListDomainNamesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=ListDomainNames'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionListDomainNames<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostActionListDomainNamesMutationOptions<TError, TOnMutateResult>(
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

export function getActionUpdateAvailabilityOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateAvailabilityOptions',
    '/#Action=UpdateAvailabilityOptions',
    keyArgs,
  ] as const
}

export function getActionUpdateAvailabilityOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateAvailabilityOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateAvailabilityOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateAvailabilityOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateAvailabilityOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateAvailabilityOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateAvailabilityOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateAvailabilityOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateAvailabilityOptions<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>,
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
  const mutationDefaults = getPostActionUpdateAvailabilityOptionsMutationOptions<
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

export function getActionUpdateDomainEndpointOptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateDomainEndpointOptions',
    '/#Action=UpdateDomainEndpointOptions',
    keyArgs,
  ] as const
}

export function getActionUpdateDomainEndpointOptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateDomainEndpointOptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateDomainEndpointOptions'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateDomainEndpointOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateDomainEndpointOptionsQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateDomainEndpointOptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateDomainEndpointOptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateDomainEndpointOptions'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateDomainEndpointOptions<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>,
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
  const mutationDefaults = getPostActionUpdateDomainEndpointOptionsMutationOptions<
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

export function getActionUpdateScalingParametersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['#Action=UpdateScalingParameters', '/#Action=UpdateScalingParameters', keyArgs] as const
}

export function getActionUpdateScalingParametersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateScalingParametersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateScalingParameters'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateScalingParameters<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateScalingParametersQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateScalingParametersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateScalingParametersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateScalingParameters'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateScalingParameters<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']>,
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
  const mutationDefaults = getPostActionUpdateScalingParametersMutationOptions<
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

export function getActionUpdateServiceAccessPoliciesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    '#Action=UpdateServiceAccessPolicies',
    '/#Action=UpdateServiceAccessPolicies',
    keyArgs,
  ] as const
}

export function getActionUpdateServiceAccessPoliciesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getActionUpdateServiceAccessPoliciesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['#Action=UpdateServiceAccessPolicies'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useActionUpdateServiceAccessPolicies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
              >
            >
          >,
          ReturnType<typeof getActionUpdateServiceAccessPoliciesQueryKey>
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
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getActionUpdateServiceAccessPoliciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getActionUpdateServiceAccessPoliciesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['#Action=UpdateServiceAccessPolicies'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostActionUpdateServiceAccessPolicies<
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
                Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>,
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
  const mutationDefaults = getPostActionUpdateServiceAccessPoliciesMutationOptions<
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
