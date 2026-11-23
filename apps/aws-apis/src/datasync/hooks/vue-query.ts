import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
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

export function getPostXAmzTargetFmrsServiceCancelTaskExecutionMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CancelTaskExecution',
    '/#X-Amz-Target=FmrsService.CancelTaskExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCancelTaskExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCancelTaskExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CancelTaskExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCancelTaskExecution<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CancelTaskExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCancelTaskExecutionMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateAgentMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateAgent',
    '/#X-Amz-Target=FmrsService.CreateAgent',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.CreateAgent'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateAgent<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateAgent']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateAgentMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationEfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationEfs',
    '/#X-Amz-Target=FmrsService.CreateLocationEfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationEfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationEfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationEfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationEfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationEfs']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationEfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationFsxLustreMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxLustre',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxLustre',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxLustreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationFsxLustreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationFsxLustre'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxLustre<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxLustre']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationFsxLustreMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationFsxOntapMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxOntap',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxOntap',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxOntapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationFsxOntapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationFsxOntap'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxOntap<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOntap']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationFsxOntapMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationFsxOpenZfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxOpenZfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationFsxOpenZfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxOpenZfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxOpenZfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationFsxOpenZfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationFsxWindowsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationFsxWindows',
    '/#X-Amz-Target=FmrsService.CreateLocationFsxWindows',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationFsxWindowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationFsxWindowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationFsxWindows'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationFsxWindows<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationFsxWindows']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationFsxWindowsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationHdfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationHdfs',
    '/#X-Amz-Target=FmrsService.CreateLocationHdfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationHdfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationHdfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationHdfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationHdfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationHdfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationHdfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationNfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationNfs',
    '/#X-Amz-Target=FmrsService.CreateLocationNfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationNfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationNfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationNfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationNfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationNfs']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationNfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationObjectStorageMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationObjectStorage',
    '/#X-Amz-Target=FmrsService.CreateLocationObjectStorage',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationObjectStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationObjectStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationObjectStorage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationObjectStorage<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.CreateLocationObjectStorage']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationObjectStorageMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationS3MutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationS3',
    '/#X-Amz-Target=FmrsService.CreateLocationS3',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationS3MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationS3'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationS3<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationS3']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationS3MutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateLocationSmbMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateLocationSmb',
    '/#X-Amz-Target=FmrsService.CreateLocationSmb',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateLocationSmbMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateLocationSmbMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.CreateLocationSmb'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateLocationSmb<
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
                    (typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateLocationSmb']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateLocationSmbMutationOptions<
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

export function getPostXAmzTargetFmrsServiceCreateTaskMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.CreateTask',
    '/#X-Amz-Target=FmrsService.CreateTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceCreateTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceCreateTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.CreateTask'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceCreateTask<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.CreateTask']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceCreateTaskMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDeleteAgentMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DeleteAgent',
    '/#X-Amz-Target=FmrsService.DeleteAgent',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDeleteAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDeleteAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.DeleteAgent'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceDeleteAgent<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteAgent']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDeleteAgentMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDeleteLocationMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DeleteLocation',
    '/#X-Amz-Target=FmrsService.DeleteLocation',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDeleteLocationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDeleteLocationMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.DeleteLocation'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceDeleteLocation<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteLocation']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDeleteLocationMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDeleteTaskMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DeleteTask',
    '/#X-Amz-Target=FmrsService.DeleteTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDeleteTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDeleteTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.DeleteTask'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceDeleteTask<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DeleteTask']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDeleteTaskMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeAgentMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeAgent',
    '/#X-Amz-Target=FmrsService.DescribeAgent',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.DescribeAgent'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeAgent<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeAgent']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeAgentMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationEfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationEfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationEfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationEfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationEfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationEfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationEfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationEfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationEfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxLustreMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxLustre',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxLustre',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxLustreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationFsxLustreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxLustre<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxLustre']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationFsxLustreMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxOntapMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxOntap',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxOntap',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxOntapMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationFsxOntapMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxOntap<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOntap']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationFsxOntapMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxOpenZfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationFsxOpenZfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxWindowsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationFsxWindows',
    '/#X-Amz-Target=FmrsService.DescribeLocationFsxWindows',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationFsxWindowsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationFsxWindowsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationFsxWindows<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationFsxWindows']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationFsxWindowsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationHdfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationHdfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationHdfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationHdfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationHdfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationHdfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationHdfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationHdfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationHdfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationNfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationNfs',
    '/#X-Amz-Target=FmrsService.DescribeLocationNfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationNfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationNfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationNfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationNfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationNfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationNfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationObjectStorageMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationObjectStorage',
    '/#X-Amz-Target=FmrsService.DescribeLocationObjectStorage',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationObjectStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationObjectStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationObjectStorage<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationObjectStorage']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationObjectStorageMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationS3MutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationS3',
    '/#X-Amz-Target=FmrsService.DescribeLocationS3',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationS3MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationS3MutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationS3'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationS3<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationS3']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationS3MutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeLocationSmbMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeLocationSmb',
    '/#X-Amz-Target=FmrsService.DescribeLocationSmb',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeLocationSmbMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeLocationSmbMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeLocationSmb'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeLocationSmb<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeLocationSmb']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeLocationSmbMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeTaskMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeTask',
    '/#X-Amz-Target=FmrsService.DescribeTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.DescribeTask'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeTask<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTask']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeTaskMutationOptions<
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

