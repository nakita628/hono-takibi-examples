import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1b3Key() {
  return ['v1b3'] as const
}

export function getPostV1b3ProjectsProjectIdWorkerMessagesKey() {
  return ['v1b3', '/v1b3/projects/:projectId/WorkerMessages', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdWorkerMessages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdWorkerMessagesKey()
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
            (typeof client.v1b3.projects)[':projectId']['WorkerMessages']['$post']
          >
        },
      ) =>
        parseResponse(client.v1b3.projects[':projectId'].WorkerMessages.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdJobsKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs', args] as const
}

export function useGetV1b3ProjectsProjectIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1b3.projects[':projectId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdJobs<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1b3.projects[':projectId'].jobs.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdJobsKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs']['$post']> },
      ) => parseResponse(client.v1b3.projects[':projectId'].jobs.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdJobsJobIdKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId', args] as const
}

export function useGetV1b3ProjectsProjectIdJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1b3.projects[':projectId'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdJobsJobId<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1b3.projects[':projectId'].jobs[':jobId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutV1b3ProjectsProjectIdJobsJobIdKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId', 'PUT'] as const
}

export function usePutV1b3ProjectsProjectIdJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1b3ProjectsProjectIdJobsJobIdKey()
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
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['$put']
          >
        },
      ) =>
        parseResponse(client.v1b3.projects[':projectId'].jobs[':jobId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdJobsJobIdDebugGetConfigKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/debug/getConfig', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdJobsJobIdDebugGetConfig<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdJobsJobIdDebugGetConfigKey()
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
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['getConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].debug.getConfig.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/debug/sendCapture', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdJobsJobIdDebugSendCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdJobsJobIdDebugSendCaptureKey()
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
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['debug']['sendCapture']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].debug.sendCapture.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdJobsJobIdMessagesKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/messages', args] as const
}

export function useGetV1b3ProjectsProjectIdJobsJobIdMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsJobIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdJobsJobIdMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsJobIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].messages.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdJobsJobIdMetricsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/metrics', args] as const
}

export function useGetV1b3ProjectsProjectIdJobsJobIdMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsJobIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdJobsJobIdMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsJobIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId'].metrics.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/workItems:lease', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdJobsJobIdWorkItemsLease<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsLeaseKey()
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
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:lease']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId']['workItems:lease'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId/workItems:reportStatus', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdJobsJobIdWorkItemsReportStatusKey()
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
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId']['workItems:reportStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId']['workItems:reportStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdJobsJobIdSnapshotKey() {
  return ['v1b3', '/v1b3/projects/:projectId/jobs/:jobId:snapshot', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdJobsJobIdSnapshot<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdJobsJobIdSnapshotKey()
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
            (typeof client.v1b3.projects)[':projectId']['jobs'][':jobId:snapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].jobs[':jobId:snapshot'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdJobsAggregatedKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/jobs:aggregated', args] as const
}

export function useGetV1b3ProjectsProjectIdJobsAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId']['jobs:aggregated'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdJobsAggregated<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdJobsAggregatedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['jobs:aggregated']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId']['jobs:aggregated'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationWorkerMessagesKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/WorkerMessages', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationWorkerMessages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationWorkerMessagesKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['WorkerMessages']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].WorkerMessages.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/flexTemplates:launch',
    'POST',
  ] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationFlexTemplatesLaunchKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['flexTemplates:launch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location']['flexTemplates:launch'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs', args] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobs<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobs<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationJobsKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs/:jobId', args] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobsJobId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPutV1b3ProjectsProjectIdLocationsLocationJobsJobIdKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/jobs/:jobId', 'PUT'] as const
}

