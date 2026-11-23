import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDefaultCreditSpecificationRoute,
  postActionModifyDefaultCreditSpecificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyDefaultCreditSpecificationHandler = app
  .openapi(getActionModifyDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
