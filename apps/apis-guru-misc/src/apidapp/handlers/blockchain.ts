import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBlockchainIdRoute,
  getBlockchainRoute,
  optionsBlockchainIdRoute,
  optionsBlockchainRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blockchainHandler = app
  .openapi(getBlockchainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsBlockchainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockchainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsBlockchainIdRoute, (c) => {
    throw new Error('Not implemented')
  })