export function usePutV1b3ProjectsProjectIdLocationsLocationJobsJobId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutV1b3ProjectsProjectIdLocationsLocationJobsJobIdKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['$put']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].$put(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/debug/getConfig',
    'POST',
  ] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugGetConfigKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['getConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[
            ':jobId'
          ].debug.getConfig.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/debug/sendCapture',
    'POST',
  ] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCapture<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdDebugSendCaptureKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['debug']['sendCapture']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[
            ':jobId'
          ].debug.sendCapture.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/executionDetails',
    args,
  ] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[
            ':jobId'
          ].executionDetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdExecutionDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[
            ':jobId'
          ].executionDetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/messages',
    args,
  ] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessages<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessages<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMessagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['messages']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].messages.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/metrics',
    args,
  ] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetrics<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetrics<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdMetricsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['metrics']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].metrics.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/snapshots',
    args,
  ] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshots<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/stages/:stageId/executionDetails',
    args,
  ] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].stages[
            ':stageId'
          ].executionDetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetails<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationJobsJobIdStagesStageIdExecutionDetailsKey(
            args,
          )
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['stages'][':stageId']['executionDetails']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'].stages[
            ':stageId'
          ].executionDetails.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/workItems:lease',
    'POST',
  ] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLease<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsLeaseKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:lease']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'][
            'workItems:lease'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId/workItems:reportStatus',
    'POST',
  ] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdWorkItemsReportStatusKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId']['workItems:reportStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId'][
            'workItems:reportStatus'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/jobs/:jobId:snapshot',
    'POST',
  ] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshot<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationJobsJobIdSnapshotKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['jobs'][':jobId:snapshot']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].jobs[':jobId:snapshot'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationSnapshotsKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/snapshots', args] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationSnapshots<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
) {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/snapshots/:snapshotId',
    args,
  ] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots[':snapshotId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdKey() {
  return [
    'v1b3',
    '/v1b3/projects/:projectId/locations/:location/snapshots/:snapshotId',
    'DELETE',
  ] as const
}

export function useDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getDeleteV1b3ProjectsProjectIdLocationsLocationSnapshotsSnapshotIdKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['snapshots'][':snapshotId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].snapshots[
            ':snapshotId'
          ].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationTemplatesKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/templates', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationTemplatesKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location'].templates.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdLocationsLocationTemplatesGetKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/templates:get', args] as const
}

export function useGetV1b3ProjectsProjectIdLocationsLocationTemplatesGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationTemplatesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location']['templates:get'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdLocationsLocationTemplatesGet<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdLocationsLocationTemplatesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:get']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location']['templates:get'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchKey() {
  return ['v1b3', '/v1b3/projects/:projectId/locations/:location/templates:launch', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunch<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdLocationsLocationTemplatesLaunchKey()
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
            (typeof client.v1b3.projects)[':projectId']['locations'][':location']['templates:launch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId'].locations[':location']['templates:launch'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdSnapshotsKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots', args] as const
}

export function useGetV1b3ProjectsProjectIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1b3.projects[':projectId'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdSnapshots<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdSnapshotsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v1b3.projects[':projectId'].snapshots.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV1b3ProjectsProjectIdSnapshotsKey() {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots', 'DELETE'] as const
}

export function useDeleteV1b3ProjectsProjectIdSnapshots<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV1b3ProjectsProjectIdSnapshotsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1b3.projects)[':projectId']['snapshots']['$delete']>
        },
      ) => parseResponse(client.v1b3.projects[':projectId'].snapshots.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdSnapshotsSnapshotIdKey(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
) {
  return ['v1b3', '/v1b3/projects/:projectId/snapshots/:snapshotId', args] as const
}

export function useGetV1b3ProjectsProjectIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].snapshots[':snapshotId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdSnapshotsSnapshotId<TError = unknown>(
  args: InferRequestType<
    (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdSnapshotsSnapshotIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1b3.projects)[':projectId']['snapshots'][':snapshotId']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId'].snapshots[':snapshotId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdTemplatesKey() {
  return ['v1b3', '/v1b3/projects/:projectId/templates', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdTemplates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdTemplatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates']['$post']>
        },
      ) => parseResponse(client.v1b3.projects[':projectId'].templates.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1b3ProjectsProjectIdTemplatesGetKey(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
) {
  return ['v1b3', '/v1b3/projects/:projectId/templates:get', args] as const
}

export function useGetV1b3ProjectsProjectIdTemplatesGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdTemplatesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId']['templates:get'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1b3ProjectsProjectIdTemplatesGet<TError = unknown>(
  args: InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
            >
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1b3ProjectsProjectIdTemplatesGetKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:get']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v1b3.projects[':projectId']['templates:get'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostV1b3ProjectsProjectIdTemplatesLaunchKey() {
  return ['v1b3', '/v1b3/projects/:projectId/templates:launch', 'POST'] as const
}

export function usePostV1b3ProjectsProjectIdTemplatesLaunch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1b3ProjectsProjectIdTemplatesLaunchKey()
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
            (typeof client.v1b3.projects)[':projectId']['templates:launch']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1b3.projects[':projectId']['templates:launch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
