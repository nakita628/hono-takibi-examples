import { OpenAPIHono } from '@hono/zod-openapi'
import { postImportUserDictRoute } from '../routes'

const app = new OpenAPIHono()

export const importUserDictHandler = app.openapi(postImportUserDictRoute, (c) => {
  throw new Error('Not implemented')
})
