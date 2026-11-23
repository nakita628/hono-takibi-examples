import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetCodeBuild_20161006BatchDeleteBuildsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds'] as const
}

export function getXAmzTargetCodeBuild_20161006BatchGetBuildBatchesKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches'] as const
}

export function getXAmzTargetCodeBuild_20161006BatchGetBuildsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds'] as const
}

export function getXAmzTargetCodeBuild_20161006BatchGetProjectsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects'] as const
}

export function getXAmzTargetCodeBuild_20161006BatchGetReportGroupsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups'] as const
}

export function getXAmzTargetCodeBuild_20161006BatchGetReportsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.BatchGetReports'] as const
}

export function getXAmzTargetCodeBuild_20161006CreateProjectKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.CreateProject'] as const
}

export function getXAmzTargetCodeBuild_20161006CreateReportGroupKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup'] as const
}

export function getXAmzTargetCodeBuild_20161006CreateWebhookKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.CreateWebhook'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteBuildBatchKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteProjectKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteProject'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteReportKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteReport'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteReportGroupKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteResourcePolicyKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteSourceCredentialsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials'] as const
}

export function getXAmzTargetCodeBuild_20161006DeleteWebhookKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook'] as const
}

export function getXAmzTargetCodeBuild_20161006DescribeCodeCoveragesKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages'] as const
}

export function getXAmzTargetCodeBuild_20161006DescribeTestCasesKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases'] as const
}

export function getXAmzTargetCodeBuild_20161006GetReportGroupTrendKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend'] as const
}

export function getXAmzTargetCodeBuild_20161006GetResourcePolicyKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy'] as const
}

export function getXAmzTargetCodeBuild_20161006ImportSourceCredentialsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials'] as const
}

export function getXAmzTargetCodeBuild_20161006InvalidateProjectCacheKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache'] as const
}

export function getXAmzTargetCodeBuild_20161006ListBuildBatchesKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches'] as const
}

export function getXAmzTargetCodeBuild_20161006ListBuildBatchesForProjectKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject'] as const
}

export function getXAmzTargetCodeBuild_20161006ListBuildsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListBuilds'] as const
}

export function getXAmzTargetCodeBuild_20161006ListBuildsForProjectKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject'] as const
}

export function getXAmzTargetCodeBuild_20161006ListCuratedEnvironmentImagesKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages'] as const
}

export function getXAmzTargetCodeBuild_20161006ListProjectsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListProjects'] as const
}

export function getXAmzTargetCodeBuild_20161006ListReportGroupsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListReportGroups'] as const
}

export function getXAmzTargetCodeBuild_20161006ListReportsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListReports'] as const
}

export function getXAmzTargetCodeBuild_20161006ListReportsForReportGroupKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup'] as const
}

export function getXAmzTargetCodeBuild_20161006ListSharedProjectsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects'] as const
}

export function getXAmzTargetCodeBuild_20161006ListSharedReportGroupsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups'] as const
}

export function getXAmzTargetCodeBuild_20161006ListSourceCredentialsKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials'] as const
}

export function getXAmzTargetCodeBuild_20161006PutResourcePolicyKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy'] as const
}

export function getXAmzTargetCodeBuild_20161006RetryBuildKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.RetryBuild'] as const
}

export function getXAmzTargetCodeBuild_20161006RetryBuildBatchKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch'] as const
}

export function getXAmzTargetCodeBuild_20161006StartBuildKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.StartBuild'] as const
}

export function getXAmzTargetCodeBuild_20161006StartBuildBatchKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch'] as const
}

export function getXAmzTargetCodeBuild_20161006StopBuildKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.StopBuild'] as const
}

export function getXAmzTargetCodeBuild_20161006StopBuildBatchKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch'] as const
}

export function getXAmzTargetCodeBuild_20161006UpdateProjectKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.UpdateProject'] as const
}

export function getXAmzTargetCodeBuild_20161006UpdateProjectVisibilityKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility'] as const
}

export function getXAmzTargetCodeBuild_20161006UpdateReportGroupKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup'] as const
}

