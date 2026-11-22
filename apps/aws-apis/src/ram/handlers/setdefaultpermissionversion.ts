import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetdefaultpermissionversionRoute } from '../routes'

const app = new OpenAPIHono()

export const setdefaultpermissionversionHandler = app.openapi(
  postSetdefaultpermissionversionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
