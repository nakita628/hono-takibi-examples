import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountNumbersAccountNumberIdRoute,
  getAccountNumbersRoute,
  patchAccountNumbersAccountNumberIdRoute,
  postAccountNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountNumbersHandler = app
  .openapi(getAccountNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountNumbersAccountNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountNumbersAccountNumberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
