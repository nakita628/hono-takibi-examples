import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ServicePointsCarrierCodeCountryCodeServicePointIdRoute,
  postV1ServicePointsListRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePointsHandler = app
  .openapi(postV1ServicePointsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ServicePointsCarrierCodeCountryCodeServicePointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
