import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV1AddPasswordRoute,
  postV1AddRestrictionsRoute,
  postV1AddWatermarkImageRoute,
  postV1AddWatermarkTextRoute,
  postV1ExtractPagesRoute,
  postV1MergeDocumentsRoute,
  postV1RemovePagesRoute,
  postV1RemovePasswordRoute,
  postV1RemoveRestrictionsRoute,
  postV1RemoveSignaturesRoute,
  postV1ReversePagesRoute,
  postV1RotatePagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1AddPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AddRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AddWatermarkImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AddWatermarkTextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ExtractPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1MergeDocumentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RemovePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RemovePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RemoveRestrictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RemoveSignaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReversePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RotatePagesRoute, (c) => {
    throw new Error('Not implemented')
  })
