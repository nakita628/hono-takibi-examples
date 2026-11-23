import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApplicationKey() {
  return ['application'] as const
}

export function getAuthorizeKey() {
  return ['authorize'] as const
}

export function getEventsKey() {
  return ['events'] as const
}

export function getGithubKey() {
  return ['github'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getLogsSocketKey() {
  return ['logs-socket'] as const
}

export function getNewsfeedsKey() {
  return ['newsfeeds'] as const
}

export function getNotificationsKey() {
  return ['notifications'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getOpenapiTypeKey() {
  return ['openapi.{type}'] as const
}

export function getOrganisationsKey() {
  return ['organisations'] as const
}

export function getPasswordForgottenKey() {
  return ['password_forgotten'] as const
}

export function getPaymentsKey() {
  return ['payments'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getSelfKey() {
  return ['self'] as const
}

export function getSummaryKey() {
  return ['summary'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getVendorKey() {
  return ['vendor'] as const
}

export function getOpenapiQueryKey() {
  return ['', '//openapi'] as const
}

export function getOpenapiQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOpenapiQueryKey>
  >({
    queryKey: getOpenapiQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.openapi.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapi<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.openapi.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOpenapiQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getApplicationAppIdEnvironmentQueryKey(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
) {
  return ['application', '/application/:appId/environment', args] as const
}

export function getApplicationAppIdEnvironmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
  >({
    queryKey: getApplicationAppIdEnvironmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.application[':appId'].environment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useApplicationAppIdEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
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
      ...getApplicationAppIdEnvironmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApplicationAppIdEnvironment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.application)[':appId']['environment']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApplicationAppIdEnvironmentQueryKey>
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
      ...getApplicationAppIdEnvironmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutApplicationAppIdEnvironmentMutationKey() {
  return ['application', '/application/:appId/environment', 'PUT'] as const
}

export function getPutApplicationAppIdEnvironmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApplicationAppIdEnvironmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
    ) {
      return parseResponse(client.application[':appId'].environment.$put(args, options))
    },
  })
}

export function usePutApplicationAppIdEnvironment<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.application)[':appId']['environment']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.application)[':appId']['environment']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutApplicationAppIdEnvironmentMutationOptions<
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

export function getPostAuthorizeMutationKey() {
  return ['authorize', '/authorize', 'POST'] as const
}

export function getPostAuthorizeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAuthorizeMutationKey(),
    async mutationFn() {
      return parseResponse(client.authorize.$post(undefined, options))
    },
  })
}

export function usePostAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.authorize.$post>>>>
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
  const mutationDefaults = getPostAuthorizeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getEventsEventSocketQueryKey() {
  return ['events', '/events/event-socket'] as const
}

export function getEventsEventSocketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getEventsEventSocketQueryKey>
  >({
    queryKey: getEventsEventSocketQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.events['event-socket'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useEventsEventSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventSocketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getEventsEventSocketQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseEventsEventSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.events)['event-socket']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getEventsEventSocketQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getEventsEventSocketQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGithubQueryKey() {
  return ['github', '/github'] as const
}

export function getGithubQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubQueryKey>
  >({
    queryKey: getGithubQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithub<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGithubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithub<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGithubQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGithubApplicationsQueryKey() {
  return ['github', '/github/applications'] as const
}

export function getGithubApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubApplicationsQueryKey>
  >({
    queryKey: getGithubApplicationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGithubApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubApplicationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.github.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGithubApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubApplicationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGithubCallbackQueryKey(
  args: InferRequestType<typeof client.github.callback.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['github', '/github/callback', keyArgs] as const
}

export function getGithubCallbackQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.callback.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubCallbackQueryKey>
  >({
    queryKey: getGithubCallbackQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.callback.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.callback.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubCallbackQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubCallback<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.callback.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.callback.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubCallbackQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubCallbackQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGithubEmailsQueryKey() {
  return ['github', '/github/emails'] as const
}

export function getGithubEmailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubEmailsQueryKey>
  >({
    queryKey: getGithubEmailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubEmailsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubEmailsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGithubKeysQueryKey() {
  return ['github', '/github/keys'] as const
}

export function getGithubKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubKeysQueryKey>
  >({
    queryKey: getGithubKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGithubLinkQueryKey(args: InferRequestType<typeof client.github.link.$get>) {
  return ['github', '/github/link', args] as const
}

export function getGithubLinkQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.link.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubLinkQueryKey>
  >({
    queryKey: getGithubLinkQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.link.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubLink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.link.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubLinkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubLinkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubLink<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.link.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubLinkQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubLinkQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteGithubLinkMutationKey() {
  return ['github', '/github/link', 'DELETE'] as const
}

export function getDeleteGithubLinkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteGithubLinkMutationKey(),
    async mutationFn() {
      return parseResponse(client.github.link.$delete(undefined, options))
    },
  })
}

export function useDeleteGithubLink<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.link.$delete>>>>
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
  const mutationDefaults = getDeleteGithubLinkMutationOptions<TError, TOnMutateResult>(
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

export function getGithubLoginQueryKey(args: InferRequestType<typeof client.github.login.$get>) {
  return ['github', '/github/login', args] as const
}

export function getGithubLoginQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.login.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGithubLoginQueryKey>
  >({
    queryKey: getGithubLoginQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.login.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.login.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubLogin<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.login.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.login.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubLoginQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubLoginQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGithubRedeployMutationKey() {
  return ['github', '/github/redeploy', 'POST'] as const
}

export function getPostGithubRedeployMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.github.redeploy.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGithubRedeployMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.github.redeploy.$post>) {
      return parseResponse(client.github.redeploy.$post(args, options))
    },
  })
}

export function usePostGithubRedeploy<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.redeploy.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.github.redeploy.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGithubRedeployMutationOptions<TError, TOnMutateResult>(
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

export function getGithubSignupQueryKey(args: InferRequestType<typeof client.github.signup.$get>) {
  return ['github', '/github/signup', args] as const
}

export function getGithubSignupQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.github.signup.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubSignupQueryKey>
  >({
    queryKey: getGithubSignupQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.github.signup.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubSignup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.signup.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubSignupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubSignupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubSignup<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.github.signup.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubSignupQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubSignupQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostGithubSignupMutationKey() {
  return ['github', '/github/signup', 'POST'] as const
}

export function getPostGithubSignupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.github.signup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGithubSignupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.github.signup.$post>) {
      return parseResponse(client.github.signup.$post(args, options))
    },
  })
}

export function usePostGithubSignup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.signup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.github.signup.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostGithubSignupMutationOptions<TError, TOnMutateResult>(
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

export function getGithubUsernameQueryKey() {
  return ['github', '/github/username'] as const
}

export function getGithubUsernameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGithubUsernameQueryKey>
  >({
    queryKey: getGithubUsernameQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.github.username.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGithubUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGithubUsernameQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGithubUsername<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.github.username.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGithubUsernameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGithubUsernameQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsSocketAppIdQueryKey(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
) {
  return ['logs-socket', '/logs-socket/:appId', args] as const
}

export function getLogsSocketAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsSocketAppIdQueryKey>
  >({
    queryKey: getLogsSocketAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['logs-socket'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsSocketAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsSocketAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['logs-socket'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['logs-socket'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsSocketAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsSocketAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsDrainsQueryKey() {
  return ['logs', '/logs/drains'] as const
}

export function getLogsDrainsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsDrainsQueryKey>
  >({
    queryKey: getLogsDrainsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.drains.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsDrainsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsDrains<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.drains.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getLogsDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsDrainsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutLogsDrainsDrainIdMutationKey() {
  return ['logs', '/logs/drains/:drainId', 'PUT'] as const
}

export function getPutLogsDrainsDrainIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutLogsDrainsDrainIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>) {
      return parseResponse(client.logs.drains[':drainId'].$put(args, options))
    },
  })
}

export function usePutLogsDrainsDrainId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs.drains)[':drainId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs.drains)[':drainId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutLogsDrainsDrainIdMutationOptions<TError, TOnMutateResult>(
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

export function getLogsLogsChunkedAppIdQueryKey(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
) {
  return ['logs', '/logs/logs-chunked/:appId', args] as const
}

export function getLogsLogsChunkedAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
  >({
    queryKey: getLogsLogsChunkedAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs['logs-chunked'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLogsLogsChunkedAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLogsChunkedAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLogsChunkedAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-chunked'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)['logs-chunked'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogsChunkedAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLogsChunkedAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsLogsSocketAppIdQueryKey(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
) {
  return ['logs', '/logs/logs-socket/:appId', args] as const
}

export function getLogsLogsSocketAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
  >({
    queryKey: getLogsLogsSocketAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs['logs-socket'][':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLogsLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsLogsSocketAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsLogsSocketAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)['logs-socket'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)['logs-socket'][':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsLogsSocketAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsLogsSocketAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsAppIdQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
) {
  return ['logs', '/logs/:appId', args] as const
}

export function getLogsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.logs)[':appId']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdQueryKey>
  >({
    queryKey: getLogsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLogsAppIdDrainsQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
) {
  return ['logs', '/logs/:appId/drains', args] as const
}

export function getLogsAppIdDrainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdDrainsQueryKey>
  >({
    queryKey: getLogsAppIdDrainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].drains.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsAppIdDrainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsAppIdDrainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostLogsAppIdDrainsMutationKey() {
  return ['logs', '/logs/:appId/drains', 'POST'] as const
}

export function getPostLogsAppIdDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLogsAppIdDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>) {
      return parseResponse(client.logs[':appId'].drains.$post(args, options))
    },
  })
}

export function usePostLogsAppIdDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs)[':appId']['drains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostLogsAppIdDrainsMutationOptions<TError, TOnMutateResult>(
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

export function getLogsAppIdDrainsIdOrUrlQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
) {
  return ['logs', '/logs/:appId/drains/:idOrUrl', args] as const
}

export function getLogsAppIdDrainsIdOrUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
  >({
    queryKey: getLogsAppIdDrainsIdOrUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].drains[':idOrUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useLogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
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
      ...getLogsAppIdDrainsIdOrUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseLogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdDrainsIdOrUrlQueryKey>
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
      ...getLogsAppIdDrainsIdOrUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteLogsAppIdDrainsIdOrUrlMutationKey() {
  return ['logs', '/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function getDeleteLogsAppIdDrainsIdOrUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLogsAppIdDrainsIdOrUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    ) {
      return parseResponse(client.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
    },
  })
}

export function useDeleteLogsAppIdDrainsIdOrUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteLogsAppIdDrainsIdOrUrlMutationOptions<TError, TOnMutateResult>(
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

export function getLogsAppIdSseQueryKey(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
) {
  return ['logs', '/logs/:appId/sse', args] as const
}

export function getLogsAppIdSseQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLogsAppIdSseQueryKey>
  >({
    queryKey: getLogsAppIdSseQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.logs[':appId'].sse.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogsAppIdSse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdSseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsAppIdSseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogsAppIdSse<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.logs)[':appId']['sse']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.logs)[':appId']['sse']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLogsAppIdSseQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsAppIdSseQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNewsfeedsBlogQueryKey() {
  return ['newsfeeds', '/newsfeeds/blog'] as const
}

export function getNewsfeedsBlogQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getNewsfeedsBlogQueryKey>
  >({
    queryKey: getNewsfeedsBlogQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.newsfeeds.blog.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useNewsfeedsBlog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsfeedsBlogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNewsfeedsBlogQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNewsfeedsBlog<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.blog.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getNewsfeedsBlogQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNewsfeedsBlogQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNewsfeedsEngineeringQueryKey() {
  return ['newsfeeds', '/newsfeeds/engineering'] as const
}

export function getNewsfeedsEngineeringQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNewsfeedsEngineeringQueryKey>
  >({
    queryKey: getNewsfeedsEngineeringQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.newsfeeds.engineering.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNewsfeedsEngineering<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsfeedsEngineeringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNewsfeedsEngineeringQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNewsfeedsEngineering<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.newsfeeds.engineering.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNewsfeedsEngineeringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNewsfeedsEngineeringQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsEmailhooksOwnerIdQueryKey(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
) {
  return ['notifications', '/notifications/emailhooks/:ownerId', args] as const
}

export function getNotificationsEmailhooksOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
  >({
    queryKey: getNotificationsEmailhooksOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.emailhooks[':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsEmailhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
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
      ...getNotificationsEmailhooksOwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsEmailhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsEmailhooksOwnerIdQueryKey>
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
      ...getNotificationsEmailhooksOwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNotificationsEmailhooksOwnerIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId', 'POST'] as const
}

export function getPostNotificationsEmailhooksOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsEmailhooksOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
    ) {
      return parseResponse(client.notifications.emailhooks[':ownerId'].$post(args, options))
    },
  })
}

export function usePostNotificationsEmailhooksOwnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.emailhooks)[':ownerId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsEmailhooksOwnerIdMutationOptions<
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

export function getPutNotificationsEmailhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'PUT'] as const
}

export function getPutNotificationsEmailhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsEmailhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications.emailhooks[':ownerId'][':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsEmailhooksOwnerIdId<
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
                ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsEmailhooksOwnerIdIdMutationOptions<
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

export function getDeleteNotificationsEmailhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/emailhooks/:ownerId/:id', 'DELETE'] as const
}

export function getDeleteNotificationsEmailhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsEmailhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']
      >,
    ) {
      return parseResponse(
        client.notifications.emailhooks[':ownerId'][':id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteNotificationsEmailhooksOwnerIdId<
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
                ReturnType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.emailhooks)[':ownerId'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationsEmailhooksOwnerIdIdMutationOptions<
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

export function getNotificationsInfoEventsQueryKey() {
  return ['notifications', '/notifications/info/events'] as const
}

export function getNotificationsInfoEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsInfoEventsQueryKey>
  >({
    queryKey: getNotificationsInfoEventsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.info.events.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsInfoEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsInfoEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getNotificationsInfoEventsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseNotificationsInfoEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.notifications.info.events.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsInfoEventsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getNotificationsInfoEventsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getNotificationsInfoWebhookformatsQueryKey() {
  return ['notifications', '/notifications/info/webhookformats'] as const
}

export function getNotificationsInfoWebhookformatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
  >({
    queryKey: getNotificationsInfoWebhookformatsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.info.webhookformats.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsInfoWebhookformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
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
      ...getNotificationsInfoWebhookformatsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsInfoWebhookformats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.notifications.info.webhookformats.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsInfoWebhookformatsQueryKey>
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
      ...getNotificationsInfoWebhookformatsQueryOptions<TData, TError>(clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getNotificationsWebhooksOwnerIdQueryKey(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
) {
  return ['notifications', '/notifications/webhooks/:ownerId', args] as const
}

export function getNotificationsWebhooksOwnerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
  >({
    queryKey: getNotificationsWebhooksOwnerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.notifications.webhooks[':ownerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useNotificationsWebhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
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
      ...getNotificationsWebhooksOwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseNotificationsWebhooksOwnerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getNotificationsWebhooksOwnerIdQueryKey>
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
      ...getNotificationsWebhooksOwnerIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostNotificationsWebhooksOwnerIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId', 'POST'] as const
}

export function getPostNotificationsWebhooksOwnerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostNotificationsWebhooksOwnerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'].$post(args, options))
    },
  })
}

export function usePostNotificationsWebhooksOwnerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.webhooks)[':ownerId']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostNotificationsWebhooksOwnerIdMutationOptions<
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

export function getPutNotificationsWebhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'PUT'] as const
}

export function getPutNotificationsWebhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutNotificationsWebhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'][':id'].$put(args, options))
    },
  })
}

export function usePutNotificationsWebhooksOwnerIdId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutNotificationsWebhooksOwnerIdIdMutationOptions<
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

export function getDeleteNotificationsWebhooksOwnerIdIdMutationKey() {
  return ['notifications', '/notifications/webhooks/:ownerId/:id', 'DELETE'] as const
}

export function getDeleteNotificationsWebhooksOwnerIdIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteNotificationsWebhooksOwnerIdIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
    ) {
      return parseResponse(client.notifications.webhooks[':ownerId'][':id'].$delete(args, options))
    },
  })
}

export function useDeleteNotificationsWebhooksOwnerIdId<
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
                ReturnType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.notifications.webhooks)[':ownerId'][':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteNotificationsWebhooksOwnerIdIdMutationOptions<
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

export function getPostOauthAccessTokenMutationKey() {
  return ['oauth', '/oauth/access_token', 'POST'] as const
}

export function getPostOauthAccessTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token.$post>) {
      return parseResponse(client.oauth.access_token.$post(args, options))
    },
  })
}

export function usePostOauthAccessToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.access_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthAccessTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthAccessTokenQueryMutationKey() {
  return ['oauth', '/oauth/access_token_query', 'POST'] as const
}

export function getPostOauthAccessTokenQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.access_token_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAccessTokenQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.access_token_query.$post>) {
      return parseResponse(client.oauth.access_token_query.$post(args, options))
    },
  })
}

export function usePostOauthAccessTokenQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.access_token_query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.access_token_query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthAccessTokenQueryMutationOptions<TError, TOnMutateResult>(
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

export function getOauthAuthorizeQueryKey(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['oauth', '/oauth/authorize', keyArgs] as const
}

export function getOauthAuthorizeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.oauth.authorize.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOauthAuthorizeQueryKey>
  >({
    queryKey: getOauthAuthorizeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.authorize.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthAuthorize<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.oauth.authorize.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthAuthorizeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthAuthorizeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOauthAuthorizeMutationKey() {
  return ['oauth', '/oauth/authorize', 'POST'] as const
}

export function getPostOauthAuthorizeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.authorize.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthAuthorizeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.authorize.$post>) {
      return parseResponse(client.oauth.authorize.$post(args, options))
    },
  })
}

export function usePostOauthAuthorize<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.authorize.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.oauth.authorize.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthAuthorizeMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRequestTokenMutationKey() {
  return ['oauth', '/oauth/request_token', 'POST'] as const
}

export function getPostOauthRequestTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token.$post>) {
      return parseResponse(client.oauth.request_token.$post(args, options))
    },
  })
}

export function usePostOauthRequestToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.request_token.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthRequestTokenMutationOptions<TError, TOnMutateResult>(
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

export function getPostOauthRequestTokenQueryMutationKey() {
  return ['oauth', '/oauth/request_token_query', 'POST'] as const
}

export function getPostOauthRequestTokenQueryMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.oauth.request_token_query.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOauthRequestTokenQueryMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.oauth.request_token_query.$post>) {
      return parseResponse(client.oauth.request_token_query.$post(args, options))
    },
  })
}

