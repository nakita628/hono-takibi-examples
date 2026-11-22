import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1ReusableRequestsReusableRequestKeyRoute,
  getV1ReusableRequestsReusableRequestKeyRoute,
  getV1ReusableRequestsRoute,
  putV1ReusableRequestsReusableRequestKeyRoute,
  putV1ReusableRequestsReusableRequestKeyUnarchiveRoute,
  putV1ReusableRequestsReusableRequestKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reusableRequestsHandler = app
  .openapi(putV1ReusableRequestsReusableRequestKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReusableRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReusableRequestsReusableRequestKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReusableRequestsReusableRequestKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReusableRequestsReusableRequestKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReusableRequestsReusableRequestKeyUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
