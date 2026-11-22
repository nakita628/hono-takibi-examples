import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth21FilesIdRoute,
  getOauth21FilesIndexRoute,
  getOauth21FilesIssuedRoute,
  getOauth21FileUriRoute,
  getOauth21XmlUriRoute,
  getOauth22FilesIssuedRoute,
  getOauth22XmlEaadhaarRoute,
  postOauth21FileUploadRoute,
  postOauth21PullPulldocumentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fileAPIsHandler = app
  .openapi(postOauth21FileUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth21FileUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth21FilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth21FilesIssuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth21FilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullPulldocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth21XmlUriRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth22FilesIssuedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth22XmlEaadhaarRoute, (c) => {
    throw new Error('Not implemented')
  })
