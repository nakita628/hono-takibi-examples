import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdTemplatesTypeNameRoute,
  getApiV4ProjectsIdTemplatesTypeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectTemplatesHandler = app
  .openapi(getApiV4ProjectsIdTemplatesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdTemplatesTypeNameRoute, (c) => {
    throw new Error('Not implemented')
  })
