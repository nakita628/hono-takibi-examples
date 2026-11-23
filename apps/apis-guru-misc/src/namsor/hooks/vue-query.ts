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

export function getApi2Key() {
  return ['api2'] as const
}

export function getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
    >
  >,
) {
  return ['api2', '/api2/json/anonymize/:source/:anonymized/:token', toValue(args)] as const
}

export function getApi2JsonAnonymizeSourceAnonymizedTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.anonymize[':source'][':anonymized'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonAnonymizeSourceAnonymizedToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
    >
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
                    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
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
                    (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey>
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
              (typeof client.api2.json.anonymize)[':source'][':anonymized'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonAnonymizeSourceAnonymizedTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.anonymize[':source'][':anonymized'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonApiKeyInfoQueryKey() {
  return ['api2', '/api2/json/apiKeyInfo'] as const
}

export function getApi2JsonApiKeyInfoQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonApiKeyInfoQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.apiKeyInfo.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonApiKeyInfo<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>
            >
          >,
          ReturnType<typeof getApi2JsonApiKeyInfoQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiKeyInfo.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiKeyInfoQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonApiKeyInfoQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.apiKeyInfo.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonApiServicesQueryKey() {
  return ['api2', '/api2/json/apiServices'] as const
}

export function getApi2JsonApiServicesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonApiServicesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.apiServices.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonApiServices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
            >
          >,
          ReturnType<typeof getApi2JsonApiServicesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiServices.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiServicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonApiServicesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.apiServices.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonApiStatusQueryKey() {
  return ['api2', '/api2/json/apiStatus'] as const
}

export function getApi2JsonApiStatusQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonApiStatusQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.apiStatus.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonApiStatus<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>
            >
          >,
          ReturnType<typeof getApi2JsonApiStatusQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiStatus.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonApiStatusQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.apiStatus.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonApiUsageQueryKey() {
  return ['api2', '/api2/json/apiUsage'] as const
}

export function getApi2JsonApiUsageQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonApiUsageQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.apiUsage.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonApiUsage<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>
            >
          >,
          ReturnType<typeof getApi2JsonApiUsageQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsage.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiUsageQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonApiUsageQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.apiUsage.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonApiUsageHistoryQueryKey() {
  return ['api2', '/api2/json/apiUsageHistory'] as const
}

export function getApi2JsonApiUsageHistoryQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonApiUsageHistoryQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.apiUsageHistory.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonApiUsageHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonApiUsageHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.apiUsageHistory.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiUsageHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonApiUsageHistoryQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.apiUsageHistory.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonApiUsageHistoryAggregateQueryKey() {
  return ['api2', '/api2/json/apiUsageHistoryAggregate'] as const
}

export function getApi2JsonApiUsageHistoryAggregateQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonApiUsageHistoryAggregateQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.apiUsageHistoryAggregate.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonApiUsageHistoryAggregate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonApiUsageHistoryAggregateQueryKey>
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
          Awaited<ReturnType<typeof client.api2.json.apiUsageHistoryAggregate.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonApiUsageHistoryAggregateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonApiUsageHistoryAggregateQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.apiUsageHistoryAggregate.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/castegroupIndianFull/:subDivisionIso31662/:personalNameFull',
    toValue(args),
  ] as const
}

export function getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.castegroupIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
    >
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
                    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
                    (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey
          >
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
              (typeof client.api2.json.castegroupIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.castegroupIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonCastegroupIndianFullBatchMutationKey() {
  return ['api2', '/api2/json/castegroupIndianFullBatch', 'POST'] as const
}

export function getPostApi2JsonCastegroupIndianFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.castegroupIndianFullBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonCastegroupIndianFullBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
    ) {
      return parseResponse(client.api2.json.castegroupIndianFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonCastegroupIndianFullBatch<
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
                Awaited<ReturnType<typeof client.api2.json.castegroupIndianFullBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.castegroupIndianFullBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonCastegroupIndianFullBatchMutationOptions<
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

export function getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameCandidates/:chineseSurnameLatin/:chineseGivenNameLatin',
    toValue(args),
  ] as const
}

export function getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.chineseNameCandidates[':chineseSurnameLatin'][
          ':chineseGivenNameLatin'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
    >
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
                    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
                    (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey
          >
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
              (typeof client.api2.json.chineseNameCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonChineseNameCandidatesChineseSurnameLatinChineseGivenNameLatinQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.chineseNameCandidates[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonChineseNameCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/chineseNameCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonChineseNameCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonChineseNameCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
    ) {
      return parseResponse(client.api2.json.chineseNameCandidatesBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonChineseNameCandidatesBatch<
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
                Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.chineseNameCandidatesBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonChineseNameCandidatesBatchMutationOptions<
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

export function getPostApi2JsonChineseNameCandidatesGenderBatchMutationKey() {
  return ['api2', '/api2/json/chineseNameCandidatesGenderBatch', 'POST'] as const
}

export function getPostApi2JsonChineseNameCandidatesGenderBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonChineseNameCandidatesGenderBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
    ) {
      return parseResponse(client.api2.json.chineseNameCandidatesGenderBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonChineseNameCandidatesGenderBatch<
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
                Awaited<ReturnType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.chineseNameCandidatesGenderBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonChineseNameCandidatesGenderBatchMutationOptions<
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

export function getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameGenderCandidates/:chineseSurnameLatin/:chineseGivenNameLatin/:knownGender',
    toValue(args),
  ] as const
}

export function getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.chineseNameGenderCandidates[':chineseSurnameLatin'][
          ':chineseGivenNameLatin'
        ][':knownGender'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGender<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
    >
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
                    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
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
                    (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey
          >
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
              (typeof client.api2.json.chineseNameGenderCandidates)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':knownGender']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonChineseNameGenderCandidatesChineseSurnameLatinChineseGivenNameLatinKnownGenderQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.chineseNameGenderCandidates[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ][':knownGender'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/chineseNameMatch/:chineseSurnameLatin/:chineseGivenNameLatin/:chineseName',
    toValue(args),
  ] as const
}

export function getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.chineseNameMatch[':chineseSurnameLatin'][':chineseGivenNameLatin'][
          ':chineseName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
    >
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
                    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
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
                    (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey
          >
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
              (typeof client.api2.json.chineseNameMatch)[':chineseSurnameLatin'][':chineseGivenNameLatin'][':chineseName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonChineseNameMatchChineseSurnameLatinChineseGivenNameLatinChineseNameQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.chineseNameMatch[':chineseSurnameLatin'][':chineseGivenNameLatin'][
            ':chineseName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonChineseNameMatchBatchMutationKey() {
  return ['api2', '/api2/json/chineseNameMatchBatch', 'POST'] as const
}

export function getPostApi2JsonChineseNameMatchBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.chineseNameMatchBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonChineseNameMatchBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>) {
      return parseResponse(client.api2.json.chineseNameMatchBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonChineseNameMatchBatch<
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
                Awaited<ReturnType<typeof client.api2.json.chineseNameMatchBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.chineseNameMatchBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonChineseNameMatchBatchMutationOptions<
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

export function getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/corridor/:countryIso2From/:firstNameFrom/:lastNameFrom/:countryIso2To/:firstNameTo/:lastNameTo',
    toValue(args),
  ] as const
}

export function getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.corridor[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][
          ':countryIso2To'
        ][':firstNameTo'][':lastNameTo'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameTo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
    >
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
                    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
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
                    (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey
          >
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
              (typeof client.api2.json.corridor)[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][':countryIso2To'][':firstNameTo'][':lastNameTo']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonCorridorCountryIso2FromFirstNameFromLastNameFromCountryIso2ToFirstNameToLastNameToQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.corridor[':countryIso2From'][':firstNameFrom'][':lastNameFrom'][
            ':countryIso2To'
          ][':firstNameTo'][':lastNameTo'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonCorridorBatchMutationKey() {
  return ['api2', '/api2/json/corridorBatch', 'POST'] as const
}

export function getPostApi2JsonCorridorBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.corridorBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.corridorBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonCorridorBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.corridorBatch.$post>) {
      return parseResponse(client.api2.json.corridorBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonCorridorBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.corridorBatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.corridorBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonCorridorBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonCountryPersonalNameFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>
  >,
) {
  return ['api2', '/api2/json/country/:personalNameFull', toValue(args)] as const
}

export function getApi2JsonCountryPersonalNameFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonCountryPersonalNameFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.country[':personalNameFull'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonCountryPersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.country)[':personalNameFull']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonCountryPersonalNameFullQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.country)[':personalNameFull']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonCountryPersonalNameFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonCountryPersonalNameFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.country[':personalNameFull'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonCountryBatchMutationKey() {
  return ['api2', '/api2/json/countryBatch', 'POST'] as const
}

export function getPostApi2JsonCountryBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.countryBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.countryBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonCountryBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.countryBatch.$post>) {
      return parseResponse(client.api2.json.countryBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonCountryBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.countryBatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.countryBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonCountryBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
    >
  >,
) {
  return ['api2', '/api2/json/diaspora/:countryIso2/:firstName/:lastName', toValue(args)] as const
}

export function getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.diaspora[':countryIso2'][':firstName'][':lastName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonDiasporaCountryIso2FirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
    >
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
                    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
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
                    (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey>
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
              (typeof client.api2.json.diaspora)[':countryIso2'][':firstName'][':lastName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonDiasporaCountryIso2FirstNameLastNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.diaspora[':countryIso2'][':firstName'][':lastName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonDiasporaBatchMutationKey() {
  return ['api2', '/api2/json/diasporaBatch', 'POST'] as const
}

export function getPostApi2JsonDiasporaBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.diasporaBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.diasporaBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonDiasporaBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.diasporaBatch.$post>) {
      return parseResponse(client.api2.json.diasporaBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonDiasporaBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.diasporaBatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.diasporaBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonDiasporaBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderFirstNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>>,
) {
  return ['api2', '/api2/json/gender/:firstName', toValue(args)] as const
}

export function getApi2JsonGenderFirstNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderFirstNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.gender[':firstName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderFirstName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api2.json.gender)[':firstName']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderFirstNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFirstNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderFirstNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.gender[':firstName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonGenderFirstNameLastNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
  >,
) {
  return ['api2', '/api2/json/gender/:firstName/:lastName', toValue(args)] as const
}

export function getApi2JsonGenderFirstNameLastNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderFirstNameLastNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.gender[':firstName'][':lastName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
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
                  ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderFirstNameLastNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.gender)[':firstName'][':lastName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFirstNameLastNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderFirstNameLastNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.gender[':firstName'][':lastName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderBatchMutationKey() {
  return ['api2', '/api2/json/genderBatch', 'POST'] as const
}

export function getPostApi2JsonGenderBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderBatch.$post>) {
      return parseResponse(client.api2.json.genderBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderBatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderChineseNameChineseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
  >,
) {
  return ['api2', '/api2/json/genderChineseName/:chineseName', toValue(args)] as const
}

export function getApi2JsonGenderChineseNameChineseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderChineseNameChineseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderChineseName[':chineseName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
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
                  ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderChineseNameChineseNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.genderChineseName)[':chineseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderChineseNameChineseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderChineseNameChineseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderChineseName[':chineseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderChineseNameBatchMutationKey() {
  return ['api2', '/api2/json/genderChineseNameBatch', 'POST'] as const
}

export function getPostApi2JsonGenderChineseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderChineseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>) {
      return parseResponse(client.api2.json.genderChineseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderChineseNameBatch<
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
                Awaited<ReturnType<typeof client.api2.json.genderChineseNameBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderChineseNameBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderChineseNameBatchMutationOptions<
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

export function getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/genderChineseNamePinyin/:chineseSurnameLatin/:chineseGivenNameLatin',
    toValue(args),
  ] as const
}

export function getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderChineseNamePinyin[':chineseSurnameLatin'][
          ':chineseGivenNameLatin'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
    >
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
                    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
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
                    (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey
          >
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
              (typeof client.api2.json.genderChineseNamePinyin)[':chineseSurnameLatin'][':chineseGivenNameLatin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonGenderChineseNamePinyinChineseSurnameLatinChineseGivenNameLatinQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderChineseNamePinyin[':chineseSurnameLatin'][
            ':chineseGivenNameLatin'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderChineseNamePinyinBatchMutationKey() {
  return ['api2', '/api2/json/genderChineseNamePinyinBatch', 'POST'] as const
}

export function getPostApi2JsonGenderChineseNamePinyinBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderChineseNamePinyinBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
    ) {
      return parseResponse(client.api2.json.genderChineseNamePinyinBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderChineseNamePinyinBatch<
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
                Awaited<ReturnType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderChineseNamePinyinBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderChineseNamePinyinBatchMutationOptions<
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

export function getApi2JsonGenderFullFullNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>
  >,
) {
  return ['api2', '/api2/json/genderFull/:fullName', toValue(args)] as const
}

export function getApi2JsonGenderFullFullNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderFullFullNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderFull[':fullName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderFullFullName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderFull)[':fullName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderFullFullNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.genderFull)[':fullName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFullFullNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderFullFullNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderFull[':fullName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderFullBatchMutationKey() {
  return ['api2', '/api2/json/genderFullBatch', 'POST'] as const
}

export function getPostApi2JsonGenderFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderFullBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderFullBatch.$post>) {
      return parseResponse(client.api2.json.genderFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderFullBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.genderFullBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderFullBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderFullBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
  >,
) {
  return ['api2', '/api2/json/genderFullGeo/:fullName/:countryIso2', toValue(args)] as const
}

export function getApi2JsonGenderFullGeoFullNameCountryIso2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderFullGeo[':fullName'][':countryIso2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderFullGeoFullNameCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
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
                    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
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
                    (typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey>
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
            ReturnType<(typeof client.api2.json.genderFullGeo)[':fullName'][':countryIso2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderFullGeoFullNameCountryIso2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderFullGeo[':fullName'][':countryIso2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderFullGeoBatchMutationKey() {
  return ['api2', '/api2/json/genderFullGeoBatch', 'POST'] as const
}

export function getPostApi2JsonGenderFullGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderFullGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderFullGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>) {
      return parseResponse(client.api2.json.genderFullGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderFullGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.genderFullGeoBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderFullGeoBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderFullGeoBatchMutationOptions<
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

export function getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
    >
  >,
) {
  return ['api2', '/api2/json/genderGeo/:firstName/:lastName/:countryIso2', toValue(args)] as const
}

export function getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderGeo[':firstName'][':lastName'][':countryIso2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderGeoFirstNameLastNameCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
    >
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
                    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
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
                    (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey>
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
              (typeof client.api2.json.genderGeo)[':firstName'][':lastName'][':countryIso2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderGeoFirstNameLastNameCountryIso2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderGeo[':firstName'][':lastName'][':countryIso2'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderGeoBatchMutationKey() {
  return ['api2', '/api2/json/genderGeoBatch', 'POST'] as const
}

export function getPostApi2JsonGenderGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.genderGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.genderGeoBatch.$post>) {
      return parseResponse(client.api2.json.genderGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.genderGeoBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderGeoBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/genderJapaneseName/:japaneseSurname/:japaneseGivenName',
    toValue(args),
  ] as const
}

export function getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderJapaneseName[':japaneseSurname'][':japaneseGivenName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
    >
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
                    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
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
                    (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey>
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
              (typeof client.api2.json.genderJapaneseName)[':japaneseSurname'][':japaneseGivenName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonGenderJapaneseNameJapaneseSurnameJapaneseGivenNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderJapaneseName[':japaneseSurname'][':japaneseGivenName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderJapaneseNameBatchMutationKey() {
  return ['api2', '/api2/json/genderJapaneseNameBatch', 'POST'] as const
}

export function getPostApi2JsonGenderJapaneseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderJapaneseNameBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
    ) {
      return parseResponse(client.api2.json.genderJapaneseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderJapaneseNameBatch<
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
                Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderJapaneseNameBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderJapaneseNameBatchMutationOptions<
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

export function getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
  >,
) {
  return ['api2', '/api2/json/genderJapaneseNameFull/:japaneseName', toValue(args)] as const
}

export function getApi2JsonGenderJapaneseNameFullJapaneseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.genderJapaneseNameFull[':japaneseName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonGenderJapaneseNameFullJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
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
                    (typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']
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
                    (typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey>
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
            ReturnType<(typeof client.api2.json.genderJapaneseNameFull)[':japaneseName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonGenderJapaneseNameFullJapaneseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.genderJapaneseNameFull[':japaneseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonGenderJapaneseNameFullBatchMutationKey() {
  return ['api2', '/api2/json/genderJapaneseNameFullBatch', 'POST'] as const
}

export function getPostApi2JsonGenderJapaneseNameFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonGenderJapaneseNameFullBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
    ) {
      return parseResponse(client.api2.json.genderJapaneseNameFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonGenderJapaneseNameFullBatch<
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
                Awaited<ReturnType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.genderJapaneseNameFullBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonGenderJapaneseNameFullBatchMutationOptions<
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

export function getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameGenderKanjiCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
    ) {
      return parseResponse(
        client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post(args, options),
      )
    },
  })
}

export function usePostApi2JsonJapaneseNameGenderKanjiCandidatesBatch<
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
                  ReturnType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>
                >
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.japaneseNameGenderKanjiCandidatesBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonJapaneseNameGenderKanjiCandidatesBatchMutationOptions<
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

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin',
    toValue(args),
  ] as const
}

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
          ':japaneseGivenNameLatin'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatin<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
    >
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
                    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
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
                    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey
          >
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
              (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameKanjiCandidates/:japaneseSurnameLatin/:japaneseGivenNameLatin/:knownGender',
    toValue(args),
  ] as const
}

export function getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
          ':japaneseGivenNameLatin'
        ][':knownGender'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGender<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
    >
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
                    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
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
                    (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey
          >
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
              (typeof client.api2.json.japaneseNameKanjiCandidates)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':knownGender']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonJapaneseNameKanjiCandidatesJapaneseSurnameLatinJapaneseGivenNameLatinKnownGenderQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.japaneseNameKanjiCandidates[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ][':knownGender'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameKanjiCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
    ) {
      return parseResponse(client.api2.json.japaneseNameKanjiCandidatesBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonJapaneseNameKanjiCandidatesBatch<
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
                Awaited<ReturnType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.japaneseNameKanjiCandidatesBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonJapaneseNameKanjiCandidatesBatchMutationOptions<
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

export function getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameLatinCandidates/:japaneseSurnameKanji/:japaneseGivenNameKanji',
    toValue(args),
  ] as const
}

export function getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.japaneseNameLatinCandidates[':japaneseSurnameKanji'][
          ':japaneseGivenNameKanji'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanji<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
    >
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
                    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
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
                    (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey
          >
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
              (typeof client.api2.json.japaneseNameLatinCandidates)[':japaneseSurnameKanji'][':japaneseGivenNameKanji']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonJapaneseNameLatinCandidatesJapaneseSurnameKanjiJapaneseGivenNameKanjiQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.japaneseNameLatinCandidates[':japaneseSurnameKanji'][
            ':japaneseGivenNameKanji'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameLatinCandidatesBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
    ) {
      return parseResponse(client.api2.json.japaneseNameLatinCandidatesBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonJapaneseNameLatinCandidatesBatch<
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
                Awaited<ReturnType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.japaneseNameLatinCandidatesBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonJapaneseNameLatinCandidatesBatchMutationOptions<
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

export function getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameMatch/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName',
    toValue(args),
  ] as const
}

export function getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.japaneseNameMatch[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][
          ':japaneseName'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
    >
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
                    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
                    (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
          >
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
              (typeof client.api2.json.japaneseNameMatch)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonJapaneseNameMatchJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.japaneseNameMatch[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][
            ':japaneseName'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonJapaneseNameMatchBatchMutationKey() {
  return ['api2', '/api2/json/japaneseNameMatchBatch', 'POST'] as const
}

export function getPostApi2JsonJapaneseNameMatchBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.japaneseNameMatchBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonJapaneseNameMatchBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>) {
      return parseResponse(client.api2.json.japaneseNameMatchBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonJapaneseNameMatchBatch<
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
                Awaited<ReturnType<typeof client.api2.json.japaneseNameMatchBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.japaneseNameMatchBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonJapaneseNameMatchBatchMutationOptions<
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

export function getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/japaneseNameMatchFeedbackLoop/:japaneseSurnameLatin/:japaneseGivenNameLatin/:japaneseName',
    toValue(args),
  ] as const
}

export function getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.japaneseNameMatchFeedbackLoop[':japaneseSurnameLatin'][
          ':japaneseGivenNameLatin'
        ][':japaneseName'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
    >
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
                    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
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
                    (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
          >
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
              (typeof client.api2.json.japaneseNameMatchFeedbackLoop)[':japaneseSurnameLatin'][':japaneseGivenNameLatin'][':japaneseName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonJapaneseNameMatchFeedbackLoopJapaneseSurnameLatinJapaneseGivenNameLatinJapaneseNameQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.japaneseNameMatchFeedbackLoop[':japaneseSurnameLatin'][
            ':japaneseGivenNameLatin'
          ][':japaneseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonLearnableSourceLearnableTokenQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
  >,
) {
  return ['api2', '/api2/json/learnable/:source/:learnable/:token', toValue(args)] as const
}

export function getApi2JsonLearnableSourceLearnableTokenQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonLearnableSourceLearnableTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.learnable[':source'][':learnable'][':token'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonLearnableSourceLearnableToken<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']>
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
                    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
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
                    (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonLearnableSourceLearnableTokenQueryKey>
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
              (typeof client.api2.json.learnable)[':source'][':learnable'][':token']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonLearnableSourceLearnableTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonLearnableSourceLearnableTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.learnable[':source'][':learnable'][':token'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonNameTypeProperNounQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>
  >,
) {
  return ['api2', '/api2/json/nameType/:properNoun', toValue(args)] as const
}

export function getApi2JsonNameTypeProperNounQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonNameTypeProperNounQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.nameType[':properNoun'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonNameTypeProperNoun<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.nameType)[':properNoun']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonNameTypeProperNounQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.nameType)[':properNoun']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonNameTypeProperNounQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonNameTypeProperNounQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.nameType[':properNoun'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonNameTypeBatchMutationKey() {
  return ['api2', '/api2/json/nameTypeBatch', 'POST'] as const
}

export function getPostApi2JsonNameTypeBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.nameTypeBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonNameTypeBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.nameTypeBatch.$post>) {
      return parseResponse(client.api2.json.nameTypeBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonNameTypeBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeBatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.nameTypeBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonNameTypeBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
  >,
) {
  return ['api2', '/api2/json/nameTypeGeo/:properNoun/:countryIso2', toValue(args)] as const
}

export function getApi2JsonNameTypeGeoProperNounCountryIso2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.nameTypeGeo[':properNoun'][':countryIso2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonNameTypeGeoProperNounCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
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
                    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
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
                    (typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey>
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
            ReturnType<(typeof client.api2.json.nameTypeGeo)[':properNoun'][':countryIso2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonNameTypeGeoProperNounCountryIso2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.nameTypeGeo[':properNoun'][':countryIso2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonNameTypeGeoBatchMutationKey() {
  return ['api2', '/api2/json/nameTypeGeoBatch', 'POST'] as const
}

export function getPostApi2JsonNameTypeGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.nameTypeGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonNameTypeGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>) {
      return parseResponse(client.api2.json.nameTypeGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonNameTypeGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.nameTypeGeoBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.nameTypeGeoBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonNameTypeGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonOriginFirstNameLastNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
  >,
) {
  return ['api2', '/api2/json/origin/:firstName/:lastName', toValue(args)] as const
}

export function getApi2JsonOriginFirstNameLastNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonOriginFirstNameLastNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.origin[':firstName'][':lastName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonOriginFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
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
                  ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonOriginFirstNameLastNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.origin)[':firstName'][':lastName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonOriginFirstNameLastNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonOriginFirstNameLastNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.origin[':firstName'][':lastName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonOriginBatchMutationKey() {
  return ['api2', '/api2/json/originBatch', 'POST'] as const
}

export function getPostApi2JsonOriginBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.originBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.originBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonOriginBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.originBatch.$post>) {
      return parseResponse(client.api2.json.originBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonOriginBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.originBatch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.originBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonOriginBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonParseChineseNameChineseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
  >,
) {
  return ['api2', '/api2/json/parseChineseName/:chineseName', toValue(args)] as const
}

export function getApi2JsonParseChineseNameChineseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonParseChineseNameChineseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.parseChineseName[':chineseName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonParseChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
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
                  ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonParseChineseNameChineseNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.parseChineseName)[':chineseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseChineseNameChineseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonParseChineseNameChineseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.parseChineseName[':chineseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonParseChineseNameBatchMutationKey() {
  return ['api2', '/api2/json/parseChineseNameBatch', 'POST'] as const
}

export function getPostApi2JsonParseChineseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.parseChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseChineseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>) {
      return parseResponse(client.api2.json.parseChineseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseChineseNameBatch<
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
                Awaited<ReturnType<typeof client.api2.json.parseChineseNameBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.parseChineseNameBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonParseChineseNameBatchMutationOptions<
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

export function getApi2JsonParseJapaneseNameJapaneseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
  >,
) {
  return ['api2', '/api2/json/parseJapaneseName/:japaneseName', toValue(args)] as const
}

export function getApi2JsonParseJapaneseNameJapaneseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonParseJapaneseNameJapaneseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.parseJapaneseName[':japaneseName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonParseJapaneseNameJapaneseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
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
                  ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonParseJapaneseNameJapaneseNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.parseJapaneseName)[':japaneseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseJapaneseNameJapaneseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonParseJapaneseNameJapaneseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.parseJapaneseName[':japaneseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonParseJapaneseNameBatchMutationKey() {
  return ['api2', '/api2/json/parseJapaneseNameBatch', 'POST'] as const
}

export function getPostApi2JsonParseJapaneseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.parseJapaneseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseJapaneseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>) {
      return parseResponse(client.api2.json.parseJapaneseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseJapaneseNameBatch<
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
                Awaited<ReturnType<typeof client.api2.json.parseJapaneseNameBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.parseJapaneseNameBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonParseJapaneseNameBatchMutationOptions<
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

export function getApi2JsonParseNameNameFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>
  >,
) {
  return ['api2', '/api2/json/parseName/:nameFull', toValue(args)] as const
}

export function getApi2JsonParseNameNameFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonParseNameNameFullQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.parseName[':nameFull'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonParseNameNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseName)[':nameFull']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonParseNameNameFullQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.parseName)[':nameFull']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseNameNameFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonParseNameNameFullQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.parseName[':nameFull'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonParseNameNameFullCountryIso2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
  >,
) {
  return ['api2', '/api2/json/parseName/:nameFull/:countryIso2', toValue(args)] as const
}

export function getApi2JsonParseNameNameFullCountryIso2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonParseNameNameFullCountryIso2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.parseName[':nameFull'][':countryIso2'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonParseNameNameFullCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
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
                    (typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']
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
                    (typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonParseNameNameFullCountryIso2QueryKey>
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
            ReturnType<(typeof client.api2.json.parseName)[':nameFull'][':countryIso2']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonParseNameNameFullCountryIso2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonParseNameNameFullCountryIso2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.parseName[':nameFull'][':countryIso2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonParseNameBatchMutationKey() {
  return ['api2', '/api2/json/parseNameBatch', 'POST'] as const
}

export function getPostApi2JsonParseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseNameBatch.$post>) {
      return parseResponse(client.api2.json.parseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseNameBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.parseNameBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.parseNameBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonParseNameBatchMutationOptions<TError, TOnMutateResult>(
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

export function getPostApi2JsonParseNameGeoBatchMutationKey() {
  return ['api2', '/api2/json/parseNameGeoBatch', 'POST'] as const
}

export function getPostApi2JsonParseNameGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.parseNameGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonParseNameGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>) {
      return parseResponse(client.api2.json.parseNameGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonParseNameGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.parseNameGeoBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.parseNameGeoBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonParseNameGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
    >
  >,
) {
  return ['api2', '/api2/json/phoneCode/:firstName/:lastName/:phoneNumber', toValue(args)] as const
}

export function getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.phoneCode[':firstName'][':lastName'][':phoneNumber'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonPhoneCodeFirstNameLastNamePhoneNumber<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
    >
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
                    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
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
                    (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey>
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
              (typeof client.api2.json.phoneCode)[':firstName'][':lastName'][':phoneNumber']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonPhoneCodeFirstNameLastNamePhoneNumberQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.phoneCode[':firstName'][':lastName'][':phoneNumber'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonPhoneCodeBatchMutationKey() {
  return ['api2', '/api2/json/phoneCodeBatch', 'POST'] as const
}

export function getPostApi2JsonPhoneCodeBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonPhoneCodeBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>) {
      return parseResponse(client.api2.json.phoneCodeBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonPhoneCodeBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.phoneCodeBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.phoneCodeBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonPhoneCodeBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/phoneCodeGeo/:firstName/:lastName/:phoneNumber/:countryIso2',
    toValue(args),
  ] as const
}

export function getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.phoneCodeGeo[':firstName'][':lastName'][':phoneNumber'][
          ':countryIso2'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
    >
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
                    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
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
                    (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey>
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
              (typeof client.api2.json.phoneCodeGeo)[':firstName'][':lastName'][':phoneNumber'][':countryIso2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonPhoneCodeGeoFirstNameLastNamePhoneNumberCountryIso2QueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.phoneCodeGeo[':firstName'][':lastName'][':phoneNumber'][
            ':countryIso2'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonPhoneCodeGeoBatchMutationKey() {
  return ['api2', '/api2/json/phoneCodeGeoBatch', 'POST'] as const
}

export function getPostApi2JsonPhoneCodeGeoBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.phoneCodeGeoBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonPhoneCodeGeoBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>) {
      return parseResponse(client.api2.json.phoneCodeGeoBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonPhoneCodeGeoBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.phoneCodeGeoBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.phoneCodeGeoBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonPhoneCodeGeoBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/phoneCodeGeoFeedbackLoop/:firstName/:lastName/:phoneNumber/:phoneNumberE164/:countryIso2',
    toValue(args),
  ] as const
}

export function getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.phoneCodeGeoFeedbackLoop[':firstName'][':lastName'][':phoneNumber'][
          ':phoneNumberE164'
        ][':countryIso2'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
    >
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
                    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
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
                    (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey
          >
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
              (typeof client.api2.json.phoneCodeGeoFeedbackLoop)[':firstName'][':lastName'][':phoneNumber'][':phoneNumberE164'][':countryIso2']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey
    >
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonPhoneCodeGeoFeedbackLoopFirstNameLastNamePhoneNumberPhoneNumberE164CountryIso2QueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.phoneCodeGeoFeedbackLoop[':firstName'][':lastName'][':phoneNumber'][
            ':phoneNumberE164'
          ][':countryIso2'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonPinyinChineseNameChineseNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
  >,
) {
  return ['api2', '/api2/json/pinyinChineseName/:chineseName', toValue(args)] as const
}

export function getApi2JsonPinyinChineseNameChineseNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonPinyinChineseNameChineseNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.pinyinChineseName[':chineseName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonPinyinChineseNameChineseName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
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
                  ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonPinyinChineseNameChineseNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.pinyinChineseName)[':chineseName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonPinyinChineseNameChineseNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonPinyinChineseNameChineseNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.pinyinChineseName[':chineseName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonPinyinChineseNameBatchMutationKey() {
  return ['api2', '/api2/json/pinyinChineseNameBatch', 'POST'] as const
}

export function getPostApi2JsonPinyinChineseNameBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.pinyinChineseNameBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonPinyinChineseNameBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>) {
      return parseResponse(client.api2.json.pinyinChineseNameBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonPinyinChineseNameBatch<
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
                Awaited<ReturnType<typeof client.api2.json.pinyinChineseNameBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.pinyinChineseNameBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonPinyinChineseNameBatchMutationOptions<
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

export function getApi2JsonRegionsQueryKey() {
  return ['api2', '/api2/json/regions'] as const
}

export function getApi2JsonRegionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonRegionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.regions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>
            >
          >,
          ReturnType<typeof getApi2JsonRegionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.regions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonRegionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.regions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/religionFull/:countryIso2/:subDivisionIso31662/:personalNameFull',
    toValue(args),
  ] as const
}

export function getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.religionFull[':countryIso2'][':subDivisionIso31662'][
          ':personalNameFull'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
    >
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
                    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
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
                    (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey
          >
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
              (typeof client.api2.json.religionFull)[':countryIso2'][':subDivisionIso31662'][':personalNameFull']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonReligionFullCountryIso2SubDivisionIso31662PersonalNameFullQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.religionFull[':countryIso2'][':subDivisionIso31662'][
            ':personalNameFull'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonReligionFullBatchMutationKey() {
  return ['api2', '/api2/json/religionFullBatch', 'POST'] as const
}

export function getPostApi2JsonReligionFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.religionFullBatch.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.religionFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonReligionFullBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.religionFullBatch.$post>) {
      return parseResponse(client.api2.json.religionFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonReligionFullBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.religionFullBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.religionFullBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonReligionFullBatchMutationOptions<TError, TOnMutateResult>(
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

export function getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/religionIndianFull/:subDivisionIso31662/:personalNameFull',
    toValue(args),
  ] as const
}

export function getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.religionIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFull<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
    >
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
                    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
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
                    (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey
          >
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
              (typeof client.api2.json.religionIndianFull)[':subDivisionIso31662'][':personalNameFull']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.religionIndianFull[':subDivisionIso31662'][':personalNameFull'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonReligionIndianFullBatchMutationKey() {
  return ['api2', '/api2/json/religionIndianFullBatch', 'POST'] as const
}

export function getPostApi2JsonReligionIndianFullBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.religionIndianFullBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonReligionIndianFullBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
    ) {
      return parseResponse(client.api2.json.religionIndianFullBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonReligionIndianFullBatch<
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
                Awaited<ReturnType<typeof client.api2.json.religionIndianFullBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.religionIndianFullBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonReligionIndianFullBatchMutationOptions<
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

export function getApi2JsonSoftwareVersionQueryKey() {
  return ['api2', '/api2/json/softwareVersion'] as const
}

export function getApi2JsonSoftwareVersionQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getApi2JsonSoftwareVersionQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.softwareVersion.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonSoftwareVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>
              >
            >
          >,
          ReturnType<typeof getApi2JsonSoftwareVersionQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api2.json.softwareVersion.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonSoftwareVersionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getApi2JsonSoftwareVersionQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.softwareVersion.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/subclassification/:countryIso2/:firstName/:lastName',
    toValue(args),
  ] as const
}

export function getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.subclassification[':countryIso2'][':firstName'][':lastName'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApi2JsonSubclassificationCountryIso2FirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
    >
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
                    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
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
                    (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey>
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
              (typeof client.api2.json.subclassification)[':countryIso2'][':firstName'][':lastName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonSubclassificationCountryIso2FirstNameLastNameQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.subclassification[':countryIso2'][':firstName'][':lastName'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonSubclassificationBatchMutationKey() {
  return ['api2', '/api2/json/subclassificationBatch', 'POST'] as const
}

export function getPostApi2JsonSubclassificationBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.subclassificationBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.subclassificationBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonSubclassificationBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.subclassificationBatch.$post>) {
      return parseResponse(client.api2.json.subclassificationBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonSubclassificationBatch<
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
                Awaited<ReturnType<typeof client.api2.json.subclassificationBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.subclassificationBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonSubclassificationBatchMutationOptions<
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

export function getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
    >
  >,
) {
  return ['api2', '/api2/json/subclassificationIndian/:firstName/:lastName', toValue(args)] as const
}

export function getApi2JsonSubclassificationIndianFirstNameLastNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.subclassificationIndian[':firstName'][':lastName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonSubclassificationIndianFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
    >
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
                    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
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
                    (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey>
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
              (typeof client.api2.json.subclassificationIndian)[':firstName'][':lastName']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonSubclassificationIndianFirstNameLastNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.subclassificationIndian[':firstName'][':lastName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonSubclassificationIndianBatchMutationKey() {
  return ['api2', '/api2/json/subclassificationIndianBatch', 'POST'] as const
}

export function getPostApi2JsonSubclassificationIndianBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.subclassificationIndianBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonSubclassificationIndianBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
    ) {
      return parseResponse(client.api2.json.subclassificationIndianBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonSubclassificationIndianBatch<
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
                Awaited<ReturnType<typeof client.api2.json.subclassificationIndianBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.subclassificationIndianBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonSubclassificationIndianBatchMutationOptions<
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

export function getApi2JsonTaxonomyClassesClassifierNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
  >,
) {
  return ['api2', '/api2/json/taxonomyClasses/:classifierName', toValue(args)] as const
}

export function getApi2JsonTaxonomyClassesClassifierNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonTaxonomyClassesClassifierNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.taxonomyClasses[':classifierName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonTaxonomyClassesClassifierName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
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
                  ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonTaxonomyClassesClassifierNameQueryKey>
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
          Awaited<ReturnType<(typeof client.api2.json.taxonomyClasses)[':classifierName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonTaxonomyClassesClassifierNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonTaxonomyClassesClassifierNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.taxonomyClasses[':classifierName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
  >,
) {
  return ['api2', '/api2/json/usRaceEthnicity/:firstName/:lastName', toValue(args)] as const
}

export function getApi2JsonUsRaceEthnicityFirstNameLastNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.usRaceEthnicity[':firstName'][':lastName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApi2JsonUsRaceEthnicityFirstNameLastName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
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
                    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
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
                    (typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey>
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
            ReturnType<(typeof client.api2.json.usRaceEthnicity)[':firstName'][':lastName']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApi2JsonUsRaceEthnicityFirstNameLastNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.usRaceEthnicity[':firstName'][':lastName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonUsRaceEthnicityBatchMutationKey() {
  return ['api2', '/api2/json/usRaceEthnicityBatch', 'POST'] as const
}

export function getPostApi2JsonUsRaceEthnicityBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.usRaceEthnicityBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonUsRaceEthnicityBatchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>) {
      return parseResponse(client.api2.json.usRaceEthnicityBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonUsRaceEthnicityBatch<
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
                Awaited<ReturnType<typeof client.api2.json.usRaceEthnicityBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.usRaceEthnicityBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonUsRaceEthnicityBatchMutationOptions<
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

export function getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
    >
  >,
) {
  return [
    'api2',
    '/api2/json/usRaceEthnicityZIP5/:firstName/:lastName/:zip5Code',
    toValue(args),
  ] as const
}

export function getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api2.json.usRaceEthnicityZIP5[':firstName'][':lastName'][':zip5Code'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5Code<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
    >
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
                    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
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
                    (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey>
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
              (typeof client.api2.json.usRaceEthnicityZIP5)[':firstName'][':lastName'][':zip5Code']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getApi2JsonUsRaceEthnicityZIP5FirstNameLastNameZip5CodeQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.api2.json.usRaceEthnicityZIP5[':firstName'][':lastName'][':zip5Code'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostApi2JsonUsZipRaceEthnicityBatchMutationKey() {
  return ['api2', '/api2/json/usZipRaceEthnicityBatch', 'POST'] as const
}

export function getPostApi2JsonUsZipRaceEthnicityBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApi2JsonUsZipRaceEthnicityBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
    ) {
      return parseResponse(client.api2.json.usZipRaceEthnicityBatch.$post(args, options))
    },
  })
}

export function usePostApi2JsonUsZipRaceEthnicityBatch<
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
                Awaited<ReturnType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api2.json.usZipRaceEthnicityBatch.$post>,
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
  const mutationDefaults = getPostApi2JsonUsZipRaceEthnicityBatchMutationOptions<
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
