import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetCodePipeline20150709AcknowledgeJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.AcknowledgeJob'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709AcknowledgeThirdPartyJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.AcknowledgeThirdPartyJob'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709CreateCustomActionType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.CreateCustomActionType'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709CreatePipeline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.CreatePipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.CreatePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709DeleteCustomActionType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.DeleteCustomActionType'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709DeletePipeline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeletePipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.DeletePipeline'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709DeleteWebhook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.DeleteWebhook'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709DeregisterWebhookWithThirdParty(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.DeregisterWebhookWithThirdParty'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodePipeline20150709DisableStageTransition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.DisableStageTransition'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709EnableStageTransition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.EnableStageTransition'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709GetActionType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetActionType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.GetActionType'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709GetJobDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetJobDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.GetJobDetails'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709GetPipeline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.GetPipeline'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709GetPipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.GetPipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709GetPipelineState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetPipelineState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.GetPipelineState'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709GetThirdPartyJobDetails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.GetThirdPartyJobDetails'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709ListActionExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.ListActionExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709ListActionTypes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListActionTypes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.ListActionTypes'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709ListPipelineExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.ListPipelineExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709ListPipelines(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListPipelines']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.ListPipelines'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709ListWebhooks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.ListWebhooks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.ListWebhooks'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PollForJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PollForJobs'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PollForThirdPartyJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PollForThirdPartyJobs'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PutActionRevision(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutActionRevision']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutActionRevision'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PutApprovalResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutApprovalResult'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PutJobFailureResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutJobFailureResult'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PutJobSuccessResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutJobSuccessResult'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709PutThirdPartyJobFailureResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobFailureResult'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodePipeline20150709PutThirdPartyJobSuccessResult(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutThirdPartyJobSuccessResult'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodePipeline20150709PutWebhook(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.PutWebhook']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.PutWebhook'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709RegisterWebhookWithThirdParty(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.RegisterWebhookWithThirdParty'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetCodePipeline20150709RetryStageExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.RetryStageExecution'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709StartPipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.StartPipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709StopPipelineExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.StopPipelineExecution'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709TagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709UntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709UpdateActionType(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdateActionType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.UpdateActionType'].$post(args, options),
  )
}

export async function postXAmzTargetCodePipeline20150709UpdatePipeline(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=CodePipeline_20150709.UpdatePipeline'].$post(args, options),
  )
}
