import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrderFormsLagoIdRoute,
  getOrderFormsRoute,
  postOrderFormsLagoIdMarkAsSignedRoute,
  postOrderFormsLagoIdVoidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderFormsHandler = app
  .openapi(getOrderFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrderFormsLagoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderFormsLagoIdMarkAsSignedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrderFormsLagoIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
