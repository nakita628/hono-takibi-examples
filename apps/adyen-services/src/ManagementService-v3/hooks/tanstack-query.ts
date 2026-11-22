import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getMeKey() {
  return ['me'] as const
}

export function getMerchantsKey() {
  return ['merchants'] as const
}

export function getStoresKey() {
  return ['stores'] as const
}

export function getTerminalsKey() {
  return ['terminals'] as const
}

export function getCompaniesQueryKey(args: InferRequestType<typeof client.companies.$get>) {
  return ['companies', '/companies', args] as const
}

export function getCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.companies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCompaniesQueryKey>
  >({
    queryKey: getCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCompaniesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.companies.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.companies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCompaniesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCompaniesCompanyIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
) {
  return ['companies', '/companies/:companyId', args] as const
}

export function getCompaniesCompanyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCompaniesCompanyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCompaniesCompanyIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCompaniesCompanyIdAndroidAppsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
) {
  return ['companies', '/companies/:companyId/androidApps', args] as const
}

export function getCompaniesCompanyIdAndroidAppsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdAndroidAppsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdAndroidAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].androidApps.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdAndroidApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdAndroidAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdAndroidAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdAndroidApps<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdAndroidAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdAndroidAppsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdAndroidAppsMutationKey() {
  return ['companies', '/companies/:companyId/androidApps', 'POST'] as const
}

export function getPostCompaniesCompanyIdAndroidAppsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdAndroidAppsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].androidApps.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdAndroidApps<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['androidApps']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdAndroidAppsMutationOptions<
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

export function getCompaniesCompanyIdAndroidAppsIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
) {
  return ['companies', '/companies/:companyId/androidApps/:id', args] as const
}

export function getCompaniesCompanyIdAndroidAppsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdAndroidAppsIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdAndroidAppsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].androidApps[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdAndroidAppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdAndroidAppsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdAndroidAppsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdAndroidAppsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdAndroidAppsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdAndroidAppsIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCompaniesCompanyIdAndroidAppsIdMutationKey() {
  return ['companies', '/companies/:companyId/androidApps/:id', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdAndroidAppsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdAndroidAppsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['androidApps'][':id']['$patch']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].androidApps[':id'].$patch(args, options))
    },
  })
}

export function usePatchCompaniesCompanyIdAndroidAppsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['androidApps'][':id']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdAndroidAppsIdMutationOptions<
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

export function getCompaniesCompanyIdAndroidCertificatesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
) {
  return ['companies', '/companies/:companyId/androidCertificates', args] as const
}

export function getCompaniesCompanyIdAndroidCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdAndroidCertificatesQueryKey>
  >({
    queryKey: getCompaniesCompanyIdAndroidCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].androidCertificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdAndroidCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdAndroidCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdAndroidCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdAndroidCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdAndroidCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdAndroidCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdAndroidCertificatesMutationKey() {
  return ['companies', '/companies/:companyId/androidCertificates', 'POST'] as const
}

export function getPostCompaniesCompanyIdAndroidCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdAndroidCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['androidCertificates']['$post']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].androidCertificates.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdAndroidCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['androidCertificates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdAndroidCertificatesMutationOptions<
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

export function getCompaniesCompanyIdApiCredentialsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
) {
  return ['companies', '/companies/:companyId/apiCredentials', args] as const
}

export function getCompaniesCompanyIdApiCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdApiCredentialsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdApiCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdApiCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdApiCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdApiCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdApiCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdApiCredentialsMutationKey() {
  return ['companies', '/companies/:companyId/apiCredentials', 'POST'] as const
}

export function getPostCompaniesCompanyIdApiCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdApiCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].apiCredentials.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdApiCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['apiCredentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdApiCredentialsMutationOptions<
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

export function getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/apiCredentials/:apiCredentialId', args] as const
}

export function getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdApiCredentialsApiCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdApiCredentialsApiCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsApiCredentialIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCompaniesCompanyIdApiCredentialsApiCredentialIdMutationKey() {
  return ['companies', '/companies/:companyId/apiCredentials/:apiCredentialId', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdApiCredentialsApiCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdApiCredentialsApiCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCompaniesCompanyIdApiCredentialsApiCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdApiCredentialsApiCredentialIdMutationOptions<
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

export function getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins',
    args,
  ] as const
}

export function getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsMutationKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsMutationOptions<
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

export function getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    args,
  ] as const
}

export function getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey
    >
  >({
    queryKey:
      getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
          ':originId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    'DELETE',
  ] as const
}

export function getDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].allowedOrigins[
          ':originId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationOptions<
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

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyMutationKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/generateApiKey',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].generateApiKey.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyMutationOptions<
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

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyMutationKey() {
  return [
    'companies',
    '/companies/:companyId/apiCredentials/:apiCredentialId/generateClientKey',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].apiCredentials[':apiCredentialId'].generateClientKey.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyMutationOptions<
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

export function getCompaniesCompanyIdBillingEntitiesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
) {
  return ['companies', '/companies/:companyId/billingEntities', args] as const
}

export function getCompaniesCompanyIdBillingEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdBillingEntitiesQueryKey>
  >({
    queryKey: getCompaniesCompanyIdBillingEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].billingEntities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdBillingEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdBillingEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdBillingEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdBillingEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['billingEntities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['billingEntities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdBillingEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdBillingEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdMerchantsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
) {
  return ['companies', '/companies/:companyId/merchants', args] as const
}

export function getCompaniesCompanyIdMerchantsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdMerchantsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdMerchantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].merchants.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdMerchants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdMerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdMerchantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdMerchants<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['merchants']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['merchants']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdMerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdMerchantsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdShippingLocationsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
) {
  return ['companies', '/companies/:companyId/shippingLocations', args] as const
}

export function getCompaniesCompanyIdShippingLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdShippingLocationsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdShippingLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].shippingLocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdShippingLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdShippingLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdShippingLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdShippingLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdShippingLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdShippingLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdShippingLocationsMutationKey() {
  return ['companies', '/companies/:companyId/shippingLocations', 'POST'] as const
}

export function getPostCompaniesCompanyIdShippingLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdShippingLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].shippingLocations.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdShippingLocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['shippingLocations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdShippingLocationsMutationOptions<
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

export function getCompaniesCompanyIdTerminalActionsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalActions', args] as const
}

export function getCompaniesCompanyIdTerminalActionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalActionsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalActionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalActions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalActions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalActions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalActions']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalActionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalActionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdTerminalActionsActionIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/terminalActions/:actionId', args] as const
}

