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
  args: InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
  >,
) {
  return ['clients', '/clients/:clientId/config/ui/accounts/platform/:platformKey', args] as const
}

export function getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryOptions<
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
  args: InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.clients[':clientId'].config.ui.accounts.platform[':platformKey'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createClientsClientIdConfigUiAccountsPlatformPlatformKey<
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
  args: () => InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
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
                    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryKey>
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
      ...getClientsClientIdConfigUiAccountsPlatformPlatformKeyQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostCompaniesCompanyIdSyncCommerceLatest<
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
    const mutationDefaults = getPostCompaniesCompanyIdSyncCommerceLatestMutationOptions<
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

export function getConfigCompaniesCompanyIdSyncCommerceQueryKey(
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
  >,
) {
  return ['config', '/config/companies/:companyId/sync/commerce', args] as const
}

export function getConfigCompaniesCompanyIdSyncCommerceQueryOptions<
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
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConfigCompaniesCompanyIdSyncCommerceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.companies[':companyId'].sync.commerce.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConfigCompaniesCompanyIdSyncCommerce<
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
  args: () => InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
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
                    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConfigCompaniesCompanyIdSyncCommerceQueryKey>
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
      ...getConfigCompaniesCompanyIdSyncCommerceQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostConfigCompaniesCompanyIdSyncCommerce<
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
    const mutationDefaults = getPostConfigCompaniesCompanyIdSyncCommerceMutationOptions<
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

export function getConfigIntegrationsQueryKey(
  args: InferRequestType<typeof client.config.integrations.$get>,
) {
  return ['config', '/config/integrations', args] as const
}

export function getConfigIntegrationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.config.integrations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getConfigIntegrationsQueryKey>
  >({
    queryKey: getConfigIntegrationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.integrations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createConfigIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.config.integrations.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConfigIntegrationsQueryKey>
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
    return { ...getConfigIntegrationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getConfigIntegrationsPlatformKeyBrandingQueryKey(
  args: InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>,
) {
  return ['config', '/config/integrations/:platformKey/branding', args] as const
}

export function getConfigIntegrationsPlatformKeyBrandingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConfigIntegrationsPlatformKeyBrandingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.integrations[':platformKey'].branding.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConfigIntegrationsPlatformKeyBranding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.config.integrations)[':platformKey']['branding']['$get']
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
                    (typeof client.config.integrations)[':platformKey']['branding']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConfigIntegrationsPlatformKeyBrandingQueryKey>
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
      ...getConfigIntegrationsPlatformKeyBrandingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey(
  args: InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
  >,
) {
  return ['config', '/config/sync/commerce/:commerceKey/:accountingKey/start', args] as const
}

export function getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryOptions<
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
  args: InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.config.sync.commerce[':commerceKey'][':accountingKey'].start.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createConfigSyncCommerceCommerceKeyAccountingKeyStart<
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
  args: () => InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
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
                    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryKey>
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
      ...getConfigSyncCommerceCommerceKeyAccountingKeyStartQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getMetaCompaniesQueryKey(
  args: InferRequestType<typeof client.meta.companies.$get>,
) {
  return ['meta', '/meta/companies', args] as const
}

export function getMetaCompaniesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.meta.companies.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getMetaCompaniesQueryKey>
  >({
    queryKey: getMetaCompaniesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meta.companies.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createMetaCompanies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.meta.companies.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getMetaCompaniesQueryKey>
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
    return { ...getMetaCompaniesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostMetaCompaniesSync<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.sync.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.meta.companies.sync.$post>,
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
    const mutationDefaults = getPostMetaCompaniesSyncMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getMetaCompaniesCompanyIdConnectionsQueryKey(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
) {
  return ['meta', '/meta/companies/:companyId/connections', args] as const
}

export function getMetaCompaniesCompanyIdConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMetaCompaniesCompanyIdConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meta.companies[':companyId'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetaCompaniesCompanyIdConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
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
          ReturnType<typeof getMetaCompaniesCompanyIdConnectionsQueryKey>
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
      ...getMetaCompaniesCompanyIdConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPostMetaCompaniesCompanyIdConnections<
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
                  ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$post']>,
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
    const mutationDefaults = getPostMetaCompaniesCompanyIdConnectionsMutationOptions<
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

export function createPatchMetaCompaniesCompanyIdConnectionsConnectionId<
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
    const mutationDefaults = getPatchMetaCompaniesCompanyIdConnectionsConnectionIdMutationOptions<
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

export function createPostMetaCompaniesCompanyIdSyncCommerceHistoric<
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
    const mutationDefaults = getPostMetaCompaniesCompanyIdSyncCommerceHistoricMutationOptions<
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

export function getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
  >,
) {
  return ['meta', '/meta/companies/:companyId/sync/commerce/status', args] as const
}

export function getMetaCompaniesCompanyIdSyncCommerceStatusQueryOptions<
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
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.meta.companies[':companyId'].sync.commerce.status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createMetaCompaniesCompanyIdSyncCommerceStatus<
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
  args: () => InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
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
                    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getMetaCompaniesCompanyIdSyncCommerceStatusQueryKey>
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
      ...getMetaCompaniesCompanyIdSyncCommerceStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPatchSyncCommerceConfigUiAccountsPlatformCommerceKey<
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
    const mutationDefaults = getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyMutationOptions<
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

export function getSyncCommerceConfigUiTextQueryKey() {
  return ['sync', '/sync/commerce/config/ui/text'] as const
}

export function getSyncCommerceConfigUiTextQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
    >
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSyncCommerceConfigUiTextQueryKey>
  >({
    queryKey: getSyncCommerceConfigUiTextQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.sync.commerce.config.ui.text.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createSyncCommerceConfigUiText<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
    >
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getSyncCommerceConfigUiTextQueryKey>
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
    return { ...getSyncCommerceConfigUiTextQueryOptions<TData, TError>(clientOptions), ...query }
  }, queryClient)
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

export function createPatchSyncCommerceConfigUiText<
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
                Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$patch>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.sync.commerce.config.ui.text.$patch>,
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
    const mutationDefaults = getPatchSyncCommerceConfigUiTextMutationOptions<
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
