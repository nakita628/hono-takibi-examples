import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChangelogsSlugRoute,
  getChangelogsRoute,
  getChangelogsSlugRoute,
  postChangelogsRoute,
  putChangelogsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const changelogHandler = app
  .openapi(getChangelogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChangelogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getChangelogsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putChangelogsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteChangelogsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
