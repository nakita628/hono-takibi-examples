import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAppKey() {
  return ['app'] as const
}

export function getGetAppApiKey() {
  return ['app', '/app/api'] as const
}

export function useGetAppApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppApi<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppApiKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.api.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.api.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppCommitKey(args: InferRequestType<typeof client.app.commit.$get>) {
  return ['app', '/app/commit', args] as const
}

export function useGetAppCommit<TError = unknown>(
  args: InferRequestType<typeof client.app.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppCommitKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppCommit<TError = unknown>(
  args: InferRequestType<typeof client.app.commit.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppCommitKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.commit.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.commit.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppCoseSignaturesConfigKey() {
  return ['app', '/app/cose_signatures_config'] as const
}

export function useGetAppCoseSignaturesConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
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
        ? getGetAppCoseSignaturesConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.cose_signatures_config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppCoseSignaturesConfig<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
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
        ? getGetAppCoseSignaturesConfigKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.cose_signatures_config.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.cose_signatures_config.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppCustomAuthKey() {
  return ['app', '/app/custom_auth'] as const
}

export function useGetAppCustomAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppCustomAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.custom_auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppCustomAuth<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppCustomAuthKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.custom_auth.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.custom_auth.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogBlockingPrivateKey(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
) {
  return ['app', '/app/log/blocking/private', args] as const
}

export function useGetAppLogBlockingPrivate<TError = unknown>(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
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
        ? getGetAppLogBlockingPrivateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.blocking.private.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogBlockingPrivate<TError = unknown>(
  args: InferRequestType<typeof client.app.log.blocking.private.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
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
        ? getGetAppLogBlockingPrivateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.blocking.private.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppLogBlockingPrivateKey() {
  return ['app', '/app/log/blocking/private', 'POST'] as const
}

export function usePostAppLogBlockingPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.blocking.private.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.blocking.private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogBlockingPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.app.log.blocking.private.$post> },
      ) => parseResponse(client.app.log.blocking.private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogBlockingPrivateReceiptKey() {
  return ['app', '/app/log/blocking/private/receipt', 'POST'] as const
}

export function usePostAppLogBlockingPrivateReceipt<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.blocking.private.receipt.$post>>
        >
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogBlockingPrivateReceiptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(client.app.log.blocking.private.receipt.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogCoseSignedContentKey() {
  return ['app', '/app/log/cose_signed_content', 'POST'] as const
}

export function usePostAppLogCoseSignedContent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.cose_signed_content.$post>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogCoseSignedContentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.app.log.cose_signed_content.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppLogPrivateKey(args: InferRequestType<typeof client.app.log.private.$get>) {
  return ['app', '/app/log/private', args] as const
}

export function useGetAppLogPrivate<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPrivateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivate<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPrivateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppLogPrivateKey() {
  return ['app', '/app/log/private', 'POST'] as const
}

export function usePostAppLogPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.app.log.private.$post> }) =>
        parseResponse(client.app.log.private.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppLogPrivateKey() {
  return ['app', '/app/log/private', 'DELETE'] as const
}

export function useDeleteAppLogPrivate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppLogPrivateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.app.log.private.$delete> }) =>
        parseResponse(client.app.log.private.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivateAdminOnlyKey() {
  return ['app', '/app/log/private/admin_only', 'POST'] as const
}

export function usePostAppLogPrivateAdminOnly<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.admin_only.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.admin_only.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateAdminOnlyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.app.log.private.admin_only.$post> },
      ) => parseResponse(client.app.log.private.admin_only.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppLogPrivateAllKey() {
  return ['app', '/app/log/private/all', 'DELETE'] as const
}

export function useDeleteAppLogPrivateAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.all.$delete>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppLogPrivateAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.app.log.private.all.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivateAnonymousKey() {
  return ['app', '/app/log/private/anonymous', 'POST'] as const
}

export function usePostAppLogPrivateAnonymous<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.anonymous.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.anonymous.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateAnonymousKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.app.log.private.anonymous.$post> },
      ) => parseResponse(client.app.log.private.anonymous.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivateAnonymousV2Key() {
  return ['app', '/app/log/private/anonymous/v2', 'POST'] as const
}

export function usePostAppLogPrivateAnonymousV2<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.anonymous.v2.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.anonymous.v2.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateAnonymousV2Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.app.log.private.anonymous.v2.$post> },
      ) => parseResponse(client.app.log.private.anonymous.v2.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppLogPrivateBackupKey(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
) {
  return ['app', '/app/log/private/backup', args] as const
}

export function useGetAppLogPrivateBackup<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
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
        ? getGetAppLogPrivateBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.backup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateBackup<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.backup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
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
        ? getGetAppLogPrivateBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.backup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.backup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPrivateCommittedKey(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
) {
  return ['app', '/app/log/private/committed', args] as const
}

export function useGetAppLogPrivateCommitted<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
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
        ? getGetAppLogPrivateCommittedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.committed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateCommitted<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.committed.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
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
        ? getGetAppLogPrivateCommittedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.committed.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.committed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPrivateCountKey() {
  return ['app', '/app/log/private/count'] as const
}

export function useGetAppLogPrivateCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPrivateCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPrivateCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPrivateHistoricalKey(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
) {
  return ['app', '/app/log/private/historical', args] as const
}

export function useGetAppLogPrivateHistorical<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
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
        ? getGetAppLogPrivateHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.historical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateHistorical<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
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
        ? getGetAppLogPrivateHistoricalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.historical.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.historical.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPrivateHistoricalHandleKey(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
) {
  return ['app', '/app/log/private/historical/handle', args] as const
}

export function useGetAppLogPrivateHistoricalHandle<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
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
        ? getGetAppLogPrivateHistoricalHandleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.historical.handle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateHistoricalHandle<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical.handle.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
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
        ? getGetAppLogPrivateHistoricalHandleKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.handle.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.historical.handle.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPrivateHistoricalSparseKey(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
) {
  return ['app', '/app/log/private/historical/sparse', args] as const
}

export function useGetAppLogPrivateHistoricalSparse<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
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
        ? getGetAppLogPrivateHistoricalSparseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.historical.sparse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateHistoricalSparse<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical.sparse.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
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
        ? getGetAppLogPrivateHistoricalSparseKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical.sparse.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.private.historical.sparse.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPrivateHistoricalReceiptKey(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
) {
  return ['app', '/app/log/private/historical_receipt', args] as const
}

export function useGetAppLogPrivateHistoricalReceipt<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
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
        ? getGetAppLogPrivateHistoricalReceiptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.private.historical_receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPrivateHistoricalReceipt<TError = unknown>(
  args: InferRequestType<typeof client.app.log.private.historical_receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
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
        ? getGetAppLogPrivateHistoricalReceiptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.historical_receipt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.private.historical_receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppLogPrivateInstallCommittedIndexKey() {
  return ['app', '/app/log/private/install_committed_index', 'POST'] as const
}

export function usePostAppLogPrivateInstallCommittedIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.install_committed_index.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateInstallCommittedIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.app.log.private.install_committed_index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivateOptionalCommitKey() {
  return ['app', '/app/log/private/optional_commit', 'POST'] as const
}

export function usePostAppLogPrivateOptionalCommit<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.private.optional_commit.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.optional_commit.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateOptionalCommitKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.app.log.private.optional_commit.$post> },
      ) => parseResponse(client.app.log.private.optional_commit.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivatePrefixCertKey() {
  return ['app', '/app/log/private/prefix_cert', 'POST'] as const
}

export function usePostAppLogPrivatePrefixCert<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.private.prefix_cert.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.private.prefix_cert.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivatePrefixCertKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.app.log.private.prefix_cert.$post> },
      ) => parseResponse(client.app.log.private.prefix_cert.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivateRawTextIdKey() {
  return ['app', '/app/log/private/raw_text/:id', 'POST'] as const
}

export function usePostAppLogPrivateRawTextId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.app.log.private.raw_text)[':id']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.app.log.private.raw_text)[':id']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateRawTextIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.app.log.private.raw_text)[':id']['$post']> },
      ) => parseResponse(client.app.log.private.raw_text[':id'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostAppLogPrivateUninstallCommittedIndexKey() {
  return ['app', '/app/log/private/uninstall_committed_index', 'POST'] as const
}

export function usePostAppLogPrivateUninstallCommittedIndex<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.private.uninstall_committed_index.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPrivateUninstallCommittedIndexKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () =>
        parseResponse(
          client.app.log.private.uninstall_committed_index.$post(undefined, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAppLogPublicKey(args: InferRequestType<typeof client.app.log.public.$get>) {
  return ['app', '/app/log/public', args] as const
}

export function useGetAppLogPublic<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPublicKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublic<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPublicKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppLogPublicKey() {
  return ['app', '/app/log/public', 'POST'] as const
}

export function usePostAppLogPublic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.public.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogPublicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.app.log.public.$post> }) =>
        parseResponse(client.app.log.public.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppLogPublicKey() {
  return ['app', '/app/log/public', 'DELETE'] as const
}

export function useDeleteAppLogPublic<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.$delete>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.app.log.public.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppLogPublicKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.app.log.public.$delete> }) =>
        parseResponse(client.app.log.public.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAppLogPublicAllKey() {
  return ['app', '/app/log/public/all', 'DELETE'] as const
}

export function useDeleteAppLogPublicAll<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.all.$delete>>>
      >
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAppLogPublicAllKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.app.log.public.all.$delete(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppLogPublicBackupKey(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
) {
  return ['app', '/app/log/public/backup', args] as const
}

export function useGetAppLogPublicBackup<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
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
        ? getGetAppLogPublicBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.backup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicBackup<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.backup.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
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
        ? getGetAppLogPublicBackupKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.backup.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.backup.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicCoseEndorsementsKey() {
  return ['app', '/app/log/public/cose_endorsements'] as const
}

export function useGetAppLogPublicCoseEndorsements<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
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
    enabled !== false
      ? customKey === undefined
        ? getGetAppLogPublicCoseEndorsementsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.public.cose_endorsements.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicCoseEndorsements<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
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
    enabled !== false
      ? customKey === undefined
        ? getGetAppLogPublicCoseEndorsementsKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.cose_endorsements.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.public.cose_endorsements.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicCoseReceiptKey() {
  return ['app', '/app/log/public/cose_receipt'] as const
}

export function useGetAppLogPublicCoseReceipt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
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
        ? getGetAppLogPublicCoseReceiptKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.cose_receipt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicCoseReceipt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
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
        ? getGetAppLogPublicCoseReceiptKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_receipt.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.cose_receipt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicCoseSignatureKey() {
  return ['app', '/app/log/public/cose_signature'] as const
}

export function useGetAppLogPublicCoseSignature<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
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
        ? getGetAppLogPublicCoseSignatureKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.public.cose_signature.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicCoseSignature<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>>
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
        ? getGetAppLogPublicCoseSignatureKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.cose_signature.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.public.cose_signature.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicCountKey() {
  return ['app', '/app/log/public/count'] as const
}

export function useGetAppLogPublicCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPublicCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicCount<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogPublicCountKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.count.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.count.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicHistoricalRangeKey(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
) {
  return ['app', '/app/log/public/historical/range', args] as const
}

export function useGetAppLogPublicHistoricalRange<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
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
        ? getGetAppLogPublicHistoricalRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.historical.range.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicHistoricalRange<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.historical.range.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
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
        ? getGetAppLogPublicHistoricalRangeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical.range.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.historical.range.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicHistoricalReceiptKey(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
) {
  return ['app', '/app/log/public/historical_receipt', args] as const
}

export function useGetAppLogPublicHistoricalReceipt<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
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
        ? getGetAppLogPublicHistoricalReceiptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.historical_receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicHistoricalReceipt<TError = unknown>(
  args: InferRequestType<typeof client.app.log.public.historical_receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
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
        ? getGetAppLogPublicHistoricalReceiptKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.historical_receipt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.historical_receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicTrustedKeysKey() {
  return ['app', '/app/log/public/trusted_keys'] as const
}

export function useGetAppLogPublicTrustedKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
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
        ? getGetAppLogPublicTrustedKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.trusted_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicTrustedKeys<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
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
        ? getGetAppLogPublicTrustedKeysKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.public.trusted_keys.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.public.trusted_keys.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogPublicVerifyCoseReceiptKey() {
  return ['app', '/app/log/public/verify_cose_receipt'] as const
}

export function useGetAppLogPublicVerifyCoseReceipt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
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
    enabled !== false
      ? customKey === undefined
        ? getGetAppLogPublicVerifyCoseReceiptKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.public.verify_cose_receipt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogPublicVerifyCoseReceipt<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
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
    enabled !== false
      ? customKey === undefined
        ? getGetAppLogPublicVerifyCoseReceiptKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.public.verify_cose_receipt.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.public.verify_cose_receipt.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppLogRequestQueryKey() {
  return ['app', '/app/log/request_query'] as const
}

export function useGetAppLogRequestQuery<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogRequestQueryKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.request_query.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogRequestQuery<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppLogRequestQueryKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.request_query.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.log.request_query.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppLogSignedStatementKey() {
  return ['app', '/app/log/signed_statement', 'POST'] as const
}

export function usePostAppLogSignedStatement<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.app.log.signed_statement.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppLogSignedStatementKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.app.log.signed_statement.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppLogTransparentStatementKey() {
  return ['app', '/app/log/transparent_statement'] as const
}

export function useGetAppLogTransparentStatement<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
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
        ? getGetAppLogTransparentStatementKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.transparent_statement.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppLogTransparentStatement<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>>
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
        ? getGetAppLogTransparentStatementKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.app.log.transparent_statement.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.app.log.transparent_statement.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAppMultiAuthKey() {
  return ['app', '/app/multi_auth', 'POST'] as const
}

export function usePostAppMultiAuth<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.multi_auth.$post>>>>
    >,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAppMultiAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.app.multi_auth.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAppReceiptKey(args: InferRequestType<typeof client.app.receipt.$get>) {
  return ['app', '/app/receipt', args] as const
}

export function useGetAppReceipt<TError = unknown>(
  args: InferRequestType<typeof client.app.receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppReceiptKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppReceipt<TError = unknown>(
  args: InferRequestType<typeof client.app.receipt.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppReceiptKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.receipt.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppReceiptCoseKey(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
) {
  return ['app', '/app/receipt/cose', args] as const
}

export function useGetAppReceiptCose<TError = unknown>(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppReceiptCoseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.receipt.cose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAppReceiptCose<TError = unknown>(
  args: InferRequestType<typeof client.app.receipt.cose.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppReceiptCoseKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.receipt.cose.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.app.receipt.cose.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAppTxKey(args: InferRequestType<typeof client.app.tx.$get>) {
  return ['app', '/app/tx', args] as const
}

export function useGetAppTx<TError = unknown>(
  args: InferRequestType<typeof client.app.tx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppTxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.app.tx.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAppTx<TError = unknown>(
  args: InferRequestType<typeof client.app.tx.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAppTxKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.app.tx.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.app.tx.$get(args, clientOptions)), restSwrOptions),
  }
}
