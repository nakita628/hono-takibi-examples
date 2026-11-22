import { useMutation, mutationOptions } from '@tanstack/react-query'
import type { UseMutationOptions, DefaultError, QueryClient } from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier',
  ] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetUserKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode',
  ] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListDevicesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListGroupsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListUsersKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceSignUpKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceTagResourceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken'] as const
}

export function getXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeKey() {
  return ['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute'] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallenge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceChangePassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceForgetDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceForgotPassword<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeader<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetDevice<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceGetGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifier<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUser<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
      >,
    ) {
      return parseResponse(
        client[
          '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode'
        ].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOut<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuth<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListDevicesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListDevicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListDevicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListDevices<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListDevicesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListGroupsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListGroupsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListGroupsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListGroupsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProviders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClients<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUserPools<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUsers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCode<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallenge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceRevokeToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfiguration<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomization<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreference<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfig<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettings<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSignUpMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSignUpMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceSignUpMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSignUp<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostXAmzTargetAWSCognitoIdentityProviderServiceSignUpMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJob<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceTagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceTagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceTagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceTagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceTagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUntagResource<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedback<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatus<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup'].$post(args, options),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroup<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProvider<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServer<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributes<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPool<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClient<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomain<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareToken<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeMutationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute',
    'POST',
  ] as const
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
      >,
    ) {
      return parseResponse(
        client['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttribute<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}
