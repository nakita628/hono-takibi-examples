import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountKey() {
  return ['account'] as const
}

export function getApiAppKey() {
  return ['api_app'] as const
}

export function getApiKeyKey() {
  return ['api_key'] as const
}

export function getBulkSendJobKey() {
  return ['bulk_send_job'] as const
}

export function getDocumentKey() {
  return ['document'] as const
}

export function getEmbeddedKey() {
  return ['embedded'] as const
}

export function getFaxKey() {
  return ['fax'] as const
}

export function getFaxLineKey() {
  return ['fax_line'] as const
}

export function getOauthKey() {
  return ['oauth'] as const
}

export function getReportKey() {
  return ['report'] as const
}

export function getSignatureRequestKey() {
  return ['signature_request'] as const
}

export function getTeamKey() {
  return ['team'] as const
}

export function getTemplateKey() {
  return ['template'] as const
}

export function getUnclaimedDraftKey() {
  return ['unclaimed_draft'] as const
}

export function getGetApiKeyKey(args: InferRequestType<typeof client.api_key.$get>) {
  return ['api_key', '/api_key', args] as const
}

export function useGetApiKey<TError = unknown>(
  args: InferRequestType<typeof client.api_key.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_key.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiKey<TError = unknown>(
  args: InferRequestType<typeof client.api_key.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiKeyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api_key.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostApiKeyKey() {
  return ['api_key', '/api_key', 'POST'] as const
}

export function usePostApiKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_key.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api_key.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_key.$post> }) =>
        parseResponse(client.api_key.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiKeyApiKeyIdKey(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
) {
  return ['api_key', '/api_key/:api_key_id', args] as const
}

export function useGetApiKeyApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiKeyApiKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_key[':api_key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiKeyApiKeyId<TError = unknown>(
  args: InferRequestType<(typeof client.api_key)[':api_key_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiKeyApiKeyIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_key[':api_key_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiKeyApiKeyIdKey() {
  return ['api_key', '/api_key/:api_key_id', 'PUT'] as const
}

export function usePutApiKeyApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_key)[':api_key_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiKeyApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_key)[':api_key_id']['$put']> },
      ) => parseResponse(client.api_key[':api_key_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiKeyApiKeyIdKey() {
  return ['api_key', '/api_key/:api_key_id', 'DELETE'] as const
}

export function useDeleteApiKeyApiKeyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_key)[':api_key_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api_key)[':api_key_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiKeyApiKeyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_key)[':api_key_id']['$delete']> },
      ) => parseResponse(client.api_key[':api_key_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountCreateKey() {
  return ['account', '/account/create', 'POST'] as const
}

export function usePostAccountCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.create.$post> }) =>
        parseResponse(client.account.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountKey(args: InferRequestType<typeof client.account.$get>) {
  return ['account', '/account', args] as const
}

export function useGetAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.account.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccount<TError = unknown>(
  args: InferRequestType<typeof client.account.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.account.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPutAccountKey() {
  return ['account', '/account', 'PUT'] as const
}

export function usePutAccount<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.account.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.$put> }) =>
        parseResponse(client.account.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountSettingsKey(
  args: InferRequestType<typeof client.account.settings.$get>,
) {
  return ['account', '/account/settings', args] as const
}

export function useGetAccountSettings<TError = unknown>(
  args: InferRequestType<typeof client.account.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
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
        ? getGetAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountSettings<TError = unknown>(
  args: InferRequestType<typeof client.account.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
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
        ? getGetAccountSettingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.account.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountSettingsKey() {
  return ['account', '/account/settings', 'POST'] as const
}

export function usePostAccountSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.settings.$post> }) =>
        parseResponse(client.account.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAccountVerifyKey() {
  return ['account', '/account/verify', 'POST'] as const
}

export function usePostAccountVerify<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.account.verify.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.account.verify.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountVerifyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.account.verify.$post> }) =>
        parseResponse(client.account.verify.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiAppKey() {
  return ['api_app', '/api_app', 'POST'] as const
}

export function usePostApiApp<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api_app.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiAppKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api_app.$post> }) =>
        parseResponse(client.api_app.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAppClientIdKey(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
) {
  return ['api_app', '/api_app/:client_id', args] as const
}

export function useGetApiAppClientId<TError = unknown>(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiAppClientIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_app[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppClientId<TError = unknown>(
  args: InferRequestType<(typeof client.api_app)[':client_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetApiAppClientIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_app[':client_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiAppClientIdKey() {
  return ['api_app', '/api_app/:client_id', 'PUT'] as const
}

export function usePutApiAppClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api_app)[':client_id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api_app)[':client_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiAppClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_app)[':client_id']['$put']> },
      ) => parseResponse(client.api_app[':client_id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiAppClientIdKey() {
  return ['api_app', '/api_app/:client_id', 'DELETE'] as const
}

export function useDeleteApiAppClientId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api_app)[':client_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api_app)[':client_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiAppClientIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api_app)[':client_id']['$delete']> },
      ) => parseResponse(client.api_app[':client_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiAppListKey(args: InferRequestType<typeof client.api_app.list.$get>) {
  return ['api_app', '/api_app/list', args] as const
}

export function useGetApiAppList<TError = unknown>(
  args: InferRequestType<typeof client.api_app.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAppListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_app.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAppList<TError = unknown>(
  args: InferRequestType<typeof client.api_app.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiAppListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api_app.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api_app.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkSendJobBulkSendJobIdKey(
  args: InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
) {
  return ['bulk_send_job', '/bulk_send_job/:bulk_send_job_id', args] as const
}

export function useGetBulkSendJobBulkSendJobId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
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
        ? getGetBulkSendJobBulkSendJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulk_send_job[':bulk_send_job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkSendJobBulkSendJobId<TError = unknown>(
  args: InferRequestType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
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
        ? getGetBulkSendJobBulkSendJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.bulk_send_job)[':bulk_send_job_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.bulk_send_job[':bulk_send_job_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetBulkSendJobListKey(
  args: InferRequestType<typeof client.bulk_send_job.list.$get>,
) {
  return ['bulk_send_job', '/bulk_send_job/list', args] as const
}

export function useGetBulkSendJobList<TError = unknown>(
  args: InferRequestType<typeof client.bulk_send_job.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
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
        ? getGetBulkSendJobListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk_send_job.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetBulkSendJobList<TError = unknown>(
  args: InferRequestType<typeof client.bulk_send_job.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
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
        ? getGetBulkSendJobListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bulk_send_job.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.bulk_send_job.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDocumentDetectFieldsKey() {
  return ['document', '/document/detect_fields', 'POST'] as const
}

export function usePostDocumentDetectFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.document.detect_fields.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.document.detect_fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDocumentDetectFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.document.detect_fields.$post> },
      ) => parseResponse(client.document.detect_fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostEmbeddedEditUrlTemplateIdKey() {
  return ['embedded', '/embedded/edit_url/:template_id', 'POST'] as const
}

export function usePostEmbeddedEditUrlTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.embedded.edit_url)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.embedded.edit_url)[':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostEmbeddedEditUrlTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.embedded.edit_url)[':template_id']['$post']> },
      ) => parseResponse(client.embedded.edit_url[':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetEmbeddedSignUrlSignatureIdKey(
  args: InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
) {
  return ['embedded', '/embedded/sign_url/:signature_id', args] as const
}

export function useGetEmbeddedSignUrlSignatureId<TError = unknown>(
  args: InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
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
        ? getGetEmbeddedSignUrlSignatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.embedded.sign_url[':signature_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetEmbeddedSignUrlSignatureId<TError = unknown>(
  args: InferRequestType<(typeof client.embedded.sign_url)[':signature_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
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
        ? getGetEmbeddedSignUrlSignatureIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.embedded.sign_url)[':signature_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.embedded.sign_url[':signature_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetFaxFaxIdKey(args: InferRequestType<(typeof client.fax)[':fax_id']['$get']>) {
  return ['fax', '/fax/:fax_id', args] as const
}

export function useGetFaxFaxId<TError = unknown>(
  args: InferRequestType<(typeof client.fax)[':fax_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFaxFaxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax[':fax_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxFaxId<TError = unknown>(
  args: InferRequestType<(typeof client.fax)[':fax_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFaxFaxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax[':fax_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteFaxFaxIdKey() {
  return ['fax', '/fax/:fax_id', 'DELETE'] as const
}

export function useDeleteFaxFaxId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax)[':fax_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.fax)[':fax_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFaxFaxIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.fax)[':fax_id']['$delete']> },
      ) => parseResponse(client.fax[':fax_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxFilesFaxIdKey(
  args: InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
) {
  return ['fax', '/fax/files/:fax_id', args] as const
}

export function useGetFaxFilesFaxId<TError = unknown>(
  args: InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFaxFilesFaxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax.files[':fax_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxFilesFaxId<TError = unknown>(
  args: InferRequestType<(typeof client.fax.files)[':fax_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetFaxFilesFaxIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.fax.files)[':fax_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax.files[':fax_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFaxLineAddUserKey() {
  return ['fax_line', '/fax_line/add_user', 'PUT'] as const
}

export function usePutFaxLineAddUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.add_user.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fax_line.add_user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFaxLineAddUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax_line.add_user.$put> }) =>
        parseResponse(client.fax_line.add_user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxLineAreaCodesKey(
  args: InferRequestType<typeof client.fax_line.area_codes.$get>,
) {
  return ['fax_line', '/fax_line/area_codes', args] as const
}

export function useGetFaxLineAreaCodes<TError = unknown>(
  args: InferRequestType<typeof client.fax_line.area_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
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
        ? getGetFaxLineAreaCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_line.area_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxLineAreaCodes<TError = unknown>(
  args: InferRequestType<typeof client.fax_line.area_codes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
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
        ? getGetFaxLineAreaCodesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.area_codes.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_line.area_codes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostFaxLineCreateKey() {
  return ['fax_line', '/fax_line/create', 'POST'] as const
}

export function usePostFaxLineCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fax_line.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxLineCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax_line.create.$post> }) =>
        parseResponse(client.fax_line.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxLineKey(args: InferRequestType<typeof client.fax_line.$get>) {
  return ['fax_line', '/fax_line', args] as const
}

export function useGetFaxLine<TError = unknown>(
  args: InferRequestType<typeof client.fax_line.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxLineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fax_line.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFaxLine<TError = unknown>(
  args: InferRequestType<typeof client.fax_line.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxLineKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fax_line.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getDeleteFaxLineKey() {
  return ['fax_line', '/fax_line', 'DELETE'] as const
}

export function useDeleteFaxLine<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.$delete>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fax_line.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteFaxLineKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax_line.$delete> }) =>
        parseResponse(client.fax_line.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxLineListKey(args: InferRequestType<typeof client.fax_line.list.$get>) {
  return ['fax_line', '/fax_line/list', args] as const
}

export function useGetFaxLineList<TError = unknown>(
  args: InferRequestType<typeof client.fax_line.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxLineListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_line.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetFaxLineList<TError = unknown>(
  args: InferRequestType<typeof client.fax_line.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxLineListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.fax_line.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutFaxLineRemoveUserKey() {
  return ['fax_line', '/fax_line/remove_user', 'PUT'] as const
}

export function usePutFaxLineRemoveUser<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax_line.remove_user.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.fax_line.remove_user.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutFaxLineRemoveUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax_line.remove_user.$put> }) =>
        parseResponse(client.fax_line.remove_user.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetFaxListKey(args: InferRequestType<typeof client.fax.list.$get>) {
  return ['fax', '/fax/list', args] as const
}

export function useGetFaxList<TError = unknown>(
  args: InferRequestType<typeof client.fax.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fax.list.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetFaxList<TError = unknown>(
  args: InferRequestType<typeof client.fax.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetFaxListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.list.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.fax.list.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostFaxSendKey() {
  return ['fax', '/fax/send', 'POST'] as const
}

export function usePostFaxSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.fax.send.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.fax.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostFaxSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.fax.send.$post> }) =>
        parseResponse(client.fax.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenKey() {
  return ['oauth', '/oauth/token', 'POST'] as const
}

export function usePostOauthToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.oauth.token.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.oauth.token.$post> }) =>
        parseResponse(client.oauth.token.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostOauthTokenRefreshKey() {
  return ['oauth', '/oauth/token?refresh', 'POST'] as const
}

export function usePostOauthTokenRefresh<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.oauth)['token?refresh']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.oauth)['token?refresh']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOauthTokenRefreshKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.oauth)['token?refresh']['$post']> },
      ) => parseResponse(client.oauth['token?refresh'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostReportCreateKey() {
  return ['report', '/report/create', 'POST'] as const
}

export function usePostReportCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.report.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.report.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReportCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.report.create.$post> }) =>
        parseResponse(client.report.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestBulkCreateEmbeddedWithTemplateKey() {
  return [
    'signature_request',
    '/signature_request/bulk_create_embedded_with_template',
    'POST',
  ] as const
}

export function usePostSignatureRequestBulkCreateEmbeddedWithTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<typeof client.signature_request.bulk_create_embedded_with_template.$post>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signature_request.bulk_create_embedded_with_template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestBulkCreateEmbeddedWithTemplateKey()
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
            typeof client.signature_request.bulk_create_embedded_with_template.$post
          >
        },
      ) =>
        parseResponse(
          client.signature_request.bulk_create_embedded_with_template.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestBulkSendWithTemplateKey() {
  return ['signature_request', '/signature_request/bulk_send_with_template', 'POST'] as const
}

export function usePostSignatureRequestBulkSendWithTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.bulk_send_with_template.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signature_request.bulk_send_with_template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestBulkSendWithTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.signature_request.bulk_send_with_template.$post> },
      ) =>
        parseResponse(client.signature_request.bulk_send_with_template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestCancelSignatureRequestIdKey() {
  return ['signature_request', '/signature_request/cancel/:signature_request_id', 'POST'] as const
}

export function usePostSignatureRequestCancelSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.cancel)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signature_request.cancel)[':signature_request_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestCancelSignatureRequestIdKey()
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
            (typeof client.signature_request.cancel)[':signature_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.cancel[':signature_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestCreateEmbeddedKey() {
  return ['signature_request', '/signature_request/create_embedded', 'POST'] as const
}

export function usePostSignatureRequestCreateEmbedded<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.create_embedded.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signature_request.create_embedded.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestCreateEmbeddedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.signature_request.create_embedded.$post> },
      ) => parseResponse(client.signature_request.create_embedded.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestCreateEmbeddedWithTemplateKey() {
  return ['signature_request', '/signature_request/create_embedded_with_template', 'POST'] as const
}

export function usePostSignatureRequestCreateEmbeddedWithTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.create_embedded_with_template.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestCreateEmbeddedWithTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.signature_request.create_embedded_with_template.$post>
        },
      ) =>
        parseResponse(
          client.signature_request.create_embedded_with_template.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSignatureRequestEditSignatureRequestIdKey() {
  return ['signature_request', '/signature_request/edit/:signature_request_id', 'PUT'] as const
}

export function usePutSignatureRequestEditSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signature_request.edit)[':signature_request_id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSignatureRequestEditSignatureRequestIdKey()
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
            (typeof client.signature_request.edit)[':signature_request_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.edit[':signature_request_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSignatureRequestEditEmbeddedSignatureRequestIdKey() {
  return [
    'signature_request',
    '/signature_request/edit_embedded/:signature_request_id',
    'PUT',
  ] as const
}

export function usePutSignatureRequestEditEmbeddedSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSignatureRequestEditEmbeddedSignatureRequestIdKey()
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
            (typeof client.signature_request.edit_embedded)[':signature_request_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.edit_embedded[':signature_request_id'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdKey() {
  return [
    'signature_request',
    '/signature_request/edit_embedded_with_template/:signature_request_id',
    'PUT',
  ] as const
}

export function usePutSignatureRequestEditEmbeddedWithTemplateSignatureRequestId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSignatureRequestEditEmbeddedWithTemplateSignatureRequestIdKey()
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
            (typeof client.signature_request.edit_embedded_with_template)[':signature_request_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.edit_embedded_with_template[':signature_request_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutSignatureRequestEditWithTemplateSignatureRequestIdKey() {
  return [
    'signature_request',
    '/signature_request/edit_with_template/:signature_request_id',
    'PUT',
  ] as const
}

export function usePutSignatureRequestEditWithTemplateSignatureRequestId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutSignatureRequestEditWithTemplateSignatureRequestIdKey()
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
            (typeof client.signature_request.edit_with_template)[':signature_request_id']['$put']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.edit_with_template[':signature_request_id'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetSignatureRequestFilesSignatureRequestIdKey(
  args: InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>,
) {
  return ['signature_request', '/signature_request/files/:signature_request_id', args] as const
}

export function useGetSignatureRequestFilesSignatureRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
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
        ? getGetSignatureRequestFilesSignatureRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.signature_request.files[':signature_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignatureRequestFilesSignatureRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.signature_request.files)[':signature_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
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
        ? getGetSignatureRequestFilesSignatureRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.signature_request.files)[':signature_request_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.signature_request.files[':signature_request_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSignatureRequestFilesAsDataUriSignatureRequestIdKey(
  args: InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
) {
  return [
    'signature_request',
    '/signature_request/files_as_data_uri/:signature_request_id',
    args,
  ] as const
}

export function useGetSignatureRequestFilesAsDataUriSignatureRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
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
        ? getGetSignatureRequestFilesAsDataUriSignatureRequestIdKey(args)
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
                (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
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
          client.signature_request.files_as_data_uri[':signature_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignatureRequestFilesAsDataUriSignatureRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
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
        ? getGetSignatureRequestFilesAsDataUriSignatureRequestIdKey(args)
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
                (typeof client.signature_request.files_as_data_uri)[':signature_request_id']['$get']
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
          client.signature_request.files_as_data_uri[':signature_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSignatureRequestFilesAsFileUrlSignatureRequestIdKey(
  args: InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
) {
  return [
    'signature_request',
    '/signature_request/files_as_file_url/:signature_request_id',
    args,
  ] as const
}

export function useGetSignatureRequestFilesAsFileUrlSignatureRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
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
        ? getGetSignatureRequestFilesAsFileUrlSignatureRequestIdKey(args)
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
                (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
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
          client.signature_request.files_as_file_url[':signature_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignatureRequestFilesAsFileUrlSignatureRequestId<TError = unknown>(
  args: InferRequestType<
    (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
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
        ? getGetSignatureRequestFilesAsFileUrlSignatureRequestIdKey(args)
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
                (typeof client.signature_request.files_as_file_url)[':signature_request_id']['$get']
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
          client.signature_request.files_as_file_url[':signature_request_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetSignatureRequestSignatureRequestIdKey(
  args: InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
) {
  return ['signature_request', '/signature_request/:signature_request_id', args] as const
}

export function useGetSignatureRequestSignatureRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
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
        ? getGetSignatureRequestSignatureRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.signature_request[':signature_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignatureRequestSignatureRequestId<TError = unknown>(
  args: InferRequestType<(typeof client.signature_request)[':signature_request_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
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
        ? getGetSignatureRequestSignatureRequestIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.signature_request)[':signature_request_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.signature_request[':signature_request_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSignatureRequestListKey(
  args: InferRequestType<typeof client.signature_request.list.$get>,
) {
  return ['signature_request', '/signature_request/list', args] as const
}

export function useGetSignatureRequestList<TError = unknown>(
  args: InferRequestType<typeof client.signature_request.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
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
        ? getGetSignatureRequestListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.signature_request.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSignatureRequestList<TError = unknown>(
  args: InferRequestType<typeof client.signature_request.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
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
        ? getGetSignatureRequestListKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.list.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.signature_request.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostSignatureRequestReleaseHoldSignatureRequestIdKey() {
  return [
    'signature_request',
    '/signature_request/release_hold/:signature_request_id',
    'POST',
  ] as const
}

export function usePostSignatureRequestReleaseHoldSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestReleaseHoldSignatureRequestIdKey()
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
            (typeof client.signature_request.release_hold)[':signature_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.release_hold[':signature_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestRemindSignatureRequestIdKey() {
  return ['signature_request', '/signature_request/remind/:signature_request_id', 'POST'] as const
}

export function usePostSignatureRequestRemindSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.remind)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signature_request.remind)[':signature_request_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestRemindSignatureRequestIdKey()
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
            (typeof client.signature_request.remind)[':signature_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.remind[':signature_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestRemoveSignatureRequestIdKey() {
  return ['signature_request', '/signature_request/remove/:signature_request_id', 'POST'] as const
}

export function usePostSignatureRequestRemoveSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.remove)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signature_request.remove)[':signature_request_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestRemoveSignatureRequestIdKey()
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
            (typeof client.signature_request.remove)[':signature_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.remove[':signature_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestSendKey() {
  return ['signature_request', '/signature_request/send', 'POST'] as const
}

export function usePostSignatureRequestSend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.signature_request.send.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signature_request.send.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestSendKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.signature_request.send.$post> },
      ) => parseResponse(client.signature_request.send.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestSendWithTemplateKey() {
  return ['signature_request', '/signature_request/send_with_template', 'POST'] as const
}

export function usePostSignatureRequestSendWithTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.signature_request.send_with_template.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.signature_request.send_with_template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestSendWithTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<typeof client.signature_request.send_with_template.$post> },
      ) => parseResponse(client.signature_request.send_with_template.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSignatureRequestUpdateSignatureRequestIdKey() {
  return ['signature_request', '/signature_request/update/:signature_request_id', 'POST'] as const
}

export function usePostSignatureRequestUpdateSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.signature_request.update)[':signature_request_id']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.signature_request.update)[':signature_request_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSignatureRequestUpdateSignatureRequestIdKey()
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
            (typeof client.signature_request.update)[':signature_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.signature_request.update[':signature_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutTeamAddMemberKey() {
  return ['team', '/team/add_member', 'PUT'] as const
}

export function usePutTeamAddMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.add_member.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.team.add_member.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamAddMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.team.add_member.$put> }) =>
        parseResponse(client.team.add_member.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamCreateKey() {
  return ['team', '/team/create', 'POST'] as const
}

export function usePostTeamCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.create.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.team.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.team.create.$post> }) =>
        parseResponse(client.team.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamDestroyKey() {
  return ['team', '/team/destroy', 'DELETE'] as const
}

export function useDeleteTeamDestroy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.destroy.$delete>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamDestroyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.team.destroy.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamKey() {
  return ['team', '/team'] as const
}

export function useGetTeam<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTeamKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeam<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey = enabled !== false ? (customKey === undefined ? getGetTeamKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutTeamKey() {
  return ['team', '/team', 'PUT'] as const
}

export function usePutTeam<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.$put>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.team.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.team.$put> }) =>
        parseResponse(client.team.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamInfoKey(args: InferRequestType<typeof client.team.info.$get>) {
  return ['team', '/team/info', args] as const
}

export function useGetTeamInfo<TError = unknown>(
  args: InferRequestType<typeof client.team.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamInfo<TError = unknown>(
  args: InferRequestType<typeof client.team.info.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamInfoKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.info.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.info.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamInvitesKey(args: InferRequestType<typeof client.team.invites.$get>) {
  return ['team', '/team/invites', args] as const
}

export function useGetTeamInvites<TError = unknown>(
  args: InferRequestType<typeof client.team.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamInvitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamInvites<TError = unknown>(
  args: InferRequestType<typeof client.team.invites.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamInvitesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.invites.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.invites.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTeamMembersTeamIdKey(
  args: InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
) {
  return ['team', '/team/members/:team_id', args] as const
}

export function useGetTeamMembersTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
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
        ? getGetTeamMembersTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.members[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamMembersTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.team.members)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
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
        ? getGetTeamMembersTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.members)[':team_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.members[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamRemoveMemberKey() {
  return ['team', '/team/remove_member', 'POST'] as const
}

export function usePostTeamRemoveMember<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.remove_member.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.team.remove_member.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamRemoveMemberKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.team.remove_member.$post> }) =>
        parseResponse(client.team.remove_member.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamSettingsKey(args: InferRequestType<typeof client.team.settings.$get>) {
  return ['team', '/team/settings', args] as const
}

export function useGetTeamSettings<TError = unknown>(
  args: InferRequestType<typeof client.team.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamSettings<TError = unknown>(
  args: InferRequestType<typeof client.team.settings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamSettingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.settings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamSettingsKey() {
  return ['team', '/team/settings', 'POST'] as const
}

export function usePostTeamSettings<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.team.settings.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.team.settings.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.team.settings.$post> }) =>
        parseResponse(client.team.settings.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamSubTeamsTeamIdKey(
  args: InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
) {
  return ['team', '/team/sub_teams/:team_id', args] as const
}

export function useGetTeamSubTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
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
        ? getGetTeamSubTeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.sub_teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamSubTeamsTeamId<TError = unknown>(
  args: InferRequestType<(typeof client.team.sub_teams)[':team_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
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
        ? getGetTeamSubTeamsTeamIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.team.sub_teams)[':team_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.team.sub_teams[':team_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplateAddUserTemplateIdKey() {
  return ['template', '/template/add_user/:template_id', 'POST'] as const
}

export function usePostTemplateAddUserTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.add_user)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template.add_user)[':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateAddUserTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.template.add_user)[':template_id']['$post']> },
      ) => parseResponse(client.template.add_user[':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplateCreateKey() {
  return ['template', '/template/create', 'POST'] as const
}

export function usePostTemplateCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.create.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.template.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.template.create.$post> }) =>
        parseResponse(client.template.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplateCreateEmbeddedDraftKey() {
  return ['template', '/template/create_embedded_draft', 'POST'] as const
}

export function usePostTemplateCreateEmbeddedDraft<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.template.create_embedded_draft.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.template.create_embedded_draft.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateCreateEmbeddedDraftKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.template.create_embedded_draft.$post> },
      ) => parseResponse(client.template.create_embedded_draft.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplateDeleteTemplateIdKey() {
  return ['template', '/template/delete/:template_id', 'POST'] as const
}

export function usePostTemplateDeleteTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.delete)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template.delete)[':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateDeleteTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.template.delete)[':template_id']['$post']> },
      ) => parseResponse(client.template.delete[':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTemplateFilesTemplateIdKey(
  args: InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
) {
  return ['template', '/template/files/:template_id', args] as const
}

export function useGetTemplateFilesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
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
        ? getGetTemplateFilesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template.files[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateFilesTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template.files)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
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
        ? getGetTemplateFilesTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template.files[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplateFilesAsDataUriTemplateIdKey(
  args: InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
) {
  return ['template', '/template/files_as_data_uri/:template_id', args] as const
}

export function useGetTemplateFilesAsDataUriTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
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
        ? getGetTemplateFilesAsDataUriTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.template.files_as_data_uri[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateFilesAsDataUriTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
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
        ? getGetTemplateFilesAsDataUriTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_data_uri)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.template.files_as_data_uri[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplateFilesAsFileUrlTemplateIdKey(
  args: InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
) {
  return ['template', '/template/files_as_file_url/:template_id', args] as const
}

export function useGetTemplateFilesAsFileUrlTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
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
        ? getGetTemplateFilesAsFileUrlTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.template.files_as_file_url[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateFilesAsFileUrlTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template.files_as_file_url)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
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
        ? getGetTemplateFilesAsFileUrlTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template.files_as_file_url)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.template.files_as_file_url[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplateTemplateIdKey(
  args: InferRequestType<(typeof client.template)[':template_id']['$get']>,
) {
  return ['template', '/template/:template_id', args] as const
}

export function useGetTemplateTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
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
        ? getGetTemplateTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateTemplateId<TError = unknown>(
  args: InferRequestType<(typeof client.template)[':template_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
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
        ? getGetTemplateTemplateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.template)[':template_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template[':template_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTemplateListKey(args: InferRequestType<typeof client.template.list.$get>) {
  return ['template', '/template/list', args] as const
}

export function useGetTemplateList<TError = unknown>(
  args: InferRequestType<typeof client.template.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplateListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTemplateList<TError = unknown>(
  args: InferRequestType<typeof client.template.list.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTemplateListKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.template.list.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.template.list.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTemplateRemoveUserTemplateIdKey() {
  return ['template', '/template/remove_user/:template_id', 'POST'] as const
}

export function usePostTemplateRemoveUserTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.remove_user)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template.remove_user)[':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateRemoveUserTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.template.remove_user)[':template_id']['$post']> },
      ) => parseResponse(client.template.remove_user[':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTemplateUpdateFilesTemplateIdKey() {
  return ['template', '/template/update_files/:template_id', 'POST'] as const
}

export function usePostTemplateUpdateFilesTemplateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.template.update_files)[':template_id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.template.update_files)[':template_id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTemplateUpdateFilesTemplateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.template.update_files)[':template_id']['$post']>
        },
      ) => parseResponse(client.template.update_files[':template_id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnclaimedDraftCreateKey() {
  return ['unclaimed_draft', '/unclaimed_draft/create', 'POST'] as const
}

export function usePostUnclaimedDraftCreate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.unclaimed_draft.create.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unclaimed_draft.create.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnclaimedDraftCreateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unclaimed_draft.create.$post> },
      ) => parseResponse(client.unclaimed_draft.create.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnclaimedDraftCreateEmbeddedKey() {
  return ['unclaimed_draft', '/unclaimed_draft/create_embedded', 'POST'] as const
}

export function usePostUnclaimedDraftCreateEmbedded<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unclaimed_draft.create_embedded.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unclaimed_draft.create_embedded.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnclaimedDraftCreateEmbeddedKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.unclaimed_draft.create_embedded.$post> },
      ) => parseResponse(client.unclaimed_draft.create_embedded.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostUnclaimedDraftCreateEmbeddedWithTemplateKey() {
  return ['unclaimed_draft', '/unclaimed_draft/create_embedded_with_template', 'POST'] as const
}

export function usePostUnclaimedDraftCreateEmbeddedWithTemplate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.unclaimed_draft.create_embedded_with_template.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.unclaimed_draft.create_embedded_with_template.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnclaimedDraftCreateEmbeddedWithTemplateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<typeof client.unclaimed_draft.create_embedded_with_template.$post>
        },
      ) =>
        parseResponse(
          client.unclaimed_draft.create_embedded_with_template.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostUnclaimedDraftEditAndResendSignatureRequestIdKey() {
  return [
    'unclaimed_draft',
    '/unclaimed_draft/edit_and_resend/:signature_request_id',
    'POST',
  ] as const
}

export function usePostUnclaimedDraftEditAndResendSignatureRequestId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostUnclaimedDraftEditAndResendSignatureRequestIdKey()
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
            (typeof client.unclaimed_draft.edit_and_resend)[':signature_request_id']['$post']
          >
        },
      ) =>
        parseResponse(
          client.unclaimed_draft.edit_and_resend[':signature_request_id'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
