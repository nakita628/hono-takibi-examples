import { OpenAPIHono } from '@hono/zod-openapi'
import { getIconPngRoute, getNOTICEHtmlGzRoute } from '../routes'

const app = new OpenAPIHono()

export const staticFilesHandler = app
  .openapi(getNOTICEHtmlGzRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIconPngRoute, (c) => {
    throw new Error('Not implemented')
  })
