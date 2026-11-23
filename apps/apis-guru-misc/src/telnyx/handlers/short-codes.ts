import { OpenAPIHono } from '@hono/zod-openapi'
import { getShortCodesIdRoute, getShortCodesRoute, patchShortCodesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const shortCodesHandler = app
  .openapi(getShortCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getShortCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchShortCodesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
