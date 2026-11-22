import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBuckslipsBuckslipIdRoute,
  getBuckslipsBuckslipIdRoute,
  getBuckslipsRoute,
  patchBuckslipsBuckslipIdRoute,
  postBuckslipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const buckslipsHandler = app
  .openapi(getBuckslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuckslipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuckslipsBuckslipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchBuckslipsBuckslipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBuckslipsBuckslipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
