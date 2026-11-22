import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aiApiKeyHandler,
  antiAffinityGroupHandler,
  apiKeyHandler,
  blockStorageHandler,
  clusterHandler,
  cryptoHandler,
  dbaasHandler,
  deploymentHandler,
  deployTargetHandler,
  domainHandler,
  elasticIpHandler,
  environmentalImpactHandler,
  eventHandler,
  instanceHandler,
  instancePoolHandler,
  instanceTypeHandler,
  kmsKeyHandler,
  modelHandler,
  networkLoadBalancerHandler,
  nodepoolHandler,
  nodepoolTemplateHandler,
  operationHandler,
  organizationHandler,
  organizationPolicyHandler,
  privateNetworkHandler,
  quotasHandler,
  recordHandler,
  reverseDnsHandler,
  roleHandler,
  securityGroupHandler,
  snapshotHandler,
  sosHandler,
  sshKeyHandler,
  templateHandler,
  userHandler,
  vpcManagementHandler,
  vpcRouteHandler,
  vpcSubnetHandler,
  zoneHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', networkLoadBalancerHandler)
  .route('/', dbaasHandler)
  .route('/', instancePoolHandler)
  .route('/', instanceHandler)
  .route('/', reverseDnsHandler)
  .route('/', antiAffinityGroupHandler)
  .route('/', organizationHandler)
  .route('/', eventHandler)
  .route('/', securityGroupHandler)
  .route('/', kmsKeyHandler)
  .route('/', deploymentHandler)
  .route('/', privateNetworkHandler)
  .route('/', roleHandler)
  .route('/', vpcSubnetHandler)
  .route('/', modelHandler)
  .route('/', instanceTypeHandler)
  .route('/', nodepoolTemplateHandler)
  .route('/', elasticIpHandler)
  .route('/', zoneHandler)
  .route('/', clusterHandler)
  .route('/', recordHandler)
  .route('/', environmentalImpactHandler)
  .route('/', deployTargetHandler)
  .route('/', blockStorageHandler)
  .route('/', vpcRouteHandler)
  .route('/', nodepoolHandler)
  .route('/', aiApiKeyHandler)
  .route('/', vpcManagementHandler)
  .route('/', snapshotHandler)
  .route('/', quotasHandler)
  .route('/', apiKeyHandler)
  .route('/', domainHandler)
  .route('/', operationHandler)
  .route('/', organizationPolicyHandler)
  .route('/', cryptoHandler)
  .route('/', templateHandler)
  .route('/', userHandler)
  .route('/', sosHandler)
  .route('/', sshKeyHandler)

export default app
