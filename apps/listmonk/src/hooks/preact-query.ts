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

export function getAdminKey() {
  return ['admin'] as const
}

export function getBouncesKey() {
  return ['bounces'] as const
}

export function getCampaignsKey() {
  return ['campaigns'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getDashboardKey() {
  return ['dashboard'] as const
}

export function getHealthKey() {
  return ['health'] as const
}

export function getImportKey() {
  return ['import'] as const
}

export function getLangKey() {
  return ['lang'] as const
}

export function getListsKey() {
  return ['lists'] as const
}

export function getLogsKey() {
  return ['logs'] as const
}

export function getMaintenanceKey() {
  return ['maintenance'] as const
}

export function getMediaKey() {
  return ['media'] as const
}

export function getPublicKey() {
  return ['public'] as const
}

export function getSettingsKey() {
  return ['settings'] as const
}

export function getSubscribersKey() {
  return ['subscribers'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getTxKey() {
  return ['tx'] as const
}

export function getHealthQueryKey() {
  return ['health', '/health'] as const
}

export function getHealthQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getHealthQueryKey>
  >({
    queryKey: getHealthQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.health.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseHealth<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.health.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getHealthQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getHealthQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getConfigQueryKey() {
  return ['config', '/config'] as const
}

export function getConfigQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getConfigQueryKey>
  >({
    queryKey: getConfigQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.config.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseConfig<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getConfigQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getLangLangQueryKey(args: InferRequestType<(typeof client.lang)[':lang']['$get']>) {
  return ['lang', '/lang/:lang', args] as const
}

export function getLangLangQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lang)[':lang']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.lang)[':lang']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lang)[':lang']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLangLangQueryKey>
  >({
    queryKey: getLangLangQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lang[':lang'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLangLang<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lang)[':lang']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lang)[':lang']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lang)[':lang']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLangLangQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLangLangQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLangLang<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lang)[':lang']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lang)[':lang']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lang)[':lang']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLangLangQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLangLangQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDashboardChartsQueryKey() {
  return ['dashboard', '/dashboard/charts'] as const
}

export function getDashboardChartsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.charts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.charts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardChartsQueryKey>
  >({
    queryKey: getDashboardChartsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.charts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDashboardCharts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.charts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.charts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardChartsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardChartsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboardCharts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.charts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.charts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardChartsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardChartsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDashboardCountsQueryKey() {
  return ['dashboard', '/dashboard/counts'] as const
}

export function getDashboardCountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.counts.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.counts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDashboardCountsQueryKey>
  >({
    queryKey: getDashboardCountsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.dashboard.counts.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDashboardCounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.counts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.counts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardCountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDashboardCountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDashboardCounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.counts.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dashboard.counts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDashboardCountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDashboardCountsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSettingsQueryKey() {
  return ['settings', '/settings'] as const
}

export function getSettingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSettingsQueryKey>
  >({
    queryKey: getSettingsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.settings.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSettings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getSettingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSettingsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSettingsMutationKey() {
  return ['settings', '/settings', 'PUT'] as const
}

export function getPutSettingsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
    TError,
    InferRequestType<typeof client.settings.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSettingsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.$put>) {
      return parseResponse(client.settings.$put(args, options))
    },
  })
}

export function usePutSettings<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.$put>>>>>,
        TError,
        InferRequestType<typeof client.settings.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSettingsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostSettingsSmtpTestMutationKey() {
  return ['settings', '/settings/smtp/test', 'POST'] as const
}

export function getPostSettingsSmtpTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.settings.smtp.test.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.settings.smtp.test.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSettingsSmtpTestMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.settings.smtp.test.$post>) {
      return parseResponse(client.settings.smtp.test.$post(args, options))
    },
  })
}

export function usePostSettingsSmtpTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.settings.smtp.test.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.settings.smtp.test.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSettingsSmtpTestMutationOptions<TError, TOnMutateResult>(
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

export function getPostAdminReloadMutationKey() {
  return ['admin', '/admin/reload', 'POST'] as const
}

export function getPostAdminReloadMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reload.$post>>>>
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostAdminReloadMutationKey(),
    async mutationFn() {
      return parseResponse(client.admin.reload.$post(undefined, options))
    },
  })
}

