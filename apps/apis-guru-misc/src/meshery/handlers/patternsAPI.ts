import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPatternDeployRoute,
  deleteApiPatternIdRoute,
  getApiOamTypeRoute,
  getApiPatternIdRoute,
  getApiPatternRoute,
  postApiOamTypeRoute,
  postApiPatternDeployRoute,
  postApiPatternRoute,
} from '../routes'

const app = new OpenAPIHono()

export const patternsAPIHandler = app
  .openapi(getApiOamTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiOamTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatternDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPatternDeployRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPatternIdRoute, (c) => {
    throw new Error('Not implemented')
  })
