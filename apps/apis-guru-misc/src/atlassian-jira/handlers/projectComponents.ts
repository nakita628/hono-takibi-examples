import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ComponentIdRoute,
  getRestApi3ComponentIdRelatedIssueCountsRoute,
  getRestApi3ComponentIdRoute,
  getRestApi3ProjectProjectIdOrKeyComponentRoute,
  getRestApi3ProjectProjectIdOrKeyComponentsRoute,
  postRestApi3ComponentRoute,
  putRestApi3ComponentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectComponentsHandler = app
  .openapi(postRestApi3ComponentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ComponentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ComponentIdRelatedIssueCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyComponentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyComponentsRoute, (c) => {
    throw new Error('Not implemented')
  })