export function usePostAdminReload<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.admin.reload.$post>>>>
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
  const mutationDefaults = getPostAdminReloadMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLogsQueryKey() {
  return ['logs', '/logs'] as const
}

export function getLogsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getLogsQueryKey>
  >({
    queryKey: getLogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.logs.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getLogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLogs<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.logs.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getLogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscribersQueryKey(args: InferRequestType<typeof client.subscribers.$get>) {
  return ['subscribers', '/subscribers', args] as const
}

export function getSubscribersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.subscribers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSubscribersQueryKey>
  >({
    queryKey: getSubscribersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscribers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscribers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscribers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscribersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscribers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.subscribers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscribersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostSubscribersMutationKey() {
  return ['subscribers', '/subscribers', 'POST'] as const
}

export function getPostSubscribersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$post>>>>>,
    TError,
    InferRequestType<typeof client.subscribers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.$post>) {
      return parseResponse(client.subscribers.$post(args, options))
    },
  })
}

export function usePostSubscribers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.subscribers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscribersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteSubscribersMutationKey() {
  return ['subscribers', '/subscribers', 'DELETE'] as const
}

export function getDeleteSubscribersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$delete>>>>
    >,
    TError,
    InferRequestType<typeof client.subscribers.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscribersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.$delete>) {
      return parseResponse(client.subscribers.$delete(args, options))
    },
  })
}

export function useDeleteSubscribers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.subscribers.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubscribersMutationOptions<TError, TOnMutateResult>(
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

export function getSubscribersIdQueryKey(
  args: InferRequestType<(typeof client.subscribers)[':id']['$get']>,
) {
  return ['subscribers', '/subscribers/:id', args] as const
}

export function getSubscribersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscribersIdQueryKey>
  >({
    queryKey: getSubscribersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscribers[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSubscribersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscribersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscribersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscribersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutSubscribersIdMutationKey() {
  return ['subscribers', '/subscribers/:id', 'PUT'] as const
}

export function getPutSubscribersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscribers)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscribers)[':id']['$put']>) {
      return parseResponse(client.subscribers[':id'].$put(args, options))
    },
  })
}

export function usePutSubscribersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.subscribers)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteSubscribersIdMutationKey() {
  return ['subscribers', '/subscribers/:id', 'DELETE'] as const
}

export function getDeleteSubscribersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscribers)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscribersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscribers)[':id']['$delete']>) {
      return parseResponse(client.subscribers[':id'].$delete(args, options))
    },
  })
}

export function useDeleteSubscribersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.subscribers)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubscribersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubscribersListsMutationKey() {
  return ['subscribers', '/subscribers/lists', 'PUT'] as const
}

export function getPutSubscribersListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.lists.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.subscribers.lists.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.lists.$put>) {
      return parseResponse(client.subscribers.lists.$put(args, options))
    },
  })
}

export function usePutSubscribersLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.lists.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subscribers.lists.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersListsMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubscribersListsIdMutationKey() {
  return ['subscribers', '/subscribers/lists/:id', 'PUT'] as const
}

export function getPutSubscribersListsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.subscribers.lists)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.subscribers.lists)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersListsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscribers.lists)[':id']['$put']>) {
      return parseResponse(client.subscribers.lists[':id'].$put(args, options))
    },
  })
}

export function usePutSubscribersListsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers.lists)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscribers.lists)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersListsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubscribersBlocklistMutationKey() {
  return ['subscribers', '/subscribers/blocklist', 'PUT'] as const
}

export function getPutSubscribersBlocklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.blocklist.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscribers.blocklist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersBlocklistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.blocklist.$put>) {
      return parseResponse(client.subscribers.blocklist.$put(args, options))
    },
  })
}

