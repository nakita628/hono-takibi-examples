import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetActionBuildSuggestersKey(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=BuildSuggesters', '/#Action=BuildSuggesters', keyArgs] as const
}

export function useGetActionBuildSuggesters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
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
        ? getGetActionBuildSuggestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=BuildSuggesters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionBuildSuggesters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
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
        ? getGetActionBuildSuggestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=BuildSuggesters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionBuildSuggestersKey() {
  return ['#Action=BuildSuggesters', '/#Action=BuildSuggesters', 'POST'] as const
}

export function usePostActionBuildSuggesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=BuildSuggesters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=BuildSuggesters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionBuildSuggestersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=BuildSuggesters']['$post']> },
      ) => parseResponse(client['#Action=BuildSuggesters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionCreateDomainKey(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=CreateDomain', '/#Action=CreateDomain', keyArgs] as const
}

export function useGetActionCreateDomain<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
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
        ? getGetActionCreateDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionCreateDomain<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=CreateDomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
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
        ? getGetActionCreateDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=CreateDomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionCreateDomainKey() {
  return ['#Action=CreateDomain', '/#Action=CreateDomain', 'POST'] as const
}

export function usePostActionCreateDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=CreateDomain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=CreateDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionCreateDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=CreateDomain']['$post']> },
      ) => parseResponse(client['#Action=CreateDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDefineAnalysisSchemeKey(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineAnalysisScheme', '/#Action=DefineAnalysisScheme', keyArgs] as const
}

export function useGetActionDefineAnalysisScheme<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
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
        ? getGetActionDefineAnalysisSchemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineAnalysisScheme'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDefineAnalysisScheme<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
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
        ? getGetActionDefineAnalysisSchemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineAnalysisScheme'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDefineAnalysisSchemeKey() {
  return ['#Action=DefineAnalysisScheme', '/#Action=DefineAnalysisScheme', 'POST'] as const
}

export function usePostActionDefineAnalysisScheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDefineAnalysisSchemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DefineAnalysisScheme']['$post']> },
      ) => parseResponse(client['#Action=DefineAnalysisScheme'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDefineExpressionKey(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineExpression', '/#Action=DefineExpression', keyArgs] as const
}

export function useGetActionDefineExpression<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
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
        ? getGetActionDefineExpressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineExpression'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDefineExpression<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineExpression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
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
        ? getGetActionDefineExpressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineExpression'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDefineExpressionKey() {
  return ['#Action=DefineExpression', '/#Action=DefineExpression', 'POST'] as const
}

export function usePostActionDefineExpression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineExpression']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DefineExpression']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDefineExpressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DefineExpression']['$post']> },
      ) => parseResponse(client['#Action=DefineExpression'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDefineIndexFieldKey(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineIndexField', '/#Action=DefineIndexField', keyArgs] as const
}

export function useGetActionDefineIndexField<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
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
        ? getGetActionDefineIndexFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineIndexField'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDefineIndexField<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineIndexField']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
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
        ? getGetActionDefineIndexFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineIndexField'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDefineIndexFieldKey() {
  return ['#Action=DefineIndexField', '/#Action=DefineIndexField', 'POST'] as const
}

export function usePostActionDefineIndexField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineIndexField']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DefineIndexField']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDefineIndexFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DefineIndexField']['$post']> },
      ) => parseResponse(client['#Action=DefineIndexField'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDefineSuggesterKey(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DefineSuggester', '/#Action=DefineSuggester', keyArgs] as const
}

export function useGetActionDefineSuggester<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
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
        ? getGetActionDefineSuggesterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineSuggester'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDefineSuggester<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DefineSuggester']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
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
        ? getGetActionDefineSuggesterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DefineSuggester'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDefineSuggesterKey() {
  return ['#Action=DefineSuggester', '/#Action=DefineSuggester', 'POST'] as const
}

export function usePostActionDefineSuggester<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DefineSuggester']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DefineSuggester']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDefineSuggesterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DefineSuggester']['$post']> },
      ) => parseResponse(client['#Action=DefineSuggester'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteAnalysisSchemeKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteAnalysisScheme', '/#Action=DeleteAnalysisScheme', keyArgs] as const
}

export function useGetActionDeleteAnalysisScheme<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
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
        ? getGetActionDeleteAnalysisSchemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAnalysisScheme'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteAnalysisScheme<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
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
        ? getGetActionDeleteAnalysisSchemeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteAnalysisScheme'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteAnalysisSchemeKey() {
  return ['#Action=DeleteAnalysisScheme', '/#Action=DeleteAnalysisScheme', 'POST'] as const
}

