import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getAgentRunnersKey() {
  return ['agent_runners'] as const
}

export function getAiGatewayKey() {
  return ['ai-gateway'] as const
}

export function getApiKey() {
  return ['api'] as const
}

export function getBillingKey() {
  return ['billing'] as const
}

export function getBuildsKey() {
  return ['builds'] as const
}

export function getDeployKeysKey() {
  return ['deploy_keys'] as const
}

export function getDeploysKey() {
  return ['deploys'] as const
}

export function getDnsZonesKey() {
  return ['dns_zones'] as const
}

export function getFormsKey() {
  return ['forms'] as const
}

export function getHooksKey() {
  return ['hooks'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getPurgeKey() {
  return ['purge'] as const
}

export function getServicesKey() {
  return ['services'] as const
}

export function getSitesKey() {
  return ['sites'] as const
}

export function getSubmissionsKey() {
  return ['submissions'] as const
}

export function getUserKey() {
  return ['user'] as const
}

export function getAccountIdKey() {
  return ['{account_id}'] as const
}

export function getAccountSlugKey() {
  return ['{account_slug}'] as const
}

export function getGetSitesKey(args: InferRequestType<typeof client.sites.$get>) {
  return ['sites', '/sites', args] as const
}

export function useGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetSites<TError = unknown>(
  args: InferRequestType<typeof client.sites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.sites.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostSitesKey() {
  return ['sites', '/sites', 'POST'] as const
}

export function usePostSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sites.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.sites.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sites.$post> }) =>
        parseResponse(client.sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
) {
  return ['sites', '/sites/:site_id', args] as const
}

export function useGetSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdKey() {
  return ['sites', '/sites/:site_id', 'DELETE'] as const
}

export function useDeleteSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['$delete']> },
      ) => parseResponse(client.sites[':site_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchSitesSiteIdKey() {
  return ['sites', '/sites/:site_id', 'PATCH'] as const
}

export function usePatchSitesSiteId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchSitesSiteIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['$patch']> },
      ) => parseResponse(client.sites[':site_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdSslKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
) {
  return ['sites', '/sites/:site_id/ssl', args] as const
}

export function useGetSitesSiteIdSsl<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdSslKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].ssl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdSsl<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdSslKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].ssl.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdSslKey() {
  return ['sites', '/sites/:site_id/ssl', 'POST'] as const
}

export function usePostSitesSiteIdSsl<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['ssl']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdSslKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['ssl']['$post']> },
      ) => parseResponse(client.sites[':site_id'].ssl.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdSslCertificatesKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
) {
  return ['sites', '/sites/:site_id/ssl/certificates', args] as const
}

export function useGetSitesSiteIdSslCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
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
        ? getGetSitesSiteIdSslCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].ssl.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdSslCertificates<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
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
        ? getGetSitesSiteIdSslCertificatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ssl']['certificates']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].ssl.certificates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdEnvKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/env', args] as const
}

export function useGetAccountsAccountIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
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
        ? getGetAccountsAccountIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
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
        ? getGetAccountsAccountIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsAccountIdEnvKey() {
  return ['accounts', '/accounts/:account_id/env', 'POST'] as const
}

export function usePostAccountsAccountIdEnv<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['env']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsAccountIdEnvKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['env']['$post']> },
      ) => parseResponse(client.accounts[':account_id'].env.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiV1SitesSiteIdEnvKey(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
) {
  return ['api', '/api/v1/sites/:site_id/env', args] as const
}

export function useGetApiV1SitesSiteIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
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
        ? getGetApiV1SitesSiteIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sites[':site_id'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiV1SitesSiteIdEnv<TError = unknown>(
  args: InferRequestType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
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
        ? getGetApiV1SitesSiteIdEnvKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.v1.sites)[':site_id']['env']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.v1.sites[':site_id'].env.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdEnvKeyKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/env/:key', args] as const
}

export function useGetAccountsAccountIdEnvKey<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
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
        ? getGetAccountsAccountIdEnvKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':account_id'].env[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdEnvKey<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
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
        ? getGetAccountsAccountIdEnvKeyKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':account_id'].env[':key'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdEnvKeyKey() {
  return ['accounts', '/accounts/:account_id/env/:key', 'PUT'] as const
}

export function usePutAccountsAccountIdEnvKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdEnvKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$put']>
        },
      ) => parseResponse(client.accounts[':account_id'].env[':key'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdEnvKeyKey() {
  return ['accounts', '/accounts/:account_id/env/:key', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdEnvKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdEnvKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$delete']>
        },
      ) => parseResponse(client.accounts[':account_id'].env[':key'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountsAccountIdEnvKeyKey() {
  return ['accounts', '/accounts/:account_id/env/:key', 'PATCH'] as const
}

export function usePatchAccountsAccountIdEnvKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountsAccountIdEnvKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.accounts)[':account_id']['env'][':key']['$patch']>
        },
      ) => parseResponse(client.accounts[':account_id'].env[':key'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdEnvKeyValueIdKey() {
  return ['accounts', '/accounts/:account_id/env/:key/value/:id', 'DELETE'] as const
}

export function useDeleteAccountsAccountIdEnvKeyValueId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdEnvKeyValueIdKey()
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
            (typeof client.accounts)[':account_id']['env'][':key']['value'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.accounts[':account_id'].env[':key'].value[':id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdFunctionsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
) {
  return ['sites', '/sites/:site_id/functions', args] as const
}

export function useGetSitesSiteIdFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
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
        ? getGetSitesSiteIdFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdFunctions<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['functions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
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
        ? getGetSitesSiteIdFunctionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['functions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].functions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdFormsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
) {
  return ['sites', '/sites/:site_id/forms', args] as const
}

export function useGetSitesSiteIdForms<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
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
        ? getGetSitesSiteIdFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdForms<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['forms']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
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
        ? getGetSitesSiteIdFormsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['forms']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].forms.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdFormsFormIdKey() {
  return ['sites', '/sites/:site_id/forms/:form_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdFormsFormId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdFormsFormIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['forms'][':form_id']['$delete']>
        },
      ) => parseResponse(client.sites[':site_id'].forms[':form_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdSubmissionsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
) {
  return ['sites', '/sites/:site_id/submissions', args] as const
}

export function useGetSitesSiteIdSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
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
        ? getGetSitesSiteIdSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
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
        ? getGetSitesSiteIdSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdFilesKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
) {
  return ['sites', '/sites/:site_id/files', args] as const
}

export function useGetSitesSiteIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
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
        ? getGetSitesSiteIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdFiles<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
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
        ? getGetSitesSiteIdFilesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].files.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdAssetsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
) {
  return ['sites', '/sites/:site_id/assets', args] as const
}

export function useGetSitesSiteIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
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
        ? getGetSitesSiteIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdAssets<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
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
        ? getGetSitesSiteIdAssetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].assets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdAssetsKey() {
  return ['sites', '/sites/:site_id/assets', 'POST'] as const
}

export function usePostSitesSiteIdAssets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['assets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['assets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdAssetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['assets']['$post']> },
      ) => parseResponse(client.sites[':site_id'].assets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdAssetsAssetIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
) {
  return ['sites', '/sites/:site_id/assets/:asset_id', args] as const
}

