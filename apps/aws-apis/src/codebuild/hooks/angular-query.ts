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

export function getPostXAmzTargetCodeBuild20161006BatchDeleteBuildsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds',
    '/#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchDeleteBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006BatchDeleteBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006BatchDeleteBuilds<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchDeleteBuilds']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006BatchDeleteBuildsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006BatchGetBuildBatchesMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchGetBuildBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006BatchGetBuildBatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006BatchGetBuildBatches<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuildBatches']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006BatchGetBuildBatchesMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006BatchGetBuildsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchGetBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006BatchGetBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006BatchGetBuilds<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetBuilds']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006BatchGetBuildsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006BatchGetProjectsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetProjects',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchGetProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006BatchGetProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006BatchGetProjects<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetProjects']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006BatchGetProjectsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006BatchGetReportGroupsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchGetReportGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006BatchGetReportGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006BatchGetReportGroups<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReportGroups']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006BatchGetReportGroupsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006BatchGetReportsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.BatchGetReports',
    '/#X-Amz-Target=CodeBuild_20161006.BatchGetReports',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006BatchGetReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006BatchGetReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.BatchGetReports'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006BatchGetReports<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.BatchGetReports']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006BatchGetReportsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006CreateProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.CreateProject',
    '/#X-Amz-Target=CodeBuild_20161006.CreateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006CreateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006CreateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.CreateProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006CreateProject<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006CreateProjectMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006CreateReportGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.CreateReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.CreateReportGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006CreateReportGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006CreateReportGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006CreateReportGroup<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateReportGroup']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006CreateReportGroupMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006CreateWebhookMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.CreateWebhook',
    '/#X-Amz-Target=CodeBuild_20161006.CreateWebhook',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006CreateWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006CreateWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.CreateWebhook'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006CreateWebhook<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.CreateWebhook']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006CreateWebhookMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteBuildBatchMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteBuildBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteBuildBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteBuildBatch<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteBuildBatch']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DeleteBuildBatchMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteProject',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteProject<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DeleteProjectMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteReportMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteReport',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteReport',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteReportMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteReportMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteReport'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteReport<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReport']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DeleteReportMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteReportGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteReportGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteReportGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteReportGroup<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteReportGroup']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DeleteReportGroupMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteResourcePolicy<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteResourcePolicy']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DeleteResourcePolicyMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteSourceCredentialsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteSourceCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteSourceCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteSourceCredentials<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteSourceCredentials']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006DeleteSourceCredentialsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DeleteWebhookMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DeleteWebhook',
    '/#X-Amz-Target=CodeBuild_20161006.DeleteWebhook',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DeleteWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DeleteWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DeleteWebhook<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DeleteWebhook']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DeleteWebhookMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DescribeCodeCoveragesMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages',
    '/#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DescribeCodeCoveragesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DescribeCodeCoveragesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DescribeCodeCoverages<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeCodeCoverages']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DescribeCodeCoveragesMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006DescribeTestCasesMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.DescribeTestCases',
    '/#X-Amz-Target=CodeBuild_20161006.DescribeTestCases',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006DescribeTestCasesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006DescribeTestCasesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006DescribeTestCases<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.DescribeTestCases']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006DescribeTestCasesMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006GetReportGroupTrendMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend',
    '/#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006GetReportGroupTrendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006GetReportGroupTrendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006GetReportGroupTrend<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetReportGroupTrend']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006GetReportGroupTrendMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006GetResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy',
    '/#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006GetResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006GetResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006GetResourcePolicy<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.GetResourcePolicy']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006GetResourcePolicyMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ImportSourceCredentialsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials',
    '/#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ImportSourceCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ImportSourceCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ImportSourceCredentials<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ImportSourceCredentials']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006ImportSourceCredentialsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006InvalidateProjectCacheMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache',
    '/#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006InvalidateProjectCacheMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006InvalidateProjectCacheMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006InvalidateProjectCache<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.InvalidateProjectCache']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006InvalidateProjectCacheMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListBuildBatchesMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuildBatches',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatches',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListBuildBatchesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListBuildBatchesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListBuildBatches<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatches']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListBuildBatchesMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListBuildBatchesForProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListBuildBatchesForProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListBuildBatchesForProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListBuildBatchesForProject<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildBatchesForProject']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006ListBuildBatchesForProjectMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListBuildsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuilds',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuilds',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListBuildsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListBuildsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListBuilds'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListBuilds<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuilds']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListBuildsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListBuildsForProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject',
    '/#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListBuildsForProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListBuildsForProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListBuildsForProject<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListBuildsForProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListBuildsForProjectMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages',
    '/#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImages<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListCuratedEnvironmentImages']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006ListCuratedEnvironmentImagesMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListProjectsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListProjects',
    '/#X-Amz-Target=CodeBuild_20161006.ListProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListProjects'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListProjects<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListProjects']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListProjectsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListReportGroupsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListReportGroups',
    '/#X-Amz-Target=CodeBuild_20161006.ListReportGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListReportGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListReportGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListReportGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListReportGroups<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportGroups']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListReportGroupsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListReportsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListReports',
    '/#X-Amz-Target=CodeBuild_20161006.ListReports',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListReportsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListReportsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListReports'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListReports<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReports']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListReportsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListReportsForReportGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListReportsForReportGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListReportsForReportGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListReportsForReportGroup<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListReportsForReportGroup']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006ListReportsForReportGroupMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListSharedProjectsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListSharedProjects',
    '/#X-Amz-Target=CodeBuild_20161006.ListSharedProjects',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListSharedProjectsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListSharedProjectsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListSharedProjects<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedProjects']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListSharedProjectsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListSharedReportGroupsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups',
    '/#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListSharedReportGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListSharedReportGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListSharedReportGroups<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSharedReportGroups']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006ListSharedReportGroupsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006ListSourceCredentialsMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials',
    '/#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006ListSourceCredentialsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006ListSourceCredentialsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006ListSourceCredentials<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.ListSourceCredentials']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006ListSourceCredentialsMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006PutResourcePolicyMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy',
    '/#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006PutResourcePolicyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006PutResourcePolicyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006PutResourcePolicy<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.PutResourcePolicy']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006PutResourcePolicyMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006RetryBuildMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.RetryBuild',
    '/#X-Amz-Target=CodeBuild_20161006.RetryBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006RetryBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006RetryBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.RetryBuild'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006RetryBuild<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuild']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006RetryBuildMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006RetryBuildBatchMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006RetryBuildBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006RetryBuildBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006RetryBuildBatch<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.RetryBuildBatch']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006RetryBuildBatchMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006StartBuildMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StartBuild',
    '/#X-Amz-Target=CodeBuild_20161006.StartBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006StartBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006StartBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.StartBuild'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006StartBuild<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuild']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006StartBuildMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006StartBuildBatchMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StartBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.StartBuildBatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006StartBuildBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006StartBuildBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006StartBuildBatch<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.StartBuildBatch']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006StartBuildBatchMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006StopBuildMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StopBuild',
    '/#X-Amz-Target=CodeBuild_20161006.StopBuild',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006StopBuildMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006StopBuildMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.StopBuild'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006StopBuild<
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
                ReturnType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuild']['$post']>,
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006StopBuildMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006StopBuildBatchMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.StopBuildBatch',
    '/#X-Amz-Target=CodeBuild_20161006.StopBuildBatch',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006StopBuildBatchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006StopBuildBatchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006StopBuildBatch<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.StopBuildBatch']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006StopBuildBatchMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006UpdateProjectMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateProject',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateProject',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006UpdateProjectMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006UpdateProjectMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.UpdateProject'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006UpdateProject<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProject']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006UpdateProjectMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006UpdateProjectVisibilityMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006UpdateProjectVisibilityMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006UpdateProjectVisibilityMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006UpdateProjectVisibility<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateProjectVisibility']['$post']
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
    const mutationDefaults =
      getPostXAmzTargetCodeBuild20161006UpdateProjectVisibilityMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006UpdateReportGroupMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006UpdateReportGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006UpdateReportGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006UpdateReportGroup<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateReportGroup']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006UpdateReportGroupMutationOptions<
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

export function getPostXAmzTargetCodeBuild20161006UpdateWebhookMutationKey() {
  return [
    '#X-Amz-Target=CodeBuild_20161006.UpdateWebhook',
    '/#X-Amz-Target=CodeBuild_20161006.UpdateWebhook',
    'POST',
  ] as const
}

export function getPostXAmzTargetCodeBuild20161006UpdateWebhookMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetCodeBuild20161006UpdateWebhookMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook'].$post(args, options),
      )
    },
  })
}

export function injectPostXAmzTargetCodeBuild20161006UpdateWebhook<
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
                  (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=CodeBuild_20161006.UpdateWebhook']['$post']
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
    const mutationDefaults = getPostXAmzTargetCodeBuild20161006UpdateWebhookMutationOptions<
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