export function usePutSubscribersBlocklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.blocklist.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subscribers.blocklist.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersBlocklistMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubscribersIdBlocklistMutationKey() {
  return ['subscribers', '/subscribers/:id/blocklist', 'PUT'] as const
}

export function getPutSubscribersIdBlocklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscribers)[':id']['blocklist']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscribers)[':id']['blocklist']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersIdBlocklistMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscribers)[':id']['blocklist']['$put']>,
    ) {
      return parseResponse(client.subscribers[':id'].blocklist.$put(args, options))
    },
  })
}

export function usePutSubscribersIdBlocklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['blocklist']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscribers)[':id']['blocklist']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersIdBlocklistMutationOptions<TError, TOnMutateResult>(
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

export function getSubscribersIdExportQueryKey(
  args: InferRequestType<(typeof client.subscribers)[':id']['export']['$get']>,
) {
  return ['subscribers', '/subscribers/:id/export', args] as const
}

export function getSubscribersIdExportQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscribers)[':id']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscribers)[':id']['export']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscribersIdExportQueryKey>
  >({
    queryKey: getSubscribersIdExportQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscribers[':id'].export.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscribersIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscribers)[':id']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['export']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersIdExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscribersIdExportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscribersIdExport<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscribers)[':id']['export']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['export']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['export']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersIdExportQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscribersIdExportQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSubscribersIdBouncesQueryKey(
  args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$get']>,
) {
  return ['subscribers', '/subscribers/:id/bounces', args] as const
}

export function getSubscribersIdBouncesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSubscribersIdBouncesQueryKey>
  >({
    queryKey: getSubscribersIdBouncesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.subscribers[':id'].bounces.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useSubscribersIdBounces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersIdBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSubscribersIdBouncesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSubscribersIdBounces<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSubscribersIdBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSubscribersIdBouncesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteSubscribersIdBouncesMutationKey() {
  return ['subscribers', '/subscribers/:id/bounces', 'DELETE'] as const
}

export function getDeleteSubscribersIdBouncesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscribers)[':id']['bounces']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSubscribersIdBouncesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.subscribers)[':id']['bounces']['$delete']>,
    ) {
      return parseResponse(client.subscribers[':id'].bounces.$delete(args, options))
    },
  })
}

export function useDeleteSubscribersIdBounces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['bounces']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscribers)[':id']['bounces']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteSubscribersIdBouncesMutationOptions<TError, TOnMutateResult>(
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

export function getPostSubscribersIdOptinMutationKey() {
  return ['subscribers', '/subscribers/:id/optin', 'POST'] as const
}

export function getPostSubscribersIdOptinMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.subscribers)[':id']['optin']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.subscribers)[':id']['optin']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribersIdOptinMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.subscribers)[':id']['optin']['$post']>) {
      return parseResponse(client.subscribers[':id'].optin.$post(args, options))
    },
  })
}

export function usePostSubscribersIdOptin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.subscribers)[':id']['optin']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.subscribers)[':id']['optin']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscribersIdOptinMutationOptions<TError, TOnMutateResult>(
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

export function getPostSubscribersQueryDeleteMutationKey() {
  return ['subscribers', '/subscribers/query/delete', 'POST'] as const
}

export function getPostSubscribersQueryDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.query.delete.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscribers.query.delete.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSubscribersQueryDeleteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.query.delete.$post>) {
      return parseResponse(client.subscribers.query.delete.$post(args, options))
    },
  })
}

export function usePostSubscribersQueryDelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.query.delete.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subscribers.query.delete.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostSubscribersQueryDeleteMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubscribersQueryBlocklistMutationKey() {
  return ['subscribers', '/subscribers/query/blocklist', 'PUT'] as const
}

export function getPutSubscribersQueryBlocklistMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.query.blocklist.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscribers.query.blocklist.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersQueryBlocklistMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.query.blocklist.$put>) {
      return parseResponse(client.subscribers.query.blocklist.$put(args, options))
    },
  })
}

