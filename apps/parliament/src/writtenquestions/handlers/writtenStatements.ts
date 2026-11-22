import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiWrittenstatementsStatementsDateUinRoute,
  getApiWrittenstatementsStatementsIdRoute,
  getApiWrittenstatementsStatementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const writtenStatementsHandler = app
  .openapi(getApiWrittenstatementsStatementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenstatementsStatementsDateUinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiWrittenstatementsStatementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
