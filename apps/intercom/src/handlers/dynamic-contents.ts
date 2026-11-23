import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDynamicContentsIdRoute,
  getDynamicContentsIdRoute,
  getDynamicContentsRoute,
  postDynamicContentsRoute,
  putDynamicContentsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dynamicContentsHandler = app
  .openapi(getDynamicContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDynamicContentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDynamicContentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDynamicContentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDynamicContentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
