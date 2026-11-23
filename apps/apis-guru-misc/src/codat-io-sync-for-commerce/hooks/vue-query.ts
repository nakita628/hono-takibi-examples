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

export function getClientsKey() {
  return ['clients'] as const
}

export function getCompaniesKey() {
  return ['companies'] as const
}

export function getConfigKey() {
  return ['config'] as const
}

export function getMetaKey() {
  return ['meta'] as const
}

export function getSyncKey() {
  return ['sync'] as const
}

export function getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
    >
  >,
) {
  return [
    'clients',
    '/clients/:clientId/config/ui/accounts/platform/:platformKey',
    toValue(args),
  ] as const
}

export function getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.clients[':clientId'].config.ui.accounts.platform[':platformKey'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useClientsClientIdConfigUiAccountsPlatformPlatformKey<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
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
                    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
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
                    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey>
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
              (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.clients[':clientId'].config.ui.accounts.platform[':platformKey'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostCompaniesCompanyIdSyncCommerceLatestMutationKey() {
  return ['companies', '/companies/:companyId/sync/commerce/latest', 'POST'] as const
}

export function getPostCompaniesCompanyIdSyncCommerceLatestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCompaniesCompanyIdSyncCommerceLatestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
      >,
    ) {
      return parseResponse(client.companies[':companyId'].sync.commerce.latest.$post(args, options))
    },
  })
}

export function usePostCompaniesCompanyIdSyncCommerceLatest<
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
                    (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
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
  const mutationDefaults = getPostCompaniesCompanyIdSyncCommerceLatestMutationOptions<
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

export function getConfigCompaniesCompanyIdSyncCommerceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
  >,
) {
  return ['config', '/config/companies/:companyId/sync/commerce', toValue(args)] as const
}

export function getConfigCompaniesCompanyIdSyncCommerceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigCompaniesCompanyIdSyncCommerceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.companies[':companyId'].sync.commerce.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigCompaniesCompanyIdSyncCommerce<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
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
                    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
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
                    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConfigCompaniesCompanyIdSyncCommerceQueryKey>
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
            ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigCompaniesCompanyIdSyncCommerceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigCompaniesCompanyIdSyncCommerceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.companies[':companyId'].sync.commerce.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostConfigCompaniesCompanyIdSyncCommerceMutationKey() {
  return ['config', '/config/companies/:companyId/sync/commerce', 'POST'] as const
}

export function getPostConfigCompaniesCompanyIdSyncCommerceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostConfigCompaniesCompanyIdSyncCommerceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.config.companies)[':companyId']['sync']['commerce']['$post']
      >,
    ) {
      return parseResponse(client.config.companies[':companyId'].sync.commerce.$post(args, options))
    },
  })
}

export function usePostConfigCompaniesCompanyIdSyncCommerce<
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
                    (typeof client.config.companies)[':companyId']['sync']['commerce']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.config.companies)[':companyId']['sync']['commerce']['$post']
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
  const mutationDefaults = getPostConfigCompaniesCompanyIdSyncCommerceMutationOptions<
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

export function getConfigIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.integrations.$get>>,
) {
  return ['config', '/config/integrations', toValue(args)] as const
}

export function getConfigIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.integrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.integrations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.config.integrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
            >
          >,
          ReturnType<typeof getConfigIntegrationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigIntegrationsPlatformKeyBrandingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
  >,
) {
  return ['config', '/config/integrations/:platformKey/branding', toValue(args)] as const
}

export function getConfigIntegrationsPlatformKeyBrandingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigIntegrationsPlatformKeyBrandingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.integrations[':platformKey'].branding.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigIntegrationsPlatformKeyBranding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
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
                    (typeof client.config.integrations)[':platformKey']['branding']['$get']
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
                    (typeof client.config.integrations)[':platformKey']['branding']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConfigIntegrationsPlatformKeyBrandingQueryKey>
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
            ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigIntegrationsPlatformKeyBrandingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigIntegrationsPlatformKeyBrandingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.integrations[':platformKey'].branding.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
    >
  >,
) {
  return [
    'config',
    '/config/sync/commerce/:commerceKey/:accountingKey/start',
    toValue(args),
  ] as const
}

export function getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.config.sync.commerce[':commerceKey'][':accountingKey'].start.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useConfigSyncCommerceCommerceKeyAccountingKeyStart<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
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
                    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
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
                    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey>
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
              (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.config.sync.commerce[':commerceKey'][':accountingKey'].start.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMetaCompaniesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.meta.companies.$get>>,
) {
  return ['meta', '/meta/companies', toValue(args)] as const
}

export function getMetaCompaniesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.meta.companies.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetaCompaniesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meta.companies.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetaCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.meta.companies.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
          >,
          ReturnType<typeof getMetaCompaniesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetaCompaniesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetaCompaniesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meta.companies.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMetaCompaniesSyncMutationKey() {
  return ['meta', '/meta/companies/sync', 'POST'] as const
}

export function getPostMetaCompaniesSyncMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.sync.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.meta.companies.sync.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMetaCompaniesSyncMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.meta.companies.sync.$post>) {
      return parseResponse(client.meta.companies.sync.$post(args, options))
    },
  })
}

