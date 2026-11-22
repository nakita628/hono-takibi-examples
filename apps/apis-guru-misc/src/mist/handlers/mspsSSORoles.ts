import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1MspsMspIdSsorolesSsoroleIdRoute,
  getApiV1MspsMspIdSsorolesRoute,
  postApiV1MspsMspIdSsorolesRoute,
  putApiV1MspsMspIdSsorolesSsoroleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsSSORolesHandler = app
  .openapi(getApiV1MspsMspIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdSsorolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1MspsMspIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdSsorolesSsoroleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
