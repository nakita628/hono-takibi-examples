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

export function getAccountIdKey() {
  return ['{accountId}'] as const
}

export function getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey(
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

export function getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey>
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
      ...getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey>
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
      ...getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId', 'PUT'] as const
}

export function getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function usePutAccountIdVaultsVaultNameMultipartUploadsUploadId<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$put']
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
  const mutationDefaults = getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
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

export function getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationKey() {
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId',
    'POST',
  ] as const
}

export function getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostAccountIdVaultsVaultNameMultipartUploadsUploadId<
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
                  (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
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

export function getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationKey() {
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId',
    'DELETE',
  ] as const
}

export function getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountIdVaultsVaultNameMultipartUploadsUploadId<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$delete']
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
  const mutationDefaults = getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
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

export function getAccountIdVaultsVaultNameLockPolicyQueryKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', keyArgs] as const
}

export function getAccountIdVaultsVaultNameLockPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameLockPolicyQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameLockPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['lock-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameLockPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameLockPolicyQueryKey>
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
      ...getAccountIdVaultsVaultNameLockPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameLockPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameLockPolicyQueryKey>
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
      ...getAccountIdVaultsVaultNameLockPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountIdVaultsVaultNameLockPolicyMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameLockPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameLockPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['lock-policy'].$post(args, options),
      )
    },
  })
}

export function usePostAccountIdVaultsVaultNameLockPolicy<
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
                  (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameLockPolicyMutationOptions<
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

export function getDeleteAccountIdVaultsVaultNameLockPolicyMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', 'DELETE'] as const
}

export function getDeleteAccountIdVaultsVaultNameLockPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdVaultsVaultNameLockPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['lock-policy'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountIdVaultsVaultNameLockPolicy<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$delete']
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
  const mutationDefaults = getDeleteAccountIdVaultsVaultNameLockPolicyMutationOptions<
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

export function getPostAccountIdVaultsVaultNameTagsOperationAddMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/tags#operation=add', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameTagsOperationAddMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameTagsOperationAddMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['tags#operation=add'].$post(args, options),
      )
    },
  })
}

export function usePostAccountIdVaultsVaultNameTagsOperationAdd<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=add']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameTagsOperationAddMutationOptions<
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

export function getPostAccountIdVaultsVaultNameLockPolicyLockIdMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy/:lockId', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameLockPolicyLockIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameLockPolicyLockIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['lock-policy'][':lockId'].$post(args, options),
      )
    },
  })
}

export function usePostAccountIdVaultsVaultNameLockPolicyLockId<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy'][':lockId']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameLockPolicyLockIdMutationOptions<
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

export function getAccountIdVaultsVaultNameQueryKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName', keyArgs] as const
}

export function getAccountIdVaultsVaultNameQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameQueryKey>
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
      ...getAccountIdVaultsVaultNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameQueryKey>
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
      ...getAccountIdVaultsVaultNameQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountIdVaultsVaultNameMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName', 'PUT'] as const
}

export function getPutAccountIdVaultsVaultNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountIdVaultsVaultNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>,
    ) {
      return parseResponse(client[':accountId'].vaults[':vaultName'].$put(args, options))
    },
  })
}

export function usePutAccountIdVaultsVaultName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountIdVaultsVaultNameMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteAccountIdVaultsVaultNameMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName', 'DELETE'] as const
}

export function getDeleteAccountIdVaultsVaultNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdVaultsVaultNameMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>,
    ) {
      return parseResponse(client[':accountId'].vaults[':vaultName'].$delete(args, options))
    },
  })
}

export function useDeleteAccountIdVaultsVaultName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAccountIdVaultsVaultNameMutationOptions<
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

export function getDeleteAccountIdVaultsVaultNameArchivesArchiveIdMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/archives/:archiveId', 'DELETE'] as const
}

export function getDeleteAccountIdVaultsVaultNameArchivesArchiveIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdVaultsVaultNameArchivesArchiveIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].archives[':archiveId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountIdVaultsVaultNameArchivesArchiveId<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['archives'][':archiveId']['$delete']
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
  const mutationDefaults = getDeleteAccountIdVaultsVaultNameArchivesArchiveIdMutationOptions<
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

export function getAccountIdVaultsVaultNameAccessPolicyQueryKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', keyArgs] as const
}

