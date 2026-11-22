import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessesBusinessIdAssetGroupsRoute,
  deleteBusinessesBusinessIdMembersAssetsAccessRoute,
  deleteBusinessesBusinessIdPartnersAssetsRoute,
  getBusinessesBusinessIdAssetsAssetIdMembersRoute,
  getBusinessesBusinessIdAssetsAssetIdPartnersRoute,
  getBusinessesBusinessIdAssetsRoute,
  getBusinessesBusinessIdMembersMemberIdAssetsRoute,
  getBusinessesBusinessIdPartnersPartnerIdAssetsRoute,
  patchBusinessesBusinessIdAssetGroupsRoute,
  patchBusinessesBusinessIdMembersAssetsAccessRoute,
  patchBusinessesBusinessIdPartnersAssetsRoute,
  postBusinessesBusinessIdAssetGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessAccessAssetsHandler = app
  .openapi(postBusinessesBusinessIdAssetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdAssetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdAssetGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAssetsAssetIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAssetsAssetIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdMembersAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdMembersAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdMembersMemberIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessesBusinessIdPartnersAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdPartnersAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdPartnersPartnerIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
