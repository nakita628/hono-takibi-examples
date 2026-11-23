import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postXAmzTargetTransferServiceCreateAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateAccess'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceCreateAgreement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateAgreement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateAgreement'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceCreateConnector(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateConnector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateConnector'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceCreateProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateProfile'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceCreateServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateServer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceCreateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateUser'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceCreateWorkflow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.CreateWorkflow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.CreateWorkflow'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteAccess'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteAgreement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteAgreement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteAgreement'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DeleteCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteConnector(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteConnector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteConnector'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteHostKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteHostKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteHostKey'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteProfile'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteServer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteSshPublicKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DeleteSshPublicKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteSshPublicKey'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteUser'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDeleteWorkflow(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DeleteWorkflow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DeleteWorkflow'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeAccess'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeAgreement(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DescribeAgreement']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeAgreement'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DescribeCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeConnector(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DescribeConnector']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeConnector'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeExecution(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DescribeExecution']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeExecution'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeHostKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeHostKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeHostKey'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeProfile'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeSecurityPolicy(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DescribeSecurityPolicy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeSecurityPolicy'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeServer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.DescribeUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeUser'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceDescribeWorkflow(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.DescribeWorkflow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.DescribeWorkflow'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceImportCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.ImportCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ImportCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceImportHostKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ImportHostKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ImportHostKey'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceImportSshPublicKey(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.ImportSshPublicKey']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ImportSshPublicKey'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListAccesses(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAccesses']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListAccesses'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListAgreements(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListAgreements']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListAgreements'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListCertificates(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.ListCertificates']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListCertificates'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListConnectors(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListConnectors']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListConnectors'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListExecutions(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListExecutions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListExecutions'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListHostKeys(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListHostKeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListHostKeys'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListProfiles(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListProfiles']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListProfiles'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListSecurityPolicies(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.ListSecurityPolicies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListSecurityPolicies'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListServers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListServers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListServers'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListTagsForResource(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.ListTagsForResource']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListTagsForResource'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceListUsers(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListUsers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['#X-Amz-Target=TransferService.ListUsers'].$post(args, options))
}

export async function postXAmzTargetTransferServiceListWorkflows(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.ListWorkflows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.ListWorkflows'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceSendWorkflowStepState(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.SendWorkflowStepState']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.SendWorkflowStepState'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceStartFileTransfer(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.StartFileTransfer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.StartFileTransfer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceStartServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StartServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.StartServer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceStopServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.StopServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.StopServer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceTagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.TagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.TagResource'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceTestIdentityProvider(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.TestIdentityProvider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.TestIdentityProvider'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUntagResource(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UntagResource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UntagResource'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateAccess(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAccess']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateAccess'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateAgreement(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateAgreement']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateAgreement'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateCertificate(
  args: InferRequestType<
    (typeof client)['#X-Amz-Target=TransferService.UpdateCertificate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateCertificate'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateConnector(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateConnector']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateConnector'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateHostKey(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateHostKey']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateHostKey'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateProfile(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateProfile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateProfile'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateServer(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateServer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateServer'].$post(args, options),
  )
}

export async function postXAmzTargetTransferServiceUpdateUser(
  args: InferRequestType<(typeof client)['#X-Amz-Target=TransferService.UpdateUser']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['#X-Amz-Target=TransferService.UpdateUser'].$post(args, options),
  )
}
