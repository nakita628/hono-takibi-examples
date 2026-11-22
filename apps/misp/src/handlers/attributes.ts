import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributesDeleteAttributeIdRoute,
  getAttributesAttributeStatisticsContextPercentageRoute,
  getAttributesDescribeTypesRoute,
  getAttributesGetAttributeByB64ValueBase64ValueRoute,
  getAttributesRoute,
  getAttributesViewAttributeIdRoute,
  postAttributesAddEventIdRoute,
  postAttributesAddTagAttributeIdTagIdLocalLocalRoute,
  postAttributesEnrichAttributeIdRoute,
  postAttributesRemoveTagAttributeIdTagIdRoute,
  postAttributesRestoreAttributeIdRoute,
  postAttributesRestSearchRoute,
  putAttributesEditAttributeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const attributesHandler = app
  .openapi(postAttributesRestSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributesAddEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAttributesEditAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAttributesDeleteAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributesRestoreAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributesAddTagAttributeIdTagIdLocalLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributesRemoveTagAttributeIdTagIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributesViewAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributesGetAttributeByB64ValueBase64ValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributesAttributeStatisticsContextPercentageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAttributesDescribeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAttributesEnrichAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
