import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAttachmentLawRevisionIdRoute,
  getKeywordRoute,
  getLawDataLawIdOrNumOrRevisionIdRoute,
  getLawFileFileTypeLawIdOrNumOrRevisionIdRoute,
  getLawRevisionsLawIdOrNumRoute,
  getLawsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lawsApiHandler = app
  .openapi(getLawsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawRevisionsLawIdOrNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawDataLawIdOrNumOrRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttachmentLawRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKeywordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLawFileFileTypeLawIdOrNumOrRevisionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