export function usePutSubscribersQueryBlocklist<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.subscribers.query.blocklist.$put>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.subscribers.query.blocklist.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersQueryBlocklistMutationOptions<TError, TOnMutateResult>(
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

export function getPutSubscribersQueryListsMutationKey() {
  return ['subscribers', '/subscribers/query/lists', 'PUT'] as const
}

export function getPutSubscribersQueryListsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.query.lists.$put>>>
      >
    >,
    TError,
    InferRequestType<typeof client.subscribers.query.lists.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSubscribersQueryListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.subscribers.query.lists.$put>) {
      return parseResponse(client.subscribers.query.lists.$put(args, options))
    },
  })
}

export function usePutSubscribersQueryLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.subscribers.query.lists.$put>>>
          >
        >,
        TError,
        InferRequestType<typeof client.subscribers.query.lists.$put>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutSubscribersQueryListsMutationOptions<TError, TOnMutateResult>(
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

export function getBouncesQueryKey(args: InferRequestType<typeof client.bounces.$get>) {
  return ['bounces', '/bounces', args] as const
}

export function getBouncesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.bounces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBouncesQueryKey>
  >({
    queryKey: getBouncesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bounces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bounces.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBouncesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBounces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.bounces.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBouncesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBouncesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBouncesMutationKey() {
  return ['bounces', '/bounces', 'DELETE'] as const
}

export function getDeleteBouncesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$delete>>>>>,
    TError,
    InferRequestType<typeof client.bounces.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBouncesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.bounces.$delete>) {
      return parseResponse(client.bounces.$delete(args, options))
    },
  })
}

export function useDeleteBounces<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bounces.$delete>>>>
        >,
        TError,
        InferRequestType<typeof client.bounces.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBouncesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBouncesIdQueryKey(
  args: InferRequestType<(typeof client.bounces)[':id']['$get']>,
) {
  return ['bounces', '/bounces/:id', args] as const
}

export function getBouncesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.bounces)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBouncesIdQueryKey>
  >({
    queryKey: getBouncesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.bounces[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useBouncesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bounces)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBouncesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getBouncesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseBouncesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.bounces)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getBouncesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getBouncesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteBouncesIdMutationKey() {
  return ['bounces', '/bounces/:id', 'DELETE'] as const
}

export function getDeleteBouncesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.bounces)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBouncesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bounces)[':id']['$delete']>) {
      return parseResponse(client.bounces[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBouncesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.bounces)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.bounces)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBouncesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsQueryKey(args: InferRequestType<typeof client.lists.$get>) {
  return ['lists', '/lists', args] as const
}

export function getListsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.lists.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListsQueryKey>
  >({
    queryKey: getListsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lists.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseLists<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.lists.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostListsMutationKey() {
  return ['lists', '/lists', 'POST'] as const
}

export function getPostListsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
    TError,
    InferRequestType<typeof client.lists.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostListsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.lists.$post>) {
      return parseResponse(client.lists.$post(args, options))
    },
  })
}

export function usePostLists<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.lists.$post>>>>>,
        TError,
        InferRequestType<typeof client.lists.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostListsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListsListIdQueryKey(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
) {
  return ['lists', '/lists/:list_id', args] as const
}

export function getListsListIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListsListIdQueryKey>
  >({
    queryKey: getListsListIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.lists[':list_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListsListIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListsListId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.lists)[':list_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListsListIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListsListIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutListsListIdMutationKey() {
  return ['lists', '/lists/:list_id', 'PUT'] as const
}

export function getPutListsListIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list_id']['$put']>) {
      return parseResponse(client.lists[':list_id'].$put(args, options))
    },
  })
}

export function usePutListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':list_id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutListsListIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteListsListIdMutationKey() {
  return ['lists', '/lists/:list_id', 'DELETE'] as const
}

export function getDeleteListsListIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteListsListIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.lists)[':list_id']['$delete']>) {
      return parseResponse(client.lists[':list_id'].$delete(args, options))
    },
  })
}

