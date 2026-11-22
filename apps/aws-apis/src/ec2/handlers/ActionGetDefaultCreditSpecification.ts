import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetDefaultCreditSpecificationRoute,
  postActionGetDefaultCreditSpecificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetDefaultCreditSpecificationHandler = app
  .openapi(getActionGetDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
