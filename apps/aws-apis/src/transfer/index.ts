import { OpenAPIHono } from '@hono/zod-openapi'
import {
  xAmzTargetTransferServiceCreateAccessHandler,
  xAmzTargetTransferServiceCreateAgreementHandler,
  xAmzTargetTransferServiceCreateConnectorHandler,
  xAmzTargetTransferServiceCreateProfileHandler,
  xAmzTargetTransferServiceCreateServerHandler,
  xAmzTargetTransferServiceCreateUserHandler,
  xAmzTargetTransferServiceCreateWorkflowHandler,
  xAmzTargetTransferServiceDeleteAccessHandler,
  xAmzTargetTransferServiceDeleteAgreementHandler,
  xAmzTargetTransferServiceDeleteCertificateHandler,
  xAmzTargetTransferServiceDeleteConnectorHandler,
  xAmzTargetTransferServiceDeleteHostKeyHandler,
  xAmzTargetTransferServiceDeleteProfileHandler,
  xAmzTargetTransferServiceDeleteServerHandler,
  xAmzTargetTransferServiceDeleteSshPublicKeyHandler,
  xAmzTargetTransferServiceDeleteUserHandler,
  xAmzTargetTransferServiceDeleteWorkflowHandler,
  xAmzTargetTransferServiceDescribeAccessHandler,
  xAmzTargetTransferServiceDescribeAgreementHandler,
  xAmzTargetTransferServiceDescribeCertificateHandler,
  xAmzTargetTransferServiceDescribeConnectorHandler,
  xAmzTargetTransferServiceDescribeExecutionHandler,
  xAmzTargetTransferServiceDescribeHostKeyHandler,
  xAmzTargetTransferServiceDescribeProfileHandler,
  xAmzTargetTransferServiceDescribeSecurityPolicyHandler,
  xAmzTargetTransferServiceDescribeServerHandler,
  xAmzTargetTransferServiceDescribeUserHandler,
  xAmzTargetTransferServiceDescribeWorkflowHandler,
  xAmzTargetTransferServiceImportCertificateHandler,
  xAmzTargetTransferServiceImportHostKeyHandler,
  xAmzTargetTransferServiceImportSshPublicKeyHandler,
  xAmzTargetTransferServiceListAccessesHandler,
  xAmzTargetTransferServiceListAgreementsHandler,
  xAmzTargetTransferServiceListCertificatesHandler,
  xAmzTargetTransferServiceListConnectorsHandler,
  xAmzTargetTransferServiceListExecutionsHandler,
  xAmzTargetTransferServiceListHostKeysHandler,
  xAmzTargetTransferServiceListProfilesHandler,
  xAmzTargetTransferServiceListSecurityPoliciesHandler,
  xAmzTargetTransferServiceListServersHandler,
  xAmzTargetTransferServiceListTagsForResourceHandler,
  xAmzTargetTransferServiceListUsersHandler,
  xAmzTargetTransferServiceListWorkflowsHandler,
  xAmzTargetTransferServiceSendWorkflowStepStateHandler,
  xAmzTargetTransferServiceStartFileTransferHandler,
  xAmzTargetTransferServiceStartServerHandler,
  xAmzTargetTransferServiceStopServerHandler,
  xAmzTargetTransferServiceTagResourceHandler,
  xAmzTargetTransferServiceTestIdentityProviderHandler,
  xAmzTargetTransferServiceUntagResourceHandler,
  xAmzTargetTransferServiceUpdateAccessHandler,
  xAmzTargetTransferServiceUpdateAgreementHandler,
  xAmzTargetTransferServiceUpdateCertificateHandler,
  xAmzTargetTransferServiceUpdateConnectorHandler,
  xAmzTargetTransferServiceUpdateHostKeyHandler,
  xAmzTargetTransferServiceUpdateProfileHandler,
  xAmzTargetTransferServiceUpdateServerHandler,
  xAmzTargetTransferServiceUpdateUserHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', xAmzTargetTransferServiceCreateAccessHandler)
  .route('/', xAmzTargetTransferServiceCreateAgreementHandler)
  .route('/', xAmzTargetTransferServiceCreateConnectorHandler)
  .route('/', xAmzTargetTransferServiceCreateProfileHandler)
  .route('/', xAmzTargetTransferServiceCreateServerHandler)
  .route('/', xAmzTargetTransferServiceCreateUserHandler)
  .route('/', xAmzTargetTransferServiceCreateWorkflowHandler)
  .route('/', xAmzTargetTransferServiceDeleteAccessHandler)
  .route('/', xAmzTargetTransferServiceDeleteAgreementHandler)
  .route('/', xAmzTargetTransferServiceDeleteCertificateHandler)
  .route('/', xAmzTargetTransferServiceDeleteConnectorHandler)
  .route('/', xAmzTargetTransferServiceDeleteHostKeyHandler)
  .route('/', xAmzTargetTransferServiceDeleteProfileHandler)
  .route('/', xAmzTargetTransferServiceDeleteServerHandler)
  .route('/', xAmzTargetTransferServiceDeleteSshPublicKeyHandler)
  .route('/', xAmzTargetTransferServiceDeleteUserHandler)
  .route('/', xAmzTargetTransferServiceDeleteWorkflowHandler)
  .route('/', xAmzTargetTransferServiceDescribeAccessHandler)
  .route('/', xAmzTargetTransferServiceDescribeAgreementHandler)
  .route('/', xAmzTargetTransferServiceDescribeCertificateHandler)
  .route('/', xAmzTargetTransferServiceDescribeConnectorHandler)
  .route('/', xAmzTargetTransferServiceDescribeExecutionHandler)
  .route('/', xAmzTargetTransferServiceDescribeHostKeyHandler)
  .route('/', xAmzTargetTransferServiceDescribeProfileHandler)
  .route('/', xAmzTargetTransferServiceDescribeSecurityPolicyHandler)
  .route('/', xAmzTargetTransferServiceDescribeServerHandler)
  .route('/', xAmzTargetTransferServiceDescribeUserHandler)
  .route('/', xAmzTargetTransferServiceDescribeWorkflowHandler)
  .route('/', xAmzTargetTransferServiceImportCertificateHandler)
  .route('/', xAmzTargetTransferServiceImportHostKeyHandler)
  .route('/', xAmzTargetTransferServiceImportSshPublicKeyHandler)
  .route('/', xAmzTargetTransferServiceListAccessesHandler)
  .route('/', xAmzTargetTransferServiceListAgreementsHandler)
  .route('/', xAmzTargetTransferServiceListCertificatesHandler)
  .route('/', xAmzTargetTransferServiceListConnectorsHandler)
  .route('/', xAmzTargetTransferServiceListExecutionsHandler)
  .route('/', xAmzTargetTransferServiceListHostKeysHandler)
  .route('/', xAmzTargetTransferServiceListProfilesHandler)
  .route('/', xAmzTargetTransferServiceListSecurityPoliciesHandler)
  .route('/', xAmzTargetTransferServiceListServersHandler)
  .route('/', xAmzTargetTransferServiceListTagsForResourceHandler)
  .route('/', xAmzTargetTransferServiceListUsersHandler)
  .route('/', xAmzTargetTransferServiceListWorkflowsHandler)
  .route('/', xAmzTargetTransferServiceSendWorkflowStepStateHandler)
  .route('/', xAmzTargetTransferServiceStartFileTransferHandler)
  .route('/', xAmzTargetTransferServiceStartServerHandler)
  .route('/', xAmzTargetTransferServiceStopServerHandler)
  .route('/', xAmzTargetTransferServiceTagResourceHandler)
  .route('/', xAmzTargetTransferServiceTestIdentityProviderHandler)
  .route('/', xAmzTargetTransferServiceUntagResourceHandler)
  .route('/', xAmzTargetTransferServiceUpdateAccessHandler)
  .route('/', xAmzTargetTransferServiceUpdateAgreementHandler)
  .route('/', xAmzTargetTransferServiceUpdateCertificateHandler)
  .route('/', xAmzTargetTransferServiceUpdateConnectorHandler)
  .route('/', xAmzTargetTransferServiceUpdateHostKeyHandler)
  .route('/', xAmzTargetTransferServiceUpdateProfileHandler)
  .route('/', xAmzTargetTransferServiceUpdateServerHandler)
  .route('/', xAmzTargetTransferServiceUpdateUserHandler)

export default app
