import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAllowlistsKey() {
  return ['allowlists'] as const
}

export function getExportsKey() {
  return ['exports'] as const
}

export function getInboundKey() {
  return ['inbound'] as const
}

export function getIpsKey() {
  return ['ips'] as const
}

export function getMctemplatesKey() {
  return ['mctemplates'] as const
}

export function getMessagesKey() {
  return ['messages'] as const
}

export function getMetadataKey() {
  return ['metadata'] as const
}

export function getRejectsKey() {
  return ['rejects'] as const
}

export function getSendersKey() {
  return ['senders'] as const
}

export function getSubaccountsKey() {
  return ['subaccounts'] as const
}

export function getTagsKey() {
  return ['tags'] as const
}

export function getTemplatesKey() {
  return ['templates'] as const
}

export function getUrlsKey() {
  return ['urls'] as const
}

export function getUsersKey() {
  return ['users'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getPostAllowlistsAddKey() {
  return ['allowlists', '/allowlists/add', 'POST'] as const
}

export function usePostAllowlistsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.allowlists.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAllowlistsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.allowlists.add.$post> }) =>
        parseResponse(client.allowlists.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAllowlistsListKey() {
  return ['allowlists', '/allowlists/list', 'POST'] as const
}

export function usePostAllowlistsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.allowlists.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAllowlistsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.allowlists.list.$post> }) =>
        parseResponse(client.allowlists.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAllowlistsDeleteKey() {
  return ['allowlists', '/allowlists/delete', 'POST'] as const
}

export function usePostAllowlistsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.allowlists.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.allowlists.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAllowlistsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.allowlists.delete.$post> }) =>
        parseResponse(client.allowlists.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsInfoKey() {
  return ['exports', '/exports/info', 'POST'] as const
}

export function usePostExportsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.info.$post> }) =>
        parseResponse(client.exports.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsListKey() {
  return ['exports', '/exports/list', 'POST'] as const
}

export function usePostExportsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.list.$post> }) =>
        parseResponse(client.exports.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsRejectsKey() {
  return ['exports', '/exports/rejects', 'POST'] as const
}

export function usePostExportsRejects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.rejects.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.rejects.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsRejectsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.rejects.$post> }) =>
        parseResponse(client.exports.rejects.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsWhitelistKey() {
  return ['exports', '/exports/whitelist', 'POST'] as const
}

export function usePostExportsWhitelist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.whitelist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.whitelist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsWhitelistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.whitelist.$post> }) =>
        parseResponse(client.exports.whitelist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsAllowlistKey() {
  return ['exports', '/exports/allowlist', 'POST'] as const
}

export function usePostExportsAllowlist<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.allowlist.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.allowlist.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsAllowlistKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.allowlist.$post> }) =>
        parseResponse(client.exports.allowlist.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostExportsActivityKey() {
  return ['exports', '/exports/activity', 'POST'] as const
}

export function usePostExportsActivity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exports.activity.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.exports.activity.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExportsActivityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exports.activity.$post> }) =>
        parseResponse(client.exports.activity.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsListKey() {
  return ['ips', '/ips/list', 'POST'] as const
}

export function usePostIpsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.list.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.list.$post> }) =>
        parseResponse(client.ips.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsInfoKey() {
  return ['ips', '/ips/info', 'POST'] as const
}

export function usePostIpsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.info.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.info.$post> }) =>
        parseResponse(client.ips.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsProvisionKey() {
  return ['ips', '/ips/provision', 'POST'] as const
}

export function usePostIpsProvision<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.provision.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.ips.provision.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsProvisionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.provision.$post> }) =>
        parseResponse(client.ips.provision.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsStartWarmupKey() {
  return ['ips', '/ips/start-warmup', 'POST'] as const
}

export function usePostIpsStartWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['start-warmup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['start-warmup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsStartWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['start-warmup']['$post']> },
      ) => parseResponse(client.ips['start-warmup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsCancelWarmupKey() {
  return ['ips', '/ips/cancel-warmup', 'POST'] as const
}

export function usePostIpsCancelWarmup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['cancel-warmup']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['cancel-warmup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsCancelWarmupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['cancel-warmup']['$post']> },
      ) => parseResponse(client.ips['cancel-warmup'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsSetPoolKey() {
  return ['ips', '/ips/set-pool', 'POST'] as const
}

export function usePostIpsSetPool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['set-pool']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['set-pool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsSetPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['set-pool']['$post']> },
      ) => parseResponse(client.ips['set-pool'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsDeleteKey() {
  return ['ips', '/ips/delete', 'POST'] as const
}

export function usePostIpsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ips.delete.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.ips.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.ips.delete.$post> }) =>
        parseResponse(client.ips.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsListPoolsKey() {
  return ['ips', '/ips/list-pools', 'POST'] as const
}

export function usePostIpsListPools<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['list-pools']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['list-pools']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsListPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['list-pools']['$post']> },
      ) => parseResponse(client.ips['list-pools'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsPoolInfoKey() {
  return ['ips', '/ips/pool-info', 'POST'] as const
}

export function usePostIpsPoolInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['pool-info']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['pool-info']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsPoolInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['pool-info']['$post']> },
      ) => parseResponse(client.ips['pool-info'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsCreatePoolKey() {
  return ['ips', '/ips/create-pool', 'POST'] as const
}

export function usePostIpsCreatePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['create-pool']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['create-pool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsCreatePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['create-pool']['$post']> },
      ) => parseResponse(client.ips['create-pool'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsDeletePoolKey() {
  return ['ips', '/ips/delete-pool', 'POST'] as const
}

export function usePostIpsDeletePool<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['delete-pool']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['delete-pool']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsDeletePoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['delete-pool']['$post']> },
      ) => parseResponse(client.ips['delete-pool'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsCheckCustomDnsKey() {
  return ['ips', '/ips/check-custom-dns', 'POST'] as const
}

export function usePostIpsCheckCustomDns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['check-custom-dns']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['check-custom-dns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsCheckCustomDnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['check-custom-dns']['$post']> },
      ) => parseResponse(client.ips['check-custom-dns'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostIpsSetCustomDnsKey() {
  return ['ips', '/ips/set-custom-dns', 'POST'] as const
}

export function usePostIpsSetCustomDns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.ips)['set-custom-dns']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.ips)['set-custom-dns']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostIpsSetCustomDnsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.ips)['set-custom-dns']['$post']> },
      ) => parseResponse(client.ips['set-custom-dns'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundDomainsKey() {
  return ['inbound', '/inbound/domains', 'POST'] as const
}

export function usePostInboundDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.domains.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inbound.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inbound.domains.$post> }) =>
        parseResponse(client.inbound.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundAddDomainKey() {
  return ['inbound', '/inbound/add-domain', 'POST'] as const
}

export function usePostInboundAddDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['add-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['add-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundAddDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['add-domain']['$post']> },
      ) => parseResponse(client.inbound['add-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundCheckDomainKey() {
  return ['inbound', '/inbound/check-domain', 'POST'] as const
}

export function usePostInboundCheckDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['check-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['check-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundCheckDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['check-domain']['$post']> },
      ) => parseResponse(client.inbound['check-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundDeleteDomainKey() {
  return ['inbound', '/inbound/delete-domain', 'POST'] as const
}

export function usePostInboundDeleteDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['delete-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['delete-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundDeleteDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['delete-domain']['$post']> },
      ) => parseResponse(client.inbound['delete-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundRoutesKey() {
  return ['inbound', '/inbound/routes', 'POST'] as const
}

export function usePostInboundRoutes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.inbound.routes.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.inbound.routes.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundRoutesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.inbound.routes.$post> }) =>
        parseResponse(client.inbound.routes.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundAddRouteKey() {
  return ['inbound', '/inbound/add-route', 'POST'] as const
}

export function usePostInboundAddRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['add-route']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['add-route']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundAddRouteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['add-route']['$post']> },
      ) => parseResponse(client.inbound['add-route'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundUpdateRouteKey() {
  return ['inbound', '/inbound/update-route', 'POST'] as const
}

export function usePostInboundUpdateRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['update-route']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['update-route']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundUpdateRouteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['update-route']['$post']> },
      ) => parseResponse(client.inbound['update-route'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundDeleteRouteKey() {
  return ['inbound', '/inbound/delete-route', 'POST'] as const
}

export function usePostInboundDeleteRoute<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['delete-route']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['delete-route']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundDeleteRouteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['delete-route']['$post']> },
      ) => parseResponse(client.inbound['delete-route'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostInboundSendRawKey() {
  return ['inbound', '/inbound/send-raw', 'POST'] as const
}

export function usePostInboundSendRaw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.inbound)['send-raw']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.inbound)['send-raw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInboundSendRawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.inbound)['send-raw']['$post']> },
      ) => parseResponse(client.inbound['send-raw'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMctemplatesInfoKey() {
  return ['mctemplates', '/mctemplates/info', 'POST'] as const
}

export function usePostMctemplatesInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mctemplates.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMctemplatesInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mctemplates.info.$post> }) =>
        parseResponse(client.mctemplates.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMctemplatesListKey() {
  return ['mctemplates', '/mctemplates/list', 'POST'] as const
}

export function usePostMctemplatesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mctemplates.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMctemplatesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mctemplates.list.$post> }) =>
        parseResponse(client.mctemplates.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMctemplatesRenderKey() {
  return ['mctemplates', '/mctemplates/render', 'POST'] as const
}

export function usePostMctemplatesRender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.mctemplates.render.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.mctemplates.render.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMctemplatesRenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.mctemplates.render.$post> }) =>
        parseResponse(client.mctemplates.render.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMctemplatesTimeSeriesKey() {
  return ['mctemplates', '/mctemplates/time-series', 'POST'] as const
}

export function usePostMctemplatesTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.mctemplates)['time-series']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.mctemplates)['time-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMctemplatesTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.mctemplates)['time-series']['$post']> },
      ) => parseResponse(client.mctemplates['time-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSendKey() {
  return ['messages', '/messages/send', 'POST'] as const
}

export function usePostMessagesSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.send.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.send.$post> }) =>
        parseResponse(client.messages.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSendTemplateKey() {
  return ['messages', '/messages/send-template', 'POST'] as const
}

export function usePostMessagesSendTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['send-template']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['send-template']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSendTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['send-template']['$post']> },
      ) => parseResponse(client.messages['send-template'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSendMcTemplateKey() {
  return ['messages', '/messages/send-mc-template', 'POST'] as const
}

export function usePostMessagesSendMcTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['send-mc-template']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['send-mc-template']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSendMcTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['send-mc-template']['$post']> },
      ) => parseResponse(client.messages['send-mc-template'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSearchKey() {
  return ['messages', '/messages/search', 'POST'] as const
}

export function usePostMessagesSearch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.search.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.search.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSearchKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.search.$post> }) =>
        parseResponse(client.messages.search.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSearchTimeSeriesKey() {
  return ['messages', '/messages/search-time-series', 'POST'] as const
}

export function usePostMessagesSearchTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['search-time-series']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['search-time-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSearchTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['search-time-series']['$post']> },
      ) => parseResponse(client.messages['search-time-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesInfoKey() {
  return ['messages', '/messages/info', 'POST'] as const
}

export function usePostMessagesInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.info.$post> }) =>
        parseResponse(client.messages.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesContentKey() {
  return ['messages', '/messages/content', 'POST'] as const
}

export function usePostMessagesContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.content.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.content.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.content.$post> }) =>
        parseResponse(client.messages.content.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesParseKey() {
  return ['messages', '/messages/parse', 'POST'] as const
}

export function usePostMessagesParse<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.parse.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.parse.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesParseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.parse.$post> }) =>
        parseResponse(client.messages.parse.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSendRawKey() {
  return ['messages', '/messages/send-raw', 'POST'] as const
}

export function usePostMessagesSendRaw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)['send-raw']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['send-raw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSendRawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['send-raw']['$post']> },
      ) => parseResponse(client.messages['send-raw'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesListScheduledKey() {
  return ['messages', '/messages/list-scheduled', 'POST'] as const
}

export function usePostMessagesListScheduled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['list-scheduled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['list-scheduled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesListScheduledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['list-scheduled']['$post']> },
      ) => parseResponse(client.messages['list-scheduled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesCancelScheduledKey() {
  return ['messages', '/messages/cancel-scheduled', 'POST'] as const
}

export function usePostMessagesCancelScheduled<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.messages)['cancel-scheduled']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['cancel-scheduled']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesCancelScheduledKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['cancel-scheduled']['$post']> },
      ) => parseResponse(client.messages['cancel-scheduled'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesRescheduleKey() {
  return ['messages', '/messages/reschedule', 'POST'] as const
}

export function usePostMessagesReschedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.messages.reschedule.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.messages.reschedule.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesRescheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.messages.reschedule.$post> }) =>
        parseResponse(client.messages.reschedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMessagesSendSmsKey() {
  return ['messages', '/messages/send-sms', 'POST'] as const
}

export function usePostMessagesSendSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.messages)['send-sms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.messages)['send-sms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMessagesSendSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.messages)['send-sms']['$post']> },
      ) => parseResponse(client.messages['send-sms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataListKey() {
  return ['metadata', '/metadata/list', 'POST'] as const
}

export function usePostMetadataList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metadata.list.$post> }) =>
        parseResponse(client.metadata.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataAddKey() {
  return ['metadata', '/metadata/add', 'POST'] as const
}

export function usePostMetadataAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metadata.add.$post> }) =>
        parseResponse(client.metadata.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataUpdateKey() {
  return ['metadata', '/metadata/update', 'POST'] as const
}

export function usePostMetadataUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metadata.update.$post> }) =>
        parseResponse(client.metadata.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostMetadataDeleteKey() {
  return ['metadata', '/metadata/delete', 'POST'] as const
}

export function usePostMetadataDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.metadata.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.metadata.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMetadataDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.metadata.delete.$post> }) =>
        parseResponse(client.metadata.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRejectsAddKey() {
  return ['rejects', '/rejects/add', 'POST'] as const
}

export function usePostRejectsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.add.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.rejects.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rejects.add.$post> }) =>
        parseResponse(client.rejects.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRejectsAddSmsKey() {
  return ['rejects', '/rejects/add-sms', 'POST'] as const
}

export function usePostRejectsAddSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['add-sms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rejects)['add-sms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectsAddSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rejects)['add-sms']['$post']> },
      ) => parseResponse(client.rejects['add-sms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRejectsListKey() {
  return ['rejects', '/rejects/list', 'POST'] as const
}

export function usePostRejectsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rejects.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rejects.list.$post> }) =>
        parseResponse(client.rejects.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRejectsListSmsKey() {
  return ['rejects', '/rejects/list-sms', 'POST'] as const
}

export function usePostRejectsListSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['list-sms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rejects)['list-sms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectsListSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rejects)['list-sms']['$post']> },
      ) => parseResponse(client.rejects['list-sms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRejectsDeleteKey() {
  return ['rejects', '/rejects/delete', 'POST'] as const
}

export function usePostRejectsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rejects.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.rejects.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.rejects.delete.$post> }) =>
        parseResponse(client.rejects.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostRejectsDeleteSmsKey() {
  return ['rejects', '/rejects/delete-sms', 'POST'] as const
}

export function usePostRejectsDeleteSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.rejects)['delete-sms']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.rejects)['delete-sms']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostRejectsDeleteSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.rejects)['delete-sms']['$post']> },
      ) => parseResponse(client.rejects['delete-sms'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersListKey() {
  return ['senders', '/senders/list', 'POST'] as const
}

export function usePostSendersList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.senders.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.senders.list.$post> }) =>
        parseResponse(client.senders.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersDomainsKey() {
  return ['senders', '/senders/domains', 'POST'] as const
}

export function usePostSendersDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.domains.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.senders.domains.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.senders.domains.$post> }) =>
        parseResponse(client.senders.domains.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersAddDomainKey() {
  return ['senders', '/senders/add-domain', 'POST'] as const
}

export function usePostSendersAddDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['add-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders)['add-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersAddDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)['add-domain']['$post']> },
      ) => parseResponse(client.senders['add-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersCheckDomainKey() {
  return ['senders', '/senders/check-domain', 'POST'] as const
}

export function usePostSendersCheckDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['check-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders)['check-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersCheckDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)['check-domain']['$post']> },
      ) => parseResponse(client.senders['check-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersVerifyDomainKey() {
  return ['senders', '/senders/verify-domain', 'POST'] as const
}

export function usePostSendersVerifyDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['verify-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders)['verify-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersVerifyDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)['verify-domain']['$post']> },
      ) => parseResponse(client.senders['verify-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersInfoKey() {
  return ['senders', '/senders/info', 'POST'] as const
}

export function usePostSendersInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.senders.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.senders.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.senders.info.$post> }) =>
        parseResponse(client.senders.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersTimeSeriesKey() {
  return ['senders', '/senders/time-series', 'POST'] as const
}

export function usePostSendersTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['time-series']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders)['time-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)['time-series']['$post']> },
      ) => parseResponse(client.senders['time-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSendersDeleteDomainKey() {
  return ['senders', '/senders/delete-domain', 'POST'] as const
}

export function usePostSendersDeleteDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.senders)['delete-domain']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.senders)['delete-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSendersDeleteDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.senders)['delete-domain']['$post']> },
      ) => parseResponse(client.senders['delete-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsListKey() {
  return ['subaccounts', '/subaccounts/list', 'POST'] as const
}

export function usePostSubaccountsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.list.$post> }) =>
        parseResponse(client.subaccounts.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsAddKey() {
  return ['subaccounts', '/subaccounts/add', 'POST'] as const
}

export function usePostSubaccountsAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.add.$post> }) =>
        parseResponse(client.subaccounts.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsInfoKey() {
  return ['subaccounts', '/subaccounts/info', 'POST'] as const
}

export function usePostSubaccountsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.info.$post> }) =>
        parseResponse(client.subaccounts.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsUpdateKey() {
  return ['subaccounts', '/subaccounts/update', 'POST'] as const
}

export function usePostSubaccountsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.update.$post> }) =>
        parseResponse(client.subaccounts.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsDeleteKey() {
  return ['subaccounts', '/subaccounts/delete', 'POST'] as const
}

export function usePostSubaccountsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.delete.$post> }) =>
        parseResponse(client.subaccounts.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsPauseKey() {
  return ['subaccounts', '/subaccounts/pause', 'POST'] as const
}

export function usePostSubaccountsPause<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.pause.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.pause.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsPauseKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.pause.$post> }) =>
        parseResponse(client.subaccounts.pause.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSubaccountsResumeKey() {
  return ['subaccounts', '/subaccounts/resume', 'POST'] as const
}

export function usePostSubaccountsResume<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.subaccounts.resume.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.subaccounts.resume.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSubaccountsResumeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.subaccounts.resume.$post> }) =>
        parseResponse(client.subaccounts.resume.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsListKey() {
  return ['tags', '/tags/list', 'POST'] as const
}

export function usePostTagsList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.list.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.list.$post> }) =>
        parseResponse(client.tags.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsDeleteKey() {
  return ['tags', '/tags/delete', 'POST'] as const
}

export function usePostTagsDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.delete.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.delete.$post> }) =>
        parseResponse(client.tags.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsInfoKey() {
  return ['tags', '/tags/info', 'POST'] as const
}

export function usePostTagsInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.tags.info.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.tags.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.tags.info.$post> }) =>
        parseResponse(client.tags.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsTimeSeriesKey() {
  return ['tags', '/tags/time-series', 'POST'] as const
}

export function usePostTagsTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['time-series']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)['time-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)['time-series']['$post']> },
      ) => parseResponse(client.tags['time-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTagsAllTimeSeriesKey() {
  return ['tags', '/tags/all-time-series', 'POST'] as const
}

export function usePostTagsAllTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.tags)['all-time-series']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.tags)['all-time-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTagsAllTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.tags)['all-time-series']['$post']> },
      ) => parseResponse(client.tags['all-time-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesAddKey() {
  return ['templates', '/templates/add', 'POST'] as const
}

export function usePostTemplatesAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.add.$post> }) =>
        parseResponse(client.templates.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesInfoKey() {
  return ['templates', '/templates/info', 'POST'] as const
}

export function usePostTemplatesInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.info.$post> }) =>
        parseResponse(client.templates.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesUpdateKey() {
  return ['templates', '/templates/update', 'POST'] as const
}

export function usePostTemplatesUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.update.$post> }) =>
        parseResponse(client.templates.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesPublishKey() {
  return ['templates', '/templates/publish', 'POST'] as const
}

export function usePostTemplatesPublish<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.publish.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.publish.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesPublishKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.publish.$post> }) =>
        parseResponse(client.templates.publish.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesDeleteKey() {
  return ['templates', '/templates/delete', 'POST'] as const
}

export function usePostTemplatesDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.delete.$post> }) =>
        parseResponse(client.templates.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesListKey() {
  return ['templates', '/templates/list', 'POST'] as const
}

export function usePostTemplatesList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.list.$post> }) =>
        parseResponse(client.templates.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesTimeSeriesKey() {
  return ['templates', '/templates/time-series', 'POST'] as const
}

export function usePostTemplatesTimeSeries<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.templates)['time-series']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.templates)['time-series']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesTimeSeriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.templates)['time-series']['$post']> },
      ) => parseResponse(client.templates['time-series'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplatesRenderKey() {
  return ['templates', '/templates/render', 'POST'] as const
}

export function usePostTemplatesRender<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.templates.render.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.templates.render.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplatesRenderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.templates.render.$post> }) =>
        parseResponse(client.templates.render.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUrlsTrackingDomainsKey() {
  return ['urls', '/urls/tracking-domains', 'POST'] as const
}

export function usePostUrlsTrackingDomains<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.urls)['tracking-domains']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.urls)['tracking-domains']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUrlsTrackingDomainsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.urls)['tracking-domains']['$post']> },
      ) => parseResponse(client.urls['tracking-domains'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUrlsAddTrackingDomainKey() {
  return ['urls', '/urls/add-tracking-domain', 'POST'] as const
}

export function usePostUrlsAddTrackingDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.urls)['add-tracking-domain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.urls)['add-tracking-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUrlsAddTrackingDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.urls)['add-tracking-domain']['$post']> },
      ) => parseResponse(client.urls['add-tracking-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUrlsCheckTrackingDomainKey() {
  return ['urls', '/urls/check-tracking-domain', 'POST'] as const
}

export function usePostUrlsCheckTrackingDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.urls)['check-tracking-domain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.urls)['check-tracking-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUrlsCheckTrackingDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.urls)['check-tracking-domain']['$post']> },
      ) => parseResponse(client.urls['check-tracking-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUrlsDeleteTrackingDomainKey() {
  return ['urls', '/urls/delete-tracking-domain', 'POST'] as const
}

export function usePostUrlsDeleteTrackingDomain<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.urls)['delete-tracking-domain']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.urls)['delete-tracking-domain']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUrlsDeleteTrackingDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.urls)['delete-tracking-domain']['$post']> },
      ) => parseResponse(client.urls['delete-tracking-domain'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersInfoKey() {
  return ['users', '/users/info', 'POST'] as const
}

export function usePostUsersInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.info.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.info.$post> }) =>
        parseResponse(client.users.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersPingKey() {
  return ['users', '/users/ping', 'POST'] as const
}

export function usePostUsersPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ping.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.ping.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.ping.$post> }) =>
        parseResponse(client.users.ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersPing2Key() {
  return ['users', '/users/ping2', 'POST'] as const
}

export function usePostUsersPing2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.ping2.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.users.ping2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersPing2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.ping2.$post> }) =>
        parseResponse(client.users.ping2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUsersSendersKey() {
  return ['users', '/users/senders', 'POST'] as const
}

export function usePostUsersSenders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.users.senders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.users.senders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUsersSendersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.users.senders.$post> }) =>
        parseResponse(client.users.senders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksListKey() {
  return ['webhooks', '/webhooks/list', 'POST'] as const
}

export function usePostWebhooksList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.list.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.list.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksListKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.list.$post> }) =>
        parseResponse(client.webhooks.list.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksAddKey() {
  return ['webhooks', '/webhooks/add', 'POST'] as const
}

export function usePostWebhooksAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.add.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.add.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksAddKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.add.$post> }) =>
        parseResponse(client.webhooks.add.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksInfoKey() {
  return ['webhooks', '/webhooks/info', 'POST'] as const
}

export function usePostWebhooksInfo<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.info.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.info.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksInfoKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.info.$post> }) =>
        parseResponse(client.webhooks.info.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksUpdateKey() {
  return ['webhooks', '/webhooks/update', 'POST'] as const
}

export function usePostWebhooksUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.update.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.update.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.update.$post> }) =>
        parseResponse(client.webhooks.update.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksDeleteKey() {
  return ['webhooks', '/webhooks/delete', 'POST'] as const
}

export function usePostWebhooksDelete<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.delete.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.delete.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksDeleteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.delete.$post> }) =>
        parseResponse(client.webhooks.delete.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
