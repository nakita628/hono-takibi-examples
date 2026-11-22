import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmImports202609ImportIdErrorsRoute,
  getCrmImports202609ImportIdRoute,
  getCrmImports202609Route,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmImports202609Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmImports202609ImportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmImports202609ImportIdErrorsRoute, (c) => {
    throw new Error('Not implemented')
  })
