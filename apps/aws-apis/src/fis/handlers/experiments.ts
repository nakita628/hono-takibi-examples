import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExperimentsIdRoute,
  getExperimentsIdRoute,
  getExperimentsRoute,
  postExperimentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const experimentsHandler = app
  .openapi(getExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExperimentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExperimentsRoute, (c) => {
    throw new Error('Not implemented')
  })
