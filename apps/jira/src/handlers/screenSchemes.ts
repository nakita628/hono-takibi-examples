import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3ScreenschemeScreenSchemeIdRoute,
  getRestApi3ScreenschemeRoute,
  postRestApi3ScreenschemeRoute,
  putRestApi3ScreenschemeScreenSchemeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const screenSchemesHandler = app
  .openapi(getRestApi3ScreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3ScreenschemeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3ScreenschemeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3ScreenschemeScreenSchemeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
