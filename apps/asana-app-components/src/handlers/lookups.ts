import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getResourceTypeaheadUrlPathPlaceholderRoute,
  postResourceAttachUrlPathPlaceholderRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lookupsHandler = app
  .openapi(postResourceAttachUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourceTypeaheadUrlPathPlaceholderRoute, (c) => {
    throw new Error('Not implemented')
  })
