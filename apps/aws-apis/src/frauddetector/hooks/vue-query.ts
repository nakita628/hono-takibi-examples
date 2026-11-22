import { useMutation, mutationOptions } from '@tanstack/vue-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/vue-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateListKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateModelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateRuleKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeCreateVariableKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteEventKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteLabelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteListKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteModelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteRuleKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDeleteVariableKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetDetectorsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetEventKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetEventTypesKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetLabelsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetListElementsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetModelVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetModelsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetOutcomesKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetRulesKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeGetVariablesKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutDetectorKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutEntityTypeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutEventTypeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutExternalModelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutLabelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadePutOutcomeKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeSendEventKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeTagResourceKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUntagResourceKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateListKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateModelKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion'] as const
}

export function getXAmzTargetAWSHawksNestServiceFacadeUpdateVariableKey() {
  return ['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable'] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariable<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariable<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJob<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJob<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJob<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJob<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateListMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateList',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateList<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeCreateListMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateModel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateRule<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeCreateRuleMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateVariableMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeCreateVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateVariable<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeCreateVariableMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJob<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJob<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteDetector<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityType<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEvent<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEventType<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventType<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteLabel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteLabelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteListMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteList<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteListMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteModel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcome<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteRuleMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteRuleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteRuleMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteRule<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteRuleMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteVariableMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDeleteVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteVariable<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeDeleteVariableMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDescribeDetector<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersions<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobs<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobs<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatus<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetDetectors<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypes<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetEventMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEvent<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetEventMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEventPrediction<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadata<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventTypesMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventTypesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetEventTypesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEventTypes<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetEventTypesMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetExternalModels<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKey<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetLabelsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetLabels<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetLabelsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetListElementsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetListElementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetListElementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetListElements<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetListElementsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadata<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetModelVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetModelVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetModelVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetModelVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetModelVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetModelsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetModels',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModels',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetModelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetModelsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetModels<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetModelsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetOutcomesMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetOutcomesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetOutcomesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetOutcomes<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetOutcomesMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetRulesMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetRules',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetRules',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetRulesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetRulesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetRules<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetRulesMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetVariablesMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetVariablesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeGetVariablesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetVariables<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeGetVariablesMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeListEventPredictions<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeListTagsForResource<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutDetectorMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutDetectorMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutDetectorMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutDetector<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadePutDetectorMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutEntityTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutEntityTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutEntityTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutEntityType<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadePutEntityTypeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutEventTypeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutEventTypeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutEventTypeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutEventType<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadePutEventTypeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutExternalModelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutExternalModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutExternalModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutExternalModel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadePutExternalModelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKey<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutLabel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadePutLabelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadePutOutcomeMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutOutcomeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadePutOutcomeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutOutcome<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadePutOutcomeMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeSendEventMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeSendEventMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeSendEventMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeSendEvent<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeSendEventMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.TagResource',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeTagResource<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeTagResourceMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUntagResource<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeUntagResourceMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadata<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatus<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateListMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateListMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateListMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateList<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeUpdateListMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateModel<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatus<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadata<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersion<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
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
  const mutationDefaults =
    getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionMutationOptions<
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateVariableMutationKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateVariableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSHawksNestServiceFacadeUpdateVariableMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateVariable<
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
                    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
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
  const mutationDefaults = getPostXAmzTargetAWSHawksNestServiceFacadeUpdateVariableMutationOptions<
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
