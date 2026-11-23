import { OpenAPIHono } from '@hono/zod-openapi'
import { getAboutReleaseNotesRoute, getAboutVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const aboutHandler = app
  .openapi(getAboutReleaseNotesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAboutVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
