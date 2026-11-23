import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteShuttleSystemsShuttleSystemIdRoute,
  getShuttleSystemsRoute,
  getShuttleSystemsShuttleSystemIdRoute,
  postShuttleSystemsRoute,
  postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute,
  putShuttleSystemsShuttleSystemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const shuttleSystemsHandler = app
  .openapi(getShuttleSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSystemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShuttleSystemsShuttleSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putShuttleSystemsShuttleSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteShuttleSystemsShuttleSystemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postShuttleSystemsShuttleSystemIdIssueRegistrationTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
