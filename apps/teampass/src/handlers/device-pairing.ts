import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDevicePairingCapabilitiesRoute,
  postDevicePairingClaimRoute,
  postDevicePairingConsumeRoute,
  postDevicePairingCredentialStatusRoute,
  postDevicePairingStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const devicePairingHandler = app
  .openapi(getDevicePairingCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicePairingCredentialStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicePairingClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicePairingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDevicePairingConsumeRoute, (c) => {
    throw new Error('Not implemented')
  })
