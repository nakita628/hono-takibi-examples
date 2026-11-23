import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteQuickConnectsInstanceIdQuickConnectIdRoute,
  getQuickConnectsInstanceIdQuickConnectIdRoute,
  getQuickConnectsInstanceIdRoute,
  postQuickConnectsInstanceIdQuickConnectIdConfigRoute,
  postQuickConnectsInstanceIdQuickConnectIdNameRoute,
  putQuickConnectsInstanceIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const quickConnectsHandler = app
  .openapi(putQuickConnectsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectsInstanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteQuickConnectsInstanceIdQuickConnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuickConnectsInstanceIdQuickConnectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectsInstanceIdQuickConnectIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postQuickConnectsInstanceIdQuickConnectIdNameRoute, (c) => {
    throw new Error('Not implemented')
  })
