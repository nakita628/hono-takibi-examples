import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionAddClientIDToOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AddClientIDToOpenIDConnectProvider'].$get(args, options),
  )
}

export async function postActionAddClientIDToOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=AddClientIDToOpenIDConnectProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=AddClientIDToOpenIDConnectProvider'].$post(args, options),
  )
}

export async function getActionAddRoleToInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddRoleToInstanceProfile'].$get(args, options))
}

export async function postActionAddRoleToInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=AddRoleToInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddRoleToInstanceProfile'].$post(args, options))
}

export async function getActionAddUserToGroup(
  args: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddUserToGroup'].$get(args, options))
}

export async function postActionAddUserToGroup(
  args: InferRequestType<(typeof client)['#Action=AddUserToGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AddUserToGroup'].$post(args, options))
}

export async function getActionAttachGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachGroupPolicy'].$get(args, options))
}

export async function postActionAttachGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=AttachGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachGroupPolicy'].$post(args, options))
}

export async function getActionAttachRolePolicy(
  args: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachRolePolicy'].$get(args, options))
}

export async function postActionAttachRolePolicy(
  args: InferRequestType<(typeof client)['#Action=AttachRolePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachRolePolicy'].$post(args, options))
}

export async function getActionAttachUserPolicy(
  args: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachUserPolicy'].$get(args, options))
}

export async function postActionAttachUserPolicy(
  args: InferRequestType<(typeof client)['#Action=AttachUserPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=AttachUserPolicy'].$post(args, options))
}

export async function getActionChangePassword(
  args: InferRequestType<(typeof client)['#Action=ChangePassword']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ChangePassword'].$get(args, options))
}

export async function postActionChangePassword(
  args: InferRequestType<(typeof client)['#Action=ChangePassword']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ChangePassword'].$post(args, options))
}

export async function getActionCreateAccessKey(
  args: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAccessKey'].$get(args, options))
}

export async function postActionCreateAccessKey(
  args: InferRequestType<(typeof client)['#Action=CreateAccessKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAccessKey'].$post(args, options))
}

export async function getActionCreateAccountAlias(
  args: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAccountAlias'].$get(args, options))
}

export async function postActionCreateAccountAlias(
  args: InferRequestType<(typeof client)['#Action=CreateAccountAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateAccountAlias'].$post(args, options))
}

export async function getActionCreateGroup(
  args: InferRequestType<(typeof client)['#Action=CreateGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateGroup'].$get(args, options))
}

export async function postActionCreateGroup(
  args: InferRequestType<(typeof client)['#Action=CreateGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateGroup'].$post(args, options))
}

export async function getActionCreateInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInstanceProfile'].$get(args, options))
}

export async function postActionCreateInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=CreateInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateInstanceProfile'].$post(args, options))
}

export async function getActionCreateLoginProfile(
  args: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoginProfile'].$get(args, options))
}

export async function postActionCreateLoginProfile(
  args: InferRequestType<(typeof client)['#Action=CreateLoginProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateLoginProfile'].$post(args, options))
}

export async function getActionCreateOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateOpenIDConnectProvider'].$get(args, options))
}

export async function postActionCreateOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=CreateOpenIDConnectProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateOpenIDConnectProvider'].$post(args, options))
}

export async function getActionCreatePolicy(
  args: InferRequestType<(typeof client)['#Action=CreatePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePolicy'].$get(args, options))
}

export async function postActionCreatePolicy(
  args: InferRequestType<(typeof client)['#Action=CreatePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePolicy'].$post(args, options))
}

export async function getActionCreatePolicyVersion(
  args: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePolicyVersion'].$get(args, options))
}

export async function postActionCreatePolicyVersion(
  args: InferRequestType<(typeof client)['#Action=CreatePolicyVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreatePolicyVersion'].$post(args, options))
}

export async function getActionCreateRole(
  args: InferRequestType<(typeof client)['#Action=CreateRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRole'].$get(args, options))
}

export async function postActionCreateRole(
  args: InferRequestType<(typeof client)['#Action=CreateRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateRole'].$post(args, options))
}

export async function getActionCreateSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSAMLProvider'].$get(args, options))
}

export async function postActionCreateSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=CreateSAMLProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateSAMLProvider'].$post(args, options))
}

export async function getActionCreateServiceLinkedRole(
  args: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateServiceLinkedRole'].$get(args, options))
}

export async function postActionCreateServiceLinkedRole(
  args: InferRequestType<(typeof client)['#Action=CreateServiceLinkedRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateServiceLinkedRole'].$post(args, options))
}

export async function getActionCreateServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateServiceSpecificCredential'].$get(args, options))
}

export async function postActionCreateServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=CreateServiceSpecificCredential']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateServiceSpecificCredential'].$post(args, options))
}

export async function getActionCreateUser(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUser'].$get(args, options))
}

export async function postActionCreateUser(
  args: InferRequestType<(typeof client)['#Action=CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateUser'].$post(args, options))
}

export async function getActionCreateVirtualMFADevice(
  args: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVirtualMFADevice'].$get(args, options))
}

export async function postActionCreateVirtualMFADevice(
  args: InferRequestType<(typeof client)['#Action=CreateVirtualMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=CreateVirtualMFADevice'].$post(args, options))
}

