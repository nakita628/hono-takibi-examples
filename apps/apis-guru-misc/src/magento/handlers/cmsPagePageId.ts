import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CmsPagePageIdRoute, getV1CmsPagePageIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsPagePageIdHandler = app
  .openapi(deleteV1CmsPagePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CmsPagePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
