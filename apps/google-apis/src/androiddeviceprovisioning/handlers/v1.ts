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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersMetadataOwnerIdDevicesDeviceIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PartnersPartnerIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesClaimAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesFindByIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesFindByOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesUnclaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesUnclaimAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PartnersPartnerIdDevicesUpdateMetadataAsyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesApplyConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesRemoveConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentDevicesUnclaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentDpcsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
