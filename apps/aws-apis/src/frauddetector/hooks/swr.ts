import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariableKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeBatchGetVariableKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJobKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJobKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJobKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJobKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateListKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateList',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateListKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateModelVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateRuleKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeCreateVariableKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeCreateVariable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeCreateVariableKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJobKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJobKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteDetector<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEntityTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEventType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteLabelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteListKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteListKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcome<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteOutcomeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteRuleKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteRule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteRuleKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDeleteVariableKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDeleteVariable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDeleteVariableKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDescribeDetector<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDescribeDetectorKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersionsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetDetectors<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetDetectorsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetEntityTypesKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetEventKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEventPrediction<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadataKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetEventTypesKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetEventTypes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetEventTypesKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetExternalModels<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetExternalModelsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKeyKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetLabelsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetLabelsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetListElementsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetListElements<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetListElementsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetListsMetadataKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetModelVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetModelVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetModelVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetModelsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetModels',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetModels',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetModels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetModelsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetOutcomesKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetOutcomes<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetOutcomesKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetRulesKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetRules',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetRules',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetRulesKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeGetVariablesKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeGetVariables<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeGetVariablesKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeListEventPredictions<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeListEventPredictionsKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeListTagsForResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutDetectorKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutDetector<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutDetectorKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutEntityTypeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutEntityType<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutEntityTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutEventTypeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutEventType<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutEventTypeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutExternalModelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutExternalModel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutExternalModelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKey<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKeyKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutLabelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutLabel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadePutOutcomeKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadePutOutcome<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadePutOutcomeKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeSendEventKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeSendEvent<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeSendEventKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeTagResourceKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.TagResource',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeTagResource<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeTagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUntagResourceKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadataKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabel<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateListKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateList<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateListKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateModel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatusKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadata<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadataKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersion<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersionKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSHawksNestServiceFacadeUpdateVariableKey() {
  return [
    '#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable',
    '/#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSHawksNestServiceFacadeUpdateVariable<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSHawksNestServiceFacadeUpdateVariableKey()
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
            (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
