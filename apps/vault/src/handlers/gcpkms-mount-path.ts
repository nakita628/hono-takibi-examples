import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGcpkmsMountPathConfigRoute,
  deleteGcpkmsMountPathKeysDeregisterKeyRoute,
  deleteGcpkmsMountPathKeysKeyRoute,
  deleteGcpkmsMountPathKeysTrimKeyRoute,
  getGcpkmsMountPathConfigRoute,
  getGcpkmsMountPathKeysConfigKeyRoute,
  getGcpkmsMountPathKeysIndexRoute,
  getGcpkmsMountPathKeysKeyRoute,
  getGcpkmsMountPathPubkeyKeyRoute,
  postGcpkmsMountPathConfigRoute,
  postGcpkmsMountPathDecryptKeyRoute,
  postGcpkmsMountPathEncryptKeyRoute,
  postGcpkmsMountPathKeysConfigKeyRoute,
  postGcpkmsMountPathKeysDeregisterKeyRoute,
  postGcpkmsMountPathKeysKeyRoute,
  postGcpkmsMountPathKeysRegisterKeyRoute,
  postGcpkmsMountPathKeysRotateKeyRoute,
  postGcpkmsMountPathKeysTrimKeyRoute,
  postGcpkmsMountPathReencryptKeyRoute,
  postGcpkmsMountPathSignKeyRoute,
  postGcpkmsMountPathVerifyKeyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const gcpkmsMountPathHandler = app
  .openapi(getGcpkmsMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathDecryptKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathEncryptKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathKeysIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathKeysConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysConfigKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysDeregisterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathKeysDeregisterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysRegisterKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysRotateKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysTrimKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathKeysTrimKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGcpkmsMountPathKeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGcpkmsMountPathPubkeyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathReencryptKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathSignKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGcpkmsMountPathVerifyKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