export async function getActionDeactivateMFADevice(
  args: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeactivateMFADevice'].$get(args, options))
}

export async function postActionDeactivateMFADevice(
  args: InferRequestType<(typeof client)['#Action=DeactivateMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeactivateMFADevice'].$post(args, options))
}

export async function getActionDeleteAccessKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAccessKey'].$get(args, options))
}

export async function postActionDeleteAccessKey(
  args: InferRequestType<(typeof client)['#Action=DeleteAccessKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAccessKey'].$post(args, options))
}

export async function getActionDeleteAccountAlias(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAccountAlias'].$get(args, options))
}

export async function postActionDeleteAccountAlias(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountAlias']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAccountAlias'].$post(args, options))
}

export async function getActionDeleteAccountPasswordPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAccountPasswordPolicy'].$get(args, options))
}

export async function postActionDeleteAccountPasswordPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteAccountPasswordPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteAccountPasswordPolicy'].$post(args, options))
}

export async function getActionDeleteGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGroup'].$get(args, options))
}

export async function postActionDeleteGroup(
  args: InferRequestType<(typeof client)['#Action=DeleteGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGroup'].$post(args, options))
}

export async function getActionDeleteGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGroupPolicy'].$get(args, options))
}

export async function postActionDeleteGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteGroupPolicy'].$post(args, options))
}

export async function getActionDeleteInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInstanceProfile'].$get(args, options))
}

export async function postActionDeleteInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=DeleteInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteInstanceProfile'].$post(args, options))
}

export async function getActionDeleteLoginProfile(
  args: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoginProfile'].$get(args, options))
}

export async function postActionDeleteLoginProfile(
  args: InferRequestType<(typeof client)['#Action=DeleteLoginProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteLoginProfile'].$post(args, options))
}

export async function getActionDeleteOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteOpenIDConnectProvider'].$get(args, options))
}

export async function postActionDeleteOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=DeleteOpenIDConnectProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteOpenIDConnectProvider'].$post(args, options))
}

export async function getActionDeletePolicy(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePolicy'].$get(args, options))
}

export async function postActionDeletePolicy(
  args: InferRequestType<(typeof client)['#Action=DeletePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePolicy'].$post(args, options))
}

export async function getActionDeletePolicyVersion(
  args: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePolicyVersion'].$get(args, options))
}

export async function postActionDeletePolicyVersion(
  args: InferRequestType<(typeof client)['#Action=DeletePolicyVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeletePolicyVersion'].$post(args, options))
}

export async function getActionDeleteRole(
  args: InferRequestType<(typeof client)['#Action=DeleteRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRole'].$get(args, options))
}

export async function postActionDeleteRole(
  args: InferRequestType<(typeof client)['#Action=DeleteRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRole'].$post(args, options))
}

export async function getActionDeleteRolePermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRolePermissionsBoundary'].$get(args, options))
}

export async function postActionDeleteRolePermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePermissionsBoundary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRolePermissionsBoundary'].$post(args, options))
}

export async function getActionDeleteRolePolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRolePolicy'].$get(args, options))
}

export async function postActionDeleteRolePolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteRolePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteRolePolicy'].$post(args, options))
}

export async function getActionDeleteSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSAMLProvider'].$get(args, options))
}

export async function postActionDeleteSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=DeleteSAMLProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSAMLProvider'].$post(args, options))
}

export async function getActionDeleteSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSSHPublicKey'].$get(args, options))
}

export async function postActionDeleteSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=DeleteSSHPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSSHPublicKey'].$post(args, options))
}

export async function getActionDeleteServerCertificate(
  args: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteServerCertificate'].$get(args, options))
}

export async function postActionDeleteServerCertificate(
  args: InferRequestType<(typeof client)['#Action=DeleteServerCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteServerCertificate'].$post(args, options))
}

export async function getActionDeleteServiceLinkedRole(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteServiceLinkedRole'].$get(args, options))
}

export async function postActionDeleteServiceLinkedRole(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceLinkedRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteServiceLinkedRole'].$post(args, options))
}

export async function getActionDeleteServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteServiceSpecificCredential'].$get(args, options))
}

export async function postActionDeleteServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=DeleteServiceSpecificCredential']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteServiceSpecificCredential'].$post(args, options))
}

export async function getActionDeleteSigningCertificate(
  args: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSigningCertificate'].$get(args, options))
}

export async function postActionDeleteSigningCertificate(
  args: InferRequestType<(typeof client)['#Action=DeleteSigningCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteSigningCertificate'].$post(args, options))
}

export async function getActionDeleteUser(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUser'].$get(args, options))
}

export async function postActionDeleteUser(
  args: InferRequestType<(typeof client)['#Action=DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUser'].$post(args, options))
}

export async function getActionDeleteUserPermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUserPermissionsBoundary'].$get(args, options))
}

export async function postActionDeleteUserPermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPermissionsBoundary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUserPermissionsBoundary'].$post(args, options))
}

export async function getActionDeleteUserPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUserPolicy'].$get(args, options))
}

export async function postActionDeleteUserPolicy(
  args: InferRequestType<(typeof client)['#Action=DeleteUserPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteUserPolicy'].$post(args, options))
}

