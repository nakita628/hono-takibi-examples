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

export function getV2betaKey() {
  return ['v2beta'] as const
}

export function getV2betaNameQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['$get']>>,
) {
  return ['v2beta', '/v2beta/:name', toValue(args)] as const
}

export function getV2betaNameQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaNameQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':name'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaName<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>
            >
          >,
          ReturnType<typeof getV2betaNameQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaNameQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':name'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2betaNameLocationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['locations']['$get']>>,
) {
  return ['v2beta', '/v2beta/:name/locations', toValue(args)] as const
}

export function getV2betaNameLocationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['locations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaNameLocationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':name'].locations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaNameLocations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':name']['locations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['locations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name']['locations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name']['locations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaNameLocationsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':name']['locations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameLocationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaNameLocationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':name'].locations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2betaNameOperationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['operations']['$get']>>,
) {
  return ['v2beta', '/v2beta/:name/operations', toValue(args)] as const
}

export function getV2betaNameOperationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['operations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2betaNameOperationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2beta[':name'].operations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2betaNameOperations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2beta)[':name']['operations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2beta)[':name']['operations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name']['operations']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name']['operations']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2betaNameOperationsQueryKey>
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
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':name']['operations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2betaNameOperationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2betaNameOperationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2beta[':name'].operations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2betaNameCancelMutationKey() {
  return ['v2beta', '/v2beta/:name:cancel', 'POST'] as const
}

export function getPostV2betaNameCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2beta)[':name:cancel']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':name:cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaNameCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2beta)[':name:cancel']['$post']>) {
      return parseResponse(client.v2beta[':name:cancel'].$post(args, options))
    },
  })
}

export function usePostV2betaNameCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':name:cancel']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':name:cancel']['$post']>,
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
  const mutationDefaults = getPostV2betaNameCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2betaParentPipelinesRunMutationKey() {
  return ['v2beta', '/v2beta/:parent/pipelines:run', 'POST'] as const
}

export function getPostV2betaParentPipelinesRunMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v2beta)[':parent']['pipelines:run']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v2beta)[':parent']['pipelines:run']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2betaParentPipelinesRunMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2beta)[':parent']['pipelines:run']['$post']>,
    ) {
      return parseResponse(client.v2beta[':parent']['pipelines:run'].$post(args, options))
    },
  })
}

export function usePostV2betaParentPipelinesRun<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2beta)[':parent']['pipelines:run']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v2beta)[':parent']['pipelines:run']['$post']>,
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
  const mutationDefaults = getPostV2betaParentPipelinesRunMutationOptions<TError, TOnMutateResult>(
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
