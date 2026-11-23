import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postBuiltinsLocalesLocaleIdIntentsIndexRoute,
  postBuiltinsLocalesLocaleIdSlottypesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const builtinsHandler = app
  .openapi(postBuiltinsLocalesLocaleIdIntentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBuiltinsLocalesLocaleIdSlottypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
