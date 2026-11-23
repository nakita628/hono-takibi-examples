import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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

export function usePets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pets.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pets.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPetsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPetsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostPets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$post>>>>>,
        TError,
        InferRequestType<typeof client.pets.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPetsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pets)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPetsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeletePetsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeletePetsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
