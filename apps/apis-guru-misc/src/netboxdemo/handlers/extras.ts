import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExtrasConfigContextsIdIndexRoute,
  deleteExtrasExportTemplatesIdIndexRoute,
  deleteExtrasGraphsIdIndexRoute,
  deleteExtrasImageAttachmentsIdIndexRoute,
  deleteExtrasTagsIdIndexRoute,
  getExtrasConfigContextsIdIndexRoute,
  getExtrasConfigContextsIndexRoute,
  getExtrasCustomFieldChoicesIdIndexRoute,
  getExtrasCustomFieldChoicesIndexRoute,
  getExtrasExportTemplatesIdIndexRoute,
  getExtrasExportTemplatesIndexRoute,
  getExtrasGraphsIdIndexRoute,
  getExtrasGraphsIndexRoute,
  getExtrasImageAttachmentsIdIndexRoute,
  getExtrasImageAttachmentsIndexRoute,
  getExtrasObjectChangesIdIndexRoute,
  getExtrasObjectChangesIndexRoute,
  getExtrasReportsIdIndexRoute,
  getExtrasReportsIndexRoute,
  getExtrasScriptsIdIndexRoute,
  getExtrasScriptsIndexRoute,
  getExtrasTagsIdIndexRoute,
  getExtrasTagsIndexRoute,
  patchExtrasConfigContextsIdIndexRoute,
  patchExtrasExportTemplatesIdIndexRoute,
  patchExtrasGraphsIdIndexRoute,
  patchExtrasImageAttachmentsIdIndexRoute,
  patchExtrasTagsIdIndexRoute,
  postExtrasConfigContextsIndexRoute,
  postExtrasExportTemplatesIndexRoute,
  postExtrasGraphsIndexRoute,
  postExtrasImageAttachmentsIndexRoute,
  postExtrasReportsIdRunIndexRoute,
  postExtrasTagsIndexRoute,
  putExtrasConfigContextsIdIndexRoute,
  putExtrasExportTemplatesIdIndexRoute,
  putExtrasGraphsIdIndexRoute,
  putExtrasImageAttachmentsIdIndexRoute,
  putExtrasTagsIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const extrasHandler = app
  .openapi(getExtrasCustomFieldChoicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasCustomFieldChoicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtrasConfigContextsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtrasConfigContextsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtrasExportTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtrasExportTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasGraphsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtrasGraphsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtrasGraphsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasGraphsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtrasGraphsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtrasGraphsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtrasImageAttachmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtrasImageAttachmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasObjectChangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasObjectChangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasReportsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasReportsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtrasReportsIdRunIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasScriptsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasScriptsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExtrasTagsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putExtrasTagsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
