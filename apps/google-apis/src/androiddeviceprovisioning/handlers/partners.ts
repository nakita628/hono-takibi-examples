import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentCustomersRoute,
  getV1ParentVendorsRoute,
  getV1PartnersPartnerIdCustomersRoute,
  postV1ParentCustomersRoute,
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

export const partnersHandler = app
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
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ParentCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentVendorsRoute, (c) => {
    throw new Error('Not implemented')
  })
