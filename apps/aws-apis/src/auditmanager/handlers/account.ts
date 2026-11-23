import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountOrganizationAdminAccountRoute,
  getAccountStatusRoute,
  postAccountDeregisterAccountRoute,
  postAccountDeregisterOrganizationAdminAccountRoute,
  postAccountRegisterAccountRoute,
  postAccountRegisterOrganizationAdminAccountRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountHandler = app
  .openapi(postAccountDeregisterAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountDeregisterOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRegisterAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountRegisterOrganizationAdminAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
