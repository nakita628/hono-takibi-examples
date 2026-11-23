import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionPutUserPermissionsBoundaryRoute,
  postActionPutUserPermissionsBoundaryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionPutUserPermissionsBoundaryHandler = app
  .openapi(getActionPutUserPermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutUserPermissionsBoundaryRoute, (c) => {
    throw new Error('Not implemented')
  })
