import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApiTokensIdRoute,
  getApiV2ApiTokensRoute,
  postApiV2ApiTokensRoute,
  putApiV2ApiTokensIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiTokensHandler = app
  .openapi(getApiV2ApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ApiTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApiTokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
