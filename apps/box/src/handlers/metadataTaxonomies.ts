import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
  deleteMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
  getMetadataTaxonomiesNamespaceRoute,
  getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
  getMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute,
  getMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
  getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRoute,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexRoute,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute,
  patchMetadataTaxonomiesNamespaceTaxonomyKeyRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimRoute,
  postMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute,
  postMetadataTaxonomiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metadataTaxonomiesHandler = app
  .openapi(postMetadataTaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTaxonomiesNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTaxonomiesNamespaceTaxonomyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMetadataTaxonomiesNamespaceTaxonomyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataTaxonomiesNamespaceTaxonomyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMetadataTaxonomiesNamespaceTaxonomyKeyLevelsLevelIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsAppendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTaxonomiesNamespaceTaxonomyKeyLevelsTrimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMetadataTaxonomiesNamespaceTaxonomyKeyNodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMetadataTaxonomiesNamespaceTaxonomyKeyNodesNodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetadataTemplatesNamespaceTemplateKeyFieldsFieldKeyOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