export function usePostOauthRequestTokenQuery<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.oauth.request_token_query.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.oauth.request_token_query.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOauthRequestTokenQueryMutationOptions<TError, TOnMutateResult>(
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

export function getOauthRightsQueryKey() {
  return ['oauth', '/oauth/rights'] as const
}

export function getOauthRightsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOauthRightsQueryKey>
  >({
    queryKey: getOauthRightsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.oauth.rights.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOauthRights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthRightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOauthRightsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOauthRights<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.rights.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOauthRightsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOauthRightsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOpenapiType2QueryKey(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
) {
  return ['openapi.{type}', '/openapi.{type}', args] as const
}

export function getOpenapiType2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOpenapiType2QueryKey>
  >({
    queryKey: getOpenapiType2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['openapi.{type}'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOpenapiType2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiType2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOpenapiType2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOpenapiType2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['openapi.{type}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['openapi.{type}']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOpenapiType2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOpenapiType2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrganisationsQueryKey(args: InferRequestType<typeof client.organisations.$get>) {
  return ['organisations', '/organisations', args] as const
}

export function getOrganisationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.organisations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsQueryKey>
  >({
    queryKey: getOrganisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganisationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganisations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.organisations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganisationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostOrganisationsMutationKey() {
  return ['organisations', '/organisations', 'POST'] as const
}

export function getPostOrganisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.organisations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.organisations.$post>) {
      return parseResponse(client.organisations.$post(args, options))
    },
  })
}

export function usePostOrganisations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.organisations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.organisations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
) {
  return ['organisations', '/organisations/:id', args] as const
}

export function getOrganisationsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdQueryKey>
  >({
    queryKey: getOrganisationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrganisationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrganisationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrganisationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrganisationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutOrganisationsIdMutationKey() {
  return ['organisations', '/organisations/:id', 'PUT'] as const
}

export function getPutOrganisationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':id']['$put']>) {
      return parseResponse(client.organisations[':id'].$put(args, options))
    },
  })
}

export function usePutOrganisationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteOrganisationsIdMutationKey() {
  return ['organisations', '/organisations/:id', 'DELETE'] as const
}

export function getDeleteOrganisationsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.organisations)[':id']['$delete']>) {
      return parseResponse(client.organisations[':id'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsIdMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdAddonprovidersQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
) {
  return ['organisations', '/organisations/:id/addonproviders', args] as const
}

export function getOrganisationsIdAddonprovidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
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
      ...getOrganisationsIdAddonprovidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersQueryKey>
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
      ...getOrganisationsIdAddonprovidersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addonproviders.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdAddonproviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addonproviders']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addonproviders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdAddonprovidersMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonprovidersProviderIdMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'PUT'] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonprovidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdAddonprovidersProviderId<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['$put']
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
  const mutationDefaults = getPutOrganisationsIdAddonprovidersProviderIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderId<
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
                    (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdAddonprovidersProviderIdMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/features', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdFeaturesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonprovidersProviderIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdFeaturesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonprovidersProviderIdFeatures<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdFeaturesQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdFeaturesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features',
    'POST',
  ] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonprovidersProviderIdFeatures<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['features']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdFeaturesMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/features/:featureId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].features[':featureId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureId<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['features'][':featureId']['$delete']
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
    getDeleteOrganisationsIdAddonprovidersProviderIdFeaturesFeatureIdMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonprovidersProviderIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdPlansQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonprovidersProviderIdPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdPlansQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/plans', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdPlansMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonprovidersProviderIdPlans<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdPlansMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    args,
  ] as const
}

export function getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonprovidersProviderIdPlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdPlansPlanIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutOrganisationsIdAddonprovidersProviderIdPlansPlanId<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$put']
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
  const mutationDefaults = getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanId<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['$delete']
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
    getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdMutationOptions<
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

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
          ':featureName'
        ].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$put']
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
    getPutOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
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

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey() {
  return [
    'organisations',
    '/organisations/:id/addonproviders/:providerId/plans/:planId/features/:featureName',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].plans[':planId'].features[
          ':featureName'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureName<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['plans'][':planId']['features'][':featureName']['$delete']
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
    getDeleteOrganisationsIdAddonprovidersProviderIdPlansPlanIdFeaturesFeatureNameMutationOptions<
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

export function getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/sso', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdSsoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].sso.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonprovidersProviderIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdSsoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonprovidersProviderIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['sso']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdSsoQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdSsoQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/tags', args] as const
}

export function getOrganisationsIdAddonprovidersProviderIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonprovidersProviderIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonprovidersProviderIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdTagsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonprovidersProviderIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonprovidersProviderIdTagsQueryKey>
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
      ...getOrganisationsIdAddonprovidersProviderIdTagsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersMutationKey() {
  return ['organisations', '/organisations/:id/addonproviders/:providerId/testers', 'POST'] as const
}

export function getPostOrganisationsIdAddonprovidersProviderIdTestersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonprovidersProviderIdTestersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addonproviders[':providerId'].testers.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonprovidersProviderIdTesters<
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
                  (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addonproviders'][':providerId']['testers']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonprovidersProviderIdTestersMutationOptions<
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

export function getOrganisationsIdAddonsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons', args] as const
}

export function getOrganisationsIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsQueryKey>
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
      ...getOrganisationsIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsQueryKey>
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
      ...getOrganisationsIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonsMutationKey() {
  return ['organisations', '/organisations/:id/addons', 'POST'] as const
}

export function getPostOrganisationsIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addons.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getPostOrganisationsIdAddonsPreordersMutationKey() {
  return ['organisations', '/organisations/:id/addons/preorders', 'POST'] as const
}

export function getPostOrganisationsIdAddonsPreordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsPreordersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].addons.preorders.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdAddonsPreorders<
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
                ReturnType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons']['preorders']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdAddonsPreordersMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId', args] as const
}

export function getOrganisationsIdAddonsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonsAddonIdMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'PUT'] as const
}

export function getPutOrganisationsIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].addons[':addonId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdAddonsAddonId<
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
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsIdAddonsAddonIdMutationOptions<
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

export function getDeleteOrganisationsIdAddonsAddonIdMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].addons[':addonId'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdAddonsAddonId<
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
                ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsIdAddonsAddonIdMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdApplicationsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/applications', args] as const
}

export function getOrganisationsIdAddonsAddonIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdApplicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['applications']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdApplicationsQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdApplicationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdEnvQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/env', args] as const
}

export function getOrganisationsIdAddonsAddonIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdEnvQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdInstancesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/instances', args] as const
}

export function getOrganisationsIdAddonsAddonIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['instances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/instances/:instanceId',
    args,
  ] as const
}

export function getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['instances'][':instanceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdMigrationsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', args] as const
}

export function getOrganisationsIdAddonsAddonIdMigrationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdMigrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdMigrations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdMigrationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/migrations', 'POST'] as const
}

