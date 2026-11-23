import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getReceiptsIdRoute,
  getReceiptsRoute,
  getReceiptsTemplatesRoute,
  postReceiptsRoute,
  putReceiptsIdCancelRoute,
  putReceiptsIdRoute,
  putReceiptsIdUncancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const receiptsHandler = app
  .openapi(getReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putReceiptsIdUncancelRoute, (c) => {
    throw new Error('Not implemented')
  })
