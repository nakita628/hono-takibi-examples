import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1TransfersIdRoute,
  getApi1TransfersIdRoute,
  getApi1TransfersRoute,
  postApi1TransfersRoute,
  putApi1TransfersIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transfersHandler = app
  .openapi(getApi1TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1TransfersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1TransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1TransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1TransfersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
