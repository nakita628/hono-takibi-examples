import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectGlobalInterconnectLocationsInterconnectLocationRoute,
  getProjectsProjectGlobalInterconnectLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interconnectLocationsHandler = app
  .openapi(getProjectsProjectGlobalInterconnectLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGlobalInterconnectLocationsInterconnectLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