export function getPostOrganisationsIdAddonsAddonIdMigrationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdAddonsAddonIdMigrationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdAddonsAddonIdMigrations<
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
                  (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addons'][':addonId']['migrations']['$post']
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
  const mutationDefaults = getPostOrganisationsIdAddonsAddonIdMigrationsMutationOptions<
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

export function getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/addons/:addonId/migrations/:migrationId',
    args,
  ] as const
}

export function getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].migrations[':migrationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdMigrationsMigrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdMigrationsMigrationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['migrations'][':migrationId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdMigrationsMigrationIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdSsoQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/sso', args] as const
}

export function getOrganisationsIdAddonsAddonIdSsoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].sso.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdSsoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['sso']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdSsoQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdSsoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdAddonsAddonIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/addons/:addonId/tags', args] as const
}

export function getOrganisationsIdAddonsAddonIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
  >({
    queryKey: getOrganisationsIdAddonsAddonIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['addons'][':addonId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdAddonsAddonIdTagsQueryKey>
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
      ...getOrganisationsIdAddonsAddonIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function getPutOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags[':tag'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdAddonsAddonIdTagsTag<
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
                  (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$put']
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
  const mutationDefaults = getPutOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
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

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].addons[':addonId'].tags[':tag'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdAddonsAddonIdTagsTag<
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
                  (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['addons'][':addonId']['tags'][':tag']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdAddonsAddonIdTagsTagMutationOptions<
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

export function getOrganisationsIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
) {
  return ['organisations', '/organisations/:id/applications', args] as const
}

export function getOrganisationsIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
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
      ...getOrganisationsIdApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsQueryKey>
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
      ...getOrganisationsIdApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdApplicationsMutationKey() {
  return ['organisations', '/organisations/:id/applications', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].applications.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['applications']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['applications']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdApplicationsMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
) {
  return ['organisations', '/organisations/:id/applications/:appId', args] as const
}

export function getOrganisationsIdApplicationsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['$put']
      >,
    ) {
      return parseResponse(client.organisations[':id'].applications[':appId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdApplicationsAppId<
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
                ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppId<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdAddonsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons', args] as const
}

export function getOrganisationsIdApplicationsAppIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['addons']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdApplicationsAppIdAddonsMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/addons', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsAppIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsAppIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdApplicationsAppIdAddons<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['addons']['$post']
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
  const mutationDefaults = getPostOrganisationsIdApplicationsAppIdAddonsMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/addons/env', args] as const
}

export function getOrganisationsIdApplicationsAppIdAddonsEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdAddonsEnvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['addons']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdAddonsEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdAddonsEnvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/addons/:addonId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].addons[':addonId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdAddonsAddonId<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['addons'][':addonId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdAddonsAddonIdMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdBranchMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/branch', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].branch.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdBranch<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['branch']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdBranchMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdBranchesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/branches', args] as const
}

export function getOrganisationsIdApplicationsAppIdBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdBranchesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['branches']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdBranchesQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdBranchesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/buildflavor', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdBuildflavorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdBuildflavorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].buildflavor.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdBuildflavor<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['buildflavor']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdBuildflavorMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdDependenciesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependencies', args] as const
}

export function getOrganisationsIdApplicationsAppIdDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDependenciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDependenciesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependencies/env', args] as const
}

export function getOrganisationsIdApplicationsAppIdDependenciesEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDependenciesEnvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['dependencies']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependenciesEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDependenciesEnvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdDependenciesDependencyId<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$put']
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
    getPutOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/dependencies/:dependencyId',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependencies[':dependencyId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyId<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['dependencies'][':dependencyId']['$delete']
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
    getDeleteOrganisationsIdApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdDependentsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/dependents', args] as const
}

export function getOrganisationsIdApplicationsAppIdDependentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDependentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].dependents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDependentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['dependents']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDependentsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDependentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/deployments', args] as const
}

export function getOrganisationsIdApplicationsAppIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDeploymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['deployments']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDeploymentsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId',
    args,
  ] as const
}

export function getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].deployments[
          ':deploymentId'
        ].instances.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstances<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['deployments'][':deploymentId']['instances']['$delete']
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
    getDeleteOrganisationsIdApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/env', args] as const
}

export function getOrganisationsIdApplicationsAppIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdEnvMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['applications'][':appId']['env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdEnv<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['env']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdEnvMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env[':envName'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdEnvEnvName<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/env/:envName', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].env[':envName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdEnvEnvName<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['env'][':envName']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', args] as const
}

export function getOrganisationsIdApplicationsAppIdExposedEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdExposedEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].exposed_env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdExposedEnvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdExposedEnvQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdExposedEnvQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/exposed_env', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdExposedEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdExposedEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].exposed_env.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdExposedEnv<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['exposed_env']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdExposedEnvMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdInstancesQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/instances', args] as const
}

export function getOrganisationsIdApplicationsAppIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdInstancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['instances']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdInstancesQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdApplicationsAppIdInstancesMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'POST'] as const
}

export function getPostOrganisationsIdApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$post(args, options),
      )
    },
  })
}

export function usePostOrganisationsIdApplicationsAppIdInstances<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['instances']['$post']
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
  const mutationDefaults = getPostOrganisationsIdApplicationsAppIdInstancesMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdInstancesMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/instances', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdInstances<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['instances']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdInstancesMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
) {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/instances/:instanceId',
    args,
  ] as const
}

export function getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['instances'][':instanceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdTagsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/tags', args] as const
}

export function getOrganisationsIdApplicationsAppIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['tags']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdTagsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags[':tag'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdTagsTag<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].tags[':tag'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdTagsTag<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['tags'][':tag']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdTagsTagMutationOptions<
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

export function getOrganisationsIdApplicationsAppIdVhostsQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts', args] as const
}

export function getOrganisationsIdApplicationsAppIdVhostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdVhostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdVhostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdVhostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/favourite', args] as const
}

export function getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
  >({
    queryKey: getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryKey>
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
      ...getOrganisationsIdApplicationsAppIdVhostsFavouriteQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'PUT',
  ] as const
}

export function getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdVhostsFavourite<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/favourite',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts.favourite.$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdVhostsFavourite<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts']['favourite']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationKey() {
  return ['organisations', '/organisations/:id/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts[':domain'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdApplicationsAppIdVhostsDomain<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$put']
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
  const mutationDefaults = getPutOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
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

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationKey() {
  return [
    'organisations',
    '/organisations/:id/applications/:appId/vhosts/:domain',
    'DELETE',
  ] as const
}

export function getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].applications[':appId'].vhosts[':domain'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdApplicationsAppIdVhostsDomain<
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
                  (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['applications'][':appId']['vhosts'][':domain']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdApplicationsAppIdVhostsDomainMutationOptions<
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

export function getPutOrganisationsIdAvatarMutationKey() {
  return ['organisations', '/organisations/:id/avatar', 'PUT'] as const
}

export function getPutOrganisationsIdAvatarMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdAvatarMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].avatar.$put(args, options))
    },
  })
}

export function usePutOrganisationsIdAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['avatar']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['avatar']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsIdAvatarMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdConsumersQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumers', args] as const
}

export function getOrganisationsIdConsumersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersQueryKey>
  >({
    queryKey: getOrganisationsIdConsumersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdConsumers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersQueryKey>
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
      ...getOrganisationsIdConsumersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdConsumers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersQueryKey>
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
      ...getOrganisationsIdConsumersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdConsumersMutationKey() {
  return ['organisations', '/organisations/:id/consumers', 'POST'] as const
}

export function getPostOrganisationsIdConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdConsumersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['consumers']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdConsumersMutationOptions<TError, TOnMutateResult>(
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

export function getOrganisationsIdConsumersKeyQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumers/:key', args] as const
}

export function getOrganisationsIdConsumersKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
  >({
    queryKey: getOrganisationsIdConsumersKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumers[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
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
      ...getOrganisationsIdConsumersKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersKeyQueryKey>
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
      ...getOrganisationsIdConsumersKeyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdConsumersKeyMutationKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'PUT'] as const
}

export function getPutOrganisationsIdConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdConsumersKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers[':key'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsIdConsumersKeyMutationOptions<
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

export function getDeleteOrganisationsIdConsumersKeyMutationKey() {
  return ['organisations', '/organisations/:id/consumers/:key', 'DELETE'] as const
}

export function getDeleteOrganisationsIdConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdConsumersKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].consumers[':key'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdConsumersKey<
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
                ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['consumers'][':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsIdConsumersKeyMutationOptions<
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

export function getOrganisationsIdConsumersKeySecretQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/consumers/:key/secret', args] as const
}

export function getOrganisationsIdConsumersKeySecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
  >({
    queryKey: getOrganisationsIdConsumersKeySecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumers[':key'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
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
      ...getOrganisationsIdConsumersKeySecretQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['consumers'][':key']['secret']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumersKeySecretQueryKey>
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
      ...getOrganisationsIdConsumersKeySecretQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdConsumptionsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
) {
  return ['organisations', '/organisations/:id/consumptions', args] as const
}

export function getOrganisationsIdConsumptionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
  >({
    queryKey: getOrganisationsIdConsumptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].consumptions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdConsumptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
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
      ...getOrganisationsIdConsumptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdConsumptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['consumptions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['consumptions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdConsumptionsQueryKey>
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
      ...getOrganisationsIdConsumptionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdCreditsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
) {
  return ['organisations', '/organisations/:id/credits', args] as const
}

export function getOrganisationsIdCreditsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdCreditsQueryKey>
  >({
    queryKey: getOrganisationsIdCreditsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].credits.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdCreditsQueryKey>
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
      ...getOrganisationsIdCreditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdCredits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['credits']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['credits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdCreditsQueryKey>
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
      ...getOrganisationsIdCreditsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
) {
  return ['organisations', '/organisations/:id/deployments', args] as const
}

export function getOrganisationsIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
  >({
    queryKey: getOrganisationsIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
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
      ...getOrganisationsIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['deployments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdDeploymentsQueryKey>
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
      ...getOrganisationsIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdInstancesQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
) {
  return ['organisations', '/organisations/:id/instances', args] as const
}

export function getOrganisationsIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdInstancesQueryKey>
  >({
    queryKey: getOrganisationsIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdInstancesQueryKey>
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
      ...getOrganisationsIdInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdInstancesQueryKey>
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
      ...getOrganisationsIdInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdMembersQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
) {
  return ['organisations', '/organisations/:id/members', args] as const
}

export function getOrganisationsIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdMembersQueryKey>
  >({
    queryKey: getOrganisationsIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].members.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdMembersQueryKey>
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
      ...getOrganisationsIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['members']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdMembersQueryKey>
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
      ...getOrganisationsIdMembersQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdMembersMutationKey() {
  return ['organisations', '/organisations/:id/members', 'POST'] as const
}

export function getPostOrganisationsIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].members.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['members']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['members']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdMembersMutationOptions<TError, TOnMutateResult>(
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

export function getPutOrganisationsIdMembersUserIdMutationKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'PUT'] as const
}

export function getPutOrganisationsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
    ) {
      return parseResponse(client.organisations[':id'].members[':userId'].$put(args, options))
    },
  })
}

export function usePutOrganisationsIdMembersUserId<
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
                ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutOrganisationsIdMembersUserIdMutationOptions<
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

export function getDeleteOrganisationsIdMembersUserIdMutationKey() {
  return ['organisations', '/organisations/:id/members/:userId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdMembersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdMembersUserIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
    ) {
      return parseResponse(client.organisations[':id'].members[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdMembersUserId<
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
                ReturnType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['members'][':userId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsIdMembersUserIdMutationOptions<
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

export function getOrganisationsIdPaymentInfoQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
) {
  return ['organisations', '/organisations/:id/payment-info', args] as const
}

export function getOrganisationsIdPaymentInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id']['payment-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
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
      ...getOrganisationsIdPaymentInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payment-info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.organisations)[':id']['payment-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentInfoQueryKey>
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
      ...getOrganisationsIdPaymentInfoQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsBillingsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/billings', args] as const
}

export function getOrganisationsIdPaymentsBillingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsBillings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsBillings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdPaymentsBillingsMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings', 'POST'] as const
}

export function getPostOrganisationsIdPaymentsBillingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdPaymentsBillingsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].payments.billings.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdPaymentsBillings<
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
                ReturnType<(typeof client.organisations)[':id']['payments']['billings']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['payments']['billings']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdPaymentsBillingsMutationOptions<
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

export function getOrganisationsIdPaymentsBillingsUnpaidQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/unpaid', args] as const
}

export function getOrganisationsIdPaymentsBillingsUnpaidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsUnpaidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings.unpaid.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsBillingsUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsUnpaidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsBillingsUnpaid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings']['unpaid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsUnpaidQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsUnpaidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsBillingsBidQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid', args] as const
}

export function getOrganisationsIdPaymentsBillingsBidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsBidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsBidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings'][':bid']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsBidQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsBidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdPaymentsBillingsBidMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdPaymentsBillingsBid<
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
                  (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['billings'][':bid']['$put']
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
  const mutationDefaults = getPutOrganisationsIdPaymentsBillingsBidMutationOptions<
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

export function getDeleteOrganisationsIdPaymentsBillingsBidMutationKey() {
  return ['organisations', '/organisations/:id/payments/billings/:bid', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdPaymentsBillingsBid<
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
                  (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['billings'][':bid']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdPaymentsBillingsBidMutationOptions<
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

export function getOrganisationsIdPaymentsBillingsBidPdfQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/billings/:bid.pdf', args] as const
}

export function getOrganisationsIdPaymentsBillingsBidPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsBillingsBidPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.billings[':bid.pdf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsBidPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['billings'][':bid.pdf']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsBillingsBidPdfQueryKey>
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
      ...getOrganisationsIdPaymentsBillingsBidPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsFullpricePriceQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/fullprice/:price', args] as const
}

export function getOrganisationsIdPaymentsFullpricePriceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsFullpricePriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.fullprice[':price'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
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
      ...getOrganisationsIdPaymentsFullpricePriceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['fullprice'][':price']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsFullpricePriceQueryKey>
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
      ...getOrganisationsIdPaymentsFullpricePriceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getOrganisationsIdPaymentsMethodsQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/methods', args] as const
}

export function getOrganisationsIdPaymentsMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.methods.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
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
      ...getOrganisationsIdPaymentsMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMethodsQueryKey>
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
      ...getOrganisationsIdPaymentsMethodsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrganisationsIdPaymentsMethodsMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods', 'POST'] as const
}

export function getPostOrganisationsIdPaymentsMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrganisationsIdPaymentsMethodsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
    ) {
      return parseResponse(client.organisations[':id'].payments.methods.$post(args, options))
    },
  })
}

export function usePostOrganisationsIdPaymentsMethods<
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
                ReturnType<(typeof client.organisations)[':id']['payments']['methods']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['payments']['methods']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrganisationsIdPaymentsMethodsMutationOptions<
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

export function getOrganisationsIdPaymentsMethodsDefaultQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/methods/default', args] as const
}

export function getOrganisationsIdPaymentsMethodsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsMethodsDefaultQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.methods.default.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
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
      ...getOrganisationsIdPaymentsMethodsDefaultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['methods']['default']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['methods']['default']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMethodsDefaultQueryKey>
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
      ...getOrganisationsIdPaymentsMethodsDefaultQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdPaymentsMethodsDefaultMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods/default', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsMethodsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsMethodsDefaultMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
      >,
    ) {
      return parseResponse(client.organisations[':id'].payments.methods.default.$put(args, options))
    },
  })
}

