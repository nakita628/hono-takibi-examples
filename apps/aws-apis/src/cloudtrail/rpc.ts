import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101AddTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.AddTags'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CancelQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CancelQuery'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateChannel'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateEventDataStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateEventDataStore'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101CreateTrail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.CreateTrail'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteChannel'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteEventDataStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteEventDataStore'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteResourcePolicy'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeleteTrail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeleteTrail'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DeregisterOrganizationDelegatedAdmin(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DeregisterOrganizationDelegatedAdmin'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeQuery'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101DescribeTrails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.DescribeTrails'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetChannel'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventDataStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventDataStore'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetEventSelectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetEventSelectors'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetImport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetImport'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetInsightSelectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetInsightSelectors'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetQueryResults(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetQueryResults'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetResourcePolicy'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrail'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101GetTrailStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.GetTrailStatus'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListChannels(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListChannels'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListEventDataStores(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListEventDataStores'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImportFailures(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImportFailures'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListImports(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListImports'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListPublicKeys(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListPublicKeys'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListQueries(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListQueries'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTags'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101ListTrails(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.ListTrails'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101LookupEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.LookupEvents'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutEventSelectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutEventSelectors'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutInsightSelectors(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutInsightSelectors'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101PutResourcePolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.PutResourcePolicy'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RegisterOrganizationDelegatedAdmin(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RegisterOrganizationDelegatedAdmin'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RemoveTags(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RemoveTags'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101RestoreEventDataStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.RestoreEventDataStore'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartImport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartImport'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartLogging(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartLogging'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StartQuery(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StartQuery'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopImport(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopImport'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101StopLogging(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.StopLogging'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateChannel(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateChannel'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateEventDataStore(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateEventDataStore'
    ].$post(args, options),
  )
}

export async function postXAmzTargetComAmazonawsCloudtrailV20131101CloudTrail20131101UpdateTrail(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=com.amazonaws.cloudtrail.v20131101.CloudTrail_20131101.UpdateTrail'
    ].$post(args, options),
  )
}