export function getCompaniesCompanyIdTerminalActionsActionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalActionsActionIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalActionsActionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalActions[':actionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalActionsActionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalActionsActionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalActionsActionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalActions'][':actionId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalActionsActionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalActionsActionIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdTerminalLogosQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalLogos', args] as const
}

export function getCompaniesCompanyIdTerminalLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalLogosQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalLogos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCompaniesCompanyIdTerminalLogosMutationKey() {
  return ['companies', '/companies/:companyId/terminalLogos', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdTerminalLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdTerminalLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>,
    ) {
      return parseResponse(client.companies[':companyId'].terminalLogos.$patch(args, options))
    },
  })
}

export function usePatchCompaniesCompanyIdTerminalLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['terminalLogos']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdTerminalLogosMutationOptions<
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

export function getCompaniesCompanyIdTerminalModelsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalModels', args] as const
}

export function getCompaniesCompanyIdTerminalModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalModelsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalModels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalModels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalModels']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdTerminalOrdersQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalOrders', args] as const
}

export function getCompaniesCompanyIdTerminalOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalOrdersQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdTerminalOrdersMutationKey() {
  return ['companies', '/companies/:companyId/terminalOrders', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].terminalOrders.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdTerminalOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['terminalOrders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalOrdersMutationOptions<
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

export function getCompaniesCompanyIdTerminalOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
) {
  return ['companies', '/companies/:companyId/terminalOrders/:orderId', args] as const
}

export function getCompaniesCompanyIdTerminalOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalOrdersOrderIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalOrders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalOrdersOrderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCompaniesCompanyIdTerminalOrdersOrderIdMutationKey() {
  return ['companies', '/companies/:companyId/terminalOrders/:orderId', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdTerminalOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdTerminalOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalOrders[':orderId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCompaniesCompanyIdTerminalOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdTerminalOrdersOrderIdMutationOptions<
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

export function getPostCompaniesCompanyIdTerminalOrdersOrderIdCancelMutationKey() {
  return ['companies', '/companies/:companyId/terminalOrders/:orderId/cancel', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalOrders[':orderId'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdTerminalOrdersOrderIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalOrders'][':orderId']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalOrdersOrderIdCancelMutationOptions<
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

export function getCompaniesCompanyIdTerminalProductsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalProducts', args] as const
}

export function getCompaniesCompanyIdTerminalProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalProductsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalProducts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalProducts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCompaniesCompanyIdTerminalSettingsQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalSettings', args] as const
}

export function getCompaniesCompanyIdTerminalSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalSettingsQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCompaniesCompanyIdTerminalSettingsMutationKey() {
  return ['companies', '/companies/:companyId/terminalSettings', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdTerminalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdTerminalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>,
    ) {
      return parseResponse(client.companies[':companyId'].terminalSettings.$patch(args, options))
    },
  })
}

export function usePatchCompaniesCompanyIdTerminalSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['terminalSettings']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdTerminalSettingsMutationOptions<
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

export function getCompaniesCompanyIdUsersQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
) {
  return ['companies', '/companies/:companyId/users', args] as const
}

export function getCompaniesCompanyIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdUsersQueryKey>
  >({
    queryKey: getCompaniesCompanyIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdUsersMutationKey() {
  return ['companies', '/companies/:companyId/users', 'POST'] as const
}

export function getPostCompaniesCompanyIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['users']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].users.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['users']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdUsersMutationOptions<TError, TOnMutateResult>(
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

export function getCompaniesCompanyIdUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
) {
  return ['companies', '/companies/:companyId/users/:userId', args] as const
}

export function getCompaniesCompanyIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdUsersUserIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchCompaniesCompanyIdUsersUserIdMutationKey() {
  return ['companies', '/companies/:companyId/users/:userId', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>,
    ) {
      return parseResponse(client.companies[':companyId'].users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchCompaniesCompanyIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['users'][':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdUsersUserIdMutationOptions<
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

export function getCompaniesCompanyIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
) {
  return ['companies', '/companies/:companyId/webhooks', args] as const
}

export function getCompaniesCompanyIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdWebhooksQueryKey>
  >({
    queryKey: getCompaniesCompanyIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdWebhooksMutationKey() {
  return ['companies', '/companies/:companyId/webhooks', 'POST'] as const
}

export function getPostCompaniesCompanyIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].webhooks.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdWebhooksMutationOptions<
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

export function getCompaniesCompanyIdWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
) {
  return ['companies', '/companies/:companyId/webhooks/:webhookId', args] as const
}

export function getCompaniesCompanyIdWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdWebhooksWebhookIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCompaniesCompanyIdWebhooksWebhookIdMutationKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteCompaniesCompanyIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesCompanyIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].webhooks[':webhookId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompaniesCompanyIdWebhooksWebhookIdMutationOptions<
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

export function getPatchCompaniesCompanyIdWebhooksWebhookIdMutationKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].webhooks[':webhookId'].$patch(args, options),
      )
    },
  })
}

export function usePatchCompaniesCompanyIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['webhooks'][':webhookId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdWebhooksWebhookIdMutationOptions<
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

export function getPostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacMutationKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId/generateHmac', 'POST'] as const
}

export function getPostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].webhooks[':webhookId'].generateHmac.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdWebhooksWebhookIdGenerateHmac<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['webhooks'][':webhookId']['generateHmac']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdWebhooksWebhookIdGenerateHmacMutationOptions<
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

export function getPostCompaniesCompanyIdWebhooksWebhookIdTestMutationKey() {
  return ['companies', '/companies/:companyId/webhooks/:webhookId/test', 'POST'] as const
}

export function getPostCompaniesCompanyIdWebhooksWebhookIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdWebhooksWebhookIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].webhooks[':webhookId'].test.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdWebhooksWebhookIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['webhooks'][':webhookId']['test']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdWebhooksWebhookIdTestMutationOptions<
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

export function getMeQueryKey() {
  return ['me', '/me'] as const
}

export function getMeQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMeQueryKey>
  >({
    queryKey: getMeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMe<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getMeAllowedOriginsQueryKey() {
  return ['me', '/me/allowedOrigins'] as const
}

export function getMeAllowedOriginsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMeAllowedOriginsQueryKey>
  >({
    queryKey: getMeAllowedOriginsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.me.allowedOrigins.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeAllowedOrigins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAllowedOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMeAllowedOriginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMeAllowedOrigins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAllowedOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMeAllowedOriginsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMeAllowedOriginsMutationKey() {
  return ['me', '/me/allowedOrigins', 'POST'] as const
}

export function getPostMeAllowedOriginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.me.allowedOrigins.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMeAllowedOriginsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.me.allowedOrigins.$post>) {
      return parseResponse(client.me.allowedOrigins.$post(args, options))
    },
  })
}

