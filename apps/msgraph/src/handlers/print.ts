import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deletePrintConnectorsPrintConnectorIdRoute,
  deletePrintOperationsPrintOperationIdRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdRoute,
  deletePrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute,
  deletePrintPrintersPrinterIdRoute,
  deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  deletePrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute,
  deletePrintServicesPrintServiceIdRoute,
  deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRoute,
  deletePrintSharesPrinterShareIdAllowedGroupsRefRoute,
  deletePrintSharesPrinterShareIdAllowedUsersRefRoute,
  deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdRoute,
  deletePrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute,
  deletePrintSharesPrinterShareIdRoute,
  deletePrintTaskDefinitionsPrintTaskDefinitionIdRoute,
  deletePrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute,
  getPrintConnectorsCountRoute,
  getPrintConnectorsPrintConnectorIdRoute,
  getPrintConnectorsRoute,
  getPrintOperationsCountRoute,
  getPrintOperationsPrintOperationIdRoute,
  getPrintOperationsRoute,
  getPrintPrintersCountRoute,
  getPrintPrintersPrinterIdConnectorsCountRoute,
  getPrintPrintersPrinterIdConnectorsPrintConnectorIdRoute,
  getPrintPrintersPrinterIdConnectorsRoute,
  getPrintPrintersPrinterIdJobsCountRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsCountRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksCountRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute,
  getPrintPrintersPrinterIdJobsPrintJobIdTasksRoute,
  getPrintPrintersPrinterIdJobsRoute,
  getPrintPrintersPrinterIdRoute,
  getPrintPrintersPrinterIdSharesCountRoute,
  getPrintPrintersPrinterIdSharesPrinterShareIdRoute,
  getPrintPrintersPrinterIdSharesRoute,
  getPrintPrintersPrinterIdTaskTriggersCountRoute,
  getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRoute,
  getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  getPrintPrintersPrinterIdTaskTriggersRoute,
  getPrintPrintersRoute,
  getPrintRoute,
  getPrintServicesCountRoute,
  getPrintServicesPrintServiceIdEndpointsCountRoute,
  getPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute,
  getPrintServicesPrintServiceIdEndpointsRoute,
  getPrintServicesPrintServiceIdRoute,
  getPrintServicesRoute,
  getPrintSharesCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsCountRoute,
  getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsRoute,
  getPrintSharesPrinterShareIdAllowedGroupsRefRoute,
  getPrintSharesPrinterShareIdAllowedGroupsRoute,
  getPrintSharesPrinterShareIdAllowedUsersCountRoute,
  getPrintSharesPrinterShareIdAllowedUsersRefRoute,
  getPrintSharesPrinterShareIdAllowedUsersRoute,
  getPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute,
  getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsCountRoute,
  getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsRoute,
  getPrintSharesPrinterShareIdJobsCountRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsCountRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksCountRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute,
  getPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute,
  getPrintSharesPrinterShareIdJobsRoute,
  getPrintSharesPrinterShareIdPrinterRoute,
  getPrintSharesPrinterShareIdRoute,
  getPrintSharesRoute,
  getPrintTaskDefinitionsCountRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdDefinitionRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdTriggerRoute,
  getPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute,
  getPrintTaskDefinitionsRoute,
  patchPrintConnectorsPrintConnectorIdRoute,
  patchPrintOperationsPrintOperationIdRoute,
  patchPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  patchPrintPrintersPrinterIdJobsPrintJobIdRoute,
  patchPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute,
  patchPrintPrintersPrinterIdRoute,
  patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute,
  patchPrintRoute,
  patchPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute,
  patchPrintServicesPrintServiceIdRoute,
  patchPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute,
  patchPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute,
  patchPrintSharesPrinterShareIdJobsPrintJobIdRoute,
  patchPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute,
  patchPrintSharesPrinterShareIdRoute,
  patchPrintTaskDefinitionsPrintTaskDefinitionIdRoute,
  patchPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute,
  postPrintConnectorsRoute,
  postPrintOperationsRoute,
  postPrintPrintersCreateRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdAbortRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdCancelRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdRedirectRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdStartRoute,
  postPrintPrintersPrinterIdJobsPrintJobIdTasksRoute,
  postPrintPrintersPrinterIdJobsRoute,
  postPrintPrintersPrinterIdRestoreFactoryDefaultsRoute,
  postPrintPrintersPrinterIdTaskTriggersRoute,
  postPrintPrintersRoute,
  postPrintServicesPrintServiceIdEndpointsRoute,
  postPrintServicesRoute,
  postPrintSharesPrinterShareIdAllowedGroupsRefRoute,
  postPrintSharesPrinterShareIdAllowedUsersRefRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdAbortRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdCancelRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdRedirectRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdStartRoute,
  postPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute,
  postPrintSharesPrinterShareIdJobsRoute,
  postPrintSharesRoute,
  postPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute,
  postPrintTaskDefinitionsRoute,
  putPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
  putPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute,
} from '../routes'

