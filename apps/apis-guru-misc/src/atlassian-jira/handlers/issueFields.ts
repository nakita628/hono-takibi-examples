import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FieldIdRoute,
  getRestApi3FieldFieldIdContextsRoute,
  getRestApi3FieldRoute,
  getRestApi3FieldSearchRoute,
  getRestApi3FieldSearchTrashedRoute,
  postRestApi3FieldIdRestoreRoute,
  postRestApi3FieldIdTrashRoute,
  postRestApi3FieldRoute,
  putRestApi3FieldFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueFieldsHandler = app
  .openapi(getRestApi3FieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldSearchTrashedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldIdTrashRoute, (c) => {
    throw new Error('Not implemented')
  })