export function usePostMeAllowedOrigins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.allowedOrigins.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.me.allowedOrigins.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeAllowedOriginsMutationOptions<TError, TOnMutateResult>(
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

export function getMeAllowedOriginsOriginIdQueryKey(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
) {
  return ['me', '/me/allowedOrigins/:originId', args] as const
}

export function getMeAllowedOriginsOriginIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMeAllowedOriginsOriginIdQueryKey>
  >({
    queryKey: getMeAllowedOriginsOriginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.me.allowedOrigins[':originId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMeAllowedOriginsOriginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAllowedOriginsOriginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMeAllowedOriginsOriginIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMeAllowedOriginsOriginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMeAllowedOriginsOriginIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMeAllowedOriginsOriginIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMeAllowedOriginsOriginIdMutationKey() {
  return ['me', '/me/allowedOrigins/:originId', 'DELETE'] as const
}

export function getDeleteMeAllowedOriginsOriginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMeAllowedOriginsOriginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$delete']>,
    ) {
      return parseResponse(client.me.allowedOrigins[':originId'].$delete(args, options))
    },
  })
}

export function useDeleteMeAllowedOriginsOriginId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.me.allowedOrigins)[':originId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.me.allowedOrigins)[':originId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMeAllowedOriginsOriginIdMutationOptions<
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

export function getPostMeGenerateClientKeyMutationKey() {
  return ['me', '/me/generateClientKey', 'POST'] as const
}

export function getPostMeGenerateClientKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.me.generateClientKey.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostMeGenerateClientKeyMutationKey(),
    async mutationFn() {
      return parseResponse(client.me.generateClientKey.$post(undefined, options))
    },
  })
}

export function usePostMeGenerateClientKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.me.generateClientKey.$post>>>
          >
        >,
        TError,
        void,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMeGenerateClientKeyMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantsQueryKey(args: InferRequestType<typeof client.merchants.$get>) {
  return ['merchants', '/merchants', args] as const
}

export function getMerchantsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.merchants.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMerchantsQueryKey>
  >({
    queryKey: getMerchantsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMerchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.merchants.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchants<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.merchants.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMerchantsMutationKey() {
  return ['merchants', '/merchants', 'POST'] as const
}

export function getPostMerchantsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.merchants.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.merchants.$post>) {
      return parseResponse(client.merchants.$post(args, options))
    },
  })
}

export function usePostMerchants<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.merchants.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.merchants.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMerchantsMerchantIdQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId', args] as const
}

export function getMerchantsMerchantIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMerchantsMerchantIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMerchantsMerchantIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdActivateMutationKey() {
  return ['merchants', '/merchants/:merchantId/activate', 'POST'] as const
}

export function getPostMerchantsMerchantIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['activate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['activate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['activate']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].activate.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdActivate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.merchants)[':merchantId']['activate']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['activate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdActivateMutationOptions<
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

export function getMerchantsMerchantIdApiCredentialsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/apiCredentials', args] as const
}

export function getMerchantsMerchantIdApiCredentialsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdApiCredentialsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdApiCredentialsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdApiCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdApiCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdApiCredentials<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdApiCredentialsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdApiCredentialsMutationKey() {
  return ['merchants', '/merchants/:merchantId/apiCredentials', 'POST'] as const
}

export function getPostMerchantsMerchantIdApiCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdApiCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].apiCredentials.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdApiCredentials<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['apiCredentials']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdApiCredentialsMutationOptions<
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

export function getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/apiCredentials/:apiCredentialId', args] as const
}

export function getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdApiCredentialsApiCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdApiCredentialsApiCredentialId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsApiCredentialIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdApiCredentialsApiCredentialIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/apiCredentials/:apiCredentialId', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdApiCredentialsApiCredentialIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdApiCredentialsApiCredentialIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdApiCredentialsApiCredentialId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdApiCredentialsApiCredentialIdMutationOptions<
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

export function getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins',
    args,
  ] as const
}

export function getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOrigins<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsMutationOptions<
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

export function getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    args,
  ] as const
}

export function getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey
    >
  >({
    queryKey:
      getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
          ':originId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/allowedOrigins/:originId',
    'DELETE',
  ] as const
}

export function getDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].allowedOrigins[
          ':originId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['allowedOrigins'][':originId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdMutationOptions<
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

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/generateApiKey',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].generateApiKey.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateApiKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyMutationOptions<
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

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/apiCredentials/:apiCredentialId/generateClientKey',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].apiCredentials[':apiCredentialId'].generateClientKey.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKey<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['apiCredentials'][':apiCredentialId']['generateClientKey']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyMutationOptions<
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

export function getMerchantsMerchantIdBillingEntitiesQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/billingEntities', args] as const
}

export function getMerchantsMerchantIdBillingEntitiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdBillingEntitiesQueryKey>
  >({
    queryKey: getMerchantsMerchantIdBillingEntitiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].billingEntities.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdBillingEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdBillingEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdBillingEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdBillingEntities<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['billingEntities']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdBillingEntitiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdBillingEntitiesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantsMerchantIdPaymentMethodSettingsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/paymentMethodSettings', args] as const
}

export function getMerchantsMerchantIdPaymentMethodSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdPaymentMethodSettingsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdPaymentMethodSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].paymentMethodSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdPaymentMethodSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPaymentMethodSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdPaymentMethodSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdPaymentMethodSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPaymentMethodSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdPaymentMethodSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdPaymentMethodSettingsMutationKey() {
  return ['merchants', '/merchants/:merchantId/paymentMethodSettings', 'POST'] as const
}

export function getPostMerchantsMerchantIdPaymentMethodSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdPaymentMethodSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].paymentMethodSettings.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdPaymentMethodSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['paymentMethodSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdPaymentMethodSettingsMutationOptions<
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

export function getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId',
    args,
  ] as const
}

export function getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId',
    'PATCH',
  ] as const
}

export function getPatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].paymentMethodSettings[':paymentMethodId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdMutationOptions<
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

export function getPostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId/addApplePayDomains',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].paymentMethodSettings[
          ':paymentMethodId'
        ].addApplePayDomains.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomains<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['addApplePayDomains']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsMutationOptions<
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

export function getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/paymentMethodSettings/:paymentMethodId/getApplePayDomains',
    args,
  ] as const
}

