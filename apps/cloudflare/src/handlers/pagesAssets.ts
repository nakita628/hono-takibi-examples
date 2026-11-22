import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPagesAssetsCheckMissingRoute,
  postPagesAssetsUploadRoute,
  postPagesAssetsUpsertHashesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pagesAssetsHandler = app
  .openapi(postPagesAssetsCheckMissingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPagesAssetsUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPagesAssetsUpsertHashesRoute, (c) => {
    throw new Error('Not implemented')
  })