export function getAccountIdVaultsVaultNameAccessPolicyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameAccessPolicyQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameAccessPolicyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['access-policy'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameAccessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameAccessPolicyQueryKey>
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
      ...getAccountIdVaultsVaultNameAccessPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameAccessPolicy<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameAccessPolicyQueryKey>
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
      ...getAccountIdVaultsVaultNameAccessPolicyQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountIdVaultsVaultNameAccessPolicyMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', 'PUT'] as const
}

export function getPutAccountIdVaultsVaultNameAccessPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountIdVaultsVaultNameAccessPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['access-policy'].$put(args, options),
      )
    },
  })
}

export function usePutAccountIdVaultsVaultNameAccessPolicy<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$put']
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
  const mutationDefaults = getPutAccountIdVaultsVaultNameAccessPolicyMutationOptions<
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

export function getDeleteAccountIdVaultsVaultNameAccessPolicyMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', 'DELETE'] as const
}

export function getDeleteAccountIdVaultsVaultNameAccessPolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdVaultsVaultNameAccessPolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['access-policy'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountIdVaultsVaultNameAccessPolicy<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$delete']
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
  const mutationDefaults = getDeleteAccountIdVaultsVaultNameAccessPolicyMutationOptions<
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

export function getAccountIdVaultsVaultNameNotificationConfigurationQueryKey(
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

export function getAccountIdVaultsVaultNameNotificationConfigurationQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameNotificationConfigurationQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameNotificationConfigurationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['notification-configuration'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameNotificationConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameNotificationConfigurationQueryKey>
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
      ...getAccountIdVaultsVaultNameNotificationConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameNotificationConfiguration<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameNotificationConfigurationQueryKey>
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
      ...getAccountIdVaultsVaultNameNotificationConfigurationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountIdVaultsVaultNameNotificationConfigurationMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/notification-configuration', 'PUT'] as const
}

export function getPutAccountIdVaultsVaultNameNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutAccountIdVaultsVaultNameNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['notification-configuration'].$put(args, options),
      )
    },
  })
}

export function usePutAccountIdVaultsVaultNameNotificationConfiguration<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$put']
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
  const mutationDefaults = getPutAccountIdVaultsVaultNameNotificationConfigurationMutationOptions<
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

export function getDeleteAccountIdVaultsVaultNameNotificationConfigurationMutationKey() {
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/notification-configuration',
    'DELETE',
  ] as const
}

export function getDeleteAccountIdVaultsVaultNameNotificationConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountIdVaultsVaultNameNotificationConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['notification-configuration'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteAccountIdVaultsVaultNameNotificationConfiguration<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$delete']
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
    getDeleteAccountIdVaultsVaultNameNotificationConfigurationMutationOptions<
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

export function getAccountIdVaultsVaultNameJobsJobIdQueryKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/jobs/:jobId', keyArgs] as const
}

export function getAccountIdVaultsVaultNameJobsJobIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameJobsJobIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].jobs[':jobId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameJobsJobId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdQueryKey>
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
      ...getAccountIdVaultsVaultNameJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameJobsJobId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdQueryKey>
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
      ...getAccountIdVaultsVaultNameJobsJobIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountIdPoliciesDataRetrievalQueryKey(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/policies/data-retrieval', keyArgs] as const
}

export function getAccountIdPoliciesDataRetrievalQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdPoliciesDataRetrievalQueryKey>
  >({
    queryKey: getAccountIdPoliciesDataRetrievalQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].policies['data-retrieval'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdPoliciesDataRetrieval<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdPoliciesDataRetrievalQueryKey>
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
      ...getAccountIdPoliciesDataRetrievalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdPoliciesDataRetrieval<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdPoliciesDataRetrievalQueryKey>
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
      ...getAccountIdPoliciesDataRetrievalQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPutAccountIdPoliciesDataRetrievalMutationKey() {
  return [':accountId', '/:accountId/policies/data-retrieval', 'PUT'] as const
}

export function getPutAccountIdPoliciesDataRetrievalMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutAccountIdPoliciesDataRetrievalMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>,
    ) {
      return parseResponse(client[':accountId'].policies['data-retrieval'].$put(args, options))
    },
  })
}

export function usePutAccountIdPoliciesDataRetrieval<
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
                  ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutAccountIdPoliciesDataRetrievalMutationOptions<
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

export function getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/jobs/:jobId/output', keyArgs] as const
}

export function getAccountIdVaultsVaultNameJobsJobIdOutputQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].jobs[':jobId'].output.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameJobsJobIdOutput<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey>
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
      ...getAccountIdVaultsVaultNameJobsJobIdOutputQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameJobsJobIdOutput<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey>
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
      ...getAccountIdVaultsVaultNameJobsJobIdOutputQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountIdVaultsVaultNameJobsQueryKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/jobs', keyArgs] as const
}

export function getAccountIdVaultsVaultNameJobsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameJobsQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameJobsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].jobs.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameJobsQueryKey>
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
      ...getAccountIdVaultsVaultNameJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameJobsQueryKey>
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
      ...getAccountIdVaultsVaultNameJobsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountIdVaultsVaultNameJobsMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/jobs', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']
      >,
    ) {
      return parseResponse(client[':accountId'].vaults[':vaultName'].jobs.$post(args, options))
    },
  })
}

export function usePostAccountIdVaultsVaultNameJobs<
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
                ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountIdVaultsVaultNameJobsMutationOptions<
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

export function getAccountIdVaultsVaultNameMultipartUploadsQueryKey(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads', keyArgs] as const
}

export function getAccountIdVaultsVaultNameMultipartUploadsQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameMultipartUploadsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameMultipartUploads<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsQueryKey>
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
      ...getAccountIdVaultsVaultNameMultipartUploadsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameMultipartUploads<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsQueryKey>
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
      ...getAccountIdVaultsVaultNameMultipartUploadsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountIdVaultsVaultNameMultipartUploadsMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameMultipartUploadsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameMultipartUploadsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'].$post(args, options),
      )
    },
  })
}

export function usePostAccountIdVaultsVaultNameMultipartUploads<
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
                  (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameMultipartUploadsMutationOptions<
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

export function getAccountIdProvisionedCapacityQueryKey(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/provisioned-capacity', keyArgs] as const
}

export function getAccountIdProvisionedCapacityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdProvisionedCapacityQueryKey>
  >({
    queryKey: getAccountIdProvisionedCapacityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId']['provisioned-capacity'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdProvisionedCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdProvisionedCapacityQueryKey>
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
      ...getAccountIdProvisionedCapacityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdProvisionedCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdProvisionedCapacityQueryKey>
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
      ...getAccountIdProvisionedCapacityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostAccountIdProvisionedCapacityMutationKey() {
  return [':accountId', '/:accountId/provisioned-capacity', 'POST'] as const
}

export function getPostAccountIdProvisionedCapacityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdProvisionedCapacityMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$post']>,
    ) {
      return parseResponse(client[':accountId']['provisioned-capacity'].$post(args, options))
    },
  })
}

export function usePostAccountIdProvisionedCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAccountIdProvisionedCapacityMutationOptions<
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

export function getAccountIdVaultsVaultNameTagsQueryKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults/:vaultName/tags', keyArgs] as const
}

export function getAccountIdVaultsVaultNameTagsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameTagsQueryKey>
  >({
    queryKey: getAccountIdVaultsVaultNameTagsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].tags.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useAccountIdVaultsVaultNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameTagsQueryKey>
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
      ...getAccountIdVaultsVaultNameTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseAccountIdVaultsVaultNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsVaultNameTagsQueryKey>
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
      ...getAccountIdVaultsVaultNameTagsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getAccountIdVaultsQueryKey(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return [':accountId', '/:accountId/vaults', keyArgs] as const
}

export function getAccountIdVaultsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsQueryKey>
  >({
    queryKey: getAccountIdVaultsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client[':accountId'].vaults.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useAccountIdVaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getAccountIdVaultsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseAccountIdVaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountIdVaultsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getAccountIdVaultsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostAccountIdVaultsVaultNameTagsOperationRemoveMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/tags#operation=remove', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameTagsOperationRemoveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameTagsOperationRemoveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
      >,
    ) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['tags#operation=remove'].$post(args, options),
      )
    },
  })
}

export function usePostAccountIdVaultsVaultNameTagsOperationRemove<
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['tags#operation=remove']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameTagsOperationRemoveMutationOptions<
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

export function getPostAccountIdVaultsVaultNameArchivesMutationKey() {
  return [':accountId', '/:accountId/vaults/:vaultName/archives', 'POST'] as const
}

export function getPostAccountIdVaultsVaultNameArchivesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountIdVaultsVaultNameArchivesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']
      >,
    ) {
      return parseResponse(client[':accountId'].vaults[':vaultName'].archives.$post(args, options))
    },
  })
}

export function usePostAccountIdVaultsVaultNameArchives<
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
                  (typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)[':accountId']['vaults'][':vaultName']['archives']['$post']
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
  const mutationDefaults = getPostAccountIdVaultsVaultNameArchivesMutationOptions<
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