export function getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryKey
    >
  >({
    queryKey:
      getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].paymentMethodSettings[
          ':paymentMethodId'
        ].getApplePayDomains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['paymentMethodSettings'][':paymentMethodId']['getApplePayDomains']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantsMerchantIdPayoutSettingsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/payoutSettings', args] as const
}

export function getMerchantsMerchantIdPayoutSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdPayoutSettingsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdPayoutSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].payoutSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdPayoutSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPayoutSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdPayoutSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdPayoutSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPayoutSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdPayoutSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdPayoutSettingsMutationKey() {
  return ['merchants', '/merchants/:merchantId/payoutSettings', 'POST'] as const
}

export function getPostMerchantsMerchantIdPayoutSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdPayoutSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].payoutSettings.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdPayoutSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['payoutSettings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdPayoutSettingsMutationOptions<
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

export function getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/payoutSettings/:payoutSettingsId', args] as const
}

export function getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdPayoutSettingsPayoutSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdPayoutSettingsPayoutSettingsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/payoutSettings/:payoutSettingsId', 'DELETE'] as const
}

export function getDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationOptions<
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

export function getPatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/payoutSettings/:payoutSettingsId', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].payoutSettings[':payoutSettingsId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdPayoutSettingsPayoutSettingsId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['payoutSettings'][':payoutSettingsId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdMutationOptions<
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

export function getMerchantsMerchantIdShippingLocationsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/shippingLocations', args] as const
}

export function getMerchantsMerchantIdShippingLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdShippingLocationsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdShippingLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].shippingLocations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdShippingLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdShippingLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdShippingLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdShippingLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdShippingLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdShippingLocationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdShippingLocationsMutationKey() {
  return ['merchants', '/merchants/:merchantId/shippingLocations', 'POST'] as const
}

export function getPostMerchantsMerchantIdShippingLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdShippingLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['shippingLocations']['$post']
      >,
    ) {
      return parseResponse(client.merchants[':merchantId'].shippingLocations.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdShippingLocations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['shippingLocations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdShippingLocationsMutationOptions<
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

export function getMerchantsMerchantIdSplitConfigurationsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/splitConfigurations', args] as const
}

export function getMerchantsMerchantIdSplitConfigurationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdSplitConfigurationsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdSplitConfigurationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdSplitConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdSplitConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdSplitConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdSplitConfigurations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdSplitConfigurationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdSplitConfigurationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdSplitConfigurationsMutationKey() {
  return ['merchants', '/merchants/:merchantId/splitConfigurations', 'POST'] as const
}

export function getPostMerchantsMerchantIdSplitConfigurationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdSplitConfigurationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations']['$post']
      >,
    ) {
      return parseResponse(client.merchants[':merchantId'].splitConfigurations.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdSplitConfigurations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['splitConfigurations']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdSplitConfigurationsMutationOptions<
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

export function getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
) {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    args,
  ] as const
}

export function getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    'POST',
  ] as const
}

export function getPostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationOptions<
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

export function getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    'DELETE',
  ] as const
}

export function getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationOptions<
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

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId',
    'PATCH',
  ] as const
}

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdMutationOptions<
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

export function getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId',
    'DELETE',
  ] as const
}

export function getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
          ':ruleId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationOptions<
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

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId',
    'PATCH',
  ] as const
}

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
          ':ruleId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdMutationOptions<
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

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/splitConfigurations/:splitConfigurationId/rules/:ruleId/splitLogic/:splitLogicId',
    'PATCH',
  ] as const
}

export function getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].splitConfigurations[':splitConfigurationId'].rules[
          ':ruleId'
        ].splitLogic[':splitLogicId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['splitConfigurations'][':splitConfigurationId']['rules'][':ruleId']['splitLogic'][':splitLogicId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdMutationOptions<
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

export function getMerchantsMerchantIdStoresQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/stores', args] as const
}

export function getMerchantsMerchantIdStoresQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdStoresQueryKey>
  >({
    queryKey: getMerchantsMerchantIdStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].stores.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdStoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdStoresQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdStoresMutationKey() {
  return ['merchants', '/merchants/:merchantId/stores', 'POST'] as const
}

export function getPostMerchantsMerchantIdStoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdStoresMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].stores.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['stores']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdStoresMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantsMerchantIdStoresReferenceTerminalLogosQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/stores/:reference/terminalLogos', args] as const
}

export function getMerchantsMerchantIdStoresReferenceTerminalLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdStoresReferenceTerminalLogosQueryKey>
  >({
    queryKey: getMerchantsMerchantIdStoresReferenceTerminalLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':reference'].terminalLogos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdStoresReferenceTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresReferenceTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdStoresReferenceTerminalLogosQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdStoresReferenceTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresReferenceTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdStoresReferenceTerminalLogosQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdStoresReferenceTerminalLogosMutationKey() {
  return ['merchants', '/merchants/:merchantId/stores/:reference/terminalLogos', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdStoresReferenceTerminalLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdStoresReferenceTerminalLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':reference'].terminalLogos.$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdStoresReferenceTerminalLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalLogos']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdStoresReferenceTerminalLogosMutationOptions<
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

export function getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/stores/:reference/terminalSettings', args] as const
}

export function getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':reference'].terminalSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdStoresReferenceTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdStoresReferenceTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdStoresReferenceTerminalSettingsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdStoresReferenceTerminalSettingsMutationKey() {
  return [
    'merchants',
    '/merchants/:merchantId/stores/:reference/terminalSettings',
    'PATCH',
  ] as const
}

export function getPatchMerchantsMerchantIdStoresReferenceTerminalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdStoresReferenceTerminalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':reference'].terminalSettings.$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdStoresReferenceTerminalSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['stores'][':reference']['terminalSettings']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchMerchantsMerchantIdStoresReferenceTerminalSettingsMutationOptions<
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

export function getMerchantsMerchantIdStoresStoreIdQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/stores/:storeId', args] as const
}

export function getMerchantsMerchantIdStoresStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdStoresStoreIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdStoresStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].stores[':storeId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdStoresStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresStoreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdStoresStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdStoresStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdStoresStoreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdStoresStoreIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdStoresStoreIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/stores/:storeId', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdStoresStoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdStoresStoreIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']
      >,
    ) {
      return parseResponse(client.merchants[':merchantId'].stores[':storeId'].$patch(args, options))
    },
  })
}

