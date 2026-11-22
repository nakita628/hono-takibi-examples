import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThing(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.AssociateEntityToThing'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceCreateFlowTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateFlowTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemInstance'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceCreateSystemTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.CreateSystemTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeleteFlowTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteFlowTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteNamespace'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemInstance'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeleteSystemTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeleteSystemTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeploySystemInstance'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeprecateFlowTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateFlowTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDeprecateSystemTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DeprecateSystemTemplate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDescribeNamespace(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DescribeNamespace'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThing(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.DissociateEntityFromThing'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetEntities'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetFlowTemplateRevisions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetFlowTemplateRevisions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetNamespaceDeletionStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetSystemInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemInstance'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetSystemTemplateRevisions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetSystemTemplateRevisions'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.GetUploadStatus'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceListFlowExecutionMessages(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.ListFlowExecutionMessages'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceSearchEntities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchEntities'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowExecutions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchFlowTemplates'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemInstances(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemInstances'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchSystemTemplates'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceSearchThings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.SearchThings'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceUndeploySystemInstance(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.UndeploySystemInstance'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceUpdateFlowTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateFlowTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceUpdateSystemTemplate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.UpdateSystemTemplate'].$post(args, options),
  )
}

export async function postXAmzTargetIotThingsGraphFrontEndServiceUploadEntityDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=IotThingsGraphFrontEndService.UploadEntityDefinitions'].$post(
      args,
      options,
    ),
  )
}
