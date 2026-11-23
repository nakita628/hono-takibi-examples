import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyInstanceCreditSpecificationRoute,
  postActionModifyInstanceCreditSpecificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyInstanceCreditSpecificationHandler = app
  .openapi(getActionModifyInstanceCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyInstanceCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