export async function getActionDeleteVirtualMFADevice(
  args: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVirtualMFADevice'].$get(args, options))
}

export async function postActionDeleteVirtualMFADevice(
  args: InferRequestType<(typeof client)['#Action=DeleteVirtualMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DeleteVirtualMFADevice'].$post(args, options))
}

export async function getActionDetachGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachGroupPolicy'].$get(args, options))
}

export async function postActionDetachGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=DetachGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachGroupPolicy'].$post(args, options))
}

export async function getActionDetachRolePolicy(
  args: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachRolePolicy'].$get(args, options))
}

export async function postActionDetachRolePolicy(
  args: InferRequestType<(typeof client)['#Action=DetachRolePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachRolePolicy'].$post(args, options))
}

export async function getActionDetachUserPolicy(
  args: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachUserPolicy'].$get(args, options))
}

export async function postActionDetachUserPolicy(
  args: InferRequestType<(typeof client)['#Action=DetachUserPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=DetachUserPolicy'].$post(args, options))
}

export async function getActionEnableMFADevice(
  args: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableMFADevice'].$get(args, options))
}

export async function postActionEnableMFADevice(
  args: InferRequestType<(typeof client)['#Action=EnableMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=EnableMFADevice'].$post(args, options))
}

export async function getActionGenerateCredentialReport(
  args: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GenerateCredentialReport'].$get(args, options))
}

export async function postActionGenerateCredentialReport(
  args: InferRequestType<(typeof client)['#Action=GenerateCredentialReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GenerateCredentialReport'].$post(args, options))
}

export async function getActionGenerateOrganizationsAccessReport(
  args: InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GenerateOrganizationsAccessReport'].$get(args, options),
  )
}

export async function postActionGenerateOrganizationsAccessReport(
  args: InferRequestType<(typeof client)['#Action=GenerateOrganizationsAccessReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GenerateOrganizationsAccessReport'].$post(args, options),
  )
}

export async function getActionGenerateServiceLastAccessedDetails(
  args: InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GenerateServiceLastAccessedDetails'].$get(args, options),
  )
}

export async function postActionGenerateServiceLastAccessedDetails(
  args: InferRequestType<(typeof client)['#Action=GenerateServiceLastAccessedDetails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GenerateServiceLastAccessedDetails'].$post(args, options),
  )
}

export async function getActionGetAccessKeyLastUsed(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccessKeyLastUsed'].$get(args, options))
}

export async function postActionGetAccessKeyLastUsed(
  args: InferRequestType<(typeof client)['#Action=GetAccessKeyLastUsed']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccessKeyLastUsed'].$post(args, options))
}

export async function getActionGetAccountAuthorizationDetails(
  args: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountAuthorizationDetails'].$get(args, options))
}

export async function postActionGetAccountAuthorizationDetails(
  args: InferRequestType<(typeof client)['#Action=GetAccountAuthorizationDetails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountAuthorizationDetails'].$post(args, options))
}

export async function getActionGetAccountPasswordPolicy(
  args: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountPasswordPolicy'].$get(args, options))
}

export async function postActionGetAccountPasswordPolicy(
  args: InferRequestType<(typeof client)['#Action=GetAccountPasswordPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountPasswordPolicy'].$post(args, options))
}

export async function getActionGetAccountSummary(
  args: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountSummary'].$get(args, options))
}

export async function postActionGetAccountSummary(
  args: InferRequestType<(typeof client)['#Action=GetAccountSummary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetAccountSummary'].$post(args, options))
}

export async function getActionGetContextKeysForCustomPolicy(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetContextKeysForCustomPolicy'].$get(args, options))
}

export async function postActionGetContextKeysForCustomPolicy(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForCustomPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetContextKeysForCustomPolicy'].$post(args, options))
}

export async function getActionGetContextKeysForPrincipalPolicy(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetContextKeysForPrincipalPolicy'].$get(args, options))
}

export async function postActionGetContextKeysForPrincipalPolicy(
  args: InferRequestType<(typeof client)['#Action=GetContextKeysForPrincipalPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetContextKeysForPrincipalPolicy'].$post(args, options),
  )
}

export async function getActionGetCredentialReport(
  args: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCredentialReport'].$get(args, options))
}

export async function postActionGetCredentialReport(
  args: InferRequestType<(typeof client)['#Action=GetCredentialReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetCredentialReport'].$post(args, options))
}

export async function getActionGetGroup(
  args: InferRequestType<(typeof client)['#Action=GetGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetGroup'].$get(args, options))
}

export async function postActionGetGroup(
  args: InferRequestType<(typeof client)['#Action=GetGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetGroup'].$post(args, options))
}

export async function getActionGetGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetGroupPolicy'].$get(args, options))
}

export async function postActionGetGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=GetGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetGroupPolicy'].$post(args, options))
}

export async function getActionGetInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetInstanceProfile'].$get(args, options))
}

export async function postActionGetInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=GetInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetInstanceProfile'].$post(args, options))
}

export async function getActionGetLoginProfile(
  args: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetLoginProfile'].$get(args, options))
}

export async function postActionGetLoginProfile(
  args: InferRequestType<(typeof client)['#Action=GetLoginProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetLoginProfile'].$post(args, options))
}

