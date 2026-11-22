import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3FieldFieldIdContextContextIdRoute,
  getRestApi3FieldFieldIdContextDefaultValueRoute,
  getRestApi3FieldFieldIdContextDefaultValuesRoute,
  getRestApi3FieldFieldIdContextIssuetypemappingRoute,
  getRestApi3FieldFieldIdContextProjectmappingRoute,
  getRestApi3FieldFieldIdContextRoute,
  postRestApi3FieldFieldIdContextContextIdIssuetypeRemoveRoute,
  postRestApi3FieldFieldIdContextContextIdProjectRemoveRoute,
  postRestApi3FieldFieldIdContextMappingRoute,
  postRestApi3FieldFieldIdContextRoute,
  putRestApi3FieldFieldIdContextContextIdIssuetypeRoute,
  putRestApi3FieldFieldIdContextContextIdProjectRoute,
  putRestApi3FieldFieldIdContextContextIdRoute,
  putRestApi3FieldFieldIdContextDefaultValueRoute,
  putRestApi3FieldFieldIdContextDefaultValuesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueCustomFieldContextsHandler = app
  .openapi(getRestApi3FieldFieldIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextDefaultValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextDefaultValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextDefaultValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextIssuetypemappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3FieldFieldIdContextProjectmappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3FieldFieldIdContextContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdIssuetypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextContextIdIssuetypeRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3FieldFieldIdContextContextIdProjectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3FieldFieldIdContextContextIdProjectRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
