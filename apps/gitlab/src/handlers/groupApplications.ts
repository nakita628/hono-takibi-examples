import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdApplicationsApplicationIdRoute,
  getApiV4GroupsIdApplicationsApplicationIdRoute,
  getApiV4GroupsIdApplicationsRoute,
  postApiV4GroupsIdApplicationsRoute,
  putApiV4GroupsIdApplicationsApplicationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupApplicationsHandler = app
  .openapi(postApiV4GroupsIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdApplicationsApplicationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
