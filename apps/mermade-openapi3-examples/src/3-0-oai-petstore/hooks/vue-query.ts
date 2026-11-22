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
    void,
    TOnMutateResult
  >({
    mutationKey: getPostPetsMutationKey(),
    async mutationFn() {
      return parseResponse(client.pets.$post(undefined, options))
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
          void,
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

export function getPetsPetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pets)[':petId']['$get']>>,
) {
  return ['pets', '/pets/:petId', toValue(args)] as const
}

export function getPetsPetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pets)[':petId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetsPetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pets[':petId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePetsPetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pets)[':petId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>
            >
          >,
          ReturnType<typeof getPetsPetIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pets)[':petId']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetsPetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetsPetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pets[':petId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
