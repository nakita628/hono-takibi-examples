import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEnvironmentsNameRoute,
  getEnvironmentsNameRoute,
  getEnvironmentsRoute,
  patchEnvironmentsNameRoute,
  putEnvironmentsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentsHandler = app
  .openapi(putEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEnvironmentsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
