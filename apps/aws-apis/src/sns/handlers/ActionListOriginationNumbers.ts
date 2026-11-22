import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListOriginationNumbersRoute,
  postActionListOriginationNumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionListOriginationNumbersHandler = app
  .openapi(getActionListOriginationNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListOriginationNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
