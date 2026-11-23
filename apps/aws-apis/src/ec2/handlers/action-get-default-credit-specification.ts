import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetDefaultCreditSpecificationRoute,
  postActionGetDefaultCreditSpecificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetDefaultCreditSpecificationHandler = app
  .openapi(getActionGetDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
