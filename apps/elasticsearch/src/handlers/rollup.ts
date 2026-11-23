import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRollupJobIdRoute,
  getRollupDataIdRoute,
  getRollupDataRoute,
  getRollupJobIdRoute,
  getRollupJobRoute,
  postRollupJobIdStartRoute,
  postRollupJobIdStopRoute,
  putRollupJobIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rollupHandler = app
  .openapi(getRollupJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRollupJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRollupJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRollupJobRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRollupDataIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRollupDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRollupJobIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRollupJobIdStopRoute, (c) => {
    throw new Error('Not implemented')
  })
