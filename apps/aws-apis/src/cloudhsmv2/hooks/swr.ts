import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetBaldrApiServiceCopyBackupToRegionKey() {
  return ['#X-Amz-Target=BaldrApiService.CopyBackupToRegion'] as const
}

export function getXAmzTargetBaldrApiServiceCreateClusterKey() {
  return ['#X-Amz-Target=BaldrApiService.CreateCluster'] as const
}

export function getXAmzTargetBaldrApiServiceCreateHsmKey() {
  return ['#X-Amz-Target=BaldrApiService.CreateHsm'] as const
}

export function getXAmzTargetBaldrApiServiceDeleteBackupKey() {
  return ['#X-Amz-Target=BaldrApiService.DeleteBackup'] as const
}

export function getXAmzTargetBaldrApiServiceDeleteClusterKey() {
  return ['#X-Amz-Target=BaldrApiService.DeleteCluster'] as const
}

export function getXAmzTargetBaldrApiServiceDeleteHsmKey() {
  return ['#X-Amz-Target=BaldrApiService.DeleteHsm'] as const
}

export function getXAmzTargetBaldrApiServiceDescribeBackupsKey() {
  return ['#X-Amz-Target=BaldrApiService.DescribeBackups'] as const
}

export function getXAmzTargetBaldrApiServiceDescribeClustersKey() {
  return ['#X-Amz-Target=BaldrApiService.DescribeClusters'] as const
}

export function getXAmzTargetBaldrApiServiceInitializeClusterKey() {
  return ['#X-Amz-Target=BaldrApiService.InitializeCluster'] as const
}

export function getXAmzTargetBaldrApiServiceListTagsKey() {
  return ['#X-Amz-Target=BaldrApiService.ListTags'] as const
}

export function getXAmzTargetBaldrApiServiceModifyBackupAttributesKey() {
  return ['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes'] as const
}

export function getXAmzTargetBaldrApiServiceModifyClusterKey() {
  return ['#X-Amz-Target=BaldrApiService.ModifyCluster'] as const
}

export function getXAmzTargetBaldrApiServiceRestoreBackupKey() {
  return ['#X-Amz-Target=BaldrApiService.RestoreBackup'] as const
}

export function getXAmzTargetBaldrApiServiceTagResourceKey() {
  return ['#X-Amz-Target=BaldrApiService.TagResource'] as const
}

export function getXAmzTargetBaldrApiServiceUntagResourceKey() {
  return ['#X-Amz-Target=BaldrApiService.UntagResource'] as const
}

export function getPostXAmzTargetBaldrApiServiceCopyBackupToRegionKey() {
  return [
    '#X-Amz-Target=BaldrApiService.CopyBackupToRegion',
    '/#X-Amz-Target=BaldrApiService.CopyBackupToRegion',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceCopyBackupToRegion<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceCopyBackupToRegionKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.CopyBackupToRegion'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceCreateClusterKey() {
  return [
    '#X-Amz-Target=BaldrApiService.CreateCluster',
    '/#X-Amz-Target=BaldrApiService.CreateCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceCreateCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceCreateClusterKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.CreateCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceCreateHsmKey() {
  return [
    '#X-Amz-Target=BaldrApiService.CreateHsm',
    '/#X-Amz-Target=BaldrApiService.CreateHsm',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceCreateHsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceCreateHsmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=BaldrApiService.CreateHsm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceDeleteBackupKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DeleteBackup',
    '/#X-Amz-Target=BaldrApiService.DeleteBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceDeleteBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceDeleteBackupKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.DeleteBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceDeleteClusterKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DeleteCluster',
    '/#X-Amz-Target=BaldrApiService.DeleteCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceDeleteCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceDeleteClusterKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.DeleteCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceDeleteHsmKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DeleteHsm',
    '/#X-Amz-Target=BaldrApiService.DeleteHsm',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceDeleteHsm<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceDeleteHsmKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=BaldrApiService.DeleteHsm'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceDescribeBackupsKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DescribeBackups',
    '/#X-Amz-Target=BaldrApiService.DescribeBackups',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceDescribeBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceDescribeBackupsKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.DescribeBackups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceDescribeClustersKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DescribeClusters',
    '/#X-Amz-Target=BaldrApiService.DescribeClusters',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceDescribeClusters<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceDescribeClustersKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.DescribeClusters'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceInitializeClusterKey() {
  return [
    '#X-Amz-Target=BaldrApiService.InitializeCluster',
    '/#X-Amz-Target=BaldrApiService.InitializeCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceInitializeCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceInitializeClusterKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.InitializeCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceListTagsKey() {
  return [
    '#X-Amz-Target=BaldrApiService.ListTags',
    '/#X-Amz-Target=BaldrApiService.ListTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceListTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceListTagsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=BaldrApiService.ListTags'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceModifyBackupAttributesKey() {
  return [
    '#X-Amz-Target=BaldrApiService.ModifyBackupAttributes',
    '/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceModifyBackupAttributes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceModifyBackupAttributesKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceModifyClusterKey() {
  return [
    '#X-Amz-Target=BaldrApiService.ModifyCluster',
    '/#X-Amz-Target=BaldrApiService.ModifyCluster',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceModifyCluster<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceModifyClusterKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.ModifyCluster'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceRestoreBackupKey() {
  return [
    '#X-Amz-Target=BaldrApiService.RestoreBackup',
    '/#X-Amz-Target=BaldrApiService.RestoreBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceRestoreBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceRestoreBackupKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.RestoreBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceTagResourceKey() {
  return [
    '#X-Amz-Target=BaldrApiService.TagResource',
    '/#X-Amz-Target=BaldrApiService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetBaldrApiServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=BaldrApiService.UntagResource',
    '/#X-Amz-Target=BaldrApiService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetBaldrApiServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetBaldrApiServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=BaldrApiService.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
