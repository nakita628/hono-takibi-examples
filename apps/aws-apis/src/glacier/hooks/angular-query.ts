import {
  injectQuery,
  injectMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/angular-query-experimental'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function injectAccountIdVaultsVaultNameMultipartUploadsUploadId<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads'][':uploadId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameMultipartUploadsUploadIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountIdVaultsVaultNameMultipartUploadsUploadId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountIdVaultsVaultNameMultipartUploadsUploadIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameLockPolicy<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['lock-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameLockPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameLockPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameLockPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountIdVaultsVaultNameLockPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountIdVaultsVaultNameLockPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameTagsOperationAdd<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameTagsOperationAddMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameLockPolicyLockId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameLockPolicyLockIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultName<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':accountId']['vaults'][':vaultName']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAccountIdVaultsVaultName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountIdVaultsVaultNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountIdVaultsVaultName<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountIdVaultsVaultNameMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountIdVaultsVaultNameArchivesArchiveId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountIdVaultsVaultNameArchivesArchiveIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameAccessPolicy<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['access-policy']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameAccessPolicyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAccountIdVaultsVaultNameAccessPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountIdVaultsVaultNameAccessPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountIdVaultsVaultNameAccessPolicy<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountIdVaultsVaultNameAccessPolicyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameNotificationConfiguration<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['notification-configuration']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameNotificationConfigurationQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAccountIdVaultsVaultNameNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountIdVaultsVaultNameNotificationConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteAccountIdVaultsVaultNameNotificationConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getDeleteAccountIdVaultsVaultNameNotificationConfigurationMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameJobsJobId<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameJobsJobIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAccountIdPoliciesDataRetrieval<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':accountId']['policies']['data-retrieval']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdPoliciesDataRetrievalQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutAccountIdPoliciesDataRetrieval<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutAccountIdPoliciesDataRetrievalMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameJobsJobIdOutput<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs'][':jobId']['output']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameJobsJobIdOutputQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameJobs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['jobs']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameJobsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameMultipartUploads<
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
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['multipart-uploads']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameMultipartUploadsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameMultipartUploads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameMultipartUploadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdProvisionedCapacity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['provisioned-capacity']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':accountId']['provisioned-capacity']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdProvisionedCapacityQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountIdProvisionedCapacity<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdProvisionedCapacityMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectAccountIdVaultsVaultNameTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client)[':accountId']['vaults'][':vaultName']['tags']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getAccountIdVaultsVaultNameTagsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectAccountIdVaults<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)[':accountId']['vaults']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)[':accountId']['vaults']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountIdVaultsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameTagsOperationRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameTagsOperationRemoveMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostAccountIdVaultsVaultNameArchives<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountIdVaultsVaultNameArchivesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