export function useGetSitesSiteIdAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
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
        ? getGetSitesSiteIdAssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].assets[':asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdAssetsAssetId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
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
        ? getGetSitesSiteIdAssetsAssetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].assets[':asset_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdAssetsAssetIdKey() {
  return ['sites', '/sites/:site_id/assets/:asset_id', 'PUT'] as const
}

export function usePutSitesSiteIdAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$put']>
        },
      ) => parseResponse(client.sites[':site_id'].assets[':asset_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdAssetsAssetIdKey() {
  return ['sites', '/sites/:site_id/assets/:asset_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdAssetsAssetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdAssetsAssetIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['assets'][':asset_id']['$delete']>
        },
      ) => parseResponse(client.sites[':site_id'].assets[':asset_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdAssetsAssetIdPublicSignatureKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/assets/:asset_id/public_signature', args] as const
}

export function useGetSitesSiteIdAssetsAssetIdPublicSignature<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
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
        ? getGetSitesSiteIdAssetsAssetIdPublicSignatureKey(args)
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
                (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
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
          client.sites[':site_id'].assets[':asset_id'].public_signature.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdAssetsAssetIdPublicSignature<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
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
        ? getGetSitesSiteIdAssetsAssetIdPublicSignatureKey(args)
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
                (typeof client.sites)[':site_id']['assets'][':asset_id']['public_signature']['$get']
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
          client.sites[':site_id'].assets[':asset_id'].public_signature.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdFilesFilePathKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
) {
  return ['sites', '/sites/:site_id/files/:file_path', args] as const
}

export function useGetSitesSiteIdFilesFilePath<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
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
        ? getGetSitesSiteIdFilesFilePathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].files[':file_path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdFilesFilePath<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
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
        ? getGetSitesSiteIdFilesFilePathKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['files'][':file_path']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].files[':file_path'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPurgeKey() {
  return ['purge', '/purge', 'POST'] as const
}

export function usePostPurge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purge.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.purge.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurgeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.purge.$post> }) =>
        parseResponse(client.purge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdSnippetsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
) {
  return ['sites', '/sites/:site_id/snippets', args] as const
}

export function useGetSitesSiteIdSnippets<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
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
        ? getGetSitesSiteIdSnippetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].snippets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdSnippets<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
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
        ? getGetSitesSiteIdSnippetsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].snippets.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdSnippetsKey() {
  return ['sites', '/sites/:site_id/snippets', 'POST'] as const
}

export function usePostSitesSiteIdSnippets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['snippets']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['snippets']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdSnippetsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['snippets']['$post']> },
      ) => parseResponse(client.sites[':site_id'].snippets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdSnippetsSnippetIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
) {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', args] as const
}

export function useGetSitesSiteIdSnippetsSnippetId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
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
        ? getGetSitesSiteIdSnippetsSnippetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdSnippetsSnippetId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
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
        ? getGetSitesSiteIdSnippetsSnippetIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdSnippetsSnippetIdKey() {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', 'PUT'] as const
}

export function usePutSitesSiteIdSnippetsSnippetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdSnippetsSnippetIdKey()
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
            (typeof client.sites)[':site_id']['snippets'][':snippet_id']['$put']
          >
        },
      ) => parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdSnippetsSnippetIdKey() {
  return ['sites', '/sites/:site_id/snippets/:snippet_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdSnippetsSnippetId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdSnippetsSnippetIdKey()
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
            (typeof client.sites)[':site_id']['snippets'][':snippet_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.sites[':site_id'].snippets[':snippet_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdMetadataKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
) {
  return ['sites', '/sites/:site_id/metadata', args] as const
}

export function useGetSitesSiteIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
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
        ? getGetSitesSiteIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdMetadata<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
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
        ? getGetSitesSiteIdMetadataKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].metadata.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdMetadataKey() {
  return ['sites', '/sites/:site_id/metadata', 'PUT'] as const
}

export function usePutSitesSiteIdMetadata<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['metadata']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['metadata']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdMetadataKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['metadata']['$put']> },
      ) => parseResponse(client.sites[':site_id'].metadata.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdBuildHooksKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
) {
  return ['sites', '/sites/:site_id/build_hooks', args] as const
}

export function useGetSitesSiteIdBuildHooks<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
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
        ? getGetSitesSiteIdBuildHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].build_hooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdBuildHooks<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
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
        ? getGetSitesSiteIdBuildHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].build_hooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdBuildHooksKey() {
  return ['sites', '/sites/:site_id/build_hooks', 'POST'] as const
}

export function usePostSitesSiteIdBuildHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdBuildHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['build_hooks']['$post']> },
      ) => parseResponse(client.sites[':site_id'].build_hooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdBuildHooksIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
) {
  return ['sites', '/sites/:site_id/build_hooks/:id', args] as const
}

export function useGetSitesSiteIdBuildHooksId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
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
        ? getGetSitesSiteIdBuildHooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].build_hooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdBuildHooksId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
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
        ? getGetSitesSiteIdBuildHooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].build_hooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdBuildHooksIdKey() {
  return ['sites', '/sites/:site_id/build_hooks/:id', 'PUT'] as const
}

export function usePutSitesSiteIdBuildHooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdBuildHooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$put']>
        },
      ) => parseResponse(client.sites[':site_id'].build_hooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdBuildHooksIdKey() {
  return ['sites', '/sites/:site_id/build_hooks/:id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdBuildHooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdBuildHooksIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['build_hooks'][':id']['$delete']>
        },
      ) => parseResponse(client.sites[':site_id'].build_hooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDeploysKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
) {
  return ['sites', '/sites/:site_id/deploys', args] as const
}

export function useGetSitesSiteIdDeploys<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
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
        ? getGetSitesSiteIdDeploysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].deploys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDeploys<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
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
        ? getGetSitesSiteIdDeploysKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].deploys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDeploysKey() {
  return ['sites', '/sites/:site_id/deploys', 'POST'] as const
}

export function usePostSitesSiteIdDeploys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['deploys']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDeploysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['deploys']['$post']> },
      ) => parseResponse(client.sites[':site_id'].deploys.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDeploysDeployIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
) {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', args] as const
}

export function useGetSitesSiteIdDeploysDeployId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
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
        ? getGetSitesSiteIdDeploysDeployIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDeploysDeployId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
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
        ? getGetSitesSiteIdDeploysDeployIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdDeploysDeployIdKey() {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', 'PUT'] as const
}

export function usePutSitesSiteIdDeploysDeployId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdDeploysDeployIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$put']>
        },
      ) => parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDeploysDeployIdKey() {
  return ['sites', '/sites/:site_id/deploys/:deploy_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDeploysDeployId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDeploysDeployIdKey()
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
            (typeof client.sites)[':site_id']['deploys'][':deploy_id']['$delete']
          >
        },
      ) =>
        parseResponse(client.sites[':site_id'].deploys[':deploy_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeploysDeployIdCancelKey() {
  return ['deploys', '/deploys/:deploy_id/cancel', 'POST'] as const
}

export function usePostDeploysDeployIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploysDeployIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deploys)[':deploy_id']['cancel']['$post']> },
      ) => parseResponse(client.deploys[':deploy_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDeploysDeployIdRestoreKey() {
  return ['sites', '/sites/:site_id/deploys/:deploy_id/restore', 'POST'] as const
}

export function usePostSitesSiteIdDeploysDeployIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDeploysDeployIdRestoreKey()
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
            (typeof client.sites)[':site_id']['deploys'][':deploy_id']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].deploys[':deploy_id'].restore.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdBuildsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
) {
  return ['sites', '/sites/:site_id/builds', args] as const
}

