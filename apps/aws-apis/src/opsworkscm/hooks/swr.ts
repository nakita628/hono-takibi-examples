import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetOpsWorksCMV20161101AssociateNodeKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101AssociateNode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101AssociateNodeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.AssociateNode'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101CreateBackupKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101CreateBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101CreateBackupKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101CreateServerKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101CreateServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101CreateServerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.CreateServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DeleteBackupKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DeleteBackup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DeleteBackupKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteBackup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DeleteServerKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DeleteServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DeleteServerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DeleteServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DescribeAccountAttributesKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeAccountAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeBackupsKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeBackups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DescribeBackupsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeBackups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeEventsKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeEvents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DescribeEventsKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeEvents'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DescribeNodeAssociationStatusKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeNodeAssociationStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DescribeServersKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DescribeServers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DescribeServersKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DescribeServers'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101DisassociateNodeKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101DisassociateNode<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101DisassociateNodeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.DisassociateNode'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttribute<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101ExportServerEngineAttributeKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.ExportServerEngineAttribute'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101ListTagsForResourceKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101ListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101ListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101RestoreServerKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101RestoreServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101RestoreServerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.RestoreServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101StartMaintenanceKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101StartMaintenance<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101StartMaintenanceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.StartMaintenance'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101TagResourceKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101TagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101TagResourceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101UntagResourceKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101UntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101UntagResourceKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101UpdateServerKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101UpdateServer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101UpdateServerKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServer'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesKey() {
  return [
    '#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes',
    '/#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetOpsWorksCMV20161101UpdateServerEngineAttributesKey()
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
            (typeof client)['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=OpsWorksCM_V2016_11_01.UpdateServerEngineAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
