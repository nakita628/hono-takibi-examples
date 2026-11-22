import { injectMutation, mutationOptions } from '@tanstack/angular-query-experimental'
import type {
  CreateMutationOptions,
  DefaultError,
  InjectQueryOptions,
  InjectInfiniteQueryOptions,
  InjectMutationOptions,
} from '@tanstack/angular-query-experimental'
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

export function getPostXAmzTargetAmazonDAXV3CreateClusterMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.CreateCluster',
    '/#X-Amz-Target=AmazonDAXV3.CreateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3CreateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3CreateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.CreateCluster'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3CreateCluster<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3CreateClusterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3CreateParameterGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.CreateParameterGroup',
    '/#X-Amz-Target=AmazonDAXV3.CreateParameterGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3CreateParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3CreateParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3CreateParameterGroup<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateParameterGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3CreateParameterGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3CreateSubnetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup',
    '/#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3CreateSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3CreateSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3CreateSubnetGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.CreateSubnetGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3CreateSubnetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DecreaseReplicationFactorMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor',
    '/#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DecreaseReplicationFactorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DecreaseReplicationFactorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DecreaseReplicationFactor<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.DecreaseReplicationFactor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DecreaseReplicationFactorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DeleteClusterMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DeleteCluster',
    '/#X-Amz-Target=AmazonDAXV3.DeleteCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DeleteClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DeleteClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.DeleteCluster'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DeleteCluster<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DeleteClusterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DeleteParameterGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup',
    '/#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DeleteParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DeleteParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DeleteParameterGroup<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteParameterGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DeleteParameterGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DeleteSubnetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup',
    '/#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DeleteSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DeleteSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DeleteSubnetGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DeleteSubnetGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DeleteSubnetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DescribeClustersMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeClusters',
    '/#X-Amz-Target=AmazonDAXV3.DescribeClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DescribeClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DescribeClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DescribeClusters'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DescribeClusters<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeClusters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DescribeClustersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DescribeDefaultParametersMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters',
    '/#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DescribeDefaultParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DescribeDefaultParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DescribeDefaultParameters<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeDefaultParameters']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DescribeDefaultParametersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DescribeEventsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeEvents',
    '/#X-Amz-Target=AmazonDAXV3.DescribeEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DescribeEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.DescribeEvents'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DescribeEvents<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeEvents']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DescribeEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DescribeParameterGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups',
    '/#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DescribeParameterGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DescribeParameterGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DescribeParameterGroups<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameterGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DescribeParameterGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DescribeParametersMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeParameters',
    '/#X-Amz-Target=AmazonDAXV3.DescribeParameters',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DescribeParametersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DescribeParametersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DescribeParameters'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DescribeParameters<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeParameters']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DescribeParametersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3DescribeSubnetGroupsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups',
    '/#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3DescribeSubnetGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3DescribeSubnetGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3DescribeSubnetGroups<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.DescribeSubnetGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3DescribeSubnetGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3IncreaseReplicationFactorMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor',
    '/#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3IncreaseReplicationFactorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3IncreaseReplicationFactorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3IncreaseReplicationFactor<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.IncreaseReplicationFactor']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3IncreaseReplicationFactorMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3ListTagsMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.ListTags',
    '/#X-Amz-Target=AmazonDAXV3.ListTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3ListTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3ListTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.ListTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3ListTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.ListTags']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3ListTagsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3RebootNodeMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.RebootNode',
    '/#X-Amz-Target=AmazonDAXV3.RebootNode',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3RebootNodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3RebootNodeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.RebootNode'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3RebootNode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.RebootNode']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3RebootNodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3TagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.TagResource',
    '/#X-Amz-Target=AmazonDAXV3.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.TagResource'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3TagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UntagResource',
    '/#X-Amz-Target=AmazonDAXV3.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.UntagResource'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3UntagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3UntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3UpdateClusterMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UpdateCluster',
    '/#X-Amz-Target=AmazonDAXV3.UpdateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3UpdateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3UpdateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=AmazonDAXV3.UpdateCluster'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3UpdateCluster<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateCluster']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3UpdateClusterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3UpdateParameterGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup',
    '/#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3UpdateParameterGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3UpdateParameterGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3UpdateParameterGroup<
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
                ReturnType<
                  (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateParameterGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3UpdateParameterGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostXAmzTargetAmazonDAXV3UpdateSubnetGroupMutationKey() {
  return [
    '#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup',
    '/#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAmazonDAXV3UpdateSubnetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAmazonDAXV3UpdateSubnetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetAmazonDAXV3UpdateSubnetGroup<
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
                ReturnType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=AmazonDAXV3.UpdateSubnetGroup']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetAmazonDAXV3UpdateSubnetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
