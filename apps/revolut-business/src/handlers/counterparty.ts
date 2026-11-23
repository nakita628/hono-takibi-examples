import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCounterpartyCounterpartyIdRoute,
  getCounterpartyCounterpartyIdRoute,
  postCounterpartyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const counterpartyHandler = app
  .openapi(postCounterpartyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCounterpartyCounterpartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCounterpartyCounterpartyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
