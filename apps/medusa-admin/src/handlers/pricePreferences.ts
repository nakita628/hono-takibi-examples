import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminPricePreferencesIdRoute,
  getAdminPricePreferencesIdRoute,
  getAdminPricePreferencesRoute,
  postAdminPricePreferencesIdRoute,
  postAdminPricePreferencesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pricePreferencesHandler = app
  .openapi(getAdminPricePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPricePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPricePreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPricePreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPricePreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
