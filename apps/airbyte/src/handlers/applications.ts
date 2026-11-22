import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1ApplicationsCreateRoute,
  postV1ApplicationsDeleteRoute,
  postV1ApplicationsListRoute,
  postV1ApplicationsTokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const applicationsHandler = app
  .openapi(postV1ApplicationsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ApplicationsTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