export function usePostActionDeleteAnalysisScheme<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteAnalysisSchemeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DeleteAnalysisScheme']['$post']> },
      ) => parseResponse(client['#Action=DeleteAnalysisScheme'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteDomainKey(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', keyArgs] as const
}

export function useGetActionDeleteDomain<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
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
        ? getGetActionDeleteDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteDomain<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteDomain']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
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
        ? getGetActionDeleteDomainKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteDomain'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteDomainKey() {
  return ['#Action=DeleteDomain', '/#Action=DeleteDomain', 'POST'] as const
}

export function usePostActionDeleteDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['#Action=DeleteDomain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteDomain']['$post']> },
      ) => parseResponse(client['#Action=DeleteDomain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteExpressionKey(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteExpression', '/#Action=DeleteExpression', keyArgs] as const
}

export function useGetActionDeleteExpression<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
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
        ? getGetActionDeleteExpressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteExpression'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteExpression<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteExpression']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
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
        ? getGetActionDeleteExpressionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteExpression'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteExpressionKey() {
  return ['#Action=DeleteExpression', '/#Action=DeleteExpression', 'POST'] as const
}

export function usePostActionDeleteExpression<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteExpression']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteExpression']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteExpressionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteExpression']['$post']> },
      ) => parseResponse(client['#Action=DeleteExpression'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteIndexFieldKey(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteIndexField', '/#Action=DeleteIndexField', keyArgs] as const
}

export function useGetActionDeleteIndexField<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
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
        ? getGetActionDeleteIndexFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteIndexField'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteIndexField<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
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
        ? getGetActionDeleteIndexFieldKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteIndexField'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteIndexFieldKey() {
  return ['#Action=DeleteIndexField', '/#Action=DeleteIndexField', 'POST'] as const
}

export function usePostActionDeleteIndexField<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteIndexField']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteIndexField']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteIndexFieldKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteIndexField']['$post']> },
      ) => parseResponse(client['#Action=DeleteIndexField'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDeleteSuggesterKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DeleteSuggester', '/#Action=DeleteSuggester', keyArgs] as const
}

export function useGetActionDeleteSuggester<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
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
        ? getGetActionDeleteSuggesterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSuggester'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDeleteSuggester<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
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
        ? getGetActionDeleteSuggesterKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DeleteSuggester'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDeleteSuggesterKey() {
  return ['#Action=DeleteSuggester', '/#Action=DeleteSuggester', 'POST'] as const
}

export function usePostActionDeleteSuggester<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DeleteSuggester']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DeleteSuggester']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDeleteSuggesterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DeleteSuggester']['$post']> },
      ) => parseResponse(client['#Action=DeleteSuggester'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAnalysisSchemesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeAnalysisSchemes', '/#Action=DescribeAnalysisSchemes', keyArgs] as const
}

export function useGetActionDescribeAnalysisSchemes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
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
        ? getGetActionDescribeAnalysisSchemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAnalysisSchemes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAnalysisSchemes<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
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
        ? getGetActionDescribeAnalysisSchemesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAnalysisSchemes'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAnalysisSchemesKey() {
  return ['#Action=DescribeAnalysisSchemes', '/#Action=DescribeAnalysisSchemes', 'POST'] as const
}

export function usePostActionDescribeAnalysisSchemes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAnalysisSchemesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeAnalysisSchemes']['$post']> },
      ) => parseResponse(client['#Action=DescribeAnalysisSchemes'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeAvailabilityOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeAvailabilityOptions',
    '/#Action=DescribeAvailabilityOptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeAvailabilityOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
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
        ? getGetActionDescribeAvailabilityOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAvailabilityOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeAvailabilityOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
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
        ? getGetActionDescribeAvailabilityOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeAvailabilityOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeAvailabilityOptionsKey() {
  return [
    '#Action=DescribeAvailabilityOptions',
    '/#Action=DescribeAvailabilityOptions',
    'POST',
  ] as const
}

export function usePostActionDescribeAvailabilityOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeAvailabilityOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeAvailabilityOptions']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeAvailabilityOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDomainEndpointOptionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeDomainEndpointOptions',
    '/#Action=DescribeDomainEndpointOptions',
    keyArgs,
  ] as const
}

export function useGetActionDescribeDomainEndpointOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
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
        ? getGetActionDescribeDomainEndpointOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDomainEndpointOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDomainEndpointOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
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
        ? getGetActionDescribeDomainEndpointOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeDomainEndpointOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDomainEndpointOptionsKey() {
  return [
    '#Action=DescribeDomainEndpointOptions',
    '/#Action=DescribeDomainEndpointOptions',
    'POST',
  ] as const
}

export function usePostActionDescribeDomainEndpointOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDomainEndpointOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeDomainEndpointOptions']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeDomainEndpointOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeDomainsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeDomains', '/#Action=DescribeDomains', keyArgs] as const
}

export function useGetActionDescribeDomains<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
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
        ? getGetActionDescribeDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDomains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeDomains<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeDomains']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
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
        ? getGetActionDescribeDomainsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeDomains'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeDomainsKey() {
  return ['#Action=DescribeDomains', '/#Action=DescribeDomains', 'POST'] as const
}

export function usePostActionDescribeDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeDomains']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeDomains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeDomains']['$post']> },
      ) => parseResponse(client['#Action=DescribeDomains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeExpressionsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeExpressions', '/#Action=DescribeExpressions', keyArgs] as const
}

export function useGetActionDescribeExpressions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
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
        ? getGetActionDescribeExpressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeExpressions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeExpressions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
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
        ? getGetActionDescribeExpressionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeExpressions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeExpressionsKey() {
  return ['#Action=DescribeExpressions', '/#Action=DescribeExpressions', 'POST'] as const
}

export function usePostActionDescribeExpressions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeExpressions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeExpressions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeExpressionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeExpressions']['$post']> },
      ) => parseResponse(client['#Action=DescribeExpressions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeIndexFieldsKey(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeIndexFields', '/#Action=DescribeIndexFields', keyArgs] as const
}

export function useGetActionDescribeIndexFields<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
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
        ? getGetActionDescribeIndexFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeIndexFields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeIndexFields<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
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
        ? getGetActionDescribeIndexFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeIndexFields'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeIndexFieldsKey() {
  return ['#Action=DescribeIndexFields', '/#Action=DescribeIndexFields', 'POST'] as const
}

export function usePostActionDescribeIndexFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeIndexFields']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeIndexFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeIndexFields']['$post']> },
      ) => parseResponse(client['#Action=DescribeIndexFields'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeScalingParametersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeScalingParameters',
    '/#Action=DescribeScalingParameters',
    keyArgs,
  ] as const
}

export function useGetActionDescribeScalingParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
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
        ? getGetActionDescribeScalingParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeScalingParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeScalingParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
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
        ? getGetActionDescribeScalingParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeScalingParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeScalingParametersKey() {
  return [
    '#Action=DescribeScalingParameters',
    '/#Action=DescribeScalingParameters',
    'POST',
  ] as const
}

export function usePostActionDescribeScalingParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeScalingParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeScalingParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=DescribeScalingParameters']['$post']> },
      ) => parseResponse(client['#Action=DescribeScalingParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeServiceAccessPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=DescribeServiceAccessPolicies',
    '/#Action=DescribeServiceAccessPolicies',
    keyArgs,
  ] as const
}

export function useGetActionDescribeServiceAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
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
        ? getGetActionDescribeServiceAccessPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeServiceAccessPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeServiceAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
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
        ? getGetActionDescribeServiceAccessPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=DescribeServiceAccessPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeServiceAccessPoliciesKey() {
  return [
    '#Action=DescribeServiceAccessPolicies',
    '/#Action=DescribeServiceAccessPolicies',
    'POST',
  ] as const
}

export function usePostActionDescribeServiceAccessPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeServiceAccessPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=DescribeServiceAccessPolicies']['$post']>
        },
      ) => parseResponse(client['#Action=DescribeServiceAccessPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionDescribeSuggestersKey(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=DescribeSuggesters', '/#Action=DescribeSuggesters', keyArgs] as const
}

export function useGetActionDescribeSuggesters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
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
        ? getGetActionDescribeSuggestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeSuggesters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionDescribeSuggesters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
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
        ? getGetActionDescribeSuggestersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=DescribeSuggesters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionDescribeSuggestersKey() {
  return ['#Action=DescribeSuggesters', '/#Action=DescribeSuggesters', 'POST'] as const
}

export function usePostActionDescribeSuggesters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=DescribeSuggesters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionDescribeSuggestersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=DescribeSuggesters']['$post']> },
      ) => parseResponse(client['#Action=DescribeSuggesters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionIndexDocumentsKey(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=IndexDocuments', '/#Action=IndexDocuments', keyArgs] as const
}

