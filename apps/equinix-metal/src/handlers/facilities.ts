import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFacilitiesRoute,
  getOrganizationsIdFacilitiesRoute,
  getProjectsIdFacilitiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const facilitiesHandler = app
  .openapi(getFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsIdFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsIdFacilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
