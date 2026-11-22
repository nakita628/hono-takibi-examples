import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RequisitionsIdIndexRoute,
  getApiV2RequisitionsIdIndexRoute,
  getApiV2RequisitionsIndexRoute,
  postApiV2RequisitionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requisitionsHandler = app
  .openapi(getApiV2RequisitionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RequisitionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RequisitionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RequisitionsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
