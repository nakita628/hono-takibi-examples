import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postApiLoginRoute,
  postApiLogoutRoute,
  postApiRegisterRoute,
  postApiRegisterWoocommerceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(postApiLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiRegisterWoocommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
