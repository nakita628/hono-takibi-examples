import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserCompanyUserCompanyIDNameRoute } from '../routes'

const app = new OpenAPIHono()

export const nameHandler = app.openapi(getUserCompanyUserCompanyIDNameRoute, (c) => {
  throw new Error('Not implemented')
})
