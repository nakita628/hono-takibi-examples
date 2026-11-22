import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSolutionsBookingCurrenciesBookingCurrencyIdRoute,
  getSolutionsBookingCurrenciesBookingCurrencyIdRoute,
  getSolutionsBookingCurrenciesCountRoute,
  getSolutionsBookingCurrenciesRoute,
  patchSolutionsBookingCurrenciesBookingCurrencyIdRoute,
  postSolutionsBookingCurrenciesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const solutionsBookingCurrencyHandler = app
  .openapi(getSolutionsBookingCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSolutionsBookingCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingCurrenciesBookingCurrencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSolutionsBookingCurrenciesBookingCurrencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSolutionsBookingCurrenciesBookingCurrencyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSolutionsBookingCurrenciesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
