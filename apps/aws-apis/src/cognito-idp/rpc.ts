import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDevice(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDevice(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuth(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEvents(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallenge(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreference(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOut(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceChangePassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceConfirmDevice(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceForgetDevice(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceForgotPassword(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeader(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetDevice(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifier(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetUser(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[
      '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode'
    ].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOut(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuth(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListDevices(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListGroups(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProviders(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListResourceServers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobs(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClients(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListUserPools(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListUsers(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCode(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallenge(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceRevokeToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfiguration(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomization(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreference(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfig(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettings(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceSignUp(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJob(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceTagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUntagResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedback(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatus(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroup(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributes(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPool(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool'].$post(args, options),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClient(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomain(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareToken(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken'].$post(
      args,
      options,
    ),
  )
}

export async function postXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttribute(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute'].$post(
      args,
      options,
    ),
  )
}
