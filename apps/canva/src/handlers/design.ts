import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DesignsDesignIdDatasetRoute,
  getV1DesignsDesignIdExportFormatsRoute,
  getV1DesignsDesignIdPagesRoute,
  getV1DesignsDesignIdRoute,
  getV1DesignsRoute,
  getV1PrintPartnerDesignsDesignIdRoute,
  postV1DesignsRoute,
  postV1PrintPartnerDesignsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const designHandler = app
  .openapi(getV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdExportFormatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DesignsDesignIdDatasetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrintPartnerDesignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PrintPartnerDesignsDesignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
