import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSHawksNestServiceFacadeBatchCreateVariable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.BatchCreateVariable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeBatchGetVariable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.BatchGetVariable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCancelBatchImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCancelBatchPredictionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CancelBatchPredictionJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateBatchImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateBatchPredictionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateBatchPredictionJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateDetectorVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateDetectorVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateModelVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateModelVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeCreateVariable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.CreateVariable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchImportJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteBatchPredictionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteBatchPredictionJob'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteDetector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetector'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteDetectorVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteDetectorVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteEntityType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEntityType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteEvent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEvent'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteEventType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteEventsByEventType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteEventsByEventType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteExternalModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteExternalModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteLabel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteModelVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteModelVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteOutcome(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteOutcome'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteRule(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDeleteVariable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DeleteVariable'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDescribeDetector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeDetector'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeDescribeModelVersions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.DescribeModelVersions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetBatchImportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchImportJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetBatchPredictionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetBatchPredictionJobs'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetDeleteEventsByEventTypeStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDeleteEventsByEventTypeStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetDetectorVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectorVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetDetectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetDetectors'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetEntityTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEntityTypes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetEvent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEvent'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetEventPrediction(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPrediction'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetEventPredictionMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventPredictionMetadata'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetEventTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetEventTypes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetExternalModels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetExternalModels'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetKMSEncryptionKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetKMSEncryptionKey'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetLabels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetLabels'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetListElements(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetListElements'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetListsMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetListsMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetModelVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetModelVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetModels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetModels'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetOutcomes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetOutcomes'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetRules(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetRules'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeGetVariables(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.GetVariables'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeListEventPredictions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.ListEventPredictions'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutDetector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutDetector'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutEntityType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutEntityType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutEventType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutEventType'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutExternalModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutExternalModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutKMSEncryptionKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutKMSEncryptionKey'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutLabel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadePutOutcome(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.PutOutcome'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeSendEvent(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.SendEvent'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionMetadata'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateDetectorVersionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateDetectorVersionStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateEventLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateEventLabel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateList(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateList'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateModelVersionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateModelVersionStatus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleMetadata(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleMetadata'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateRuleVersion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateRuleVersion'].$post(args, options),
  )
}

export async function postXAmzTargetAWSHawksNestServiceFacadeUpdateVariable(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSHawksNestServiceFacade.UpdateVariable'].$post(args, options),
  )
}
