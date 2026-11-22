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

export function getPetKey() {
  return ['pet'] as const
}

export function getPetIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pet)[':id']['$get']>>,
) {
  return ['pet', '/pet/:id', toValue(args)] as const
}

export function getPetIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pet)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pet[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePetId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pet)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPetIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pet[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPetIdMutationKey() {
  return ['pet', '/pet/:id', 'PUT'] as const
}

export function getPutPetIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.pet)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPetIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pet)[':id']['$put']>) {
      return parseResponse(client.pet[':id'].$put(args, options))
    },
  })
}

export function usePutPetId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pet)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pet)[':id']['$put']>,
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
  const mutationDefaults = getPutPetIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