export function useDeleteListsListId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.lists)[':list_id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.lists)[':list_id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteListsListIdMutationOptions<TError, TOnMutateResult>(
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

export function getImportSubscribersQueryKey() {
  return ['import', '/import/subscribers'] as const
}

export function getImportSubscribersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getImportSubscribersQueryKey>
  >({
    queryKey: getImportSubscribersQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.import.subscribers.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useImportSubscribers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportSubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImportSubscribersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImportSubscribers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportSubscribersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImportSubscribersQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostImportSubscribersMutationKey() {
  return ['import', '/import/subscribers', 'POST'] as const
}

export function getPostImportSubscribersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.import.subscribers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostImportSubscribersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.import.subscribers.$post>) {
      return parseResponse(client.import.subscribers.$post(args, options))
    },
  })
}

export function usePostImportSubscribers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.import.subscribers.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostImportSubscribersMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteImportSubscribersMutationKey() {
  return ['import', '/import/subscribers', 'DELETE'] as const
}

export function getDeleteImportSubscribersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$delete>>>
      >
    >,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getDeleteImportSubscribersMutationKey(),
    async mutationFn() {
      return parseResponse(client.import.subscribers.$delete(undefined, options))
    },
  })
}

export function useDeleteImportSubscribers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.$delete>>>
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
  const mutationDefaults = getDeleteImportSubscribersMutationOptions<TError, TOnMutateResult>(
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

export function getImportSubscribersLogsQueryKey() {
  return ['import', '/import/subscribers/logs'] as const
}

export function getImportSubscribersLogsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.logs.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.logs.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImportSubscribersLogsQueryKey>
  >({
    queryKey: getImportSubscribersLogsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.import.subscribers.logs.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useImportSubscribersLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportSubscribersLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getImportSubscribersLogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseImportSubscribersLogs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.logs.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.import.subscribers.logs.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getImportSubscribersLogsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getImportSubscribersLogsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getCampaignsQueryKey(args: InferRequestType<typeof client.campaigns.$get>) {
  return ['campaigns', '/campaigns', args] as const
}

export function getCampaignsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.campaigns.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCampaignsQueryKey>
  >({
    queryKey: getCampaignsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCampaignsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCampaigns<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCampaignsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCampaignsMutationKey() {
  return ['campaigns', '/campaigns', 'POST'] as const
}

export function getPostCampaignsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>>,
    TError,
    InferRequestType<typeof client.campaigns.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.campaigns.$post>) {
      return parseResponse(client.campaigns.$post(args, options))
    },
  })
}

export function usePostCampaigns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.campaigns.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCampaignsIdQueryKey(
  args: InferRequestType<(typeof client.campaigns)[':id']['$get']>,
) {
  return ['campaigns', '/campaigns/:id', args] as const
}

export function getCampaignsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsIdQueryKey>
  >({
    queryKey: getCampaignsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCampaignsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCampaignsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCampaignsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCampaignsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutCampaignsIdMutationKey() {
  return ['campaigns', '/campaigns/:id', 'PUT'] as const
}

export function getPutCampaignsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCampaignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['$put']>) {
      return parseResponse(client.campaigns[':id'].$put(args, options))
    },
  })
}

export function usePutCampaignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCampaignsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteCampaignsIdMutationKey() {
  return ['campaigns', '/campaigns/:id', 'DELETE'] as const
}

export function getDeleteCampaignsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCampaignsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['$delete']>) {
      return parseResponse(client.campaigns[':id'].$delete(args, options))
    },
  })
}

