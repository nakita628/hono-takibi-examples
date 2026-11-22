import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
  getRestApi3ProjectProjectIdOrKeyPropertiesRoute,
  putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectPropertiesHandler = app
  .openapi(getRestApi3ProjectProjectIdOrKeyPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ProjectProjectIdOrKeyPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
