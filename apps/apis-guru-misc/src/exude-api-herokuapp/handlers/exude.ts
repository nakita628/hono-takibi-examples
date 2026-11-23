import { OpenAPIHono } from '@hono/zod-openapi'
import { postExudeTypeDataRoute, postExudeTypeFileRoute } from '../routes'

const app = new OpenAPIHono()

export const exudeHandler = app
  .openapi(postExudeTypeDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExudeTypeFileRoute, (c) => {
    throw new Error('Not implemented')
  })
