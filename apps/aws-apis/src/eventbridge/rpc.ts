import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSEventsActivateEventSource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ActivateEventSource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ActivateEventSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsCancelReplay(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CancelReplay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.CancelReplay'].$post(args, options))
}

export async function postXAmzTargetAWSEventsCreateApiDestination(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateApiDestination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.CreateApiDestination'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsCreateArchive(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateArchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.CreateArchive'].$post(args, options))
}

export async function postXAmzTargetAWSEventsCreateConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.CreateConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsCreateEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.CreateEndpoint'].$post(args, options))
}

export async function postXAmzTargetAWSEventsCreateEventBus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.CreateEventBus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.CreateEventBus'].$post(args, options))
}

export async function postXAmzTargetAWSEventsCreatePartnerEventSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEvents.CreatePartnerEventSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.CreatePartnerEventSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDeactivateEventSource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeactivateEventSource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DeactivateEventSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDeauthorizeConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeauthorizeConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DeauthorizeConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDeleteApiDestination(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteApiDestination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DeleteApiDestination'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDeleteArchive(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteArchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DeleteArchive'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDeleteConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DeleteConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDeleteEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DeleteEndpoint'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDeleteEventBus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteEventBus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DeleteEventBus'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDeletePartnerEventSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEvents.DeletePartnerEventSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DeletePartnerEventSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDeleteRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DeleteRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DeleteRule'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDescribeApiDestination(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEvents.DescribeApiDestination']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DescribeApiDestination'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDescribeArchive(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeArchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DescribeArchive'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDescribeConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DescribeConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDescribeEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DescribeEndpoint'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDescribeEventBus(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventBus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DescribeEventBus'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDescribeEventSource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeEventSource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DescribeEventSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDescribePartnerEventSource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEvents.DescribePartnerEventSource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.DescribePartnerEventSource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsDescribeReplay(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeReplay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DescribeReplay'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDescribeRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DescribeRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DescribeRule'].$post(args, options))
}

export async function postXAmzTargetAWSEventsDisableRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.DisableRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.DisableRule'].$post(args, options))
}

export async function postXAmzTargetAWSEventsEnableRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.EnableRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.EnableRule'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListApiDestinations(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListApiDestinations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListApiDestinations'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsListArchives(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListArchives']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.ListArchives'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListConnections(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListConnections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.ListConnections'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListEndpoints(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEndpoints']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.ListEndpoints'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListEventBuses(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventBuses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.ListEventBuses'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListEventSources(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListEventSources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListEventSources'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsListPartnerEventSourceAccounts(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListPartnerEventSourceAccounts'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsListPartnerEventSources(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSEvents.ListPartnerEventSources']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListPartnerEventSources'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsListReplays(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListReplays']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.ListReplays'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListRuleNamesByTarget(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListRuleNamesByTarget'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsListRules(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListRules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.ListRules'].$post(args, options))
}

export async function postXAmzTargetAWSEventsListTagsForResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTagsForResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsListTargetsByRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.ListTargetsByRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.ListTargetsByRule'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsPutEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.PutEvents'].$post(args, options))
}

export async function postXAmzTargetAWSEventsPutPartnerEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPartnerEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.PutPartnerEvents'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsPutPermission(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutPermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.PutPermission'].$post(args, options))
}

export async function postXAmzTargetAWSEventsPutRule(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutRule']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.PutRule'].$post(args, options))
}

export async function postXAmzTargetAWSEventsPutTargets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.PutTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.PutTargets'].$post(args, options))
}

export async function postXAmzTargetAWSEventsRemovePermission(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemovePermission']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.RemovePermission'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsRemoveTargets(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.RemoveTargets']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.RemoveTargets'].$post(args, options))
}

export async function postXAmzTargetAWSEventsStartReplay(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.StartReplay']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.StartReplay'].$post(args, options))
}

export async function postXAmzTargetAWSEventsTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.TagResource'].$post(args, options))
}

export async function postXAmzTargetAWSEventsTestEventPattern(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.TestEventPattern']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.TestEventPattern'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.UntagResource'].$post(args, options))
}

export async function postXAmzTargetAWSEventsUpdateApiDestination(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateApiDestination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.UpdateApiDestination'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsUpdateArchive(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateArchive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.UpdateArchive'].$post(args, options))
}

export async function postXAmzTargetAWSEventsUpdateConnection(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateConnection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSEvents.UpdateConnection'].$post(args, options),
  )
}

export async function postXAmzTargetAWSEventsUpdateEndpoint(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSEvents.UpdateEndpoint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=AWSEvents.UpdateEndpoint'].$post(args, options))
}
