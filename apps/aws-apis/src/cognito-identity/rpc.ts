import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSCognitoIdentityServiceCreateIdentityPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.CreateIdentityPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceDeleteIdentities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentities'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceDeleteIdentityPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.DeleteIdentityPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceDescribeIdentity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceDescribeIdentityPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.DescribeIdentityPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceGetCredentialsForIdentity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.GetCredentialsForIdentity'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceGetId(
  args: InferRequestType<(typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.GetId'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceGetIdentityPoolRoles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.GetIdentityPoolRoles'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceGetOpenIdToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceGetOpenIdTokenForDeveloperIdentity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.GetOpenIdTokenForDeveloperIdentity'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceGetPrincipalTagAttributeMap(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.GetPrincipalTagAttributeMap'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceListIdentities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.ListIdentities'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceListIdentityPools(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.ListIdentityPools'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceLookupDeveloperIdentity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.LookupDeveloperIdentity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceMergeDeveloperIdentities(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.MergeDeveloperIdentities'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceSetIdentityPoolRoles(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.SetIdentityPoolRoles'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceSetPrincipalTagAttributeMap(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.SetPrincipalTagAttributeMap'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceUnlinkDeveloperIdentity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.UnlinkDeveloperIdentity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceUnlinkIdentity(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.UnlinkIdentity'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityServiceUpdateIdentityPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityService.UpdateIdentityPool'].$post(args, options),
  )
}
