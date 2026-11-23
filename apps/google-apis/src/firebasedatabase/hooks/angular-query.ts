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

export function getV1betaKey() {
  return ['v1beta'] as const
}

export function getV1betaNameQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':name']['$get']>,
) {
  return ['v1beta', '/v1beta/:name', args] as const
}

export function getV1betaNameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1beta)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaNameQueryKey>
  >({
    queryKey: getV1betaNameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':name']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaNameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1betaNameQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteV1betaNameMutationKey() {
  return ['v1beta', '/v1beta/:name', 'DELETE'] as const
}

export function getDeleteV1betaNameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1betaNameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name']['$delete']>) {
      return parseResponse(client.v1beta[':name'].$delete(args, options))
    },
  })
}

export function injectDeleteV1betaName<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name']['$delete']>,
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
    const mutationDefaults = getDeleteV1betaNameMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaNameDisableMutationKey() {
  return ['v1beta', '/v1beta/:name:disable', 'POST'] as const
}

export function getPostV1betaNameDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:disable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameDisableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:disable']['$post']>) {
      return parseResponse(client.v1beta[':name:disable'].$post(args, options))
    },
  })
}

export function injectPostV1betaNameDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:disable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:disable']['$post']>,
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
    const mutationDefaults = getPostV1betaNameDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaNameReenableMutationKey() {
  return ['v1beta', '/v1beta/:name:reenable', 'POST'] as const
}

export function getPostV1betaNameReenableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:reenable']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:reenable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameReenableMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:reenable']['$post']>) {
      return parseResponse(client.v1beta[':name:reenable'].$post(args, options))
    },
  })
}

export function injectPostV1betaNameReenable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:reenable']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:reenable']['$post']>,
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
    const mutationDefaults = getPostV1betaNameReenableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaNameUndeleteMutationKey() {
  return ['v1beta', '/v1beta/:name:undelete', 'POST'] as const
}

export function getPostV1betaNameUndeleteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1beta)[':name:undelete']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name:undelete']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaNameUndeleteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1beta)[':name:undelete']['$post']>) {
      return parseResponse(client.v1beta[':name:undelete'].$post(args, options))
    },
  })
}

export function injectPostV1betaNameUndelete<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name:undelete']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name:undelete']['$post']>,
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
    const mutationDefaults = getPostV1betaNameUndeleteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1betaParentInstancesQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instances']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/instances', args] as const
}

export function getV1betaParentInstancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['instances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['instances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentInstancesQueryKey>
  >({
    queryKey: getV1betaParentInstancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].instances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaParentInstances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['instances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':parent']['instances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['instances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentInstancesQueryKey>
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
      ...getV1betaParentInstancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaParentInstancesMutationKey() {
  return ['v1beta', '/v1beta/:parent/instances', 'POST'] as const
}

export function getPostV1betaParentInstancesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['instances']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['instances']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentInstancesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['instances']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].instances.$post(args, options))
    },
  })
}

export function injectPostV1betaParentInstances<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['instances']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['instances']['$post']>,
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
    const mutationDefaults = getPostV1betaParentInstancesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
