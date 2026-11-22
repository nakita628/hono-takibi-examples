import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestApi3InstanceLicenseRoute } from '../routes'

const app = new OpenAPIHono()

export const instanceInformationHandler = app.openapi(getRestApi3InstanceLicenseRoute, (c) => {
  throw new Error('Not implemented')
})
