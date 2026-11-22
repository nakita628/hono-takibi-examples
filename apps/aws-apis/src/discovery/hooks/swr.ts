import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSPoseidonServiceV2015_11_01AssociateConfigurationItemsToApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
  ] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01BatchDeleteImportDataKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01CreateApplicationKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01CreateTagsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DeleteApplicationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DeleteTagsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeAgentsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeContinuousExportsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeExportConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeExportTasksKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeImportTasksKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DescribeTagsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01DisassociateConfigurationItemsFromApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
  ] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01ExportConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01GetDiscoverySummaryKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01ListConfigurationsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01ListServerNeighborsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartContinuousExportKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartDataCollectionByAgentIdsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartExportTaskKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StartImportTaskKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StopContinuousExportKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01StopDataCollectionByAgentIdsKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds'] as const
}

export function getXAmzTargetAWSPoseidonServiceV2015_11_01UpdateApplicationKey() {
  return ['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication'] as const
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSPoseidonServiceV20151101AssociateConfigurationItemsToApplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSPoseidonService_V2015_11_01.AssociateConfigurationItemsToApplication'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportData<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101BatchDeleteImportDataKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.BatchDeleteImportData'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101CreateApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101CreateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101CreateApplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101CreateTagsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101CreateTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101CreateTagsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.CreateTags'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DeleteApplications<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DeleteApplicationsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteApplications'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DeleteTagsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DeleteTags<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DeleteTagsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DeleteTags'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeAgents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeAgentsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeAgents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExports<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeContinuousExportsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeContinuousExports'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeExportTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasks<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeImportTasks'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DescribeTagsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DescribeTags<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101DescribeTagsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DescribeTags'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSPoseidonServiceV20151101DisassociateConfigurationItemsFromApplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSPoseidonService_V2015_11_01.DisassociateConfigurationItemsFromApplication'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101ExportConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ExportConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummary<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101GetDiscoverySummaryKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.GetDiscoverySummary'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101ListConfigurations<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101ListConfigurationsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListConfigurations'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighbors<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101ListServerNeighborsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.ListServerNeighbors'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101StartContinuousExportKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartContinuousExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIds<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101StartDataCollectionByAgentIdsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartDataCollectionByAgentIds'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartExportTaskKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101StartExportTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101StartExportTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartExportTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StartImportTaskKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101StartImportTask<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101StartImportTaskKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StartImportTask'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExport<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101StopContinuousExportKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopContinuousExport'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIds<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101StopDataCollectionByAgentIdsKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.StopDataCollectionByAgentIds'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationKey() {
  return [
    '#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication',
    '/#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSPoseidonServiceV20151101UpdateApplication<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSPoseidonServiceV20151101UpdateApplicationKey()
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
            (typeof client)['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSPoseidonService_V2015_11_01.UpdateApplication'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
