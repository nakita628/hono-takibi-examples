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
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1DonationsCarbonCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DonationsCarbonStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DonationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DonationsCryptoCalculateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DonationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DonationsShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NonprofitsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1NonprofitsShowRoute, (c) => {
    throw new Error('Not implemented')
  })
