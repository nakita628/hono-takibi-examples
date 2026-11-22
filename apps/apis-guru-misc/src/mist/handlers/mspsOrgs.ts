import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MspsMspIdOrgsOrgIdRoute,
  getApiV1MspsMspIdOrgsRoute,
  getApiV1MspsMspIdOrgsSearchRoute,
  postApiV1MspsMspIdOrgsRoute,
  putApiV1MspsMspIdOrgsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mspsOrgsHandler = app
  .openapi(getApiV1MspsMspIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1MspsMspIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MspsMspIdOrgsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrgsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MspsMspIdOrgsOrgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