export function useGetSitesSiteIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
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
        ? getGetSitesSiteIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdBuilds<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['builds']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
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
        ? getGetSitesSiteIdBuildsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].builds.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdBuildsKey() {
  return ['sites', '/sites/:site_id/builds', 'POST'] as const
}

export function usePostSitesSiteIdBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['builds']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['builds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdBuildsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['builds']['$post']> },
      ) => parseResponse(client.sites[':site_id'].builds.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDeployedBranchesKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
) {
  return ['sites', '/sites/:site_id/deployed-branches', args] as const
}

export function useGetSitesSiteIdDeployedBranches<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
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
        ? getGetSitesSiteIdDeployedBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id']['deployed-branches'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDeployedBranches<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
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
        ? getGetSitesSiteIdDeployedBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['deployed-branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id']['deployed-branches'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdUnlinkRepoKey() {
  return ['sites', '/sites/:site_id/unlink_repo', 'PUT'] as const
}

export function usePutSitesSiteIdUnlinkRepo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['unlink_repo']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdUnlinkRepoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['unlink_repo']['$put']> },
      ) => parseResponse(client.sites[':site_id'].unlink_repo.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSitesSiteIdEnableKey() {
  return ['sites', '/sites/:site_id/enable', 'PUT'] as const
}

export function usePutSitesSiteIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['enable']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['enable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['enable']['$put']> },
      ) => parseResponse(client.sites[':site_id'].enable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSitesSiteIdDisableKey() {
  return ['sites', '/sites/:site_id/disable', 'PUT'] as const
}

export function usePutSitesSiteIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['disable']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['disable']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['disable']['$put']> },
      ) => parseResponse(client.sites[':site_id'].disable.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBuildsBuildIdKey(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
) {
  return ['builds', '/builds/:build_id', args] as const
}

export function useGetBuildsBuildId<TError = unknown>(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBuildsBuildIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builds[':build_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBuildsBuildId<TError = unknown>(
  args: InferRequestType<(typeof client.builds)[':build_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetBuildsBuildIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.builds)[':build_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.builds[':build_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostBuildsBuildIdLogKey() {
  return ['builds', '/builds/:build_id/log', 'POST'] as const
}

export function usePostBuildsBuildIdLog<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builds)[':build_id']['log']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.builds)[':build_id']['log']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuildsBuildIdLogKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.builds)[':build_id']['log']['$post']> },
      ) => parseResponse(client.builds[':build_id'].log.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostBuildsBuildIdStartKey() {
  return ['builds', '/builds/:build_id/start', 'POST'] as const
}

export function usePostBuildsBuildIdStart<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.builds)[':build_id']['start']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.builds)[':build_id']['start']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostBuildsBuildIdStartKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.builds)[':build_id']['start']['$post']> },
      ) => parseResponse(client.builds[':build_id'].start.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdBuildsStatusKey(
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
) {
  return [':account_id', '/:account_id/builds/status', args] as const
}

export function useGetAccountIdBuildsStatus<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
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
        ? getGetAccountIdBuildsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':account_id'].builds.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdBuildsStatus<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_id']['builds']['status']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
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
        ? getGetAccountIdBuildsStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_id']['builds']['status']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':account_id'].builds.status.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdDnsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
) {
  return ['sites', '/sites/:site_id/dns', args] as const
}

export function useGetSitesSiteIdDns<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdDnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].dns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDns<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dns']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
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
    enabled !== false ? (customKey === undefined ? getGetSitesSiteIdDnsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].dns.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdDnsKey() {
  return ['sites', '/sites/:site_id/dns', 'PUT'] as const
}

