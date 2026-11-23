import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler'] as const
}

export function getXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupKey() {
  return ['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup'] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDataset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceScheduler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDataset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceScheduler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataset<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceScheduler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasets<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListModels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatistics<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceScheduler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceScheduler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceScheduler<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupKey()
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
            (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
