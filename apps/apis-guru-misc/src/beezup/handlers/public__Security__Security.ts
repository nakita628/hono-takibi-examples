import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV2PublicSecurityLoginRoute,
  postV2PublicSecurityLostpasswordRoute,
  postV2PublicSecurityRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const public__Security__SecurityHandler = app
  .openapi(postV2PublicSecurityLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PublicSecurityLostpasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PublicSecurityRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