export function usePutOrganisationsIdPaymentsMethodsDefault<
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
                  (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['methods']['default']['$put']
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
  const mutationDefaults = getPutOrganisationsIdPaymentsMethodsDefaultMutationOptions<
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

export function getDeleteOrganisationsIdPaymentsMethodsMIdMutationKey() {
  return ['organisations', '/organisations/:id/payments/methods/:mId', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsMethodsMIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsMethodsMIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.methods[':mId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteOrganisationsIdPaymentsMethodsMId<
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
                  (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['methods'][':mId']['$delete']
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
  const mutationDefaults = getDeleteOrganisationsIdPaymentsMethodsMIdMutationOptions<
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

export function getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
) {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice', args] as const
}

export function getOrganisationsIdPaymentsMonthlyinvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsMonthlyinvoiceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.monthlyinvoice.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
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
      ...getOrganisationsIdPaymentsMonthlyinvoiceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.organisations)[':id']['payments']['monthlyinvoice']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsMonthlyinvoiceQueryKey>
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
      ...getOrganisationsIdPaymentsMonthlyinvoiceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationKey() {
  return ['organisations', '/organisations/:id/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
      >,
    ) {
      return parseResponse(
        client.organisations[':id'].payments.monthlyinvoice.maxcredit.$put(args, options),
      )
    },
  })
}

export function usePutOrganisationsIdPaymentsMonthlyinvoiceMaxcredit<
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
                  (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.organisations)[':id']['payments']['monthlyinvoice']['maxcredit']['$put']
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
  const mutationDefaults = getPutOrganisationsIdPaymentsMonthlyinvoiceMaxcreditMutationOptions<
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

export function getOrganisationsIdPaymentsRecurringQueryKey(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
) {
  return ['organisations', '/organisations/:id/payments/recurring', args] as const
}

export function getOrganisationsIdPaymentsRecurringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
  >({
    queryKey: getOrganisationsIdPaymentsRecurringQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.organisations[':id'].payments.recurring.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrganisationsIdPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
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
      ...getOrganisationsIdPaymentsRecurringQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrganisationsIdPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrganisationsIdPaymentsRecurringQueryKey>
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
      ...getOrganisationsIdPaymentsRecurringQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteOrganisationsIdPaymentsRecurringMutationKey() {
  return ['organisations', '/organisations/:id/payments/recurring', 'DELETE'] as const
}

export function getDeleteOrganisationsIdPaymentsRecurringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteOrganisationsIdPaymentsRecurringMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.organisations)[':id']['payments']['recurring']['$delete']
      >,
    ) {
      return parseResponse(client.organisations[':id'].payments.recurring.$delete(args, options))
    },
  })
}

export function useDeleteOrganisationsIdPaymentsRecurring<
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
                ReturnType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.organisations)[':id']['payments']['recurring']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOrganisationsIdPaymentsRecurringMutationOptions<
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

export function getPasswordForgottenQueryKey() {
  return ['password_forgotten', '/password_forgotten'] as const
}

export function getPasswordForgottenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordForgottenQueryKey>
  >({
    queryKey: getPasswordForgottenQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.password_forgotten.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePasswordForgotten<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPasswordForgottenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPasswordForgottenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePasswordForgotten<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPasswordForgottenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPasswordForgottenQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPasswordForgottenMutationKey() {
  return ['password_forgotten', '/password_forgotten', 'POST'] as const
}

export function getPostPasswordForgottenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.password_forgotten.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordForgottenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.password_forgotten.$post>) {
      return parseResponse(client.password_forgotten.$post(args, options))
    },
  })
}

export function usePostPasswordForgotten<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.password_forgotten.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.password_forgotten.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPasswordForgottenMutationOptions<TError, TOnMutateResult>(
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

export function getPasswordForgottenKeyQueryKey(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
) {
  return ['password_forgotten', '/password_forgotten/:key', args] as const
}

export function getPasswordForgottenKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPasswordForgottenKeyQueryKey>
  >({
    queryKey: getPasswordForgottenKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.password_forgotten[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePasswordForgottenKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPasswordForgottenKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPasswordForgottenKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePasswordForgottenKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.password_forgotten)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPasswordForgottenKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPasswordForgottenKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPasswordForgottenKeyMutationKey() {
  return ['password_forgotten', '/password_forgotten/:key', 'POST'] as const
}

export function getPostPasswordForgottenKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPasswordForgottenKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.password_forgotten)[':key']['$post']>) {
      return parseResponse(client.password_forgotten[':key'].$post(args, options))
    },
  })
}

export function usePostPasswordForgottenKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.password_forgotten)[':key']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.password_forgotten)[':key']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPasswordForgottenKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentsAssetsPayButtonTokenButtonPngQueryKey(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
) {
  return ['payments', '/payments/assets/pay_button/:token/button.png', args] as const
}

export function getPaymentsAssetsPayButtonTokenButtonPngQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
  >({
    queryKey: getPaymentsAssetsPayButtonTokenButtonPngQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.assets.pay_button[':token']['button.png'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsAssetsPayButtonTokenButtonPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
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
      ...getPaymentsAssetsPayButtonTokenButtonPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentsAssetsPayButtonTokenButtonPng<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payments.assets.pay_button)[':token']['button.png']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payments.assets.pay_button)[':token']['button.png']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsAssetsPayButtonTokenButtonPngQueryKey>
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
      ...getPaymentsAssetsPayButtonTokenButtonPngQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentsCouponsNameQueryKey(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
) {
  return ['payments', '/payments/coupons/:name', args] as const
}

export function getPaymentsCouponsNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsCouponsNameQueryKey>
  >({
    queryKey: getPaymentsCouponsNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.coupons[':name'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsCouponsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsCouponsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentsCouponsNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentsCouponsName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payments.coupons)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments.coupons)[':name']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsCouponsNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentsCouponsNameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPaymentsProvidersQueryKey() {
  return ['payments', '/payments/providers'] as const
}

export function getPaymentsProvidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsProvidersQueryKey>
  >({
    queryKey: getPaymentsProvidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.providers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentsProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentsProviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.providers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsProvidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentsProvidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPaymentsTokensStripeQueryKey() {
  return ['payments', '/payments/tokens/stripe'] as const
}

export function getPaymentsTokensStripeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentsTokensStripeQueryKey>
  >({
    queryKey: getPaymentsTokensStripeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.payments.tokens.stripe.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentsTokensStripe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsTokensStripeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentsTokensStripeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentsTokensStripe<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payments.tokens.stripe.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentsTokensStripeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentsTokensStripeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPaymentsBidEndStripeMutationKey() {
  return ['payments', '/payments/:bid/end/stripe', 'POST'] as const
}

export function getPostPaymentsBidEndStripeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentsBidEndStripeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
    ) {
      return parseResponse(client.payments[':bid'].end.stripe.$post(args, options))
    },
  })
}

export function usePostPaymentsBidEndStripe<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payments)[':bid']['end']['stripe']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payments)[':bid']['end']['stripe']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentsBidEndStripeMutationOptions<TError, TOnMutateResult>(
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

export function getProductsAddonprovidersQueryKey() {
  return ['products', '/products/addonproviders'] as const
}

export function getProductsAddonprovidersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersQueryKey>
  >({
    queryKey: getProductsAddonprovidersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.addonproviders.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsAddonprovidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsAddonproviders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.addonproviders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsAddonprovidersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsAddonprovidersProviderIdQueryKey(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
) {
  return ['products', '/products/addonproviders/:provider_id', args] as const
}

export function getProductsAddonprovidersProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
  >({
    queryKey: getProductsAddonprovidersProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.addonproviders[':provider_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
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
      ...getProductsAddonprovidersProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProductsAddonprovidersProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.addonproviders)[':provider_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.addonproviders)[':provider_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersProviderIdQueryKey>
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
      ...getProductsAddonprovidersProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProductsAddonprovidersProviderIdVersionsQueryKey(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
) {
  return ['products', '/products/addonproviders/:provider_id/versions', args] as const
}

export function getProductsAddonprovidersProviderIdVersionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
  >({
    queryKey: getProductsAddonprovidersProviderIdVersionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.addonproviders[':provider_id'].versions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsAddonprovidersProviderIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
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
      ...getProductsAddonprovidersProviderIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProductsAddonprovidersProviderIdVersions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.products.addonproviders)[':provider_id']['versions']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.products.addonproviders)[':provider_id']['versions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsAddonprovidersProviderIdVersionsQueryKey>
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
      ...getProductsAddonprovidersProviderIdVersionsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProductsCountriesQueryKey() {
  return ['products', '/products/countries'] as const
}

export function getProductsCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsCountriesQueryKey>
  >({
    queryKey: getProductsCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsCountriesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsCountrycodesQueryKey() {
  return ['products', '/products/countrycodes'] as const
}

export function getProductsCountrycodesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsCountrycodesQueryKey>
  >({
    queryKey: getProductsCountrycodesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.countrycodes.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsCountrycodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsCountrycodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsCountrycodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsCountrycodes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.countrycodes.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsCountrycodesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsCountrycodesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsInstancesQueryKey(
  args: InferRequestType<typeof client.products.instances.$get>,
) {
  return ['products', '/products/instances', args] as const
}

export function getProductsInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.instances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsInstancesQueryKey>
  >({
    queryKey: getProductsInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.instances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.instances.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.instances.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.instances.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsInstancesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsInstancesTypeVersionQueryKey(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
) {
  return ['products', '/products/instances/:type-{version}', args] as const
}

export function getProductsInstancesTypeVersionQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
  >({
    queryKey: getProductsInstancesTypeVersionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.instances[':type-{version}'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsInstancesTypeVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
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
      ...getProductsInstancesTypeVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseProductsInstancesTypeVersion<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.products.instances)[':type-{version}']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.products.instances)[':type-{version}']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsInstancesTypeVersionQueryKey>
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
      ...getProductsInstancesTypeVersionQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getProductsMfaKindsQueryKey() {
  return ['products', '/products/mfa_kinds'] as const
}

export function getProductsMfaKindsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsMfaKindsQueryKey>
  >({
    queryKey: getProductsMfaKindsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.mfa_kinds.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useProductsMfaKinds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsMfaKindsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsMfaKindsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsMfaKinds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.mfa_kinds.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsMfaKindsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsMfaKindsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsPackagesQueryKey(
  args: InferRequestType<typeof client.products.packages.$get>,
) {
  return ['products', '/products/packages', args] as const
}

export function getProductsPackagesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.packages.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsPackagesQueryKey>
  >({
    queryKey: getProductsPackagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.packages.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductsPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.packages.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsPackagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsPackagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsPackages<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.products.packages.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.products.packages.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getProductsPackagesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsPackagesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsPricesQueryKey() {
  return ['products', '/products/prices'] as const
}

export function getProductsPricesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsPricesQueryKey>
  >({
    queryKey: getProductsPricesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.prices.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductsPrices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsPricesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsPrices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.prices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsPricesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsPricesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getProductsZonesQueryKey() {
  return ['products', '/products/zones'] as const
}

export function getProductsZonesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getProductsZonesQueryKey>
  >({
    queryKey: getProductsZonesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.products.zones.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useProductsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsZonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getProductsZonesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseProductsZones<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.zones.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getProductsZonesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getProductsZonesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfQueryKey() {
  return ['self', '/self'] as const
}

export function getSelfQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfQueryKey>
  >({
    queryKey: getSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelf<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfMutationKey() {
  return ['self', '/self', 'PUT'] as const
}

export function getPutSelfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
    TError,
    InferRequestType<typeof client.self.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.$put>) {
      return parseResponse(client.self.$put(args, options))
    },
  })
}

export function usePutSelf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$put>>>>>,
        TError,
        InferRequestType<typeof client.self.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSelfMutationKey() {
  return ['self', '/self', 'DELETE'] as const
}

export function getDeleteSelfMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.$delete(undefined, options))
    },
  })
}

export function useDeleteSelf<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.$delete>>>>>,
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
  const mutationDefaults = getDeleteSelfMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getSelfAddonsQueryKey() {
  return ['self', '/self/addons'] as const
}

export function getSelfAddonsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsQueryKey>
  >({
    queryKey: getSelfAddonsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfAddonsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfAddons<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfAddonsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSelfAddonsMutationKey() {
  return ['self', '/self/addons', 'POST'] as const
}

export function getPostSelfAddonsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>>,
    TError,
    InferRequestType<typeof client.self.addons.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfAddonsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.addons.$post>) {
      return parseResponse(client.self.addons.$post(args, options))
    },
  })
}

export function usePostSelfAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.self.addons.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfAddonsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSelfAddonsPreordersMutationKey() {
  return ['self', '/self/addons/preorders', 'POST'] as const
}

export function getPostSelfAddonsPreordersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.self.addons.preorders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfAddonsPreordersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.addons.preorders.$post>) {
      return parseResponse(client.self.addons.preorders.$post(args, options))
    },
  })
}

export function usePostSelfAddonsPreorders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.addons.preorders.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.self.addons.preorders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfAddonsPreordersMutationOptions<TError, TOnMutateResult>(
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

export function getSelfAddonsAddonIdQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
) {
  return ['self', '/self/addons/:addonId', args] as const
}

export function getSelfAddonsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfAddonsAddonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfAddonsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfAddonsAddonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfAddonsAddonIdMutationKey() {
  return ['self', '/self/addons/:addonId', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.addons)[':addonId']['$put']>) {
      return parseResponse(client.self.addons[':addonId'].$put(args, options))
    },
  })
}

export function usePutSelfAddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfAddonsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfAddonsAddonIdMutationKey() {
  return ['self', '/self/addons/:addonId', 'DELETE'] as const
}

export function getDeleteSelfAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfAddonsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>) {
      return parseResponse(client.self.addons[':addonId'].$delete(args, options))
    },
  })
}

export function useDeleteSelfAddonsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfAddonsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function getSelfAddonsAddonIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
) {
  return ['self', '/self/addons/:addonId/applications', args] as const
}

export function getSelfAddonsAddonIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
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
      ...getSelfAddonsAddonIdApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfAddonsAddonIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdApplicationsQueryKey>
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
      ...getSelfAddonsAddonIdApplicationsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfAddonsAddonIdEnvQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
) {
  return ['self', '/self/addons/:addonId/env', args] as const
}

