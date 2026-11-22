import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1UserMatchersIdRoute,
  getApi1UserMatchersIdRoute,
  getApi1UserMatchersRoute,
  postApi1UserMatchersApplyRoute,
  postApi1UserMatchersRoute,
  putApi1UserMatchersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userMatchersHandler = app
  .openapi(getApi1UserMatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1UserMatchersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1UserMatchersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1UserMatchersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1UserMatchersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1UserMatchersApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