export function useDeleteCampaignsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCampaignsIdMutationOptions<TError, TOnMutateResult>(
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

export function getCampaignsRunningStatsQueryKey(
  args: InferRequestType<typeof client.campaigns.running.stats.$get>,
) {
  return ['campaigns', '/campaigns/running/stats', args] as const
}

export function getCampaignsRunningStatsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.running.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.running.stats.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.running.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsRunningStatsQueryKey>
  >({
    queryKey: getCampaignsRunningStatsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.running.stats.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCampaignsRunningStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.running.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.running.stats.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.running.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsRunningStatsQueryKey>
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
      ...getCampaignsRunningStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCampaignsRunningStats<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.running.stats.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.campaigns.running.stats.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.campaigns.running.stats.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsRunningStatsQueryKey>
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
      ...getCampaignsRunningStatsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCampaignsAnalyticsTypeQueryKey(
  args: InferRequestType<(typeof client.campaigns.analytics)[':type']['$get']>,
) {
  return ['campaigns', '/campaigns/analytics/:type', args] as const
}

export function getCampaignsAnalyticsTypeQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.campaigns.analytics)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns.analytics)[':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns.analytics)[':type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsAnalyticsTypeQueryKey>
  >({
    queryKey: getCampaignsAnalyticsTypeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns.analytics[':type'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCampaignsAnalyticsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.campaigns.analytics)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns.analytics)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns.analytics)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsAnalyticsTypeQueryKey>
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
      ...getCampaignsAnalyticsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCampaignsAnalyticsType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.campaigns.analytics)[':type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns.analytics)[':type']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns.analytics)[':type']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsAnalyticsTypeQueryKey>
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
      ...getCampaignsAnalyticsTypeQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getCampaignsIdPreviewQueryKey(
  args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$get']>,
) {
  return ['campaigns', '/campaigns/:id/preview', args] as const
}

export function getCampaignsIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCampaignsIdPreviewQueryKey>
  >({
    queryKey: getCampaignsIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.campaigns[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCampaignsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getCampaignsIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseCampaignsIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCampaignsIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getCampaignsIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostCampaignsIdPreviewMutationKey() {
  return ['campaigns', '/campaigns/:id/preview', 'POST'] as const
}

export function getPostCampaignsIdPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['preview']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsIdPreviewMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['preview']['$post']>) {
      return parseResponse(client.campaigns[':id'].preview.$post(args, options))
    },
  })
}

export function usePostCampaignsIdPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['preview']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['preview']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsIdPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getPostCampaignsIdTextMutationKey() {
  return ['campaigns', '/campaigns/:id/text', 'POST'] as const
}

export function getPostCampaignsIdTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['text']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['text']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsIdTextMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['text']['$post']>) {
      return parseResponse(client.campaigns[':id'].text.$post(args, options))
    },
  })
}

export function usePostCampaignsIdText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['text']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['text']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsIdTextMutationOptions<TError, TOnMutateResult>(
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

export function getPutCampaignsIdStatusMutationKey() {
  return ['campaigns', '/campaigns/:id/status', 'PUT'] as const
}

export function getPutCampaignsIdStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['status']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['status']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCampaignsIdStatusMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['status']['$put']>) {
      return parseResponse(client.campaigns[':id'].status.$put(args, options))
    },
  })
}

export function usePutCampaignsIdStatus<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['status']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['status']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCampaignsIdStatusMutationOptions<TError, TOnMutateResult>(
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

export function getPutCampaignsIdArchiveMutationKey() {
  return ['campaigns', '/campaigns/:id/archive', 'PUT'] as const
}

export function getPutCampaignsIdArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['archive']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['archive']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCampaignsIdArchiveMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['archive']['$put']>) {
      return parseResponse(client.campaigns[':id'].archive.$put(args, options))
    },
  })
}

export function usePutCampaignsIdArchive<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['archive']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['archive']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutCampaignsIdArchiveMutationOptions<TError, TOnMutateResult>(
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

export function getPostCampaignsIdContentMutationKey() {
  return ['campaigns', '/campaigns/:id/content', 'POST'] as const
}

export function getPostCampaignsIdContentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.campaigns)[':id']['content']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['content']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsIdContentMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['content']['$post']>) {
      return parseResponse(client.campaigns[':id'].content.$post(args, options))
    },
  })
}

export function usePostCampaignsIdContent<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['content']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['content']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsIdContentMutationOptions<TError, TOnMutateResult>(
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

export function getPostCampaignsIdTestMutationKey() {
  return ['campaigns', '/campaigns/:id/test', 'POST'] as const
}

export function getPostCampaignsIdTestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.campaigns)[':id']['test']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCampaignsIdTestMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>) {
      return parseResponse(client.campaigns[':id'].test.$post(args, options))
    },
  })
}

