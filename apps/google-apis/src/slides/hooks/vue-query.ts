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

export function getV1Key() {
  return ['v1'] as const
}

export function getPostV1PresentationsMutationKey() {
  return ['v1', '/v1/presentations', 'POST'] as const
}

export function getPostV1PresentationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.presentations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.presentations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PresentationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.presentations.$post>) {
      return parseResponse(client.v1.presentations.$post(args, options))
    },
  })
}

export function usePostV1Presentations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.presentations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.presentations.$post>,
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
  const mutationDefaults = getPostV1PresentationsMutationOptions<TError, TOnMutateResult>(
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

export function getV1PresentationsPresentationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>
  >,
) {
  return ['v1', '/v1/presentations/:presentationId', toValue(args)] as const
}

export function getV1PresentationsPresentationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PresentationsPresentationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.presentations[':presentationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PresentationsPresentationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PresentationsPresentationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PresentationsPresentationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PresentationsPresentationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.presentations[':presentationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PresentationsPresentationIdPagesPageObjectIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
    >
  >,
) {
  return ['v1', '/v1/presentations/:presentationId/pages/:pageObjectId', toValue(args)] as const
}

export function getV1PresentationsPresentationIdPagesPageObjectIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PresentationsPresentationIdPagesPageObjectIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.presentations[':presentationId'].pages[':pageObjectId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PresentationsPresentationIdPagesPageObjectId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PresentationsPresentationIdPagesPageObjectIdQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PresentationsPresentationIdPagesPageObjectIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PresentationsPresentationIdPagesPageObjectIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.presentations[':presentationId'].pages[':pageObjectId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
    >
  >,
) {
  return [
    'v1',
    '/v1/presentations/:presentationId/pages/:pageObjectId/thumbnail',
    toValue(args),
  ] as const
}

export function getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.presentations[':presentationId'].pages[':pageObjectId'].thumbnail.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PresentationsPresentationIdPagesPageObjectIdThumbnail<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey>
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
          Awaited<
            ReturnType<
              (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.presentations[':presentationId'].pages[':pageObjectId'].thumbnail.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PresentationsPresentationIdBatchUpdateMutationKey() {
  return ['v1', '/v1/presentations/:presentationId:batchUpdate', 'POST'] as const
}

export function getPostV1PresentationsPresentationIdBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PresentationsPresentationIdBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.presentations[':presentationId:batchUpdate'].$post(args, options),
      )
    },
  })
}

export function usePostV1PresentationsPresentationIdBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.presentations)[':presentationId:batchUpdate']['$post']
          >,
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
  const mutationDefaults = getPostV1PresentationsPresentationIdBatchUpdateMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