export function usePutSitesSiteIdDns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sites)[':site_id']['dns']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['dns']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdDnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['dns']['$put']> },
      ) => parseResponse(client.sites[':site_id'].dns.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutSitesSiteIdRollbackKey() {
  return ['sites', '/sites/:site_id/rollback', 'PUT'] as const
}

export function usePutSitesSiteIdRollback<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['rollback']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['rollback']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdRollbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['rollback']['$put']> },
      ) => parseResponse(client.sites[':site_id'].rollback.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeploysDeployIdKey(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
) {
  return ['deploys', '/deploys/:deploy_id', args] as const
}

export function useGetDeploysDeployId<TError = unknown>(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
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
        ? getGetDeploysDeployIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploys[':deploy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeploysDeployId<TError = unknown>(
  args: InferRequestType<(typeof client.deploys)[':deploy_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
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
        ? getGetDeploysDeployIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploys[':deploy_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDeploysDeployIdKey() {
  return ['deploys', '/deploys/:deploy_id', 'DELETE'] as const
}

export function useDeleteDeploysDeployId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeploysDeployIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.deploys)[':deploy_id']['$delete']> },
      ) => parseResponse(client.deploys[':deploy_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeploysDeployIdLockKey() {
  return ['deploys', '/deploys/:deploy_id/lock', 'POST'] as const
}

export function usePostDeploysDeployIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['lock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['lock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploysDeployIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.deploys)[':deploy_id']['lock']['$post']> },
      ) => parseResponse(client.deploys[':deploy_id'].lock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostDeploysDeployIdUnlockKey() {
  return ['deploys', '/deploys/:deploy_id/unlock', 'POST'] as const
}

export function usePostDeploysDeployIdUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeploysDeployIdUnlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.deploys)[':deploy_id']['unlock']['$post']> },
      ) => parseResponse(client.deploys[':deploy_id'].unlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeploysDeployIdFilesPathKey() {
  return ['deploys', '/deploys/:deploy_id/files/:path', 'PUT'] as const
}

export function usePutDeploysDeployIdFilesPath<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeploysDeployIdFilesPathKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.deploys)[':deploy_id']['files'][':path']['$put']>
        },
      ) => parseResponse(client.deploys[':deploy_id'].files[':path'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeploysDeployIdFunctionsNameKey() {
  return ['deploys', '/deploys/:deploy_id/functions/:name', 'PUT'] as const
}

export function usePutDeploysDeployIdFunctionsName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeploysDeployIdFunctionsNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.deploys)[':deploy_id']['functions'][':name']['$put']>
        },
      ) => parseResponse(client.deploys[':deploy_id'].functions[':name'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeploysDeployIdServerCodeShaKey() {
  return ['deploys', '/deploys/:deploy_id/server/:code_sha', 'PUT'] as const
}

export function usePutDeploysDeployIdServerCodeSha<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeploysDeployIdServerCodeShaKey()
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
            (typeof client.deploys)[':deploy_id']['server'][':code_sha']['$put']
          >
        },
      ) => parseResponse(client.deploys[':deploy_id'].server[':code_sha'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeploysDeployIdEdgeFunctionsCodeShaKey() {
  return ['deploys', '/deploys/:deploy_id/edge_functions/:code_sha', 'PUT'] as const
}

export function usePutDeploysDeployIdEdgeFunctionsCodeSha<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeploysDeployIdEdgeFunctionsCodeShaKey()
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
            (typeof client.deploys)[':deploy_id']['edge_functions'][':code_sha']['$put']
          >
        },
      ) =>
        parseResponse(
          client.deploys[':deploy_id'].edge_functions[':code_sha'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetFormsFormIdSubmissionsKey(
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
) {
  return ['forms', '/forms/:form_id/submissions', args] as const
}

export function useGetFormsFormIdSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
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
        ? getGetFormsFormIdSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forms[':form_id'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFormsFormIdSubmissions<TError = unknown>(
  args: InferRequestType<(typeof client.forms)[':form_id']['submissions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
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
        ? getGetFormsFormIdSubmissionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.forms)[':form_id']['submissions']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.forms[':form_id'].submissions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetHooksKey(args: InferRequestType<typeof client.hooks.$get>) {
  return ['hooks', '/hooks', args] as const
}

export function useGetHooks<TError = unknown>(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetHooks<TError = unknown>(
  args: InferRequestType<typeof client.hooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.hooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostHooksKey() {
  return ['hooks', '/hooks', 'POST'] as const
}

export function usePostHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.hooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.hooks.$post> }) =>
        parseResponse(client.hooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHooksHookIdKey(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
) {
  return ['hooks', '/hooks/:hook_id', args] as const
}

export function useGetHooksHookId<TError = unknown>(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHooksHookIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hooks[':hook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHooksHookId<TError = unknown>(
  args: InferRequestType<(typeof client.hooks)[':hook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetHooksHookIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hooks[':hook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutHooksHookIdKey() {
  return ['hooks', '/hooks/:hook_id', 'PUT'] as const
}

export function usePutHooksHookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hooks)[':hook_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutHooksHookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hooks)[':hook_id']['$put']> },
      ) => parseResponse(client.hooks[':hook_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteHooksHookIdKey() {
  return ['hooks', '/hooks/:hook_id', 'DELETE'] as const
}

export function useDeleteHooksHookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.hooks)[':hook_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.hooks)[':hook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteHooksHookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hooks)[':hook_id']['$delete']> },
      ) => parseResponse(client.hooks[':hook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostHooksHookIdEnableKey() {
  return ['hooks', '/hooks/:hook_id/enable', 'POST'] as const
}

export function usePostHooksHookIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.hooks)[':hook_id']['enable']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.hooks)[':hook_id']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostHooksHookIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.hooks)[':hook_id']['enable']['$post']> },
      ) => parseResponse(client.hooks[':hook_id'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetHooksTypesKey(args: InferRequestType<typeof client.hooks.types.$get>) {
  return ['hooks', '/hooks/types', args] as const
}

export function useGetHooksTypes<TError = unknown>(
  args: InferRequestType<typeof client.hooks.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHooksTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hooks.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetHooksTypes<TError = unknown>(
  args: InferRequestType<typeof client.hooks.types.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetHooksTypesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.hooks.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.hooks.types.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthTicketsKey() {
  return ['oauth', '/oauth/tickets', 'POST'] as const
}

export function usePostOauthTickets<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.tickets.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.oauth.tickets.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTicketsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.tickets.$post> }) =>
        parseResponse(client.oauth.tickets.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOauthTicketsTicketIdKey(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
) {
  return ['oauth', '/oauth/tickets/:ticket_id', args] as const
}

export function useGetOauthTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
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
        ? getGetOauthTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.tickets[':ticket_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOauthTicketsTicketId<TError = unknown>(
  args: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
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
        ? getGetOauthTicketsTicketIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.oauth.tickets[':ticket_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOauthTicketsTicketIdExchangeKey() {
  return ['oauth', '/oauth/tickets/:ticket_id/exchange', 'POST'] as const
}

export function usePostOauthTicketsTicketIdExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTicketsTicketIdExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.oauth.tickets)[':ticket_id']['exchange']['$post']>
        },
      ) => parseResponse(client.oauth.tickets[':ticket_id'].exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeployKeysKey() {
  return ['deploy_keys', '/deploy_keys'] as const
}

export function useGetDeployKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeployKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeployKeysKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeployKeysKey() {
  return ['deploy_keys', '/deploy_keys', 'POST'] as const
}

export function usePostDeployKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.deploy_keys.$post>>>>>,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeployKeysKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.deploy_keys.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeployKeysKeyIdKey(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
) {
  return ['deploy_keys', '/deploy_keys/:key_id', args] as const
}

export function useGetDeployKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
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
        ? getGetDeployKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy_keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeployKeysKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.deploy_keys)[':key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
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
        ? getGetDeployKeysKeyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.deploy_keys[':key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDeployKeysKeyIdKey() {
  return ['deploy_keys', '/deploy_keys/:key_id', 'DELETE'] as const
}

export function useDeleteDeployKeysKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.deploy_keys)[':key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.deploy_keys)[':key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDeployKeysKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.deploy_keys)[':key_id']['$delete']> },
      ) => parseResponse(client.deploy_keys[':key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSlugSitesKey(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
) {
  return [':account_slug', '/:account_slug/sites', args] as const
}

export function useGetAccountSlugSites<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
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
        ? getGetAccountSlugSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':account_slug'].sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSlugSites<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_slug']['sites']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
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
        ? getGetAccountSlugSitesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':account_slug'].sites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountSlugSitesKey() {
  return [':account_slug', '/:account_slug/sites', 'POST'] as const
}

export function usePostAccountSlugSites<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':account_slug']['sites']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':account_slug']['sites']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSlugSitesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':account_slug']['sites']['$post']> },
      ) => parseResponse(client[':account_slug'].sites.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSlugMembersKey(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
) {
  return [':account_slug', '/:account_slug/members', args] as const
}

export function useGetAccountSlugMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
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
        ? getGetAccountSlugMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':account_slug'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSlugMembers<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_slug']['members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
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
        ? getGetAccountSlugMembersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':account_slug'].members.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountSlugMembersKey() {
  return [':account_slug', '/:account_slug/members', 'POST'] as const
}

export function usePostAccountSlugMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':account_slug']['members']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':account_slug']['members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSlugMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)[':account_slug']['members']['$post']> },
      ) => parseResponse(client[':account_slug'].members.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSlugMembersMemberIdKey(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
) {
  return [':account_slug', '/:account_slug/members/:member_id', args] as const
}

export function useGetAccountSlugMembersMemberId<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
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
        ? getGetAccountSlugMembersMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':account_slug'].members[':member_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSlugMembersMemberId<TError = unknown>(
  args: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
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
        ? getGetAccountSlugMembersMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':account_slug'].members[':member_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountSlugMembersMemberIdKey() {
  return [':account_slug', '/:account_slug/members/:member_id', 'PUT'] as const
}

