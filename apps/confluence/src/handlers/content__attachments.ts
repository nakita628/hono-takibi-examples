import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute,
  postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute,
  postWikiRestApiContentIdChildAttachmentRoute,
  putWikiRestApiContentIdChildAttachmentAttachmentIdRoute,
  putWikiRestApiContentIdChildAttachmentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const content__attachmentsHandler = app
  .openapi(putWikiRestApiContentIdChildAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdChildAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWikiRestApiContentIdChildAttachmentAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWikiRestApiContentIdChildAttachmentAttachmentIdDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWikiRestApiContentIdChildAttachmentAttachmentIdDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
