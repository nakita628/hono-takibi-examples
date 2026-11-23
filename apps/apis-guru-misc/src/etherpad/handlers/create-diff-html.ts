import { OpenAPIHono } from '@hono/zod-openapi'
import { getCreateDiffHTMLRoute, postCreateDiffHTMLRoute } from '../routes'

const app = new OpenAPIHono()

export const createDiffHtmlHandler = app
  .openapi(getCreateDiffHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreateDiffHTMLRoute, (c) => {
    throw new Error('Not implemented')
  })
