import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
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

export function createPostV1Presentations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.presentations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v1.presentations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PresentationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PresentationsPresentationIdQueryKey(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
) {
  return ['v1', '/v1/presentations/:presentationId', args] as const
}

export function getV1PresentationsPresentationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PresentationsPresentationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.presentations[':presentationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PresentationsPresentationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.presentations)[':presentationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.presentations)[':presentationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PresentationsPresentationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1PresentationsPresentationIdPagesPageObjectIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
) {
  return ['v1', '/v1/presentations/:presentationId/pages/:pageObjectId', args] as const
}

export function getV1PresentationsPresentationIdPagesPageObjectIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PresentationsPresentationIdPagesPageObjectIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.presentations[':presentationId'].pages[':pageObjectId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PresentationsPresentationIdPagesPageObjectId<
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
  args: () => InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PresentationsPresentationIdPagesPageObjectIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey(
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
) {
  return ['v1', '/v1/presentations/:presentationId/pages/:pageObjectId/thumbnail', args] as const
}

export function getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryOptions<
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
  args: InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.presentations[':presentationId'].pages[':pageObjectId'].thumbnail.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PresentationsPresentationIdPagesPageObjectIdThumbnail<
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
  args: () => InferRequestType<
    (typeof client.v1.presentations)[':presentationId']['pages'][':pageObjectId']['thumbnail']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PresentationsPresentationIdPagesPageObjectIdThumbnailQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
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

export function createPostV1PresentationsPresentationIdBatchUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PresentationsPresentationIdBatchUpdateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
