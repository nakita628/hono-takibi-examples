import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRequirementsIdVersionsPendingRoute,
  getRequirementsIdRoute,
  getRequirementsRoute,
  postRequirementsIdVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requirementsHandler = app
  .openapi(getRequirementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRequirementsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRequirementsIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRequirementsIdVersionsPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