export function getPostXAmzTargetFmrsServiceDescribeTaskExecutionMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.DescribeTaskExecution',
    '/#X-Amz-Target=FmrsService.DescribeTaskExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceDescribeTaskExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceDescribeTaskExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.DescribeTaskExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceDescribeTaskExecution<
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
                    (typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.DescribeTaskExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceDescribeTaskExecutionMutationOptions<
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

export function getPostXAmzTargetFmrsServiceListAgentsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.ListAgents',
    '/#X-Amz-Target=FmrsService.ListAgents',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceListAgentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceListAgentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.ListAgents'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceListAgents<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListAgents']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceListAgentsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceListLocationsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.ListLocations',
    '/#X-Amz-Target=FmrsService.ListLocations',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceListLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceListLocationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.ListLocations'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceListLocations<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListLocations']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceListLocationsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.ListTagsForResource',
    '/#X-Amz-Target=FmrsService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.ListTagsForResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetFmrsServiceListTaskExecutionsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.ListTaskExecutions',
    '/#X-Amz-Target=FmrsService.ListTaskExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceListTaskExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceListTaskExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.ListTaskExecutions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceListTaskExecutions<
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
                    (typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.ListTaskExecutions']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceListTaskExecutionsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceListTasksMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.ListTasks',
    '/#X-Amz-Target=FmrsService.ListTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceListTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceListTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.ListTasks'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceListTasks<
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
                Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.ListTasks']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceListTasksMutationOptions<
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

export function getPostXAmzTargetFmrsServiceStartTaskExecutionMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.StartTaskExecution',
    '/#X-Amz-Target=FmrsService.StartTaskExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceStartTaskExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceStartTaskExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.StartTaskExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceStartTaskExecution<
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
                    (typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.StartTaskExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceStartTaskExecutionMutationOptions<
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

export function getPostXAmzTargetFmrsServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.TagResource',
    '/#X-Amz-Target=FmrsService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceTagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.TagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UntagResource',
    '/#X-Amz-Target=FmrsService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.UntagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceUntagResource<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UntagResource']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateAgentMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateAgent',
    '/#X-Amz-Target=FmrsService.UpdateAgent',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateAgentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateAgentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.UpdateAgent'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateAgent<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateAgent']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateAgentMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateLocationHdfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationHdfs',
    '/#X-Amz-Target=FmrsService.UpdateLocationHdfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateLocationHdfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateLocationHdfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.UpdateLocationHdfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateLocationHdfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationHdfs']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateLocationHdfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateLocationNfsMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationNfs',
    '/#X-Amz-Target=FmrsService.UpdateLocationNfs',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateLocationNfsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateLocationNfsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.UpdateLocationNfs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateLocationNfs<
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
                    (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationNfs']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateLocationNfsMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateLocationObjectStorageMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationObjectStorage',
    '/#X-Amz-Target=FmrsService.UpdateLocationObjectStorage',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateLocationObjectStorageMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateLocationObjectStorageMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateLocationObjectStorage<
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
                    (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationObjectStorage']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateLocationObjectStorageMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateLocationSmbMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateLocationSmb',
    '/#X-Amz-Target=FmrsService.UpdateLocationSmb',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateLocationSmbMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateLocationSmbMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.UpdateLocationSmb'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateLocationSmb<
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
                    (typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateLocationSmb']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateLocationSmbMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateTaskMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateTask',
    '/#X-Amz-Target=FmrsService.UpdateTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=FmrsService.UpdateTask'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateTask<
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
                  ReturnType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTask']['$post']>,
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateTaskMutationOptions<
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

export function getPostXAmzTargetFmrsServiceUpdateTaskExecutionMutationKey() {
  return [
    '#X-Amz-Target=FmrsService.UpdateTaskExecution',
    '/#X-Amz-Target=FmrsService.UpdateTaskExecution',
    'POST',
  ] as const
}

export function getPostXAmzTargetFmrsServiceUpdateTaskExecutionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetFmrsServiceUpdateTaskExecutionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=FmrsService.UpdateTaskExecution'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetFmrsServiceUpdateTaskExecution<
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
                    (typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=FmrsService.UpdateTaskExecution']['$post']
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
  const mutationDefaults = getPostXAmzTargetFmrsServiceUpdateTaskExecutionMutationOptions<
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
