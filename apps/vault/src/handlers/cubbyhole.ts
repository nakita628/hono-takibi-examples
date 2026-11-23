import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCubbyholePathRoute,
  getCubbyholePathIndexRoute,
  getCubbyholePathRoute,
  postCubbyholePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cubbyholeHandler = app
  .openapi(getCubbyholePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCubbyholePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCubbyholePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCubbyholePathIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
