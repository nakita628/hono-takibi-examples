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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1PlaceActionTypeMetadataQueryKey(
  args: InferRequestType<typeof client.v1.placeActionTypeMetadata.$get>,
) {
  return ['v1', '/v1/placeActionTypeMetadata', args] as const
}

export function getV1PlaceActionTypeMetadataQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.placeActionTypeMetadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.placeActionTypeMetadata.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.placeActionTypeMetadata.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PlaceActionTypeMetadataQueryKey>
  >({
    queryKey: getV1PlaceActionTypeMetadataQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.placeActionTypeMetadata.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1PlaceActionTypeMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.placeActionTypeMetadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.placeActionTypeMetadata.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.placeActionTypeMetadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PlaceActionTypeMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1PlaceActionTypeMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1PlaceActionTypeMetadata<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.placeActionTypeMetadata.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.placeActionTypeMetadata.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.placeActionTypeMetadata.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PlaceActionTypeMetadataQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1PlaceActionTypeMetadataQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getV1NameQueryKey(args: InferRequestType<(typeof client.v1)[':name']['$get']>) {
  return ['v1', '/v1/:name', args] as const
}

export function getV1NameQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.v1)[':name']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1NameQueryKey>
  >({
    queryKey: getV1NameQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':name'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseV1Name<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':name']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$get']>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1NameQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getV1NameQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDeleteV1NameMutationKey() {
  return ['v1', '/v1/:name', 'DELETE'] as const
}

export function getDeleteV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$delete']>) {
      return parseResponse(client.v1[':name'].$delete(args, options))
    },
  })
}

export function useDeleteV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPatchV1NameMutationKey() {
  return ['v1', '/v1/:name', 'PATCH'] as const
}

export function getPatchV1NameMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>>
    >,
    TError,
    InferRequestType<(typeof client.v1)[':name']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1NameMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)[':name']['$patch']>) {
      return parseResponse(client.v1[':name'].$patch(args, options))
    },
  })
}

export function usePatchV1Name<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)[':name']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':name']['$patch']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchV1NameMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ParentPlaceActionLinksQueryKey(
  args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>,
) {
  return ['v1', '/v1/:parent/placeActionLinks', args] as const
}

export function getV1ParentPlaceActionLinksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ParentPlaceActionLinksQueryKey>
  >({
    queryKey: getV1ParentPlaceActionLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':parent'].placeActionLinks.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useV1ParentPlaceActionLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentPlaceActionLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getV1ParentPlaceActionLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseV1ParentPlaceActionLinks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1ParentPlaceActionLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getV1ParentPlaceActionLinksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostV1ParentPlaceActionLinksMutationKey() {
  return ['v1', '/v1/:parent/placeActionLinks', 'POST'] as const
}

export function getPostV1ParentPlaceActionLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ParentPlaceActionLinksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$post']>,
    ) {
      return parseResponse(client.v1[':parent'].placeActionLinks.$post(args, options))
    },
  })
}

export function usePostV1ParentPlaceActionLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1)[':parent']['placeActionLinks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1)[':parent']['placeActionLinks']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostV1ParentPlaceActionLinksMutationOptions<TError, TOnMutateResult>(
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
