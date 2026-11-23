import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postQrcodeContactRoute,
  postQrcodeCryptoRoute,
  postQrcodeEmailRoute,
  postQrcodeGeoRoute,
  postQrcodePhoneRoute,
  postQrcodeRoute,
  postQrcodeSmsRoute,
  postQrcodeTextRoute,
  postQrcodeWifiRoute,
} from '../routes'

export const postQrcodeRouteHandler: RouteHandler<typeof postQrcodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrcodeContactRouteHandler: RouteHandler<typeof postQrcodeContactRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQrcodeCryptoRouteHandler: RouteHandler<typeof postQrcodeCryptoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postQrcodeEmailRouteHandler: RouteHandler<typeof postQrcodeEmailRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrcodeGeoRouteHandler: RouteHandler<typeof postQrcodeGeoRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrcodePhoneRouteHandler: RouteHandler<typeof postQrcodePhoneRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrcodeSmsRouteHandler: RouteHandler<typeof postQrcodeSmsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrcodeTextRouteHandler: RouteHandler<typeof postQrcodeTextRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postQrcodeWifiRouteHandler: RouteHandler<typeof postQrcodeWifiRoute> = async (c) => {
  throw new Error('Not implemented')
}
