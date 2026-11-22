import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteConnectApplicationsIdRoute,
  getConnectApplicationsIdRoute,
  getConnectApplicationsRoute,
  postConnectApplicationsRoute,
  putConnectApplicationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(getConnectApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConnectApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConnectApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConnectApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteConnectApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
