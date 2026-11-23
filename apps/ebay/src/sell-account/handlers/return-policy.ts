import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReturnPolicyReturnPolicyIdRoute,
  getReturnPolicyGetByPolicyNameRoute,
  getReturnPolicyReturnPolicyIdRoute,
  getReturnPolicyRoute,
  postReturnPolicyRoute,
  putReturnPolicyReturnPolicyIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const returnPolicyHandler = app
  .openapi(getReturnPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReturnPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReturnPolicyGetByPolicyNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReturnPolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReturnPolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReturnPolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