export function usePatchMerchantsMerchantIdStoresStoreId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['stores'][':storeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdStoresStoreIdMutationOptions<
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

export function getMerchantsMerchantIdTerminalLogosQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalLogos', args] as const
}

export function getMerchantsMerchantIdTerminalLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalLogosQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalLogos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdTerminalLogosMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalLogos', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdTerminalLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdTerminalLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].terminalLogos.$patch(args, options))
    },
  })
}

export function usePatchMerchantsMerchantIdTerminalLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['terminalLogos']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdTerminalLogosMutationOptions<
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

export function getMerchantsMerchantIdTerminalModelsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalModels', args] as const
}

export function getMerchantsMerchantIdTerminalModelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalModelsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalModels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalModels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalModels']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalModelsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantsMerchantIdTerminalOrdersQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalOrders', args] as const
}

export function getMerchantsMerchantIdTerminalOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalOrdersQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalOrders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalOrdersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdTerminalOrdersMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalOrders', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalOrdersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].terminalOrders.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdTerminalOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['terminalOrders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalOrdersMutationOptions<
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

export function getMerchantsMerchantIdTerminalOrdersOrderIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/terminalOrders/:orderId', args] as const
}

export function getMerchantsMerchantIdTerminalOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalOrdersOrderIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalOrders[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalOrdersOrderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalOrdersOrderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdTerminalOrdersOrderIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalOrders/:orderId', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdTerminalOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdTerminalOrdersOrderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalOrders[':orderId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdTerminalOrdersOrderId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdTerminalOrdersOrderIdMutationOptions<
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

export function getPostMerchantsMerchantIdTerminalOrdersOrderIdCancelMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalOrders/:orderId/cancel', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalOrders[':orderId'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdTerminalOrdersOrderIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalOrders'][':orderId']['cancel']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalOrdersOrderIdCancelMutationOptions<
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

export function getMerchantsMerchantIdTerminalProductsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalProducts', args] as const
}

export function getMerchantsMerchantIdTerminalProductsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalProductsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalProducts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalProducts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalProducts']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalProductsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getMerchantsMerchantIdTerminalSettingsQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalSettings', args] as const
}

export function getMerchantsMerchantIdTerminalSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalSettingsQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdTerminalSettingsMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalSettings', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdTerminalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdTerminalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalSettings']['$patch']
      >,
    ) {
      return parseResponse(client.merchants[':merchantId'].terminalSettings.$patch(args, options))
    },
  })
}

export function usePatchMerchantsMerchantIdTerminalSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['terminalSettings']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdTerminalSettingsMutationOptions<
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

export function getMerchantsMerchantIdUsersQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/users', args] as const
}

export function getMerchantsMerchantIdUsersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdUsersQueryKey>
  >({
    queryKey: getMerchantsMerchantIdUsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].users.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdUsers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdUsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdUsersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdUsersMutationKey() {
  return ['merchants', '/merchants/:merchantId/users', 'POST'] as const
}

export function getPostMerchantsMerchantIdUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['users']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['users']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].users.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['users']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdUsersMutationOptions<TError, TOnMutateResult>(
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

export function getMerchantsMerchantIdUsersUserIdQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/users/:userId', args] as const
}

export function getMerchantsMerchantIdUsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdUsersUserIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdUsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].users[':userId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdUsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdUsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdUsersUserIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchMerchantsMerchantIdUsersUserIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/users/:userId', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdUsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdUsersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['users'][':userId']['$patch']
      >,
    ) {
      return parseResponse(client.merchants[':merchantId'].users[':userId'].$patch(args, options))
    },
  })
}

export function usePatchMerchantsMerchantIdUsersUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['users'][':userId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdUsersUserIdMutationOptions<
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

export function getMerchantsMerchantIdWebhooksQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/webhooks', args] as const
}

export function getMerchantsMerchantIdWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdWebhooksQueryKey>
  >({
    queryKey: getMerchantsMerchantIdWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].webhooks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdWebhooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdWebhooksMutationKey() {
  return ['merchants', '/merchants/:merchantId/webhooks', 'POST'] as const
}

export function getPostMerchantsMerchantIdWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdWebhooksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].webhooks.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdWebhooks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['webhooks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdWebhooksMutationOptions<
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

export function getMerchantsMerchantIdWebhooksWebhookIdQueryKey(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
) {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId', args] as const
}

export function getMerchantsMerchantIdWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdWebhooksWebhookIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdWebhooksWebhookIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantsMerchantIdWebhooksWebhookIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId', 'DELETE'] as const
}

export function getDeleteMerchantsMerchantIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantsMerchantIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].webhooks[':webhookId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantsMerchantIdWebhooksWebhookIdMutationOptions<
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

export function getPatchMerchantsMerchantIdWebhooksWebhookIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].webhooks[':webhookId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdWebhooksWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdWebhooksWebhookIdMutationOptions<
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

export function getPostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacMutationKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId/generateHmac', 'POST'] as const
}

export function getPostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].webhooks[':webhookId'].generateHmac.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdWebhooksWebhookIdGenerateHmac<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['generateHmac']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdWebhooksWebhookIdGenerateHmacMutationOptions<
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

export function getPostMerchantsMerchantIdWebhooksWebhookIdTestMutationKey() {
  return ['merchants', '/merchants/:merchantId/webhooks/:webhookId/test', 'POST'] as const
}

export function getPostMerchantsMerchantIdWebhooksWebhookIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdWebhooksWebhookIdTestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].webhooks[':webhookId'].test.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdWebhooksWebhookIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['webhooks'][':webhookId']['test']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdWebhooksWebhookIdTestMutationOptions<
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

export function getStoresQueryKey(args: InferRequestType<typeof client.stores.$get>) {
  return ['stores', '/stores', args] as const
}

export function getStoresQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.stores.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStoresQueryKey>
  >({
    queryKey: getStoresQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stores.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStores<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stores.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStores<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.stores.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getStoresQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoresQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostStoresMutationKey() {
  return ['stores', '/stores', 'POST'] as const
}

export function getPostStoresMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$post>>>>>,
    TError,
    InferRequestType<typeof client.stores.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostStoresMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.stores.$post>) {
      return parseResponse(client.stores.$post(args, options))
    },
  })
}

export function usePostStores<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.stores.$post>>>>>,
        TError,
        InferRequestType<typeof client.stores.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoresMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getStoresStoreIdQueryKey(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
) {
  return ['stores', '/stores/:storeId', args] as const
}

