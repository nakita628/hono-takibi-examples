import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationProjectsProjectIdHostedToolPermissionsRoute,
  postOrganizationProjectsProjectIdHostedToolPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hostedToolsHandler = app
  .openapi(getOrganizationProjectsProjectIdHostedToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationProjectsProjectIdHostedToolPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