export function usePostCampaignsIdTest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.campaigns)[':id']['test']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.campaigns)[':id']['test']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCampaignsIdTestMutationOptions<TError, TOnMutateResult>(
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

export function getMediaQueryKey() {
  return ['media', '/media'] as const
}

export function getMediaQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaQueryKey>
  >({
    queryKey: getMediaQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.media.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMediaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getMediaQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMediaQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostMediaMutationKey() {
  return ['media', '/media', 'POST'] as const
}

export function getPostMediaMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
    TError,
    InferRequestType<typeof client.media.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMediaMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.media.$post>) {
      return parseResponse(client.media.$post(args, options))
    },
  })
}

export function usePostMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
        TError,
        InferRequestType<typeof client.media.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMediaIdQueryKey(args: InferRequestType<(typeof client.media)[':id']['$get']>) {
  return ['media', '/media/:id', args] as const
}

export function getMediaIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.media)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMediaIdQueryKey>
  >({
    queryKey: getMediaIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.media[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useMediaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getMediaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseMediaId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.media)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getMediaIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getMediaIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteMediaIdMutationKey() {
  return ['media', '/media/:id', 'DELETE'] as const
}

export function getDeleteMediaIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.media)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMediaIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.media)[':id']['$delete']>) {
      return parseResponse(client.media[':id'].$delete(args, options))
    },
  })
}

export function useDeleteMediaId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.media)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMediaIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesQueryKey(args: InferRequestType<typeof client.templates.$get>) {
  return ['templates', '/templates', args] as const
}

export function getTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTemplatesQueryKey>
  >({
    queryKey: getTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostTemplatesMutationKey() {
  return ['templates', '/templates', 'POST'] as const
}

export function getPostTemplatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>>,
    TError,
    InferRequestType<typeof client.templates.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.$post>) {
      return parseResponse(client.templates.$post(args, options))
    },
  })
}

export function usePostTemplates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.templates.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTemplatesIdQueryKey(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
) {
  return ['templates', '/templates/:id', args] as const
}

export function getTemplatesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdQueryKey>
  >({
    queryKey: getTemplatesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplatesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTemplatesIdMutationKey() {
  return ['templates', '/templates/:id', 'PUT'] as const
}

export function getPutTemplatesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['$put']>) {
      return parseResponse(client.templates[':id'].$put(args, options))
    },
  })
}

export function usePutTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTemplatesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteTemplatesIdMutationKey() {
  return ['templates', '/templates/:id', 'DELETE'] as const
}

export function getDeleteTemplatesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTemplatesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['$delete']>) {
      return parseResponse(client.templates[':id'].$delete(args, options))
    },
  })
}

export function useDeleteTemplatesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteTemplatesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostTemplatesPreviewMutationKey() {
  return ['templates', '/templates/preview', 'POST'] as const
}

export function getPostTemplatesPreviewMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.preview.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.templates.preview.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTemplatesPreviewMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.templates.preview.$post>) {
      return parseResponse(client.templates.preview.$post(args, options))
    },
  })
}

export function usePostTemplatesPreview<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.templates.preview.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.templates.preview.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTemplatesPreviewMutationOptions<TError, TOnMutateResult>(
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

export function getTemplatesIdPreviewQueryKey(
  args: InferRequestType<(typeof client.templates)[':id']['preview']['$get']>,
) {
  return ['templates', '/templates/:id/preview', args] as const
}

export function getTemplatesIdPreviewQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['preview']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTemplatesIdPreviewQueryKey>
  >({
    queryKey: getTemplatesIdPreviewQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.templates[':id'].preview.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useTemplatesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTemplatesIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTemplatesIdPreview<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.templates)[':id']['preview']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.templates)[':id']['preview']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':id']['preview']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTemplatesIdPreviewQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTemplatesIdPreviewQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutTemplatesIdDefaultMutationKey() {
  return ['templates', '/templates/:id/default', 'PUT'] as const
}

export function getPutTemplatesIdDefaultMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.templates)[':id']['default']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.templates)[':id']['default']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTemplatesIdDefaultMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.templates)[':id']['default']['$put']>) {
      return parseResponse(client.templates[':id'].default.$put(args, options))
    },
  })
}

export function usePutTemplatesIdDefault<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.templates)[':id']['default']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.templates)[':id']['default']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutTemplatesIdDefaultMutationOptions<TError, TOnMutateResult>(
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

export function getPostTxMutationKey() {
  return ['tx', '/tx', 'POST'] as const
}

export function getPostTxMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tx.$post>>>>>,
    TError,
    InferRequestType<typeof client.tx.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.tx.$post>) {
      return parseResponse(client.tx.$post(args, options))
    },
  })
}

export function usePostTx<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tx.$post>>>>>,
        TError,
        InferRequestType<typeof client.tx.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostTxMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteMaintenanceSubscribersTypeMutationKey() {
  return ['maintenance', '/maintenance/subscribers/:type', 'DELETE'] as const
}

export function getDeleteMaintenanceSubscribersTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance.subscribers)[':type']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.maintenance.subscribers)[':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMaintenanceSubscribersTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.maintenance.subscribers)[':type']['$delete']>,
    ) {
      return parseResponse(client.maintenance.subscribers[':type'].$delete(args, options))
    },
  })
}

export function useDeleteMaintenanceSubscribersType<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maintenance.subscribers)[':type']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.maintenance.subscribers)[':type']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMaintenanceSubscribersTypeMutationOptions<
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

export function getDeleteMaintenanceAnalyticsTypeMutationKey() {
  return ['maintenance', '/maintenance/analytics/:type', 'DELETE'] as const
}

export function getDeleteMaintenanceAnalyticsTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.maintenance.analytics)[':type']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.maintenance.analytics)[':type']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMaintenanceAnalyticsTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.maintenance.analytics)[':type']['$delete']>,
    ) {
      return parseResponse(client.maintenance.analytics[':type'].$delete(args, options))
    },
  })
}

export function useDeleteMaintenanceAnalyticsType<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.maintenance.analytics)[':type']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.maintenance.analytics)[':type']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMaintenanceAnalyticsTypeMutationOptions<
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

export function getDeleteMaintenanceSubscriptionsUnconfirmedMutationKey() {
  return ['maintenance', '/maintenance/subscriptions/unconfirmed', 'DELETE'] as const
}

export function getDeleteMaintenanceSubscriptionsUnconfirmedMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.maintenance.subscriptions.unconfirmed.$delete>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.maintenance.subscriptions.unconfirmed.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteMaintenanceSubscriptionsUnconfirmedMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.maintenance.subscriptions.unconfirmed.$delete>,
    ) {
      return parseResponse(client.maintenance.subscriptions.unconfirmed.$delete(args, options))
    },
  })
}

export function useDeleteMaintenanceSubscriptionsUnconfirmed<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.maintenance.subscriptions.unconfirmed.$delete>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.maintenance.subscriptions.unconfirmed.$delete>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMaintenanceSubscriptionsUnconfirmedMutationOptions<
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

export function getPublicListsQueryKey() {
  return ['public', '/public/lists'] as const
}

export function getPublicListsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.lists.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.lists.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPublicListsQueryKey>
  >({
    queryKey: getPublicListsQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.public.lists.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePublicLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPublicListsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePublicLists<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.lists.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.lists.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPublicListsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPublicListsQueryOptions<TData, TError>(clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPublicSubscriptionMutationKey() {
  return ['public', '/public/subscription', 'POST'] as const
}

export function getPostPublicSubscriptionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.public.subscription.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.public.subscription.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPublicSubscriptionMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.public.subscription.$post>) {
      return parseResponse(client.public.subscription.$post(args, options))
    },
  })
}

export function usePostPublicSubscription<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.public.subscription.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.public.subscription.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPublicSubscriptionMutationOptions<TError, TOnMutateResult>(
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
