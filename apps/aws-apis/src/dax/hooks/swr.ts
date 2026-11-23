import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAmazonDAXV3CreateClusterKey() {
  return ['#X-Amz-Target=AmazonDAXV3.CreateCluster'] as const
}

export function getXAmzTargetAmazonDAXV3CreateParameterGroupKey() {
  return ['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup'] as const
}

export function getXAmzTargetAmazonDAXV3CreateSubnetGroupKey() {
  return ['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup'] as const
}

export function getXAmzTargetAmazonDAXV3DecreaseReplicationFactorKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor'] as const
}

export function getXAmzTargetAmazonDAXV3DeleteClusterKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DeleteCluster'] as const
}

export function getXAmzTargetAmazonDAXV3DeleteParameterGroupKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup'] as const
}

export function getXAmzTargetAmazonDAXV3DeleteSubnetGroupKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup'] as const
}

export function getXAmzTargetAmazonDAXV3DescribeClustersKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DescribeClusters'] as const
}

export function getXAmzTargetAmazonDAXV3DescribeDefaultParametersKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters'] as const
}

export function getXAmzTargetAmazonDAXV3DescribeEventsKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DescribeEvents'] as const
}

export function getXAmzTargetAmazonDAXV3DescribeParameterGroupsKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups'] as const
}

export function getXAmzTargetAmazonDAXV3DescribeParametersKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DescribeParameters'] as const
}

export function getXAmzTargetAmazonDAXV3DescribeSubnetGroupsKey() {
  return ['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups'] as const
}

export function getXAmzTargetAmazonDAXV3IncreaseReplicationFactorKey() {
  return ['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor'] as const
}

export function getXAmzTargetAmazonDAXV3ListTagsKey() {
  return ['#X-Amz-Target=AmazonDAXV3.ListTags'] as const
}

export function getXAmzTargetAmazonDAXV3RebootNodeKey() {
  return ['#X-Amz-Target=AmazonDAXV3.RebootNode'] as const
}

export function getXAmzTargetAmazonDAXV3TagResourceKey() {
  return ['#X-Amz-Target=AmazonDAXV3.TagResource'] as const
}

export function getXAmzTargetAmazonDAXV3UntagResourceKey() {
  return ['#X-Amz-Target=AmazonDAXV3.UntagResource'] as const
}

export function getXAmzTargetAmazonDAXV3UpdateClusterKey() {
  return ['#X-Amz-Target=AmazonDAXV3.UpdateCluster'] as const
}

export function getXAmzTargetAmazonDAXV3UpdateParameterGroupKey() {
  return ['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup'] as const
}

export function getXAmzTargetAmazonDAXV3UpdateSubnetGroupKey() {
  return ['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup'] as const
}

export function getPostXAmzTargetAmazonDAXV3CreateClusterKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.CreateCluster',
    '/#X-Amz-Target=AmazonDAXV3.CreateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3CreateCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3CreateClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonDAXV3.CreateCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3CreateParameterGroupKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.CreateParameterGroup',
    '/#X-Amz-Target=AmazonDAXV3.CreateParameterGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3CreateParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3CreateParameterGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3CreateSubnetGroupKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup',
    '/#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3CreateSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3CreateSubnetGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DecreaseReplicationFactorKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor',
    '/#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DecreaseReplicationFactor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DecreaseReplicationFactorKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DeleteClusterKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DeleteCluster',
    '/#X-Amz-Target=AmazonDAXV3.DeleteCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DeleteCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DeleteClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonDAXV3.DeleteCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DeleteParameterGroupKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup',
    '/#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DeleteParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DeleteParameterGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DeleteSubnetGroupKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup',
    '/#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DeleteSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DeleteSubnetGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DescribeClustersKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeClusters',
    '/#X-Amz-Target=AmazonDAXV3.DescribeClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DescribeClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DescribeClustersKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DescribeClusters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DescribeDefaultParametersKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters',
    '/#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DescribeDefaultParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DescribeDefaultParametersKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DescribeEventsKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeEvents',
    '/#X-Amz-Target=AmazonDAXV3.DescribeEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DescribeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DescribeEventsKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonDAXV3.DescribeEvents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DescribeParameterGroupsKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups',
    '/#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DescribeParameterGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DescribeParameterGroupsKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DescribeParametersKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeParameters',
    '/#X-Amz-Target=AmazonDAXV3.DescribeParameters',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DescribeParameters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DescribeParametersKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DescribeParameters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3DescribeSubnetGroupsKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups',
    '/#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3DescribeSubnetGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3DescribeSubnetGroupsKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3IncreaseReplicationFactorKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor',
    '/#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3IncreaseReplicationFactor<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3IncreaseReplicationFactorKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3ListTagsKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.ListTags',
    '/#X-Amz-Target=AmazonDAXV3.ListTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3ListTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3ListTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonDAXV3.ListTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3RebootNodeKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.RebootNode',
    '/#X-Amz-Target=AmazonDAXV3.RebootNode',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3RebootNode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3RebootNodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonDAXV3.RebootNode'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3TagResourceKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.TagResource',
    '/#X-Amz-Target=AmazonDAXV3.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3TagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=AmazonDAXV3.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3UntagResourceKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UntagResource',
    '/#X-Amz-Target=AmazonDAXV3.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3UntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonDAXV3.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3UpdateClusterKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UpdateCluster',
    '/#X-Amz-Target=AmazonDAXV3.UpdateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3UpdateCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3UpdateClusterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=AmazonDAXV3.UpdateCluster'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3UpdateParameterGroupKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup',
    '/#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3UpdateParameterGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3UpdateParameterGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAmazonDAXV3UpdateSubnetGroupKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup',
    '/#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAmazonDAXV3UpdateSubnetGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAmazonDAXV3UpdateSubnetGroupKey()
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
            (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
