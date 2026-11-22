import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCancelConversionTaskRoute, postActionCancelConversionTaskRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCancelConversionTaskHandler = app
  .openapi(getActionCancelConversionTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCancelConversionTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
