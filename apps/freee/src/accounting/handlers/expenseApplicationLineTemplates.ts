import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1ExpenseApplicationLineTemplatesIdRoute,
  getApi1ExpenseApplicationLineTemplatesIdRoute,
  getApi1ExpenseApplicationLineTemplatesRoute,
  postApi1ExpenseApplicationLineTemplatesRoute,
  putApi1ExpenseApplicationLineTemplatesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const expenseApplicationLineTemplatesHandler = app
  .openapi(getApi1ExpenseApplicationLineTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1ExpenseApplicationLineTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1ExpenseApplicationLineTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1ExpenseApplicationLineTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1ExpenseApplicationLineTemplatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
