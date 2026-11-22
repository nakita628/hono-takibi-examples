import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLensesLensAliasClientRequestTokenLensStatusRoute,
  deleteLensesLensAliasSharesShareIdClientRequestTokenRoute,
  getLensesLensAliasExportRoute,
  getLensesLensAliasRoute,
  getLensesLensAliasSharesRoute,
  getLensesLensAliasVersionDifferenceRoute,
  getLensesRoute,
  postLensesLensAliasSharesRoute,
  postLensesLensAliasVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lensesHandler = app
  .openapi(postLensesLensAliasSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLensesLensAliasSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLensesLensAliasVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLensesLensAliasClientRequestTokenLensStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLensesLensAliasSharesShareIdClientRequestTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLensesLensAliasExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLensesLensAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLensesLensAliasVersionDifferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLensesRoute, (c) => {
    throw new Error('Not implemented')
  })
