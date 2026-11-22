import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetLogs20140328AssociateKmsKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.AssociateKmsKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.AssociateKmsKey'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328CancelExportTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CancelExportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.CancelExportTask'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328CreateExportTask(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateExportTask']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.CreateExportTask'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328CreateLogGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.CreateLogGroup'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328CreateLogStream(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.CreateLogStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.CreateLogStream'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteAccountPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteAccountPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteDataProtectionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteDataProtectionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteDestination(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteDestination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteDestination'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteLogGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteLogGroup'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteLogStream(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DeleteLogStream']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteLogStream'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteMetricFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteMetricFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteMetricFilter'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteQueryDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteQueryDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteRetentionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteRetentionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DeleteSubscriptionFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DeleteSubscriptionFilter'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeAccountPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeAccountPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeDestinations(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeDestinations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeDestinations'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeExportTasks(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeExportTasks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeExportTasks'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeLogGroups(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeLogGroups'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeLogStreams(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeLogStreams']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeLogStreams'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeMetricFilters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeMetricFilters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeMetricFilters'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeQueries(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueries']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeQueries'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeQueryDefinitions(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeQueryDefinitions'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeResourcePolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeResourcePolicies'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DescribeSubscriptionFilters(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DescribeSubscriptionFilters'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328DisassociateKmsKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.DisassociateKmsKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.DisassociateKmsKey'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328FilterLogEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.FilterLogEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.FilterLogEvents'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328GetDataProtectionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.GetDataProtectionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328GetLogEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.GetLogEvents'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328GetLogGroupFields(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogGroupFields']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.GetLogGroupFields'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328GetLogRecord(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetLogRecord']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.GetLogRecord'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328GetQueryResults(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.GetQueryResults']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.GetQueryResults'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328ListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328ListTagsLogGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.ListTagsLogGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.ListTagsLogGroup'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutAccountPolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutAccountPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutAccountPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutDataProtectionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutDataProtectionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutDestination(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutDestination']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutDestination'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutDestinationPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.PutDestinationPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutDestinationPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutLogEvents(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutLogEvents']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutLogEvents'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutMetricFilter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutMetricFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutMetricFilter'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutQueryDefinition(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.PutQueryDefinition']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutQueryDefinition'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutResourcePolicy(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.PutResourcePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutResourcePolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutRetentionPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.PutRetentionPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutRetentionPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328PutSubscriptionFilter(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.PutSubscriptionFilter'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328StartQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StartQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Logs_20140328.StartQuery'].$post(args, options))
}

export async function postXAmzTargetLogs20140328StopQuery(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.StopQuery']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Logs_20140328.StopQuery'].$post(args, options))
}

export async function postXAmzTargetLogs20140328TagLogGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagLogGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Logs_20140328.TagLogGroup'].$post(args, options))
}

export async function postXAmzTargetLogs20140328TagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=Logs_20140328.TagResource'].$post(args, options))
}

export async function postXAmzTargetLogs20140328TestMetricFilter(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.TestMetricFilter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.TestMetricFilter'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328UntagLogGroup(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagLogGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.UntagLogGroup'].$post(args, options),
  )
}

export async function postXAmzTargetLogs20140328UntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=Logs_20140328.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=Logs_20140328.UntagResource'].$post(args, options),
  )
}
