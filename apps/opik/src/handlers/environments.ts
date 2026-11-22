import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PrivateEnvironmentsIdRoute,
  getV1PrivateEnvironmentsRoute,
  patchV1PrivateEnvironmentsIdRoute,
  postV1PrivateEnvironmentsDeleteRoute,
  postV1PrivateEnvironmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(getV1PrivateEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateEnvironmentsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrivateEnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1PrivateEnvironmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
