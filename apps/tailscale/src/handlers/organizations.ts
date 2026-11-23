import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationTailnetsRoute,
  postOrganizationsOrganizationTailnetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsOrganizationTailnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationTailnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
