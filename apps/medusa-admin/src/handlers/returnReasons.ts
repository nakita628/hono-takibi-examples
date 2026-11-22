import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminReturnReasonsIdRoute,
  getAdminReturnReasonsIdRoute,
  getAdminReturnReasonsRoute,
  postAdminReturnReasonsIdRoute,
  postAdminReturnReasonsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const returnReasonsHandler = app
  .openapi(getAdminReturnReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
