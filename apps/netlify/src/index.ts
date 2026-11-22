import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accessTokenHandler,
  accountMembershipHandler,
  accountTypeHandler,
  agentRunnerHandler,
  agentRunnerSessionHandler,
  aiGatewayHandler,
  assetHandler,
  assetPublicSignatureHandler,
  auditLogHandler,
  buildHandler,
  buildHookHandler,
  buildLogMsgHandler,
  databaseHandler,
  deployedBranchHandler,
  deployHandler,
  deployKeyHandler,
  devServerHandler,
  devServerHookHandler,
  dnsZoneHandler,
  edgeFunctionHandler,
  environmentVariablesHandler,
  fileHandler,
  formHandler,
  functionHandler,
  hiddenAgentRunnerHandler,
  hookHandler,
  hookTypeHandler,
  identityUserHandler,
  memberHandler,
  metadataHandler,
  paymentMethodHandler,
  purgeHandler,
  serviceHandler,
  serviceInstanceHandler,
  siteHandler,
  sniCertificateHandler,
  snippetHandler,
  splitTestHandler,
  submissionHandler,
  ticketHandler,
  userHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', siteHandler)
  .route('/', sniCertificateHandler)
  .route('/', environmentVariablesHandler)
  .route('/', functionHandler)
  .route('/', formHandler)
  .route('/', submissionHandler)
  .route('/', fileHandler)
  .route('/', assetHandler)
  .route('/', assetPublicSignatureHandler)
  .route('/', purgeHandler)
  .route('/', snippetHandler)
  .route('/', metadataHandler)
  .route('/', buildHookHandler)
  .route('/', deployHandler)
  .route('/', buildHandler)
  .route('/', deployedBranchHandler)
  .route('/', buildLogMsgHandler)
  .route('/', dnsZoneHandler)
  .route('/', edgeFunctionHandler)
  .route('/', hookHandler)
  .route('/', hookTypeHandler)
  .route('/', ticketHandler)
  .route('/', accessTokenHandler)
  .route('/', deployKeyHandler)
  .route('/', memberHandler)
  .route('/', paymentMethodHandler)
  .route('/', accountTypeHandler)
  .route('/', accountMembershipHandler)
  .route('/', auditLogHandler)
  .route('/', agentRunnerHandler)
  .route('/', hiddenAgentRunnerHandler)
  .route('/', agentRunnerSessionHandler)
  .route('/', serviceInstanceHandler)
  .route('/', identityUserHandler)
  .route('/', serviceHandler)
  .route('/', userHandler)
  .route('/', splitTestHandler)
  .route('/', devServerHandler)
  .route('/', devServerHookHandler)
  .route('/', aiGatewayHandler)
  .route('/', databaseHandler)

export default app
