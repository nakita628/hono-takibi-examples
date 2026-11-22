import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1CancellationsIdRoute,
  getV1CancellationsRoute,
  postV1CancellationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cancellationsHandler = app
  .openapi(getV1CancellationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CancellationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CancellationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
