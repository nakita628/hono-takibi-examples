import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessesBusinessIdInvitesRoute,
  deleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
  getBusinessesBusinessIdAdAccountRequestsRoute,
  getBusinessesBusinessIdInvitesRoute,
  patchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
  patchBusinessesInvitesRoute,
  postBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionRoute,
  postBusinessesBusinessIdAdAccountRequestsAcceptRoute,
  postBusinessesBusinessIdAdAccountRequestsRejectRoute,
  postBusinessesBusinessIdInvitesAssetsAccessRoute,
  postBusinessesBusinessIdInvitesRoute,
  postBusinessesBusinessIdPartnersPartnerIdAdAccountRequestRoute,
  postBusinessesBusinessIdRequestsAssetsAccessRoute,
  postBusinessesBusinessIdRmnPartnersPartnerIdInviteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessAccessInviteHandler = app
  .openapi(
    postBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchBusinessesInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdAdAccountRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdAdAccountRequestsAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdAdAccountRequestsRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessesBusinessIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessesBusinessIdInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdInvitesAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdPartnersPartnerIdAdAccountRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postBusinessesBusinessIdRequestsAssetsAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBusinessesBusinessIdRmnPartnersPartnerIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
