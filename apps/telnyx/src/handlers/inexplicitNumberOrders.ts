import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInexplicitNumberOrdersIdRoute,
  getInexplicitNumberOrdersRoute,
  postInexplicitNumberOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inexplicitNumberOrdersHandler = app
  .openapi(getInexplicitNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInexplicitNumberOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInexplicitNumberOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
