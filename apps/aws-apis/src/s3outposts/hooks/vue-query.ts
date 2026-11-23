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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.S3Outposts.CreateEndpoint.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post>,
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['S3Outposts', '/S3Outposts/ListEndpoints', keyArgs] as const
}

export function getS3OutpostsListEndpointsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getS3OutpostsListEndpointsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.S3Outposts.ListEndpoints.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useS3OutpostsListEndpoints<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
            >
          >,
          ReturnType<typeof getS3OutpostsListEndpointsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getS3OutpostsListEndpointsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getS3OutpostsListEndpointsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.S3Outposts.ListEndpoints.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getS3OutpostsListOutpostsWithS3QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['S3Outposts', '/S3Outposts/ListOutpostsWithS3', keyArgs] as const
}

export function getS3OutpostsListOutpostsWithS3QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getS3OutpostsListOutpostsWithS3QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.S3Outposts.ListOutpostsWithS3.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useS3OutpostsListOutpostsWithS3<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
              >
            >
          >,
          ReturnType<typeof getS3OutpostsListOutpostsWithS3QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getS3OutpostsListOutpostsWithS3QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getS3OutpostsListOutpostsWithS3QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.S3Outposts.ListOutpostsWithS3.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getS3OutpostsListSharedEndpointsOutpostIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['S3Outposts', '/S3Outposts/ListSharedEndpoints#outpostId', keyArgs] as const
}

export function getS3OutpostsListSharedEndpointsOutpostIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getS3OutpostsListSharedEndpointsOutpostIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.S3Outposts['ListSharedEndpoints#outpostId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getS3OutpostsListSharedEndpointsOutpostIdQueryKey>
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
          Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getS3OutpostsListSharedEndpointsOutpostIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getS3OutpostsListSharedEndpointsOutpostIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.S3Outposts['ListSharedEndpoints#outpostId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
