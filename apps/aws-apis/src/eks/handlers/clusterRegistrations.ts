import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteClusterRegistrationsNameRoute, postClusterRegistrationsRoute } from '../routes'

const app = new OpenAPIHono()

export const clusterRegistrationsHandler = app
  .openapi(deleteClusterRegistrationsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postClusterRegistrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
