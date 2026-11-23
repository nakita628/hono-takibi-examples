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

export function getPetsKey() {
  return ['pets'] as const
}

export function getPetsQueryKey(args: InferRequestType<typeof client.pets.$get>) {
  return ['pets', '/pets', args] as const
}

export function getPetsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pets.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPetsQueryKey>
  >({
    queryKey: getPetsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pets.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.pets.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPetsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostPetsMutationKey() {
  return ['pets', '/pets', 'POST'] as const
}

export function getPostPetsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$post>>>>>,
    TError,
    InferRequestType<typeof client.pets.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPetsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pets.$post>) {
      return parseResponse(client.pets.$post(args, options))
    },
  })
}

export function injectPostPets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$post>>>>>,
        TError,
        InferRequestType<typeof client.pets.$post>,
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
    const mutationDefaults = getPostPetsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPetsIdQueryKey(args: InferRequestType<(typeof client.pets)[':id']['$get']>) {
  return ['pets', '/pets/:id', args] as const
}

export function getPetsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.pets)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetsIdQueryKey>
  >({
    queryKey: getPetsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pets[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.pets)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPetsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPetsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeletePetsIdMutationKey() {
  return ['pets', '/pets/:id', 'DELETE'] as const
}

export function getDeletePetsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.pets)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePetsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pets)[':id']['$delete']>) {
      return parseResponse(client.pets[':id'].$delete(args, options))
    },
  })
}

export function injectDeletePetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$delete']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.pets)[':id']['$delete']>,
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
    const mutationDefaults = getDeletePetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
