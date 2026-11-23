import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOauth21AuthorizeRoute,
  getOauth21FilesIdRoute,
  getOauth21FilesIndexRoute,
  getOauth21FilesIssuedRoute,
  getOauth21FileUriRoute,
  getOauth21UserRoute,
  getOauth21XmlUriRoute,
  getOauth22FilesIssuedRoute,
  getOauth22XmlEaadhaarRoute,
  postOauth21CodeRoute,
  postOauth21FileUploadRoute,
  postOauth21PullDoctypeRoute,
  postOauth21PullIssuersRoute,
  postOauth21PullParametersRoute,
  postOauth21PullPulldocumentRoute,
  postOauth21RevokeRoute,
  postOauth21TokenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(getOauth21AuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21CodeRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postOauth21PullDoctypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullIssuersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullParametersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21PullPulldocumentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21RevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOauth21TokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth21UserRoute, (c) => {
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
