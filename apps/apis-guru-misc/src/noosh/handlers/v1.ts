import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdRoute,
  getV1CountriesRoute,
  getV1WorkgroupsRoute,
  getV1WorkgroupsWorkgroupIdAutomaticInvitationsRoute,
  getV1WorkgroupsWorkgroupIdBillingRecipientsRoute,
  getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdBuyOrdersRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdRoute,
  getV1WorkgroupsWorkgroupIdClientWorkgroupsRoute,
  getV1WorkgroupsWorkgroupIdContactsRoute,
  getV1WorkgroupsWorkgroupIdContactsUserIdRoute,
  getV1WorkgroupsWorkgroupIdCustomTaskStatusRoute,
  getV1WorkgroupsWorkgroupIdCustomTaskTypesRoute,
  getV1WorkgroupsWorkgroupIdDeactivationReasonsRoute,
  getV1WorkgroupsWorkgroupIdDefaultTaskPriorityRoute,
  getV1WorkgroupsWorkgroupIdDefaultTaskStatusRoute,
  getV1WorkgroupsWorkgroupIdDetailRoute,
  getV1WorkgroupsWorkgroupIdExchangeRateRoute,
  getV1WorkgroupsWorkgroupIdMyTimeCardsRoute,
  getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdRoute,
  getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute,
  getV1WorkgroupsWorkgroupIdProductTypesRoute,
  getV1WorkgroupsWorkgroupIdProjectCategoryRoute,
  getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute,
  getV1WorkgroupsWorkgroupIdProjectsRoute,
  getV1WorkgroupsWorkgroupIdProjectStatusRoute,
  getV1WorkgroupsWorkgroupIdQuotesRoute,
  getV1WorkgroupsWorkgroupIdQuoteStatesRoute,
  getV1WorkgroupsWorkgroupIdReceivedTimeCardsRoute,
  getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdRoute,
  getV1WorkgroupsWorkgroupIdSellOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdSellOrdersRoute,
  getV1WorkgroupsWorkgroupIdSpecTemplatesRoute,
  getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdRoute,
  getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute,
  getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdRoute,
  getV1WorkgroupsWorkgroupIdSupplierWorkgroupsRoute,
  getV1WorkgroupsWorkgroupIdTasksRoute,
  getV1WorkgroupsWorkgroupIdTasksTaskIdRoute,
  getV1WorkgroupsWorkgroupIdTaskTypesRoute,
  getV1WorkgroupsWorkgroupIdTeamTemplatesRoute,
  getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdRoute,
  getV1WorkgroupsWorkgroupIdWorkgroupMembersRoute,
  getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdRoute,
  patchV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  postV1WorkgroupsWorkgroupIdExchangeRateRoute,
  postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute,
  postV1WorkgroupsWorkgroupIdProfileImageRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute,
  postV1WorkgroupsWorkgroupIdProjectsRoute,
  putV1WorkgroupsWorkgroupIdDetailRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute,
} from '../routes'

export const getV1CountriesRouteHandler: RouteHandler<typeof getV1CountriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsRouteHandler: RouteHandler<typeof getV1WorkgroupsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdAutomaticInvitationsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdAutomaticInvitationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdBillingRecipientsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdBillingRecipientsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdBuyOrdersRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdBuyOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectHomeUserFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdClientWorkgroupsClientWorkgroupIdProjectStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdContactsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdContactsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdContactsUserIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdContactsUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdCustomTaskStatusRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdCustomTaskStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdCustomTaskTypesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdCustomTaskTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdDeactivationReasonsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdDeactivationReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdDefaultTaskPriorityRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdDefaultTaskPriorityRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdDefaultTaskStatusRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdDefaultTaskStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdDetailRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdDetailRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdDetailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdExchangeRateRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdExchangeRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdExchangeRateRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdExchangeRateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdMyTimeCardsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdMyTimeCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProductTypesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProductTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProductTypesOfSpecTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProfileImageRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProfileImageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectCategoryRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectCategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectHomeUserFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectStatusRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkgroupsWorkgroupIdProjectsProjectIdRouteHandler: RouteHandler<
  typeof deleteV1WorkgroupsWorkgroupIdProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV1WorkgroupsWorkgroupIdProjectsProjectIdRouteHandler: RouteHandler<
  typeof patchV1WorkgroupsWorkgroupIdProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdProjectsProjectIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdEstimatesEstimateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdInvoicesInvoiceIdFilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdMemberrolesUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdProjectsProjectIdQuotesQuoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfesRfeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdRfqsRfqIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdProjectsProjectIdShipmentsShipmentIdLocationsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRouteHandler: RouteHandler<
  typeof putV1WorkgroupsWorkgroupIdProjectsProjectIdSpecsSpecIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeamMembersOfClientProjectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRouteHandler: RouteHandler<
  typeof postV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdRouteHandler: RouteHandler<
  typeof deleteV1WorkgroupsWorkgroupIdProjectsProjectIdTeammembersTeammemberIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdQuoteStatesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdQuoteStatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdQuotesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdQuotesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdReceivedTimeCardsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSellOrdersRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSellOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSellOrdersOrderIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSellOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSpecTemplatesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSpecTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSpecTemplatesSpecTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSpecTypesSpecTypeIdSpecTypeFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSupplierWorkgroupsRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdSupplierWorkgroupsBuSupplierWorkgroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdTaskTypesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdTaskTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdTasksRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdTasksTaskIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdTasksTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdTeamTemplatesRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdTeamTemplatesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdTeamTemplatesTeamTemplateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdWorkgroupMembersRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdRouteHandler: RouteHandler<
  typeof getV1WorkgroupsWorkgroupIdWorkgroupMembersUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
