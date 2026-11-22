import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2TokensIdRoute,
  getApiV2TokensIdRoute,
  getApiV2TokensRoute,
  patchApiV2TokensIdRoute,
  postApiV2TokensIdResetRoute,
  postApiV2TokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessTokensHandler = app
  .openapi(getApiV2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TokensIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
