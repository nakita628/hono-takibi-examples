import { createMutation, mutationOptions } from '@tanstack/solid-query'
import type { CreateMutationOptions, DefaultError, QueryClient } from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetTimestream_20181101CreateBatchLoadTaskKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask'] as const
}

export function getXAmzTargetTimestream_20181101CreateDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateDatabase'] as const
}

export function getXAmzTargetTimestream_20181101CreateTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.CreateTable'] as const
}

export function getXAmzTargetTimestream_20181101DeleteDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.DeleteDatabase'] as const
}

export function getXAmzTargetTimestream_20181101DeleteTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.DeleteTable'] as const
}

export function getXAmzTargetTimestream_20181101DescribeBatchLoadTaskKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask'] as const
}

export function getXAmzTargetTimestream_20181101DescribeDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeDatabase'] as const
}

export function getXAmzTargetTimestream_20181101DescribeEndpointsKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'] as const
}

export function getXAmzTargetTimestream_20181101DescribeTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.DescribeTable'] as const
}

export function getXAmzTargetTimestream_20181101ListBatchLoadTasksKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks'] as const
}

export function getXAmzTargetTimestream_20181101ListDatabasesKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListDatabases'] as const
}

export function getXAmzTargetTimestream_20181101ListTablesKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListTables'] as const
}

export function getXAmzTargetTimestream_20181101ListTagsForResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.ListTagsForResource'] as const
}

export function getXAmzTargetTimestream_20181101ResumeBatchLoadTaskKey() {
  return ['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask'] as const
}

export function getXAmzTargetTimestream_20181101TagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.TagResource'] as const
}

export function getXAmzTargetTimestream_20181101UntagResourceKey() {
  return ['#X-Amz-Target=Timestream_20181101.UntagResource'] as const
}

export function getXAmzTargetTimestream_20181101UpdateDatabaseKey() {
  return ['#X-Amz-Target=Timestream_20181101.UpdateDatabase'] as const
}

export function getXAmzTargetTimestream_20181101UpdateTableKey() {
  return ['#X-Amz-Target=Timestream_20181101.UpdateTable'] as const
}

export function getXAmzTargetTimestream_20181101WriteRecordsKey() {
  return ['#X-Amz-Target=Timestream_20181101.WriteRecords'] as const
}

export function getPostXAmzTargetTimestream20181101CreateBatchLoadTaskMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask',
    '/#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101CreateBatchLoadTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101CreateBatchLoadTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101CreateBatchLoadTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateBatchLoadTask']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101CreateBatchLoadTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101CreateDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateDatabase',
    '/#X-Amz-Target=Timestream_20181101.CreateDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101CreateDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101CreateDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.CreateDatabase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101CreateDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateDatabase']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101CreateDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101CreateTableMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.CreateTable',
    '/#X-Amz-Target=Timestream_20181101.CreateTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101CreateTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101CreateTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.CreateTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101CreateTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.CreateTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101CreateTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101DeleteDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DeleteDatabase',
    '/#X-Amz-Target=Timestream_20181101.DeleteDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DeleteDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DeleteDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DeleteDatabase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101DeleteDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteDatabase']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101DeleteDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101DeleteTableMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DeleteTable',
    '/#X-Amz-Target=Timestream_20181101.DeleteTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DeleteTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DeleteTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DeleteTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101DeleteTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DeleteTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101DeleteTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101DescribeBatchLoadTaskMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask',
    '/#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DescribeBatchLoadTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DescribeBatchLoadTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101DescribeBatchLoadTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeBatchLoadTask']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostXAmzTargetTimestream20181101DescribeBatchLoadTaskMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101DescribeDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeDatabase',
    '/#X-Amz-Target=Timestream_20181101.DescribeDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DescribeDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DescribeDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DescribeDatabase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101DescribeDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeDatabase']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101DescribeDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101DescribeEndpointsMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    '/#X-Amz-Target=Timestream_20181101.DescribeEndpoints',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DescribeEndpointsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DescribeEndpointsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DescribeEndpoints'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101DescribeEndpoints<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeEndpoints']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101DescribeEndpointsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101DescribeTableMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.DescribeTable',
    '/#X-Amz-Target=Timestream_20181101.DescribeTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101DescribeTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101DescribeTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.DescribeTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101DescribeTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.DescribeTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101DescribeTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101ListBatchLoadTasksMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks',
    '/#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ListBatchLoadTasksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ListBatchLoadTasksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101ListBatchLoadTasks<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListBatchLoadTasks']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101ListBatchLoadTasksMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101ListDatabasesMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListDatabases',
    '/#X-Amz-Target=Timestream_20181101.ListDatabases',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ListDatabasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ListDatabasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ListDatabases'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101ListDatabases<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListDatabases']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101ListDatabasesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101ListTablesMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListTables',
    '/#X-Amz-Target=Timestream_20181101.ListTables',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ListTablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ListTablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ListTables'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101ListTables<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListTables']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101ListTablesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101ListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    '/#X-Amz-Target=Timestream_20181101.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101ListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ListTagsForResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101ListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101ResumeBatchLoadTaskMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask',
    '/#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101ResumeBatchLoadTaskMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101ResumeBatchLoadTaskMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101ResumeBatchLoadTask<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.ResumeBatchLoadTask']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101ResumeBatchLoadTaskMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101TagResourceMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.TagResource',
    '/#X-Amz-Target=Timestream_20181101.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101TagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101TagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.TagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101TagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.TagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101TagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101UntagResourceMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UntagResource',
    '/#X-Amz-Target=Timestream_20181101.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101UntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101UntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.UntagResource'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101UntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.UntagResource']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101UntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101UpdateDatabaseMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UpdateDatabase',
    '/#X-Amz-Target=Timestream_20181101.UpdateDatabase',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101UpdateDatabaseMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101UpdateDatabaseMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.UpdateDatabase'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101UpdateDatabase<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateDatabase']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101UpdateDatabaseMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101UpdateTableMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.UpdateTable',
    '/#X-Amz-Target=Timestream_20181101.UpdateTable',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101UpdateTableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101UpdateTableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.UpdateTable'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101UpdateTable<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.UpdateTable']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101UpdateTableMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostXAmzTargetTimestream20181101WriteRecordsMutationKey() {
  return [
    '#X-Amz-Target=Timestream_20181101.WriteRecords',
    '/#X-Amz-Target=Timestream_20181101.WriteRecords',
    'POST',
  ] as const
}

export function getPostXAmzTargetTimestream20181101WriteRecordsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetTimestream20181101WriteRecordsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=Timestream_20181101.WriteRecords'].$post(args, options),
      )
    },
  })
}

export function createPostXAmzTargetTimestream20181101WriteRecords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=Timestream_20181101.WriteRecords']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostXAmzTargetTimestream20181101WriteRecordsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