export async function getActionGetMFADevice(
  args: InferRequestType<(typeof client)['#Action=GetMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMFADevice'].$get(args, options))
}

export async function postActionGetMFADevice(
  args: InferRequestType<(typeof client)['#Action=GetMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetMFADevice'].$post(args, options))
}

export async function getActionGetOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetOpenIDConnectProvider'].$get(args, options))
}

export async function postActionGetOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=GetOpenIDConnectProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetOpenIDConnectProvider'].$post(args, options))
}

export async function getActionGetOrganizationsAccessReport(
  args: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetOrganizationsAccessReport'].$get(args, options))
}

export async function postActionGetOrganizationsAccessReport(
  args: InferRequestType<(typeof client)['#Action=GetOrganizationsAccessReport']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetOrganizationsAccessReport'].$post(args, options))
}

export async function getActionGetPolicy(
  args: InferRequestType<(typeof client)['#Action=GetPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPolicy'].$get(args, options))
}

export async function postActionGetPolicy(
  args: InferRequestType<(typeof client)['#Action=GetPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPolicy'].$post(args, options))
}

export async function getActionGetPolicyVersion(
  args: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPolicyVersion'].$get(args, options))
}

export async function postActionGetPolicyVersion(
  args: InferRequestType<(typeof client)['#Action=GetPolicyVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetPolicyVersion'].$post(args, options))
}

export async function getActionGetRole(
  args: InferRequestType<(typeof client)['#Action=GetRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetRole'].$get(args, options))
}

export async function postActionGetRole(
  args: InferRequestType<(typeof client)['#Action=GetRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetRole'].$post(args, options))
}

export async function getActionGetRolePolicy(
  args: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetRolePolicy'].$get(args, options))
}

export async function postActionGetRolePolicy(
  args: InferRequestType<(typeof client)['#Action=GetRolePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetRolePolicy'].$post(args, options))
}

export async function getActionGetSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSAMLProvider'].$get(args, options))
}

export async function postActionGetSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=GetSAMLProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSAMLProvider'].$post(args, options))
}

export async function getActionGetSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSSHPublicKey'].$get(args, options))
}

export async function postActionGetSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=GetSSHPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetSSHPublicKey'].$post(args, options))
}

export async function getActionGetServerCertificate(
  args: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetServerCertificate'].$get(args, options))
}

export async function postActionGetServerCertificate(
  args: InferRequestType<(typeof client)['#Action=GetServerCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetServerCertificate'].$post(args, options))
}

export async function getActionGetServiceLastAccessedDetails(
  args: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetServiceLastAccessedDetails'].$get(args, options))
}

export async function postActionGetServiceLastAccessedDetails(
  args: InferRequestType<(typeof client)['#Action=GetServiceLastAccessedDetails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetServiceLastAccessedDetails'].$post(args, options))
}

export async function getActionGetServiceLastAccessedDetailsWithEntities(
  args: InferRequestType<
    (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetServiceLastAccessedDetailsWithEntities'].$get(args, options),
  )
}

export async function postActionGetServiceLastAccessedDetailsWithEntities(
  args: InferRequestType<
    (typeof client)['#Action=GetServiceLastAccessedDetailsWithEntities']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetServiceLastAccessedDetailsWithEntities'].$post(args, options),
  )
}

export async function getActionGetServiceLinkedRoleDeletionStatus(
  args: InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetServiceLinkedRoleDeletionStatus'].$get(args, options),
  )
}

export async function postActionGetServiceLinkedRoleDeletionStatus(
  args: InferRequestType<(typeof client)['#Action=GetServiceLinkedRoleDeletionStatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=GetServiceLinkedRoleDeletionStatus'].$post(args, options),
  )
}

export async function getActionGetUser(
  args: InferRequestType<(typeof client)['#Action=GetUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetUser'].$get(args, options))
}

export async function postActionGetUser(
  args: InferRequestType<(typeof client)['#Action=GetUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetUser'].$post(args, options))
}

export async function getActionGetUserPolicy(
  args: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetUserPolicy'].$get(args, options))
}

export async function postActionGetUserPolicy(
  args: InferRequestType<(typeof client)['#Action=GetUserPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=GetUserPolicy'].$post(args, options))
}

export async function getActionListAccessKeys(
  args: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAccessKeys'].$get(args, options))
}

export async function postActionListAccessKeys(
  args: InferRequestType<(typeof client)['#Action=ListAccessKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAccessKeys'].$post(args, options))
}

export async function getActionListAccountAliases(
  args: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAccountAliases'].$get(args, options))
}

export async function postActionListAccountAliases(
  args: InferRequestType<(typeof client)['#Action=ListAccountAliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAccountAliases'].$post(args, options))
}

export async function getActionListAttachedGroupPolicies(
  args: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAttachedGroupPolicies'].$get(args, options))
}

export async function postActionListAttachedGroupPolicies(
  args: InferRequestType<(typeof client)['#Action=ListAttachedGroupPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAttachedGroupPolicies'].$post(args, options))
}

export async function getActionListAttachedRolePolicies(
  args: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAttachedRolePolicies'].$get(args, options))
}

export async function postActionListAttachedRolePolicies(
  args: InferRequestType<(typeof client)['#Action=ListAttachedRolePolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAttachedRolePolicies'].$post(args, options))
}