export function usePostMetaCompaniesSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.meta.companies.sync.$post>,
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
  const mutationDefaults = getPostMetaCompaniesSyncMutationOptions<TError, TOnMutateResult>(
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

export function getMetaCompaniesCompanyIdConnectionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>
  >,
) {
  return ['meta', '/meta/companies/:companyId/connections', toValue(args)] as const
}

export function getMetaCompaniesCompanyIdConnectionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetaCompaniesCompanyIdConnectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meta.companies[':companyId'].connections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetaCompaniesCompanyIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>
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
                  ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getMetaCompaniesCompanyIdConnectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetaCompaniesCompanyIdConnectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetaCompaniesCompanyIdConnectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meta.companies[':companyId'].connections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMetaCompaniesCompanyIdConnectionsMutationKey() {
  return ['meta', '/meta/companies/:companyId/connections', 'POST'] as const
}

export function getPostMetaCompaniesCompanyIdConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostMetaCompaniesCompanyIdConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$post']>,
    ) {
      return parseResponse(client.meta.companies[':companyId'].connections.$post(args, options))
    },
  })
}

export function usePostMetaCompaniesCompanyIdConnections<
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
                  ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$post']>,
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
  const mutationDefaults = getPostMetaCompaniesCompanyIdConnectionsMutationOptions<
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

export function getPatchMetaCompaniesCompanyIdConnectionsConnectionIdMutationKey() {
  return ['meta', '/meta/companies/:companyId/connections/:connectionId', 'PATCH'] as const
}

export function getPatchMetaCompaniesCompanyIdConnectionsConnectionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchMetaCompaniesCompanyIdConnectionsConnectionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
      >,
    ) {
      return parseResponse(
        client.meta.companies[':companyId'].connections[':connectionId'].$patch(args, options),
      )
    },
  })
}

export function usePatchMetaCompaniesCompanyIdConnectionsConnectionId<
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
                    (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
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
  const mutationDefaults = getPatchMetaCompaniesCompanyIdConnectionsConnectionIdMutationOptions<
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

export function getPostMetaCompaniesCompanyIdSyncCommerceHistoricMutationKey() {
  return ['meta', '/meta/companies/:companyId/sync/commerce/historic', 'POST'] as const
}

export function getPostMetaCompaniesCompanyIdSyncCommerceHistoricMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostMetaCompaniesCompanyIdSyncCommerceHistoricMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
      >,
    ) {
      return parseResponse(
        client.meta.companies[':companyId'].sync.commerce.historic.$post(args, options),
      )
    },
  })
}

export function usePostMetaCompaniesCompanyIdSyncCommerceHistoric<
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
                    (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
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
  const mutationDefaults = getPostMetaCompaniesCompanyIdSyncCommerceHistoricMutationOptions<
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

export function getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
    >
  >,
) {
  return ['meta', '/meta/companies/:companyId/sync/commerce/status', toValue(args)] as const
}

export function getMetaCompaniesCompanyIdSyncCommerceStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.meta.companies[':companyId'].sync.commerce.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMetaCompaniesCompanyIdSyncCommerceStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
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
                    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
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
                    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey>
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
              (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.meta.companies[':companyId'].sync.commerce.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyMutationKey() {
  return ['sync', '/sync/commerce/config/ui/accounts/platform/:commerceKey', 'PATCH'] as const
}

export function getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
      >,
    ) {
      return parseResponse(
        client.sync.commerce.config.ui.accounts.platform[':commerceKey'].$patch(args, options),
      )
    },
  })
}

export function usePatchSyncCommerceConfigUiAccountsPlatformCommerceKey<
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
                    (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
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
  const mutationDefaults = getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyMutationOptions<
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

export function getSyncCommerceConfigUiTextQueryKey() {
  return ['sync', '/sync/commerce/config/ui/text'] as const
}

export function getSyncCommerceConfigUiTextQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getSyncCommerceConfigUiTextQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.sync.commerce.config.ui.text.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSyncCommerceConfigUiText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
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
                Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>
              >
            >
          >,
          ReturnType<typeof getSyncCommerceConfigUiTextQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncCommerceConfigUiTextQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getSyncCommerceConfigUiTextQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.sync.commerce.config.ui.text.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchSyncCommerceConfigUiTextMutationKey() {
  return ['sync', '/sync/commerce/config/ui/text', 'PATCH'] as const
}

export function getPatchSyncCommerceConfigUiTextMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$patch>>>
      >
    >,
    TError,
    InferRequestType<typeof client.sync.commerce.config.ui.text.$patch>,
    TOnMutateResult
  >({
    mutationKey: getPatchSyncCommerceConfigUiTextMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sync.commerce.config.ui.text.$patch>) {
      return parseResponse(client.sync.commerce.config.ui.text.$patch(args, options))
    },
  })
}

export function usePatchSyncCommerceConfigUiText<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sync.commerce.config.ui.text.$patch>,
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
  const mutationDefaults = getPatchSyncCommerceConfigUiTextMutationOptions<TError, TOnMutateResult>(
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
