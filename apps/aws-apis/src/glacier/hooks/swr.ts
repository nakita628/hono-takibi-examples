import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getAccountIdKey() {
  return ['{accountId}'] as const
}

export function getGetAccountIdVaultsVaultNameMultipartUploadsUploadIdKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId',
    keyArgs,
  ] as const
}

export function useGetAccountIdVaultsVaultNameMultipartUploadsUploadId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
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
        ? getGetAccountIdVaultsVaultNameMultipartUploadsUploadIdKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
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
          client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameMultipartUploadsUploadId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
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
        ? getGetAccountIdVaultsVaultNameMultipartUploadsUploadIdKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
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
          client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId', 'PUT'] as const
}

export function usePutAccountIdVaultsVaultNameMultipartUploadsUploadId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdKey() {
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId',
    'POST',
  ] as const
}

export function usePostAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdKey() {
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId',
    'DELETE',
  ] as const
}

export function useDeleteAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameLockPolicyKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameLockPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
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
        ? getGetAccountIdVaultsVaultNameLockPolicyKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
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
          client[':accountId'].vaults[':vaultName']['lock-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameLockPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
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
        ? getGetAccountIdVaultsVaultNameLockPolicyKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
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
          client[':accountId'].vaults[':vaultName']['lock-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameLockPolicyKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameLockPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameLockPolicyKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['lock-policy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIdVaultsVaultNameLockPolicyKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', 'DELETE'] as const
}

export function useDeleteAccountIdVaultsVaultNameLockPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdVaultsVaultNameLockPolicyKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['lock-policy'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameTagsOperationAddKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/tags#operation=add', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameTagsOperationAdd<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameTagsOperationAddKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['tags#operation=add'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameLockPolicyLockIdKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy/:lockId', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameLockPolicyLockId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameLockPolicyLockIdKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['lock-policy'][':lockId'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName', keyArgs] as const
}

export function useGetAccountIdVaultsVaultName<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
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
        ? getGetAccountIdVaultsVaultNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].vaults[':vaultName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultName<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
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
        ? getGetAccountIdVaultsVaultNameKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].vaults[':vaultName'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountIdVaultsVaultNameKey() {
  return [':accountId', '/:accountId/vaults/:vaultName', 'PUT'] as const
}

export function usePutAccountIdVaultsVaultName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountIdVaultsVaultNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']> },
      ) => parseResponse(client[':accountId'].vaults[':vaultName'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIdVaultsVaultNameKey() {
  return [':accountId', '/:accountId/vaults/:vaultName', 'DELETE'] as const
}

export function useDeleteAccountIdVaultsVaultName<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdVaultsVaultNameKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>
        },
      ) => parseResponse(client[':accountId'].vaults[':vaultName'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIdVaultsVaultNameArchivesArchiveIdKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/archives/:archiveId', 'DELETE'] as const
}

export function useDeleteAccountIdVaultsVaultNameArchivesArchiveId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdVaultsVaultNameArchivesArchiveIdKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName'].archives[':archiveId'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameAccessPolicyKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameAccessPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
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
        ? getGetAccountIdVaultsVaultNameAccessPolicyKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
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
          client[':accountId'].vaults[':vaultName']['access-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameAccessPolicy<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
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
        ? getGetAccountIdVaultsVaultNameAccessPolicyKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
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
          client[':accountId'].vaults[':vaultName']['access-policy'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountIdVaultsVaultNameAccessPolicyKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', 'PUT'] as const
}

export function usePutAccountIdVaultsVaultNameAccessPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountIdVaultsVaultNameAccessPolicyKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['access-policy'].$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIdVaultsVaultNameAccessPolicyKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', 'DELETE'] as const
}

export function useDeleteAccountIdVaultsVaultNameAccessPolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdVaultsVaultNameAccessPolicyKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['access-policy'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameNotificationConfigurationKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/notification-configuration',
    keyArgs,
  ] as const
}

