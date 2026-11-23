import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSMigrationHubMultiAccountServiceCreateHomeRegionControl(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHubMultiAccountService.CreateHomeRegionControl'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSMigrationHubMultiAccountServiceDescribeHomeRegionControls(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHubMultiAccountService.DescribeHomeRegionControls'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSMigrationHubMultiAccountServiceGetHomeRegion(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSMigrationHubMultiAccountService.GetHomeRegion'].$post(args, options),
  )
}
