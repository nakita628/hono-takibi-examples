import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1CustomersRoute,
  getV1NameRoute,
  getV1ParentConfigurationsRoute,
  getV1ParentCustomersRoute,
  getV1ParentDevicesRoute,
  getV1ParentDpcsRoute,
  getV1ParentVendorsRoute,
  getV1PartnersPartnerIdCustomersRoute,
  patchV1NameRoute,
  postV1ParentConfigurationsRoute,
  postV1ParentCustomersRoute,
  postV1ParentDevicesApplyConfigurationRoute,
  postV1ParentDevicesRemoveConfigurationRoute,
  postV1ParentDevicesUnclaimRoute,
  postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataRoute,
  postV1PartnersPartnerIdDevicesClaimAsyncRoute,
  postV1PartnersPartnerIdDevicesClaimRoute,
  postV1PartnersPartnerIdDevicesFindByIdentifierRoute,
  postV1PartnersPartnerIdDevicesFindByOwnerRoute,
  postV1PartnersPartnerIdDevicesUnclaimAsyncRoute,
  postV1PartnersPartnerIdDevicesUnclaimRoute,
  postV1PartnersPartnerIdDevicesUpdateMetadataAsyncRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1CustomersRouteHandler,
  getV1NameRouteHandler,
  getV1ParentConfigurationsRouteHandler,
  getV1ParentCustomersRouteHandler,
  getV1ParentDevicesRouteHandler,
  getV1ParentDpcsRouteHandler,
  getV1ParentVendorsRouteHandler,
  getV1PartnersPartnerIdCustomersRouteHandler,
  patchV1NameRouteHandler,
  postV1ParentConfigurationsRouteHandler,
  postV1ParentCustomersRouteHandler,
  postV1ParentDevicesApplyConfigurationRouteHandler,
  postV1ParentDevicesRemoveConfigurationRouteHandler,
  postV1ParentDevicesUnclaimRouteHandler,
  postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataRouteHandler,
  postV1PartnersPartnerIdDevicesClaimAsyncRouteHandler,
  postV1PartnersPartnerIdDevicesClaimRouteHandler,
  postV1PartnersPartnerIdDevicesFindByIdentifierRouteHandler,
  postV1PartnersPartnerIdDevicesFindByOwnerRouteHandler,
  postV1PartnersPartnerIdDevicesUnclaimAsyncRouteHandler,
  postV1PartnersPartnerIdDevicesUnclaimRouteHandler,
  postV1PartnersPartnerIdDevicesUpdateMetadataAsyncRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1CustomersRoute, getV1CustomersRouteHandler)
  .openapi(
    postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataRoute,
    postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataRouteHandler,
  )
  .openapi(getV1PartnersPartnerIdCustomersRoute, getV1PartnersPartnerIdCustomersRouteHandler)
  .openapi(
    postV1PartnersPartnerIdDevicesClaimRoute,
    postV1PartnersPartnerIdDevicesClaimRouteHandler,
  )
  .openapi(
    postV1PartnersPartnerIdDevicesClaimAsyncRoute,
    postV1PartnersPartnerIdDevicesClaimAsyncRouteHandler,
  )
  .openapi(
    postV1PartnersPartnerIdDevicesFindByIdentifierRoute,
    postV1PartnersPartnerIdDevicesFindByIdentifierRouteHandler,
  )
  .openapi(
    postV1PartnersPartnerIdDevicesFindByOwnerRoute,
    postV1PartnersPartnerIdDevicesFindByOwnerRouteHandler,
  )
  .openapi(
    postV1PartnersPartnerIdDevicesUnclaimRoute,
    postV1PartnersPartnerIdDevicesUnclaimRouteHandler,
  )
  .openapi(
    postV1PartnersPartnerIdDevicesUnclaimAsyncRoute,
    postV1PartnersPartnerIdDevicesUnclaimAsyncRouteHandler,
  )
  .openapi(
    postV1PartnersPartnerIdDevicesUpdateMetadataAsyncRoute,
    postV1PartnersPartnerIdDevicesUpdateMetadataAsyncRouteHandler,
  )
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1ParentConfigurationsRoute, getV1ParentConfigurationsRouteHandler)
  .openapi(postV1ParentConfigurationsRoute, postV1ParentConfigurationsRouteHandler)
  .openapi(getV1ParentCustomersRoute, getV1ParentCustomersRouteHandler)
  .openapi(postV1ParentCustomersRoute, postV1ParentCustomersRouteHandler)
  .openapi(getV1ParentDevicesRoute, getV1ParentDevicesRouteHandler)
  .openapi(
    postV1ParentDevicesApplyConfigurationRoute,
    postV1ParentDevicesApplyConfigurationRouteHandler,
  )
  .openapi(
    postV1ParentDevicesRemoveConfigurationRoute,
    postV1ParentDevicesRemoveConfigurationRouteHandler,
  )
  .openapi(postV1ParentDevicesUnclaimRoute, postV1ParentDevicesUnclaimRouteHandler)
  .openapi(getV1ParentDpcsRoute, getV1ParentDpcsRouteHandler)
  .openapi(getV1ParentVendorsRoute, getV1ParentVendorsRouteHandler)

export default app