export function useGetAccountIdVaultsVaultNameNotificationConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
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
        ? getGetAccountIdVaultsVaultNameNotificationConfigurationKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
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
          client[':accountId'].vaults[':vaultName']['notification-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameNotificationConfiguration<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
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
        ? getGetAccountIdVaultsVaultNameNotificationConfigurationKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
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
          client[':accountId'].vaults[':vaultName']['notification-configuration'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutAccountIdVaultsVaultNameNotificationConfigurationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/notification-configuration', 'PUT'] as const
}

export function usePutAccountIdVaultsVaultNameNotificationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountIdVaultsVaultNameNotificationConfigurationKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['notification-configuration'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteAccountIdVaultsVaultNameNotificationConfigurationKey() {
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/notification-configuration',
    'DELETE',
  ] as const
}

export function useDeleteAccountIdVaultsVaultNameNotificationConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountIdVaultsVaultNameNotificationConfigurationKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['notification-configuration'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameJobsJobIdKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/jobs/:jobId', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
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
        ? getGetAccountIdVaultsVaultNameJobsJobIdKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
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
          client[':accountId'].vaults[':vaultName'].jobs[':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
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
        ? getGetAccountIdVaultsVaultNameJobsJobIdKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
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
          client[':accountId'].vaults[':vaultName'].jobs[':jobId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountIdPoliciesDataRetrievalKey(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/policies/data-retrieval', keyArgs] as const
}

export function useGetAccountIdPoliciesDataRetrieval<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
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
        ? getGetAccountIdPoliciesDataRetrievalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].policies['data-retrieval'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdPoliciesDataRetrieval<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
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
        ? getGetAccountIdPoliciesDataRetrievalKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].policies['data-retrieval'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutAccountIdPoliciesDataRetrievalKey() {
  return [':accountId', '/:accountId/policies/data-retrieval', 'PUT'] as const
}

export function usePutAccountIdPoliciesDataRetrieval<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutAccountIdPoliciesDataRetrievalKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>
        },
      ) => parseResponse(client[':accountId'].policies['data-retrieval'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameJobsJobIdOutputKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/jobs/:jobId/output', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameJobsJobIdOutput<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
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
        ? getGetAccountIdVaultsVaultNameJobsJobIdOutputKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
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
          client[':accountId'].vaults[':vaultName'].jobs[':jobId'].output.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameJobsJobIdOutput<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
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
        ? getGetAccountIdVaultsVaultNameJobsJobIdOutputKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
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
          client[':accountId'].vaults[':vaultName'].jobs[':jobId'].output.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameJobsKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/jobs', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameJobs<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
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
        ? getGetAccountIdVaultsVaultNameJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].vaults[':vaultName'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameJobs<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
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
        ? getGetAccountIdVaultsVaultNameJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].vaults[':vaultName'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameJobsKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/jobs', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameJobsKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']
          >
        },
      ) => parseResponse(client[':accountId'].vaults[':vaultName'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameMultipartUploadsKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameMultipartUploads<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
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
        ? getGetAccountIdVaultsVaultNameMultipartUploadsKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
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
          client[':accountId'].vaults[':vaultName']['multipart-uploads'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameMultipartUploads<TError = unknown>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
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
        ? getGetAccountIdVaultsVaultNameMultipartUploadsKey(args)
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
                (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
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
          client[':accountId'].vaults[':vaultName']['multipart-uploads'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameMultipartUploadsKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameMultipartUploads<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameMultipartUploadsKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['multipart-uploads'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdProvisionedCapacityKey(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/provisioned-capacity', keyArgs] as const
}

export function useGetAccountIdProvisionedCapacity<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
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
        ? getGetAccountIdProvisionedCapacityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId']['provisioned-capacity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdProvisionedCapacity<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
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
        ? getGetAccountIdProvisionedCapacityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId']['provisioned-capacity'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountIdProvisionedCapacityKey() {
  return [':accountId', '/:accountId/provisioned-capacity', 'POST'] as const
}

export function usePostAccountIdProvisionedCapacity<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdProvisionedCapacityKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$post']>
        },
      ) => parseResponse(client[':accountId']['provisioned-capacity'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountIdVaultsVaultNameTagsKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/tags', keyArgs] as const
}

export function useGetAccountIdVaultsVaultNameTags<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
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
        ? getGetAccountIdVaultsVaultNameTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].vaults[':vaultName'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaultsVaultNameTags<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
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
        ? getGetAccountIdVaultsVaultNameTagsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client[':accountId'].vaults[':vaultName'].tags.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountIdVaultsKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults', keyArgs] as const
}

export function useGetAccountIdVaults<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
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
        ? getGetAccountIdVaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':accountId'].vaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountIdVaults<TError = unknown>(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
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
        ? getGetAccountIdVaultsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client[':accountId'].vaults.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameTagsOperationRemoveKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/tags#operation=remove', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameTagsOperationRemove<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameTagsOperationRemoveKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
          >
        },
      ) =>
        parseResponse(
          client[':accountId'].vaults[':vaultName']['tags#operation=remove'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountIdVaultsVaultNameArchivesKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/archives', 'POST'] as const
}

export function usePostAccountIdVaultsVaultNameArchives<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountIdVaultsVaultNameArchivesKey()
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
            (typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']
          >
        },
      ) =>
        parseResponse(client[':accountId'].vaults[':vaultName'].archives.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
