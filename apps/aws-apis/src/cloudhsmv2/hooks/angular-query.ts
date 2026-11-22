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

export function getPostXAmzTargetBaldrApiServiceCopyBackupToRegionMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.CopyBackupToRegion',
    '/#X-Amz-Target=BaldrApiService.CopyBackupToRegion',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceCopyBackupToRegionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceCopyBackupToRegionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.CopyBackupToRegion'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceCopyBackupToRegion<
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
                  (typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=BaldrApiService.CopyBackupToRegion']['$post']
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceCopyBackupToRegionMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceCreateClusterMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.CreateCluster',
    '/#X-Amz-Target=BaldrApiService.CreateCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceCreateClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceCreateClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.CreateCluster'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceCreateCluster<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateCluster']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceCreateClusterMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceCreateHsmMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.CreateHsm',
    '/#X-Amz-Target=BaldrApiService.CreateHsm',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceCreateHsmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceCreateHsmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=BaldrApiService.CreateHsm'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceCreateHsm<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.CreateHsm']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceCreateHsmMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceDeleteBackupMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DeleteBackup',
    '/#X-Amz-Target=BaldrApiService.DeleteBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceDeleteBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceDeleteBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.DeleteBackup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceDeleteBackup<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteBackup']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceDeleteBackupMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceDeleteClusterMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DeleteCluster',
    '/#X-Amz-Target=BaldrApiService.DeleteCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceDeleteClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceDeleteClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.DeleteCluster'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceDeleteCluster<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteCluster']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceDeleteClusterMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceDeleteHsmMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DeleteHsm',
    '/#X-Amz-Target=BaldrApiService.DeleteHsm',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceDeleteHsmMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceDeleteHsmMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=BaldrApiService.DeleteHsm'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceDeleteHsm<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DeleteHsm']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceDeleteHsmMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceDescribeBackupsMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DescribeBackups',
    '/#X-Amz-Target=BaldrApiService.DescribeBackups',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceDescribeBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceDescribeBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.DescribeBackups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceDescribeBackups<
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
                  (typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeBackups']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceDescribeBackupsMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceDescribeClustersMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.DescribeClusters',
    '/#X-Amz-Target=BaldrApiService.DescribeClusters',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceDescribeClustersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceDescribeClustersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.DescribeClusters'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceDescribeClusters<
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
                  (typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=BaldrApiService.DescribeClusters']['$post']
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceDescribeClustersMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceInitializeClusterMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.InitializeCluster',
    '/#X-Amz-Target=BaldrApiService.InitializeCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceInitializeClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceInitializeClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.InitializeCluster'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceInitializeCluster<
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
                  (typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=BaldrApiService.InitializeCluster']['$post']
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceInitializeClusterMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceListTagsMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.ListTags',
    '/#X-Amz-Target=BaldrApiService.ListTags',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceListTagsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceListTagsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=BaldrApiService.ListTags'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceListTags<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ListTags']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceListTagsMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceModifyBackupAttributesMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.ModifyBackupAttributes',
    '/#X-Amz-Target=BaldrApiService.ModifyBackupAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceModifyBackupAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceModifyBackupAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceModifyBackupAttributes<
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
                  (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=BaldrApiService.ModifyBackupAttributes']['$post']
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceModifyBackupAttributesMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceModifyClusterMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.ModifyCluster',
    '/#X-Amz-Target=BaldrApiService.ModifyCluster',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceModifyClusterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceModifyClusterMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.ModifyCluster'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceModifyCluster<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.ModifyCluster']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceModifyClusterMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceRestoreBackupMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.RestoreBackup',
    '/#X-Amz-Target=BaldrApiService.RestoreBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceRestoreBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceRestoreBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.RestoreBackup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceRestoreBackup<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.RestoreBackup']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceRestoreBackupMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.TagResource',
    '/#X-Amz-Target=BaldrApiService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=BaldrApiService.TagResource'].$post(args, options))
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceTagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.TagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetBaldrApiServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=BaldrApiService.UntagResource',
    '/#X-Amz-Target=BaldrApiService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetBaldrApiServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetBaldrApiServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=BaldrApiService.UntagResource'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetBaldrApiServiceUntagResource<
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
                ReturnType<(typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=BaldrApiService.UntagResource']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetBaldrApiServiceUntagResourceMutationOptions<
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
