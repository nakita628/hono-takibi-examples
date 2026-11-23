import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetadataTxsLabelsLabelCborRoute,
  getMetadataTxsLabelsLabelRoute,
  getMetadataTxsLabelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataHandler = app
  .openapi(getMetadataTxsLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTxsLabelsLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTxsLabelsLabelCborRoute, (c) => {
    throw new Error('Not implemented')
  })
