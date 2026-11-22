import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsPartnersBillingAggregatedUsageBilledRoute,
  deleteReportsPartnersBillingAggregatedUsageRoute,
  deleteReportsPartnersBillingManifestsManifestIdRoute,
  deleteReportsPartnersBillingOperationsOperationIdRoute,
  deleteReportsPartnersBillingReconciliationBilledRoute,
  deleteReportsPartnersBillingReconciliationRoute,
  deleteReportsPartnersBillingReconciliationUnbilledRoute,
  deleteReportsPartnersBillingRoute,
  deleteReportsPartnersBillingUsageBilledRoute,
  deleteReportsPartnersBillingUsageRoute,
  deleteReportsPartnersBillingUsageUnbilledRoute,
  deleteReportsPartnersRoute,
  getReportsPartnersBillingAggregatedUsageBilledRoute,
  getReportsPartnersBillingAggregatedUsageRoute,
  getReportsPartnersBillingManifestsCountRoute,
  getReportsPartnersBillingManifestsManifestIdRoute,
  getReportsPartnersBillingManifestsRoute,
  getReportsPartnersBillingOperationsCountRoute,
  getReportsPartnersBillingOperationsOperationIdRoute,
  getReportsPartnersBillingOperationsRoute,
  getReportsPartnersBillingReconciliationBilledRoute,
  getReportsPartnersBillingReconciliationRoute,
  getReportsPartnersBillingReconciliationUnbilledRoute,
  getReportsPartnersBillingRoute,
  getReportsPartnersBillingUsageBilledRoute,
  getReportsPartnersBillingUsageRoute,
  getReportsPartnersBillingUsageUnbilledRoute,
  getReportsPartnersRoute,
  patchReportsPartnersBillingAggregatedUsageBilledRoute,
  patchReportsPartnersBillingAggregatedUsageRoute,
  patchReportsPartnersBillingManifestsManifestIdRoute,
  patchReportsPartnersBillingOperationsOperationIdRoute,
  patchReportsPartnersBillingReconciliationBilledRoute,
  patchReportsPartnersBillingReconciliationRoute,
  patchReportsPartnersBillingReconciliationUnbilledRoute,
  patchReportsPartnersBillingRoute,
  patchReportsPartnersBillingUsageBilledRoute,
  patchReportsPartnersBillingUsageRoute,
  patchReportsPartnersBillingUsageUnbilledRoute,
  patchReportsPartnersRoute,
  postReportsPartnersBillingAggregatedUsageBilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingManifestsRoute,
  postReportsPartnersBillingOperationsRoute,
  postReportsPartnersBillingReconciliationBilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingReconciliationUnbilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingUsageBilledMicrosoftGraphPartnersBillingExportRoute,
  postReportsPartnersBillingUsageUnbilledMicrosoftGraphPartnersBillingExportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsPartnersHandler = app
  .openapi(getReportsPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingAggregatedUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingAggregatedUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingAggregatedUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingAggregatedUsageBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingAggregatedUsageBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingAggregatedUsageBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postReportsPartnersBillingAggregatedUsageBilledMicrosoftGraphPartnersBillingExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsPartnersBillingManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsPartnersBillingManifestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingManifestsManifestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingManifestsManifestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingManifestsManifestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingManifestsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsPartnersBillingOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingOperationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingReconciliationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingReconciliationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingReconciliationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingReconciliationBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingReconciliationBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingReconciliationBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postReportsPartnersBillingReconciliationBilledMicrosoftGraphPartnersBillingExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsPartnersBillingReconciliationUnbilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingReconciliationUnbilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingReconciliationUnbilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postReportsPartnersBillingReconciliationUnbilledMicrosoftGraphPartnersBillingExportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getReportsPartnersBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingUsageBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingUsageBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingUsageBilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsPartnersBillingUsageBilledMicrosoftGraphPartnersBillingExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsPartnersBillingUsageUnbilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsPartnersBillingUsageUnbilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsPartnersBillingUsageUnbilledRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReportsPartnersBillingUsageUnbilledMicrosoftGraphPartnersBillingExportRoute, (c) => {
    throw new Error('Not implemented')
  })
