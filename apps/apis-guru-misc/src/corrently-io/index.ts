import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAlternativeEaseeLastSessionsRoute,
  getAlternativeOcppLastSessionsRoute,
  getAlternativeOpenmeterActivitiesRoute,
  getAlternativeOpenmeterMetersRoute,
  getAlternativeOpenmeterReadingsRoute,
  getGsiBestHourRoute,
  getGsiDispatchRoute,
  getGsiMarketdataRoute,
  getGsiPredictionRoute,
  getMeteringReadingRoute,
  getQuittungZugferdRoute,
  getStromkontoBalancesRoute,
  getStromkontoChoicesRoute,
  getTariffComponentsRoute,
  getTariffSlph0Route,
  getWimStatusRoute,
  postMeteringReadingRoute,
  postQuittungCommitRoute,
  postQuittungCreateRoute,
  postQuittungPrepareRoute,
  postQuittungTsedataRoute,
  postQuittungTseRoute,
  postQuittungTsesignatureRoute,
  postStromkontoLoginRoute,
  postStromkontoPrepareTransactionRoute,
  postStromkontoRegisterRoute,
} from './routes'
import {
  getAlternativeEaseeLastSessionsRouteHandler,
  getAlternativeOcppLastSessionsRouteHandler,
  getAlternativeOpenmeterActivitiesRouteHandler,
  getAlternativeOpenmeterMetersRouteHandler,
  getAlternativeOpenmeterReadingsRouteHandler,
  getGsiBestHourRouteHandler,
  getGsiDispatchRouteHandler,
  getGsiMarketdataRouteHandler,
  getGsiPredictionRouteHandler,
  getMeteringReadingRouteHandler,
  getQuittungZugferdRouteHandler,
  getStromkontoBalancesRouteHandler,
  getStromkontoChoicesRouteHandler,
  getTariffComponentsRouteHandler,
  getTariffSlph0RouteHandler,
  getWimStatusRouteHandler,
  postMeteringReadingRouteHandler,
  postQuittungCommitRouteHandler,
  postQuittungCreateRouteHandler,
  postQuittungPrepareRouteHandler,
  postQuittungTsedataRouteHandler,
  postQuittungTseRouteHandler,
  postQuittungTsesignatureRouteHandler,
  postStromkontoLoginRouteHandler,
  postStromkontoPrepareTransactionRouteHandler,
  postStromkontoRegisterRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAlternativeEaseeLastSessionsRoute, getAlternativeEaseeLastSessionsRouteHandler)
  .openapi(getAlternativeOcppLastSessionsRoute, getAlternativeOcppLastSessionsRouteHandler)
  .openapi(getAlternativeOpenmeterActivitiesRoute, getAlternativeOpenmeterActivitiesRouteHandler)
  .openapi(getAlternativeOpenmeterMetersRoute, getAlternativeOpenmeterMetersRouteHandler)
  .openapi(getAlternativeOpenmeterReadingsRoute, getAlternativeOpenmeterReadingsRouteHandler)
  .openapi(getGsiBestHourRoute, getGsiBestHourRouteHandler)
  .openapi(getGsiDispatchRoute, getGsiDispatchRouteHandler)
  .openapi(getGsiMarketdataRoute, getGsiMarketdataRouteHandler)
  .openapi(getGsiPredictionRoute, getGsiPredictionRouteHandler)
  .openapi(getMeteringReadingRoute, getMeteringReadingRouteHandler)
  .openapi(postMeteringReadingRoute, postMeteringReadingRouteHandler)
  .openapi(postQuittungCommitRoute, postQuittungCommitRouteHandler)
  .openapi(postQuittungCreateRoute, postQuittungCreateRouteHandler)
  .openapi(postQuittungPrepareRoute, postQuittungPrepareRouteHandler)
  .openapi(postQuittungTseRoute, postQuittungTseRouteHandler)
  .openapi(postQuittungTsedataRoute, postQuittungTsedataRouteHandler)
  .openapi(postQuittungTsesignatureRoute, postQuittungTsesignatureRouteHandler)
  .openapi(getQuittungZugferdRoute, getQuittungZugferdRouteHandler)
  .openapi(getStromkontoBalancesRoute, getStromkontoBalancesRouteHandler)
  .openapi(getStromkontoChoicesRoute, getStromkontoChoicesRouteHandler)
  .openapi(postStromkontoLoginRoute, postStromkontoLoginRouteHandler)
  .openapi(postStromkontoPrepareTransactionRoute, postStromkontoPrepareTransactionRouteHandler)
  .openapi(postStromkontoRegisterRoute, postStromkontoRegisterRouteHandler)
  .openapi(getTariffComponentsRoute, getTariffComponentsRouteHandler)
  .openapi(getTariffSlph0Route, getTariffSlph0RouteHandler)
  .openapi(getWimStatusRoute, getWimStatusRouteHandler)

export default app
