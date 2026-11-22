import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3IssuePickerRoute,
  getRestApi3SearchRoute,
  postRestApi3JqlMatchRoute,
  postRestApi3SearchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueSearchHandler = app
  .openapi(getRestApi3IssuePickerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3JqlMatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
