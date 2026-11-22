import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PresentationsPresentationIdPagesPageObjectIdRoute,
  getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute,
  getV1PresentationsPresentationIdRoute,
  postV1PresentationsPresentationIdBatchUpdateRoute,
  postV1PresentationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const presentationsHandler = app
  .openapi(postV1PresentationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PresentationsPresentationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PresentationsPresentationIdPagesPageObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PresentationsPresentationIdPagesPageObjectIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PresentationsPresentationIdBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
