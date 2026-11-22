import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailnetTailnetRoute,
  getOrganizationsOrganizationTailnetsRoute,
  postOrganizationsOrganizationTailnetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(deleteTailnetTailnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationTailnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrganizationTailnetsRoute, (c) => {
    throw new Error('Not implemented')
  })
