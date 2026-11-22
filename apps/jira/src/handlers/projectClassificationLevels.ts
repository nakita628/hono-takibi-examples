import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute,
  getRestApi3ProjectProjectIdOrKeyClassificationConfigRoute,
  getRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute,
  putRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectClassificationLevelsHandler = app
  .openapi(getRestApi3ProjectProjectIdOrKeyClassificationConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyClassificationLevelDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
