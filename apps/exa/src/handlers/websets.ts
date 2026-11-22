import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV0WebsetsIdRoute,
  getV0WebsetsIdRoute,
  getV0WebsetsRoute,
  postV0WebsetsIdCancelRoute,
  postV0WebsetsIdRoute,
  postV0WebsetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const websetsHandler = app
  .openapi(postV0WebsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebsetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
