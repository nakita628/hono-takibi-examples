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

export function getV1alpha2Key() {
  return ['v1alpha2'] as const
}

export function getV1alpha2NameQueryKey(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
) {
  return ['v1alpha2', '/v1alpha2/:name', args] as const
}

export function getV1alpha2NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha2NameQueryKey>
  >({
    queryKey: getV1alpha2NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha2[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1alpha2Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha2)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha2NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1alpha2NameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1alpha2NameMutationKey() {
  return ['v1alpha2', '/v1alpha2/:name', 'DELETE'] as const
}

export function getDeleteV1alpha2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1alpha2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>) {
      return parseResponse(client.v1alpha2[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1alpha2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1alpha2NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchV1alpha2NameMutationKey() {
  return ['v1alpha2', '/v1alpha2/:name', 'PATCH'] as const
}

export function getPatchV1alpha2NameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1alpha2NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>) {
      return parseResponse(client.v1alpha2[':name'].$patch(args, options))
    },
  })
}

export function injectPatchV1alpha2Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':name']['$patch']>,
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
    const mutationDefaults = getPatchV1alpha2NameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1alpha2NameCancelMutationKey() {
  return ['v1alpha2', '/v1alpha2/:name:cancel', 'POST'] as const
}

export function getPostV1alpha2NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1alpha2)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha2NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>) {
      return parseResponse(client.v1alpha2[':name:cancel'].$post(args, options))
    },
  })
}

export function injectPostV1alpha2NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':name:cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':name:cancel']['$post']>,
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
    const mutationDefaults = getPostV1alpha2NameCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1alpha2ParentWorkerPoolsQueryKey(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
) {
  return ['v1alpha2', '/v1alpha2/:parent/workerPools', args] as const
}

export function getV1alpha2ParentWorkerPoolsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1alpha2ParentWorkerPoolsQueryKey>
  >({
    queryKey: getV1alpha2ParentWorkerPoolsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1alpha2[':parent'].workerPools.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1alpha2ParentWorkerPools<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1alpha2ParentWorkerPoolsQueryKey>
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
      ...getV1alpha2ParentWorkerPoolsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1alpha2ParentWorkerPoolsMutationKey() {
  return ['v1alpha2', '/v1alpha2/:parent/workerPools', 'POST'] as const
}

export function getPostV1alpha2ParentWorkerPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1alpha2ParentWorkerPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
    ) {
      return parseResponse(client.v1alpha2[':parent'].workerPools.$post(args, options))
    },
  })
}

export function injectPostV1alpha2ParentWorkerPools<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1alpha2)[':parent']['workerPools']['$post']>,
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
    const mutationDefaults = getPostV1alpha2ParentWorkerPoolsMutationOptions<
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
