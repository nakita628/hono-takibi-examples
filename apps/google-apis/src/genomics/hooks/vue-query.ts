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

export function getV2alpha1Key() {
  return ['v2alpha1'] as const
}

export function getPostV2alpha1PipelinesRunMutationKey() {
  return ['v2alpha1', '/v2alpha1/pipelines:run', 'POST'] as const
}

export function getPostV2alpha1PipelinesRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha1)['pipelines:run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1PipelinesRunMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>) {
      return parseResponse(client.v2alpha1['pipelines:run'].$post(args, options))
    },
  })
}

export function usePostV2alpha1PipelinesRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2alpha1)['pipelines:run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2alpha1)['pipelines:run']['$post']>,
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
  const mutationDefaults = getPostV2alpha1PipelinesRunMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alpha1WorkersIdCheckInMutationKey() {
  return ['v2alpha1', '/v2alpha1/workers/:id:checkIn', 'POST'] as const
}

export function getPostV2alpha1WorkersIdCheckInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1WorkersIdCheckInMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
    ) {
      return parseResponse(client.v2alpha1.workers[':id:checkIn'].$post(args, options))
    },
  })
}

export function usePostV2alpha1WorkersIdCheckIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2alpha1.workers)[':id:checkIn']['$post']>,
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
  const mutationDefaults = getPostV2alpha1WorkersIdCheckInMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2alpha1IdCheckInMutationKey() {
  return ['v2alpha1', '/v2alpha1/:id:checkIn', 'POST'] as const
}

export function getPostV2alpha1IdCheckInMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':id:checkIn']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1IdCheckInMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>) {
      return parseResponse(client.v2alpha1[':id:checkIn'].$post(args, options))
    },
  })
}

export function usePostV2alpha1IdCheckIn<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2alpha1)[':id:checkIn']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2alpha1)[':id:checkIn']['$post']>,
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
  const mutationDefaults = getPostV2alpha1IdCheckInMutationOptions<TError, TOnMutateResult>(
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

export function getV2alpha1NameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2alpha1)[':name']['$get']>>,
) {
  return ['v2alpha1', '/v2alpha1/:name', toValue(args)] as const
}

export function getV2alpha1NameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2alpha1)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2alpha1NameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2alpha1[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2alpha1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2alpha1)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2alpha1NameQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2alpha1NameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2alpha1NameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2alpha1[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2alpha1NameCancelMutationKey() {
  return ['v2alpha1', '/v2alpha1/:name:cancel', 'POST'] as const
}

export function getPostV2alpha1NameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2alpha1)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2alpha1NameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>) {
      return parseResponse(client.v2alpha1[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV2alpha1NameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2alpha1)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2alpha1)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV2alpha1NameCancelMutationOptions<TError, TOnMutateResult>(
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