export async function getActionListAttachedUserPolicies(
  args: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAttachedUserPolicies'].$get(args, options))
}

export async function postActionListAttachedUserPolicies(
  args: InferRequestType<(typeof client)['#Action=ListAttachedUserPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListAttachedUserPolicies'].$post(args, options))
}

export async function getActionListEntitiesForPolicy(
  args: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListEntitiesForPolicy'].$get(args, options))
}

export async function postActionListEntitiesForPolicy(
  args: InferRequestType<(typeof client)['#Action=ListEntitiesForPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListEntitiesForPolicy'].$post(args, options))
}

export async function getActionListGroupPolicies(
  args: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListGroupPolicies'].$get(args, options))
}

export async function postActionListGroupPolicies(
  args: InferRequestType<(typeof client)['#Action=ListGroupPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListGroupPolicies'].$post(args, options))
}

export async function getActionListGroups(
  args: InferRequestType<(typeof client)['#Action=ListGroups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListGroups'].$get(args, options))
}

export async function postActionListGroups(
  args: InferRequestType<(typeof client)['#Action=ListGroups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListGroups'].$post(args, options))
}

export async function getActionListGroupsForUser(
  args: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListGroupsForUser'].$get(args, options))
}

export async function postActionListGroupsForUser(
  args: InferRequestType<(typeof client)['#Action=ListGroupsForUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListGroupsForUser'].$post(args, options))
}

export async function getActionListInstanceProfileTags(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListInstanceProfileTags'].$get(args, options))
}

export async function postActionListInstanceProfileTags(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfileTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListInstanceProfileTags'].$post(args, options))
}

export async function getActionListInstanceProfiles(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListInstanceProfiles'].$get(args, options))
}

export async function postActionListInstanceProfiles(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListInstanceProfiles'].$post(args, options))
}

export async function getActionListInstanceProfilesForRole(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListInstanceProfilesForRole'].$get(args, options))
}

export async function postActionListInstanceProfilesForRole(
  args: InferRequestType<(typeof client)['#Action=ListInstanceProfilesForRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListInstanceProfilesForRole'].$post(args, options))
}

export async function getActionListMFADeviceTags(
  args: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMFADeviceTags'].$get(args, options))
}

export async function postActionListMFADeviceTags(
  args: InferRequestType<(typeof client)['#Action=ListMFADeviceTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMFADeviceTags'].$post(args, options))
}

export async function getActionListMFADevices(
  args: InferRequestType<(typeof client)['#Action=ListMFADevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMFADevices'].$get(args, options))
}

export async function postActionListMFADevices(
  args: InferRequestType<(typeof client)['#Action=ListMFADevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListMFADevices'].$post(args, options))
}

export async function getActionListOpenIDConnectProviderTags(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListOpenIDConnectProviderTags'].$get(args, options))
}

export async function postActionListOpenIDConnectProviderTags(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviderTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListOpenIDConnectProviderTags'].$post(args, options))
}

export async function getActionListOpenIDConnectProviders(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListOpenIDConnectProviders'].$get(args, options))
}

export async function postActionListOpenIDConnectProviders(
  args: InferRequestType<(typeof client)['#Action=ListOpenIDConnectProviders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListOpenIDConnectProviders'].$post(args, options))
}

export async function getActionListPolicies(
  args: InferRequestType<(typeof client)['#Action=ListPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPolicies'].$get(args, options))
}

export async function postActionListPolicies(
  args: InferRequestType<(typeof client)['#Action=ListPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPolicies'].$post(args, options))
}

export async function getActionListPoliciesGrantingServiceAccess(
  args: InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListPoliciesGrantingServiceAccess'].$get(args, options),
  )
}

export async function postActionListPoliciesGrantingServiceAccess(
  args: InferRequestType<(typeof client)['#Action=ListPoliciesGrantingServiceAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=ListPoliciesGrantingServiceAccess'].$post(args, options),
  )
}

export async function getActionListPolicyTags(
  args: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPolicyTags'].$get(args, options))
}

export async function postActionListPolicyTags(
  args: InferRequestType<(typeof client)['#Action=ListPolicyTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPolicyTags'].$post(args, options))
}

export async function getActionListPolicyVersions(
  args: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPolicyVersions'].$get(args, options))
}

export async function postActionListPolicyVersions(
  args: InferRequestType<(typeof client)['#Action=ListPolicyVersions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListPolicyVersions'].$post(args, options))
}

export async function getActionListRolePolicies(
  args: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListRolePolicies'].$get(args, options))
}

export async function postActionListRolePolicies(
  args: InferRequestType<(typeof client)['#Action=ListRolePolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListRolePolicies'].$post(args, options))
}

export async function getActionListRoleTags(
  args: InferRequestType<(typeof client)['#Action=ListRoleTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListRoleTags'].$get(args, options))
}

export async function postActionListRoleTags(
  args: InferRequestType<(typeof client)['#Action=ListRoleTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListRoleTags'].$post(args, options))
}

export async function getActionListRoles(
  args: InferRequestType<(typeof client)['#Action=ListRoles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListRoles'].$get(args, options))
}

export async function postActionListRoles(
  args: InferRequestType<(typeof client)['#Action=ListRoles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListRoles'].$post(args, options))
}

