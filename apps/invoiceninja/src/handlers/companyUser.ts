import { OpenAPIHono } from '@hono/zod-openapi'
import { postApiV1CompanyUsersRoute } from '../routes'

const app = new OpenAPIHono()

export const companyUserHandler = app.openapi(postApiV1CompanyUsersRoute, (c) => {
  throw new Error('Not implemented')
})
