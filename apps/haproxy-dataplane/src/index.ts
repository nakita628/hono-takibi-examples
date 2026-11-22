import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aclHandler,
  aclRuntimeHandler,
  acmeHandler,
  acmeRuntimeHandler,
  backendHandler,
  backendSwitchingRuleHandler,
  bindHandler,
  cacheHandler,
  configurationHandler,
  crtLoadHandler,
  crtStoreHandler,
  declareCaptureHandler,
  defaultsHandler,
  dgramBindHandler,
  discoveryHandler,
  fcgiAppHandler,
  filterHandler,
  forceBeSwitchHandler,
  frontendHandler,
  globalHandler,
  groupHandler,
  healthCheckHandler,
  healthHandler,
  httpAfterResponseRuleHandler,
  httpCheckHandler,
  httpErrorRuleHandler,
  httpErrorsHandler,
  httpRequestRuleHandler,
  httpResponseRuleHandler,
  informationHandler,
  logForwardHandler,
  logProfileHandler,
  logTargetHandler,
  mailerEntryHandler,
  mailersHandler,
  mapsHandler,
  nameserverHandler,
  peerEntryHandler,
  peerHandler,
  quicInitialRuleHandler,
  reloadsHandler,
  resolverHandler,
  ringHandler,
  serverHandler,
  serverSwitchingRuleHandler,
  serverTemplateHandler,
  serviceDiscoveryHandler,
  sitesHandler,
  specificationHandler,
  specificationOpenapiv3Handler,
  spoeHandler,
  spoeTransactionsHandler,
  sslFrontUseHandler,
  sslRuntimeHandler,
  statsHandler,
  stickRuleHandler,
  stickTableHandler,
  storageHandler,
  tableHandler,
  tcpCheckHandler,
  tcpRequestRuleHandler,
  tcpResponseRuleHandler,
  tracesHandler,
  transactionsHandler,
  userHandler,
  userlistHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', discoveryHandler)
  .route('/', healthHandler)
  .route('/', informationHandler)
  .route('/', serviceDiscoveryHandler)
  .route('/', acmeHandler)
  .route('/', backendHandler)
  .route('/', aclHandler)
  .route('/', filterHandler)
  .route('/', httpAfterResponseRuleHandler)
  .route('/', httpCheckHandler)
  .route('/', httpErrorRuleHandler)
  .route('/', httpRequestRuleHandler)
  .route('/', httpResponseRuleHandler)
  .route('/', logTargetHandler)
  .route('/', serverSwitchingRuleHandler)
  .route('/', serverTemplateHandler)
  .route('/', serverHandler)
  .route('/', stickRuleHandler)
  .route('/', tcpCheckHandler)
  .route('/', tcpRequestRuleHandler)
  .route('/', tcpResponseRuleHandler)
  .route('/', cacheHandler)
  .route('/', crtStoreHandler)
  .route('/', crtLoadHandler)
  .route('/', defaultsHandler)
  .route('/', quicInitialRuleHandler)
  .route('/', fcgiAppHandler)
  .route('/', frontendHandler)
  .route('/', backendSwitchingRuleHandler)
  .route('/', bindHandler)
  .route('/', declareCaptureHandler)
  .route('/', forceBeSwitchHandler)
  .route('/', sslFrontUseHandler)
  .route('/', globalHandler)
  .route('/', groupHandler)
  .route('/', healthCheckHandler)
  .route('/', httpErrorsHandler)
  .route('/', logForwardHandler)
  .route('/', dgramBindHandler)
  .route('/', logProfileHandler)
  .route('/', mailerEntryHandler)
  .route('/', mailersHandler)
  .route('/', nameserverHandler)
  .route('/', peerEntryHandler)
  .route('/', peerHandler)
  .route('/', tableHandler)
  .route('/', configurationHandler)
  .route('/', resolverHandler)
  .route('/', ringHandler)
  .route('/', tracesHandler)
  .route('/', userlistHandler)
  .route('/', userHandler)
  .route('/', reloadsHandler)
  .route('/', aclRuntimeHandler)
  .route('/', acmeRuntimeHandler)
  .route('/', mapsHandler)
  .route('/', sslRuntimeHandler)
  .route('/', stickTableHandler)
  .route('/', sitesHandler)
  .route('/', spoeHandler)
  .route('/', spoeTransactionsHandler)
  .route('/', statsHandler)
  .route('/', storageHandler)
  .route('/', transactionsHandler)
  .route('/', specificationHandler)
  .route('/', specificationOpenapiv3Handler)

export default app
