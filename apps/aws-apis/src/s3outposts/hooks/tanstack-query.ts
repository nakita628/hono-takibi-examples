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

export function getS3OutpostsKey() {
  return ['S3Outposts'] as const
}

export function getPostS3OutpostsCreateEndpointMutationKey() {
  return ['S3Outposts', '/S3Outposts/CreateEndpoint', 'POST'] as const
}

export function getPostS3OutpostsCreateEndpointMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.CreateEndpoint.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostS3OutpostsCreateEndpointMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post>) {
      return parseResponse(client.S3Outposts.CreateEndpoint.$post(args, options))
    },
  })
}

export function usePostS3OutpostsCreateEndpoint<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.CreateEndpoint.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostS3OutpostsCreateEndpointMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteS3OutpostsDeleteEndpointEndpointIdOutpostIdMutationKey() {
  return ['S3Outposts', '/S3Outposts/DeleteEndpoint#endpointId&outpostId', 'DELETE'] as const
}

export function getDeleteS3OutpostsDeleteEndpointEndpointIdOutpostIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteS3OutpostsDeleteEndpointEndpointIdOutpostIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']
      >,
    ) {
      return parseResponse(
        client.S3Outposts['DeleteEndpoint#endpointId&outpostId'].$delete(args, options),
      )
    },
  })
}

export function useDeleteS3OutpostsDeleteEndpointEndpointIdOutpostId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteS3OutpostsDeleteEndpointEndpointIdOutpostIdMutationOptions<
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

export function getS3OutpostsListEndpointsQueryKey(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['S3Outposts', '/S3Outposts/ListEndpoints', keyArgs] as const
}

export function getS3OutpostsListEndpointsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getS3OutpostsListEndpointsQueryKey>
  >({
    queryKey: getS3OutpostsListEndpointsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.S3Outposts.ListEndpoints.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useS3OutpostsListEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getS3OutpostsListEndpointsQueryKey>
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
      ...getS3OutpostsListEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseS3OutpostsListEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getS3OutpostsListEndpointsQueryKey>
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
      ...getS3OutpostsListEndpointsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getS3OutpostsListOutpostsWithS3QueryKey(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['S3Outposts', '/S3Outposts/ListOutpostsWithS3', keyArgs] as const
}

export function getS3OutpostsListOutpostsWithS3QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getS3OutpostsListOutpostsWithS3QueryKey>
  >({
    queryKey: getS3OutpostsListOutpostsWithS3QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.S3Outposts.ListOutpostsWithS3.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useS3OutpostsListOutpostsWithS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getS3OutpostsListOutpostsWithS3QueryKey>
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
      ...getS3OutpostsListOutpostsWithS3QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseS3OutpostsListOutpostsWithS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getS3OutpostsListOutpostsWithS3QueryKey>
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
      ...getS3OutpostsListOutpostsWithS3QueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getS3OutpostsListSharedEndpointsOutpostIdQueryKey(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['S3Outposts', '/S3Outposts/ListSharedEndpoints#outpostId', keyArgs] as const
}

export function getS3OutpostsListSharedEndpointsOutpostIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getS3OutpostsListSharedEndpointsOutpostIdQueryKey>
  >({
    queryKey: getS3OutpostsListSharedEndpointsOutpostIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.S3Outposts['ListSharedEndpoints#outpostId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useS3OutpostsListSharedEndpointsOutpostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getS3OutpostsListSharedEndpointsOutpostIdQueryKey>
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
      ...getS3OutpostsListSharedEndpointsOutpostIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseS3OutpostsListSharedEndpointsOutpostId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getS3OutpostsListSharedEndpointsOutpostIdQueryKey>
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
      ...getS3OutpostsListSharedEndpointsOutpostIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
