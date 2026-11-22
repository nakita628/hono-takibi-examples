import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetHealthLakeCreateFHIRDatastoreKey() {
  return [
    '#X-Amz-Target=HealthLake.CreateFHIRDatastore',
    '/#X-Amz-Target=HealthLake.CreateFHIRDatastore',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeCreateFHIRDatastore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeCreateFHIRDatastoreKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.CreateFHIRDatastore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.CreateFHIRDatastore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeDeleteFHIRDatastoreKey() {
  return [
    '#X-Amz-Target=HealthLake.DeleteFHIRDatastore',
    '/#X-Amz-Target=HealthLake.DeleteFHIRDatastore',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeDeleteFHIRDatastore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeDeleteFHIRDatastoreKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.DeleteFHIRDatastore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.DeleteFHIRDatastore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeDescribeFHIRDatastoreKey() {
  return [
    '#X-Amz-Target=HealthLake.DescribeFHIRDatastore',
    '/#X-Amz-Target=HealthLake.DescribeFHIRDatastore',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeDescribeFHIRDatastore<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeDescribeFHIRDatastoreKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRDatastore']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.DescribeFHIRDatastore'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeDescribeFHIRExportJobKey() {
  return [
    '#X-Amz-Target=HealthLake.DescribeFHIRExportJob',
    '/#X-Amz-Target=HealthLake.DescribeFHIRExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeDescribeFHIRExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeDescribeFHIRExportJobKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.DescribeFHIRExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeDescribeFHIRImportJobKey() {
  return [
    '#X-Amz-Target=HealthLake.DescribeFHIRImportJob',
    '/#X-Amz-Target=HealthLake.DescribeFHIRImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeDescribeFHIRImportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeDescribeFHIRImportJobKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.DescribeFHIRImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.DescribeFHIRImportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeListFHIRDatastoresKey() {
  return [
    '#X-Amz-Target=HealthLake.ListFHIRDatastores',
    '/#X-Amz-Target=HealthLake.ListFHIRDatastores',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeListFHIRDatastores<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeListFHIRDatastoresKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.ListFHIRDatastores']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.ListFHIRDatastores'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeListFHIRExportJobsKey() {
  return [
    '#X-Amz-Target=HealthLake.ListFHIRExportJobs',
    '/#X-Amz-Target=HealthLake.ListFHIRExportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeListFHIRExportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeListFHIRExportJobsKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.ListFHIRExportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.ListFHIRExportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeListFHIRImportJobsKey() {
  return [
    '#X-Amz-Target=HealthLake.ListFHIRImportJobs',
    '/#X-Amz-Target=HealthLake.ListFHIRImportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeListFHIRImportJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeListFHIRImportJobsKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.ListFHIRImportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.ListFHIRImportJobs'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeListTagsForResourceKey() {
  return [
    '#X-Amz-Target=HealthLake.ListTagsForResource',
    '/#X-Amz-Target=HealthLake.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeListTagsForResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.ListTagsForResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeStartFHIRExportJobKey() {
  return [
    '#X-Amz-Target=HealthLake.StartFHIRExportJob',
    '/#X-Amz-Target=HealthLake.StartFHIRExportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeStartFHIRExportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeStartFHIRExportJobKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.StartFHIRExportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.StartFHIRExportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeStartFHIRImportJobKey() {
  return [
    '#X-Amz-Target=HealthLake.StartFHIRImportJob',
    '/#X-Amz-Target=HealthLake.StartFHIRImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeStartFHIRImportJob<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeStartFHIRImportJobKey()
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
            (typeof client)['#X-Amz-Target=HealthLake.StartFHIRImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=HealthLake.StartFHIRImportJob'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeTagResourceKey() {
  return [
    '#X-Amz-Target=HealthLake.TagResource',
    '/#X-Amz-Target=HealthLake.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.TagResource']['$post']>
        },
      ) => parseResponse(client['#X-Amz-Target=HealthLake.TagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetHealthLakeUntagResourceKey() {
  return [
    '#X-Amz-Target=HealthLake.UntagResource',
    '/#X-Amz-Target=HealthLake.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetHealthLakeUntagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetHealthLakeUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['#X-Amz-Target=HealthLake.UntagResource']['$post']>
        },
      ) =>
        parseResponse(client['#X-Amz-Target=HealthLake.UntagResource'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
