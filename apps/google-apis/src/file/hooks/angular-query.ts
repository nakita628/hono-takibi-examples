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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1NameLocationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
) {
  return ['v1', '/v1/:name/locations', args] as const
}

export function getV1NameLocationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameLocationsQueryKey>
  >({
    queryKey: getV1NameLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1NameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['locations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['locations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1NameOperationsQueryKey(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
) {
  return ['v1', '/v1/:name/operations', args] as const
}

export function getV1NameOperationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameOperationsQueryKey>
  >({
    queryKey: getV1NameOperationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].operations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1NameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':name']['operations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':name']['operations']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameOperationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1NameOperationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1NameCancelMutationKey() {
  return ['v1', '/v1/:name:cancel', 'POST'] as const
}

export function getPostV1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:cancel']['$post']>) {
      return parseResponse(client.v1[':name:cancel'].$post(args, options))
    },
  })
}

export function injectPostV1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:cancel']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1NameRestoreMutationKey() {
  return ['v1', '/v1/:name:restore', 'POST'] as const
}

export function getPostV1NameRestoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:restore']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:restore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameRestoreMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:restore']['$post']>) {
      return parseResponse(client.v1[':name:restore'].$post(args, options))
    },
  })
}

export function injectPostV1NameRestore<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:restore']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:restore']['$post']>,
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
    const mutationDefaults = getPostV1NameRestoreMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1NameRevertMutationKey() {
  return ['v1', '/v1/:name:revert', 'POST'] as const
}

export function getPostV1NameRevertMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:revert']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name:revert']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1NameRevertMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name:revert']['$post']>) {
      return parseResponse(client.v1[':name:revert'].$post(args, options))
    },
  })
}

export function injectPostV1NameRevert<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name:revert']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name:revert']['$post']>,
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
    const mutationDefaults = getPostV1NameRevertMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ParentBackupsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['backups']['$get']>,
) {
  return ['v1', '/v1/:parent/backups', args] as const
}

export function getV1ParentBackupsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['backups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['backups']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['backups']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentBackupsQueryKey>
  >({
    queryKey: getV1ParentBackupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].backups.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1ParentBackups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['backups']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['backups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['backups']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentBackupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentBackupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ParentBackupsMutationKey() {
  return ['v1', '/v1/:parent/backups', 'POST'] as const
}

export function getPostV1ParentBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['backups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['backups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentBackupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['backups']['$post']>) {
      return parseResponse(client.v1[':parent'].backups.$post(args, options))
    },
  })
}

export function injectPostV1ParentBackups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['backups']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['backups']['$post']>,
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
    const mutationDefaults = getPostV1ParentBackupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ParentInstancesQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
) {
  return ['v1', '/v1/:parent/instances', args] as const
}

export function getV1ParentInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentInstancesQueryKey>
  >({
    queryKey: getV1ParentInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentInstancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentInstancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ParentInstancesMutationKey() {
  return ['v1', '/v1/:parent/instances', 'POST'] as const
}

export function getPostV1ParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentInstancesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>) {
      return parseResponse(client.v1[':parent'].instances.$post(args, options))
    },
  })
}

export function injectPostV1ParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['instances']['$post']>,
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
    const mutationDefaults = getPostV1ParentInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1ParentSnapshotsQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['snapshots']['$get']>,
) {
  return ['v1', '/v1/:parent/snapshots', args] as const
}

export function getV1ParentSnapshotsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['snapshots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['snapshots']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['snapshots']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentSnapshotsQueryKey>
  >({
    queryKey: getV1ParentSnapshotsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].snapshots.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1ParentSnapshots<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':parent']['snapshots']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)[':parent']['snapshots']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['snapshots']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentSnapshotsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ParentSnapshotsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1ParentSnapshotsMutationKey() {
  return ['v1', '/v1/:parent/snapshots', 'POST'] as const
}

export function getPostV1ParentSnapshotsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['snapshots']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['snapshots']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentSnapshotsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':parent']['snapshots']['$post']>) {
      return parseResponse(client.v1[':parent'].snapshots.$post(args, options))
    },
  })
}

export function injectPostV1ParentSnapshots<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['snapshots']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['snapshots']['$post']>,
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
    const mutationDefaults = getPostV1ParentSnapshotsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
