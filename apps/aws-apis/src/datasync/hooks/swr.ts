import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetFmrsServiceCancelTaskExecutionKey() {
  return ['#X-Amz-Target=FmrsService.CancelTaskExecution'] as const
}

export function getXAmzTargetFmrsServiceCreateAgentKey() {
  return ['#X-Amz-Target=FmrsService.CreateAgent'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationEfsKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationEfs'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationFsxLustreKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationFsxLustre'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationFsxOntapKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationFsxOntap'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationFsxOpenZfsKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationFsxWindowsKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationFsxWindows'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationHdfsKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationHdfs'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationNfsKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationNfs'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationObjectStorageKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationObjectStorage'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationS3Key() {
  return ['#X-Amz-Target=FmrsService.CreateLocationS3'] as const
}

export function getXAmzTargetFmrsServiceCreateLocationSmbKey() {
  return ['#X-Amz-Target=FmrsService.CreateLocationSmb'] as const
}

export function getXAmzTargetFmrsServiceCreateTaskKey() {
  return ['#X-Amz-Target=FmrsService.CreateTask'] as const
}

export function getXAmzTargetFmrsServiceDeleteAgentKey() {
  return ['#X-Amz-Target=FmrsService.DeleteAgent'] as const
}

export function getXAmzTargetFmrsServiceDeleteLocationKey() {
  return ['#X-Amz-Target=FmrsService.DeleteLocation'] as const
}

export function getXAmzTargetFmrsServiceDeleteTaskKey() {
  return ['#X-Amz-Target=FmrsService.DeleteTask'] as const
}

export function getXAmzTargetFmrsServiceDescribeAgentKey() {
  return ['#X-Amz-Target=FmrsService.DescribeAgent'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationEfsKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationEfs'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationFsxLustreKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationFsxOntapKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationFsxWindowsKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationHdfsKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationHdfs'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationNfsKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationNfs'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationObjectStorageKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationS3Key() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationS3'] as const
}

export function getXAmzTargetFmrsServiceDescribeLocationSmbKey() {
  return ['#X-Amz-Target=FmrsService.DescribeLocationSmb'] as const
}

export function getXAmzTargetFmrsServiceDescribeTaskKey() {
  return ['#X-Amz-Target=FmrsService.DescribeTask'] as const
}

export function getXAmzTargetFmrsServiceDescribeTaskExecutionKey() {
  return ['#X-Amz-Target=FmrsService.DescribeTaskExecution'] as const
}

export function getXAmzTargetFmrsServiceListAgentsKey() {
  return ['#X-Amz-Target=FmrsService.ListAgents'] as const
}

export function getXAmzTargetFmrsServiceListLocationsKey() {
  return ['#X-Amz-Target=FmrsService.ListLocations'] as const
}

export function getXAmzTargetFmrsServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=FmrsService.ListTagsForResource'] as const
}

export function getXAmzTargetFmrsServiceListTaskExecutionsKey() {
  return ['#X-Amz-Target=FmrsService.ListTaskExecutions'] as const
}

export function getXAmzTargetFmrsServiceListTasksKey() {
  return ['#X-Amz-Target=FmrsService.ListTasks'] as const
}

export function getXAmzTargetFmrsServiceStartTaskExecutionKey() {
  return ['#X-Amz-Target=FmrsService.StartTaskExecution'] as const
}

export function getXAmzTargetFmrsServiceTagResourceKey() {
  return ['#X-Amz-Target=FmrsService.TagResource'] as const
}

export function getXAmzTargetFmrsServiceUntagResourceKey() {
  return ['#X-Amz-Target=FmrsService.UntagResource'] as const
}

export function getXAmzTargetFmrsServiceUpdateAgentKey() {
  return ['#X-Amz-Target=FmrsService.UpdateAgent'] as const
}

export function getXAmzTargetFmrsServiceUpdateLocationHdfsKey() {
  return ['#X-Amz-Target=FmrsService.UpdateLocationHdfs'] as const
}

