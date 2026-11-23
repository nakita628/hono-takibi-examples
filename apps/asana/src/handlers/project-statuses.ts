import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectStatusesProjectStatusGidRoute,
  getProjectStatusesProjectStatusGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectStatusesHandler = app
  .openapi(getProjectStatusesProjectStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectStatusesProjectStatusGidRoute, (c) => {
    throw new Error('Not implemented')
  })
