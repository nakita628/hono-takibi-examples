import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUploadsAbortMultipartJsonRoute,
  postUploadsBatchPresignMultipartPartsJsonRoute,
  postUploadsCompleteExternalUploadJsonRoute,
  postUploadsCompleteMultipartJsonRoute,
  postUploadsCreateMultipartJsonRoute,
  postUploadsGeneratePresignedPutJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(postUploadsAbortMultipartJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsBatchPresignMultipartPartsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsCompleteExternalUploadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsCompleteMultipartJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsCreateMultipartJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsGeneratePresignedPutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
