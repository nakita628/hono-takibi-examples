import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ResolutionIdRoute,
  getRestApi3ResolutionIdRoute,
  getRestApi3ResolutionRoute,
  getRestApi3ResolutionSearchRoute,
  postRestApi3ResolutionRoute,
  putRestApi3ResolutionDefaultRoute,
  putRestApi3ResolutionIdRoute,
  putRestApi3ResolutionMoveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const issueResolutionsHandler = app
  .openapi(getRestApi3ResolutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ResolutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ResolutionDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ResolutionMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ResolutionSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ResolutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ResolutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ResolutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
