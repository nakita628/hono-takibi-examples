import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TokensIdRoute,
  getV1TokensIdRoute,
  getV1TokensRoute,
  patchV1TokensIdRoute,
  postV1TokensRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokensHandler = app
  .openapi(getV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1TokensIdRoute, (c) => {
    throw new Error('Not implemented')
  })
