import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MspsMspIdLicensesRoute,
  postApiV1MspsMspIdClaimRoute,
  putApiV1MspsMspIdLicensesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsLicensesHandler = app
  .openapi(postApiV1MspsMspIdClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdLicensesRoute, (c) => {
    throw new Error('Not implemented')
  })
