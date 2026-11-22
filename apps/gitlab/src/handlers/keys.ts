import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdSshCertificatesSshCertificatesIdRoute,
  deleteApiV4UserGpgKeysKeyIdRoute,
  deleteApiV4UserKeysKeyIdRoute,
  deleteApiV4UsersIdGpgKeysKeyIdRoute,
  deleteApiV4UsersIdKeysKeyIdRoute,
  getApiV4GroupsIdSshCertificatesRoute,
  getApiV4KeysIdRoute,
  getApiV4KeysRoute,
  getApiV4UserGpgKeysKeyIdRoute,
  getApiV4UserGpgKeysRoute,
  getApiV4UserKeysKeyIdRoute,
  getApiV4UserKeysRoute,
  getApiV4UsersIdGpgKeysKeyIdRoute,
  getApiV4UsersIdGpgKeysRoute,
  getApiV4UsersIdKeysKeyIdRoute,
  getApiV4UsersUserIdKeysRoute,
  postApiV4GroupsIdSshCertificatesRoute,
  postApiV4UserGpgKeysKeyIdRevokeRoute,
  postApiV4UserGpgKeysRoute,
  postApiV4UserKeysRoute,
  postApiV4UsersIdGpgKeysKeyIdRevokeRoute,
  postApiV4UsersIdGpgKeysRoute,
  postApiV4UsersUserIdKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const keysHandler = app
  .openapi(postApiV4UsersUserIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersUserIdKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersIdKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UsersIdGpgKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UsersIdGpgKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UsersIdGpgKeysKeyIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UserKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserGpgKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4UserGpgKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4UserGpgKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4UserGpgKeysKeyIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4KeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4KeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdSshCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdSshCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdSshCertificatesSshCertificatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
