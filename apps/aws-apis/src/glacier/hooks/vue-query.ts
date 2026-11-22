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

export function getAccountIdKey() {
  return ['{accountId}'] as const
}

export function getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/multipart-uploads/:uploadId',
    keyArgs,
  ] as const
}

export function getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey>
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
              (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName']['multipart-uploads'][':uploadId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/lock-policy', keyArgs] as const
}

export function getAccountIdVaultsVaultNameLockPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameLockPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['lock-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameLockPolicyQueryKey>
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
            ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameLockPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameLockPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName']['lock-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName', keyArgs] as const
}

export function getAccountIdVaultsVaultNameQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameQueryKey>
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
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/access-policy', keyArgs] as const
}

export function getAccountIdVaultsVaultNameAccessPolicyQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameAccessPolicyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['access-policy'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']>
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameAccessPolicyQueryKey>
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
              (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameAccessPolicyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameAccessPolicyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName']['access-policy'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    ':accountId',
    '/:accountId/vaults/:vaultName/notification-configuration',
    keyArgs,
  ] as const
}

export function getAccountIdVaultsVaultNameNotificationConfigurationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameNotificationConfigurationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['notification-configuration'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameNotificationConfigurationQueryKey>
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
              (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameNotificationConfigurationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameNotificationConfigurationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName']['notification-configuration'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/jobs/:jobId', keyArgs] as const
}

export function getAccountIdVaultsVaultNameJobsJobIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameJobsJobIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].jobs[':jobId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdQueryKey>
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
              (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameJobsJobIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName'].jobs[':jobId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountIdPoliciesDataRetrievalQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/policies/data-retrieval', keyArgs] as const
}

export function getAccountIdPoliciesDataRetrievalQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdPoliciesDataRetrievalQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].policies['data-retrieval'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdPoliciesDataRetrievalQueryKey>
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
          Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdPoliciesDataRetrievalQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdPoliciesDataRetrievalQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].policies['data-retrieval'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/jobs/:jobId/output', keyArgs] as const
}

export function getAccountIdVaultsVaultNameJobsJobIdOutputQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].jobs[':jobId'].output.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey>
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
              (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameJobsJobIdOutputQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName'].jobs[':jobId'].output.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountIdVaultsVaultNameJobsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/jobs', keyArgs] as const
}

export function getAccountIdVaultsVaultNameJobsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameJobsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].jobs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameJobsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameJobsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameJobsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName'].jobs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/multipart-uploads', keyArgs] as const
}

export function getAccountIdVaultsVaultNameMultipartUploadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameMultipartUploadsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName']['multipart-uploads'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
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
                    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsQueryKey>
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
              (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameMultipartUploadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameMultipartUploadsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName']['multipart-uploads'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/provisioned-capacity', keyArgs] as const
}

export function getAccountIdProvisionedCapacityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdProvisionedCapacityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId']['provisioned-capacity'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountIdProvisionedCapacityQueryKey>
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
          Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdProvisionedCapacityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdProvisionedCapacityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId']['provisioned-capacity'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults/:vaultName/tags', keyArgs] as const
}

export function getAccountIdVaultsVaultNameTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsVaultNameTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults[':vaultName'].tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsVaultNameTagsQueryKey>
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
          Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsVaultNameTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsVaultNameTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults[':vaultName'].tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountIdVaultsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':accountId']['vaults']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [':accountId', '/:accountId/vaults', keyArgs] as const
}

export function getAccountIdVaultsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':accountId']['vaults']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountIdVaultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client[':accountId'].vaults.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountIdVaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)[':accountId']['vaults']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountIdVaultsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountIdVaultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountIdVaultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client[':accountId'].vaults.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