export function getStoresStoreIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoresStoreIdQueryKey>
  >({
    queryKey: getStoresStoreIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stores[':storeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useStoresStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresStoreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getStoresStoreIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseStoresStoreId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresStoreIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getStoresStoreIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPatchStoresStoreIdMutationKey() {
  return ['stores', '/stores/:storeId', 'PATCH'] as const
}

export function getPatchStoresStoreIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.stores)[':storeId']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStoresStoreIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.stores)[':storeId']['$patch']>) {
      return parseResponse(client.stores[':storeId'].$patch(args, options))
    },
  })
}

export function usePatchStoresStoreId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.stores)[':storeId']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.stores)[':storeId']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchStoresStoreIdMutationOptions<TError, TOnMutateResult>(
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

export function getStoresStoreIdTerminalLogosQueryKey(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
) {
  return ['stores', '/stores/:storeId/terminalLogos', args] as const
}

export function getStoresStoreIdTerminalLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoresStoreIdTerminalLogosQueryKey>
  >({
    queryKey: getStoresStoreIdTerminalLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stores[':storeId'].terminalLogos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoresStoreIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresStoreIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStoresStoreIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoresStoreIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresStoreIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStoresStoreIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchStoresStoreIdTerminalLogosMutationKey() {
  return ['stores', '/stores/:storeId/terminalLogos', 'PATCH'] as const
}

export function getPatchStoresStoreIdTerminalLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStoresStoreIdTerminalLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>,
    ) {
      return parseResponse(client.stores[':storeId'].terminalLogos.$patch(args, options))
    },
  })
}

export function usePatchStoresStoreIdTerminalLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.stores)[':storeId']['terminalLogos']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchStoresStoreIdTerminalLogosMutationOptions<
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

export function getStoresStoreIdTerminalSettingsQueryKey(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
) {
  return ['stores', '/stores/:storeId/terminalSettings', args] as const
}

export function getStoresStoreIdTerminalSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStoresStoreIdTerminalSettingsQueryKey>
  >({
    queryKey: getStoresStoreIdTerminalSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.stores[':storeId'].terminalSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useStoresStoreIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresStoreIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getStoresStoreIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseStoresStoreIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStoresStoreIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getStoresStoreIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchStoresStoreIdTerminalSettingsMutationKey() {
  return ['stores', '/stores/:storeId/terminalSettings', 'PATCH'] as const
}

export function getPatchStoresStoreIdTerminalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchStoresStoreIdTerminalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>,
    ) {
      return parseResponse(client.stores[':storeId'].terminalSettings.$patch(args, options))
    },
  })
}

export function usePatchStoresStoreIdTerminalSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.stores)[':storeId']['terminalSettings']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchStoresStoreIdTerminalSettingsMutationOptions<
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

export function getTerminalsQueryKey(args: InferRequestType<typeof client.terminals.$get>) {
  return ['terminals', '/terminals', args] as const
}

export function getTerminalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.terminals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTerminalsQueryKey>
  >({
    queryKey: getTerminalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terminals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTerminals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terminals.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTerminalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTerminalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTerminals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.terminals.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terminals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTerminalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTerminalsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTerminalsScheduleActionsMutationKey() {
  return ['terminals', '/terminals/scheduleActions', 'POST'] as const
}

export function getPostTerminalsScheduleActionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.terminals.scheduleActions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.terminals.scheduleActions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTerminalsScheduleActionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.terminals.scheduleActions.$post>) {
      return parseResponse(client.terminals.scheduleActions.$post(args, options))
    },
  })
}

export function usePostTerminalsScheduleActions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.terminals.scheduleActions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.terminals.scheduleActions.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTerminalsScheduleActionsMutationOptions<TError, TOnMutateResult>(
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

export function getPostTerminalsTerminalIdReassignMutationKey() {
  return ['terminals', '/terminals/:terminalId/reassign', 'POST'] as const
}

export function getPostTerminalsTerminalIdReassignMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terminals)[':terminalId']['reassign']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.terminals)[':terminalId']['reassign']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTerminalsTerminalIdReassignMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.terminals)[':terminalId']['reassign']['$post']>,
    ) {
      return parseResponse(client.terminals[':terminalId'].reassign.$post(args, options))
    },
  })
}

export function usePostTerminalsTerminalIdReassign<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.terminals)[':terminalId']['reassign']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.terminals)[':terminalId']['reassign']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTerminalsTerminalIdReassignMutationOptions<
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

export function getTerminalsTerminalIdTerminalLogosQueryKey(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
) {
  return ['terminals', '/terminals/:terminalId/terminalLogos', args] as const
}

export function getTerminalsTerminalIdTerminalLogosQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTerminalsTerminalIdTerminalLogosQueryKey>
  >({
    queryKey: getTerminalsTerminalIdTerminalLogosQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terminals[':terminalId'].terminalLogos.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTerminalsTerminalIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTerminalsTerminalIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTerminalsTerminalIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTerminalsTerminalIdTerminalLogos<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTerminalsTerminalIdTerminalLogosQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTerminalsTerminalIdTerminalLogosQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTerminalsTerminalIdTerminalLogosMutationKey() {
  return ['terminals', '/terminals/:terminalId/terminalLogos', 'PATCH'] as const
}

export function getPatchTerminalsTerminalIdTerminalLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTerminalsTerminalIdTerminalLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>,
    ) {
      return parseResponse(client.terminals[':terminalId'].terminalLogos.$patch(args, options))
    },
  })
}

export function usePatchTerminalsTerminalIdTerminalLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.terminals)[':terminalId']['terminalLogos']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTerminalsTerminalIdTerminalLogosMutationOptions<
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

export function getTerminalsTerminalIdTerminalSettingsQueryKey(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
) {
  return ['terminals', '/terminals/:terminalId/terminalSettings', args] as const
}

export function getTerminalsTerminalIdTerminalSettingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTerminalsTerminalIdTerminalSettingsQueryKey>
  >({
    queryKey: getTerminalsTerminalIdTerminalSettingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.terminals[':terminalId'].terminalSettings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTerminalsTerminalIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTerminalsTerminalIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getTerminalsTerminalIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseTerminalsTerminalIdTerminalSettings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTerminalsTerminalIdTerminalSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getTerminalsTerminalIdTerminalSettingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPatchTerminalsTerminalIdTerminalSettingsMutationKey() {
  return ['terminals', '/terminals/:terminalId/terminalSettings', 'PATCH'] as const
}

export function getPatchTerminalsTerminalIdTerminalSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTerminalsTerminalIdTerminalSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.terminals)[':terminalId']['terminalSettings']['$patch']
      >,
    ) {
      return parseResponse(client.terminals[':terminalId'].terminalSettings.$patch(args, options))
    },
  })
}