export async function getActionListSAMLProviderTags(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSAMLProviderTags'].$get(args, options))
}

export async function postActionListSAMLProviderTags(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviderTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSAMLProviderTags'].$post(args, options))
}

export async function getActionListSAMLProviders(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSAMLProviders'].$get(args, options))
}

export async function postActionListSAMLProviders(
  args: InferRequestType<(typeof client)['#Action=ListSAMLProviders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSAMLProviders'].$post(args, options))
}

export async function getActionListSSHPublicKeys(
  args: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSSHPublicKeys'].$get(args, options))
}

export async function postActionListSSHPublicKeys(
  args: InferRequestType<(typeof client)['#Action=ListSSHPublicKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSSHPublicKeys'].$post(args, options))
}

export async function getActionListServerCertificateTags(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListServerCertificateTags'].$get(args, options))
}

export async function postActionListServerCertificateTags(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificateTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListServerCertificateTags'].$post(args, options))
}

export async function getActionListServerCertificates(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListServerCertificates'].$get(args, options))
}

export async function postActionListServerCertificates(
  args: InferRequestType<(typeof client)['#Action=ListServerCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListServerCertificates'].$post(args, options))
}

export async function getActionListServiceSpecificCredentials(
  args: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListServiceSpecificCredentials'].$get(args, options))
}

export async function postActionListServiceSpecificCredentials(
  args: InferRequestType<(typeof client)['#Action=ListServiceSpecificCredentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListServiceSpecificCredentials'].$post(args, options))
}

export async function getActionListSigningCertificates(
  args: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSigningCertificates'].$get(args, options))
}

export async function postActionListSigningCertificates(
  args: InferRequestType<(typeof client)['#Action=ListSigningCertificates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListSigningCertificates'].$post(args, options))
}

export async function getActionListUserPolicies(
  args: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListUserPolicies'].$get(args, options))
}

export async function postActionListUserPolicies(
  args: InferRequestType<(typeof client)['#Action=ListUserPolicies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListUserPolicies'].$post(args, options))
}

export async function getActionListUserTags(
  args: InferRequestType<(typeof client)['#Action=ListUserTags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListUserTags'].$get(args, options))
}

export async function postActionListUserTags(
  args: InferRequestType<(typeof client)['#Action=ListUserTags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListUserTags'].$post(args, options))
}

export async function getActionListUsers(
  args: InferRequestType<(typeof client)['#Action=ListUsers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListUsers'].$get(args, options))
}

export async function postActionListUsers(
  args: InferRequestType<(typeof client)['#Action=ListUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListUsers'].$post(args, options))
}

export async function getActionListVirtualMFADevices(
  args: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListVirtualMFADevices'].$get(args, options))
}

export async function postActionListVirtualMFADevices(
  args: InferRequestType<(typeof client)['#Action=ListVirtualMFADevices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ListVirtualMFADevices'].$post(args, options))
}

export async function getActionPutGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutGroupPolicy'].$get(args, options))
}

export async function postActionPutGroupPolicy(
  args: InferRequestType<(typeof client)['#Action=PutGroupPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutGroupPolicy'].$post(args, options))
}

export async function getActionPutRolePermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutRolePermissionsBoundary'].$get(args, options))
}

export async function postActionPutRolePermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=PutRolePermissionsBoundary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutRolePermissionsBoundary'].$post(args, options))
}

export async function getActionPutRolePolicy(
  args: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutRolePolicy'].$get(args, options))
}

export async function postActionPutRolePolicy(
  args: InferRequestType<(typeof client)['#Action=PutRolePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutRolePolicy'].$post(args, options))
}

export async function getActionPutUserPermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutUserPermissionsBoundary'].$get(args, options))
}

export async function postActionPutUserPermissionsBoundary(
  args: InferRequestType<(typeof client)['#Action=PutUserPermissionsBoundary']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutUserPermissionsBoundary'].$post(args, options))
}

export async function getActionPutUserPolicy(
  args: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutUserPolicy'].$get(args, options))
}

export async function postActionPutUserPolicy(
  args: InferRequestType<(typeof client)['#Action=PutUserPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=PutUserPolicy'].$post(args, options))
}

export async function getActionRemoveClientIDFromOpenIDConnectProvider(
  args: InferRequestType<
    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$get(args, options),
  )
}

export async function postActionRemoveClientIDFromOpenIDConnectProvider(
  args: InferRequestType<
    (typeof client)['#Action=RemoveClientIDFromOpenIDConnectProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=RemoveClientIDFromOpenIDConnectProvider'].$post(args, options),
  )
}

export async function getActionRemoveRoleFromInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveRoleFromInstanceProfile'].$get(args, options))
}

export async function postActionRemoveRoleFromInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=RemoveRoleFromInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveRoleFromInstanceProfile'].$post(args, options))
}

export async function getActionRemoveUserFromGroup(
  args: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveUserFromGroup'].$get(args, options))
}

export async function postActionRemoveUserFromGroup(
  args: InferRequestType<(typeof client)['#Action=RemoveUserFromGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=RemoveUserFromGroup'].$post(args, options))
}

export async function getActionResetServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetServiceSpecificCredential'].$get(args, options))
}

