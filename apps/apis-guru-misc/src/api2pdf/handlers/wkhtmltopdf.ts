import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWkhtmltopdfUrlRoute,
  postWkhtmltopdfHtmlRoute,
  postWkhtmltopdfUrlRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wkhtmltopdfHandler = app
  .openapi(postWkhtmltopdfHtmlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWkhtmltopdfUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWkhtmltopdfUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
