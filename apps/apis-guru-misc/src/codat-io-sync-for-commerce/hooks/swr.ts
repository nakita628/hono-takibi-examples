import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetClientsClientIdConfigUiAccountsPlatformPlatformKeyKey(
  args: InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
  >,
) {
  return ['clients', '/clients/:clientId/config/ui/accounts/platform/:platformKey', args] as const
}

export function useGetClientsClientIdConfigUiAccountsPlatformPlatformKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClientsClientIdConfigUiAccountsPlatformPlatformKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clients[':clientId'].config.ui.accounts.platform[':platformKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetClientsClientIdConfigUiAccountsPlatformPlatformKey<TError = unknown>(
  args: InferRequestType<
    (typeof client.clients)[':clientId']['config']['ui']['accounts']['platform'][':platformKey']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetClientsClientIdConfigUiAccountsPlatformPlatformKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.clients[':clientId'].config.ui.accounts.platform[':platformKey'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostCompaniesCompanyIdSyncCommerceLatestKey() {
  return ['companies', '/companies/:companyId/sync/commerce/latest', 'POST'] as const
}

export function usePostCompaniesCompanyIdSyncCommerceLatest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCompaniesCompanyIdSyncCommerceLatestKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.companies)[':companyId']['sync']['commerce']['latest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.companies[':companyId'].sync.commerce.latest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConfigCompaniesCompanyIdSyncCommerceKey(
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
  >,
) {
  return ['config', '/config/companies/:companyId/sync/commerce', args] as const
}

export function useGetConfigCompaniesCompanyIdSyncCommerce<TError = unknown>(
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
            >
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
        ? getGetConfigCompaniesCompanyIdSyncCommerceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.config.companies[':companyId'].sync.commerce.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigCompaniesCompanyIdSyncCommerce<TError = unknown>(
  args: InferRequestType<
    (typeof client.config.companies)[':companyId']['sync']['commerce']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
            >
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
        ? getGetConfigCompaniesCompanyIdSyncCommerceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.config.companies[':companyId'].sync.commerce.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostConfigCompaniesCompanyIdSyncCommerceKey() {
  return ['config', '/config/companies/:companyId/sync/commerce', 'POST'] as const
}

export function usePostConfigCompaniesCompanyIdSyncCommerce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.config.companies)[':companyId']['sync']['commerce']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostConfigCompaniesCompanyIdSyncCommerceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.config.companies)[':companyId']['sync']['commerce']['$post']
          >
        },
      ) =>
        parseResponse(
          client.config.companies[':companyId'].sync.commerce.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetConfigIntegrationsKey(
  args: InferRequestType<typeof client.config.integrations.$get>,
) {
  return ['config', '/config/integrations', args] as const
}

export function useGetConfigIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.config.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
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
        ? getGetConfigIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigIntegrations<TError = unknown>(
  args: InferRequestType<typeof client.config.integrations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
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
        ? getGetConfigIntegrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.config.integrations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.config.integrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetConfigIntegrationsPlatformKeyBrandingKey(
  args: InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>,
) {
  return ['config', '/config/integrations/:platformKey/branding', args] as const
}

export function useGetConfigIntegrationsPlatformKeyBranding<TError = unknown>(
  args: InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
            >
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
        ? getGetConfigIntegrationsPlatformKeyBrandingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.config.integrations[':platformKey'].branding.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigIntegrationsPlatformKeyBranding<TError = unknown>(
  args: InferRequestType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
            >
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
        ? getGetConfigIntegrationsPlatformKeyBrandingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.config.integrations)[':platformKey']['branding']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.config.integrations[':platformKey'].branding.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetConfigSyncCommerceCommerceKeyAccountingKeyStartKey(
  args: InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
  >,
) {
  return ['config', '/config/sync/commerce/:commerceKey/:accountingKey/start', args] as const
}

export function useGetConfigSyncCommerceCommerceKeyAccountingKeyStart<TError = unknown>(
  args: InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConfigSyncCommerceCommerceKeyAccountingKeyStartKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.config.sync.commerce[':commerceKey'][':accountingKey'].start.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetConfigSyncCommerceCommerceKeyAccountingKeyStart<TError = unknown>(
  args: InferRequestType<
    (typeof client.config.sync.commerce)[':commerceKey'][':accountingKey']['start']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetConfigSyncCommerceCommerceKeyAccountingKeyStartKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.config.sync.commerce[':commerceKey'][':accountingKey'].start.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetMetaCompaniesKey(args: InferRequestType<typeof client.meta.companies.$get>) {
  return ['meta', '/meta/companies', args] as const
}

export function useGetMetaCompanies<TError = unknown>(
  args: InferRequestType<typeof client.meta.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetaCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meta.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetaCompanies<TError = unknown>(
  args: InferRequestType<typeof client.meta.companies.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetMetaCompaniesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.meta.companies.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetaCompaniesSyncKey() {
  return ['meta', '/meta/companies/sync', 'POST'] as const
}

export function usePostMetaCompaniesSync<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.meta.companies.sync.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.meta.companies.sync.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetaCompaniesSyncKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.meta.companies.sync.$post> }) =>
        parseResponse(client.meta.companies.sync.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetMetaCompaniesCompanyIdConnectionsKey(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
) {
  return ['meta', '/meta/companies/:companyId/connections', args] as const
}

export function useGetMetaCompaniesCompanyIdConnections<TError = unknown>(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
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
        ? getGetMetaCompaniesCompanyIdConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meta.companies[':companyId'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetaCompaniesCompanyIdConnections<TError = unknown>(
  args: InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
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
        ? getGetMetaCompaniesCompanyIdConnectionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.meta.companies[':companyId'].connections.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMetaCompaniesCompanyIdConnectionsKey() {
  return ['meta', '/meta/companies/:companyId/connections', 'POST'] as const
}

export function usePostMetaCompaniesCompanyIdConnections<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.meta.companies)[':companyId']['connections']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.meta.companies)[':companyId']['connections']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetaCompaniesCompanyIdConnectionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meta.companies)[':companyId']['connections']['$post']
          >
        },
      ) => parseResponse(client.meta.companies[':companyId'].connections.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchMetaCompaniesCompanyIdConnectionsConnectionIdKey() {
  return ['meta', '/meta/companies/:companyId/connections/:connectionId', 'PATCH'] as const
}

export function usePatchMetaCompaniesCompanyIdConnectionsConnectionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchMetaCompaniesCompanyIdConnectionsConnectionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meta.companies)[':companyId']['connections'][':connectionId']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.meta.companies[':companyId'].connections[':connectionId'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostMetaCompaniesCompanyIdSyncCommerceHistoricKey() {
  return ['meta', '/meta/companies/:companyId/sync/commerce/historic', 'POST'] as const
}

export function usePostMetaCompaniesCompanyIdSyncCommerceHistoric<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetaCompaniesCompanyIdSyncCommerceHistoricKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.meta.companies)[':companyId']['sync']['commerce']['historic']['$post']
          >
        },
      ) =>
        parseResponse(
          client.meta.companies[':companyId'].sync.commerce.historic.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetMetaCompaniesCompanyIdSyncCommerceStatusKey(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
  >,
) {
  return ['meta', '/meta/companies/:companyId/sync/commerce/status', args] as const
}

export function useGetMetaCompaniesCompanyIdSyncCommerceStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMetaCompaniesCompanyIdSyncCommerceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta.companies[':companyId'].sync.commerce.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetMetaCompaniesCompanyIdSyncCommerceStatus<TError = unknown>(
  args: InferRequestType<
    (typeof client.meta.companies)[':companyId']['sync']['commerce']['status']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetMetaCompaniesCompanyIdSyncCommerceStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
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
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.meta.companies[':companyId'].sync.commerce.status.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyKey() {
  return ['sync', '/sync/commerce/config/ui/accounts/platform/:commerceKey', 'PATCH'] as const
}

export function usePatchSyncCommerceConfigUiAccountsPlatformCommerceKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSyncCommerceConfigUiAccountsPlatformCommerceKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.sync.commerce.config.ui.accounts.platform)[':commerceKey']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.sync.commerce.config.ui.accounts.platform[':commerceKey'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSyncCommerceConfigUiTextKey() {
  return ['sync', '/sync/commerce/config/ui/text'] as const
}

export function useGetSyncCommerceConfigUiText<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSyncCommerceConfigUiTextKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.commerce.config.ui.text.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSyncCommerceConfigUiText<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetSyncCommerceConfigUiTextKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sync.commerce.config.ui.text.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchSyncCommerceConfigUiTextKey() {
  return ['sync', '/sync/commerce/config/ui/text', 'PATCH'] as const
}

export function usePatchSyncCommerceConfigUiText<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.sync.commerce.config.ui.text.$patch>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.sync.commerce.config.ui.text.$patch>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSyncCommerceConfigUiTextKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.sync.commerce.config.ui.text.$patch> },
      ) => parseResponse(client.sync.commerce.config.ui.text.$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
