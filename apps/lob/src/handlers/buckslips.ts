import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBuckslipsBuckslipIdRoute,
  getBuckslipsBuckslipIdOrdersRoute,
  getBuckslipsBuckslipIdRoute,
  getBuckslipsRoute,
  patchBuckslipsBuckslipIdRoute,
  postBuckslipsBuckslipIdOrdersRoute,
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
  .openapi(getBuckslipsBuckslipIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuckslipsBuckslipIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
