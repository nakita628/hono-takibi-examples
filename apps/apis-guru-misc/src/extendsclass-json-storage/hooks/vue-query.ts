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

export function getBinKey() {
  return ['bin'] as const
}

export function getPostBinMutationKey() {
  return ['bin', '/bin', 'POST'] as const
}

export function getPostBinMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bin.$post>>>>>,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostBinMutationKey(),
    async mutationFn() {
      return parseResponse(client.bin.$post(undefined, options))
    },
  })
}

export function usePostBin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.bin.$post>>>>>,
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
  const mutationDefaults = getPostBinMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBinIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bin)[':id']['$get']>>,
) {
  return ['bin', '/bin/:id', toValue(args)] as const
}

export function getBinIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bin)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBinIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.bin[':id'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBinId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.bin)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getBinIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBinIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBinIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.bin[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutBinIdMutationKey() {
  return ['bin', '/bin/:id', 'PUT'] as const
}

export function getPutBinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.bin)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutBinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)[':id']['$put']>) {
      return parseResponse(client.bin[':id'].$put(args, options))
    },
  })
}

export function usePutBinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bin)[':id']['$put']>,
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
  const mutationDefaults = getPutBinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteBinIdMutationKey() {
  return ['bin', '/bin/:id', 'DELETE'] as const
}

export function getDeleteBinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.bin)[':id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteBinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)[':id']['$delete']>) {
      return parseResponse(client.bin[':id'].$delete(args, options))
    },
  })
}

export function useDeleteBinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$delete']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bin)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteBinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchBinIdMutationKey() {
  return ['bin', '/bin/:id', 'PATCH'] as const
}

export function getPatchBinIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.bin)[':id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchBinIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.bin)[':id']['$patch']>) {
      return parseResponse(client.bin[':id'].$patch(args, options))
    },
  })
}

export function usePatchBinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.bin)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.bin)[':id']['$patch']>,
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
  const mutationDefaults = getPatchBinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
