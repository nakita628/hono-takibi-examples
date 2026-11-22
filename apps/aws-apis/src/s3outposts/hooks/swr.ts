import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getS3OutpostsKey() {
  return ['S3Outposts'] as const
}

export function getPostS3OutpostsCreateEndpointKey() {
  return ['S3Outposts', '/S3Outposts/CreateEndpoint', 'POST'] as const
}

export function usePostS3OutpostsCreateEndpoint<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.CreateEndpoint.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostS3OutpostsCreateEndpointKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.S3Outposts.CreateEndpoint.$post> },
      ) => parseResponse(client.S3Outposts.CreateEndpoint.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteS3OutpostsDeleteEndpointEndpointIdOutpostIdKey() {
  return ['S3Outposts', '/S3Outposts/DeleteEndpoint#endpointId&outpostId', 'DELETE'] as const
}

export function useDeleteS3OutpostsDeleteEndpointEndpointIdOutpostId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteS3OutpostsDeleteEndpointEndpointIdOutpostIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.S3Outposts)['DeleteEndpoint#endpointId&outpostId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.S3Outposts['DeleteEndpoint#endpointId&outpostId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetS3OutpostsListEndpointsKey(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['S3Outposts', '/S3Outposts/ListEndpoints', keyArgs] as const
}

export function useGetS3OutpostsListEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetS3OutpostsListEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.S3Outposts.ListEndpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetS3OutpostsListEndpoints<TError = unknown>(
  args: InferRequestType<typeof client.S3Outposts.ListEndpoints.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetS3OutpostsListEndpointsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.S3Outposts.ListEndpoints.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.S3Outposts.ListEndpoints.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetS3OutpostsListOutpostsWithS3Key(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['S3Outposts', '/S3Outposts/ListOutpostsWithS3', keyArgs] as const
}

export function useGetS3OutpostsListOutpostsWithS3<TError = unknown>(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetS3OutpostsListOutpostsWithS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.S3Outposts.ListOutpostsWithS3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetS3OutpostsListOutpostsWithS3<TError = unknown>(
  args: InferRequestType<typeof client.S3Outposts.ListOutpostsWithS3.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetS3OutpostsListOutpostsWithS3Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.S3Outposts.ListOutpostsWithS3.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.S3Outposts.ListOutpostsWithS3.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetS3OutpostsListSharedEndpointsOutpostIdKey(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['S3Outposts', '/S3Outposts/ListSharedEndpoints#outpostId', keyArgs] as const
}

export function useGetS3OutpostsListSharedEndpointsOutpostId<TError = unknown>(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetS3OutpostsListSharedEndpointsOutpostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.S3Outposts['ListSharedEndpoints#outpostId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetS3OutpostsListSharedEndpointsOutpostId<TError = unknown>(
  args: InferRequestType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetS3OutpostsListSharedEndpointsOutpostIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.S3Outposts)['ListSharedEndpoints#outpostId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.S3Outposts['ListSharedEndpoints#outpostId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
