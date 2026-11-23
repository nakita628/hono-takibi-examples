import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBlockIdRoute,
  getBlockIdTransactionIndexRoute,
  getBlockIdTransactionRoute,
  getBlockRoute,
  optionsBlockIdRoute,
  optionsBlockIdTransactionIndexRoute,
  optionsBlockIdTransactionRoute,
  optionsBlockRoute,
} from '../routes'

const app = new OpenAPIHono()

export const blockHandler = app
  .openapi(getBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockIdTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsBlockIdTransactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBlockIdTransactionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsBlockIdTransactionIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