export function getSelfAddonsAddonIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfAddonsAddonIdEnvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfAddonsAddonIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdEnvQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfAddonsAddonIdEnvQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfAddonsAddonIdPlanMutationKey() {
  return ['self', '/self/addons/:addonId/plan', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdPlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdPlanMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].plan.$put(args, options))
    },
  })
}

export function usePutSelfAddonsAddonIdPlan<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['plan']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['plan']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfAddonsAddonIdPlanMutationOptions<TError, TOnMutateResult>(
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

export function getSelfAddonsAddonIdSsoQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
) {
  return ['self', '/self/addons/:addonId/sso', args] as const
}

export function getSelfAddonsAddonIdSsoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdSsoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].sso.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfAddonsAddonIdSsoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfAddonsAddonIdSso<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['sso']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['sso']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdSsoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfAddonsAddonIdSsoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfAddonsAddonIdTagsQueryKey(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
) {
  return ['self', '/self/addons/:addonId/tags', args] as const
}

export function getSelfAddonsAddonIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
  >({
    queryKey: getSelfAddonsAddonIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.addons[':addonId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
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
      ...getSelfAddonsAddonIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfAddonsAddonIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.addons)[':addonId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfAddonsAddonIdTagsQueryKey>
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
      ...getSelfAddonsAddonIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfAddonsAddonIdTagsTagMutationKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'PUT'] as const
}

export function getPutSelfAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].tags[':tag'].$put(args, options))
    },
  })
}

export function usePutSelfAddonsAddonIdTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfAddonsAddonIdTagsTagMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfAddonsAddonIdTagsTagMutationKey() {
  return ['self', '/self/addons/:addonId/tags/:tag', 'DELETE'] as const
}

export function getDeleteSelfAddonsAddonIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfAddonsAddonIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
    ) {
      return parseResponse(client.self.addons[':addonId'].tags[':tag'].$delete(args, options))
    },
  })
}

export function useDeleteSelfAddonsAddonIdTagsTag<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.addons)[':addonId']['tags'][':tag']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfAddonsAddonIdTagsTagMutationOptions<
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

export function getSelfApplicationsQueryKey() {
  return ['self', '/self/applications'] as const
}

export function getSelfApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsQueryKey>
  >({
    queryKey: getSelfApplicationsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfApplicationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfApplications<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfApplicationsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSelfApplicationsMutationKey() {
  return ['self', '/self/applications', 'POST'] as const
}

export function getPostSelfApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self.applications.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.applications.$post>) {
      return parseResponse(client.self.applications.$post(args, options))
    },
  })
}

export function usePostSelfApplications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.applications.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.self.applications.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfApplicationsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfApplicationsAppIdQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
) {
  return ['self', '/self/applications/:appId', args] as const
}

export function getSelfApplicationsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdQueryKey>
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
      ...getSelfApplicationsAppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdQueryKey>
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
      ...getSelfApplicationsAppIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdMutationKey() {
  return ['self', '/self/applications/:appId', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.applications)[':appId']['$put']>) {
      return parseResponse(client.self.applications[':appId'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfApplicationsAppIdMutationKey() {
  return ['self', '/self/applications/:appId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
    ) {
      return parseResponse(client.self.applications[':appId'].$delete(args, options))
    },
  })
}

export function useDeleteSelfApplicationsAppId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfApplicationsAppIdMutationOptions<TError, TOnMutateResult>(
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

export function getSelfApplicationsAppIdAddonsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
) {
  return ['self', '/self/applications/:appId/addons', args] as const
}

export function getSelfApplicationsAppIdAddonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdAddonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].addons.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
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
      ...getSelfApplicationsAppIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdAddons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdAddonsQueryKey>
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
      ...getSelfApplicationsAppIdAddonsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfApplicationsAppIdAddonsMutationKey() {
  return ['self', '/self/applications/:appId/addons', 'POST'] as const
}

export function getPostSelfApplicationsAppIdAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsAppIdAddonsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
    ) {
      return parseResponse(client.self.applications[':appId'].addons.$post(args, options))
    },
  })
}

export function usePostSelfApplicationsAppIdAddons<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['addons']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfApplicationsAppIdAddonsMutationOptions<
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

export function getSelfApplicationsAppIdAddonsEnvQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
) {
  return ['self', '/self/applications/:appId/addons/env', args] as const
}

export function getSelfApplicationsAppIdAddonsEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdAddonsEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].addons.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
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
      ...getSelfApplicationsAppIdAddonsEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdAddonsEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['addons']['env']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdAddonsEnvQueryKey>
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
      ...getSelfApplicationsAppIdAddonsEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdMutationKey() {
  return ['self', '/self/applications/:appId/addons/:addonId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdAddonsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdAddonsAddonIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].addons[':addonId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdAddonsAddonId<
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
                  (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['addons'][':addonId']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdAddonsAddonIdMutationOptions<
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

export function getPutSelfApplicationsAppIdBranchMutationKey() {
  return ['self', '/self/applications/:appId/branch', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdBranchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdBranchMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].branch.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdBranch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['branch']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['branch']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdBranchMutationOptions<
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

export function getSelfApplicationsAppIdBranchesQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
) {
  return ['self', '/self/applications/:appId/branches', args] as const
}

export function getSelfApplicationsAppIdBranchesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdBranchesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].branches.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
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
      ...getSelfApplicationsAppIdBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdBranches<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['branches']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['branches']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdBranchesQueryKey>
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
      ...getSelfApplicationsAppIdBranchesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdBuildflavorMutationKey() {
  return ['self', '/self/applications/:appId/buildflavor', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdBuildflavorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdBuildflavorMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].buildflavor.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdBuildflavor<
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
                ReturnType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['buildflavor']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdBuildflavorMutationOptions<
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

export function getSelfApplicationsAppIdDependenciesQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
) {
  return ['self', '/self/applications/:appId/dependencies', args] as const
}

export function getSelfApplicationsAppIdDependenciesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDependenciesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].dependencies.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
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
      ...getSelfApplicationsAppIdDependenciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdDependencies<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependencies']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['dependencies']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependenciesQueryKey>
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
      ...getSelfApplicationsAppIdDependenciesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdDependenciesEnvQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/dependencies/env', args] as const
}

export function getSelfApplicationsAppIdDependenciesEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDependenciesEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].dependencies.env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
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
      ...getSelfApplicationsAppIdDependenciesEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdDependenciesEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['dependencies']['env']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['dependencies']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependenciesEnvQueryKey>
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
      ...getSelfApplicationsAppIdDependenciesEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].dependencies[':dependencyId'].$put(args, options),
      )
    },
  })
}

export function usePutSelfApplicationsAppIdDependenciesDependencyId<
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
                  (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$put']
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
  const mutationDefaults = getPutSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationKey() {
  return ['self', '/self/applications/:appId/dependencies/:dependencyId', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].dependencies[':dependencyId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdDependenciesDependencyId<
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
                  (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['dependencies'][':dependencyId']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdDependenciesDependencyIdMutationOptions<
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

export function getSelfApplicationsAppIdDependentsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
) {
  return ['self', '/self/applications/:appId/dependents', args] as const
}

export function getSelfApplicationsAppIdDependentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDependentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].dependents.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
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
      ...getSelfApplicationsAppIdDependentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdDependents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['dependents']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['dependents']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDependentsQueryKey>
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
      ...getSelfApplicationsAppIdDependentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdDeploymentsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
) {
  return ['self', '/self/applications/:appId/deployments', args] as const
}

export function getSelfApplicationsAppIdDeploymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDeploymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].deployments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
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
      ...getSelfApplicationsAppIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdDeployments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['deployments']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['deployments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDeploymentsQueryKey>
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
      ...getSelfApplicationsAppIdDeploymentsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/deployments/:deploymentId', args] as const
}

export function getSelfApplicationsAppIdDeploymentsDeploymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].deployments[':deploymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
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
      ...getSelfApplicationsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdDeploymentsDeploymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdDeploymentsDeploymentIdQueryKey>
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
      ...getSelfApplicationsAppIdDeploymentsDeploymentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey() {
  return [
    'self',
    '/self/applications/:appId/deployments/:deploymentId/instances',
    'DELETE',
  ] as const
}

export function getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].deployments[':deploymentId'].instances.$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstances<
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
                  (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['deployments'][':deploymentId']['instances']['$delete']
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
    getDeleteSelfApplicationsAppIdDeploymentsDeploymentIdInstancesMutationOptions<
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

export function getSelfApplicationsAppIdEnvQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
) {
  return ['self', '/self/applications/:appId/env', args] as const
}

