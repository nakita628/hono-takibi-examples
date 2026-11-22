import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV4SystemConfigAuthAdsAdIdRoute,
  deleteV4SystemConfigAuthOpenidIdpsIdpIdRoute,
  deleteV4SystemConfigAuthRadiusRoute,
  deleteV4SystemConfigOauthClientsClientIdRoute,
  getV4SystemConfigAuthAdsAdIdRoute,
  getV4SystemConfigAuthAdsRoute,
  getV4SystemConfigAuthOpenidIdpsIdpIdRoute,
  getV4SystemConfigAuthOpenidIdpsRoute,
  getV4SystemConfigAuthRadiusRoute,
  getV4SystemConfigOauthClientsClientIdRoute,
  getV4SystemConfigOauthClientsRoute,
  postV4SystemConfigActionsTestAdRoute,
  postV4SystemConfigActionsTestRadiusRoute,
  postV4SystemConfigAuthAdsRoute,
  postV4SystemConfigAuthOpenidIdpsRoute,
  postV4SystemConfigAuthRadiusRoute,
  postV4SystemConfigOauthClientsRoute,
  putV4SystemConfigAuthAdsAdIdRoute,
  putV4SystemConfigAuthOpenidIdpsIdpIdRoute,
  putV4SystemConfigAuthRadiusRoute,
  putV4SystemConfigOauthClientsClientIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const systemAuthConfigHandler = app
  .openapi(postV4SystemConfigActionsTestAdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigActionsTestRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigAuthAdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigAuthAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigAuthAdsAdIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthOpenidIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigAuthOpenidIdpsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigAuthOpenidIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthOpenidIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigAuthOpenidIdpsIdpIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigAuthRadiusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4SystemConfigOauthClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV4SystemConfigOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4SystemConfigOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV4SystemConfigOauthClientsClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
