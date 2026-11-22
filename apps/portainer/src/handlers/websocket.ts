import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getWebsocketAttachRoute,
  getWebsocketExecRoute,
  getWebsocketKubernetesShellRoute,
  getWebsocketPodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const websocketHandler = app
  .openapi(getWebsocketAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebsocketExecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebsocketKubernetesShellRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebsocketPodRoute, (c) => {
    throw new Error('Not implemented')
  })
