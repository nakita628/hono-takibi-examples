import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteActionsActionRoute,
  deleteAddressesAddressKeysKeyRoute,
  deleteAddressesAddressRoute,
  deleteDomainsDomainRoute,
  deleteIntegrationsIntegrationRoute,
  deleteTriggersTriggerRoute,
  deleteWorkflowsWorkflowRoute,
  getActionsRoute,
  getAddressesAddressKeysKeyRoute,
  getAddressesAddressKeysRoute,
  getAddressesRoute,
  getDaemonsDaemonTokenRoute,
  getDomainsRoute,
  getDomainsVerifyDomainRoute,
  getInputsRoute,
  getIntegrationsRoute,
  getTriggersRoute,
  getUserRoute,
  getVerificationsRoute,
  getWorkflowsRoute,
  getWorkspacesRoute,
  postActionsRoute,
  postAddressesAddressKeysRoute,
  postAddressesRoute,
  postDomainsRoute,
  postDomainsVerifyDomainRoute,
  postSendRoute,
  postTriggersRoute,
  postVerificationsRoute,
  postVerificationsVerificationVerifyRoute,
  postWorkflowsRoute,
  postWorkflowsSetRoute,
  postWorkspacesRoute,
  putActionsActionRoute,
  putAddressesAddressKeysKeyRoute,
  putTriggersTriggerRoute,
  putUserRoute,
  putWorkflowsWorkflowRoute,
} from './routes'
import {
  deleteActionsActionRouteHandler,
  deleteAddressesAddressKeysKeyRouteHandler,
  deleteAddressesAddressRouteHandler,
  deleteDomainsDomainRouteHandler,
  deleteIntegrationsIntegrationRouteHandler,
  deleteTriggersTriggerRouteHandler,
  deleteWorkflowsWorkflowRouteHandler,
  getActionsRouteHandler,
  getAddressesAddressKeysKeyRouteHandler,
  getAddressesAddressKeysRouteHandler,
  getAddressesRouteHandler,
  getDaemonsDaemonTokenRouteHandler,
  getDomainsRouteHandler,
  getDomainsVerifyDomainRouteHandler,
  getInputsRouteHandler,
  getIntegrationsRouteHandler,
  getTriggersRouteHandler,
  getUserRouteHandler,
  getVerificationsRouteHandler,
  getWorkflowsRouteHandler,
  getWorkspacesRouteHandler,
  postActionsRouteHandler,
  postAddressesAddressKeysRouteHandler,
  postAddressesRouteHandler,
  postDomainsRouteHandler,
  postDomainsVerifyDomainRouteHandler,
  postSendRouteHandler,
  postTriggersRouteHandler,
  postVerificationsRouteHandler,
  postVerificationsVerificationVerifyRouteHandler,
  postWorkflowsRouteHandler,
  postWorkflowsSetRouteHandler,
  postWorkspacesRouteHandler,
  putActionsActionRouteHandler,
  putAddressesAddressKeysKeyRouteHandler,
  putTriggersTriggerRouteHandler,
  putUserRouteHandler,
  putWorkflowsWorkflowRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getActionsRoute, getActionsRouteHandler)
  .openapi(postActionsRoute, postActionsRouteHandler)
  .openapi(deleteActionsActionRoute, deleteActionsActionRouteHandler)
  .openapi(putActionsActionRoute, putActionsActionRouteHandler)
  .openapi(getAddressesRoute, getAddressesRouteHandler)
  .openapi(postAddressesRoute, postAddressesRouteHandler)
  .openapi(deleteAddressesAddressRoute, deleteAddressesAddressRouteHandler)
  .openapi(getAddressesAddressKeysRoute, getAddressesAddressKeysRouteHandler)
  .openapi(postAddressesAddressKeysRoute, postAddressesAddressKeysRouteHandler)
  .openapi(deleteAddressesAddressKeysKeyRoute, deleteAddressesAddressKeysKeyRouteHandler)
  .openapi(getAddressesAddressKeysKeyRoute, getAddressesAddressKeysKeyRouteHandler)
  .openapi(putAddressesAddressKeysKeyRoute, putAddressesAddressKeysKeyRouteHandler)
  .openapi(getDaemonsDaemonTokenRoute, getDaemonsDaemonTokenRouteHandler)
  .openapi(getDomainsRoute, getDomainsRouteHandler)
  .openapi(postDomainsRoute, postDomainsRouteHandler)
  .openapi(getDomainsVerifyDomainRoute, getDomainsVerifyDomainRouteHandler)
  .openapi(postDomainsVerifyDomainRoute, postDomainsVerifyDomainRouteHandler)
  .openapi(deleteDomainsDomainRoute, deleteDomainsDomainRouteHandler)
  .openapi(getInputsRoute, getInputsRouteHandler)
  .openapi(getIntegrationsRoute, getIntegrationsRouteHandler)
  .openapi(deleteIntegrationsIntegrationRoute, deleteIntegrationsIntegrationRouteHandler)
  .openapi(postSendRoute, postSendRouteHandler)
  .openapi(getTriggersRoute, getTriggersRouteHandler)
  .openapi(postTriggersRoute, postTriggersRouteHandler)
  .openapi(deleteTriggersTriggerRoute, deleteTriggersTriggerRouteHandler)
  .openapi(putTriggersTriggerRoute, putTriggersTriggerRouteHandler)
  .openapi(getUserRoute, getUserRouteHandler)
  .openapi(putUserRoute, putUserRouteHandler)
  .openapi(getVerificationsRoute, getVerificationsRouteHandler)
  .openapi(postVerificationsRoute, postVerificationsRouteHandler)
  .openapi(
    postVerificationsVerificationVerifyRoute,
    postVerificationsVerificationVerifyRouteHandler,
  )
  .openapi(getWorkflowsRoute, getWorkflowsRouteHandler)
  .openapi(postWorkflowsRoute, postWorkflowsRouteHandler)
  .openapi(postWorkflowsSetRoute, postWorkflowsSetRouteHandler)
  .openapi(deleteWorkflowsWorkflowRoute, deleteWorkflowsWorkflowRouteHandler)
  .openapi(putWorkflowsWorkflowRoute, putWorkflowsWorkflowRouteHandler)
  .openapi(getWorkspacesRoute, getWorkspacesRouteHandler)
  .openapi(postWorkspacesRoute, postWorkspacesRouteHandler)

export default app
