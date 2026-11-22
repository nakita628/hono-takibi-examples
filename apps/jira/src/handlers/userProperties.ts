import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3UserPropertiesPropertyKeyRoute,
  getRestApi3UserPropertiesPropertyKeyRoute,
  getRestApi3UserPropertiesRoute,
  putRestApi3UserPropertiesPropertyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userPropertiesHandler = app
  .openapi(getRestApi3UserPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3UserPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3UserPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3UserPropertiesPropertyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
