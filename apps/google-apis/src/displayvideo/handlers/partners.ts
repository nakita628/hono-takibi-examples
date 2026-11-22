import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRoute,
  deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2PartnersPartnerIdChannelsChannelIdSitesRoute,
  getV2PartnersPartnerIdChannelsRoute,
  getV2PartnersPartnerIdRoute,
  getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
  getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
  getV2PartnersRoute,
  patchV2PartnersPartnerIdChannelsChannelIdRoute,
  postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRoute,
  postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRoute,
  postV2PartnersPartnerIdChannelsRoute,
  postV2PartnersPartnerIdEditAssignedTargetingOptionsRoute,
  postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnersHandler = app
  .openapi(getV2PartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2PartnersPartnerIdChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdChannelsChannelIdSitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PartnersPartnerIdChannelsChannelIdSitesUrlOrAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdChannelsChannelIdSitesBulkEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdChannelsChannelIdSitesReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2PartnersPartnerIdTargetingTypesTargetingTypeAssignedTargetingOptionsAssignedTargetingOptionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2PartnersPartnerIdEditAssignedTargetingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
