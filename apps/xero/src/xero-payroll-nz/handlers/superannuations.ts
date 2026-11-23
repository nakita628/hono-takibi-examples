import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSuperannuationsRoute,
  getSuperannuationsSuperannuationIDRoute,
  postSuperannuationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const superannuationsHandler = app
  .openapi(getSuperannuationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSuperannuationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuperannuationsSuperannuationIDRoute, (c) => {
    throw new Error('Not implemented')
  })