export function usePutAccountSlugMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountSlugMembersMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$put']>
        },
      ) => parseResponse(client[':account_slug'].members[':member_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountSlugMembersMemberIdKey() {
  return [':account_slug', '/:account_slug/members/:member_id', 'DELETE'] as const
}

export function useDeleteAccountSlugMembersMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':account_slug']['members'][':member_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountSlugMembersMemberIdKey()
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
            (typeof client)[':account_slug']['members'][':member_id']['$delete']
          >
        },
      ) => parseResponse(client[':account_slug'].members[':member_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetBillingPaymentMethodsKey() {
  return ['billing', '/billing/payment_methods'] as const
}

export function useGetBillingPaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
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
        ? getGetBillingPaymentMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.payment_methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBillingPaymentMethods<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
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
        ? getGetBillingPaymentMethodsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.billing.payment_methods.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.billing.payment_methods.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsTypesKey() {
  return ['accounts', '/accounts/types'] as const
}

export function useGetAccountsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsTypes<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsTypesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.types.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.types.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsKey() {
  return ['accounts', '/accounts'] as const
}

export function useGetAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccounts<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountsKey() {
  return ['accounts', '/accounts', 'POST'] as const
}

export function usePostAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.accounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.accounts.$post> }) =>
        parseResponse(client.accounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  return ['accounts', '/accounts/:account_id', args] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
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
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountsAccountIdKey() {
  return ['accounts', '/accounts/:account_id', 'PUT'] as const
}

export function usePutAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['$put']> },
      ) => parseResponse(client.accounts[':account_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountsAccountIdKey() {
  return ['accounts', '/accounts/:account_id', 'DELETE'] as const
}

export function useDeleteAccountsAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.accounts)[':account_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountsAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.accounts)[':account_id']['$delete']> },
      ) => parseResponse(client.accounts[':account_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsAccountIdAuditKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/audit', args] as const
}

export function useGetAccountsAccountIdAudit<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
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
        ? getGetAccountsAccountIdAuditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAudit<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['audit']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
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
        ? getGetAccountsAccountIdAuditKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['audit']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].audit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAgentRunnersKey(args: InferRequestType<typeof client.agent_runners.$get>) {
  return ['agent_runners', '/agent_runners', args] as const
}

export function useGetAgentRunners<TError = unknown>(
  args: InferRequestType<typeof client.agent_runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentRunnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent_runners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunners<TError = unknown>(
  args: InferRequestType<typeof client.agent_runners.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAgentRunnersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent_runners.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentRunnersKey() {
  return ['agent_runners', '/agent_runners', 'POST'] as const
}

export function usePostAgentRunners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.agent_runners.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.agent_runners.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.agent_runners.$post> }) =>
        parseResponse(client.agent_runners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdAgentRunnersKey() {
  return ['sites', '/sites/:site_id/agent_runners', 'POST'] as const
}

export function usePostSitesSiteIdAgentRunners<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['agent_runners']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['agent_runners']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdAgentRunnersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['agent_runners']['$post']> },
      ) => parseResponse(client.sites[':site_id'].agent_runners.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentRunnersAgentRunnerIdKey(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id', args] as const
}

export function useGetAgentRunnersAgentRunnerId<TError = unknown>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
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
        ? getGetAgentRunnersAgentRunnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent_runners[':agent_runner_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunnersAgentRunnerId<TError = unknown>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
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
        ? getGetAgentRunnersAgentRunnerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.agent_runners[':agent_runner_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentRunnersAgentRunnerIdKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id', 'DELETE'] as const
}

export function useDeleteAgentRunnersAgentRunnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentRunnersAgentRunnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$delete']> },
      ) => parseResponse(client.agent_runners[':agent_runner_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchAgentRunnersAgentRunnerIdKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id', 'PATCH'] as const
}

export function usePatchAgentRunnersAgentRunnerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAgentRunnersAgentRunnerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['$patch']> },
      ) => parseResponse(client.agent_runners[':agent_runner_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAgentRunnersAgentRunnerIdStopKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id/stop', 'POST'] as const
}

export function usePostAgentRunnersAgentRunnerIdStop<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunnersAgentRunnerIdStopKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['stop']['$post']>
        },
      ) => parseResponse(client.agent_runners[':agent_runner_id'].stop.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentRunnersAgentRunnerIdDiffKey(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id/diff', args] as const
}

export function useGetAgentRunnersAgentRunnerIdDiff<TError = unknown>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
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
        ? getGetAgentRunnersAgentRunnerIdDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agent_runners[':agent_runner_id'].diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunnersAgentRunnerIdDiff<TError = unknown>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
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
        ? getGetAgentRunnersAgentRunnerIdDiffKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['diff']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agent_runners[':agent_runner_id'].diff.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentRunnersAgentRunnerIdArchiveKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id/archive', 'POST'] as const
}

export function usePostAgentRunnersAgentRunnerIdArchive<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['archive']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunnersAgentRunnerIdArchiveKey()
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
            (typeof client.agent_runners)[':agent_runner_id']['archive']['$post']
          >
        },
      ) =>
        parseResponse(client.agent_runners[':agent_runner_id'].archive.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentRunnersAgentRunnerIdSessionsKey(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
) {
  return ['agent_runners', '/agent_runners/:agent_runner_id/sessions', args] as const
}

export function useGetAgentRunnersAgentRunnerIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
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
        ? getGetAgentRunnersAgentRunnerIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agent_runners[':agent_runner_id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunnersAgentRunnerIdSessions<TError = unknown>(
  args: InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
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
        ? getGetAgentRunnersAgentRunnerIdSessionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.agent_runners[':agent_runner_id'].sessions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAgentRunnersAgentRunnerIdSessionsKey() {
  return ['agent_runners', '/agent_runners/:agent_runner_id/sessions', 'POST'] as const
}

export function usePostAgentRunnersAgentRunnerIdSessions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunnersAgentRunnerIdSessionsKey()
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
            (typeof client.agent_runners)[':agent_runner_id']['sessions']['$post']
          >
        },
      ) =>
        parseResponse(client.agent_runners[':agent_runner_id'].sessions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
) {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    args,
  ] as const
}

export function useGetAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<TError = unknown>(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
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
        ? getGetAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey(args)
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
                (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
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
          client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
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
        ? getGetAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey(args)
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
                (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$get']
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
          client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    'DELETE',
  ] as const
}

export function useDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey()
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
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id',
    'PATCH',
  ] as const
}

export function usePatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdKey()
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
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id/stop',
    'POST',
  ] as const
}

export function usePostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStop<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdStopKey()
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
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['stop']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agent_runners[':agent_runner_id'].sessions[':agent_runner_session_id'].stop.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersKey() {
  return [
    'agent_runners',
    '/agent_runners/:agent_runner_id/sessions/:agent_runner_session_id/answers',
    'POST',
  ] as const
}

export function usePostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostAgentRunnersAgentRunnerIdSessionsAgentRunnerSessionIdAnswersKey()
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
            (typeof client.agent_runners)[':agent_runner_id']['sessions'][':agent_runner_session_id']['answers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.agent_runners[':agent_runner_id'].sessions[
            ':agent_runner_session_id'
          ].answers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSubmissionsSubmissionIdKey(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
) {
  return ['submissions', '/submissions/:submission_id', args] as const
}

