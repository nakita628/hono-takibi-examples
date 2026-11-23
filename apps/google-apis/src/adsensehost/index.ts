import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
  deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  getAccountsAccountIdAdclientsAdClientIdRoute,
  getAccountsAccountIdAdclientsRoute,
  getAccountsAccountIdReportsRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsRoute,
  getAdclientsAdClientIdRoute,
  getAdclientsAdClientIdUrlchannelsRoute,
  getAdclientsRoute,
  getAssociationsessionsStartRoute,
  getAssociationsessionsVerifyRoute,
  getReportsRoute,
  patchAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  patchAdclientsAdClientIdCustomchannelsRoute,
  postAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  postAdclientsAdClientIdCustomchannelsRoute,
  postAdclientsAdClientIdUrlchannelsRoute,
  putAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
  putAdclientsAdClientIdCustomchannelsRoute,
} from './routes'
import {
  deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  getAccountsAccountIdAdclientsAdClientIdRouteHandler,
  getAccountsAccountIdAdclientsRouteHandler,
  getAccountsAccountIdReportsRouteHandler,
  getAccountsAccountIdRouteHandler,
  getAccountsRouteHandler,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  getAdclientsAdClientIdCustomchannelsRouteHandler,
  getAdclientsAdClientIdRouteHandler,
  getAdclientsAdClientIdUrlchannelsRouteHandler,
  getAdclientsRouteHandler,
  getAssociationsessionsStartRouteHandler,
  getAssociationsessionsVerifyRouteHandler,
  getReportsRouteHandler,
  patchAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  patchAdclientsAdClientIdCustomchannelsRouteHandler,
  postAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  postAdclientsAdClientIdCustomchannelsRouteHandler,
  postAdclientsAdClientIdUrlchannelsRouteHandler,
  putAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  putAdclientsAdClientIdCustomchannelsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsRoute, getAccountsRouteHandler)
  .openapi(getAccountsAccountIdRoute, getAccountsAccountIdRouteHandler)
  .openapi(getAccountsAccountIdAdclientsRoute, getAccountsAccountIdAdclientsRouteHandler)
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdRoute,
    getAccountsAccountIdAdclientsAdClientIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  )
  .openapi(
    patchAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
    patchAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  )
  .openapi(
    postAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
    postAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  )
  .openapi(
    putAccountsAccountIdAdclientsAdClientIdAdunitsRoute,
    putAccountsAccountIdAdclientsAdClientIdAdunitsRouteHandler,
  )
  .openapi(
    deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
    deleteAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdRouteHandler,
  )
  .openapi(
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
    getAccountsAccountIdAdclientsAdClientIdAdunitsAdUnitIdAdcodeRouteHandler,
  )
  .openapi(getAccountsAccountIdReportsRoute, getAccountsAccountIdReportsRouteHandler)
  .openapi(getAdclientsRoute, getAdclientsRouteHandler)
  .openapi(getAdclientsAdClientIdRoute, getAdclientsAdClientIdRouteHandler)
  .openapi(
    getAdclientsAdClientIdCustomchannelsRoute,
    getAdclientsAdClientIdCustomchannelsRouteHandler,
  )
  .openapi(
    patchAdclientsAdClientIdCustomchannelsRoute,
    patchAdclientsAdClientIdCustomchannelsRouteHandler,
  )
  .openapi(
    postAdclientsAdClientIdCustomchannelsRoute,
    postAdclientsAdClientIdCustomchannelsRouteHandler,
  )
  .openapi(
    putAdclientsAdClientIdCustomchannelsRoute,
    putAdclientsAdClientIdCustomchannelsRouteHandler,
  )
  .openapi(
    deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
    deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  )
  .openapi(
    getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
    getAdclientsAdClientIdCustomchannelsCustomChannelIdRouteHandler,
  )
  .openapi(getAdclientsAdClientIdUrlchannelsRoute, getAdclientsAdClientIdUrlchannelsRouteHandler)
  .openapi(postAdclientsAdClientIdUrlchannelsRoute, postAdclientsAdClientIdUrlchannelsRouteHandler)
  .openapi(
    deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute,
    deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRouteHandler,
  )
  .openapi(getAssociationsessionsStartRoute, getAssociationsessionsStartRouteHandler)
  .openapi(getAssociationsessionsVerifyRoute, getAssociationsessionsVerifyRouteHandler)
  .openapi(getReportsRoute, getReportsRouteHandler)

export default app
