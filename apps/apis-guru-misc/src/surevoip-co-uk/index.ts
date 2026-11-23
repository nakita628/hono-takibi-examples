import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCustomersAccountAnnouncementsAnnouncementIdRoute,
  getAnnouncementsRoute,
  getAreacodesRoute,
  getBillingRoute,
  getCallsRoute,
  getChargesRoute,
  getContactsRoute,
  getCustomersAccountAnnouncementsAnnouncementIdRoute,
  getCustomersAccountAnnouncementsRoute,
  getCustomersAccountRoute,
  getCustomersRoute,
  getFaxesRoute,
  getHostedRoute,
  getIpAddressRoute,
  getMobileRoute,
  getNumbersAreacodesRoute,
  getNumbersRoute,
  getPartnersRoute,
  getPortingRoute,
  getRoute,
  getServiceStatusRoute,
  getSipRoute,
  getSmsRoute,
  getSupportIpAddressRoute,
  getSupportServiceStatusRoute,
  getTopupsRoute,
  postAnnouncementsRoute,
  postCallsRoute,
  postChargesRoute,
  postSupportEchoRoute,
} from './routes'
import {
  deleteCustomersAccountAnnouncementsAnnouncementIdRouteHandler,
  getAnnouncementsRouteHandler,
  getAreacodesRouteHandler,
  getBillingRouteHandler,
  getCallsRouteHandler,
  getChargesRouteHandler,
  getContactsRouteHandler,
  getCustomersAccountAnnouncementsAnnouncementIdRouteHandler,
  getCustomersAccountAnnouncementsRouteHandler,
  getCustomersAccountRouteHandler,
  getCustomersRouteHandler,
  getFaxesRouteHandler,
  getHostedRouteHandler,
  getIpAddressRouteHandler,
  getMobileRouteHandler,
  getNumbersAreacodesRouteHandler,
  getNumbersRouteHandler,
  getPartnersRouteHandler,
  getPortingRouteHandler,
  getRouteHandler,
  getServiceStatusRouteHandler,
  getSipRouteHandler,
  getSmsRouteHandler,
  getSupportIpAddressRouteHandler,
  getSupportServiceStatusRouteHandler,
  getTopupsRouteHandler,
  postAnnouncementsRouteHandler,
  postCallsRouteHandler,
  postChargesRouteHandler,
  postSupportEchoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getRoute, getRouteHandler)
  .openapi(getAnnouncementsRoute, getAnnouncementsRouteHandler)
  .openapi(postAnnouncementsRoute, postAnnouncementsRouteHandler)
  .openapi(getAreacodesRoute, getAreacodesRouteHandler)
  .openapi(getBillingRoute, getBillingRouteHandler)
  .openapi(getCallsRoute, getCallsRouteHandler)
  .openapi(postCallsRoute, postCallsRouteHandler)
  .openapi(getChargesRoute, getChargesRouteHandler)
  .openapi(postChargesRoute, postChargesRouteHandler)
  .openapi(getContactsRoute, getContactsRouteHandler)
  .openapi(getCustomersRoute, getCustomersRouteHandler)
  .openapi(getCustomersAccountRoute, getCustomersAccountRouteHandler)
  .openapi(getCustomersAccountAnnouncementsRoute, getCustomersAccountAnnouncementsRouteHandler)
  .openapi(
    deleteCustomersAccountAnnouncementsAnnouncementIdRoute,
    deleteCustomersAccountAnnouncementsAnnouncementIdRouteHandler,
  )
  .openapi(
    getCustomersAccountAnnouncementsAnnouncementIdRoute,
    getCustomersAccountAnnouncementsAnnouncementIdRouteHandler,
  )
  .openapi(getFaxesRoute, getFaxesRouteHandler)
  .openapi(getHostedRoute, getHostedRouteHandler)
  .openapi(getIpAddressRoute, getIpAddressRouteHandler)
  .openapi(getMobileRoute, getMobileRouteHandler)
  .openapi(getNumbersRoute, getNumbersRouteHandler)
  .openapi(getNumbersAreacodesRoute, getNumbersAreacodesRouteHandler)
  .openapi(getPartnersRoute, getPartnersRouteHandler)
  .openapi(getPortingRoute, getPortingRouteHandler)
  .openapi(getServiceStatusRoute, getServiceStatusRouteHandler)
  .openapi(getSipRoute, getSipRouteHandler)
  .openapi(getSmsRoute, getSmsRouteHandler)
  .openapi(postSupportEchoRoute, postSupportEchoRouteHandler)
  .openapi(getSupportIpAddressRoute, getSupportIpAddressRouteHandler)
  .openapi(getSupportServiceStatusRoute, getSupportServiceStatusRouteHandler)
  .openapi(getTopupsRoute, getTopupsRouteHandler)

export default app
