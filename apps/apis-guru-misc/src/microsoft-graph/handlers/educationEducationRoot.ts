import { OpenAPIHono } from '@hono/zod-openapi'
import { getEducationRoute, patchEducationRoute } from '../routes'

const app = new OpenAPIHono()

export const educationEducationRootHandler = app
  .openapi(getEducationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEducationRoute, (c) => {
    throw new Error('Not implemented')
  })
