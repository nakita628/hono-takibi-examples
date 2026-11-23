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

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accounts.$get>>,
) {
  return ['v1beta', '/v1beta/accounts', toValue(args)] as const
}

export function getV1betaAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1beta.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>
            >
          >,
          ReturnType<typeof getV1betaAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1beta.accounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
) {
  return ['v1beta', '/v1beta/:name', toValue(args)] as const
}

export function getV1betaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV1betaNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaParentAdSourcesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['adSources']['$get']>>,
) {
  return ['v1beta', '/v1beta/:parent/adSources', toValue(args)] as const
}

export function getV1betaParentAdSourcesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['adSources']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentAdSourcesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].adSources.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentAdSources<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['adSources']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['adSources']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['adSources']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['adSources']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentAdSourcesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['adSources']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentAdSourcesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentAdSourcesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].adSources.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaParentAdUnitsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>,
) {
  return ['v1beta', '/v1beta/:parent/adUnits', toValue(args)] as const
}

export function getV1betaParentAdUnitsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentAdUnitsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].adUnits.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentAdUnits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentAdUnitsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['adUnits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentAdUnitsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentAdUnitsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].adUnits.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1betaParentAppsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['apps']['$get']>>,
) {
  return ['v1beta', '/v1beta/:parent/apps', toValue(args)] as const
}

export function getV1betaParentAppsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['apps']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1betaParentAppsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1beta[':parent'].apps.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1betaParentApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':parent']['apps']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1beta)[':parent']['apps']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['apps']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1beta)[':parent']['apps']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1betaParentAppsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':parent']['apps']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentAppsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1betaParentAppsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1beta[':parent'].apps.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1betaParentMediationReportGenerateMutationKey() {
  return ['v1beta', '/v1beta/:parent/mediationReport:generate', 'POST'] as const
}

export function getPostV1betaParentMediationReportGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1beta)[':parent']['mediationReport:generate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['mediationReport:generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentMediationReportGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1beta)[':parent']['mediationReport:generate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1beta[':parent']['mediationReport:generate'].$post(args, options),
      )
    },
  })
}

export function usePostV1betaParentMediationReportGenerate<
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
                  ReturnType<(typeof client.v1beta)[':parent']['mediationReport:generate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['mediationReport:generate']['$post']>,
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
  const mutationDefaults = getPostV1betaParentMediationReportGenerateMutationOptions<
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

export function getPostV1betaParentNetworkReportGenerateMutationKey() {
  return ['v1beta', '/v1beta/:parent/networkReport:generate', 'POST'] as const
}

export function getPostV1betaParentNetworkReportGenerateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['networkReport:generate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['networkReport:generate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentNetworkReportGenerateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['networkReport:generate']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent']['networkReport:generate'].$post(args, options))
    },
  })
}

export function usePostV1betaParentNetworkReportGenerate<
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
                  ReturnType<(typeof client.v1beta)[':parent']['networkReport:generate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1beta)[':parent']['networkReport:generate']['$post']>,
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
  const mutationDefaults = getPostV1betaParentNetworkReportGenerateMutationOptions<
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
