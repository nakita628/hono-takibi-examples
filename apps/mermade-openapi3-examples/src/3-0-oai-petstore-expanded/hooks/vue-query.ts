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

export function getPetsKey() {
  return ['pets'] as const
}

export function getPetsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.pets.$get>>) {
  return ['pets', '/pets', toValue(args)] as const
}

export function getPetsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pets.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pets.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePets<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pets.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
          ReturnType<typeof getPetsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pets.$post>>>>>,
          TError,
          InferRequestType<typeof client.pets.$post>,
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

export function getPetsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pets)[':id']['$get']>>,
) {
  return ['pets', '/pets/:id', toValue(args)] as const
}

export function getPetsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pets)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pets[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePetsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pets)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPetsIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pets[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
