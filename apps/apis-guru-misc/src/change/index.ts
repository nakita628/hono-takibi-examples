import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1DonationsCarbonCalculateRoute,
  getApiV1DonationsCarbonStatsRoute,
  getApiV1DonationsCryptoCalculateRoute,
  getApiV1DonationsIndexRoute,
  getApiV1DonationsShowRoute,
  getApiV1NonprofitsListRoute,
  getApiV1NonprofitsShowRoute,
  postApiV1DonationsCreateRoute,
} from './routes'
import {
  getApiV1DonationsCarbonCalculateRouteHandler,
  getApiV1DonationsCarbonStatsRouteHandler,
  getApiV1DonationsCryptoCalculateRouteHandler,
  getApiV1DonationsIndexRouteHandler,
  getApiV1DonationsShowRouteHandler,
  getApiV1NonprofitsListRouteHandler,
  getApiV1NonprofitsShowRouteHandler,
  postApiV1DonationsCreateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1DonationsCarbonCalculateRoute, getApiV1DonationsCarbonCalculateRouteHandler)
  .openapi(getApiV1DonationsCarbonStatsRoute, getApiV1DonationsCarbonStatsRouteHandler)
  .openapi(postApiV1DonationsCreateRoute, postApiV1DonationsCreateRouteHandler)
  .openapi(getApiV1DonationsCryptoCalculateRoute, getApiV1DonationsCryptoCalculateRouteHandler)
  .openapi(getApiV1DonationsIndexRoute, getApiV1DonationsIndexRouteHandler)
  .openapi(getApiV1DonationsShowRoute, getApiV1DonationsShowRouteHandler)
  .openapi(getApiV1NonprofitsListRoute, getApiV1NonprofitsListRouteHandler)
  .openapi(getApiV1NonprofitsShowRoute, getApiV1NonprofitsShowRouteHandler)

export default app
