import { OpenAPIHono } from '@hono/zod-openapi'
import { getNOTICEHtmlGzRoute } from '../routes'

const app = new OpenAPIHono()

export const noticeHtmlGzHandler = app.openapi(getNOTICEHtmlGzRoute, (c) => {
  throw new Error('Not implemented')
})