export function useGetSubmissionsSubmissionId<TError = unknown>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
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
        ? getGetSubmissionsSubmissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions[':submission_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSubmissionsSubmissionId<TError = unknown>(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
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
        ? getGetSubmissionsSubmissionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.submissions[':submission_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSubmissionsSubmissionIdKey() {
  return ['submissions', '/submissions/:submission_id', 'DELETE'] as const
}

export function useDeleteSubmissionsSubmissionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.submissions)[':submission_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSubmissionsSubmissionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.submissions)[':submission_id']['$delete']> },
      ) => parseResponse(client.submissions[':submission_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdServiceInstancesKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
) {
  return ['sites', '/sites/:site_id/service-instances', args] as const
}

export function useGetSitesSiteIdServiceInstances<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
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
        ? getGetSitesSiteIdServiceInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id']['service-instances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdServiceInstances<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['service-instances']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
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
        ? getGetSitesSiteIdServiceInstancesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['service-instances']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id']['service-instances'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdServicesAddonInstancesKey() {
  return ['sites', '/sites/:site_id/services/:addon/instances', 'POST'] as const
}

export function usePostSitesSiteIdServicesAddonInstances<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdServicesAddonInstancesKey()
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
            (typeof client.sites)[':site_id']['services'][':addon']['instances']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].services[':addon'].instances.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdServicesAddonInstancesInstanceIdKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', args] as const
}

export function useGetSitesSiteIdServicesAddonInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
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
        ? getGetSitesSiteIdServicesAddonInstancesInstanceIdKey(args)
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
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
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
          client.sites[':site_id'].services[':addon'].instances[':instance_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdServicesAddonInstancesInstanceId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
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
        ? getGetSitesSiteIdServicesAddonInstancesInstanceIdKey(args)
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
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$get']
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
          client.sites[':site_id'].services[':addon'].instances[':instance_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdServicesAddonInstancesInstanceIdKey() {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', 'PUT'] as const
}

export function usePutSitesSiteIdServicesAddonInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdServicesAddonInstancesInstanceIdKey()
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
            (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].services[':addon'].instances[':instance_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdServicesAddonInstancesInstanceIdKey() {
  return ['sites', '/sites/:site_id/services/:addon/instances/:instance_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdServicesAddonInstancesInstanceId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdServicesAddonInstancesInstanceIdKey()
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
            (typeof client.sites)[':site_id']['services'][':addon']['instances'][':instance_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].services[':addon'].instances[':instance_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdIdentityIdentityIdUsersUserIdKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/identity/:identity_id/users/:user_id', args] as const
}

export function useGetSitesSiteIdIdentityIdentityIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
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
        ? getGetSitesSiteIdIdentityIdentityIdUsersUserIdKey(args)
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
                (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
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
          client.sites[':site_id'].identity[':identity_id'].users[':user_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdIdentityIdentityIdUsersUserId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
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
        ? getGetSitesSiteIdIdentityIdentityIdUsersUserIdKey(args)
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
                (typeof client.sites)[':site_id']['identity'][':identity_id']['users'][':user_id']['$get']
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
          client.sites[':site_id'].identity[':identity_id'].users[':user_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdIdentityIdentityIdUsersLookupKey() {
  return ['sites', '/sites/:site_id/identity/:identity_id/users/lookup', 'POST'] as const
}

export function usePostSitesSiteIdIdentityIdentityIdUsersLookup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdIdentityIdentityIdUsersLookupKey()
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
            (typeof client.sites)[':site_id']['identity'][':identity_id']['users']['lookup']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].identity[':identity_id'].users.lookup.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetServicesIndexKey(args: InferRequestType<typeof client.services.index.$get>) {
  return ['services', '/services/', args] as const
}

export function useGetServicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.services.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesIndex<TError = unknown>(
  args: InferRequestType<typeof client.services.index.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetServicesIndexKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.services.index.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services.index.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesAddonNameKey(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
) {
  return ['services', '/services/:addonName', args] as const
}

export function useGetServicesAddonName<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
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
        ? getGetServicesAddonNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':addonName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesAddonName<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':addonName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
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
        ? getGetServicesAddonNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.services)[':addonName']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':addonName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetServicesAddonNameManifestKey(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
) {
  return ['services', '/services/:addonName/manifest', args] as const
}

export function useGetServicesAddonNameManifest<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
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
        ? getGetServicesAddonNameManifestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':addonName'].manifest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetServicesAddonNameManifest<TError = unknown>(
  args: InferRequestType<(typeof client.services)[':addonName']['manifest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
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
        ? getGetServicesAddonNameManifestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.services)[':addonName']['manifest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.services[':addonName'].manifest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetUserKey() {
  return ['user', '/user'] as const
}

export function useGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetUser<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetUserKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.user.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdTrafficSplitsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
) {
  return ['sites', '/sites/:site_id/traffic_splits', args] as const
}

export function useGetSitesSiteIdTrafficSplits<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
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
        ? getGetSitesSiteIdTrafficSplitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].traffic_splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdTrafficSplits<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
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
        ? getGetSitesSiteIdTrafficSplitsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].traffic_splits.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdTrafficSplitsKey() {
  return ['sites', '/sites/:site_id/traffic_splits', 'POST'] as const
}

export function usePostSitesSiteIdTrafficSplits<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdTrafficSplitsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['traffic_splits']['$post']> },
      ) => parseResponse(client.sites[':site_id'].traffic_splits.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdTrafficSplitsSplitTestIdKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id', args] as const
}

export function useGetSitesSiteIdTrafficSplitsSplitTestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
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
        ? getGetSitesSiteIdTrafficSplitsSplitTestIdKey(args)
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
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
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
          client.sites[':site_id'].traffic_splits[':split_test_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdTrafficSplitsSplitTestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
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
        ? getGetSitesSiteIdTrafficSplitsSplitTestIdKey(args)
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
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$get']
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
          client.sites[':site_id'].traffic_splits[':split_test_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdTrafficSplitsSplitTestIdKey() {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id', 'PUT'] as const
}

export function usePutSitesSiteIdTrafficSplitsSplitTestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdTrafficSplitsSplitTestIdKey()
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
            (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].traffic_splits[':split_test_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdTrafficSplitsSplitTestIdPublishKey() {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id/publish', 'POST'] as const
}

export function usePostSitesSiteIdTrafficSplitsSplitTestIdPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdTrafficSplitsSplitTestIdPublishKey()
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
            (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['publish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].traffic_splits[':split_test_id'].publish.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdTrafficSplitsSplitTestIdUnpublishKey() {
  return ['sites', '/sites/:site_id/traffic_splits/:split_test_id/unpublish', 'POST'] as const
}

export function usePostSitesSiteIdTrafficSplitsSplitTestIdUnpublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdTrafficSplitsSplitTestIdUnpublishKey()
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
            (typeof client.sites)[':site_id']['traffic_splits'][':split_test_id']['unpublish']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].traffic_splits[':split_test_id'].unpublish.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetDnsZonesKey(args: InferRequestType<typeof client.dns_zones.$get>) {
  return ['dns_zones', '/dns_zones', args] as const
}

