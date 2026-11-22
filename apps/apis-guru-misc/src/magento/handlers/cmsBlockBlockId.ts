import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1CmsBlockBlockIdRoute, getV1CmsBlockBlockIdRoute } from '../routes'

const app = new OpenAPIHono()

export const cmsBlockBlockIdHandler = app
  .openapi(deleteV1CmsBlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CmsBlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
