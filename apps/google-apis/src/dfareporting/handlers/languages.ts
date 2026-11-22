import { OpenAPIHono } from '@hono/zod-openapi'
import { getUserprofilesProfileIdLanguagesRoute } from '../routes'

const app = new OpenAPIHono()

export const languagesHandler = app.openapi(getUserprofilesProfileIdLanguagesRoute, (c) => {
  throw new Error('Not implemented')
})
