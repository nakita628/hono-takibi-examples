import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestApi3ProjectTypeAccessibleRoute,
  getRestApi3ProjectTypeProjectTypeKeyAccessibleRoute,
  getRestApi3ProjectTypeProjectTypeKeyRoute,
  getRestApi3ProjectTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectTypesHandler = app
  .openapi(getRestApi3ProjectTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeAccessibleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeProjectTypeKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3ProjectTypeProjectTypeKeyAccessibleRoute, (c) => {
    throw new Error('Not implemented')
  })