export function useGetDnsZones<TError = unknown>(
  args: InferRequestType<typeof client.dns_zones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsZonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_zones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsZones<TError = unknown>(
  args: InferRequestType<typeof client.dns_zones.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDnsZonesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_zones.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDnsZonesKey() {
  return ['dns_zones', '/dns_zones', 'POST'] as const
}

export function usePostDnsZones<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.dns_zones.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.dns_zones.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsZonesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.dns_zones.$post> }) =>
        parseResponse(client.dns_zones.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsZonesZoneIdKey(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
) {
  return ['dns_zones', '/dns_zones/:zone_id', args] as const
}

export function useGetDnsZonesZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDnsZonesZoneIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_zones[':zone_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsZonesZoneId<TError = unknown>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetDnsZonesZoneIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_zones[':zone_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDnsZonesZoneIdKey() {
  return ['dns_zones', '/dns_zones/:zone_id', 'DELETE'] as const
}

export function useDeleteDnsZonesZoneId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.dns_zones)[':zone_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDnsZonesZoneIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.dns_zones)[':zone_id']['$delete']> },
      ) => parseResponse(client.dns_zones[':zone_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDnsZonesZoneIdTransferKey() {
  return ['dns_zones', '/dns_zones/:zone_id/transfer', 'PUT'] as const
}

export function usePutDnsZonesZoneIdTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDnsZonesZoneIdTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dns_zones)[':zone_id']['transfer']['$put']> },
      ) => parseResponse(client.dns_zones[':zone_id'].transfer.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsZonesZoneIdDnsRecordsKey(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
) {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records', args] as const
}

export function useGetDnsZonesZoneIdDnsRecords<TError = unknown>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
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
        ? getGetDnsZonesZoneIdDnsRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_zones[':zone_id'].dns_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsZonesZoneIdDnsRecords<TError = unknown>(
  args: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
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
        ? getGetDnsZonesZoneIdDnsRecordsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.dns_zones[':zone_id'].dns_records.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDnsZonesZoneIdDnsRecordsKey() {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records', 'POST'] as const
}

export function usePostDnsZonesZoneIdDnsRecords<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDnsZonesZoneIdDnsRecordsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.dns_zones)[':zone_id']['dns_records']['$post']> },
      ) => parseResponse(client.dns_zones[':zone_id'].dns_records.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDnsZonesZoneIdDnsRecordsDnsRecordIdKey(
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
) {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records/:dns_record_id', args] as const
}

export function useGetDnsZonesZoneIdDnsRecordsDnsRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
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
        ? getGetDnsZonesZoneIdDnsRecordsDnsRecordIdKey(args)
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
                (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
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
          client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDnsZonesZoneIdDnsRecordsDnsRecordId<TError = unknown>(
  args: InferRequestType<
    (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
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
        ? getGetDnsZonesZoneIdDnsRecordsDnsRecordIdKey(args)
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
                (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$get']
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
          client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteDnsZonesZoneIdDnsRecordsDnsRecordIdKey() {
  return ['dns_zones', '/dns_zones/:zone_id/dns_records/:dns_record_id', 'DELETE'] as const
}

export function useDeleteDnsZonesZoneIdDnsRecordsDnsRecordId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDnsZonesZoneIdDnsRecordsDnsRecordIdKey()
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
            (typeof client.dns_zones)[':zone_id']['dns_records'][':dns_record_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.dns_zones[':zone_id'].dns_records[':dns_record_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDevServersKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
) {
  return ['sites', '/sites/:site_id/dev_servers', args] as const
}

export function useGetSitesSiteIdDevServers<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
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
        ? getGetSitesSiteIdDevServersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].dev_servers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDevServers<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
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
        ? getGetSitesSiteIdDevServersKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].dev_servers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDevServersKey() {
  return ['sites', '/sites/:site_id/dev_servers', 'POST'] as const
}

export function usePostSitesSiteIdDevServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDevServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$post']> },
      ) => parseResponse(client.sites[':site_id'].dev_servers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDevServersKey() {
  return ['sites', '/sites/:site_id/dev_servers', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDevServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDevServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['dev_servers']['$delete']> },
      ) => parseResponse(client.sites[':site_id'].dev_servers.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDevServersDevServerIdKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/dev_servers/:dev_server_id', args] as const
}

export function useGetSitesSiteIdDevServersDevServerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
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
        ? getGetSitesSiteIdDevServersDevServerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sites[':site_id'].dev_servers[':dev_server_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDevServersDevServerId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
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
        ? getGetSitesSiteIdDevServersDevServerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.sites[':site_id'].dev_servers[':dev_server_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDevServersDevServerIdStateKey() {
  return ['sites', '/sites/:site_id/dev_servers/:dev_server_id/state', 'POST'] as const
}

export function usePostSitesSiteIdDevServersDevServerIdState<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDevServersDevServerIdStateKey()
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
            (typeof client.sites)[':site_id']['dev_servers'][':dev_server_id']['state']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].dev_servers[':dev_server_id'].state.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDevServerHooksKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
) {
  return ['sites', '/sites/:site_id/dev_server_hooks', args] as const
}

export function useGetSitesSiteIdDevServerHooks<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
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
        ? getGetSitesSiteIdDevServerHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].dev_server_hooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDevServerHooks<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
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
        ? getGetSitesSiteIdDevServerHooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].dev_server_hooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDevServerHooksKey() {
  return ['sites', '/sites/:site_id/dev_server_hooks', 'POST'] as const
}

export function usePostSitesSiteIdDevServerHooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDevServerHooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks']['$post']>
        },
      ) => parseResponse(client.sites[':site_id'].dev_server_hooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDevServerHooksIdKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
) {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', args] as const
}

export function useGetSitesSiteIdDevServerHooksId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
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
        ? getGetSitesSiteIdDevServerHooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDevServerHooksId<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
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
        ? getGetSitesSiteIdDevServerHooksIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdDevServerHooksIdKey() {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', 'PUT'] as const
}

export function usePutSitesSiteIdDevServerHooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdDevServerHooksIdKey()
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
            (typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$put']
          >
        },
      ) => parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDevServerHooksIdKey() {
  return ['sites', '/sites/:site_id/dev_server_hooks/:id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDevServerHooksId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDevServerHooksIdKey()
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
            (typeof client.sites)[':site_id']['dev_server_hooks'][':id']['$delete']
          >
        },
      ) =>
        parseResponse(client.sites[':site_id'].dev_server_hooks[':id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAiGatewayProvidersKey() {
  return ['ai-gateway', '/ai-gateway/providers'] as const
}

export function useGetAiGatewayProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiGatewayProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ai-gateway'].providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAiGatewayProviders<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
        >
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAiGatewayProvidersKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['ai-gateway']['providers']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['ai-gateway'].providers.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdAiGatewayTokenKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
) {
  return ['sites', '/sites/:site_id/ai-gateway/token', args] as const
}

export function useGetSitesSiteIdAiGatewayToken<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
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
        ? getGetSitesSiteIdAiGatewayTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id']['ai-gateway'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdAiGatewayToken<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
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
        ? getGetSitesSiteIdAiGatewayTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['ai-gateway']['token']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id']['ai-gateway'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdAiGatewayTokenKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
) {
  return ['accounts', '/accounts/:account_id/ai-gateway/token', args] as const
}

export function useGetAccountsAccountIdAiGatewayToken<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
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
        ? getGetAccountsAccountIdAiGatewayTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':account_id']['ai-gateway'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdAiGatewayToken<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
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
        ? getGetAccountsAccountIdAiGatewayTokenKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.accounts)[':account_id']['ai-gateway']['token']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':account_id']['ai-gateway'].token.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
) {
  return ['sites', '/sites/:site_id/database', args] as const
}

