import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUploadsUplIdRoute,
  getUploadsRoute,
  getUploadsUplIdExportsExIdRoute,
  getUploadsUplIdReportRoute,
  getUploadsUplIdRoute,
  patchUploadsUplIdRoute,
  postUploadsRoute,
  postUploadsUplIdExportsRoute,
  postUploadsUplIdFileRoute,
} from '../routes'

const app = new OpenAPIHono()

export const uploadsHandler = app
  .openapi(getUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadsUplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUploadsUplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUploadsUplIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsUplIdFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUploadsUplIdExportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadsUplIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUploadsUplIdExportsExIdRoute, (c) => {
    throw new Error('Not implemented')
  })
