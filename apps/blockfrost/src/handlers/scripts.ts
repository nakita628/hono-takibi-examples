import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getScriptsDatumDatumHashCborRoute,
  getScriptsDatumDatumHashRoute,
  getScriptsRoute,
  getScriptsScriptHashCborRoute,
  getScriptsScriptHashJsonRoute,
  getScriptsScriptHashRedeemersRoute,
  getScriptsScriptHashRoute,
  getScriptsScriptHashUtxosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const scriptsHandler = app
  .openapi(getScriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptHashJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptHashCborRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptHashRedeemersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsScriptHashUtxosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsDatumDatumHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getScriptsDatumDatumHashCborRoute, (c) => {
    throw new Error('Not implemented')
  })
