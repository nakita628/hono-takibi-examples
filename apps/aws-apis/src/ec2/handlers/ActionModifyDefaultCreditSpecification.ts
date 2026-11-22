import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyDefaultCreditSpecificationRoute,
  postActionModifyDefaultCreditSpecificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyDefaultCreditSpecificationHandler = app
  .openapi(getActionModifyDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyDefaultCreditSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