export async function postActionResetServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=ResetServiceSpecificCredential']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResetServiceSpecificCredential'].$post(args, options))
}

export async function getActionResyncMFADevice(
  args: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResyncMFADevice'].$get(args, options))
}

export async function postActionResyncMFADevice(
  args: InferRequestType<(typeof client)['#Action=ResyncMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=ResyncMFADevice'].$post(args, options))
}

export async function getActionSetDefaultPolicyVersion(
  args: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetDefaultPolicyVersion'].$get(args, options))
}

export async function postActionSetDefaultPolicyVersion(
  args: InferRequestType<(typeof client)['#Action=SetDefaultPolicyVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SetDefaultPolicyVersion'].$post(args, options))
}

export async function getActionSetSecurityTokenServicePreferences(
  args: InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetSecurityTokenServicePreferences'].$get(args, options),
  )
}

export async function postActionSetSecurityTokenServicePreferences(
  args: InferRequestType<(typeof client)['#Action=SetSecurityTokenServicePreferences']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=SetSecurityTokenServicePreferences'].$post(args, options),
  )
}

export async function getActionSimulateCustomPolicy(
  args: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SimulateCustomPolicy'].$get(args, options))
}

export async function postActionSimulateCustomPolicy(
  args: InferRequestType<(typeof client)['#Action=SimulateCustomPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SimulateCustomPolicy'].$post(args, options))
}

export async function getActionSimulatePrincipalPolicy(
  args: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SimulatePrincipalPolicy'].$get(args, options))
}

export async function postActionSimulatePrincipalPolicy(
  args: InferRequestType<(typeof client)['#Action=SimulatePrincipalPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=SimulatePrincipalPolicy'].$post(args, options))
}

export async function getActionTagInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagInstanceProfile'].$get(args, options))
}

export async function postActionTagInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=TagInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagInstanceProfile'].$post(args, options))
}

export async function getActionTagMFADevice(
  args: InferRequestType<(typeof client)['#Action=TagMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagMFADevice'].$get(args, options))
}

export async function postActionTagMFADevice(
  args: InferRequestType<(typeof client)['#Action=TagMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagMFADevice'].$post(args, options))
}

export async function getActionTagOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagOpenIDConnectProvider'].$get(args, options))
}

export async function postActionTagOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=TagOpenIDConnectProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagOpenIDConnectProvider'].$post(args, options))
}

export async function getActionTagPolicy(
  args: InferRequestType<(typeof client)['#Action=TagPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagPolicy'].$get(args, options))
}

export async function postActionTagPolicy(
  args: InferRequestType<(typeof client)['#Action=TagPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagPolicy'].$post(args, options))
}

export async function getActionTagRole(
  args: InferRequestType<(typeof client)['#Action=TagRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagRole'].$get(args, options))
}

export async function postActionTagRole(
  args: InferRequestType<(typeof client)['#Action=TagRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagRole'].$post(args, options))
}

export async function getActionTagSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagSAMLProvider'].$get(args, options))
}

export async function postActionTagSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=TagSAMLProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagSAMLProvider'].$post(args, options))
}

export async function getActionTagServerCertificate(
  args: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagServerCertificate'].$get(args, options))
}

export async function postActionTagServerCertificate(
  args: InferRequestType<(typeof client)['#Action=TagServerCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagServerCertificate'].$post(args, options))
}

export async function getActionTagUser(
  args: InferRequestType<(typeof client)['#Action=TagUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagUser'].$get(args, options))
}

export async function postActionTagUser(
  args: InferRequestType<(typeof client)['#Action=TagUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=TagUser'].$post(args, options))
}

export async function getActionUntagInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagInstanceProfile'].$get(args, options))
}

export async function postActionUntagInstanceProfile(
  args: InferRequestType<(typeof client)['#Action=UntagInstanceProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagInstanceProfile'].$post(args, options))
}

export async function getActionUntagMFADevice(
  args: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagMFADevice'].$get(args, options))
}

export async function postActionUntagMFADevice(
  args: InferRequestType<(typeof client)['#Action=UntagMFADevice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagMFADevice'].$post(args, options))
}

export async function getActionUntagOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagOpenIDConnectProvider'].$get(args, options))
}

export async function postActionUntagOpenIDConnectProvider(
  args: InferRequestType<(typeof client)['#Action=UntagOpenIDConnectProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagOpenIDConnectProvider'].$post(args, options))
}

export async function getActionUntagPolicy(
  args: InferRequestType<(typeof client)['#Action=UntagPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagPolicy'].$get(args, options))
}

export async function postActionUntagPolicy(
  args: InferRequestType<(typeof client)['#Action=UntagPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagPolicy'].$post(args, options))
}

export async function getActionUntagRole(
  args: InferRequestType<(typeof client)['#Action=UntagRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagRole'].$get(args, options))
}

export async function postActionUntagRole(
  args: InferRequestType<(typeof client)['#Action=UntagRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagRole'].$post(args, options))
}

export async function getActionUntagSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagSAMLProvider'].$get(args, options))
}

export async function postActionUntagSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=UntagSAMLProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagSAMLProvider'].$post(args, options))
}

export async function getActionUntagServerCertificate(
  args: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagServerCertificate'].$get(args, options))
}

export async function postActionUntagServerCertificate(
  args: InferRequestType<(typeof client)['#Action=UntagServerCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagServerCertificate'].$post(args, options))
}

