import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBuiltinsIntentsIndexRoute,
  getBuiltinsIntentsSignatureRoute,
  getBuiltinsSlottypesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const builtinsHandler = app
  .openapi(getBuiltinsIntentsSignatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuiltinsIntentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBuiltinsSlottypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
