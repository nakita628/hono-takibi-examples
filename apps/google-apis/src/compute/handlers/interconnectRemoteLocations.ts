import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectGlobalInterconnectRemoteLocationsInterconnectRemoteLocationRoute,
  getProjectsProjectGlobalInterconnectRemoteLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const interconnectRemoteLocationsHandler = app
  .openapi(getProjectsProjectGlobalInterconnectRemoteLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProjectsProjectGlobalInterconnectRemoteLocationsInterconnectRemoteLocationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
