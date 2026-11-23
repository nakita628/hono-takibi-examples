import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReimbursementsReimbursementIDRoute,
  getReimbursementsRoute,
  postReimbursementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reimbursementsHandler = app
  .openapi(getReimbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReimbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReimbursementsReimbursementIDRoute, (c) => {
    throw new Error('Not implemented')
  })
