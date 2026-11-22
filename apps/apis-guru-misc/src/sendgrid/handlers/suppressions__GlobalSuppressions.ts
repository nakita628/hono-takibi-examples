import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAsmSuppressionsGlobalEmailRoute,
  getAsmSuppressionsGlobalEmailRoute,
  getSuppressionUnsubscribesRoute,
  postAsmSuppressionsGlobalRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppressions__GlobalSuppressionsHandler = app
  .openapi(postAsmSuppressionsGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAsmSuppressionsGlobalEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAsmSuppressionsGlobalEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionUnsubscribesRoute, (c) => {
    throw new Error('Not implemented')
  })