export function useGetSitesSiteIdDatabase<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
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
        ? getGetSitesSiteIdDatabaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].database.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabase<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
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
        ? getGetSitesSiteIdDatabaseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.sites[':site_id'].database.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDatabaseKey() {
  return ['sites', '/sites/:site_id/database', 'POST'] as const
}

export function usePostSitesSiteIdDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['database']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.sites)[':site_id']['database']['$post']> },
      ) => parseResponse(client.sites[':site_id'].database.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDatabaseKey() {
  return ['sites', '/sites/:site_id/database', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDatabase<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['database']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDatabaseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.sites)[':site_id']['database']['$delete']> },
      ) => parseResponse(client.sites[':site_id'].database.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDatabaseBranchKey() {
  return ['sites', '/sites/:site_id/database/branch', 'POST'] as const
}

export function usePostSitesSiteIdDatabaseBranch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branch']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['database']['branch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDatabaseBranchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['database']['branch']['$post']>
        },
      ) => parseResponse(client.sites[':site_id'].database.branch.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseBranchesKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
) {
  return ['sites', '/sites/:site_id/database/branches', args] as const
}

export function useGetSitesSiteIdDatabaseBranches<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
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
        ? getGetSitesSiteIdDatabaseBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabaseBranches<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['branches']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
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
        ? getGetSitesSiteIdDatabaseBranchesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['branches']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.branches.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseBranchBranchIdKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/database/branch/:branch_id', args] as const
}

export function useGetSitesSiteIdDatabaseBranchBranchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
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
        ? getGetSitesSiteIdDatabaseBranchBranchIdKey(args)
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
                (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
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
          client.sites[':site_id'].database.branch[':branch_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabaseBranchBranchId<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
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
        ? getGetSitesSiteIdDatabaseBranchBranchIdKey(args)
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
                (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$get']
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
          client.sites[':site_id'].database.branch[':branch_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDatabaseBranchBranchIdKey() {
  return ['sites', '/sites/:site_id/database/branch/:branch_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDatabaseBranchBranchId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDatabaseBranchBranchIdKey()
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
            (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.branch[':branch_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDatabaseBranchBranchIdResetKey() {
  return ['sites', '/sites/:site_id/database/branch/:branch_id/reset', 'POST'] as const
}

export function usePostSitesSiteIdDatabaseBranchBranchIdReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDatabaseBranchBranchIdResetKey()
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
            (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['reset']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.branch[':branch_id'].reset.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSitesSiteIdDatabaseBranchBranchIdComputeSettingsKey() {
  return ['sites', '/sites/:site_id/database/branch/:branch_id/compute/settings', 'PUT'] as const
}

export function usePutSitesSiteIdDatabaseBranchBranchIdComputeSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdDatabaseBranchBranchIdComputeSettingsKey()
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
            (typeof client.sites)[':site_id']['database']['branch'][':branch_id']['compute']['settings']['$put']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.branch[':branch_id'].compute.settings.$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseComputeSettingsKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/database/compute/settings', args] as const
}

export function useGetSitesSiteIdDatabaseComputeSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
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
        ? getGetSitesSiteIdDatabaseComputeSettingsKey(args)
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
                (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.compute.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabaseComputeSettings<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
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
        ? getGetSitesSiteIdDatabaseComputeSettingsKey(args)
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
                (typeof client.sites)[':site_id']['database']['compute']['settings']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.compute.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutSitesSiteIdDatabaseComputeSettingsKey() {
  return ['sites', '/sites/:site_id/database/compute/settings', 'PUT'] as const
}

export function usePutSitesSiteIdDatabaseComputeSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['database']['compute']['settings']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSitesSiteIdDatabaseComputeSettingsKey()
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
            (typeof client.sites)[':site_id']['database']['compute']['settings']['$put']
          >
        },
      ) =>
        parseResponse(client.sites[':site_id'].database.compute.settings.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDatabaseComputeSettingsKey() {
  return ['sites', '/sites/:site_id/database/compute/settings', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDatabaseComputeSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDatabaseComputeSettingsKey()
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
            (typeof client.sites)[':site_id']['database']['compute']['settings']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.compute.settings.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseMigrationsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
) {
  return ['sites', '/sites/:site_id/database/migrations', args] as const
}

export function useGetSitesSiteIdDatabaseMigrations<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
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
        ? getGetSitesSiteIdDatabaseMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabaseMigrations<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
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
        ? getGetSitesSiteIdDatabaseMigrationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['migrations']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.migrations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseMigrationsNameKey(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
) {
  return ['sites', '/sites/:site_id/database/migrations/:name', args] as const
}

export function useGetSitesSiteIdDatabaseMigrationsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
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
        ? getGetSitesSiteIdDatabaseMigrationsNameKey(args)
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
                (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
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
          client.sites[':site_id'].database.migrations[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabaseMigrationsName<TError = unknown>(
  args: InferRequestType<
    (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
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
        ? getGetSitesSiteIdDatabaseMigrationsNameKey(args)
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
                (typeof client.sites)[':site_id']['database']['migrations'][':name']['$get']
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
          client.sites[':site_id'].database.migrations[':name'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostSitesSiteIdDatabaseMigrationsDeployIdKey() {
  return ['sites', '/sites/:site_id/database/migrations/:deploy_id', 'POST'] as const
}

export function usePostSitesSiteIdDatabaseMigrationsDeployId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDatabaseMigrationsDeployIdKey()
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
            (typeof client.sites)[':site_id']['database']['migrations'][':deploy_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.migrations[':deploy_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDatabaseSnapshotKey() {
  return ['sites', '/sites/:site_id/database/snapshot', 'POST'] as const
}

export function usePostSitesSiteIdDatabaseSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDatabaseSnapshotKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshot']['$post']>
        },
      ) => parseResponse(client.sites[':site_id'].database.snapshot.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSitesSiteIdDatabaseSnapshotsKey(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
) {
  return ['sites', '/sites/:site_id/database/snapshots', args] as const
}

export function useGetSitesSiteIdDatabaseSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
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
        ? getGetSitesSiteIdDatabaseSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSitesSiteIdDatabaseSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
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
        ? getGetSitesSiteIdDatabaseSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sites)[':site_id']['database']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.sites[':site_id'].database.snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteSitesSiteIdDatabaseSnapshotSnapshotIdKey() {
  return ['sites', '/sites/:site_id/database/snapshot/:snapshot_id', 'DELETE'] as const
}

export function useDeleteSitesSiteIdDatabaseSnapshotSnapshotId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteSitesSiteIdDatabaseSnapshotSnapshotIdKey()
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
            (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.snapshot[':snapshot_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSitesSiteIdDatabaseSnapshotSnapshotIdRestoreKey() {
  return ['sites', '/sites/:site_id/database/snapshot/:snapshot_id/restore', 'POST'] as const
}

export function usePostSitesSiteIdDatabaseSnapshotSnapshotIdRestore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSitesSiteIdDatabaseSnapshotSnapshotIdRestoreKey()
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
            (typeof client.sites)[':site_id']['database']['snapshot'][':snapshot_id']['restore']['$post']
          >
        },
      ) =>
        parseResponse(
          client.sites[':site_id'].database.snapshot[':snapshot_id'].restore.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
