import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationExportsOrganizationExportGidRoute,
  postOrganizationExportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationExportsHandler = app
  .openapi(postOrganizationExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationExportsOrganizationExportGidRoute, (c) => {
    throw new Error('Not implemented')
  })
