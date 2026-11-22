import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV0WebsetsWebsetEnrichmentsIdRoute,
  getV0WebsetsWebsetEnrichmentsIdRoute,
  patchV0WebsetsWebsetEnrichmentsIdRoute,
  postV0WebsetsWebsetEnrichmentsIdCancelRoute,
  postV0WebsetsWebsetEnrichmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const enrichmentsHandler = app
  .openapi(postV0WebsetsWebsetEnrichmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV0WebsetsWebsetEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV0WebsetsWebsetEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV0WebsetsWebsetEnrichmentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV0WebsetsWebsetEnrichmentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
