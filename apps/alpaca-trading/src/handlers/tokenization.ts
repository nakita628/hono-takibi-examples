import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2TokenizationRequestsByClientRequestIdRoute,
  getV2TokenizationRequestsRoute,
  getV2TokenizationRequestsTokenizationRequestIdRoute,
  postV2TokenizationMintRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tokenizationHandler = app
  .openapi(postV2TokenizationMintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TokenizationRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TokenizationRequestsTokenizationRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TokenizationRequestsByClientRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
