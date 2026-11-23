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

export function getImagesKey() {
  return ['images'] as const
}

export function getPassportsKey() {
  return ['passports'] as const
}

export function getPassportsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.passports)[':id']['$get']>>,
) {
  return ['passports', '/passports/:id', toValue(args)] as const
}

export function getPassportsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.passports)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPassportsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.passports[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePassportsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.passports)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getPassportsIdQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPassportsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPassportsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.passports[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPassportsIdMutationKey() {
  return ['passports', '/passports/:id', 'POST'] as const
}

export function getPostPassportsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.passports)[':id']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPassportsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.passports)[':id']['$post']>) {
      return parseResponse(client.passports[':id'].$post(args, options))
    },
  })
}

export function usePostPassportsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.passports)[':id']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.passports)[':id']['$post']>,
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
  const mutationDefaults = getPostPassportsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getImagesFilenameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':filename']['$get']>>,
) {
  return ['images', '/images/:filename', toValue(args)] as const
}

export function getImagesFilenameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':filename']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getImagesFilenameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.images[':filename'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useImagesFilename<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.images)[':filename']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
            >
          >,
          ReturnType<typeof getImagesFilenameQueryKey>
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
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getImagesFilenameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getImagesFilenameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.images[':filename'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutImagesFilenameMutationKey() {
  return ['images', '/images/:filename', 'PUT'] as const
}

export function getPutImagesFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':filename']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutImagesFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':filename']['$put']>) {
      return parseResponse(client.images[':filename'].$put(args, options))
    },
  })
}

export function usePutImagesFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$put']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.images)[':filename']['$put']>,
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
  const mutationDefaults = getPutImagesFilenameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteImagesFilenameMutationKey() {
  return ['images', '/images/:filename', 'DELETE'] as const
}

export function getDeleteImagesFilenameMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.images)[':filename']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.images)[':filename']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteImagesFilenameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.images)[':filename']['$delete']>) {
      return parseResponse(client.images[':filename'].$delete(args, options))
    },
  })
}

export function useDeleteImagesFilename<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.images)[':filename']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.images)[':filename']['$delete']>,
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
  const mutationDefaults = getDeleteImagesFilenameMutationOptions<TError, TOnMutateResult>(
    clientOptions,
  )
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