export function getXAmzTargetCodeBuild_20161006UpdateWebhookKey() {
  return ['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook'] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchDeleteBuildsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds',
    '/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006BatchDeleteBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006BatchDeleteBuildsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006BatchGetBuildBatchesKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006BatchGetBuildBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006BatchGetBuildBatchesKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006BatchGetBuildsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006BatchGetBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006BatchGetBuildsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006BatchGetProjectsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetProjects',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006BatchGetProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006BatchGetProjectsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006BatchGetReportGroupsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006BatchGetReportGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006BatchGetReportGroupsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006BatchGetReportsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetReports',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetReports',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006BatchGetReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006BatchGetReportsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.BatchGetReports'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006CreateProjectKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.CreateProject',
    '/#X-Amz-Target=CodeBuild_20161006.CreateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006CreateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006CreateProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.CreateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006CreateReportGroupKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.CreateReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006CreateReportGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006CreateReportGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006CreateWebhookKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.CreateWebhook',
    '/#X-Amz-Target=CodeBuild_20161006.CreateWebhook',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006CreateWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006CreateWebhookKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.CreateWebhook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteBuildBatchKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteBuildBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteBuildBatchKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteProjectKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteProject',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteReportKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteReport',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteReport',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteReport<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteReportKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteReport'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteReportGroupKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteReportGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteReportGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteResourcePolicyKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteSourceCredentialsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteSourceCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteSourceCredentialsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DeleteWebhookKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteWebhook',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DeleteWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DeleteWebhookKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DescribeCodeCoveragesKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages',
    '/#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DescribeCodeCoverages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DescribeCodeCoveragesKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006DescribeTestCasesKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DescribeTestCases',
    '/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006DescribeTestCases<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006DescribeTestCasesKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006GetReportGroupTrendKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend',
    '/#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006GetReportGroupTrend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006GetReportGroupTrendKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006GetResourcePolicyKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy',
    '/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006GetResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006GetResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ImportSourceCredentialsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials',
    '/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ImportSourceCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ImportSourceCredentialsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006InvalidateProjectCacheKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache',
    '/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006InvalidateProjectCache<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006InvalidateProjectCacheKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListBuildBatchesKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuildBatches',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatches',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListBuildBatches<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListBuildBatchesKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListBuildBatchesForProjectKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListBuildBatchesForProject<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListBuildBatchesForProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListBuildsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuilds',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuilds',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListBuilds<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListBuildsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListBuilds'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListBuildsForProjectKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListBuildsForProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListBuildsForProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages',
    '/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImages<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListProjectsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListProjects',
    '/#X-Amz-Target=CodeBuild_20161006.ListProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListProjectsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListProjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListReportGroupsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListReportGroups',
    '/#X-Amz-Target=CodeBuild_20161006.ListReportGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListReportGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListReportGroupsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListReportGroups'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListReportsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListReports',
    '/#X-Amz-Target=CodeBuild_20161006.ListReports',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListReports<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListReportsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListReports'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListReportsForReportGroupKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListReportsForReportGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListReportsForReportGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListSharedProjectsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListSharedProjects',
    '/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListSharedProjects<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListSharedProjectsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListSharedReportGroupsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups',
    '/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListSharedReportGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListSharedReportGroupsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006ListSourceCredentialsKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials',
    '/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006ListSourceCredentials<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006ListSourceCredentialsKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006PutResourcePolicyKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy',
    '/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006PutResourcePolicy<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006PutResourcePolicyKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006RetryBuildKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.RetryBuild',
    '/#X-Amz-Target=CodeBuild_20161006.RetryBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006RetryBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006RetryBuildKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.RetryBuild'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006RetryBuildBatchKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006RetryBuildBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006RetryBuildBatchKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006StartBuildKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StartBuild',
    '/#X-Amz-Target=CodeBuild_20161006.StartBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006StartBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006StartBuildKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.StartBuild'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006StartBuildBatchKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StartBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.StartBuildBatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006StartBuildBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006StartBuildBatchKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006StopBuildKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StopBuild',
    '/#X-Amz-Target=CodeBuild_20161006.StopBuild',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006StopBuild<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006StopBuildKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.StopBuild'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006StopBuildBatchKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StopBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.StopBuildBatch',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006StopBuildBatch<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006StopBuildBatchKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006UpdateProjectKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateProject',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateProject',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006UpdateProject<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006UpdateProjectKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.UpdateProject'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006UpdateProjectVisibilityKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006UpdateProjectVisibility<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006UpdateProjectVisibilityKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006UpdateReportGroupKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006UpdateReportGroup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006UpdateReportGroupKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetCodeBuild20161006UpdateWebhookKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateWebhook',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook',
    'POST',
  ] as const
}

export function usePostXAmzTargetCodeBuild20161006UpdateWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetCodeBuild20161006UpdateWebhookKey()
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
            (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
