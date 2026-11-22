import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWireguardInterfacesIdRoute,
  deleteWireguardPeersIdRoute,
  getWireguardInterfacesIdRoute,
  getWireguardInterfacesRoute,
  getWireguardPeersIdConfigRoute,
  getWireguardPeersIdRoute,
  getWireguardPeersRoute,
  patchWireguardPeersIdRoute,
  postWireguardInterfacesRoute,
  postWireguardPeersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wireGuardInterfacesHandler = app
  .openapi(getWireguardInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWireguardInterfacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWireguardInterfacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWireguardInterfacesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWireguardPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWireguardPeersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWireguardPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWireguardPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchWireguardPeersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWireguardPeersIdConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
