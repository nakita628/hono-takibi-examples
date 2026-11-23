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

export function getV1alpha1Key() {
  return ['v1alpha1'] as const
}

export function getV1alpha1TablesQueryKey(
  args: InferRequestType<typeof client.v1alpha1.tables.$get>,
) {
  return ['v1alpha1', '/v1alpha1/tables', args] as const
}

export function getV1alpha1TablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1alpha1.tables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1TablesQueryKey>
  >({
    queryKey: getV1alpha1TablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1.tables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1alpha1Tables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1alpha1.tables.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.tables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1TablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alpha1TablesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1alpha1WorkspacesQueryKey(
  args: InferRequestType<typeof client.v1alpha1.workspaces.$get>,
) {
  return ['v1alpha1', '/v1alpha1/workspaces', args] as const
}

export function getV1alpha1WorkspacesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1alpha1.workspaces.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1WorkspacesQueryKey>
  >({
    queryKey: getV1alpha1WorkspacesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1.workspaces.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1alpha1Workspaces<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1alpha1.workspaces.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1alpha1.workspaces.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1WorkspacesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alpha1WorkspacesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1alpha1NameQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:name', args] as const
}

export function getV1alpha1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1NameQueryKey>
  >({
    queryKey: getV1alpha1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alpha1NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'DELETE'] as const
}

export function getDeleteV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>) {
      return parseResponse(client.v1alpha1[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1alpha1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1alpha1NameMutationKey() {
  return ['v1alpha1', '/v1alpha1/:name', 'PATCH'] as const
}

export function getPatchV1alpha1NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>) {
      return parseResponse(client.v1alpha1[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1alpha1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1alpha1NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1alpha1ParentRowsQueryKey(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
) {
  return ['v1alpha1', '/v1alpha1/:parent/rows', args] as const
}

export function getV1alpha1ParentRowsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha1ParentRowsQueryKey>
  >({
    queryKey: getV1alpha1ParentRowsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha1[':parent'].rows.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1alpha1ParentRows<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha1ParentRowsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alpha1ParentRowsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostV1alpha1ParentRowsMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows', 'POST'] as const
}

export function getPostV1alpha1ParentRowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentRowsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$post']>) {
      return parseResponse(client.v1alpha1[':parent'].rows.$post(args, options))
    },
  })
}

export function injectPostV1alpha1ParentRows<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':parent']['rows']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentRowsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1alpha1ParentRowsBatchCreateMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows:batchCreate', 'POST'] as const
}

export function getPostV1alpha1ParentRowsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentRowsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent']['rows:batchCreate'].$post(args, options))
    },
  })
}

export function injectPostV1alpha1ParentRowsBatchCreate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchCreate']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentRowsBatchCreateMutationOptions<
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

export function getPostV1alpha1ParentRowsBatchDeleteMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows:batchDelete', 'POST'] as const
}

export function getPostV1alpha1ParentRowsBatchDeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentRowsBatchDeleteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent']['rows:batchDelete'].$post(args, options))
    },
  })
}

export function injectPostV1alpha1ParentRowsBatchDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchDelete']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentRowsBatchDeleteMutationOptions<
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

export function getPostV1alpha1ParentRowsBatchUpdateMutationKey() {
  return ['v1alpha1', '/v1alpha1/:parent/rows:batchUpdate', 'POST'] as const
}

export function getPostV1alpha1ParentRowsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha1ParentRowsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>,
    ) {
      return parseResponse(client.v1alpha1[':parent']['rows:batchUpdate'].$post(args, options))
    },
  })
}

export function injectPostV1alpha1ParentRowsBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha1)[':parent']['rows:batchUpdate']['$post']>,
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
    const mutationDefaults = getPostV1alpha1ParentRowsBatchUpdateMutationOptions<
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
