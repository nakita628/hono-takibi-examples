import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyStorageGeneralNameRoute,
  deleteServicesHaproxyStorageMapsNameRoute,
  deleteServicesHaproxyStorageSslCertificatesNameRoute,
  deleteServicesHaproxyStorageSslCrtListsNameEntriesRoute,
  deleteServicesHaproxyStorageSslCrtListsNameRoute,
  getServicesHaproxyStorageGeneralNameRoute,
  getServicesHaproxyStorageGeneralRoute,
  getServicesHaproxyStorageMapsNameRoute,
  getServicesHaproxyStorageMapsRoute,
  getServicesHaproxyStorageSslCertificatesNameRoute,
  getServicesHaproxyStorageSslCertificatesRoute,
  getServicesHaproxyStorageSslCrtListsNameEntriesRoute,
  getServicesHaproxyStorageSslCrtListsNameRoute,
  getServicesHaproxyStorageSslCrtListsRoute,
  postServicesHaproxyStorageGeneralRoute,
  postServicesHaproxyStorageMapsRoute,
  postServicesHaproxyStorageSslCertificatesRoute,
  postServicesHaproxyStorageSslCrtListsNameEntriesRoute,
  postServicesHaproxyStorageSslCrtListsRoute,
  putServicesHaproxyStorageGeneralNameRoute,
  putServicesHaproxyStorageMapsNameRoute,
  putServicesHaproxyStorageSslCertificatesNameRoute,
  putServicesHaproxyStorageSslCrtListsNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storageHandler = app
  .openapi(getServicesHaproxyStorageGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyStorageGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyStorageGeneralNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageGeneralNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyStorageGeneralNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyStorageMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyStorageMapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageMapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyStorageMapsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyStorageSslCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyStorageSslCertificatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageSslCertificatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyStorageSslCertificatesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageSslCrtListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyStorageSslCrtListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyStorageSslCrtListsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageSslCrtListsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyStorageSslCrtListsNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyStorageSslCrtListsNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyStorageSslCrtListsNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyStorageSslCrtListsNameEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
