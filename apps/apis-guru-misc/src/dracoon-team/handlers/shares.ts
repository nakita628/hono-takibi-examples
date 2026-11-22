import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4SharesDownloadsRoute,
  deleteV4SharesDownloadsShareIdRoute,
  deleteV4SharesUploadsRoute,
  deleteV4SharesUploadsShareIdRoute,
  getV4SharesDownloadsRoute,
  getV4SharesDownloadsShareIdQrRoute,
  getV4SharesDownloadsShareIdRoute,
  getV4SharesUploadsRoute,
  getV4SharesUploadsShareIdQrRoute,
  getV4SharesUploadsShareIdRoute,
  postV4SharesDownloadsRoute,
  postV4SharesDownloadsShareIdEmailRoute,
  postV4SharesUploadsRoute,
  postV4SharesUploadsShareIdEmailRoute,
  putV4SharesDownloadsRoute,
  putV4SharesDownloadsShareIdRoute,
  putV4SharesUploadsRoute,
  putV4SharesUploadsShareIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sharesHandler = app
  .openapi(deleteV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesDownloadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesDownloadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesDownloadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesDownloadsShareIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesDownloadsShareIdQrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SharesUploadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesUploadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SharesUploadsShareIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SharesUploadsShareIdEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SharesUploadsShareIdQrRoute, (c) => {
    throw new Error('Not implemented')
  })
