import { useMutation, mutationOptions } from '@tanstack/preact-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/preact-query'
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDataset<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDatasetMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceScheduler<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceSchedulerMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabel<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroup<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroupMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModel<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModelMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDataset<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDatasetMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceScheduler<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceSchedulerMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabel<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroup<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroupMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModel<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModelMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJob<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJobMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataset<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDatasetMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceScheduler<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceSchedulerMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabel<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroup<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroupMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModel<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModelMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobs<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasets<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasetsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEvents<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEventsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutions<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutionsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulers<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulersMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroups<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroupsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabels<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListModels<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListModelsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatistics<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatisticsMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResource<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJob<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJobMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceScheduler<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceSchedulerMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceScheduler<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceSchedulerMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResource<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceTagResourceMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResource<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceScheduler<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceSchedulerMutationOptions<
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

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup',
    '/#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroup<
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
                  (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroupMutationOptions<
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
