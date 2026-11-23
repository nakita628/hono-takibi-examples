import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDynamicOffersRoute,
  getGrantAccountsIdRoute,
  getGrantOffersIdRoute,
  getGrantOffersRoute,
  getGrantsGrantIdDisbursementsDisbursementIdRoute,
  getGrantsGrantIdDisbursementsRoute,
  getGrantsGrantIdRoute,
  getGrantsRoute,
  patchGrantsGrantIdDisbursementsDisbursementIdRoute,
  postDynamicOffersIdCalculateRoute,
  postDynamicOffersIdGrantOfferRoute,
  postGrantsRoute,
} from './routes'
import {
  getDynamicOffersRouteHandler,
  getGrantAccountsIdRouteHandler,
  getGrantOffersIdRouteHandler,
  getGrantOffersRouteHandler,
  getGrantsGrantIdDisbursementsDisbursementIdRouteHandler,
  getGrantsGrantIdDisbursementsRouteHandler,
  getGrantsGrantIdRouteHandler,
  getGrantsRouteHandler,
  patchGrantsGrantIdDisbursementsDisbursementIdRouteHandler,
  postDynamicOffersIdCalculateRouteHandler,
  postDynamicOffersIdGrantOfferRouteHandler,
  postGrantsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getDynamicOffersRoute, getDynamicOffersRouteHandler)
  .openapi(postDynamicOffersIdCalculateRoute, postDynamicOffersIdCalculateRouteHandler)
  .openapi(postDynamicOffersIdGrantOfferRoute, postDynamicOffersIdGrantOfferRouteHandler)
  .openapi(getGrantAccountsIdRoute, getGrantAccountsIdRouteHandler)
  .openapi(getGrantOffersRoute, getGrantOffersRouteHandler)
  .openapi(getGrantOffersIdRoute, getGrantOffersIdRouteHandler)
  .openapi(getGrantsRoute, getGrantsRouteHandler)
  .openapi(postGrantsRoute, postGrantsRouteHandler)
  .openapi(getGrantsGrantIdRoute, getGrantsGrantIdRouteHandler)
  .openapi(getGrantsGrantIdDisbursementsRoute, getGrantsGrantIdDisbursementsRouteHandler)
  .openapi(
    getGrantsGrantIdDisbursementsDisbursementIdRoute,
    getGrantsGrantIdDisbursementsDisbursementIdRouteHandler,
  )
  .openapi(
    patchGrantsGrantIdDisbursementsDisbursementIdRoute,
    patchGrantsGrantIdDisbursementsDisbursementIdRouteHandler,
  )

export default app
