import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSharedLineEndSizesIdRoute,
  getSharedLineEndSizesRoute,
  getSharedLineEndSizesTypeIdTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharedLineEndSizesHandler = app
  .openapi(getSharedLineEndSizesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedLineEndSizesTypeIdTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSharedLineEndSizesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
