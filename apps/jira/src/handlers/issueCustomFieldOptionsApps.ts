import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FieldFieldKeyOptionOptionIdIssueRoute,
  deleteRestApi3FieldFieldKeyOptionOptionIdRoute,
  getRestApi3FieldFieldKeyOptionOptionIdRoute,
  getRestApi3FieldFieldKeyOptionRoute,
  getRestApi3FieldFieldKeyOptionSuggestionsEditRoute,
  getRestApi3FieldFieldKeyOptionSuggestionsSearchRoute,
  postRestApi3FieldFieldKeyOptionRoute,
  putRestApi3FieldFieldKeyOptionOptionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldOptionsAppsHandler = app
  .openapi(getRestApi3FieldFieldKeyOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldKeyOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionSuggestionsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionSuggestionsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldKeyOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldKeyOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldKeyOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldKeyOptionOptionIdIssueRoute, (c) => {
    throw new Error('Not implemented')
  })