export function usePatchTerminalsTerminalIdTerminalSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.terminals)[':terminalId']['terminalSettings']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchTerminalsTerminalIdTerminalSettingsMutationOptions<
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

export function getPostCompaniesCompanyIdCampaignManagementMutationKey() {
  return ['companies', '/companies/:companyId/campaignManagement', 'POST'] as const
}

export function getPostCompaniesCompanyIdCampaignManagementMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdCampaignManagementMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['campaignManagement']['$post']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].campaignManagement.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdCampaignManagement<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['campaignManagement']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdCampaignManagementMutationOptions<
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

export function getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryKey(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
) {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/accountHolders/:accountHolderId',
    args,
  ] as const
}

export function getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].campaignManagement.accountHolders[':accountHolderId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['campaignManagement']['accountHolders'][':accountHolderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryKey
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/:donationCampaignId',
    'DELETE',
  ] as const
}

export function getDeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].campaignManagement[':donationCampaignId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdCampaignManagementDonationCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationOptions<
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

export function getPatchCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationKey() {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/:donationCampaignId',
    'PATCH',
  ] as const
}

export function getPatchCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].campaignManagement[':donationCampaignId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCompaniesCompanyIdCampaignManagementDonationCampaignId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchCompaniesCompanyIdCampaignManagementDonationCampaignIdMutationOptions<
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

export function getPostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusMutationKey() {
  return [
    'companies',
    '/companies/:companyId/campaignManagement/:donationCampaignId/status/:status',
    'POST',
  ] as const
}

export function getPostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].campaignManagement[':donationCampaignId'].status[
          ':status'
        ].$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['campaignManagement'][':donationCampaignId']['status'][':status']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusMutationOptions<
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

export function getCompaniesCompanyIdClientCertificatesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
) {
  return ['companies', '/companies/:companyId/clientCertificates', args] as const
}

export function getCompaniesCompanyIdClientCertificatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdClientCertificatesQueryKey>
  >({
    queryKey: getCompaniesCompanyIdClientCertificatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].clientCertificates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdClientCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdClientCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdClientCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdClientCertificates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdClientCertificatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdClientCertificatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdClientCertificatesMutationKey() {
  return ['companies', '/companies/:companyId/clientCertificates', 'POST'] as const
}

export function getPostCompaniesCompanyIdClientCertificatesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdClientCertificatesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['clientCertificates']['$post']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].clientCertificates.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdClientCertificates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['clientCertificates']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdClientCertificatesMutationOptions<
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

export function getPostCompaniesCompanyIdNonprofitsMutationKey() {
  return ['companies', '/companies/:companyId/nonprofits', 'POST'] as const
}

export function getPostCompaniesCompanyIdNonprofitsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['nonprofits']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['nonprofits']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdNonprofitsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['nonprofits']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].nonprofits.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdNonprofits<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['nonprofits']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['nonprofits']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdNonprofitsMutationOptions<
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

export function getCompaniesCompanyIdTerminalThemesQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalThemes', args] as const
}

export function getCompaniesCompanyIdTerminalThemesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalThemesQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalThemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalThemesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalThemesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdTerminalThemesMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalThemesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalThemesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>,
    ) {
      return parseResponse(client.companies[':companyId'].terminalThemes.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdTerminalThemes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalThemesMutationOptions<
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

export function getPostCompaniesCompanyIdTerminalThemesUnapplyMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/unapply', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalThemesUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalThemesUnapplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes.unapply.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdTerminalThemesUnapply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes']['unapply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalThemesUnapplyMutationOptions<
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

export function getCompaniesCompanyIdTerminalThemesIdQueryKey(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
) {
  return ['companies', '/companies/:companyId/terminalThemes/:id', args] as const
}

export function getCompaniesCompanyIdTerminalThemesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCompaniesCompanyIdTerminalThemesIdQueryKey>
  >({
    queryKey: getCompaniesCompanyIdTerminalThemesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCompaniesCompanyIdTerminalThemesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getCompaniesCompanyIdTerminalThemesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCompaniesCompanyIdTerminalThemesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCompaniesCompanyIdTerminalThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getCompaniesCompanyIdTerminalThemesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCompaniesCompanyIdTerminalThemesIdMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id', 'DELETE'] as const
}

export function getDeleteCompaniesCompanyIdTerminalThemesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesCompanyIdTerminalThemesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdTerminalThemesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompaniesCompanyIdTerminalThemesIdMutationOptions<
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

export function getPatchCompaniesCompanyIdTerminalThemesIdMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id', 'PATCH'] as const
}

export function getPatchCompaniesCompanyIdTerminalThemesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCompaniesCompanyIdTerminalThemesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchCompaniesCompanyIdTerminalThemesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCompaniesCompanyIdTerminalThemesIdMutationOptions<
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

export function getPostCompaniesCompanyIdTerminalThemesIdApplyMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/apply', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalThemesIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalThemesIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].apply.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdTerminalThemesIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes'][':id']['apply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalThemesIdApplyMutationOptions<
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

export function getPostCompaniesCompanyIdTerminalThemesIdAssetsMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/assets', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalThemesIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalThemesIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].assets.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdTerminalThemesIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalThemesIdAssetsMutationOptions<
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

export function getDeleteCompaniesCompanyIdTerminalThemesIdAssetsMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/assets', 'DELETE'] as const
}

export function getDeleteCompaniesCompanyIdTerminalThemesIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCompaniesCompanyIdTerminalThemesIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].assets.$delete(args, options),
      )
    },
  })
}

export function useDeleteCompaniesCompanyIdTerminalThemesIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCompaniesCompanyIdTerminalThemesIdAssetsMutationOptions<
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

export function getPostCompaniesCompanyIdTerminalThemesIdAssetsReplaceMutationKey() {
  return ['companies', '/companies/:companyId/terminalThemes/:id/assets/replace', 'POST'] as const
}

export function getPostCompaniesCompanyIdTerminalThemesIdAssetsReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdTerminalThemesIdAssetsReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
      >,
    ) {
      return parseResponse(
        client.companies[':companyId'].terminalThemes[':id'].assets.replace.$post(args, options),
      )
    },
  })
}

