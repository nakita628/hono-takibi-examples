import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1ProjectProvisionOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app.openapi(postV1ProjectProvisionOrganizationRoute, (c) => {
  throw new Error('Not implemented')
})
