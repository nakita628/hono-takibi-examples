import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetOpsWorksCMV2016_11_01AssociateNodeKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01CreateBackupKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01CreateServerKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DeleteBackupKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DeleteServerKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DescribeAccountAttributesKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DescribeBackupsKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DescribeEventsKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DescribeNodeAssociationStatusKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DescribeServersKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01DisassociateNodeKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01ExportServerEngineAttributeKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01ListTagsForResourceKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01RestoreServerKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01StartMaintenanceKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01TagResourceKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01UntagResourceKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01UpdateServerKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer'] as const
}

export function getXAmzTargetOpsWorksCMV2016_11_01UpdateServerEngineAttributesKey() {
  return ['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101AssociateNodeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101AssociateNodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101AssociateNodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101AssociateNode<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101AssociateNodeMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101CreateBackupMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101CreateBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101CreateBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101CreateBackup<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101CreateBackupMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101CreateServerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101CreateServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101CreateServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101CreateServer<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101CreateServerMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DeleteBackupMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DeleteBackupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DeleteBackupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DeleteBackup<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101DeleteBackupMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DeleteServerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DeleteServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DeleteServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DeleteServer<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101DeleteServerMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributes<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DescribeBackupsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeBackupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DescribeBackupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeBackups<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101DescribeBackupsMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DescribeEventsMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DescribeEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeEvents<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101DescribeEventsMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatus<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DescribeServersMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DescribeServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeServers<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101DescribeServersMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101DisassociateNodeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101DisassociateNodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101DisassociateNodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101DisassociateNode<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101DisassociateNodeMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttribute<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101ListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101ListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101RestoreServerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101RestoreServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101RestoreServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101RestoreServer<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101RestoreServerMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101StartMaintenanceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101StartMaintenanceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101StartMaintenanceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101StartMaintenance<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101StartMaintenanceMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101TagResourceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101TagResource<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101TagResourceMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101UntagResource<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101UntagResourceMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101UpdateServerMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101UpdateServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101UpdateServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101UpdateServer<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']
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
  const mutationDefaults = getPostXAmzTargetOpsWorksCMV20161101UpdateServerMutationOptions<
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

export function getPostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesMutationKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributes<
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
                    (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesMutationOptions<
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
