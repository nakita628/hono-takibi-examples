import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$get(args, options),
  )
}

export async function postOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobal(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global.$post(args, options),
  )
}

export async function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsGlobalId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['global'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.global[':id'].$delete(args, options),
  )
}

export async function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$get(args, options),
  )
}

export async function postOcsV2PhpAppsWorkflowengineApiV1WorkflowsUser(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user.$post(args, options),
  )
}

export async function getOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$get(args, options),
  )
}

export async function putOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$put(args, options),
  )
}

export async function deleteOcsV2PhpAppsWorkflowengineApiV1WorkflowsUserId(
  args: InferRequestType<
    (typeof client.ocs)['v2.php']['apps']['workflowengine']['api']['v1']['workflows']['user'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ocs['v2.php'].apps.workflowengine.api.v1.workflows.user[':id'].$delete(args, options),
  )
}
