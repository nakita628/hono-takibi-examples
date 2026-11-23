import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAutomationActions202609AppId(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation.actions['2026-09'][':appId'].$get(args, options))
}

export async function postAutomationActions202609AppId(
  args: InferRequestType<(typeof client.automation.actions)['2026-09'][':appId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.automation.actions['2026-09'][':appId'].$post(args, options))
}

export async function getAutomationActions202609AppIdDefinitionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].$get(args, options),
  )
}

export async function deleteAutomationActions202609AppIdDefinitionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].$delete(args, options),
  )
}

export async function patchAutomationActions202609AppIdDefinitionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].$patch(args, options),
  )
}

export async function getAutomationActions202609AppIdDefinitionIdFunctions(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions.$get(args, options),
  )
}

export async function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionType(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'].$get(
      args,
      options,
    ),
  )
}

export async function putAutomationActions202609AppIdDefinitionIdFunctionsFunctionType(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'].$put(
      args,
      options,
    ),
  )
}

export async function deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionType(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions[
      ':functionType'
    ].$delete(args, options),
  )
}

export async function getAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
      ':functionId'
    ].$get(args, options),
  )
}

export async function putAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
      ':functionId'
    ].$put(args, options),
  )
}

export async function deleteAutomationActions202609AppIdDefinitionIdFunctionsFunctionTypeFunctionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['functions'][':functionType'][':functionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].functions[':functionType'][
      ':functionId'
    ].$delete(args, options),
  )
}

export async function getAutomationActions202609AppIdDefinitionIdRequiresObject(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$get(
      args,
      options,
    ),
  )
}

export async function postAutomationActions202609AppIdDefinitionIdRequiresObject(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['requires-object']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId']['requires-object'].$post(
      args,
      options,
    ),
  )
}

export async function getAutomationActions202609AppIdDefinitionIdRevisions(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].revisions.$get(args, options),
  )
}

export async function getAutomationActions202609AppIdDefinitionIdRevisionsRevisionId(
  args: InferRequestType<
    (typeof client.automation.actions)['2026-09'][':appId'][':definitionId']['revisions'][':revisionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions['2026-09'][':appId'][':definitionId'].revisions[':revisionId'].$get(
      args,
      options,
    ),
  )
}

export async function postAutomationActionsCallbacks202609Complete(
  args: InferRequestType<
    (typeof client.automation.actions.callbacks)['2026-09']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions.callbacks['2026-09'].complete.$post(args, options),
  )
}

export async function postAutomationActionsCallbacks202609CallbackIdComplete(
  args: InferRequestType<
    (typeof client.automation.actions.callbacks)['2026-09'][':callbackId']['complete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.automation.actions.callbacks['2026-09'][':callbackId'].complete.$post(args, options),
  )
}
