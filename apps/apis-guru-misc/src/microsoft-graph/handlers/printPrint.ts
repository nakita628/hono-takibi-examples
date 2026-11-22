import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrintRoute, patchPrintRoute } from '../routes'

const app = new OpenAPIHono()

export const printPrintHandler = app
  .openapi(getPrintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPrintRoute, (c) => {
    throw new Error('Not implemented')
  })
