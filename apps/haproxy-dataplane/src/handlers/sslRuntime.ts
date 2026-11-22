import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyRuntimeSslCaFilesNameRoute,
  deleteServicesHaproxyRuntimeSslCertsNameRoute,
  deleteServicesHaproxyRuntimeSslCrlFilesNameRoute,
  deleteServicesHaproxyRuntimeSslCrtListsEntriesRoute,
  getServicesHaproxyRuntimeSslCaFilesNameEntriesIndexRoute,
  getServicesHaproxyRuntimeSslCaFilesNameRoute,
  getServicesHaproxyRuntimeSslCaFilesRoute,
  getServicesHaproxyRuntimeSslCertsNameRoute,
  getServicesHaproxyRuntimeSslCertsRoute,
  getServicesHaproxyRuntimeSslCrlFilesNameRoute,
  getServicesHaproxyRuntimeSslCrlFilesRoute,
  getServicesHaproxyRuntimeSslCrtListsEntriesRoute,
  getServicesHaproxyRuntimeSslCrtListsRoute,
  postServicesHaproxyRuntimeSslCaFilesNameEntriesRoute,
  postServicesHaproxyRuntimeSslCaFilesRoute,
  postServicesHaproxyRuntimeSslCertsRoute,
  postServicesHaproxyRuntimeSslCrlFilesRoute,
  postServicesHaproxyRuntimeSslCrtListsEntriesRoute,
  putServicesHaproxyRuntimeSslCaFilesNameRoute,
  putServicesHaproxyRuntimeSslCertsNameRoute,
  putServicesHaproxyRuntimeSslCrlFilesNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sslRuntimeHandler = app
  .openapi(getServicesHaproxyRuntimeSslCaFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeSslCaFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeSslCaFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCaFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeSslCaFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeSslCaFilesNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCaFilesNameEntriesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeSslCertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeSslCertsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCertsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeSslCertsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCrlFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeSslCrlFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeSslCrlFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCrlFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyRuntimeSslCrlFilesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCrtListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyRuntimeSslCrtListsEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyRuntimeSslCrtListsEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyRuntimeSslCrtListsEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