export async function getActionUntagUser(
  args: InferRequestType<(typeof client)['#Action=UntagUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagUser'].$get(args, options))
}

export async function postActionUntagUser(
  args: InferRequestType<(typeof client)['#Action=UntagUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UntagUser'].$post(args, options))
}

export async function getActionUpdateAccessKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAccessKey'].$get(args, options))
}

export async function postActionUpdateAccessKey(
  args: InferRequestType<(typeof client)['#Action=UpdateAccessKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAccessKey'].$post(args, options))
}

export async function getActionUpdateAccountPasswordPolicy(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAccountPasswordPolicy'].$get(args, options))
}

export async function postActionUpdateAccountPasswordPolicy(
  args: InferRequestType<(typeof client)['#Action=UpdateAccountPasswordPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAccountPasswordPolicy'].$post(args, options))
}

export async function getActionUpdateAssumeRolePolicy(
  args: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAssumeRolePolicy'].$get(args, options))
}

export async function postActionUpdateAssumeRolePolicy(
  args: InferRequestType<(typeof client)['#Action=UpdateAssumeRolePolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateAssumeRolePolicy'].$post(args, options))
}

export async function getActionUpdateGroup(
  args: InferRequestType<(typeof client)['#Action=UpdateGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateGroup'].$get(args, options))
}

export async function postActionUpdateGroup(
  args: InferRequestType<(typeof client)['#Action=UpdateGroup']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateGroup'].$post(args, options))
}

export async function getActionUpdateLoginProfile(
  args: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateLoginProfile'].$get(args, options))
}

export async function postActionUpdateLoginProfile(
  args: InferRequestType<(typeof client)['#Action=UpdateLoginProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateLoginProfile'].$post(args, options))
}

export async function getActionUpdateOpenIDConnectProviderThumbprint(
  args: InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateOpenIDConnectProviderThumbprint'].$get(args, options),
  )
}

export async function postActionUpdateOpenIDConnectProviderThumbprint(
  args: InferRequestType<(typeof client)['#Action=UpdateOpenIDConnectProviderThumbprint']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#Action=UpdateOpenIDConnectProviderThumbprint'].$post(args, options),
  )
}

export async function getActionUpdateRole(
  args: InferRequestType<(typeof client)['#Action=UpdateRole']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateRole'].$get(args, options))
}

export async function postActionUpdateRole(
  args: InferRequestType<(typeof client)['#Action=UpdateRole']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateRole'].$post(args, options))
}

export async function getActionUpdateRoleDescription(
  args: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateRoleDescription'].$get(args, options))
}

export async function postActionUpdateRoleDescription(
  args: InferRequestType<(typeof client)['#Action=UpdateRoleDescription']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateRoleDescription'].$post(args, options))
}

export async function getActionUpdateSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateSAMLProvider'].$get(args, options))
}

export async function postActionUpdateSAMLProvider(
  args: InferRequestType<(typeof client)['#Action=UpdateSAMLProvider']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateSAMLProvider'].$post(args, options))
}

export async function getActionUpdateSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateSSHPublicKey'].$get(args, options))
}

export async function postActionUpdateSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=UpdateSSHPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateSSHPublicKey'].$post(args, options))
}

export async function getActionUpdateServerCertificate(
  args: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateServerCertificate'].$get(args, options))
}

export async function postActionUpdateServerCertificate(
  args: InferRequestType<(typeof client)['#Action=UpdateServerCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateServerCertificate'].$post(args, options))
}

export async function getActionUpdateServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateServiceSpecificCredential'].$get(args, options))
}

export async function postActionUpdateServiceSpecificCredential(
  args: InferRequestType<(typeof client)['#Action=UpdateServiceSpecificCredential']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateServiceSpecificCredential'].$post(args, options))
}

export async function getActionUpdateSigningCertificate(
  args: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateSigningCertificate'].$get(args, options))
}

export async function postActionUpdateSigningCertificate(
  args: InferRequestType<(typeof client)['#Action=UpdateSigningCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateSigningCertificate'].$post(args, options))
}

export async function getActionUpdateUser(
  args: InferRequestType<(typeof client)['#Action=UpdateUser']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateUser'].$get(args, options))
}

export async function postActionUpdateUser(
  args: InferRequestType<(typeof client)['#Action=UpdateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UpdateUser'].$post(args, options))
}

export async function getActionUploadSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UploadSSHPublicKey'].$get(args, options))
}

export async function postActionUploadSSHPublicKey(
  args: InferRequestType<(typeof client)['#Action=UploadSSHPublicKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UploadSSHPublicKey'].$post(args, options))
}

export async function getActionUploadServerCertificate(
  args: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UploadServerCertificate'].$get(args, options))
}

export async function postActionUploadServerCertificate(
  args: InferRequestType<(typeof client)['#Action=UploadServerCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UploadServerCertificate'].$post(args, options))
}

export async function getActionUploadSigningCertificate(
  args: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UploadSigningCertificate'].$get(args, options))
}

export async function postActionUploadSigningCertificate(
  args: InferRequestType<(typeof client)['#Action=UploadSigningCertificate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#Action=UploadSigningCertificate'].$post(args, options))
}
