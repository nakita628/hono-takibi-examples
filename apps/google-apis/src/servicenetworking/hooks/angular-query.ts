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

export function getPatchV1betaNameConnectionsMutationKey() {
  return ['v1beta', '/v1beta/:name/connections', 'PATCH'] as const
}

export function getPatchV1betaNameConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':name']['connections']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':name']['connections']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1betaNameConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':name']['connections']['$patch']>,
    ) {
      return parseResponse(client.v1beta[':name'].connections.$patch(args, options))
    },
  })
}

export function injectPatchV1betaNameConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':name']['connections']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':name']['connections']['$patch']>,
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
    const mutationDefaults = getPatchV1betaNameConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1betaParentConnectionsQueryKey(
  args: InferRequestType<(typeof client.v1beta)[':parent']['connections']['$get']>,
) {
  return ['v1beta', '/v1beta/:parent/connections', args] as const
}

export function getV1betaParentConnectionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1beta)[':parent']['connections']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['connections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1betaParentConnectionsQueryKey>
  >({
    queryKey: getV1betaParentConnectionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1beta[':parent'].connections.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1betaParentConnections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1beta)[':parent']['connections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1beta)[':parent']['connections']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['connections']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1betaParentConnectionsQueryKey>
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
      ...getV1betaParentConnectionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostV1betaParentConnectionsMutationKey() {
  return ['v1beta', '/v1beta/:parent/connections', 'POST'] as const
}

export function getPostV1betaParentConnectionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent']['connections']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent']['connections']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentConnectionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent']['connections']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent'].connections.$post(args, options))
    },
  })
}

export function injectPostV1betaParentConnections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent']['connections']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent']['connections']['$post']>,
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
    const mutationDefaults = getPostV1betaParentConnectionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostV1betaParentAddSubnetworkMutationKey() {
  return ['v1beta', '/v1beta/:parent:addSubnetwork', 'POST'] as const
}

export function getPostV1betaParentAddSubnetworkMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent:addSubnetwork']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent:addSubnetwork']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentAddSubnetworkMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent:addSubnetwork']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent:addSubnetwork'].$post(args, options))
    },
  })
}

export function injectPostV1betaParentAddSubnetwork<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent:addSubnetwork']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent:addSubnetwork']['$post']>,
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
    const mutationDefaults = getPostV1betaParentAddSubnetworkMutationOptions<
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

export function getPostV1betaParentSearchRangeMutationKey() {
  return ['v1beta', '/v1beta/:parent:searchRange', 'POST'] as const
}

export function getPostV1betaParentSearchRangeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1beta)[':parent:searchRange']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1beta)[':parent:searchRange']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1betaParentSearchRangeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1beta)[':parent:searchRange']['$post']>,
    ) {
      return parseResponse(client.v1beta[':parent:searchRange'].$post(args, options))
    },
  })
}

export function injectPostV1betaParentSearchRange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1beta)[':parent:searchRange']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1beta)[':parent:searchRange']['$post']>,
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
    const mutationDefaults = getPostV1betaParentSearchRangeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
