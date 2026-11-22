import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MspsMspIdAdminsAdminIdRoute,
  getApiV1MspsMspIdAdminsAdminIdRoute,
  getApiV1MspsMspIdAdminsRoute,
  getApiV1MspsMspIdRoute,
  putApiV1MspsMspIdAdminsAdminIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsAdminsHandler = app
  .openapi(getApiV1MspsMspIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdAdminsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdAdminsAdminIdRoute, (c) => {
    throw new Error('Not implemented')
  })
