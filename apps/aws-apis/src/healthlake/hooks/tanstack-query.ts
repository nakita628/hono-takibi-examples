import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetHealthLakeCreateFHIRDatastoreKey() {
  return ['#X-Amz-Target=HealthLake.CreateFHIRDatastore'] as const
}

export function getXAmzTargetHealthLakeDeleteFHIRDatastoreKey() {
  return ['#X-Amz-Target=HealthLake.DeleteFHIRDatastore'] as const
}

export function getXAmzTargetHealthLakeDescribeFHIRDatastoreKey() {
  return ['#X-Amz-Target=HealthLake.DescribeFHIRDatastore'] as const
}

export function getXAmzTargetHealthLakeDescribeFHIRExportJobKey() {
  return ['#X-Amz-Target=HealthLake.DescribeFHIRExportJob'] as const
}

export function getXAmzTargetHealthLakeDescribeFHIRImportJobKey() {
  return ['#X-Amz-Target=HealthLake.DescribeFHIRImportJob'] as const
}

export function getXAmzTargetHealthLakeListFHIRDatastoresKey() {
  return ['#X-Amz-Target=HealthLake.ListFHIRDatastores'] as const
}

export function getXAmzTargetHealthLakeListFHIRExportJobsKey() {
  return ['#X-Amz-Target=HealthLake.ListFHIRExportJobs'] as const
}

export function getXAmzTargetHealthLakeListFHIRImportJobsKey() {
  return ['#X-Amz-Target=HealthLake.ListFHIRImportJobs'] as const
}

export function getXAmzTargetHealthLakeListTagsForResourceKey() {
  return ['#X-Amz-Target=HealthLake.ListTagsForResource'] as const
}

export function getXAmzTargetHealthLakeStartFHIRExportJobKey() {
  return ['#X-Amz-Target=HealthLake.StartFHIRExportJob'] as const
}

export function getXAmzTargetHealthLakeStartFHIRImportJobKey() {
  return ['#X-Amz-Target=HealthLake.StartFHIRImportJob'] as const
}

export function getXAmzTargetHealthLakeTagResourceKey() {
  return ['#X-Amz-Target=HealthLake.TagResource'] as const
}

export function getXAmzTargetHealthLakeUntagResourceKey() {
  return ['#X-Amz-Target=HealthLake.UntagResource'] as const
}

export function getPostXAmzTargetHealthLakeCreateFHIRDatastoreMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.CreateFHIRDatastore',
    '/#X-Amz-Target=HealthLake.CreateFHIRDatastore',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeCreateFHIRDatastoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeCreateFHIRDatastoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.CreateFHIRDatastore'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeCreateFHIRDatastore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeCreateFHIRDatastoreMutationOptions<
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

export function getPostXAmzTargetHealthLakeDeleteFHIRDatastoreMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.DeleteFHIRDatastore',
    '/#X-Amz-Target=HealthLake.DeleteFHIRDatastore',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeDeleteFHIRDatastoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeDeleteFHIRDatastoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.DeleteFHIRDatastore'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeDeleteFHIRDatastore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeDeleteFHIRDatastoreMutationOptions<
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

export function getPostXAmzTargetHealthLakeDescribeFHIRDatastoreMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.DescribeFHIRDatastore',
    '/#X-Amz-Target=HealthLake.DescribeFHIRDatastore',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeDescribeFHIRDatastoreMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeDescribeFHIRDatastoreMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.DescribeFHIRDatastore'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeDescribeFHIRDatastore<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeDescribeFHIRDatastoreMutationOptions<
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

export function getPostXAmzTargetHealthLakeDescribeFHIRExportJobMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.DescribeFHIRExportJob',
    '/#X-Amz-Target=HealthLake.DescribeFHIRExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeDescribeFHIRExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeDescribeFHIRExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.DescribeFHIRExportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeDescribeFHIRExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeDescribeFHIRExportJobMutationOptions<
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

export function getPostXAmzTargetHealthLakeDescribeFHIRImportJobMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.DescribeFHIRImportJob',
    '/#X-Amz-Target=HealthLake.DescribeFHIRImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeDescribeFHIRImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeDescribeFHIRImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.DescribeFHIRImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeDescribeFHIRImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeDescribeFHIRImportJobMutationOptions<
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

export function getPostXAmzTargetHealthLakeListFHIRDatastoresMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.ListFHIRDatastores',
    '/#X-Amz-Target=HealthLake.ListFHIRDatastores',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeListFHIRDatastoresMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeListFHIRDatastoresMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.ListFHIRDatastores'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeListFHIRDatastores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeListFHIRDatastoresMutationOptions<
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

export function getPostXAmzTargetHealthLakeListFHIRExportJobsMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.ListFHIRExportJobs',
    '/#X-Amz-Target=HealthLake.ListFHIRExportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeListFHIRExportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeListFHIRExportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.ListFHIRExportJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeListFHIRExportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeListFHIRExportJobsMutationOptions<
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

export function getPostXAmzTargetHealthLakeListFHIRImportJobsMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.ListFHIRImportJobs',
    '/#X-Amz-Target=HealthLake.ListFHIRImportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeListFHIRImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeListFHIRImportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.ListFHIRImportJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeListFHIRImportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeListFHIRImportJobsMutationOptions<
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

export function getPostXAmzTargetHealthLakeListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.ListTagsForResource',
    '/#X-Amz-Target=HealthLake.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetHealthLakeStartFHIRExportJobMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.StartFHIRExportJob',
    '/#X-Amz-Target=HealthLake.StartFHIRExportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeStartFHIRExportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeStartFHIRExportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.StartFHIRExportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeStartFHIRExportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeStartFHIRExportJobMutationOptions<
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

export function getPostXAmzTargetHealthLakeStartFHIRImportJobMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.StartFHIRImportJob',
    '/#X-Amz-Target=HealthLake.StartFHIRImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeStartFHIRImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeStartFHIRImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=HealthLake.StartFHIRImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetHealthLakeStartFHIRImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeStartFHIRImportJobMutationOptions<
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

export function getPostXAmzTargetHealthLakeTagResourceMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.TagResource',
    '/#X-Amz-Target=HealthLake.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=HealthLake.TagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetHealthLakeTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeTagResourceMutationOptions<
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

export function getPostXAmzTargetHealthLakeUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=HealthLake.UntagResource',
    '/#X-Amz-Target=HealthLake.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetHealthLakeUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetHealthLakeUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>,
    ) {
      return parseResponse(client['#X-Amz-Target=HealthLake.UntagResource'].$post(args, options))
    },
  })
}

export function usePostXAmzTargetHealthLakeUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetHealthLakeUntagResourceMutationOptions<
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
