import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAs2StationsIdRoute,
  getAs2StationsIdRoute,
  getAs2StationsRoute,
  patchAs2StationsIdRoute,
  postAs2StationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const as2StationsHandler = app
  .openapi(getAs2StationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAs2StationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAs2StationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAs2StationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAs2StationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
