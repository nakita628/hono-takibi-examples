import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBusinessLinesIdRoute,
  getBusinessLinesIdRoute,
  patchBusinessLinesIdRoute,
  postBusinessLinesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const businessLinesHandler = app
  .openapi(postBusinessLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBusinessLinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBusinessLinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBusinessLinesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
