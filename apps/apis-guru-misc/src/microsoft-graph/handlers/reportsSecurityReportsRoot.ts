import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsSecurityRoute,
  getReportsSecurityRoute,
  patchReportsSecurityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsSecurityReportsRootHandler = app
  .openapi(deleteReportsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
