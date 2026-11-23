import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOauth2AccessTokensIdIndexRoute,
  deleteOauth2AuthorizationCodesIdIndexRoute,
  deleteOauth2RefreshTokensIdIndexRoute,
  getOauth2AccessTokensIdIndexRoute,
  getOauth2AccessTokensIdUsedByIndexRoute,
  getOauth2AccessTokensIndexRoute,
  getOauth2AuthorizationCodesIdIndexRoute,
  getOauth2AuthorizationCodesIdUsedByIndexRoute,
  getOauth2AuthorizationCodesIndexRoute,
  getOauth2RefreshTokensIdIndexRoute,
  getOauth2RefreshTokensIdUsedByIndexRoute,
  getOauth2RefreshTokensIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oauth2Handler = app
  .openapi(getOauth2AccessTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2AccessTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2AccessTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2AccessTokensIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2AuthorizationCodesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2AuthorizationCodesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2AuthorizationCodesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2AuthorizationCodesIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2RefreshTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2RefreshTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOauth2RefreshTokensIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOauth2RefreshTokensIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
