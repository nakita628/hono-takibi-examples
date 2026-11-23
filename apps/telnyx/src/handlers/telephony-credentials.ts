import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteTelephonyCredentialsIdRoute,
  getTelephonyCredentialsIdRoute,
  getTelephonyCredentialsIdTokenMaterialRoute,
  getTelephonyCredentialsRoute,
  patchTelephonyCredentialsIdRoute,
  postTelephonyCredentialsIdTokenRoute,
  postTelephonyCredentialsRoute,
} from '../routes'

export const getTelephonyCredentialsRouteHandler: RouteHandler<
  typeof getTelephonyCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTelephonyCredentialsRouteHandler: RouteHandler<
  typeof postTelephonyCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteTelephonyCredentialsIdRouteHandler: RouteHandler<
  typeof deleteTelephonyCredentialsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTelephonyCredentialsIdRouteHandler: RouteHandler<
  typeof getTelephonyCredentialsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchTelephonyCredentialsIdRouteHandler: RouteHandler<
  typeof patchTelephonyCredentialsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postTelephonyCredentialsIdTokenRouteHandler: RouteHandler<
  typeof postTelephonyCredentialsIdTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getTelephonyCredentialsIdTokenMaterialRouteHandler: RouteHandler<
  typeof getTelephonyCredentialsIdTokenMaterialRoute
> = async (c) => {
  throw new Error('Not implemented')
}
