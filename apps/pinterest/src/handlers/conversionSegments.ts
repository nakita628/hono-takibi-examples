import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute,
  patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute,
  postAdAccountsAdAccountIdConversionSegmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conversionSegmentsHandler = app
  .openapi(postAdAccountsAdAccountIdConversionSegmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
