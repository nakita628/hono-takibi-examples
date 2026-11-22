import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrganizationsIdFirmwareSetsRoute, getProjectsIdFirmwareSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const firmwareSetsHandler = app
  .openapi(getOrganizationsIdFirmwareSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdFirmwareSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