export function getXAmzTargetFmrsServiceUpdateLocationNfsKey() {
  return ['#X-Amz-Target=FmrsService.UpdateLocationNfs'] as const
}

export function getXAmzTargetFmrsServiceUpdateLocationObjectStorageKey() {
  return ['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage'] as const
}

export function getXAmzTargetFmrsServiceUpdateLocationSmbKey() {
  return ['#X-Amz-Target=FmrsService.UpdateLocationSmb'] as const
}

export function getXAmzTargetFmrsServiceUpdateTaskKey() {
  return ['#X-Amz-Target=FmrsService.UpdateTask'] as const
}

export function getXAmzTargetFmrsServiceUpdateTaskExecutionKey() {
  return ['#X-Amz-Target=FmrsService.UpdateTaskExecution'] as const
}

export function getPostXAmzTargetFmrsServiceCancelTaskExecutionKey() {
  return [
    '#X-Amz-Target=FmrsService.CancelTaskExecution',
    '/#X-Amz-Target=FmrsService.CancelTaskExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCancelTaskExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCancelTaskExecutionKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CancelTaskExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateAgentKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateAgent',
    '/#X-Amz-Target=FmrsService.CreateAgent',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.CreateAgent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationEfsKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationEfs',
    '/#X-Amz-Target=FmrsService.CreateLocationEfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationEfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationEfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationEfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxLustreKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxLustre',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxLustre',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxLustre<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationFsxLustreKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationFsxLustre'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxOntapKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxOntap',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxOntap',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxOntap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationFsxOntapKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationFsxOntap'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxOpenZfsKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxOpenZfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationFsxOpenZfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxWindowsKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxWindows',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxWindows',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxWindows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationFsxWindowsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationFsxWindows'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationHdfsKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationHdfs',
    '/#X-Amz-Target=FmrsService.CreateLocationHdfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationHdfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationHdfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationHdfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationNfsKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationNfs',
    '/#X-Amz-Target=FmrsService.CreateLocationNfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationNfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationNfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationNfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationObjectStorageKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationObjectStorage',
    '/#X-Amz-Target=FmrsService.CreateLocationObjectStorage',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationObjectStorage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationObjectStorageKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationObjectStorage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationS3Key() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationS3',
    '/#X-Amz-Target=FmrsService.CreateLocationS3',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationS3Key()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationS3'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateLocationSmbKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationSmb',
    '/#X-Amz-Target=FmrsService.CreateLocationSmb',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateLocationSmb<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateLocationSmbKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.CreateLocationSmb'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceCreateTaskKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateTask',
    '/#X-Amz-Target=FmrsService.CreateTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceCreateTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceCreateTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.CreateTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDeleteAgentKey() {
  return [
    '#X-Amz-Target=FmrsService.DeleteAgent',
    '/#X-Amz-Target=FmrsService.DeleteAgent',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDeleteAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDeleteAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.DeleteAgent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDeleteLocationKey() {
  return [
    '#X-Amz-Target=FmrsService.DeleteLocation',
    '/#X-Amz-Target=FmrsService.DeleteLocation',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDeleteLocation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDeleteLocationKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']
          >
        },
      ) =>
        parseResponse(client['#X-Amz-Target=FmrsService.DeleteLocation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDeleteTaskKey() {
  return [
    '#X-Amz-Target=FmrsService.DeleteTask',
    '/#X-Amz-Target=FmrsService.DeleteTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDeleteTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDeleteTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.DeleteTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeAgentKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeAgent',
    '/#X-Amz-Target=FmrsService.DescribeAgent',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=FmrsService.DescribeAgent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationEfsKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationEfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationEfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationEfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationEfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationEfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxLustreKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxLustre',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxLustre',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxLustre<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationFsxLustreKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxOntapKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxOntap',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxOntap',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxOntap<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationFsxOntapKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxWindowsKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxWindows',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxWindows',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxWindows<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationFsxWindowsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationHdfsKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationHdfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationHdfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationHdfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationHdfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationHdfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationNfsKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationNfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationNfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationNfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationNfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationNfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationObjectStorageKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationObjectStorage',
    '/#X-Amz-Target=FmrsService.DescribeLocationObjectStorage',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationObjectStorage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationObjectStorageKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationS3Key() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationS3',
    '/#X-Amz-Target=FmrsService.DescribeLocationS3',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationS3<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationS3Key()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationS3'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeLocationSmbKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationSmb',
    '/#X-Amz-Target=FmrsService.DescribeLocationSmb',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeLocationSmb<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeLocationSmbKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeLocationSmb'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeTaskKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeTask',
    '/#X-Amz-Target=FmrsService.DescribeTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=FmrsService.DescribeTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceDescribeTaskExecutionKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeTaskExecution',
    '/#X-Amz-Target=FmrsService.DescribeTaskExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceDescribeTaskExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceDescribeTaskExecutionKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.DescribeTaskExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceListAgentsKey() {
  return [
    '#X-Amz-Target=FmrsService.ListAgents',
    '/#X-Amz-Target=FmrsService.ListAgents',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceListAgents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceListAgentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.ListAgents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceListLocationsKey() {
  return [
    '#X-Amz-Target=FmrsService.ListLocations',
    '/#X-Amz-Target=FmrsService.ListLocations',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceListLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceListLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=FmrsService.ListLocations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=FmrsService.ListTagsForResource',
    '/#X-Amz-Target=FmrsService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceListTaskExecutionsKey() {
  return [
    '#X-Amz-Target=FmrsService.ListTaskExecutions',
    '/#X-Amz-Target=FmrsService.ListTaskExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceListTaskExecutions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceListTaskExecutionsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.ListTaskExecutions'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceListTasksKey() {
  return [
    '#X-Amz-Target=FmrsService.ListTasks',
    '/#X-Amz-Target=FmrsService.ListTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceListTasks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceListTasksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.ListTasks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceStartTaskExecutionKey() {
  return [
    '#X-Amz-Target=FmrsService.StartTaskExecution',
    '/#X-Amz-Target=FmrsService.StartTaskExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceStartTaskExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceStartTaskExecutionKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.StartTaskExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceTagResourceKey() {
  return [
    '#X-Amz-Target=FmrsService.TagResource',
    '/#X-Amz-Target=FmrsService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=FmrsService.UntagResource',
    '/#X-Amz-Target=FmrsService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=FmrsService.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateAgentKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateAgent',
    '/#X-Amz-Target=FmrsService.UpdateAgent',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateAgent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateAgentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.UpdateAgent'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateLocationHdfsKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationHdfs',
    '/#X-Amz-Target=FmrsService.UpdateLocationHdfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateLocationHdfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateLocationHdfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.UpdateLocationHdfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateLocationNfsKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationNfs',
    '/#X-Amz-Target=FmrsService.UpdateLocationNfs',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateLocationNfs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateLocationNfsKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.UpdateLocationNfs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateLocationObjectStorageKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationObjectStorage',
    '/#X-Amz-Target=FmrsService.UpdateLocationObjectStorage',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateLocationObjectStorage<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateLocationObjectStorageKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateLocationSmbKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationSmb',
    '/#X-Amz-Target=FmrsService.UpdateLocationSmb',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateLocationSmb<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateLocationSmbKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.UpdateLocationSmb'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateTaskKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateTask',
    '/#X-Amz-Target=FmrsService.UpdateTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateTask<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateTaskKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=FmrsService.UpdateTask'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetFmrsServiceUpdateTaskExecutionKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateTaskExecution',
    '/#X-Amz-Target=FmrsService.UpdateTaskExecution',
    'POST',
  ] as const
}

export function usePostXAmzTargetFmrsServiceUpdateTaskExecution<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetFmrsServiceUpdateTaskExecutionKey()
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
            (typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=FmrsService.UpdateTaskExecution'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
