import { OpenAPIHono } from '@hono/zod-openapi'
import {
  XAmzTargetTransferServiceCreateAccessHandler,
  XAmzTargetTransferServiceCreateAgreementHandler,
  XAmzTargetTransferServiceCreateConnectorHandler,
  XAmzTargetTransferServiceCreateProfileHandler,
  XAmzTargetTransferServiceCreateServerHandler,
  XAmzTargetTransferServiceCreateUserHandler,
  XAmzTargetTransferServiceCreateWorkflowHandler,
  XAmzTargetTransferServiceDeleteAccessHandler,
  XAmzTargetTransferServiceDeleteAgreementHandler,
  XAmzTargetTransferServiceDeleteCertificateHandler,
  XAmzTargetTransferServiceDeleteConnectorHandler,
  XAmzTargetTransferServiceDeleteHostKeyHandler,
  XAmzTargetTransferServiceDeleteProfileHandler,
  XAmzTargetTransferServiceDeleteServerHandler,
  XAmzTargetTransferServiceDeleteSshPublicKeyHandler,
  XAmzTargetTransferServiceDeleteUserHandler,
  XAmzTargetTransferServiceDeleteWorkflowHandler,
  XAmzTargetTransferServiceDescribeAccessHandler,
  XAmzTargetTransferServiceDescribeAgreementHandler,
  XAmzTargetTransferServiceDescribeCertificateHandler,
  XAmzTargetTransferServiceDescribeConnectorHandler,
  XAmzTargetTransferServiceDescribeExecutionHandler,
  XAmzTargetTransferServiceDescribeHostKeyHandler,
  XAmzTargetTransferServiceDescribeProfileHandler,
  XAmzTargetTransferServiceDescribeSecurityPolicyHandler,
  XAmzTargetTransferServiceDescribeServerHandler,
  XAmzTargetTransferServiceDescribeUserHandler,
  XAmzTargetTransferServiceDescribeWorkflowHandler,
  XAmzTargetTransferServiceImportCertificateHandler,
  XAmzTargetTransferServiceImportHostKeyHandler,
  XAmzTargetTransferServiceImportSshPublicKeyHandler,
  XAmzTargetTransferServiceListAccessesHandler,
  XAmzTargetTransferServiceListAgreementsHandler,
  XAmzTargetTransferServiceListCertificatesHandler,
  XAmzTargetTransferServiceListConnectorsHandler,
  XAmzTargetTransferServiceListExecutionsHandler,
  XAmzTargetTransferServiceListHostKeysHandler,
  XAmzTargetTransferServiceListProfilesHandler,
  XAmzTargetTransferServiceListSecurityPoliciesHandler,
  XAmzTargetTransferServiceListServersHandler,
  XAmzTargetTransferServiceListTagsForResourceHandler,
  XAmzTargetTransferServiceListUsersHandler,
  XAmzTargetTransferServiceListWorkflowsHandler,
  XAmzTargetTransferServiceSendWorkflowStepStateHandler,
  XAmzTargetTransferServiceStartFileTransferHandler,
  XAmzTargetTransferServiceStartServerHandler,
  XAmzTargetTransferServiceStopServerHandler,
  XAmzTargetTransferServiceTagResourceHandler,
  XAmzTargetTransferServiceTestIdentityProviderHandler,
  XAmzTargetTransferServiceUntagResourceHandler,
  XAmzTargetTransferServiceUpdateAccessHandler,
  XAmzTargetTransferServiceUpdateAgreementHandler,
  XAmzTargetTransferServiceUpdateCertificateHandler,
  XAmzTargetTransferServiceUpdateConnectorHandler,
  XAmzTargetTransferServiceUpdateHostKeyHandler,
  XAmzTargetTransferServiceUpdateProfileHandler,
  XAmzTargetTransferServiceUpdateServerHandler,
  XAmzTargetTransferServiceUpdateUserHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', XAmzTargetTransferServiceCreateAccessHandler)
  .route('/', XAmzTargetTransferServiceCreateAgreementHandler)
  .route('/', XAmzTargetTransferServiceCreateConnectorHandler)
  .route('/', XAmzTargetTransferServiceCreateProfileHandler)
  .route('/', XAmzTargetTransferServiceCreateServerHandler)
  .route('/', XAmzTargetTransferServiceCreateUserHandler)
  .route('/', XAmzTargetTransferServiceCreateWorkflowHandler)
  .route('/', XAmzTargetTransferServiceDeleteAccessHandler)
  .route('/', XAmzTargetTransferServiceDeleteAgreementHandler)
  .route('/', XAmzTargetTransferServiceDeleteCertificateHandler)
  .route('/', XAmzTargetTransferServiceDeleteConnectorHandler)
  .route('/', XAmzTargetTransferServiceDeleteHostKeyHandler)
  .route('/', XAmzTargetTransferServiceDeleteProfileHandler)
  .route('/', XAmzTargetTransferServiceDeleteServerHandler)
  .route('/', XAmzTargetTransferServiceDeleteSshPublicKeyHandler)
  .route('/', XAmzTargetTransferServiceDeleteUserHandler)
  .route('/', XAmzTargetTransferServiceDeleteWorkflowHandler)
  .route('/', XAmzTargetTransferServiceDescribeAccessHandler)
  .route('/', XAmzTargetTransferServiceDescribeAgreementHandler)
  .route('/', XAmzTargetTransferServiceDescribeCertificateHandler)
  .route('/', XAmzTargetTransferServiceDescribeConnectorHandler)
  .route('/', XAmzTargetTransferServiceDescribeExecutionHandler)
  .route('/', XAmzTargetTransferServiceDescribeHostKeyHandler)
  .route('/', XAmzTargetTransferServiceDescribeProfileHandler)
  .route('/', XAmzTargetTransferServiceDescribeSecurityPolicyHandler)
  .route('/', XAmzTargetTransferServiceDescribeServerHandler)
  .route('/', XAmzTargetTransferServiceDescribeUserHandler)
  .route('/', XAmzTargetTransferServiceDescribeWorkflowHandler)
  .route('/', XAmzTargetTransferServiceImportCertificateHandler)
  .route('/', XAmzTargetTransferServiceImportHostKeyHandler)
  .route('/', XAmzTargetTransferServiceImportSshPublicKeyHandler)
  .route('/', XAmzTargetTransferServiceListAccessesHandler)
  .route('/', XAmzTargetTransferServiceListAgreementsHandler)
  .route('/', XAmzTargetTransferServiceListCertificatesHandler)
  .route('/', XAmzTargetTransferServiceListConnectorsHandler)
  .route('/', XAmzTargetTransferServiceListExecutionsHandler)
  .route('/', XAmzTargetTransferServiceListHostKeysHandler)
  .route('/', XAmzTargetTransferServiceListProfilesHandler)
  .route('/', XAmzTargetTransferServiceListSecurityPoliciesHandler)
  .route('/', XAmzTargetTransferServiceListServersHandler)
  .route('/', XAmzTargetTransferServiceListTagsForResourceHandler)
  .route('/', XAmzTargetTransferServiceListUsersHandler)
  .route('/', XAmzTargetTransferServiceListWorkflowsHandler)
  .route('/', XAmzTargetTransferServiceSendWorkflowStepStateHandler)
  .route('/', XAmzTargetTransferServiceStartFileTransferHandler)
  .route('/', XAmzTargetTransferServiceStartServerHandler)
  .route('/', XAmzTargetTransferServiceStopServerHandler)
  .route('/', XAmzTargetTransferServiceTagResourceHandler)
  .route('/', XAmzTargetTransferServiceTestIdentityProviderHandler)
  .route('/', XAmzTargetTransferServiceUntagResourceHandler)
  .route('/', XAmzTargetTransferServiceUpdateAccessHandler)
  .route('/', XAmzTargetTransferServiceUpdateAgreementHandler)
  .route('/', XAmzTargetTransferServiceUpdateCertificateHandler)
  .route('/', XAmzTargetTransferServiceUpdateConnectorHandler)
  .route('/', XAmzTargetTransferServiceUpdateHostKeyHandler)
  .route('/', XAmzTargetTransferServiceUpdateProfileHandler)
  .route('/', XAmzTargetTransferServiceUpdateServerHandler)
  .route('/', XAmzTargetTransferServiceUpdateUserHandler)

export default app
