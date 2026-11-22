import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminTaxRegionsIdRoute,
  getAdminTaxRegionsIdRoute,
  getAdminTaxRegionsRoute,
  postAdminTaxRegionsIdRoute,
  postAdminTaxRegionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxRegionsHandler = app
  .openapi(getAdminTaxRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTaxRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