export const getPrintRouteHandler: RouteHandler<typeof getPrintRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintRouteHandler: RouteHandler<typeof patchPrintRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintConnectorsRouteHandler: RouteHandler<typeof getPrintConnectorsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPrintConnectorsRouteHandler: RouteHandler<
  typeof postPrintConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintConnectorsPrintConnectorIdRouteHandler: RouteHandler<
  typeof getPrintConnectorsPrintConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintConnectorsPrintConnectorIdRouteHandler: RouteHandler<
  typeof patchPrintConnectorsPrintConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintConnectorsPrintConnectorIdRouteHandler: RouteHandler<
  typeof deletePrintConnectorsPrintConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintConnectorsCountRouteHandler: RouteHandler<
  typeof getPrintConnectorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintOperationsRouteHandler: RouteHandler<typeof getPrintOperationsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPrintOperationsRouteHandler: RouteHandler<
  typeof postPrintOperationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintOperationsPrintOperationIdRouteHandler: RouteHandler<
  typeof getPrintOperationsPrintOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintOperationsPrintOperationIdRouteHandler: RouteHandler<
  typeof patchPrintOperationsPrintOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintOperationsPrintOperationIdRouteHandler: RouteHandler<
  typeof deletePrintOperationsPrintOperationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintOperationsCountRouteHandler: RouteHandler<
  typeof getPrintOperationsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersRouteHandler: RouteHandler<typeof getPrintPrintersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersRouteHandler: RouteHandler<typeof postPrintPrintersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintPrintersPrinterIdRouteHandler: RouteHandler<
  typeof patchPrintPrintersPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintPrintersPrinterIdRouteHandler: RouteHandler<
  typeof deletePrintPrintersPrinterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdConnectorsRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdConnectorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdConnectorsPrintConnectorIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdConnectorsPrintConnectorIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdConnectorsCountRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdConnectorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintPrintersPrinterIdJobsPrintJobIdRouteHandler: RouteHandler<
  typeof patchPrintPrintersPrinterIdJobsPrintJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintPrintersPrinterIdJobsPrintJobIdRouteHandler: RouteHandler<
  typeof deletePrintPrintersPrinterIdJobsPrintJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdDocumentsRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdDocumentsRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRouteHandler: RouteHandler<
  typeof patchPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRouteHandler: RouteHandler<
  typeof deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRouteHandler: RouteHandler<
  typeof putPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRouteHandler: RouteHandler<
  typeof deletePrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdDocumentsCountRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdDocumentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdAbortRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdAbortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdCancelRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdRedirectRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdStartRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdTasksRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdJobsPrintJobIdTasksRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdJobsPrintJobIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof patchPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof deletePrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdDefinitionRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdTriggerRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsPrintJobIdTasksCountRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsPrintJobIdTasksCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdJobsCountRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdRestoreFactoryDefaultsRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdRestoreFactoryDefaultsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdSharesRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdSharesPrinterShareIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdSharesPrinterShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdSharesCountRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdSharesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdTaskTriggersRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdTaskTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersPrinterIdTaskTriggersRouteHandler: RouteHandler<
  typeof postPrintPrintersPrinterIdTaskTriggersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRouteHandler: RouteHandler<
  typeof patchPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRouteHandler: RouteHandler<
  typeof deletePrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdTaskTriggersPrintTaskTriggerIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersPrinterIdTaskTriggersCountRouteHandler: RouteHandler<
  typeof getPrintPrintersPrinterIdTaskTriggersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintPrintersCountRouteHandler: RouteHandler<
  typeof getPrintPrintersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintPrintersCreateRouteHandler: RouteHandler<
  typeof postPrintPrintersCreateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintServicesRouteHandler: RouteHandler<typeof getPrintServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postPrintServicesRouteHandler: RouteHandler<typeof postPrintServicesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getPrintServicesPrintServiceIdRouteHandler: RouteHandler<
  typeof getPrintServicesPrintServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintServicesPrintServiceIdRouteHandler: RouteHandler<
  typeof patchPrintServicesPrintServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintServicesPrintServiceIdRouteHandler: RouteHandler<
  typeof deletePrintServicesPrintServiceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintServicesPrintServiceIdEndpointsRouteHandler: RouteHandler<
  typeof getPrintServicesPrintServiceIdEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintServicesPrintServiceIdEndpointsRouteHandler: RouteHandler<
  typeof postPrintServicesPrintServiceIdEndpointsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRouteHandler: RouteHandler<
  typeof getPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRouteHandler: RouteHandler<
  typeof patchPrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRouteHandler: RouteHandler<
  typeof deletePrintServicesPrintServiceIdEndpointsPrintServiceEndpointIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintServicesPrintServiceIdEndpointsCountRouteHandler: RouteHandler<
  typeof getPrintServicesPrintServiceIdEndpointsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintServicesCountRouteHandler: RouteHandler<
  typeof getPrintServicesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesRouteHandler: RouteHandler<typeof getPrintSharesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesRouteHandler: RouteHandler<typeof postPrintSharesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintSharesPrinterShareIdRouteHandler: RouteHandler<
  typeof patchPrintSharesPrinterShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedGroupsRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdAllowedGroupsGroupIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedGroupsGroupIdServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedGroupsCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedGroupsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedGroupsRefRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedGroupsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdAllowedGroupsRefRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdAllowedGroupsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdAllowedGroupsRefRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdAllowedGroupsRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedUsersRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdAllowedUsersUserIdRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRouteHandler: RouteHandler<
  typeof patchPrintSharesPrinterShareIdAllowedUsersUserIdMailboxSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedUsersUserIdServiceProvisioningErrorsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedUsersCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedUsersCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdAllowedUsersRefRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdAllowedUsersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdAllowedUsersRefRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdAllowedUsersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdAllowedUsersRefRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdAllowedUsersRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintSharesPrinterShareIdJobsPrintJobIdRouteHandler: RouteHandler<
  typeof patchPrintSharesPrinterShareIdJobsPrintJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdJobsPrintJobIdRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdJobsPrintJobIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRouteHandler: RouteHandler<
  typeof patchPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRouteHandler: RouteHandler<
  typeof putPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdValueRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdDocumentsPrintDocumentIdCreateUploadSessionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdDocumentsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdAbortRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdAbortRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdCancelRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdRedirectRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdRedirectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdStartRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdTasksRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintSharesPrinterShareIdJobsPrintJobIdTasksRouteHandler: RouteHandler<
  typeof postPrintSharesPrinterShareIdJobsPrintJobIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof patchPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof deletePrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdDefinitionRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdTriggerRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdTasksPrintTaskIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsPrintJobIdTasksCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsPrintJobIdTasksCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdJobsCountRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdJobsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesPrinterShareIdPrinterRouteHandler: RouteHandler<
  typeof getPrintSharesPrinterShareIdPrinterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintSharesCountRouteHandler: RouteHandler<
  typeof getPrintSharesCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintTaskDefinitionsRouteHandler: RouteHandler<
  typeof postPrintTaskDefinitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsPrintTaskDefinitionIdRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsPrintTaskDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintTaskDefinitionsPrintTaskDefinitionIdRouteHandler: RouteHandler<
  typeof patchPrintTaskDefinitionsPrintTaskDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintTaskDefinitionsPrintTaskDefinitionIdRouteHandler: RouteHandler<
  typeof deletePrintTaskDefinitionsPrintTaskDefinitionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsPrintTaskDefinitionIdTasksRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPrintTaskDefinitionsPrintTaskDefinitionIdTasksRouteHandler: RouteHandler<
  typeof postPrintTaskDefinitionsPrintTaskDefinitionIdTasksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof patchPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deletePrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRouteHandler: RouteHandler<
  typeof deletePrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdDefinitionRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdDefinitionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdTriggerRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsPrintTaskDefinitionIdTasksPrintTaskIdTriggerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsPrintTaskDefinitionIdTasksCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPrintTaskDefinitionsCountRouteHandler: RouteHandler<
  typeof getPrintTaskDefinitionsCountRoute
> = async (c) => {
  throw new Error('Not implemented')
}
