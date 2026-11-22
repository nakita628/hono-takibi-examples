import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4PublicSharesUploadsAccessKeyUploadIdRoute,
  getV4PublicSharesDownloadsAccessKeyRoute,
  getV4PublicSharesDownloadsAccessKeyTokenRoute,
  getV4PublicSharesUploadsAccessKeyRoute,
  getV4PublicSharesUploadsAccessKeyUploadIdRoute,
  getV4PublicSoftwareThirdPartyDependenciesRoute,
  getV4PublicSoftwareVersionRoute,
  getV4PublicSystemInfoAuthAdRoute,
  getV4PublicSystemInfoAuthOpenidRoute,
  getV4PublicSystemInfoRoute,
  getV4PublicTimeRoute,
  headV4PublicSharesDownloadsAccessKeyRoute,
  headV4PublicSharesDownloadsAccessKeyTokenRoute,
  postV4PublicSharesDownloadsAccessKeyRoute,
  postV4PublicSharesUploadsAccessKeyRoute,
  postV4PublicSharesUploadsAccessKeyUploadIdRoute,
  postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRoute,
  putV4PublicSharesUploadsAccessKeyUploadIdRoute,
  putV4PublicSharesUploadsAccessKeyUploadIdS3Route,
} from '../routes'

const app = new OpenAPIHono()

export const publicHandler = app
  .openapi(getV4PublicSharesDownloadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV4PublicSharesDownloadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesDownloadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesDownloadsAccessKeyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV4PublicSharesDownloadsAccessKeyTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesUploadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesUploadsAccessKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4PublicSharesUploadsAccessKeyUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4PublicSharesUploadsAccessKeyUploadIdS3Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PublicSharesUploadsAccessKeyUploadIdS3UrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSoftwareThirdPartyDependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSoftwareVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSystemInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSystemInfoAuthAdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicSystemInfoAuthOpenidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PublicTimeRoute, (c) => {
    throw new Error('Not implemented')
  })
