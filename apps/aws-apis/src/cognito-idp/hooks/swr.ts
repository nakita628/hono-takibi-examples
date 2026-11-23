import type { Key } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAddCustomAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AddCustomAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminAddUserToGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminAddUserToGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminConfirmSignUpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminConfirmSignUp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminCreateUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminCreateUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDeleteUserAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDeleteUserAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableProviderForUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableProviderForUser'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminDisableUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminDisableUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminEnableUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminEnableUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDevice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminForgetDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminForgetDevice'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDevice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetDevice'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminGetUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminGetUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuth<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminInitiateAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminInitiateAuth'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminLinkProviderForUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminLinkProviderForUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListDevices'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListGroupsForUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListGroupsForUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEvents<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminListUserAuthEventsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminListUserAuthEvents'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRemoveUserFromGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRemoveUserFromGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminResetUserPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminResetUserPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallenge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminRespondToAuthChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminRespondToAuthChallenge'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserMFAPreferenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserMFAPreference'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminSetUserSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminSetUserSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateAuthEventFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateAuthEventFeedback'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateDeviceStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateDeviceStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUpdateUserAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUpdateUserAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOut<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAdminUserGlobalSignOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AdminUserGlobalSignOut'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceAssociateSoftwareTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.AssociateSoftwareToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceChangePassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceChangePasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ChangePassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDevice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmDevice'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmForgotPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmForgotPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceConfirmSignUpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ConfirmSignUp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateIdentityProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateIdentityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateResourceServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateResourceServer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceCreateUserPoolDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.CreateUserPoolDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteIdentityProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteIdentityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteResourceServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteResourceServer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDeleteUserPoolDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DeleteUserPoolDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeIdentityProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeIdentityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeResourceServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeResourceServer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeRiskConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeRiskConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceDescribeUserPoolDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.DescribeUserPoolDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceForgetDevice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceForgetDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgetDevice'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceForgotPassword<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceForgotPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ForgotPassword'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeader<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetCSVHeaderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetCSVHeader'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetDevice<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetDeviceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetDevice'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifier<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetIdentityProviderByIdentifierKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.GetIdentityProviderByIdentifier'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetLogDeliveryConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.GetLogDeliveryConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificate<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetSigningCertificateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetSigningCertificate'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUICustomizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUICustomization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUser<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUser'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ??
    getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserAttributeVerificationCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserAttributeVerificationCode'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGetUserPoolMfaConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GetUserPoolMfaConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOut<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceGlobalSignOutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.GlobalSignOut'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuth<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceInitiateAuthKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.InitiateAuth'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListDevicesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListDevices<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListDevicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListDevices'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListGroupsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListGroups<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListGroups'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProviders<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListIdentityProvidersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListIdentityProviders'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListResourceServersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListResourceServers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListTagsForResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListTagsForResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobs<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserImportJobsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserImportJobs'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClients<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolClientsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPoolClients'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUserPools<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListUserPoolsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUserPools'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUsers<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsers'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceListUsersInGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ListUsersInGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCode<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceResendConfirmationCodeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.ResendConfirmationCode'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallenge<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceRespondToAuthChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.RespondToAuthChallenge'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceRevokeToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceRevokeTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.RevokeToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSetLogDeliveryConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client[
            '#X-Amz-Target=AWSCognitoIdentityProviderService.SetLogDeliveryConfiguration'
          ].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfiguration<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSetRiskConfigurationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetRiskConfiguration'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomization<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUICustomizationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUICustomization'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreference<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserMFAPreferenceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserMFAPreference'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfig<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserPoolMfaConfigKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserPoolMfaConfig'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettings<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSetUserSettingsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.SetUserSettings'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceSignUpKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceSignUp<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceSignUpKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.SignUp'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceStartUserImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.StartUserImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJob<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceStopUserImportJobKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.StopUserImportJob'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceTagResourceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceTagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceTagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.TagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUntagResource<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUntagResourceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UntagResource'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedback<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateAuthEventFeedbackKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateAuthEventFeedback'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatus<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateDeviceStatusKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateDeviceStatus'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroup<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateGroupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateGroup'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProvider<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateIdentityProviderKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateIdentityProvider'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServer<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateResourceServerKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateResourceServer'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributes<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserAttributesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserAttributes'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPool<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPool'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClient<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolClientKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolClient'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomain<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceUpdateUserPoolDomainKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.UpdateUserPoolDomain'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareToken<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifySoftwareTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifySoftwareToken'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeKey() {
  return [
    '#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute',
    '/#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute',
    'POST',
  ] as const
}

export function usePostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttribute<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey =
    customKey ?? getPostXAmzTargetAWSCognitoIdentityProviderServiceVerifyUserAttributeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client)['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute']['$post']
          >
        },
      ) =>
        parseResponse(
          client['#X-Amz-Target=AWSCognitoIdentityProviderService.VerifyUserAttribute'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