export function useGetActionIndexDocuments<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
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
        ? getGetActionIndexDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=IndexDocuments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionIndexDocuments<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=IndexDocuments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
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
        ? getGetActionIndexDocumentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=IndexDocuments'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionIndexDocumentsKey() {
  return ['#Action=IndexDocuments', '/#Action=IndexDocuments', 'POST'] as const
}

export function usePostActionIndexDocuments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=IndexDocuments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=IndexDocuments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionIndexDocumentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=IndexDocuments']['$post']> },
      ) => parseResponse(client['#Action=IndexDocuments'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionListDomainNamesKey(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=ListDomainNames', '/#Action=ListDomainNames', keyArgs] as const
}

export function useGetActionListDomainNames<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
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
        ? getGetActionListDomainNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListDomainNames'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionListDomainNames<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=ListDomainNames']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
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
        ? getGetActionListDomainNamesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['#Action=ListDomainNames'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionListDomainNamesKey() {
  return ['#Action=ListDomainNames', '/#Action=ListDomainNames', 'POST'] as const
}

export function usePostActionListDomainNames<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=ListDomainNames']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=ListDomainNames']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionListDomainNamesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['#Action=ListDomainNames']['$post']> },
      ) => parseResponse(client['#Action=ListDomainNames'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateAvailabilityOptionsKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateAvailabilityOptions',
    '/#Action=UpdateAvailabilityOptions',
    keyArgs,
  ] as const
}

export function useGetActionUpdateAvailabilityOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
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
        ? getGetActionUpdateAvailabilityOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateAvailabilityOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateAvailabilityOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
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
        ? getGetActionUpdateAvailabilityOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateAvailabilityOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateAvailabilityOptionsKey() {
  return [
    '#Action=UpdateAvailabilityOptions',
    '/#Action=UpdateAvailabilityOptions',
    'POST',
  ] as const
}

export function usePostActionUpdateAvailabilityOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateAvailabilityOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UpdateAvailabilityOptions']['$post']> },
      ) => parseResponse(client['#Action=UpdateAvailabilityOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateDomainEndpointOptionsKey(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateDomainEndpointOptions',
    '/#Action=UpdateDomainEndpointOptions',
    keyArgs,
  ] as const
}

export function useGetActionUpdateDomainEndpointOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
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
        ? getGetActionUpdateDomainEndpointOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateDomainEndpointOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateDomainEndpointOptions<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
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
        ? getGetActionUpdateDomainEndpointOptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateDomainEndpointOptions'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateDomainEndpointOptionsKey() {
  return [
    '#Action=UpdateDomainEndpointOptions',
    '/#Action=UpdateDomainEndpointOptions',
    'POST',
  ] as const
}

export function usePostActionUpdateDomainEndpointOptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateDomainEndpointOptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=UpdateDomainEndpointOptions']['$post']>
        },
      ) => parseResponse(client['#Action=UpdateDomainEndpointOptions'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateScalingParametersKey(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['#Action=UpdateScalingParameters', '/#Action=UpdateScalingParameters', keyArgs] as const
}

export function useGetActionUpdateScalingParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
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
        ? getGetActionUpdateScalingParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateScalingParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateScalingParameters<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
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
        ? getGetActionUpdateScalingParametersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateScalingParameters'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateScalingParametersKey() {
  return ['#Action=UpdateScalingParameters', '/#Action=UpdateScalingParameters', 'POST'] as const
}

export function usePostActionUpdateScalingParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateScalingParameters']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateScalingParametersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['#Action=UpdateScalingParameters']['$post']> },
      ) => parseResponse(client['#Action=UpdateScalingParameters'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetActionUpdateServiceAccessPoliciesKey(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [
    '#Action=UpdateServiceAccessPolicies',
    '/#Action=UpdateServiceAccessPolicies',
    keyArgs,
  ] as const
}

export function useGetActionUpdateServiceAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
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
        ? getGetActionUpdateServiceAccessPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateServiceAccessPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetActionUpdateServiceAccessPolicies<TError = unknown>(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
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
        ? getGetActionUpdateServiceAccessPoliciesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['#Action=UpdateServiceAccessPolicies'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostActionUpdateServiceAccessPoliciesKey() {
  return [
    '#Action=UpdateServiceAccessPolicies',
    '/#Action=UpdateServiceAccessPolicies',
    'POST',
  ] as const
}

export function usePostActionUpdateServiceAccessPolicies<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostActionUpdateServiceAccessPoliciesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#Action=UpdateServiceAccessPolicies']['$post']>
        },
      ) => parseResponse(client['#Action=UpdateServiceAccessPolicies'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
