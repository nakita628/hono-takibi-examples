import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PhotoPhotoIdRoute,
  deleteV1PhotoSequenceSequenceIdRoute,
  getV1PhotoPhotoIdRoute,
  getV1PhotosBatchGetRoute,
  getV1PhotoSequenceSequenceIdRoute,
  getV1PhotoSequencesRoute,
  getV1PhotosRoute,
  postV1PhotoRoute,
  postV1PhotosBatchDeleteRoute,
  postV1PhotosBatchUpdateRoute,
  postV1PhotoSequenceRoute,
  postV1PhotoSequenceStartUploadRoute,
  postV1PhotoStartUploadRoute,
  putV1PhotoIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1PhotoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PhotoPhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotoPhotoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotoStartUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotoSequenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PhotoSequenceSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotoSequenceSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotoSequenceStartUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotoSequencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotosBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PhotosBatchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PhotosBatchUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
