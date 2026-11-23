import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPsRoute,
  getApiTagsRoute,
  getApiVersionRoute,
  postApiChatRoute,
  postApiGenerateRoute,
  postApiPullRoute,
  postApiShowRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiShowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPsRoute, (c) => {
    throw new Error('Not implemented')
  })
