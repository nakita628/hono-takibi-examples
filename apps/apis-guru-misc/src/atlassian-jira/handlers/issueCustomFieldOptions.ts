import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdRoute,
  getRestApi3CustomFieldOptionIdRoute,
  getRestApi3FieldFieldIdContextContextIdOptionRoute,
  postRestApi3FieldFieldIdContextContextIdOptionRoute,
  putRestApi3FieldFieldIdContextContextIdOptionMoveRoute,
  putRestApi3FieldFieldIdContextContextIdOptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldOptionsHandler = app
  .openapi(getRestApi3CustomFieldOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextContextIdOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextContextIdOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdOptionMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldIdContextContextIdOptionOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