export function usePostCompaniesCompanyIdTerminalThemesIdAssetsReplace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.companies)[':companyId']['terminalThemes'][':id']['assets']['replace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCompaniesCompanyIdTerminalThemesIdAssetsReplaceMutationOptions<
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

export function getMerchantsMerchantIdTerminalThemesQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalThemes', args] as const
}

export function getMerchantsMerchantIdTerminalThemesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalThemesQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalThemesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalThemesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalThemes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalThemesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalThemesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostMerchantsMerchantIdTerminalThemesMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalThemesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalThemesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>,
    ) {
      return parseResponse(client.merchants[':merchantId'].terminalThemes.$post(args, options))
    },
  })
}

export function usePostMerchantsMerchantIdTerminalThemes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalThemesMutationOptions<
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

export function getPostMerchantsMerchantIdTerminalThemesUnapplyMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/unapply', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalThemesUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalThemesUnapplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes.unapply.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdTerminalThemesUnapply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes']['unapply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalThemesUnapplyMutationOptions<
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

export function getMerchantsMerchantIdTerminalThemesIdQueryKey(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
) {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id', args] as const
}

export function getMerchantsMerchantIdTerminalThemesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantsMerchantIdTerminalThemesIdQueryKey>
  >({
    queryKey: getMerchantsMerchantIdTerminalThemesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useMerchantsMerchantIdTerminalThemesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getMerchantsMerchantIdTerminalThemesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseMerchantsMerchantIdTerminalThemesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMerchantsMerchantIdTerminalThemesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getMerchantsMerchantIdTerminalThemesIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteMerchantsMerchantIdTerminalThemesIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id', 'DELETE'] as const
}

export function getDeleteMerchantsMerchantIdTerminalThemesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantsMerchantIdTerminalThemesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdTerminalThemesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantsMerchantIdTerminalThemesIdMutationOptions<
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

export function getPatchMerchantsMerchantIdTerminalThemesIdMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id', 'PATCH'] as const
}

export function getPatchMerchantsMerchantIdTerminalThemesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchMerchantsMerchantIdTerminalThemesIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].$patch(args, options),
      )
    },
  })
}

export function usePatchMerchantsMerchantIdTerminalThemesId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['$patch']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMerchantsMerchantIdTerminalThemesIdMutationOptions<
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

export function getPostMerchantsMerchantIdTerminalThemesIdApplyMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/apply', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalThemesIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalThemesIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].apply.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdTerminalThemesIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['apply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalThemesIdApplyMutationOptions<
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

export function getPostMerchantsMerchantIdTerminalThemesIdAssetsMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/assets', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalThemesIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalThemesIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].assets.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdTerminalThemesIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalThemesIdAssetsMutationOptions<
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

export function getDeleteMerchantsMerchantIdTerminalThemesIdAssetsMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/assets', 'DELETE'] as const
}

export function getDeleteMerchantsMerchantIdTerminalThemesIdAssetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteMerchantsMerchantIdTerminalThemesIdAssetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].assets.$delete(args, options),
      )
    },
  })
}

export function useDeleteMerchantsMerchantIdTerminalThemesIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMerchantsMerchantIdTerminalThemesIdAssetsMutationOptions<
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

export function getPostMerchantsMerchantIdTerminalThemesIdAssetsReplaceMutationKey() {
  return ['merchants', '/merchants/:merchantId/terminalThemes/:id/assets/replace', 'POST'] as const
}

export function getPostMerchantsMerchantIdTerminalThemesIdAssetsReplaceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMerchantsMerchantIdTerminalThemesIdAssetsReplaceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
      >,
    ) {
      return parseResponse(
        client.merchants[':merchantId'].terminalThemes[':id'].assets.replace.$post(args, options),
      )
    },
  })
}

export function usePostMerchantsMerchantIdTerminalThemesIdAssetsReplace<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.merchants)[':merchantId']['terminalThemes'][':id']['assets']['replace']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMerchantsMerchantIdTerminalThemesIdAssetsReplaceMutationOptions<
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

export function getPostStoresStoreIdTerminalThemesUnapplyMutationKey() {
  return ['stores', '/stores/:storeId/terminalThemes/unapply', 'POST'] as const
}

export function getPostStoresStoreIdTerminalThemesUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoresStoreIdTerminalThemesUnapplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']
      >,
    ) {
      return parseResponse(client.stores[':storeId'].terminalThemes.unapply.$post(args, options))
    },
  })
}

export function usePostStoresStoreIdTerminalThemesUnapply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.stores)[':storeId']['terminalThemes']['unapply']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoresStoreIdTerminalThemesUnapplyMutationOptions<
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

export function getPostStoresStoreIdTerminalThemesIdApplyMutationKey() {
  return ['stores', '/stores/:storeId/terminalThemes/:id/apply', 'POST'] as const
}

export function getPostStoresStoreIdTerminalThemesIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostStoresStoreIdTerminalThemesIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.stores[':storeId'].terminalThemes[':id'].apply.$post(args, options),
      )
    },
  })
}

export function usePostStoresStoreIdTerminalThemesIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.stores)[':storeId']['terminalThemes'][':id']['apply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostStoresStoreIdTerminalThemesIdApplyMutationOptions<
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

export function getPostTerminalsTerminalIdTerminalThemesUnapplyMutationKey() {
  return ['terminals', '/terminals/:terminalId/terminalThemes/unapply', 'POST'] as const
}

export function getPostTerminalsTerminalIdTerminalThemesUnapplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTerminalsTerminalIdTerminalThemesUnapplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
      >,
    ) {
      return parseResponse(
        client.terminals[':terminalId'].terminalThemes.unapply.$post(args, options),
      )
    },
  })
}

export function usePostTerminalsTerminalIdTerminalThemesUnapply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.terminals)[':terminalId']['terminalThemes']['unapply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTerminalsTerminalIdTerminalThemesUnapplyMutationOptions<
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

export function getPostTerminalsTerminalIdTerminalThemesIdApplyMutationKey() {
  return ['terminals', '/terminals/:terminalId/terminalThemes/:id/apply', 'POST'] as const
}

export function getPostTerminalsTerminalIdTerminalThemesIdApplyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostTerminalsTerminalIdTerminalThemesIdApplyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
      >,
    ) {
      return parseResponse(
        client.terminals[':terminalId'].terminalThemes[':id'].apply.$post(args, options),
      )
    },
  })
}

export function usePostTerminalsTerminalIdTerminalThemesIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.terminals)[':terminalId']['terminalThemes'][':id']['apply']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTerminalsTerminalIdTerminalThemesIdApplyMutationOptions<
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