export function getSelfApplicationsAppIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
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
      ...getSelfApplicationsAppIdEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdEnvQueryKey>
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
      ...getSelfApplicationsAppIdEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdEnvMutationKey() {
  return ['self', '/self/applications/:appId/env', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].env.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdEnv<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['env']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['env']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdEnvMutationOptions<TError, TOnMutateResult>(
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

export function getPutSelfApplicationsAppIdEnvEnvNameMutationKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['env'][':envName']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].env[':envName'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdEnvEnvName<
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
                ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getDeleteSelfApplicationsAppIdEnvEnvNameMutationKey() {
  return ['self', '/self/applications/:appId/env/:envName', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdEnvEnvNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdEnvEnvNameMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].env[':envName'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdEnvEnvName<
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
                  (typeof client.self.applications)[':appId']['env'][':envName']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['env'][':envName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfApplicationsAppIdEnvEnvNameMutationOptions<
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

export function getSelfApplicationsAppIdExposedEnvQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
) {
  return ['self', '/self/applications/:appId/exposed_env', args] as const
}

export function getSelfApplicationsAppIdExposedEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdExposedEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].exposed_env.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
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
      ...getSelfApplicationsAppIdExposedEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdExposedEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdExposedEnvQueryKey>
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
      ...getSelfApplicationsAppIdExposedEnvQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdExposedEnvMutationKey() {
  return ['self', '/self/applications/:appId/exposed_env', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdExposedEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdExposedEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].exposed_env.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdExposedEnv<
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
                ReturnType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['exposed_env']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdExposedEnvMutationOptions<
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

export function getSelfApplicationsAppIdInstancesQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
) {
  return ['self', '/self/applications/:appId/instances', args] as const
}

export function getSelfApplicationsAppIdInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
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
      ...getSelfApplicationsAppIdInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdInstancesQueryKey>
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
      ...getSelfApplicationsAppIdInstancesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfApplicationsAppIdInstancesMutationKey() {
  return ['self', '/self/applications/:appId/instances', 'POST'] as const
}

export function getPostSelfApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
    ) {
      return parseResponse(client.self.applications[':appId'].instances.$post(args, options))
    },
  })
}

export function usePostSelfApplicationsAppIdInstances<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['instances']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfApplicationsAppIdInstancesMutationOptions<
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

export function getDeleteSelfApplicationsAppIdInstancesMutationKey() {
  return ['self', '/self/applications/:appId/instances', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
    ) {
      return parseResponse(client.self.applications[':appId'].instances.$delete(args, options))
    },
  })
}

export function useDeleteSelfApplicationsAppIdInstances<
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
                ReturnType<(typeof client.self.applications)[':appId']['instances']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['instances']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfApplicationsAppIdInstancesMutationOptions<
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

export function getSelfApplicationsAppIdInstancesInstanceIdQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/instances/:instanceId', args] as const
}

export function getSelfApplicationsAppIdInstancesInstanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdInstancesInstanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].instances[':instanceId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
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
      ...getSelfApplicationsAppIdInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdInstancesInstanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['instances'][':instanceId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdInstancesInstanceIdQueryKey>
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
      ...getSelfApplicationsAppIdInstancesInstanceIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdTagsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
) {
  return ['self', '/self/applications/:appId/tags', args] as const
}

export function getSelfApplicationsAppIdTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
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
      ...getSelfApplicationsAppIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdTagsQueryKey>
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
      ...getSelfApplicationsAppIdTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdTagsTagMutationKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
    ) {
      return parseResponse(client.self.applications[':appId'].tags[':tag'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdTagsTag<
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
                ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdTagsTagMutationOptions<
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

export function getDeleteSelfApplicationsAppIdTagsTagMutationKey() {
  return ['self', '/self/applications/:appId/tags/:tag', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdTagsTagMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdTagsTagMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['tags'][':tag']['$delete']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].tags[':tag'].$delete(args, options))
    },
  })
}

export function useDeleteSelfApplicationsAppIdTagsTag<
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
                ReturnType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['tags'][':tag']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfApplicationsAppIdTagsTagMutationOptions<
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

export function getSelfApplicationsAppIdVhostsQueryKey(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
) {
  return ['self', '/self/applications/:appId/vhosts', args] as const
}

export function getSelfApplicationsAppIdVhostsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdVhostsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
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
      ...getSelfApplicationsAppIdVhostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdVhosts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.applications)[':appId']['vhosts']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdVhostsQueryKey>
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
      ...getSelfApplicationsAppIdVhostsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfApplicationsAppIdVhostsFavouriteQueryKey(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
) {
  return ['self', '/self/applications/:appId/vhosts/favourite', args] as const
}

export function getSelfApplicationsAppIdVhostsFavouriteQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
  >({
    queryKey: getSelfApplicationsAppIdVhostsFavouriteQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.favourite.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
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
      ...getSelfApplicationsAppIdVhostsFavouriteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfApplicationsAppIdVhostsFavourite<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.self.applications)[':appId']['vhosts']['favourite']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfApplicationsAppIdVhostsFavouriteQueryKey>
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
      ...getSelfApplicationsAppIdVhostsFavouriteQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfApplicationsAppIdVhostsFavouriteMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].vhosts.favourite.$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdVhostsFavourite<
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
                  (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['vhosts']['favourite']['$put']
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
  const mutationDefaults = getPutSelfApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getDeleteSelfApplicationsAppIdVhostsFavouriteMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/favourite', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdVhostsFavouriteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdVhostsFavouriteMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].vhosts.favourite.$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdVhostsFavourite<
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
                  (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['vhosts']['favourite']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdVhostsFavouriteMutationOptions<
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

export function getPutSelfApplicationsAppIdVhostsDomainMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'PUT'] as const
}

export function getPutSelfApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']
      >,
    ) {
      return parseResponse(client.self.applications[':appId'].vhosts[':domain'].$put(args, options))
    },
  })
}

export function usePutSelfApplicationsAppIdVhostsDomain<
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
                ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfApplicationsAppIdVhostsDomainMutationOptions<
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

export function getDeleteSelfApplicationsAppIdVhostsDomainMutationKey() {
  return ['self', '/self/applications/:appId/vhosts/:domain', 'DELETE'] as const
}

export function getDeleteSelfApplicationsAppIdVhostsDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfApplicationsAppIdVhostsDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
      >,
    ) {
      return parseResponse(
        client.self.applications[':appId'].vhosts[':domain'].$delete(args, options),
      )
    },
  })
}

export function useDeleteSelfApplicationsAppIdVhostsDomain<
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
                  (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.self.applications)[':appId']['vhosts'][':domain']['$delete']
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
  const mutationDefaults = getDeleteSelfApplicationsAppIdVhostsDomainMutationOptions<
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

export function getPutSelfAvatarMutationKey() {
  return ['self', '/self/avatar', 'PUT'] as const
}

export function getPutSelfAvatarMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>>,
    TError,
    InferRequestType<typeof client.self.avatar.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfAvatarMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.avatar.$put>) {
      return parseResponse(client.self.avatar.$put(args, options))
    },
  })
}

export function usePutSelfAvatar<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.avatar.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.self.avatar.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfAvatarMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutSelfChangePasswordMutationKey() {
  return ['self', '/self/change_password', 'PUT'] as const
}

export function getPutSelfChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfChangePasswordMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.change_password.$put(undefined, options))
    },
  })
}

export function usePutSelfChangePassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.change_password.$put>>>
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
  const mutationDefaults = getPutSelfChangePasswordMutationOptions<TError, TOnMutateResult>(
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

export function getSelfCliTokensQueryKey(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
) {
  return ['self', '/self/cli_tokens', args] as const
}

export function getSelfCliTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self.cli_tokens.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfCliTokensQueryKey>
  >({
    queryKey: getSelfCliTokensQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.cli_tokens.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfCliTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfCliTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfCliTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfCliTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.self.cli_tokens.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.cli_tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfCliTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfCliTokensQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfConfirmationEmailQueryKey() {
  return ['self', '/self/confirmation_email'] as const
}

export function getSelfConfirmationEmailQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConfirmationEmailQueryKey>
  >({
    queryKey: getSelfConfirmationEmailQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.confirmation_email.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfConfirmationEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConfirmationEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfConfirmationEmailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfConfirmationEmail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.confirmation_email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConfirmationEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfConfirmationEmailQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfConsumersQueryKey() {
  return ['self', '/self/consumers'] as const
}

export function getSelfConsumersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersQueryKey>
  >({
    queryKey: getSelfConsumersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumers.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfConsumersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfConsumers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfConsumersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSelfConsumersMutationKey() {
  return ['self', '/self/consumers', 'POST'] as const
}

export function getPostSelfConsumersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.self.consumers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfConsumersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.self.consumers.$post>) {
      return parseResponse(client.self.consumers.$post(args, options))
    },
  })
}

export function usePostSelfConsumers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.self.consumers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfConsumersMutationOptions<TError, TOnMutateResult>(
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

export function getSelfConsumersKeyQueryKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
) {
  return ['self', '/self/consumers/:key', args] as const
}

export function getSelfConsumersKeyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersKeyQueryKey>
  >({
    queryKey: getSelfConsumersKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumers[':key'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfConsumersKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfConsumersKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersKeyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfConsumersKeyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfConsumersKeyMutationKey() {
  return ['self', '/self/consumers/:key', 'PUT'] as const
}

export function getPutSelfConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfConsumersKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.consumers)[':key']['$put']>) {
      return parseResponse(client.self.consumers[':key'].$put(args, options))
    },
  })
}

export function usePutSelfConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.consumers)[':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfConsumersKeyMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfConsumersKeyMutationKey() {
  return ['self', '/self/consumers/:key', 'DELETE'] as const
}

export function getDeleteSelfConsumersKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfConsumersKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.consumers)[':key']['$delete']>) {
      return parseResponse(client.self.consumers[':key'].$delete(args, options))
    },
  })
}

export function useDeleteSelfConsumersKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.consumers)[':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfConsumersKeyMutationOptions<TError, TOnMutateResult>(
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

export function getSelfConsumersKeySecretQueryKey(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
) {
  return ['self', '/self/consumers/:key/secret', args] as const
}

export function getSelfConsumersKeySecretQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumersKeySecretQueryKey>
  >({
    queryKey: getSelfConsumersKeySecretQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumers[':key'].secret.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersKeySecretQueryKey>
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
      ...getSelfConsumersKeySecretQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfConsumersKeySecret<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.consumers)[':key']['secret']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.consumers)[':key']['secret']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumersKeySecretQueryKey>
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
      ...getSelfConsumersKeySecretQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfConsumptionsQueryKey(
  args: InferRequestType<typeof client.self.consumptions.$get>,
) {
  return ['self', '/self/consumptions', args] as const
}

export function getSelfConsumptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self.consumptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfConsumptionsQueryKey>
  >({
    queryKey: getSelfConsumptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.consumptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfConsumptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.self.consumptions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfConsumptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfConsumptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.self.consumptions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.consumptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfConsumptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfConsumptionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfCreditsQueryKey() {
  return ['self', '/self/credits'] as const
}

export function getSelfCreditsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfCreditsQueryKey>
  >({
    queryKey: getSelfCreditsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.credits.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfCreditsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfCredits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.credits.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfCreditsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfCreditsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfEmailsQueryKey() {
  return ['self', '/self/emails'] as const
}

export function getSelfEmailsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfEmailsQueryKey>
  >({
    queryKey: getSelfEmailsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.emails.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfEmailsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfEmails<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.emails.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfEmailsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfEmailsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfEmailsEmailMutationKey() {
  return ['self', '/self/emails/:email', 'PUT'] as const
}

export function getPutSelfEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.emails)[':email']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfEmailsEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.emails)[':email']['$put']>) {
      return parseResponse(client.self.emails[':email'].$put(args, options))
    },
  })
}

export function usePutSelfEmailsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.emails)[':email']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfEmailsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfEmailsEmailMutationKey() {
  return ['self', '/self/emails/:email', 'DELETE'] as const
}

export function getDeleteSelfEmailsEmailMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfEmailsEmailMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.emails)[':email']['$delete']>) {
      return parseResponse(client.self.emails[':email'].$delete(args, options))
    },
  })
}

export function useDeleteSelfEmailsEmail<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.emails)[':email']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.emails)[':email']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfEmailsEmailMutationOptions<TError, TOnMutateResult>(
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

export function getSelfIdQueryKey() {
  return ['self', '/self/id'] as const
}

export function getSelfIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfIdQueryKey>
  >({
    queryKey: getSelfIdQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.id.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelfIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfIdQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.id.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSelfIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfIdQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfInstancesQueryKey() {
  return ['self', '/self/instances'] as const
}

export function getSelfInstancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfInstancesQueryKey>
  >({
    queryKey: getSelfInstancesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.instances.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfInstancesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfInstances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.instances.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfInstancesQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfKeysQueryKey() {
  return ['self', '/self/keys'] as const
}

export function getSelfKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfKeysQueryKey>
  >({
    queryKey: getSelfKeysQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.keys.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.keys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfKeysQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfKeysKeyMutationKey() {
  return ['self', '/self/keys/:key', 'PUT'] as const
}

export function getPutSelfKeysKeyMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.keys)[':key']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.keys)[':key']['$put']>) {
      return parseResponse(client.self.keys[':key'].$put(args, options))
    },
  })
}

export function usePutSelfKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.keys)[':key']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfKeysKeyMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSelfKeysKeyMutationKey() {
  return ['self', '/self/keys/:key', 'DELETE'] as const
}

