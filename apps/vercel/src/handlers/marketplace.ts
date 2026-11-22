import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
  deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  getV1InstallationsIntegrationConfigurationIdAccountRoute,
  getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdRoute,
  getV1InstallationsIntegrationConfigurationIdMemberMemberIdRoute,
  getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
  getV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  getV1InstallationsIntegrationConfigurationIdResourcesRoute,
  headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
  patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
  patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  patchV1InstallationsIntegrationConfigurationIdRoute,
  postV1InstallationsIntegrationConfigurationIdBillingBalanceRoute,
  postV1InstallationsIntegrationConfigurationIdBillingFinalizeRoute,
  postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsRoute,
  postV1InstallationsIntegrationConfigurationIdBillingInvoicesRoute,
  postV1InstallationsIntegrationConfigurationIdBillingRoute,
  postV1InstallationsIntegrationConfigurationIdCredentialsRevokeRoute,
  postV1InstallationsIntegrationConfigurationIdCredentialsRotateRoute,
  postV1InstallationsIntegrationConfigurationIdEventsRoute,
  postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRoute,
  putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsRoute,
  putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
  putV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute,
  putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const marketplaceHandler = app
  .openapi(patchV1InstallationsIntegrationConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdMemberMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdCredentialsRotateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdCredentialsRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingFinalizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1InstallationsIntegrationConfigurationIdBillingInvoicesInvoiceIdActionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV1InstallationsIntegrationConfigurationIdBillingBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putV1InstallationsIntegrationConfigurationIdProductsIntegrationProductIdOrSlugResourcesResourceIdSecretsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(putV1InstallationsIntegrationConfigurationIdResourcesResourceIdSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationItemsItemIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    headV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putV1InstallationsIntegrationConfigurationIdResourcesResourceIdExperimentationGlobalConfigRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
