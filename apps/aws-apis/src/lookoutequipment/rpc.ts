import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateInferenceScheduler(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateInferenceScheduler'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateLabelGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateLabelGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceCreateModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.CreateModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteInferenceScheduler(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteInferenceScheduler'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteLabelGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteLabelGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDeleteModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DeleteModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataIngestionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataIngestionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeDataset(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeDataset'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeInferenceScheduler(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeLabelGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeLabelGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceDescribeModel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.DescribeModel'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListDataIngestionJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDataIngestionJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListDatasets(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListDatasets'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceEvents'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceExecutions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListInferenceSchedulers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListInferenceSchedulers'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabelGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabelGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListLabels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListLabels'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListModels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListModels'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListSensorStatistics(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListSensorStatistics'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.ListTagsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceStartDataIngestionJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartDataIngestionJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceStartInferenceScheduler(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StartInferenceScheduler'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceStopInferenceScheduler(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.StopInferenceScheduler'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateInferenceScheduler(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateInferenceScheduler'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSLookoutEquipmentFrontendServiceUpdateLabelGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSLookoutEquipmentFrontendService.UpdateLabelGroup'].$post(
      args,
      options,
    ),
  )
}