export function getDeleteSelfKeysKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfKeysKeyMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.keys)[':key']['$delete']>) {
      return parseResponse(client.self.keys[':key'].$delete(args, options))
    },
  })
}

export function useDeleteSelfKeysKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.keys)[':key']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.keys)[':key']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfKeysKeyMutationOptions<TError, TOnMutateResult>(
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

export function getPutSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'PUT'] as const
}

export function getPutSelfMfaKindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$put']>) {
      return parseResponse(client.self.mfa[':kind'].$put(args, options))
    },
  })
}

export function usePutSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfMfaKindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'POST'] as const
}

export function getPostSelfMfaKindMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$post']>) {
      return parseResponse(client.self.mfa[':kind'].$post(args, options))
    },
  })
}

export function usePostSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfMfaKindMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSelfMfaKindMutationKey() {
  return ['self', '/self/mfa/:kind', 'DELETE'] as const
}

export function getDeleteSelfMfaKindMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfMfaKindMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>) {
      return parseResponse(client.self.mfa[':kind'].$delete(args, options))
    },
  })
}

export function useDeleteSelfMfaKind<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self.mfa)[':kind']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfMfaKindMutationOptions<TError, TOnMutateResult>(
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

export function getSelfMfaKindBackupcodesQueryKey(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
) {
  return ['self', '/self/mfa/:kind/backupcodes', args] as const
}

export function getSelfMfaKindBackupcodesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
  >({
    queryKey: getSelfMfaKindBackupcodesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.mfa[':kind'].backupcodes.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfMfaKindBackupcodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
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
      ...getSelfMfaKindBackupcodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfMfaKindBackupcodes<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.mfa)[':kind']['backupcodes']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfMfaKindBackupcodesQueryKey>
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
      ...getSelfMfaKindBackupcodesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostSelfMfaKindConfirmationMutationKey() {
  return ['self', '/self/mfa/:kind/confirmation', 'POST'] as const
}

export function getPostSelfMfaKindConfirmationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSelfMfaKindConfirmationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
    ) {
      return parseResponse(client.self.mfa[':kind'].confirmation.$post(args, options))
    },
  })
}

export function usePostSelfMfaKindConfirmation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.mfa)[':kind']['confirmation']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSelfMfaKindConfirmationMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentInfoQueryKey() {
  return ['self', '/self/payment-info'] as const
}

export function getSelfPaymentInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentInfoQueryKey>
  >({
    queryKey: getSelfPaymentInfoQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self['payment-info'].$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.self)['payment-info']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentInfoQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfPaymentsBillingsQueryKey() {
  return ['self', '/self/payments/billings'] as const
}

export function getSelfPaymentsBillingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsQueryKey>
  >({
    queryKey: getSelfPaymentsBillingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.billings.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsBillings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentsBillingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsBillings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentsBillingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSelfPaymentsBillingsMutationKey() {
  return ['self', '/self/payments/billings', 'POST'] as const
}

export function getPostSelfPaymentsBillingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSelfPaymentsBillingsMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.billings.$post(undefined, options))
    },
  })
}

export function usePostSelfPaymentsBillings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.billings.$post>>>
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
  const mutationDefaults = getPostSelfPaymentsBillingsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsBillingsBidQueryKey(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
) {
  return ['self', '/self/payments/billings/:bid', args] as const
}

export function getSelfPaymentsBillingsBidQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
  >({
    queryKey: getSelfPaymentsBillingsBidQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.billings[':bid'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
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
      ...getSelfPaymentsBillingsBidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsBillingsBid<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsBidQueryKey>
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
      ...getSelfPaymentsBillingsBidQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutSelfPaymentsBillingsBidMutationKey() {
  return ['self', '/self/payments/billings/:bid', 'PUT'] as const
}

export function getPutSelfPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
    ) {
      return parseResponse(client.self.payments.billings[':bid'].$put(args, options))
    },
  })
}

export function usePutSelfPaymentsBillingsBid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.payments.billings)[':bid']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSelfPaymentsBillingsBidMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfPaymentsBillingsBidMutationKey() {
  return ['self', '/self/payments/billings/:bid', 'DELETE'] as const
}

export function getDeleteSelfPaymentsBillingsBidMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsBillingsBidMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
    ) {
      return parseResponse(client.self.payments.billings[':bid'].$delete(args, options))
    },
  })
}

export function useDeleteSelfPaymentsBillingsBid<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.payments.billings)[':bid']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfPaymentsBillingsBidMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsBillingsBidPdfQueryKey(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
) {
  return ['self', '/self/payments/billings/:bid.pdf', args] as const
}

export function getSelfPaymentsBillingsBidPdfQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
  >({
    queryKey: getSelfPaymentsBillingsBidPdfQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.billings[':bid.pdf'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
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
      ...getSelfPaymentsBillingsBidPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsBillingsBidPdf<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.billings)[':bid.pdf']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsBillingsBidPdfQueryKey>
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
      ...getSelfPaymentsBillingsBidPdfQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfPaymentsFullpricePriceQueryKey(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
) {
  return ['self', '/self/payments/fullprice/:price', args] as const
}

export function getSelfPaymentsFullpricePriceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
  >({
    queryKey: getSelfPaymentsFullpricePriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.fullprice[':price'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
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
      ...getSelfPaymentsFullpricePriceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsFullpricePrice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.self.payments.fullprice)[':price']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.fullprice)[':price']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsFullpricePriceQueryKey>
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
      ...getSelfPaymentsFullpricePriceQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getSelfPaymentsMethodsQueryKey() {
  return ['self', '/self/payments/methods'] as const
}

export function getSelfPaymentsMethodsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMethodsQueryKey>
  >({
    queryKey: getSelfPaymentsMethodsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.methods.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentsMethodsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsMethods<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMethodsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentsMethodsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSelfPaymentsMethodsMutationKey() {
  return ['self', '/self/payments/methods', 'POST'] as const
}

export function getPostSelfPaymentsMethodsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostSelfPaymentsMethodsMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.methods.$post(undefined, options))
    },
  })
}

export function usePostSelfPaymentsMethods<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.$post>>>
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
  const mutationDefaults = getPostSelfPaymentsMethodsMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsMethodsDefaultQueryKey() {
  return ['self', '/self/payments/methods/default'] as const
}

export function getSelfPaymentsMethodsDefaultQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
  >({
    queryKey: getSelfPaymentsMethodsDefaultQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.methods.default.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentsMethodsDefaultQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsMethodsDefault<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.methods.default.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMethodsDefaultQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentsMethodsDefaultQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfPaymentsMethodsDefaultMutationKey() {
  return ['self', '/self/payments/methods/default', 'PUT'] as const
}

export function getPutSelfPaymentsMethodsDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsMethodsDefaultMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.methods.default.$put(undefined, options))
    },
  })
}

export function usePutSelfPaymentsMethodsDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.methods.default.$put>>
            >
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
  const mutationDefaults = getPutSelfPaymentsMethodsDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfPaymentsMethodsMIdMutationKey() {
  return ['self', '/self/payments/methods/:mId', 'DELETE'] as const
}

export function getDeleteSelfPaymentsMethodsMIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsMethodsMIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
    ) {
      return parseResponse(client.self.payments.methods[':mId'].$delete(args, options))
    },
  })
}

export function useDeleteSelfPaymentsMethodsMId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.payments.methods)[':mId']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.payments.methods)[':mId']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfPaymentsMethodsMIdMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsMonthlyinvoiceQueryKey() {
  return ['self', '/self/payments/monthlyinvoice'] as const
}

export function getSelfPaymentsMonthlyinvoiceQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
  >({
    queryKey: getSelfPaymentsMonthlyinvoiceQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.monthlyinvoice.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentsMonthlyinvoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsMonthlyinvoice<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsMonthlyinvoiceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentsMonthlyinvoiceQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationKey() {
  return ['self', '/self/payments/monthlyinvoice/maxcredit', 'PUT'] as const
}

export function getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
        >
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.monthlyinvoice.maxcredit.$put(undefined, options))
    },
  })
}

export function usePutSelfPaymentsMonthlyinvoiceMaxcredit<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.monthlyinvoice.maxcredit.$put>>
            >
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
  const mutationDefaults = getPutSelfPaymentsMonthlyinvoiceMaxcreditMutationOptions<
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

export function getSelfPaymentsRecurringQueryKey() {
  return ['self', '/self/payments/recurring'] as const
}

export function getSelfPaymentsRecurringQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsRecurringQueryKey>
  >({
    queryKey: getSelfPaymentsRecurringQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.recurring.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsRecurringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentsRecurringQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsRecurring<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsRecurringQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentsRecurringQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSelfPaymentsRecurringMutationKey() {
  return ['self', '/self/payments/recurring', 'DELETE'] as const
}

export function getDeleteSelfPaymentsRecurringMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfPaymentsRecurringMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.payments.recurring.$delete(undefined, options))
    },
  })
}

export function useDeleteSelfPaymentsRecurring<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.recurring.$delete>>>
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
  const mutationDefaults = getDeleteSelfPaymentsRecurringMutationOptions<TError, TOnMutateResult>(
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

export function getSelfPaymentsTokensStripeQueryKey() {
  return ['self', '/self/payments/tokens/stripe'] as const
}

export function getSelfPaymentsTokensStripeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
  >({
    queryKey: getSelfPaymentsTokensStripeQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.payments.tokens.stripe.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSelfPaymentsTokensStripe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfPaymentsTokensStripeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfPaymentsTokensStripe<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.self.payments.tokens.stripe.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfPaymentsTokensStripeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfPaymentsTokensStripeQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSelfTokensQueryKey() {
  return ['self', '/self/tokens'] as const
}

export function getSelfTokensQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSelfTokensQueryKey>
  >({
    queryKey: getSelfTokensQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.self.tokens.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfTokens<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSelfTokensQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfTokensQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSelfTokensMutationKey() {
  return ['self', '/self/tokens', 'DELETE'] as const
}

export function getDeleteSelfTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfTokensMutationKey(),
    async mutationFn() {
      return parseResponse(client.self.tokens.$delete(undefined, options))
    },
  })
}

export function useDeleteSelfTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.tokens.$delete>>>>
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
  const mutationDefaults = getDeleteSelfTokensMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSelfTokensTokenMutationKey() {
  return ['self', '/self/tokens/:token', 'DELETE'] as const
}

export function getDeleteSelfTokensTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSelfTokensTokenMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.self.tokens)[':token']['$delete']>) {
      return parseResponse(client.self.tokens[':token'].$delete(args, options))
    },
  })
}

export function useDeleteSelfTokensToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.self.tokens)[':token']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.self.tokens)[':token']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSelfTokensTokenMutationOptions<TError, TOnMutateResult>(
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

export function getSelfValidateEmailQueryKey(
  args: InferRequestType<typeof client.self.validate_email.$get>,
) {
  return ['self', '/self/validate_email', args] as const
}

export function getSelfValidateEmailQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.self.validate_email.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSelfValidateEmailQueryKey>
  >({
    queryKey: getSelfValidateEmailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.self.validate_email.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSelfValidateEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.self.validate_email.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfValidateEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSelfValidateEmailQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSelfValidateEmail<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.self.validate_email.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.self.validate_email.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSelfValidateEmailQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSelfValidateEmailQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSummaryQueryKey() {
  return ['summary', '/summary'] as const
}

export function getSummaryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSummaryQueryKey>
  >({
    queryKey: getSummaryQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.summary.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSummary<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.summary.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSummaryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSummaryQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostUsersMutationKey() {
  return ['users', '/users', 'POST'] as const
}

export function getPostUsersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
    TError,
    InferRequestType<typeof client.users.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostUsersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.users.$post>) {
      return parseResponse(client.users.$post(args, options))
    },
  })
}

export function usePostUsers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.$post>>>>>,
        TError,
        InferRequestType<typeof client.users.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUsersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUsersIdQueryKey(args: InferRequestType<(typeof client.users)[':id']['$get']>) {
  return ['users', '/users/:id', args] as const
}

export function getUsersIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.users)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdQueryKey>
  >({
    queryKey: getUsersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.users)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersIdApplicationsQueryKey(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
) {
  return ['users', '/users/:id/applications', args] as const
}

export function getUsersIdApplicationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersIdApplicationsQueryKey>
  >({
    queryKey: getUsersIdApplicationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':id'].applications.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersIdApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersIdApplications<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':id']['applications']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':id']['applications']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersIdApplicationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersIdApplicationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getUsersUserIdGitInfoQueryKey(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
) {
  return ['users', '/users/:userId/git-info', args] as const
}

export function getUsersUserIdGitInfoQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUserIdGitInfoQueryKey>
  >({
    queryKey: getUsersUserIdGitInfoQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.users[':userId']['git-info'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useUsersUserIdGitInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGitInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getUsersUserIdGitInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseUsersUserIdGitInfo<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.users)[':userId']['git-info']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.users)[':userId']['git-info']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getUsersUserIdGitInfoQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getUsersUserIdGitInfoQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV2ProvidersAddonMatomoResourcesMutationKey() {
  return ['v2', '/v2/providers/addon-matomo/resources', 'POST'] as const
}

export function getPostV2ProvidersAddonMatomoResourcesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2ProvidersAddonMatomoResourcesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
    ) {
      return parseResponse(client.v2.providers['addon-matomo'].resources.$post(args, options))
    },
  })
}

export function usePostV2ProvidersAddonMatomoResources<
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
                ReturnType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v2.providers)['addon-matomo']['resources']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV2ProvidersAddonMatomoResourcesMutationOptions<
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

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationKey() {
  return ['v2', '/v2/providers/addon-matomo/resources/:matomoId', 'DELETE'] as const
}

export function getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v2.providers['addon-matomo'].resources[':matomoId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV2ProvidersAddonMatomoResourcesMatomoId<
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
                  (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v2.providers)['addon-matomo']['resources'][':matomoId']['$delete']
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
  const mutationDefaults = getDeleteV2ProvidersAddonMatomoResourcesMatomoIdMutationOptions<
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

export function getV3LogsAppIdQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
) {
  return ['v3', '/v3/logs/:appId', args] as const
}

export function getV3LogsAppIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdQueryKey>
  >({
    queryKey: getV3LogsAppIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV3LogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3LogsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3LogsAppId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3LogsAppIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getV3LogsAppIdDrainsQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/drains', args] as const
}

export function getV3LogsAppIdDrainsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
  >({
    queryKey: getV3LogsAppIdDrainsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId'].drains.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3LogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV3LogsAppIdDrainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV3LogsAppIdDrains<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdDrainsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV3LogsAppIdDrainsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostV3LogsAppIdDrainsMutationKey() {
  return ['v3', '/v3/logs/:appId/drains', 'POST'] as const
}

export function getPostV3LogsAppIdDrainsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3LogsAppIdDrainsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>) {
      return parseResponse(client.v3.logs[':appId'].drains.$post(args, options))
    },
  })
}

export function usePostV3LogsAppIdDrains<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.logs)[':appId']['drains']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV3LogsAppIdDrainsMutationOptions<TError, TOnMutateResult>(
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

export function getV3LogsAppIdDrainsIdOrUrlQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', args] as const
}

export function getV3LogsAppIdDrainsIdOrUrlQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
  >({
    queryKey: getV3LogsAppIdDrainsIdOrUrlQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId'].drains[':idOrUrl'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3LogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
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
      ...getV3LogsAppIdDrainsIdOrUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3LogsAppIdDrainsIdOrUrl<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdDrainsIdOrUrlQueryKey>
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
      ...getV3LogsAppIdDrainsIdOrUrlQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlMutationKey() {
  return ['v3', '/v3/logs/:appId/drains/:idOrUrl', 'DELETE'] as const
}

export function getDeleteV3LogsAppIdDrainsIdOrUrlMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3LogsAppIdDrainsIdOrUrlMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
    ) {
      return parseResponse(client.v3.logs[':appId'].drains[':idOrUrl'].$delete(args, options))
    },
  })
}

export function useDeleteV3LogsAppIdDrainsIdOrUrl<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v3.logs)[':appId']['drains'][':idOrUrl']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV3LogsAppIdDrainsIdOrUrlMutationOptions<
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

export function getV3LogsAppIdLogsChunkedQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/logs-chunked', args] as const
}

export function getV3LogsAppIdLogsChunkedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
  >({
    queryKey: getV3LogsAppIdLogsChunkedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId']['logs-chunked'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3LogsAppIdLogsChunked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
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
      ...getV3LogsAppIdLogsChunkedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3LogsAppIdLogsChunked<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-chunked']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdLogsChunkedQueryKey>
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
      ...getV3LogsAppIdLogsChunkedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV3LogsAppIdLogsSocketQueryKey(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
) {
  return ['v3', '/v3/logs/:appId/logs-socket', args] as const
}

export function getV3LogsAppIdLogsSocketQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
  >({
    queryKey: getV3LogsAppIdLogsSocketQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.logs[':appId']['logs-socket'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV3LogsAppIdLogsSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
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
      ...getV3LogsAppIdLogsSocketQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV3LogsAppIdLogsSocket<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.logs)[':appId']['logs-socket']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3LogsAppIdLogsSocketQueryKey>
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
      ...getV3LogsAppIdLogsSocketQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/addons/:matomoId', args] as const
}

export function getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
  >({
    queryKey: getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['addon-matomo'].addons[':matomoId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4AddonProvidersAddonMatomoAddonsMatomoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
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
      ...getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4AddonProvidersAddonMatomoAddonsMatomoId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['addon-matomo']['addons'][':matomoId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryKey>
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
      ...getV4AddonProvidersAddonMatomoAddonsMatomoIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4AddonProvidersAddonMatomoTokenValidateQueryKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
) {
  return ['v4', '/v4/addon-providers/addon-matomo/token/validate', args] as const
}

export function getV4AddonProvidersAddonMatomoTokenValidateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
  >({
    queryKey: getV4AddonProvidersAddonMatomoTokenValidateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['addon-matomo'].token.validate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4AddonProvidersAddonMatomoTokenValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
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
      ...getV4AddonProvidersAddonMatomoTokenValidateQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4AddonProvidersAddonMatomoTokenValidate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['addon-matomo']['token']['validate']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersAddonMatomoTokenValidateQueryKey>
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
      ...getV4AddonProvidersAddonMatomoTokenValidateQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId',
    args,
  ] as const
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
  >({
    queryKey: getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV4AddonProvidersConfigProviderAddonsConfigurationProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
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
      ...getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4AddonProvidersConfigProviderAddonsConfigurationProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryKey>
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
      ...getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
) {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    args,
  ] as const
}

export function getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey>
  >({
    queryKey: getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey>
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
      ...getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryKey>
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
      ...getV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationKey() {
  return [
    'v4',
    '/v4/addon-providers/config-provider/addons/:configurationProviderId/env',
    'PUT',
  ] as const
}

export function getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
      >,
    ) {
      return parseResponse(
        client.v4['addon-providers']['config-provider'].addons[':configurationProviderId'].env.$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnv<
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
                  (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v4)['addon-providers']['config-provider']['addons'][':configurationProviderId']['env']['$put']
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
    getPutV4AddonProvidersConfigProviderAddonsConfigurationProviderIdEnvMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
) {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', args] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryKey>
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationKey() {
  return ['v4', '/v4/networkgroups/organisations/:ownerId/networkgroups', 'POST'] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups.$post(args, options),
      )
    },
  })
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroups<
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
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups']['$post']
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
  const mutationDefaults = getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey>
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey>
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryKey>
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupId<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMutationOptions<
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

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers',
    'POST',
  ] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
          'external-peers'
        ].$post(args, options),
      )
    },
  })
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeers<
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
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers']['$post']
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
    getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersMutationOptions<
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

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/external-peers/:peerId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'][
          'external-peers'
        ][':peerId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerId<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['external-peers'][':peerId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdExternalPeersPeerIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].members.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members',
    'POST',
  ] as const
}

export function getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].members.$post(args, options),
      )
    },
  })
}

export function usePostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembers<
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
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members']['$post']
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
    getPostV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
          ':memberId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/members/:memberId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].members[
          ':memberId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberId<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['members'][':memberId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdMembersMemberIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
    >
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].peers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationKey() {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId',
    'DELETE',
  ] as const
}

export function getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerId<
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
                    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['$delete']
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
    getDeleteV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdMutationOptions<
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

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].wireguard.configuration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfiguration<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/peers/:peerId/wireguard/configuration/stream',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
    >
  >({
    queryKey:
      getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[':networkGroupId'].peers[
          ':peerId'
        ].wireguard.configuration.stream.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['peers'][':peerId']['wireguard']['configuration']['stream']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdPeersPeerIdWireguardConfigurationStreamQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
) {
  return [
    'v4',
    '/v4/networkgroups/organisations/:ownerId/networkgroups/:networkGroupId/stream',
    args,
  ] as const
}

export function getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
    >
  >({
    queryKey: getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.networkgroups.organisations[':ownerId'].networkgroups[
          ':networkGroupId'
        ].stream.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStream<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.v4.networkgroups.organisations)[':ownerId']['networkgroups'][':networkGroupId']['stream']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryKey
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
      ...getV4NetworkgroupsOrganisationsOwnerIdNetworkgroupsNetworkGroupIdStreamQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostVendorAddonsMutationKey() {
  return ['vendor', '/vendor//addons', 'POST'] as const
}

export function getPostVendorAddonsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostVendorAddonsMutationKey(),
    async mutationFn() {
      return parseResponse(client.vendor.addons.$post(undefined, options))
    },
  })
}

export function usePostVendorAddons<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.addons.$post>>>>
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
  const mutationDefaults = getPostVendorAddonsMutationOptions<TError, TOnMutateResult>(
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

export function getVendorAppsAddonIdLogscollectorQueryKey(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
) {
  return ['vendor', '/vendor//apps/:addonId/logscollector', args] as const
}

export function getVendorAppsAddonIdLogscollectorQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
  >({
    queryKey: getVendorAppsAddonIdLogscollectorQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vendor.apps[':addonId'].logscollector.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVendorAppsAddonIdLogscollector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
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
      ...getVendorAppsAddonIdLogscollectorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseVendorAppsAddonIdLogscollector<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['logscollector']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsAddonIdLogscollectorQueryKey>
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
      ...getVendorAppsAddonIdLogscollectorQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getVendorAppsQueryKey(args: InferRequestType<typeof client.vendor.apps.$get>) {
  return ['vendor', '/vendor/apps', args] as const
}

export function getVendorAppsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vendor.apps.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVendorAppsQueryKey>
  >({
    queryKey: getVendorAppsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vendor.apps.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVendorApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vendor.apps.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVendorAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVendorApps<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vendor.apps.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vendor.apps.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVendorAppsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVendorAppsAddonIdQueryKey(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
) {
  return ['vendor', '/vendor/apps/:addonId', args] as const
}

export function getVendorAppsAddonIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getVendorAppsAddonIdQueryKey>
  >({
    queryKey: getVendorAppsAddonIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vendor.apps[':addonId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useVendorAppsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVendorAppsAddonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVendorAppsAddonId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getVendorAppsAddonIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVendorAppsAddonIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutVendorAppsAddonIdMutationKey() {
  return ['vendor', '/vendor/apps/:addonId', 'PUT'] as const
}

export function getPutVendorAppsAddonIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVendorAppsAddonIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>) {
      return parseResponse(client.vendor.apps[':addonId'].$put(args, options))
    },
  })
}

export function usePutVendorAppsAddonId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vendor.apps)[':addonId']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVendorAppsAddonIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostVendorAppsAddonIdConsumptionsMutationKey() {
  return ['vendor', '/vendor/apps/:addonId/consumptions', 'POST'] as const
}

export function getPostVendorAppsAddonIdConsumptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostVendorAppsAddonIdConsumptionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
    ) {
      return parseResponse(client.vendor.apps[':addonId'].consumptions.$post(args, options))
    },
  })
}

export function usePostVendorAppsAddonIdConsumptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vendor.apps)[':addonId']['consumptions']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostVendorAppsAddonIdConsumptionsMutationOptions<
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

export function getPutVendorAppsAddonIdMigrationCallbackMutationKey() {
  return ['vendor', '/vendor/apps/:addonId/migration_callback', 'PUT'] as const
}

export function getPutVendorAppsAddonIdMigrationCallbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutVendorAppsAddonIdMigrationCallbackMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
    ) {
      return parseResponse(client.vendor.apps[':addonId'].migration_callback.$put(args, options))
    },
  })
}

export function usePutVendorAppsAddonIdMigrationCallback<
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
                ReturnType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.vendor.apps)[':addonId']['migration_callback']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutVendorAppsAddonIdMigrationCallbackMutationOptions<
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
