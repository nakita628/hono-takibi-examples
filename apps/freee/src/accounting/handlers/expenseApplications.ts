import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ExpenseApplicationsIdRoute,
  getApi1ExpenseApplicationsIdRoute,
  getApi1ExpenseApplicationsRoute,
  postApi1ExpenseApplicationsIdActionsRoute,
  postApi1ExpenseApplicationsRoute,
  putApi1ExpenseApplicationsIdParentApprovableRequestsRoute,
  putApi1ExpenseApplicationsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expenseApplicationsHandler = app
  .openapi(getApi1ExpenseApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ExpenseApplicationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationsIdParentApprovableRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
