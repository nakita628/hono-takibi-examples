import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTaskRoute,
  getTaskTaskIdDownloadInputFileRoute,
  getTaskTaskIdDownloadResultFileRoute,
  getTaskTaskIdRoute,
  postTaskRoute,
  postTaskTaskIdUploadFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taskHandler = app
  .openapi(getTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskTaskIdDownloadInputFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTaskTaskIdDownloadResultFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTaskTaskIdUploadFileRoute, (c) => {
    throw new Error('Not implemented')
  })
